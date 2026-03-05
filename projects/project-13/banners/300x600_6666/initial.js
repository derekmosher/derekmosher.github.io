"use strict";
window.onload = function() {

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
        // Enabler.setProfileId(10839664);
        var devDynamicContent = {};
        devDynamicContent.wlv_mizumi_main = [{}];
        devDynamicContent.wlv_mizumi_main[0]._id = 0;
        devDynamicContent.wlv_mizumi_main[0].logoIntro = true;
        devDynamicContent.wlv_mizumi_main[0].color_bg = "#fff";
        devDynamicContent.wlv_mizumi_main[0].color_border = "#000";
        devDynamicContent.wlv_mizumi_main[0].color_headline = "#F9F7E8";
        devDynamicContent.wlv_mizumi_main[0].color_subheadline = "#F9F7E8";
        devDynamicContent.wlv_mizumi_main[0].cta = "LEARN MORE";
        devDynamicContent.wlv_mizumi_main[0].color_ctaText = "#775C3D";  //brown
        devDynamicContent.wlv_mizumi_main[0].color_ctaText_over = "#fff"; //pearl
        devDynamicContent.wlv_mizumi_main[0].color_ctaBG = "#fac400";   // pearl
        devDynamicContent.wlv_mizumi_main[0].color_ctaBG_over = "#fac400";  //brown
        devDynamicContent.wlv_mizumi_main[0].color_ctaBorder = "#fac400";
        devDynamicContent.wlv_mizumi_main[0].numPicsToShow = 1;
        
        devDynamicContent.wlv_mizumi_970x250 = [{}];
        devDynamicContent.wlv_mizumi_970x250[0]._id = 0;
        devDynamicContent.wlv_mizumi_970x250[0].headline_1 = "";
        devDynamicContent.wlv_mizumi_970x250[0].subheadline_1 =  "";
        devDynamicContent.wlv_mizumi_970x250[0].headline_2 = "";
        devDynamicContent.wlv_mizumi_970x250[0].subheadline_2 = "";
        devDynamicContent.wlv_mizumi_970x250[0].headline_3 = "";
        devDynamicContent.wlv_mizumi_970x250[0].subheadline_3 = "";
        devDynamicContent.wlv_mizumi_970x250[0].headline_4 = "";
        devDynamicContent.wlv_mizumi_970x250[0].subheadline_4 = "";
        devDynamicContent.wlv_mizumi_970x250[0].text_offsetY = 0;
        devDynamicContent.wlv_mizumi_970x250[0].text_gap_offsetY = 0;
        devDynamicContent.wlv_mizumi_970x250[0].pic1 = {};
        // devDynamicContent.wlv_mizumi_970x250[0].pic1.Url = "pic1.jpg";
        devDynamicContent.wlv_mizumi_970x250[0].pic1.Url = "";

        devDynamicContent.wlv_mizumi_970x250[0].pic2 = {};
        devDynamicContent.wlv_mizumi_970x250[0].pic2.Url = "";
        devDynamicContent.wlv_mizumi_970x250[0].pic3 = {};
        devDynamicContent.wlv_mizumi_970x250[0].pic3.Url = ""; 
        devDynamicContent.wlv_mizumi_970x250[0].pic4 = {};
        devDynamicContent.wlv_mizumi_970x250[0].pic4.Url = "";
        Enabler.setDevDynamicContent(devDynamicContent);

        /************** Create VARIABLES ********************/
        var select = function(s) {
                return document.querySelector(s);
            },
            selectAll = function(s) {
                return document.querySelectorAll(s);
            },
            bannerCover = select('#bannerCover'),
            border = select('#border'),
            bg = select('#bg'),
            logo_intro = select('#logo_intro'), 
            letter_w = select('#w'),
            letter_y = select('#y'),
            letter_nn = select('#nn'),
            lasvegas = select('#lasvegas'),
            sign_r = select('#r'),
            //
            imgs = [],
            pics = [],
            dc = dynamicContent.wlv_mizumi_main[0],
            dcSize = dynamicContent.wlv_mizumi_970x250[0],
            //
            numPicsToShow = dc.numPicsToShow,
            numTextBoxesToShow = 1,
            logoIntro = dc.logoIntro,
            //
            text_quote = select('#text_quote'),
            text_quote2 = select('#text_quote2'),

            pic1 = select('#pic1'),
            logo_6666 = select('#logo_6666'),

            cta = select('#cta'), 

            // introBG = select('#introBG'), 
            tl = gsap.timeline();

            /************** Modify VARIABLES ********************/

            let split = new SplitText(text_quote, {type: "chars,words,lines", position: "absolute"});
            // let split = new SplitText(text_quote, {type: "chars, position: "absolute"});

            if ( (isNaN(numPicsToShow) ||  numPicsToShow<1 || numPicsToShow>4  ) ) numPicsToShow = 1;
            //Add to Pics Array
            for(let i=0;i<numPicsToShow; i++ ){
                let num = i+1;
                pics.push( dcSize['pic'+ num ].Url ) 
            }


/***************** //end of VARIABLES  *****************/
           
            //CTA - reduce font size if too long. 
            // let maxCTAchars = 8
            // if(dc.cta.length>maxCTAchars){
            //     let myfontSize = parseFloat( window.getComputedStyle(cta, null).getPropertyValue('font-size') );
            //     let subtractAmt = dc.cta.length - maxCTAchars;
            //     cta.style.fontSize = (myfontSize - subtractAmt)+"px";
            // }

            function newColors (newColor){
                gsap.set([lasvegas,sign_r], {fill:newColor });
                gsap.set([letter_w,letter_y,letter_nn], {stroke:newColor});

            }
            newColors("#F9F7E8")

        /*******  PRELOADING IMAGES  *****/      
		function preloadImages(srcs, callback) {
		    var img;
		    var remaining = srcs.length;
		    for(var i = 0; i < srcs.length; i++) {
                var product = {};
                
		        img = new Image();
                img.onload = () => {
		            --remaining;
		            if (remaining <= 0) {
		                callback();
		            }
		        };
                img.onerror = () => {
                    // what happens if there are multiple images?
                    console.error('Error - loading image');
                    animate();
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
        //  animate();
        gsap.registerPlugin(DrawSVGPlugin);

/******************  MAIN ANIMATION  ******************/ 
		function animate() { 
            var imageDivs = selectAll('.imageDiv'),
       
            logoIntro = true;
			tl
            .to(bannerCover, {duration:0.7, alpha:0, ease:"none"})

            if(logoIntro) {
                tl
                .from(letter_w, {duration:0.5, drawSVG: 0, ease:"sine.in"}, "<")
                .from(letter_y, {duration:0.3, drawSVG: 0, ease:"sine.in"}, ">")
                .from(letter_nn, {duration:0.8, drawSVG: 0, ease:"sine.inOut"}, ">")
                .from(lasvegas, {duration:0.7, y:"-=10", alpha: 0, ease:"sine"}, ">")
                .from(sign_r, {duration:0.5, alpha: 0, ease:"none"}, "<")
                .to([logo_intro], {duration:0.6, alpha:0, ease:"none"}, ">1")
                .to([bgexit], {duration:0.8, alpha:0, ease:"none"}, "<0.6")
                .to([bg],{duration:12.0,scale:1.35,ease:"power1.Out"}, "<")

                // .to([introBG,bgexit], {duration:0.8, alpha:0, ease:"none"}, "<0.4")
            } else {
                // tl.set([logo_intro,introBG,bgexit], {alpha:0}, "<")
                tl.set([logo_intro,bgexit], {alpha:0}, "<")
            }
            tl
            .set(logo_intro, {y:2,x:0, alpha:0, scale: 0.6}, "<")
            // .to([bg],{duration:12.0,scale:1.35,ease:"power1.Out"}, "<")
            .from([peep],{duration:12.0,scale:1.15,ease:"power1.Out"}, "<")
            .from([logo_6666],{duration:0.8,scale: 0.9,alpha:0,ease:"power1.Out"}, "<0.2")
            .from (split.lines, {duration: 1.8,  y: -12, alpha:0, ease: "back.out(4)", stagger: {amount:0.3, from:"end"} }, "<0.3")
            .from([text_quote2 ],{duration:1.4,scale:0.9,alpha:0,ease:"back.out(4)"}, "<0.8")
            .from(cta, {duration:0.8, scale: 0.72, alpha: 0, ease:"back.out(1.7)" }, "<0.4")
            .to(logo_intro, {duration:1, alpha:1, ease:"power1.Out"}, "<0.4")
            
		}



    const canvas = document.getElementById('staticCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300; //window.innerWidth;
    canvas.height = 600;

    function generateStatic() {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            const color = Math.round(Math.random() * 255);
            data[i] = color;     // Red
            data[i + 1] = color; // Green
            data[i + 2] = color; // Blue
            data[i + 3] = 255;   // Alpha
            // data[i + 3] = (Math.random()*255);   // Alpha
        }
        ctx.putImageData(imageData, 0, 0);
    }

    // setInterval(function(){
    //     generateStatic()
    // }, 100); 
    // Runs every 1000 milliseconds (1 second)



/******************  //end of MAIN ANIMATION  ******************/    
    
        
/********************  EVENTS  ********************/ 
        cta.addEventListener('mouseover', (e) => {
            gsap.to(cta, { backgroundColor: "rgba(128, 136, 131, .1)", color:"#fff", borderColor:"#fff", duration: 0.4 ,ease:"Power2.out" });
        });
        cta.addEventListener('mouseout', (e) => {
            gsap.to(cta, { backgroundColor: "#a12123", color:"#fff", borderColor:"#a12123", duration: 0.4 ,ease:"Power2.out" });
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