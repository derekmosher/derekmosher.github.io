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
            text2 = select('#text2'),
            text3 = select('#text3'),

            logo_safta = select('#logo_safta'),
            logo_safta2 = select('#logo_safta2'),
            logo_safta3_color = select('#logo_safta3_color'),

            logo_safta_class = select('.cls-1'),
            //
            bg1 =  select('#bg1'),
            bg2 =  select('#bg3'),
            bg3 =  select('#bg1'),
            plate1 =  select('#plate1'),
            plate2 = select('#plate2'),
            plate3 = select('#plate3'),
            //
            scarf_1_low = select('#scarf_1_low') , 
            scarf_2_low = select('#scarf_2_low') ,  
            scarf_3_low = select('#scarf_3_low') ,  
            //
            scarf_1_top = select('#scarf_1_top') , 
            scarf_2_top = select('#scarf_2_top') ,  
            scarf_3_top = select('#scarf_3_top') ,  
            ////
            p1_color_cta_orange = "#f56139", // 
            p1_color_cta_ruby = "#990f42",    // ruby
            p2_color_cta_ruby = "#990f42",  //pink
            p2_color_cta_pink = "#ffa3a7", //pink
            p3_color_cta_gold = "#fec02f", //gold
            p3_color_cta_ruby = "#990f42", //ruby
            //
            cta_color_bg_over = "", 
            cta_color_bg_out = "",   
            cta_color_text_over = "",
            cta_color_text_out = "", 
            cta_color_border_over = "",
            cta_color_border_out = "",
            //
            cta = select('#cta'), 
            introBG = select('#introBG'), 
            animationFinished = false,
            tl = gsap.timeline();

            let textGroup = [text1,text2,text3]
            let mySplitText0 = new SplitText(textGroup[0], { type: "words,chars" });
            let chars0 = mySplitText0.chars;
            let words0 = mySplitText0.words;
            let mySplitText1 = new SplitText(textGroup[1], { type: "words,chars" });
            let chars1 = mySplitText1.chars;
            let words1 = mySplitText1.words;
            let mySplitText2 = new SplitText(textGroup[2], { type: "words,chars" });
            let chars2 = mySplitText2.chars;
            let words2 = mySplitText2.words;
            /************** Modify VARIABLES ********************/

