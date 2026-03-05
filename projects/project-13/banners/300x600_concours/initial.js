"use strict";
window.onload = ()=> {

    const politeInit=()=>{	
        // Dynamic Content variables and sample values
        Enabler.setProfileId(10911295);
        var devDynamicContent = {};
    
        devDynamicContent.WLV_concours_main = [{}];
        devDynamicContent.WLV_concours_main[0]._id = 0;
        devDynamicContent.WLV_concours_main[0].logoIntro = true;
        devDynamicContent.WLV_concours_main[0].version = "v1";
        devDynamicContent.WLV_concours_main[0].color_bg = "#000";
        devDynamicContent.WLV_concours_main[0].color_border = "#aaaaaa";
        devDynamicContent.WLV_concours_main[0].color_headline = "#FFF";
        devDynamicContent.WLV_concours_main[0].color_subheadline = "#FFF";
        devDynamicContent.WLV_concours_main[0].color_logos = "#FFF";
        devDynamicContent.WLV_concours_main[0].cta = "BOOK NOW";
        devDynamicContent.WLV_concours_main[0].color_ctaBG = "#000";
        devDynamicContent.WLV_concours_main[0].color_ctaBG_over = "#FFF";
        devDynamicContent.WLV_concours_main[0].color_ctaText = "#FFF";
        devDynamicContent.WLV_concours_main[0].color_ctaText_over = "#000";
        // devDynamicContent.WLV_concours_main[0].numPics = 4;

        devDynamicContent.WLV_concours_300x600 = [{}];
        devDynamicContent.WLV_concours_300x600[0]._id = 0;

        devDynamicContent.WLV_concours_300x600[0].headline_1 = "INCREDIBLE<br>CARS UP CLOSE";
        devDynamicContent.WLV_concours_300x600[0].subheadline_1 = "Celebrate heritage,<br>craftsmanship and innovation<br>at Concours Las Vegas"
        devDynamicContent.WLV_concours_300x600[0].headline_2 = "BUCKLE UP";
        devDynamicContent.WLV_concours_300x600[0].subheadline_2 = "Concours at Wynn Las Vegas<br>is right around the corner.<br>See you in October";
        devDynamicContent.WLV_concours_300x600[0].headline_3 = "ENJOY THE RIDE";
        devDynamicContent.WLV_concours_300x600[0].subheadline_3 = "Take a trip through years<br>of automotive excellence,<br>Oct.31 – Nov.2";
        devDynamicContent.WLV_concours_300x600[0].headline_4 = "ENJOY<br>THE RIDE";
        devDynamicContent.WLV_concours_300x600[0].subheadline_4 = "Take a trip<br>through years of<br>automotive excellence,<br>Oct.31 – Nov.2";
        devDynamicContent.WLV_concours_300x600[0].text_offsetY = 0;
        devDynamicContent.WLV_concours_300x600[0].text_gap_offsetY = 1;

        devDynamicContent.WLV_concours_300x600[0].pic1 = {};
        devDynamicContent.WLV_concours_300x600[0].pic1.Type = "file";
        devDynamicContent.WLV_concours_300x600[0].pic1.Url = "./p1.png";
        devDynamicContent.WLV_concours_300x600[0].pic2 = {};
        devDynamicContent.WLV_concours_300x600[0].pic2.Type = "file";
        devDynamicContent.WLV_concours_300x600[0].pic2.Url = "./p2.png";
        devDynamicContent.WLV_concours_300x600[0].pic3 = {};
        devDynamicContent.WLV_concours_300x600[0].pic3.Type = "file";
        devDynamicContent.WLV_concours_300x600[0].pic3.Url = "./p3.png";
        devDynamicContent.WLV_concours_300x600[0].pic4 = {};
        devDynamicContent.WLV_concours_300x600[0].pic4.Type = "file";
        devDynamicContent.WLV_concours_300x600[0].pic4.Url = "./p4.png";

        devDynamicContent.WLV_concours_320x50 = [{}];
        devDynamicContent.WLV_concours_320x50[0]._id = 0;
        devDynamicContent.WLV_concours_300x50 = [{}];
        devDynamicContent.WLV_concours_300x50[0]._id = 0;
        Enabler.setDevDynamicContent(devDynamicContent);
    
        let select =(s)=> {
            return document.querySelector(s);
            },
            selectAll = (s)=> {
            return document.querySelectorAll(s);
            },
            bannerCover = select('#bannerCover'),
            border = select('#border'),
            bgexit = select('#bgexit'),

            bg = select('#wrapper'),
            bg_image = select('#bg_image'),
            logo = select('#logo'),
             // pipe = select('#pipe'),
            logo_partner = select('#logo_partner'),
            logo_partner2 = select('#logo_partner2'),
           
            //LOGO stuff
            letter_w = select('#w'),
            letter_y = select('#y'),
            letter_nn = select('#nn'),
            lasvegas = select('#lasvegas'),
            sign_r = select('#r'),
            //
            imgs = [],
            pics = [],
            dc = dynamicContent.WLV_concours_main[0],
            dcSize = dynamicContent.WLV_concours_300x600[0],
            //
            numPics = 4 ,
            logoIntro = dc.logoIntro,
            text_offsetY = dcSize.text_offsetY,
            text_gap_offsetY = dcSize.text_gap_offsetY,
            //
            textBoxer  = select('#textBoxer'),
            text_headDiv = [],
            text_subheadDiv = [],
            headlines = [],
            subheadlines = [],
            //
            cta = select('#cta'), 
            tl = gsap.timeline();
            //
            for(let i = 1; i <= numPics; i++) {
                pics.push( dcSize["pic" + i ].Url );
                headlines.push( dcSize["headline_"+ i] );
                subheadlines.push( dcSize["subheadline_"+i ] );
            }
        /***************** //end of VARIABLES  *****************/

        bg.style.backgroundColor = dc.color_bg;
        cta.style.backgroundColor = dc.color_ctaBG;
        cta.style.color = dc.color_ctaText;
        cta.innerHTML = dc.cta;

        if(dc.cta.length>8){
            let myfontSize = parseFloat( window.getComputedStyle(cta, null).getPropertyValue('font-size') );
            let subtractAmt = dc.cta.length - 9;
            cta.style.fontSize = (myfontSize - subtractAmt)+"px";
        }

        const setLogoColor = (newColor) => {
            let logoArr = [letter_w,letter_y,letter_nn ]
            let logoArr2 = [lasvegas,sign_r]
            for(let i =0;i<logoArr.length;i++){
                logoArr[i].style.stroke = newColor
            }
            for(let i =0;i<logoArr2.length;i++){
                logoArr2[i].style.fill = newColor
            }
             //pipe.style.backgroundColor  = newColor;
            //
            //logo_partner2.style.fill  = newColor;
            //logo_partner2.style.stroke  = newColor;
        }
        setLogoColor(dc.color_logos);


        //CREATE Divs and populate Header and subheader Text:
        for(let i = 0; i < headlines.length; i++) {
            let head_div = document.createElement('div');
            head_div.className = "text_header";
            head_div.id = "text_head"+i;
            head_div.innerHTML =  headlines[i];
            head_div.style.color =  dc.color_headline;
            text_headDiv.push( head_div.id) ;
            textBoxer.appendChild(head_div);

            let subhead_div = document.createElement('div');
            subhead_div.className = "text_subheader";
            subhead_div.id = "text_subhead"+i;
            subhead_div.innerHTML = subheadlines[i];
            subhead_div.style.color =  dc.color_subheadline;
            text_subheadDiv.push(subhead_div.id )
            textBoxer.appendChild(subhead_div);
        }
        
        /*******  PRELOADING IMAGES  *****/      
        const imagesPreloaded = ()=> {
            for(let i = 0; i < imgs.length; i++) {
                let div = document.createElement('div');
                div.className = "imageDiv";
                div.style.background = "url(" + imgs[i].src + ") no-repeat";
                div.style.backgroundColor = "#000";
                div.style.backgroundPosition = "50% 40%";
                div.style.backgroundSize = "cover";
                imagesWrap.appendChild(div);
            }
            animate();
		}
		const preloadImages = (srcs, callback) => {
		    let img;
		    let remaining = srcs.length;
		    for(let i = 0; i < srcs.length; i++) {
                let product = {};
		        img = new Image();
		        img.onload = ()=> {
		            --remaining;
		            if (remaining <= 0)  callback();
		        };
		        img.src = srcs[i];               
                imgs[i] = img;
		    }
		}
		preloadImages(pics, imagesPreloaded);

        const runFitBox = () =>{  
            gsap.set(textBoxer, {y: "+="+ text_offsetY +""})
            let textRatio = 52;
            let centerOn = 0.4;  // 0 to 1
            let pad = 5 + text_gap_offsetY;
            //
            for(let i= 0;i<numPics; i++ ){
                let elementHead = 'text_head'+i;
                let elementSub = 'text_subhead'+i;
                fitBox.run( pad , centerOn , textRatio,  document.getElementById(elementHead),  document.getElementById(elementSub) ) ;
            }
        }
        const testFitBox = ()=>{  
            let errorAlert =  fitBox.test(numPics)
            console.log('testFitBox for alignment errors - ErrorAlert ='+ errorAlert)
            if (errorAlert){  
                runFitBox() ; 
                gsap.delayedCall(1,testFitBox,[ numPics] );
            } 
        }
        //// RUN ////
        gsap.delayedCall(0.5,runFitBox); 
        gsap.delayedCall(1,testFitBox);
/******************  MAIN ANIMATION  ******************/ 
            /////////////////////////////////////////
            /////////////////////////////////////////
            /////////////////////////////////////////

		const animate = () =>{ 
            gsap.registerPlugin(DrawSVGPlugin);
            gsap.registerEffect({
                name: "blurIn",
                effect: (targets, config) => {
                    // console.log(targets, config);
                    let t1 = gsap.timeline();
                    t1
                    .from(targets, {duration: config.duration, blur:config.blur, stagger:config.stagger, force3D:true, ease:"sine"})
                    .from(targets, {duration: config.duration, stagger:config.stagger, alpha:0,ease:"none"}, "<")
                    .from(targets, {duration: 5.5, stagger:config.stagger, scale:1.15,ease:"Power1.easeOut"}, "<")
                    console.log("my t = ", targets);
                    //  t1
                    // .to(targets, {duration: 1, stagger:config.stagger, alpha:0,ease:"Power1.easeOut"}, "<5.5")

                    return t1;
                },
                defaults: {duration:1.3, stagger:5, blur:10},
                extendTimeline: true,
            });
            
            /////////////////////////////////////////
            /////////////////////////////////////////
            /////////////////////////////////////////
            /////////////////////////////////////////
            let heads = selectAll('.text_header'),
                subheads = selectAll('.text_subheader'),
                imageDivs = selectAll('.imageDiv'),
                myNodeList = selectAll('.imageDiv'),

                heads2 = [], 
                subheads2 = [];

                // console.log( "adf = " + what.length)
            //     console.log( "adf = " + myNodeList.length)
            // if (myNodeList.length > 0) {
            //     const last = myNodeList[myNodeList.length];
            //     last.parentNode.removeChild(last);
            //     // lastElement.remove(); // Removes the element from the DOM
            // }
            //     console.log( "adf = " + myNodeList.length)

            
            for(let i = 0; i < heads.length-1; i++) {
                heads2[i] = heads[i];
                subheads2[i] = subheads[i];
            }
            // logoIntro = false;
            let d = 1;
			tl
            .to(border, {duration: 0.7, borderColor: dc.color_border, ease: "none"})
            .to(bannerCover, {duration:0.7, alpha:0, ease:"none"})
            
            if(logoIntro) {
                tl
                .set(logo, {alpha:1})
                .from(letter_w, {duration:0.5, drawSVG: 0, ease:"sine.in"}, "<")
                .from(letter_y, {duration:0.3, drawSVG: 0, ease:"sine.in"}, ">")
                .from(letter_nn, {duration:0.8, drawSVG: 0, ease:"sine.inOut"}, ">")
                .from(lasvegas, {duration:0.7, y:"-=10", alpha: 0, ease:"sine"}, ">")
                .from(sign_r, {duration:0.5, alpha: 0, ease:"none"}, "<")
                //
                .to(logo, {duration: 0.5, alpha: 0, ease: "none"}, ">1")
                d+=4
            } else {
                tl.set(logo, {alpha:0}, "<")
            }
            tl
            .set(logo, {y:265, x:1, scale:0.43}, ">")
            .blurIn(imageDivs, "<");
            
            ///// Start - Text Box animations ////
            for(let i = 0; i < heads.length-1; i++) {
                gsap.set(heads,{alpha:0, y:"-=5"})
                gsap.set(subheads,{alpha:0})
            }
            const text_switch = (num) =>{
                    //id the New text NOT blank?
                if ((( heads[num].innerHTML=="" ) && (subheads[num].innerHTML==""))  
                    // is the new text unique?
                    || ( (heads[num].innerHTML==heads[num-1].innerHTML) &&  (subheads[num].innerHTML==subheads[num-1].innerHTML)   ) )  
                    {
                    return false  //Skip Exit animation
                }else{
                    return true //Play Exit animation
                }
            }
            //ENTER Group 1 
            gsap.to(heads[0], {duration: 2.0, delay:d, y:"0", alpha:1, ease:"power2.out"})
            gsap.to(subheads[0], {duration: 1.3, delay:d+0.4, y:"0", alpha:1, ease:"power2.out"})
            for(let i = 1;i<4;i++){
                let d2 = d + (5*i);
                if( text_switch(i) ){
                    //Exit - ALL text Groups 
                    gsap.to(heads, {duration: 0.4, delay:d2, y:"-=5", alpha:0})
                    gsap.to(subheads, {duration: 0.4, delay:d2, y:"0", alpha:0})
                    //ENTER - next text Group 
                    d+= 1
                    gsap.to(heads[i], {duration: 2.0, delay:d2+0.4, y:"0", alpha:1, ease:"power2.out"})
                    gsap.to(subheads[i], {duration: 1.3, delay:d2+0.6, y:"0", alpha:1, ease:"power2.out"})
                }
            }
        //// End - Text Box animations ////

            tl
            .from(bg_image, {duration:1, alpha:0}, "<0.0")
            .from(pipe, {duration:1, alpha:0, ease:"none"}, "<0.0")
            .from(logo_partner, {duration:1, alpha:0, ease:"none"}, "<0.0")
            .from(cta, {duration:0.5, alpha: 0, ease:"none"}, "<")
            .from(cta, {duration:1, rotateX:90, ease:"power2"}, "<")
            .to(logo, {duration:1, alpha:1, ease:"none"}, "<")
            //
		}

    /******************  //end of MAIN ANIMATION  ******************/    
    
        
    /********************  EVENTS  ********************/ 
        cta.addEventListener('mouseover', (e) => {
            e.target.style.background = dc.color_ctaBG_over ;
            e.target.style.color = dc.color_ctaText_over;
            e.target.style.borderColor = dc.color_ctaText_over;
        });
        cta.addEventListener('mouseout', (e) => {
            e.target.style.background = dc.color_ctaBG;
            e.target.style.color = dc.color_ctaText;
            e.target.style.borderColor = dc.color_ctaText;
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
    const init = () => {
        (Enabler.isPageLoaded()) ? politeInit() : Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
    };
    Enabler.isInitialized() ? init() : Enabler.addEventListener(studio.events.StudioEvent.INIT, init);

 
}