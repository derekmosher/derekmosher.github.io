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
    
  
    
/******************** VARIABLES  ********************/ 
    
	function politeInit(){	
       // Dynamic Content variables and sample values
    //    Enabler.setProfileId(10862538);
       var devDynamicContent = {};
   
       devDynamicContent.WLV_awakening_v2b_main = [{}];
       devDynamicContent.WLV_awakening_v2b_main[0]._id = 0;
       devDynamicContent.WLV_awakening_v2b_main[0].unique_id = 1;
       devDynamicContent.WLV_awakening_v2b_main[0].reporting_label = "default";
       devDynamicContent.WLV_awakening_v2b_main[0].logoIntro = false;
       devDynamicContent.WLV_awakening_v2b_main[0].cta = "GET TICKETS";
       devDynamicContent.WLV_awakening_v2b_main[0].color_bg = "#000000";
       devDynamicContent.WLV_awakening_v2b_main[0].color_border = "#6b6b6b";
       devDynamicContent.WLV_awakening_v2b_main[0].color_ctaBG = "#069bf1";
       devDynamicContent.WLV_awakening_v2b_main[0].color_ctaBG_over = "#5bbff8";
       devDynamicContent.WLV_awakening_v2b_main[0].color_ctaText = "#FFFFFF";
       devDynamicContent.WLV_awakening_v2b_main[0].color_ctaText_over = "#FFFFFF";
       devDynamicContent.WLV_awakening_v2b_main[0].is_active = true;
       devDynamicContent.WLV_awakening_v2b_970x250 = [{}];
       devDynamicContent.WLV_awakening_v2b_970x250[0]._id = 0;
       devDynamicContent.WLV_awakening_v2b_970x250[0].unique_id = 1;
       devDynamicContent.WLV_awakening_v2b_970x250[0].reporting_label = "default";
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_bg = {};
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_bg.Type = "file";
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_bg.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009144615977_fire_bg.jpg";
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_front = {};
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_front.Type = "file";
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_front.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009144619791_fire_front.png";
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_price = {};
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_price.Type = "file";
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_price.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231003105030851_price.png";
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_quote = {};
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_quote.Type = "file";
       devDynamicContent.WLV_awakening_v2b_970x250[0].pic_quote.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231003135100378_fire_quote1.png";
       devDynamicContent.WLV_awakening_v2b_970x250[0].is_active = true;
       devDynamicContent.WLV_awakening_v2b_160x600 = [{}];
       devDynamicContent.WLV_awakening_v2b_160x600[0]._id = 0;
       devDynamicContent.WLV_awakening_v2b_160x600[0].unique_id = 1;
       devDynamicContent.WLV_awakening_v2b_160x600[0].reporting_label = "default";
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_bg = {};
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_bg.Type = "file";
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_bg.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009154240048_fire_bg.jpg";
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_front = {};
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_front.Type = "file";
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_front.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009154222938_fire_front.png";
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_price = {};
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_price.Type = "file";
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_price.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231002160834650_price.png";
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_quote = {};
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_quote.Type = "file";
       devDynamicContent.WLV_awakening_v2b_160x600[0].pic_quote.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231003153120707_fire_quote1.png";
       devDynamicContent.WLV_awakening_v2b_160x600[0].is_active = true;
       devDynamicContent.WLV_awakening_v2b_728x90 = [{}];
       devDynamicContent.WLV_awakening_v2b_728x90[0]._id = 0;
       devDynamicContent.WLV_awakening_v2b_728x90[0].unique_id = 1;
       devDynamicContent.WLV_awakening_v2b_728x90[0].reporting_label = "default";
       devDynamicContent.WLV_awakening_v2b_728x90[0].pic_bg = {};
       devDynamicContent.WLV_awakening_v2b_728x90[0].pic_bg.Type = "file";
       devDynamicContent.WLV_awakening_v2b_728x90[0].pic_bg.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009150048445_fire_bg.jpg";
       devDynamicContent.WLV_awakening_v2b_728x90[0].pic_front = {};
       devDynamicContent.WLV_awakening_v2b_728x90[0].pic_front.Type = "file";
       devDynamicContent.WLV_awakening_v2b_728x90[0].pic_front.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009150052227_fire_front.png";
       devDynamicContent.WLV_awakening_v2b_728x90[0].pic_price = {};
       devDynamicContent.WLV_awakening_v2b_728x90[0].pic_price.Type = "file";
       devDynamicContent.WLV_awakening_v2b_728x90[0].pic_price.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231002161204497_price.png";
       devDynamicContent.WLV_awakening_v2b_728x90[0].is_active = true;
       devDynamicContent.WLV_awakening_v2b_300x250 = [{}];
       devDynamicContent.WLV_awakening_v2b_300x250[0]._id = 0;
       devDynamicContent.WLV_awakening_v2b_300x250[0].unique_id = 1;
       devDynamicContent.WLV_awakening_v2b_300x250[0].reporting_label = "default";
       devDynamicContent.WLV_awakening_v2b_300x250[0].pic_bg = {};
       devDynamicContent.WLV_awakening_v2b_300x250[0].pic_bg.Type = "file";
       devDynamicContent.WLV_awakening_v2b_300x250[0].pic_bg.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009145558688_fire_bg.jpg";
       devDynamicContent.WLV_awakening_v2b_300x250[0].pic_front = {};
       devDynamicContent.WLV_awakening_v2b_300x250[0].pic_front.Type = "file";
       devDynamicContent.WLV_awakening_v2b_300x250[0].pic_front.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009145602421_fire_front.png";
       devDynamicContent.WLV_awakening_v2b_300x250[0].pic_price = {};
       devDynamicContent.WLV_awakening_v2b_300x250[0].pic_price.Type = "file";
       devDynamicContent.WLV_awakening_v2b_300x250[0].pic_price.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231002160901390_price.png";
       devDynamicContent.WLV_awakening_v2b_300x250[0].is_active = true;
       devDynamicContent.WLV_awakening_v2b_320x50 = [{}];
       devDynamicContent.WLV_awakening_v2b_320x50[0]._id = 0;
       devDynamicContent.WLV_awakening_v2b_320x50[0].unique_id = 1;
       devDynamicContent.WLV_awakening_v2b_320x50[0].reporting_label = "default";
       devDynamicContent.WLV_awakening_v2b_320x50[0].pic_bg = {};
       devDynamicContent.WLV_awakening_v2b_320x50[0].pic_bg.Type = "file";
       devDynamicContent.WLV_awakening_v2b_320x50[0].pic_bg.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009150841129_fire_bg.jpg";
       devDynamicContent.WLV_awakening_v2b_320x50[0].pic_front = {};
       devDynamicContent.WLV_awakening_v2b_320x50[0].pic_front.Type = "file";
       devDynamicContent.WLV_awakening_v2b_320x50[0].pic_front.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009150845131_fire_front.png";
       devDynamicContent.WLV_awakening_v2b_320x50[0].pic_price = {};
       devDynamicContent.WLV_awakening_v2b_320x50[0].pic_price.Type = "file";
       devDynamicContent.WLV_awakening_v2b_320x50[0].pic_price.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231002161110239_price.png";
       devDynamicContent.WLV_awakening_v2b_320x50[0].is_active = true;
       devDynamicContent.WLV_awakening_v2b_300x50 = [{}];
       devDynamicContent.WLV_awakening_v2b_300x50[0]._id = 0;
       devDynamicContent.WLV_awakening_v2b_300x50[0].unique_id = 1;
       devDynamicContent.WLV_awakening_v2b_300x50[0].reporting_label = "default";
       devDynamicContent.WLV_awakening_v2b_300x50[0].pic_bg = {};
       devDynamicContent.WLV_awakening_v2b_300x50[0].pic_bg.Type = "file";
       devDynamicContent.WLV_awakening_v2b_300x50[0].pic_bg.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009150812778_fire_bg.jpg";
       devDynamicContent.WLV_awakening_v2b_300x50[0].pic_front = {};
       devDynamicContent.WLV_awakening_v2b_300x50[0].pic_front.Type = "file";
       devDynamicContent.WLV_awakening_v2b_300x50[0].pic_front.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009150816618_fire_front.png";
       devDynamicContent.WLV_awakening_v2b_300x50[0].pic_price = {};
       devDynamicContent.WLV_awakening_v2b_300x50[0].pic_price.Type = "file";
       devDynamicContent.WLV_awakening_v2b_300x50[0].pic_price.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231002160947199_price.png";
       devDynamicContent.WLV_awakening_v2b_300x50[0].is_active = true;
       devDynamicContent.WLV_awakening_v2b_300x600 = [{}];
       devDynamicContent.WLV_awakening_v2b_300x600[0]._id = 0;
       devDynamicContent.WLV_awakening_v2b_300x600[0].unique_id = 1;
       devDynamicContent.WLV_awakening_v2b_300x600[0].reporting_label = "default";
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_bg = {};
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_bg.Type = "file";
    //    devDynamicContent.WLV_awakening_v2b_300x600[0].pic_bg.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009142455374_fire_bg.jpg";
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_bg.Url = "fish_bg.png";
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_front = {};
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_front.Type = "file";
    //    devDynamicContent.WLV_awakening_v2b_300x600[0].pic_front.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231009142508096_fire_front.png";
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_front.Url = "fish_front.png";
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_price = {};
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_price.Type = "file";
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_price.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231002164138693_price.png";
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_quote = {};
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_quote.Type = "file";
    //    devDynamicContent.WLV_awakening_v2b_300x600[0].pic_quote.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231003140324148_fire_quote1.png";
       devDynamicContent.WLV_awakening_v2b_300x600[0].pic_quote.Url = "fish_quote.png";
       devDynamicContent.WLV_awakening_v2b_300x600[0].is_active = true;
       Enabler.setDevDynamicContent(devDynamicContent);
      console.log("helo dere")

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
                select('#text5'),
                select('#text6'),
                select('#text4'),
                select('#text7'),
                select('#text3'),
                select('#text8'),
                select('#text2'),
                select('#text9'),
                select('#text1'),
                select('#text10'),
            ],
            smokeArr = [
                document.getElementById('canvas'),
                document.getElementById('canvasBlue')
            ],
            imgs = [],
            pics = [],
            dc = dynamicContent.WLV_awakening_v2b_main[0],
            dcSize = dynamicContent.WLV_awakening_v2b_300x600[0],
            logoIntro = dc.logoIntro,
            cta = select('#cta'), 
            tl = gsap.timeline();

            pics.push( dcSize.pic_bg.Url );
            pics.push( dcSize.pic_front.Url );
            pics.push( dcSize.pic_price.Url );
            pics.push( dcSize.pic_quote.Url );

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
        bg.style.backgroundColor = dc.color_bg;
        cta.style.backgroundColor = dc.color_ctaBG;
        cta.style.color = dc.color_ctaText;
        // cta.style.borderColor = dc.color_ctaBG;
        cta.innerHTML = dc.cta;

        
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
                div.style.background = "url(" + imgs[i].src + ") no-repeat";
                div.style.backgroundPosition = "50% 40%";
                div.style.backgroundSize = "cover";
                
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
 
            // for(var i = 0; i < heads.length-1; i++) {
            //     heads2[i] = heads[i];
            //     subheads2[i] = subheads[i];
            // }
            //  logoIntro = false;
			tl
            .to(border, {duration: 0.7, borderColor: dc.color_border, ease: "none"})
            .to(bannerCover, {duration:0.7, alpha:0, ease:"none"})

            gsap.set( smokeArr,{ alpha:0.6})
            gsap.set( smokeArr,{ alpha:1})

           gsap.from( smokeArr,2.0,{ // Logo Out
              delay:0.1,
              scale:0.95,
              alpha:0,
            })
            
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
            .set(logo, {scale: 0.38, y:-268}, ">")
            .blurIn(imageDivs[0], "<")
            .from(imageDivs[1],{duration:4, scale:1.4, y:"-=0", ease:Power2.easeOut  },"<0.2")
            .from(imageDivs[1],{duration:2, alpha:0, ease:Power2.easeOut  },"<0")
            .from(titleArr,{duration:1.5, scale:2, alpha:0, stagger:0.13, ease:Power4.easeOut  },"<")
            .from(titleWrap,{duration:6, scale:2, y:"-=50", ease:Power4.easeOut  },"<")
            .to(logo, {duration:1, alpha:1, ease:"none"}, "<3")

            .from(imageDivs[3],{duration:1.5,  alpha:0,y:"-=0", ease:Power2.easeOut  },"<0.4")
 
            .from(cta, {duration:0.8, alpha: 0, ease:"none"}, "<0.2")
            .from(cta, {duration:1.5, rotateX:90, ease:"power2"}, "<0.2")
            .from(imageDivs[2],{duration:1.5,  alpha:0,y:"-=0", ease:Power2.easeOut  },"<0.4")
		}

/******************  //end of MAIN ANIMATION  ******************/    
    
        
/********************  EVENTS  ********************/ 
        cta.addEventListener('mouseover', (e) => {
            e.target.style.background = dc.color_ctaBG_over ;
            e.target.style.color = dc.color_ctaText_over;
        });
        cta.addEventListener('mouseout', (e) => {
            e.target.style.background = dc.color_ctaBG;
            e.target.style.color = dc.color_ctaText;
        });
        let type = ((Modernizr.touchevents)&&(!isChrome)) ? 'touchend' : 'click',
        clickable = selectAll('.clickable');

        clickable.forEach(element => element.addEventListener(type, function(e) {
             Enabler.exit('Exit');
            return false;
        }, false));
	};
/****************** //end of  EVENTS  ******************/   
   
}