/**********************************/
        //Color Vars:
        let new_cta_colors1 = () =>{
            cta_color_bg_over = p1_color_cta_orange ; //p1 default - orange
            cta_color_bg_out = "#fff";    //p1 default - white
            cta_color_text_over = "#fff"; //p1 default - white
            cta_color_text_out =p1_color_cta_ruby;  //p1 default - ruby
            cta_color_border_over = "#fff";
            cta_color_border_out = "#fff";
        }
        let new_cta_colors2 = () =>{
            //ruby bg and pink texzt
            cta_color_bg_over = p2_color_cta_pink; //p1 default - orange 
            cta_color_bg_out =  p2_color_cta_ruby ;    //p1 default - white
            cta_color_text_over = "#fff"; //p1 default - white
            cta_color_text_out =p2_color_cta_pink;  //p1 default - ruby
            cta_color_border_over = "#fff";
            cta_color_border_out = p2_color_cta_ruby ;
            // logo_safta.style.fill = "#ff0000"
        }
        let new_cta_colors3 = () =>{
            //gold bg and ruby texzt
            cta_color_bg_over = p3_color_cta_ruby;  // ruby
            cta_color_bg_out =  p3_color_cta_gold;  //gold
            cta_color_text_over =  "#fff"; 
            cta_color_text_out =p3_color_cta_ruby;  // ruby
            cta_color_border_over =  "#fff"; 
            cta_color_border_out = p3_color_cta_gold; //gold
        }
       let newColors = (newColor) => {
            // gsap.set([lasvegas,sign_r], {fill:newColor });
            // gsap.set([letter_w,letter_y,letter_nn], {stroke:newColor});
            gsap.to([lasvegas,sign_r], {duration:0.8, fill:newColor });
            gsap.to([letter_w,letter_y,letter_nn], {duration:0.8,  stroke:newColor});
            // .to([textGroup], {duration:0.8,  color: p2_color_cta_ruby,ease:"none"}, "<0")
        }
        newColors("#F9F7E8")
        
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
                gsap.set([logo_intro], { scale:0.35, y:"+=267"})
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
                // tl.set([logo_intro,introBG,bgexit], {alpha:0}, "<")
            }

            tl
            .call(new_cta_colors1 , {}, "<0")
            .from([plate1,plate2,plate3], {duration:14, rotation:-70, ease:"none", onComplete:()=>animationFinished=true}, "<0.0")
            .from([bg1], {duration:4.5, scale:1.4, ease:"none"}, "<0.0")
            .from(chars0, {
                delay:0.2,
                duration: 0.6,
                opacity: 0,
                scale: 0,
                y: 15,
                rotationX: 130,
                // transformOrigin: "0% 50% -50",
                ease:"power1.out",
                stagger: 0.04
              }, "<0.0")
            .from(cta, {duration:1.8, alpha: 0,ease:"none"}, "<0.5")
            .to([logo_intro], {duration:0.8, alpha: 1, ease:"none"}, "<0.7")
            .from(scarf_1_low, {duration:5, scale:scaleAmt1, ease:"none"}, "<0.0")
            .to(scarf_1_top, {duration:5,  y:"-=10", scale:scaleAmt2, ease:"none"}, "<0.0")

            ////p2
            .from([p2], {duration:0.8, alpha: 0, ease:"none"}, "<4.5")
            .to([cta], {duration:0.8,backgroundColor: p2_color_cta_ruby, borderColor: p2_color_cta_ruby, color: p2_color_cta_pink,ease:"none"}, "<0")
            .to([textGroup], {duration:0.8,  color: p2_color_cta_ruby,ease:"none"}, "<0")
            .to([logo_safta], {duration:0.6,  fill: p2_color_cta_ruby,ease:"none"}, "<0")
            .call(new_cta_colors2 , {}, "<0")
            .call(newColors, ["#000"], "<0")
            .from([bg2], {duration:4, scale:1.4, ease:"none"}, ">-0.5")
            .from(chars1, {
                delay:0.2,
                duration: 0.6,
                opacity: 0,
                scale: 0,
                y: 15,
                rotationX: 130,
                // transformOrigin: "0% 50% -50",
                ease:"power1.out",
                stagger: 0.04
              }, "<0.0")
            .from(scarf_2_low, {duration:5, scale:scaleAmt1, ease:"none"}, "<0.0")
            .to(scarf_2_top, {duration:5, y:"-=10", scale:scaleAmt2, ease:"none"}, "<0.0")

            ////p3
            .from([p3], {duration:0.8, alpha: 0, ease:"none"}, "<4.5")
            .to([cta], {duration:0.8,backgroundColor: p3_color_cta_gold, borderColor: p3_color_cta_gold, color: p3_color_cta_ruby,ease:"none"}, "<0")
            .to(textGroup, {duration:0.8,  color: "#fff",ease:"none"}, "<0")
            .to([logo_safta], {duration:0.8,  fill:"#fff",ease:"none"}, "<0")
            .call(newColors, ["#F9F7E8"], "<0")
            .call(new_cta_colors3, {}, "<0")
            .from([bg3], {duration:4, scale:2, ease:"power1.out"}, "<-0.5")
            .from(chars2, {
                delay:0.2,
                duration: 0.6,
                opacity: 0,
                scale: 0,
                y: 15,
                rotationX: 130,
                // transformOrigin: "0% 50% -50",
                ease:"power1.out",
                stagger: 0.04
              }, "<0.0")
            .from(scarf_3_low, {duration:5, scale:scaleAmt1, ease:"power1.out"}, "<0.0")
            .to(scarf_3_top, {duration:5,  y:"-=10", scale:scaleAmt2, ease:"power1.out"}, "<0.0")
		}
        animate();

/******************  //end of MAIN ANIMATION  ******************/    
    
        
/********************  EVENTS  ********************/ 
        let myInterval;
        let rotateAmt = 0;
        let overBanner = false;
        let rotatePlate = () =>{
            rotateAmt+=0.25;
            plate3.style.transform = "rotate("+rotateAmt+"deg)";
        }
        wrapper.addEventListener('mouseover', (e) => {
            // rotateAmt_increment_temp = rotateAmt_increment;
            overBanner = true;
            if(animationFinished){
                myInterval = setInterval(rotatePlate, 20); 
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
  
    // politeInit()
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