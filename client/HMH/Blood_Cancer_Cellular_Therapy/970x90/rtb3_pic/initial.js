"use strict";
window.onload = function() {
/******************** VARIABLES  ********************/
function politeInit(){
        /************** LOOP SETTING ********************/
        // How many times the whole banner plays (frame 1 > 2 > 3), then it
        // stops and holds on frame 3 (end frame).   >>>  Set to 1, 2 or 3  <<<
        // One play is ~11.4s (under 15s), so it loops 3 times.
        var LOOPS = 3;

        /************** Create VARIABLES ********************/
        var select = function(s) {
                return document.querySelector(s);
            },
            selectAll = function(s) {
                return document.querySelectorAll(s);
            },
            bannerCover = select('#bannerCover'),
            preCover = select('#preCover'),
            photoWrap = select('#photoWrap'),
            photoJump = select('#photoJump'),
            photo = select('#photo'),

            textGroup1 = select('#textGroup1'),
            text1_arr = [select('#text11'),select('#text12')],
            text11_arr = [select('#text11')],
            text35_arr = [select('#text12')],
            text31 = select('#text31'),   // KNOW
            text33 = select('#text33'),   // THE
            text32 = select('#text32'),   // DIFFERENCE
            shine = select('#shine'),
            //
            bgexit = select('#bgexit'),
            cta = select('#cta'),
            colors ={},
            loopCount = 0,
            tl = gsap.timeline({paused:true, onComplete: nextLoop});

            /************** Modify VARIABLES ********************/
            colors.dark = "#0f1938";
            colors.white = "#ffffff";
            var CTA_OVER_SCALE = 1.08;   // rollover scale amount

            // Frame positions: how far the copy slides up (px) to reach each frame
            // Photo framing: one photo that jumps (position + size) between frames and keeps scaling down slowly.
            // framed(w, faceX, faceY) = photo of CSS width w, placed so the doctor's face (photo point FACE_X, FACE_Y)
            // sits at (faceX, faceY) inside #photoWrap. The photo must always cover the wrapper (249 x 90).
            var PIC_NATURAL = 325;     // CSS width of #photo / #photoJump (photo is 325 x 144)
            var FACE_X = 207, FACE_Y = 55;   // the doctor's face in the photo (natural px)
            function framed(w, fx, fy) { var k = w / PIC_NATURAL; return { left: fx - FACE_X * k, top: fy - FACE_Y * k, width: w, height: w * 144 / 325 }; }
            var PIC1 = framed(334.8, 150, 30),     // Frame 1 start: larger than the guide (x1.03), face stays at the same spot
                PIC2 = framed(325,   150, 30),     // Frame 2 start: guide size (x1.0)
                PIC3 = framed(315.3, 150, 30),     // Frame 3 resting size: x0.97 (with the end scale below, the photo ends ~6% smaller than the guide)
                F2_Y = -10,
                F3_Y = -21,
                F3_X = 0,                  // no sideways movement: all copy is centered in the blue area (x 249-723)
                // Slow scale of the photo (child, scales from the face). It keeps shrinking across all 3 frames and
                // each frame's scale-down starts together with that frame's jump, so there is never a pause.
                SCALE_START = 1.255,        // Frame 1 start (bigger = more movement; total start size = PIC1 x this)
                SCALE_F1_END = 1.12,       // reached as the banner goes to Frame 2
                SCALE_F2_END = 1.03,       // reached as the banner goes to Frame 3
                SCALE_END = 0.97,           // final resting size
                DRIFT_F3_TIME = 4.2,       // seconds for the Frame 3 scale-down to ease to rest
                DRIFT_X = 0,               // no sideways movement
                SCALE_ORIGIN = "207px 55px", // point the slow scale grows from: the doctor's face. Use "50% 50%" for the image center
                DRIFT_EASE = "power1.out",
                EASE = "power3.inOut";
            // Both photo layers use hand-written transforms (full precision - GSAP rounds scale to 3 decimals,
            // which made the photo step slightly while scaling slowly).
            var pj = { x: 0, y: 0, scale: 1 };       // parent: jump between frames
            var pd = { s: 1, x: 0 };                 // child: slow scale + slow sideways drift (x in banner px)
            function applyJump()  { photoJump.style.transform = "translate3d(" + pj.x + "px," + pj.y + "px,0) scale(" + pj.scale + ")"; applyDrift(); }   // drift x is divided by the parent scale, so it stays in banner px
            function applyDrift() { photo.style.transform = "translate3d(" + (pd.x / pj.scale) + "px,0,0) scale(" + pd.s + ")"; }
            function jumpTo(p) { return { x: p.left, y: p.top, scale: p.width / PIC_NATURAL }; }   // scale by the photo's natural CSS width
/***************** //end of VARIABLES  *****************/

/******************  START STATE  ******************/
        function setStart(){
            Object.assign(pj, jumpTo(PIC1)); applyJump();
            photo.style.transformOrigin = SCALE_ORIGIN;
            pd.s = SCALE_START; pd.x = 0; applyDrift();
            gsap.set(textGroup1, {y: 0, x: 0});
            gsap.set(text1_arr, {alpha: 0, y: 14});
            gsap.set([text31, text33, text32], {yPercent: 105});
            gsap.set(cta, {scale: 1});
            gsap.set(shine, {x: 0});
        }

/******************  MAIN ANIMATION  ******************/
		function animate() {
            setStart();
            tl
            //////// FRAME 1 - headline starts ////////
            .to(text11_arr, {duration:0.6, alpha:1, y:0, ease:"power2.out"}, 0.4)

            //////// PHOTO - ONE continuous, smooth scale-down from the doctor's face across the whole play (no jumps, no sideways movement) ////////
            .to(pd, {s:SCALE_F1_END, duration:3.15, ease:DRIFT_EASE, onUpdate:applyDrift}, 0)

            //////// FRAME 2 - copy slides up, rest of headline in ////////
            .addLabel("f2", 3.2)
            .to(pj, Object.assign({duration:0.8, ease:EASE, onUpdate:applyJump}, jumpTo(PIC2)), "f2")                       // faster scale step to Frame 2 size
            .to(pd, {s:SCALE_F2_END, duration:3.35, ease:DRIFT_EASE, onUpdate:applyDrift}, "f2")                              // slow scale-down starts WITH the step
            .to(textGroup1, {duration:0.8, y:F2_Y, ease:EASE}, "f2")
            .to(text35_arr, {duration:0.55, alpha:1, y:0, stagger:0.12, ease:"power2.out"}, "f2+=0.45")

            //////// FRAME 3 - end frame: KNOW THE DIFFERENCE ////////
            .addLabel("f3", 6.6)
            .to(pj, Object.assign({duration:0.8, ease:EASE, onUpdate:applyJump}, jumpTo(PIC3)), "f3")                       // faster scale step to Frame 3 size
            .to(pd, {s:SCALE_END, duration:DRIFT_F3_TIME, ease:DRIFT_EASE, onUpdate:applyDrift}, "f3")                       // slow scale-down starts WITH the step, eases to rest
            .to(textGroup1, {duration:0.8, y:F3_Y, x:F3_X, ease:EASE}, "f3")
            .to(text31, {duration:0.6, yPercent:0, ease:"power3.out"}, "f3+=0.55")   // KNOW
            .to(text33, {duration:0.6, yPercent:0, ease:"power3.out"}, "f3+=0.67")   // THE
            .to(text32, {duration:0.6, yPercent:0, ease:"power3.out"}, "f3+=0.79")   // DIFFERENCE

            //////// CTA highlight (end frame only - no scale) ////////
            .to(shine, {duration:0.35, x:230, ease:"power1.inOut"}, "f3+=1.7")   // highlight sweeps across CTA
            .to({}, {duration:2.4}, "f3+=2.05"); // hold end frame (banner ends 11.05s)
		}
        animate();

/******************  PRELOAD COVER  ******************/
        // White cover (under the border) hides the banner until fonts are ready,
        // with a spinning logo loader on top.
        // Then the cover fades out and the animation starts.
        var MIN_SPIN = 1000;               // loader spins at least this long (ms)
        var spinStart = Date.now();
        var started = false;
        function startBanner(){
            if (started) { return; }
            started = true;
            gsap.to(preCover, {duration:0.4, alpha:0, ease:"none", onComplete:function(){ preCover.style.display = "none"; }});
            tl.play();
        }
        // Start once the banner is ready AND the loader has spun for MIN_SPIN.
        // If the banner isn't ready yet, the loader just keeps spinning.
        function startWhenReady(){
            var wait = Math.max(0, MIN_SPIN - (Date.now() - spinStart));
            setTimeout(startBanner, wait);
        }
        if (document.fonts && document.fonts.load) {
            Promise.all([
                document.fonts.load('500 28px "Poppins"'),
                document.fonts.load('600 18px "Poppins"'),
                document.fonts.load('700 28px "Poppins"'),
                document.fonts.load('500 40px "Oswald"')
            ]).then(startWhenReady, startWhenReady);
            setTimeout(startBanner, 4000);   // safety: never leave the cover up
        } else {
            startWhenReady();
        }

/******************  //end of MAIN ANIMATION  ******************/

/******************  LOOPING  ******************/
        function nextLoop(){
            loopCount++;
            if (loopCount >= LOOPS) { return; }   // done: stay on end frame (frame 3)
            // quick fade to white, reset to frame 1, fade back in, play again
            gsap.to(bannerCover, {duration:0.4, alpha:1, ease:"none", onComplete:function(){
                tl.pause(0);
                Object.assign(pj, jumpTo(PIC1)); applyJump(); pd.s = SCALE_START; pd.x = 0; applyDrift();   // pause(0) suppresses onUpdate, so reset the photo by hand (it is hidden under the white cover)
                gsap.to(bannerCover, {duration:0.4, alpha:0, ease:"none"});
                tl.restart();   // restart together with the fade-in, so the photo is already moving
            }});
        }

/********************  EVENTS  ********************/
        // Rollover: CTA scales up a little, scales back down on rolloff
        bgexit.addEventListener('mouseover', (e) => {
            gsap.to(cta, {duration:0.25, scale:CTA_OVER_SCALE, ease:"power2.out", overwrite:"auto"});
        });
        bgexit.addEventListener('mouseout', (e) => {
            gsap.to(cta, {duration:0.25, scale:1, ease:"power2.out", overwrite:"auto"});
        });

        let type = 'click';
        let clickable = selectAll('.clickable');

        clickable.forEach(element => element.addEventListener(type, function(e) {
            console.log("click");   // exit: replace with Enabler.exit(...) / window.open(clickTag)
            return false;
        }, false));
	};
/****************** //end of  EVENTS  ******************/
politeInit()
}
