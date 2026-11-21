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
            text1_arr = [select('#text11'),select('#text12'),select('#text13'),select('#text14')],
            text12_arr = [select('#text11'),select('#text12')],
            text35_arr = [select('#text13'),select('#text14')],
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
            // framed(w, faceX, faceY) = photo of CSS width w, placed so the doctor's face (photo point 410,140)
            // sits at (faceX, faceY) inside #photoWrap. The photo must always cover the wrapper (291 x 250).
            var PIC_NATURAL = 578;     // CSS width of #photo / #photoJump
            function framed(w, fx, fy) { var k = w / PIC_NATURAL; return { left: fx - 410 * k, top: fy - 140 * k, width: w, height: w * 386 / 579 }; }
            var PIC1 = framed(520,   145.5, 90),       // Frame 1 start: larger than the end frame, face centered horizontally and a little high
                PIC2 = framed(486.4, 154.85, 77.35),   // Frame 2 start: halfway between Frame 1 and Frame 3 (size and face position)
                PIC3 = framed(452.8, 164.2, 64.7),     // Frame 3 resting size = framing of the guide
                F2_Y = -32,
                F3_Y = -59,
                // Slow scale of the photo (child, scales from the face). It keeps shrinking across all 3 frames and
                // each frame's scale-down starts together with that frame's jump, so there is never a pause.
                SCALE_START = 1.22,        // Frame 1 start (bigger = more movement)
                SCALE_F1_END = 1.13,       // reached as the banner goes to Frame 2
                SCALE_F2_END = 1.06,       // reached as the banner goes to Frame 3
                SCALE_END = 1,             // final resting size
                DRIFT_F3_TIME = 4.2,       // seconds for the Frame 3 scale-down to ease to rest
                DRIFT_X = 3,               // slow sideways drift to the right (px) while the photo scales down, in each of the 3 frames
                SCALE_ORIGIN = "410px 140px", // point the slow scale grows from: the doctor's face. Use "50% 50%" for the image center
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
            gsap.set(textGroup1, {y: 0});
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
            .to(text12_arr, {duration:0.6, alpha:1, y:0, stagger:0.15, ease:"power2.out"}, 0.4)

            //////// PHOTO - Frame 1: slow scale-down (ease out), finishes as the banner moves to Frame 2 ////////
            .to(pd, {s:SCALE_F1_END, x:DRIFT_X, duration:3.15, ease:DRIFT_EASE, onUpdate:applyDrift}, 0)

            //////// FRAME 2 - copy slides up, rest of headline in ////////
            .addLabel("f2", 3.2)
            .to(textGroup1, {duration:0.8, y:F2_Y, ease:EASE}, "f2")
            .to(pj, Object.assign({duration:0.8, ease:EASE, onUpdate:applyJump}, jumpTo(PIC2)), "f2")                       // jump to Frame 2 size
            .to(pd, {s:SCALE_F2_END, duration:3.35, ease:DRIFT_EASE, onUpdate:applyDrift}, "f2")                              // scale-down starts WITH the jump
            .to(pd, {x:0, duration:0.8, ease:EASE, onUpdate:applyDrift}, "f2")                                                  // drift returns to 0 during the jump (same ease)
            .to(pd, {x:DRIFT_X, duration:2.55, ease:DRIFT_EASE, onUpdate:applyDrift}, "f2+=0.8")                                // then drifts right again
            .to(text35_arr, {duration:0.55, alpha:1, y:0, stagger:0.12, ease:"power2.out"}, "f2+=0.45")

            //////// FRAME 3 - end frame: KNOW THE DIFFERENCE ////////
            .addLabel("f3", 6.6)
            .to(textGroup1, {duration:0.8, y:F3_Y, ease:EASE}, "f3")
            .to(pj, Object.assign({duration:0.8, ease:EASE, onUpdate:applyJump}, jumpTo(PIC3)), "f3")                       // jump to Frame 3 size
            .to(pd, {s:SCALE_END, duration:DRIFT_F3_TIME, ease:DRIFT_EASE, onUpdate:applyDrift}, "f3")                       // scale-down starts WITH the jump, eases to rest
            .to(pd, {x:0, duration:0.8, ease:EASE, onUpdate:applyDrift}, "f3")                                                 // drift returns to 0 during the jump (same ease)
            .to(pd, {x:DRIFT_X, duration:DRIFT_F3_TIME - 0.8, ease:DRIFT_EASE, onUpdate:applyDrift}, "f3+=0.8")               // then drifts right again, ending with the scale
            .to(text31, {duration:0.6, yPercent:0, ease:"power3.out"}, "f3+=0.55")   // KNOW
            .to(text33, {duration:0.6, yPercent:0, ease:"power3.out"}, "f3+=0.67")   // THE
            .to(text32, {duration:0.6, yPercent:0, ease:"power3.out"}, "f3+=0.79")   // DIFFERENCE

            //////// CTA highlight (end frame only - no scale) ////////
            .to(shine, {duration:0.35, x:270, ease:"power1.inOut"}, "f3+=1.7")   // highlight sweeps across CTA
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
                Object.assign(pj, jumpTo(PIC1)); applyJump(); pd.s = SCALE_START; applyDrift();   // pause(0) suppresses onUpdate, so reset the photo by hand (it is hidden under the white cover)
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
