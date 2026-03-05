   "use strict";
window.onload =  () => {	
    //gsap blur effect
    (()=> {
        const blurProperty = gsap.utils.checkPrefix("filter"),
                blurExp = /blur\((.+)?px\)/,
                getBlurMatch = target => (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];

        gsap.registerPlugin({
            name: "blur",
            get(target) {
                return +(getBlurMatch(target)[1]) || 0;
            },
            init(target, endValue) {
                let data = this,
                      filter = gsap.getProperty(target, blurProperty),
                      endBlur = "blur(" + endValue + "px)",
                      match = getBlurMatch(target)[0];
                if (filter === "none") {
                    filter = "";
                }
                if (match) {
                    endValue = filter.substr(0, match.index) + endBlur + filter.substr(match.index + endBlur.length);
                } else {
                    endValue = filter + endBlur;
                    filter += filter ? " blur(0px)" : "blur(0px)";
                }
                data.target = target; 
                data.interp = gsap.utils.interpolate(filter, endValue); 
            },
            render(progress, data) {
                data.target.style[blurProperty] = data.interp(progress);
            }
        });
    })();
    
/******************** VARIABLES  ********************/ 
	let politeInit = () =>{		
        /************** Create VARIABLES ********************/
        let select = (s) =>{
                return document.querySelector(s);
            },
            selectAll = (s) => {
                return document.querySelectorAll(s);
            },
            bannerCover = select('#bannerCover'),
            wrapper = select('#wrapper') , 
            logo_intro = select('#logo_intro'), 
            letter_w = select('#w'),
            letter_y = select('#y'),
            letter_nn = select('#nn'),
            lasvegas = select('#lasvegas'),
            sign_r = select('#r'),
            //
            logoIntro = true,
            //
            text1 = select('#text1'),
            text1_date = select('#text1_date'),
            logo_rev= select('#logo_rev'),
            // popper1 = select('#popper1'),
            // popper2 = select('#popper2'),
            cta_color_bg_over = "#7e0521", 
            cta_color_bg_out = "linear-gradient(0deg,rgba(50, 7, 16, 1) 5%, rgba(124, 29, 51, 1) 98%)",   

            cta_color_text_over = "#fff",
            cta_color_text_out = "#fff", 
            cta_color_border_over = "#460001",
            cta_color_border_out = "#460001",
            //
            cta = select('#cta'), 
            introBG = select('#introBG'), 
            animationFinished = false,
            tl = gsap.timeline();

            let textGroup = [text1];
            let mySplitText0 = new SplitText(textGroup[0], { type: "words,chars" });
            let chars0 = mySplitText0.chars;
            let words0 = mySplitText0.words;

            /************** Modify VARIABLES ********************/

/**********************************/
        //Color Vars:

        
/******************  MAIN ANIMATION  ******************/ 
		let animate = () =>  { 
            gsap.registerPlugin(DrawSVGPlugin);
            gsap.registerPlugin(SplitText);
            gsap.registerEffect({
                name: "blurIn",
                effect: (targets, config) => {
                    let tlEffect = gsap.timeline();
                    tlEffect
                        .from(targets, {duration: config.duration, blur:config.blur, stagger:config.stagger, force3D:true, ease:"sine"})
                        .from(targets, {duration: config.duration, stagger:config.stagger, alpha:0,ease:"none"}, "<")
                        .from(targets, {duration: 6, stagger:config.stagger, scale:1.1,ease:"Power4.out"}, "<")
                        return tlEffect;
                },
                defaults: {duration:0.8, stagger:5.5, blur:10},
                extendTimeline: true,
            });
            gsap.registerEffect({
                name: "fadeIn",
                effect: (targets, config) => {
                    let tlEffect = gsap.timeline();
                    tlEffect
                        .from(targets, {duration: config.duration, y:config.y, stagger:config.stagger, ease:"power2"})
                        .from(targets, {duration: config.duration, stagger:config.stagger, alpha:0, ease:"none"}, "<")
                        return tlEffect;
                },
                defaults: {duration: 1.3, y:"-=7", stagger:5.5},
                extendTimeline: true,
            });
            gsap.registerEffect({
                name: "fadeOut",
                effect: (targets, config) => {
                    if(targets.length<1) return;
                    let tlEffect = gsap.timeline();
                    tlEffect
                        .to(targets, {duration: config.duration, y:config.y, stagger:config.stagger, ease:"power2.in"})
                        .to(targets, {duration: config.duration, stagger:config.stagger, alpha:0, ease:"none"}, "<")
                        return tlEffect;
                },
                defaults: {duration: 1.3, y:"-=7", stagger:5.5},
                extendTimeline: true,
            });
            ///////////////////////////////////////////////////////////////
            let  moveLogo =() =>{
                gsap.set([logo_intro], { scale:0.39, x:"0", y:"+=265"})
            } 
            let scaleAmt1 = 1.14, scaleAmt2 = 1.09;

		    tl.to([bannerCover], {duration:0.5, alpha:0, ease:"none"})
            
            if(logoIntro) {
                tl
                 .from(letter_w, {duration:0.5, drawSVG: 0, ease:"sine.in"}, "<")
                .from(letter_y, {duration:0.3, drawSVG: 0, ease:"sine.in"}, ">")
                .from(letter_nn, {duration:0.8, drawSVG: 0, ease:"sine.inOut"}, ">")
                .from(lasvegas, {duration:0.7, y:"-=10", alpha: 0, ease:"sine"}, ">")
                .from(sign_r, {duration:0.5, alpha: 0, ease:"none"}, "<")
                .to([ logo_intro, introBG, bgexit], {duration:0.6, alpha:0,onComplete:moveLogo, ease:"none"}, ">1")
           
            } else {
            }

            tl
            .from(logo_rev, {delay:0.3, duration: 1.6,
                opacity: 0,
                scale: 0.9,
                ease: "elastic.out(1,0.5)",
              }, "<0.0")

            .from(text1_date, { delay:0.5,duration: 0.8,opacity: 0, ease: "none)" }, "<0.0")
            .from(words0, {
                delay:0.3,
                duration: 1.6,
                opacity: 0,
                scale: 0.2,
                ease: "elastic.out(1,0.5)",
                stagger: 0.09
              }, "<0.1")
  
            .from(cta, {duration:0.8, alpha: 0,ease:"none"}, "<0.6")
            .to([logo_intro], {duration:0.8, alpha: 1, ease:"none"}, "<0.5")
		}
        animate();

/******************  //end of MAIN ANIMATION  ******************/    
    
        
/********************  EVENTS  ********************/ 
        let myInterval;
        let overBanner = false;

        wrapper.addEventListener('mouseover', (e) => {
            // rotateAmt_increment_temp = rotateAmt_increment;
            overBanner = true;
            if(animationFinished){
                // myInterval = setInterval(rotatepic, 20); 
            }
        });
        wrapper.addEventListener('mouseout', (e) => {   
            overBanner = false;
            clearInterval(myInterval);    
         });
        ////
        cta.addEventListener('mouseover', (e) => {
            e.target.style.background = cta_color_bg_over;
            e.target.style.color =  cta_color_text_over ;
            e.target.style.borderColor =  cta_color_border_over ;
        });
        cta.addEventListener('mouseout', (e) => { 
            e.target.style.background = cta_color_bg_out ;
            e.target.style.color =  cta_color_text_out ;
            e.target.style.borderColor =  cta_color_border_out ;  
            // clearInterval(myInterval);
        });
        let type = ((Modernizr.touchevents)&&(!isChrome)) ? 'touchend' : 'click',
        clickable = selectAll('.clickable');

        clickable.forEach(element => element.addEventListener(type, (e)=> {
            Enabler.exit('Exit');
            return false;
        }, false));
    };
  
/****************** //end of  EVENTS  ******************/   

/******************** ENABLER  ********************/     
let init = () => {
    if (Enabler.isPageLoaded()) {
        politeInit();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
    }
};
if (Enabler.isInitialized()) {
    init();
} else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
}

/***************** //end ofENABLER  *****************/   
   
}