"use strict";
window.onload = function() {
	 
    //gsap blur effect
    (function() {
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
	function politeInit(){	
       // Dynamic Content variables and sample values
       Enabler.setProfileId(10945059);
       var devDynamicContent = {};
   
       devDynamicContent.WLV_awakening_v3_main = [{}];
       devDynamicContent.WLV_awakening_v3_main[0]._id = 0;
       devDynamicContent.WLV_awakening_v3_main[0].logoIntro = false;
       devDynamicContent.WLV_awakening_v3_main[0].version = "whale";
       devDynamicContent.WLV_awakening_v3_main[0].interation = "base";
       devDynamicContent.WLV_awakening_v3_main[0].interation = "save";
       devDynamicContent.WLV_awakening_v3_main[0].interation = "offer";
       devDynamicContent.WLV_awakening_v3_main[0].interation = "save30";

       devDynamicContent.WLV_awakening_v3_main[0].text = "THE SHOW";
       devDynamicContent.WLV_awakening_v3_main[0].cta = "BUY TICKETS";
       devDynamicContent.WLV_awakening_v3_main[0].cta_colorBG = "#d16b3a";
       devDynamicContent.WLV_awakening_v3_main[0].cta_colorBG_over = "#1e8fd3";
       devDynamicContent.WLV_awakening_v3_main[0].cta_colorTxt = "#FFF";
       devDynamicContent.WLV_awakening_v3_main[0].cta_colorTxt_over = "#FFF";

       devDynamicContent.WLV_awakening_v3_300x600 = [{}];
       devDynamicContent.WLV_awakening_v3_300x600[0]._id = 0;
       devDynamicContent.WLV_awakening_v3_300x600[0].promo = "";
       devDynamicContent.WLV_awakening_v3_300x600[0].promo = 'SAVE UP TO<br><span style="font-size:320%; letter-spacing: 1.3pt;">30%</span>';
    //    devDynamicContent.WLV_awakening_v3_300x600[0].promo = 'LATE NIGHT<br>SPECIAL OFFER';

        devDynamicContent.WLV_awakening_v3_300x600[0].pic_bg = {};
        devDynamicContent.WLV_awakening_v3_300x600[0].pic_bg.Type = "file";
        devDynamicContent.WLV_awakening_v3_300x600[0].pic_bg.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20250429105409162_whale_bg_base.jpg";
        //    devDynamicContent.WLV_awakening_v3_300x600[0].pic_bg.Url = "https://s0.2mdn.net/creatives/assets/5437521/whale_bg_offer.jpg";
           devDynamicContent.WLV_awakening_v3_300x600[0].pic_bg.Url = "https://s0.2mdn.net/creatives/assets/5437521/whale_bg_save.jpg";

        devDynamicContent.WLV_awakening_v3_300x600[0].pic_up = {};
        devDynamicContent.WLV_awakening_v3_300x600[0].pic_up.Type = "file";
        devDynamicContent.WLV_awakening_v3_300x600[0].pic_up.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20250429110657202_whale_up_base.png";
        //    devDynamicContent.WLV_awakening_v3_300x600[0].pic_up.Url = "https://s0.2mdn.net/creatives/assets/5437521/whale_up_offer.png";
           devDynamicContent.WLV_awakening_v3_300x600[0].pic_up.Url = "https://s0.2mdn.net/creatives/assets/5437521/whale_up_save.png";


       Enabler.setDevDynamicContent(devDynamicContent);

        var select = function(s) {
                return document.querySelector(s);
            },
            selectAll = function(s) {
                return document.querySelectorAll(s);
            },
            bannerCover = select('#bannerCover'),
            border = select('#border'),
            bg = select('#wrapper'),
            logo = select('#logo'), 
            letter_w = select('#w'),
            letter_y = select('#y'),
            letter_nn = select('#nn'),
            lasvegas = select('#lasvegas'),
            sign_r = select('#r'),
            // startingAt = select('#startingAt'),
            titleWrap = select('#titleWrap'),
            titleArr = [
                select('#text_letter5'),
                select('#text_letter6'),
                select('#text_letter4'),
                select('#text_letter7'),
                select('#text_letter3'),
                select('#text_letter8'),
                select('#text_letter2'),
                select('#text_letter9'),
                select('#text_letter1'),
                select('#text_letter10'),
      
            ],
            cta = select('#cta'), 
            text_produced_group = select('#text-produced-group'),     
            text_main = select('#text-main'), 
            text_save = select('#text-save'),
            text_offer = select('#text-offer'),
            saveTag = select('#saveTag'),
            starContainer = select('#star-container'),
            // stars = generateRandomStars(50,300,310),

            imgs = [],
            pics = [],
            dc = dynamicContent.WLV_awakening_v3_main[0],
            dcSize = dynamicContent.WLV_awakening_v3_300x600[0],
            logoIntro = dc.logoIntro,
            coordinate_alt = 0,
            tl = gsap.timeline();

            pics.push( dcSize.pic_bg.Url );
            pics.push( dcSize.pic_up.Url );

            function shuffle(array) {
                     let currentIndex = array.length,  randomIndex;
                    while (currentIndex != 0) {
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex--;
                        [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex], array[currentIndex]];
                    }
                 return array;
            }
            // shuffle(titleArr);

/***************** //end of VARIABLES  *****************/
        cta.style.backgroundColor = dc.cta_colorBG;
        cta.style.color = dc.cta_colorTxt;
        cta.innerHTML = dc.cta;
        text_main.innerHTML = dc.text
        
        if(dc.interation == "save"  || dc.interation == "offer" ) {
            gsap.set(titleWrap, {scale: 1, y:"-59px"})
            gsap.set(text_main, {y:"-58px"})
            gsap.set(text_produced_group, { y:"-70px"})
            gsap.set(cta, { y:"-78px"})
            coordinate_alt = -58;
        } else if (dc.interation == "save30"){
            gsap.set(titleWrap, {scale: 1, y:"-59px"})
            gsap.set(text_main, {y:"-58px"})
            gsap.set(text_produced_group, { y:"-80px"})
            gsap.set(cta, { y:"-102px"})
            gsap.set(text_save, { y:"-22px"})
            coordinate_alt = -58;

        }
        if(dc.interation == "save") text_save.innerHTML = dcSize.promo;
        if(dc.interation == "save30") text_save.innerHTML = dcSize.promo;

        if (dc.interation == "offer") text_offer.innerHTML= dcSize.promo;
     
        /*******  PRELOADING IMAGES  *****/      
		function preloadImages(srcs, callback) {
		    var img;
		    var remaining = srcs.length;
		    for(var i = 0; i < srcs.length; i++) {
                var product = {};
                
		        img = new Image();
		        img.onload = function() {
		            --remaining;
		            if (remaining <= 0) {
		                callback();
		            }
		        };
		        img.src = srcs[i];               
                imgs[i] = img;
		    }
		}
		preloadImages(pics, imagesPreloaded);

		function imagesPreloaded() {
            for(var i = 0; i < imgs.length; i++) {
                var div = document.createElement('div');
                div.className = "imageDiv";
                div.id= "imageDiv" + i;
                div.style.background = "url(" + imgs[i].src + ") no-repeat";
                div.style.backgroundPosition = "50% 40%";
                div.style.backgroundSize = "cover";
                
                console.log(div)
                console.log(div.id)
                if(i == 1) {
                    console.log("last image")
                    div.style.zIndex = 1000;
                }
                imagesWrap.appendChild(div);
            }

            animate();
		}
        gsap.registerPlugin(DrawSVGPlugin);

/******************  MAIN ANIMATION  ******************/ 
		function animate() { 
            gsap.registerEffect({
                name: "blurIn",
                effect: (targets, config) => {
                    var tlEffect = gsap.timeline();
                    tlEffect.from(targets, {duration: config.duration, blur:config.blur, stagger:config.stagger, force3D:true, ease:"sine"})
                    .from(targets, {duration: config.duration, stagger:config.stagger, alpha:0,ease:"none"}, "<")
                    .from(targets, {duration: 5.5, stagger:config.stagger, scale:1.15,ease:"Power1.easeOut"}, "<")
                    return tlEffect;
                },
                defaults: {duration:1.3, stagger:5.5, blur:10},
                extendTimeline: true,
            });
            gsap.registerEffect({
                name: "fadeIn",
                effect: (targets, config) => {
                    var tlEffect = gsap.timeline();
                    tlEffect.from(targets, {duration: config.duration, y:config.y, stagger:config.stagger, ease:"power2"})
                    .from(targets, {duration: config.duration, stagger:config.stagger, alpha:0, ease:"none"}, "<")
                    
                    return tlEffect;
                },
                defaults: {duration: 1.3, y:"-=7", stagger:5.5},
                extendTimeline: true,
            });
            gsap.registerEffect({
                name: "fadeOut",
                effect: (targets, config) => {
                    var tlEffect = gsap.timeline();
                    tlEffect
                        .to(targets, {duration: config.duration, y:config.y, stagger:config.stagger, ease:"power2.in"})
                        .to(targets, {duration: config.duration, stagger:config.stagger, alpha:0, ease:"none"}, "<")
                      
                    return tlEffect;
                },
                defaults: {duration: 1.3, y:"-=7", stagger:5.5},
                extendTimeline: true,
            });
            //////////////////////////////////////////
            var imageDivs = selectAll('.imageDiv');
            const stars = generateRandomStars(300,300,310);

			tl
            .to(border, {duration: 0.7, borderColor: dc.color_border, ease: "none"})
            .to(bannerCover, {duration:0.7, alpha:0, ease:"none"})
            
            if(logoIntro) {
                tl
                .from(letter_w, {duration:0.5, drawSVG: 0, ease:"sine.in"}, "<")
                .from(letter_y, {duration:0.3, drawSVG: 0, ease:"sine.in"}, ">")
                .from(letter_nn, {duration:0.8, drawSVG: 0, ease:"sine.inOut"}, ">")
                .from(lasvegas, {duration:1.2, y:"-=13", alpha: 0, ease:"sine.out"}, ">")
                .from(sign_r, {duration:0.5, alpha: 0, ease:"none"}, "<")
                .to(logo, {duration:1.2, alpha:0, ease:"none"}, ">1")
            } else {
                tl.set(logo, {alpha:0}, "<")
            }
            
            tl
            .set(logo, {scale: 0.42, y:-22+coordinate_alt}, ">")
            // .call(generateRandomStars,[300,300,310])
            .blurIn(imageDivs[0], "<")
            .from(starContainer,{duration:4, scale:1.6, y:"-=55", ease:Power2.easeOut  },"<")
            .from([starContainer],{duration:1, alpha:0, ease:Power2.easeOut  },"<0")

            .from([imageDivs[1]],{duration:2, alpha:0, ease:Power2.easeOut  },"<1.0")
            .from([imageDivs[1]],{duration:4, scale:1.4, y:"+=60",x:"+=40", ease:Power2.easeOut  },"<")


            .from(titleArr,{duration:1.5, scale:2, alpha:0, stagger:0.13, ease:Power4.easeOut  },"<")
            .from(titleWrap,{duration:6, scale:2, y:"-=50", ease:Power4.easeOut  },"<")

            .to(logo, {duration:1, alpha:1, ease:"none"}, "<3")
            .from(text_main, {duration:0.8, alpha: 0, ease:"none"}, "<0.4")
            .from(text_produced_group, {duration:0.8, alpha: 0, ease:"none"}, "<0.2")

            .from(cta, {duration:0.8, alpha: 0, ease:"none"}, "<0.2")
            .from(cta, {duration:0.8, scale:0.9, ease:"power4.out"}, "<0.2")
            .from([text_save,text_offer], {duration:1.2, alpha: 0, ease:"power1.out"}, "<0.4")
            if (dc.interation == "save30"){
                 tl.to([saveTag], {duration:1.2, alpha: 1, ease:"power1.out"}, "<0.4")
            }
            twinkleStars(stars);
        }

/******************  //end of MAIN ANIMATION  ******************/    
    
        
/********************  EVENTS  ********************/ 
        cta.addEventListener('mouseover', (e) => {
            console.log("mouseover")
            gsap.to(e.target, {duration:0.4, 
                background: dc.cta_colorBG_over ,
                color: dc.cta_colorTxt_over,
                // borderColor: colors.cta_border_over,
                ease:"none"}  
            )    
        });
        cta.addEventListener('mouseout', (e) => {
            console.log("mouseout")
            gsap.to(e.target, {duration:0.4, 
                background: dc.cta_colorBG,
                color: dc.cta_colorTxt, 
                // borderColor: colors.cta_border,
                ease:"none"}  
            )  
        });
        let type = ((Modernizr.touchevents)&&(!isChrome)) ? 'touchend' : 'click',
        clickable = selectAll('.clickable');

        clickable.forEach(element => element.addEventListener(type, function(e) {
            console.log("mclick")
             Enabler.exit('Exit');
            return false;
        }, false));
	};
/****************** //end of  EVENTS  ******************/   
/******************** ENABLER  ********************/     
	if (Enabler.isInitialized()) {
		init();
	} else {
	  	Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
	}

	function init() {
	  	if (Enabler.isPageLoaded()) {
	    	politeInit();
	  	} else {
	    	Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
	 	}
	};
/***************** //end ofENABLER  *****************/   
}