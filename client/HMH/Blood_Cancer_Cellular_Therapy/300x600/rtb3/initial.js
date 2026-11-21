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
            bg_blue = select('#bg_blue'),

            textGroup1 = select('#textGroup1'),
            text1_arr = [select('#text11'),select('#text12'),select('#text13'),select('#text14'),select('#text15'),select('#text16')],
            text12_arr = [select('#text11'),select('#text12'),select('#text13')],
            text35_arr = [select('#text14'),select('#text15'),select('#text16')],
            text31 = select('#text31'),
            text32 = select('#text32'),
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
            var CTA_OVER_SCALE = 1.06;   // rollover scale amount

            // Frame positions: how far the copy slides up (px) to reach each frame
            var F2_Y = -62,
                F3_Y = -120,
                EASE = "power3.inOut";
/***************** //end of VARIABLES  *****************/

/******************  START STATE  ******************/
        function setStart(){
            gsap.set(bg_blue, {alpha: 0});
            gsap.set(textGroup1, {y: 0});
            gsap.set(text1_arr, {alpha: 0, y: 14, color: colors.dark});
            gsap.set([text31, text32], {yPercent: 105});
            gsap.set(cta, {scale: 1});
            gsap.set(shine, {x: 0});
        }

/******************  MAIN ANIMATION  ******************/
		function animate() {
            setStart();
            tl
            //////// FRAME 1 - headline starts ////////
            .to(text12_arr, {duration:0.6, alpha:1, y:0, stagger:0.15, ease:"power2.out"}, 0.4)

            //////// FRAME 2 - copy slides up, rest of headline in ////////
            .addLabel("f2", 3.2)
            .to(textGroup1, {duration:0.8, y:F2_Y, ease:EASE}, "f2")
            .to(text35_arr, {duration:0.55, alpha:1, y:0, stagger:0.12, ease:"power2.out"}, "f2+=0.45")

            //////// FRAME 3 - end frame: blue bg, KNOW THE DIFFERENCE ////////
            .addLabel("f3", 6.6)
            .to(textGroup1, {duration:0.8, y:F3_Y, ease:EASE}, "f3")
            .to(bg_blue, {duration:0.8, alpha:1, ease:"power1.inOut"}, "f3")
            .to(text1_arr, {duration:0.8, color:colors.white, ease:"power1.inOut"}, "f3")
            .to(text31, {duration:0.6, yPercent:0, ease:"power3.out"}, "f3+=0.55")
            .to(text32, {duration:0.6, yPercent:0, ease:"power3.out"}, "f3+=0.72")

            //////// CTA highlight (end frame only - no scale) ////////
            .to(shine, {duration:0.35, x:220, ease:"power1.inOut"}, "f3+=1.7")   // highlight sweeps across CTA
            .to({}, {duration:2.4}); // hold end frame
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
                gsap.to(bannerCover, {duration:0.4, alpha:0, ease:"none", onComplete:function(){
                    tl.restart();
                }});
            }});
        }

/********************  EVENTS  ********************/
        // Rollover: CTA scales up a little, scales back down on rolloff
        bgexit.addEventListener('mouseover', (e) => {
            gsap.to(cta, {duration:0.9, scale:CTA_OVER_SCALE, ease:"power4.out", overwrite:"auto"});
        });
        bgexit.addEventListener('mouseout', (e) => {
            gsap.to(cta, {duration:0.45, scale:1, ease:"power4.out", overwrite:"auto"});
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
