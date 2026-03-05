   "use strict";
window.onload = function() {
    // document.addEventListener('DOMContentLoaded', function() {
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
        // Enabler.setProfileId();
        Enabler.setProfileId(10849692);
        var devDynamicContent = {};
    
        devDynamicContent.WLV_refresh_flower_main = [{}];
        devDynamicContent.WLV_refresh_flower_main[0]._id = 0;
        devDynamicContent.WLV_refresh_flower_main[0].logoIntro = false;
        devDynamicContent.WLV_refresh_flower_main[0].flowers_opacity = 0.9;
        devDynamicContent.WLV_refresh_flower_main[0].color_bg = "#775c3d";
        devDynamicContent.WLV_refresh_flower_main[0].color_border = "#000000";
        devDynamicContent.WLV_refresh_flower_main[0].color_headline = "#F9F7E8";
        devDynamicContent.WLV_refresh_flower_main[0].color_subheadline = "#F9F7E8";
        devDynamicContent.WLV_refresh_flower_main[0].cta = "BOOK NOW";
        devDynamicContent.WLV_refresh_flower_main[0].color_ctaBG = "#F9F7E8";
        devDynamicContent.WLV_refresh_flower_main[0].color_ctaBG_over = "#FFFFFF";
        devDynamicContent.WLV_refresh_flower_main[0].color_ctaText = "#775c3d";
        devDynamicContent.WLV_refresh_flower_main[0].color_ctaText_over = "#775c3d";
        devDynamicContent.WLV_refresh_flower_main[0].numPicsToShow = 4;
        devDynamicContent.WLV_refresh_flower_160x600 = [{}];
        devDynamicContent.WLV_refresh_flower_160x600[0]._id = 0;
        devDynamicContent.WLV_refresh_flower_160x600[0].headline_1 = "Weekday Getaway";
        devDynamicContent.WLV_refresh_flower_160x600[0].subheadline_1 = "Save up to 15% and enjoy $30 in daily resort credit.";
        devDynamicContent.WLV_refresh_flower_160x600[0].headline_2 = "";
        devDynamicContent.WLV_refresh_flower_160x600[0].subheadline_2 = "";
        devDynamicContent.WLV_refresh_flower_160x600[0].headline_3 = "";
        devDynamicContent.WLV_refresh_flower_160x600[0].subheadline_3 = "";
        devDynamicContent.WLV_refresh_flower_160x600[0].headline_4 = "";
        devDynamicContent.WLV_refresh_flower_160x600[0].subheadline_4 = "";
        devDynamicContent.WLV_refresh_flower_160x600[0].text_offsetY = 0;
        devDynamicContent.WLV_refresh_flower_160x600[0].text_gap_offsetY = 1;
        devDynamicContent.WLV_refresh_flower_160x600[0].pic1 = {};
        devDynamicContent.WLV_refresh_flower_160x600[0].pic1.Url = "https://drive.google.com/uc?id=1HaB6ztNLFh_CFO1k6XEHr4tTyqu2O54i";
        devDynamicContent.WLV_refresh_flower_160x600[0].pic2 = {};
        devDynamicContent.WLV_refresh_flower_160x600[0].pic2.Url = "https://drive.google.com/uc?id=1YTnVLzfGa_oxbBREWPk2ro4KdFYUCkRJ";
        devDynamicContent.WLV_refresh_flower_160x600[0].pic3 = {};
        devDynamicContent.WLV_refresh_flower_160x600[0].pic3.Url = "https://drive.google.com/uc?id=1ktXQRGDGVPde-OAvTQ_ryZe8nnsXjhcp";
        devDynamicContent.WLV_refresh_flower_160x600[0].pic4 = {};
        devDynamicContent.WLV_refresh_flower_160x600[0].pic4.Url = "https://drive.google.com/uc?id=1FRmTUSrJ_x66vUE7nwswR7wXO83MUBll";
        devDynamicContent.WLV_refresh_flower_300x250 = [{}];
        devDynamicContent.WLV_refresh_flower_300x250[0]._id = 0;
        devDynamicContent.WLV_refresh_flower_300x250[0].headline_1 = "Weekday Getaway";
        devDynamicContent.WLV_refresh_flower_300x250[0].subheadline_1 = "Save up to 15% and enjoy $30 in daily resort credit.";
        devDynamicContent.WLV_refresh_flower_300x250[0].headline_2 = "Weekday Getaway 2";
        devDynamicContent.WLV_refresh_flower_300x250[0].subheadline_2 = "";
        devDynamicContent.WLV_refresh_flower_300x250[0].headline_3 = "Weekday Getaway 3";
        devDynamicContent.WLV_refresh_flower_300x250[0].subheadline_3 = "";
        devDynamicContent.WLV_refresh_flower_300x250[0].headline_4 = "Weekday Getaway 4";
        devDynamicContent.WLV_refresh_flower_300x250[0].subheadline_4 = "";
        devDynamicContent.WLV_refresh_flower_300x250[0].text_offsetY = 0;
        devDynamicContent.WLV_refresh_flower_300x250[0].text_gap_offsetY = 0;
        devDynamicContent.WLV_refresh_flower_300x250[0].pic1 = {};
        devDynamicContent.WLV_refresh_flower_300x250[0].pic1.Url = "https://drive.google.com/uc?id=1qLPTRfkG-6ms_KiRAHe8rOJMjVJdoDm3";
        devDynamicContent.WLV_refresh_flower_300x250[0].pic2 = {};
        devDynamicContent.WLV_refresh_flower_300x250[0].pic2.Url = "https://drive.google.com/uc?id=1pfRYAk1d1gJSQnvVH0fYM4519kWX6AfY";
        devDynamicContent.WLV_refresh_flower_300x250[0].pic3 = {};
        devDynamicContent.WLV_refresh_flower_300x250[0].pic3.Url = "https://drive.google.com/uc?id=17T-rAMsqA8U0J4o9kvuGG-GCznyFk3iY";
        devDynamicContent.WLV_refresh_flower_300x250[0].pic4 = {};
        devDynamicContent.WLV_refresh_flower_300x250[0].pic4.Url = "https://drive.google.com/uc?id=1ZGTckGdQVNqPr_3TNTlfMDsm3sYxLJvG";
        devDynamicContent.WLV_refresh_flower_300x600 = [{}];

        devDynamicContent.WLV_refresh_flower_300x600[0]._id = 0;
        devDynamicContent.WLV_refresh_flower_300x600[0].headline_1 =  "Connoisseur<br>Series by Wynn";
        devDynamicContent.WLV_refresh_flower_300x600[0].subheadline_1 = "Go hands-on, behind-the-scenes<br>and in-depth with Master Mixologists Kate Gerwin and Mariena<br>Mercer Boarini.";
        devDynamicContent.WLV_refresh_flower_300x600[0].headline_2 =  "Connoisseur<br>Series by Wynn";
        devDynamicContent.WLV_refresh_flower_300x600[0].subheadline_2 = "Go hands-on, behind-the-scenes and in-depth, with Five Star Chef Ming Yu.";
        devDynamicContent.WLV_refresh_flower_300x600[0].headline_3 =  "Connoisseur<br>Series by Wynn";
        devDynamicContent.WLV_refresh_flower_300x600[0].subheadline_3 = "Go hands-on, behind-the-scenes<br>and in-depth with Master Mixologists Kate Gerwin and Mariena<br>Mercer Boarini.";
        devDynamicContent.WLV_refresh_flower_300x600[0].headline_4 = "Connoisseur<br>Series by Wynn";
        devDynamicContent.WLV_refresh_flower_300x600[0].subheadline_4 = "Go hands-on, behind-the-scenes and in-depth, with Five Star Chef Ming Yu.";
        devDynamicContent.WLV_refresh_flower_300x600[0].text_offsetY = 0;
        devDynamicContent.WLV_refresh_flower_300x600[0].text_gap_offsetY = 1;
        devDynamicContent.WLV_refresh_flower_300x600[0].pic1 = {};
        devDynamicContent.WLV_refresh_flower_300x600[0].pic1.Url = "https://drive.google.com/uc?id=1-hoEY-K7BQWn2Q3D-Hk53e8R4O0h0Dyj";
        
        devDynamicContent.WLV_refresh_flower_300x600[0].pic2 = {};
        devDynamicContent.WLV_refresh_flower_300x600[0].pic2.Url = "https://drive.google.com/uc?id=1pbETkFXANltfktplHWDJKqpOGoNWftnD";
        devDynamicContent.WLV_refresh_flower_300x600[0].pic3 = {};
        devDynamicContent.WLV_refresh_flower_300x600[0].pic3.Url = "https://drive.google.com/uc?id=1X2tKOqljhB8EI62MDq04TvYsKVYALjv_";
        devDynamicContent.WLV_refresh_flower_300x600[0].pic4 = {};
        devDynamicContent.WLV_refresh_flower_300x600[0].pic4.Url = "https://drive.google.com/uc?id=1Hiz6ZVXUoiJRAEQxugmS_mD0ADi1xcHl";
       
        devDynamicContent.WLV_refresh_flower_300x600[0].pic1.Url = "rev_BarParasol-Havana.jpg";
        devDynamicContent.WLV_refresh_flower_300x600[0].pic2.Url = "rev_WingLei-MingYu.jpg";
        devDynamicContent.WLV_refresh_flower_300x600[0].pic3.Url = "rev_BarParasol-Havana.jpg";
        devDynamicContent.WLV_refresh_flower_300x600[0].pic4.Url = "rev_WingLei-MingYu.jpg";

        devDynamicContent.WLV_refresh_flower_728x90 = [{}];
        devDynamicContent.WLV_refresh_flower_728x90[0]._id = 0;
        devDynamicContent.WLV_refresh_flower_728x90[0].headline_1 = "Weekday Getaway";
        devDynamicContent.WLV_refresh_flower_728x90[0].subheadline_1 = "Save up to 15% and enjoy $30 in daily resort credit.";
        devDynamicContent.WLV_refresh_flower_728x90[0].headline_2 = "";
        devDynamicContent.WLV_refresh_flower_728x90[0].subheadline_2 = "";
        devDynamicContent.WLV_refresh_flower_728x90[0].headline_3 = "";
        devDynamicContent.WLV_refresh_flower_728x90[0].subheadline_3 = "";
        devDynamicContent.WLV_refresh_flower_728x90[0].headline_4 = "";
        devDynamicContent.WLV_refresh_flower_728x90[0].subheadline_4 = "";
        devDynamicContent.WLV_refresh_flower_728x90[0].text_offsetY = 0;
        devDynamicContent.WLV_refresh_flower_728x90[0].text_gap_offsetY = 1;
        devDynamicContent.WLV_refresh_flower_728x90[0].pic1 = {};
        devDynamicContent.WLV_refresh_flower_728x90[0].pic1.Url = "https://drive.google.com/uc?id=1P5M6HczhpbkHqWKJmi16-LyllXSX7gMs";
        devDynamicContent.WLV_refresh_flower_728x90[0].pic2 = {};
        devDynamicContent.WLV_refresh_flower_728x90[0].pic2.Url = "https://drive.google.com/uc?id=18B1k35VU6_WmomnXK7nw8-HLF00gHpJu";
        devDynamicContent.WLV_refresh_flower_728x90[0].pic3 = {};
        devDynamicContent.WLV_refresh_flower_728x90[0].pic3.Url = "https://drive.google.com/uc?id=1qzMaak7sqZ6-1e7rt5my3Whrub2pNsMb";
        devDynamicContent.WLV_refresh_flower_728x90[0].pic4 = {};
        devDynamicContent.WLV_refresh_flower_728x90[0].pic4.Url = "https://drive.google.com/uc?id=1Q_rPDggpwlM5ybRg41Lk5X21lRQg_jif";
        devDynamicContent.WLV_refresh_flower_970x250 = [{}];
        devDynamicContent.WLV_refresh_flower_970x250[0]._id = 0;
        devDynamicContent.WLV_refresh_flower_970x250[0].headline_1 = "Weekday Getaway";
        devDynamicContent.WLV_refresh_flower_970x250[0].subheadline_1 = "Save up to 15% and enjoy $30 in daily resort credit.";
        devDynamicContent.WLV_refresh_flower_970x250[0].headline_2 = "";
        devDynamicContent.WLV_refresh_flower_970x250[0].subheadline_2 = "";
        devDynamicContent.WLV_refresh_flower_970x250[0].headline_3 = "";
        devDynamicContent.WLV_refresh_flower_970x250[0].subheadline_3 = "";
        devDynamicContent.WLV_refresh_flower_970x250[0].headline_4 = "";
        devDynamicContent.WLV_refresh_flower_970x250[0].subheadline_4 = "";
        devDynamicContent.WLV_refresh_flower_970x250[0].text_offsetY = 0;
        devDynamicContent.WLV_refresh_flower_970x250[0].text_gap_offsetY = 3;
        devDynamicContent.WLV_refresh_flower_970x250[0].pic1 = {};
        devDynamicContent.WLV_refresh_flower_970x250[0].pic1.Url = "https://drive.google.com/uc?id=1RrUwN8iAQ_57svwktTSGBwpXA8zzJgdn";
        devDynamicContent.WLV_refresh_flower_970x250[0].pic2 = {};
        devDynamicContent.WLV_refresh_flower_970x250[0].pic2.Url = "https://drive.google.com/uc?id=14ZLT9sqcpVmwIGm_3aTDJYthW-QXPhKj";
        devDynamicContent.WLV_refresh_flower_970x250[0].pic3 = {};
        devDynamicContent.WLV_refresh_flower_970x250[0].pic3.Url = "https://drive.google.com/uc?id=18K8Mpwt8vssLvCLyrg6I2_62fXNoTWSp";
        devDynamicContent.WLV_refresh_flower_970x250[0].pic4 = {};
        devDynamicContent.WLV_refresh_flower_970x250[0].pic4.Url = "https://drive.google.com/uc?id=1OuYoHysikQjymx-jG9AmTVR28ZDoGuJ0";
        devDynamicContent.WLV_refresh_flower_320x50 = [{}];
        devDynamicContent.WLV_refresh_flower_320x50[0]._id = 0;
        devDynamicContent.WLV_refresh_flower_320x50[0].headline_1 = "Weekday Getaway";
        devDynamicContent.WLV_refresh_flower_320x50[0].subheadline_1 = "Save up to 15% and enjoy $30 in daily resort credit.";
        devDynamicContent.WLV_refresh_flower_320x50[0].headline_2 = "";
        devDynamicContent.WLV_refresh_flower_320x50[0].subheadline_2 = "";
        devDynamicContent.WLV_refresh_flower_320x50[0].headline_3 = "";
        devDynamicContent.WLV_refresh_flower_320x50[0].subheadline_3 = "";
        devDynamicContent.WLV_refresh_flower_320x50[0].headline_4 = "";
        devDynamicContent.WLV_refresh_flower_320x50[0].subheadline_4 = "";
        devDynamicContent.WLV_refresh_flower_320x50[0].text_offsetY = 0;
        devDynamicContent.WLV_refresh_flower_320x50[0].text_gap_offsetY = 1;
        devDynamicContent.WLV_refresh_flower_320x50[0].pic1 = {};
        devDynamicContent.WLV_refresh_flower_320x50[0].pic1.Url = "https://drive.google.com/uc?id=1P5M6HczhpbkHqWKJmi16-LyllXSX7gMs";
        devDynamicContent.WLV_refresh_flower_320x50[0].pic2 = {};
        devDynamicContent.WLV_refresh_flower_320x50[0].pic2.Url = "https://drive.google.com/uc?id=18B1k35VU6_WmomnXK7nw8-HLF00gHpJu";
        devDynamicContent.WLV_refresh_flower_320x50[0].pic3 = {};
        devDynamicContent.WLV_refresh_flower_320x50[0].pic3.Url = "https://drive.google.com/uc?id=1qzMaak7sqZ6-1e7rt5my3Whrub2pNsMb";
        devDynamicContent.WLV_refresh_flower_320x50[0].pic4 = {};
        devDynamicContent.WLV_refresh_flower_320x50[0].pic4.Url = "https://drive.google.com/uc?id=1Q_rPDggpwlM5ybRg41Lk5X21lRQg_jif";
        devDynamicContent.WLV_refresh_flower_300x50 = [{}];
        devDynamicContent.WLV_refresh_flower_300x50[0]._id = 0;
        devDynamicContent.WLV_refresh_flower_300x50[0].headline_1 = "Weekday Getaway";
        devDynamicContent.WLV_refresh_flower_300x50[0].subheadline_1 = "Save up to 15% and enjoy $30 in daily resort credit.";
        devDynamicContent.WLV_refresh_flower_300x50[0].headline_2 = "";
        devDynamicContent.WLV_refresh_flower_300x50[0].subheadline_2 = "";
        devDynamicContent.WLV_refresh_flower_300x50[0].headline_3 = "";
        devDynamicContent.WLV_refresh_flower_300x50[0].subheadline_3 = "";
        devDynamicContent.WLV_refresh_flower_300x50[0].headline_4 = "";
        devDynamicContent.WLV_refresh_flower_300x50[0].subheadline_4 = "";
        devDynamicContent.WLV_refresh_flower_300x50[0].text_offsetY = 0;
        devDynamicContent.WLV_refresh_flower_300x50[0].text_gap_offsetY = 1;
        devDynamicContent.WLV_refresh_flower_300x50[0].pic1 = {};
        devDynamicContent.WLV_refresh_flower_300x50[0].pic1.Url = "https://drive.google.com/uc?id=1P5M6HczhpbkHqWKJmi16-LyllXSX7gMs";
        devDynamicContent.WLV_refresh_flower_300x50[0].pic2 = {};
        devDynamicContent.WLV_refresh_flower_300x50[0].pic2.Url = "https://drive.google.com/uc?id=18B1k35VU6_WmomnXK7nw8-HLF00gHpJu";
        devDynamicContent.WLV_refresh_flower_300x50[0].pic3 = {};
        devDynamicContent.WLV_refresh_flower_300x50[0].pic3.Url = "https://drive.google.com/uc?id=1qzMaak7sqZ6-1e7rt5my3Whrub2pNsMb";
        devDynamicContent.WLV_refresh_flower_300x50[0].pic4 = {};
        devDynamicContent.WLV_refresh_flower_300x50[0].pic4.Url = "https://drive.google.com/uc?id=1Q_rPDggpwlM5ybRg41Lk5X21lRQg_jif";
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
            bg = select('#wrapper'),
            logo = select('#logo'), 
            letter_w = select('#w'),
            letter_y = select('#y'),
            letter_nn = select('#nn'),
            lasvegas = select('#lasvegas'),
            sign_r = select('#r'),
            myCanvas = select('#myCanvas'),
            masker = select('#masker'),
            //
            imgs = [],
            pics = [],
            dc = dynamicContent.WLV_refresh_flower_main[0],
            dcSize = dynamicContent.WLV_refresh_flower_300x600[0],
            //
            numPicsToShow = dc.numPicsToShow,
            numTextBoxesToShow = 4,
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
            flowersAndPlants  = select('#flowersAndPlants'),
            flowerWraps = selectAll('.flowerWrap'),
            plantWraps = selectAll('.plantWrap'),
            plants = selectAll('.plant'),
            flowers = selectAll('.flower'),
            plantWrap1 = select('#plantWrap1'),
            plantWrap2 = select('#plantWrap2'),
            cta = select('#cta'), 
            introImage_holder = select('#introImage_holder'), 
            imagesWrap = select('#imagesWrap'), 
            imageW = Math.round( select('#imagesWrap').getBoundingClientRect().width ),
            imageH =  Math.round( select('#imagesWrap').getBoundingClientRect().height),
            imageRandomPositionPool = [{x:0,y:1*imageH,},{x:0,y:-1*imageH},{x:-1*imageW,y:0},{x:1*imageW,y:0}],
            imagePositionsArr =[{x:0,y:0}],
            tl_images = gsap.timeline(),
            tl = gsap.timeline();

        /************** Modify VARIABLES ********************/
            if ( (isNaN(numPicsToShow) ||  numPicsToShow<1 || numPicsToShow>4  ) ) numPicsToShow = 1;
            //Add to Pics Array
            for(let i=0;i<numPicsToShow; i++ ){
                let num = i+1;
                pics.push( dcSize['pic'+ num ].Url ) 
            }
            //Create Array holding random IMAGES Positions:
                function randomIntFromInterval(min, max) { // min and max included 
                    return Math.floor(Math.random() * (max - min + 1) + min)
                }
                let newX = 0;
                let newY = 0
                for(let i=0;i<numPicsToShow-1; i++ ){
                    const randomNum = randomIntFromInterval(0, 3)
                    newX+= imageRandomPositionPool[randomNum].x
                    newY+= imageRandomPositionPool[randomNum].y
                    imagePositionsArr.push( {x:newX, y:newY}  )
                }
            ////
            // Headline Array & SubHeadline Array - remove spaces etc. 
            for(let i=0;i<4; i++ ){
                let num = i+1;
                //if Headline String is just spaces or other BS, then make it "".
                let headString = dcSize['headline_'+ num ];
                if (!headString.replace(/\s/g, '').length) {
                    dcSize['headline_'+ num ] ="";
                }
                //if subHeadline String is just spaces or other BS, then make it "".
                let subheadString = dcSize['subheadline_'+ num ];
                if (!subheadString.replace(/\s/g, '').length) {
                    dcSize['subheadline_'+ num ] ="";
                }
                headlines.push( dcSize['headline_'+ num ] ) 
                subheadlines.push( dcSize['subheadline_'+ num ] ) 
            }
           //Headline Array & SubHeadline Array - Remove last Array item if its Blank. 
            for(let i=0;i<4; i++ ){
                let num = 3-i;
                if (headlines[num]=="" && subheadlines[num]==""){
                    headlines.pop()
                    subheadlines.pop()
                    numTextBoxesToShow = headlines.length;
                }else{
                    break;
                }
            }

/**********************************/
        bg.style.backgroundColor = dc.color_bg;
        introImage_holder.style.backgroundColor = dc.color_bg;
        cta.style.background = dc.color_ctaBG;
        cta.style.color = dc.color_ctaText;
        cta.style.borderColor = dc.color_ctaBG;
        cta.innerHTML = dc.cta;
        document.getElementById("plant1color").style.stroke = dc.color_ctaBG;
        document.getElementById("plant2color").style.stroke = dc.color_ctaBG;


        // Create Mask
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle=dc.color_bg;
        ctx.fillRect(0,0,300,600);
        ctx.globalCompositeOperation = 'destination-in';
        ctx.drawImage(document.getElementById("masker"), 0, 0,300,600);
        
        //CTA - reduce font size if too long. 
        let maxCTAchars = 8
        if(dc.cta.length>maxCTAchars){
            let myfontSize = parseFloat( window.getComputedStyle(cta, null).getPropertyValue('font-size') );
            let subtractAmt = dc.cta.length - maxCTAchars;
            cta.style.fontSize = (myfontSize - subtractAmt)+"px";
        }


        // if (dc.flowers_opacity == 0 ) gsap.set([plants], {alpha: dc.flowers_opacity });
        gsap.set([plants], {alpha: dc.flowers_opacity });
        // gsap.set([flowers,plant2,plant1], {alpha:0 });

        function newColors (newColor){
            gsap.set([lasvegas,sign_r], {fill:newColor });
            gsap.set([letter_w,letter_y,letter_nn], {stroke:newColor});
            //gsap.set(flowers[0], {fill: dc.flowerColor1 });
            //gsap.set(flowers[1], {fill: dc.flowerColor2 });
        }
        newColors(dc.color_headline)

        //CREATE Divs and populate Header and subheader Text:
        for(var i = 0; i < headlines.length; i++) {
            var head_div = document.createElement('div');
            head_div.className = "text_header";
            head_div.id = "text_head"+i;
            head_div.innerHTML =  headlines[i];
            head_div.style.color =  dc.color_headline;
            text_headDiv.push( head_div.id) ;
            textBoxer.appendChild(head_div);

            var subhead_div = document.createElement('div');
            subhead_div.className = "text_subheader";
            subhead_div.id = "text_subhead"+i;
            subhead_div.innerHTML = subheadlines[i];
            subhead_div.style.color =  dc.color_subheadline;
            text_subheadDiv.push(subhead_div.id )
            textBoxer.appendChild(subhead_div);
        }
        
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
            imgs.reverse()
            for(var i = 0; i < imgs.length; i++) {
                var div = document.createElement('div');
                div.className = "imageDiv";
                div.style.background = "url(" + imgs[i].src + ") no-repeat";
                div.style.backgroundPosition = "50% 40%";
                div.style.backgroundSize = "cover";
                //Position images randomly but contiguous:
                    div.style.top = String(-1*imagePositionsArr[imgs.length-i-1].y)+"px";
                    div.style.left = String(-1*imagePositionsArr[imgs.length-i-1].x)+"px";
                //
                imagesWrap.appendChild(div);
            }
            imagePositionsArr.shift(); //delete first item of array
            animate();
		}

        function runFitBox (){  
            gsap.set(textBoxer, {y: "+="+ text_offsetY +""})
            var textRatio = 70;
            var centerOn = 0.5;  // 0 to 1
            var pad = 1 + text_gap_offsetY;

            for(let i= 0;i<numTextBoxesToShow; i++ ){
                let elementHead = 'text_head'+i;
                let elementSub = 'text_subhead'+i;
                fitBox.run( pad , centerOn , textRatio,  document.getElementById(elementHead),  document.getElementById(elementSub) ) ;
            }
       }
        //// runFitBox ////
        // gsap.delayedCall(0.5,runFitBox);  //dropping this to 0 or less than 0.4 can cause alignment issues with fitbox. 
        gsap.delayedCall(0.5,runFitBox);  //dropping this to 0 or less than 0.4 can cause alignment issues with fitbox. 

/******************  MAIN ANIMATION  ******************/ 
		function animate() { 
            gsap.registerPlugin(DrawSVGPlugin);
            gsap.registerEffect({
                name: "blurIn",
                effect: (targets, config) => {
                    var tlEffect = gsap.timeline();
                    tlEffect
                        .from(targets, {duration: config.duration, blur:config.blur, stagger:config.stagger, force3D:true, ease:"sine"})
                        .from(targets, { duration: config.duration, stagger:config.stagger, alpha:0,ease:"none"}, "<")
                        .from(targets, {duration: 5.5, stagger:config.stagger,scale:1.1, ease:"Power1.easeOut"}, "<")
                        return tlEffect;
                },
                defaults: {duration:1.3, stagger:5.5, blur:10, },
                extendTimeline: true,
            });
            gsap.registerEffect({
                name: "fadeIn",
                effect: (targets, config) => {
                    var tlEffect = gsap.timeline();
                    tlEffect
                        .from(targets, {duration: config.duration, y:config.y, stagger:config.stagger, ease:"power2"})
                        .from(targets, {duration: config.duration, stagger:config.stagger, alpha:0, ease:"none"}, "<")
                        return tlEffect;
                },
                defaults: {duration: 1.2, y:"-=7", stagger:4.5},
                extendTimeline: true,
            });
            gsap.registerEffect({
                name: "fadeOut",
                effect: (targets, config) => {
                    if(targets.length<1) return;
                    var tlEffect = gsap.timeline();
                    tlEffect
                        // .to(targets, {duration: config.duration, y:config.y, stagger:config.stagger, ease:"power2.in"})
                        .to(targets, {duration: config.duration, stagger:config.stagger, alpha:0, ease:"none"}, "<")
                        return tlEffect;
                },
                defaults: {duration: 0.8, y:"-=7", stagger:4.5},
                extendTimeline: true,
            });
            ///////////////////////////////////////////////////////////////
            var heads = selectAll('.text_header'),
                subheads = selectAll('.text_subheader'),
                imageDivs = selectAll('.imageDiv'),
                heads2 = [], 
                subheads2 = [];

            for(var i = 0; i < (numTextBoxesToShow-1); i++) {
                heads2[i] = heads[i];
                subheads2[i] = subheads[i];
            }

            // logoIntro = false;

            gsap.from(plantWraps, {duration:15, rotation:"+=10", ease:"none"})
            // gsap.to(flowerWraps, {duration:15, rotation:"+=100", ease:"none"})

            // Create tl_images timeline:
            tl_images.pause();
            let totalMoves = imageDivs.length-1
            tl_images
            .set( imageDivs[totalMoves-i], {scale:1})
            for(var i = 0; i < totalMoves; i++) { 
                tl_images
                .to(imagesWrap, {duration:1.3, x:imagePositionsArr[i].x, y:imagePositionsArr[i].y, ease:"Power4.easeOut"}, "+=3.5")   /* add slight rotation offset */ 
                .set( imageDivs[totalMoves-i], {alpha:0})
            }
            //////////////////////

			tl
            .to([border], {duration: 0.7, borderColor: dc.color_border, ease: "none"})
            .to(bannerCover, {duration:0.7, alpha:0, ease:"none"})
            
            if(logoIntro) {
                tl
                .from(letter_w, {duration:0.5, drawSVG: 0, ease:"sine.in"}, "<")
                .from(letter_y, {duration:0.3, drawSVG: 0, ease:"sine.in"}, ">")
                .from(letter_nn, {duration:0.8, drawSVG: 0, ease:"sine.inOut"}, ">")
                .from(lasvegas, {duration:0.7, y:"-=10", alpha: 0, ease:"sine"}, ">")
                .from(sign_r, {duration:0.5, alpha: 0, ease:"none"}, "<")
                .to([logo], {duration:0.5, alpha:0, ease:"none"}, ">2")
                .to([introImage_holder], {duration:1, alpha:0, ease:"none"}, "<0.4")
            } else {
                tl.set([logo,introImage_holder], {alpha:0}, "<")
            }
            tl
            .set(logo, {alpha:0, y:116, x:-3, scale:0.45}, ">")
            //.blurIn(imageDivs, "<")
            .to(logo, {duration:1, alpha:1, ease:"none"}, ">0.6")
            .from(cta, {duration:0.5, alpha: 0, ease:"none"}, ">-0.2")
            .from(cta, {duration:1, rotateX:90, ease:"power2"}, "<")
            .from(flowersAndPlants, {duration:1, alpha:0, ease:"none"}, "<-8")
            .from(plants, {duration:8, drawSVG:"30% 30%", ease:"power4.easeOut"}, "<")
            .call(goPic,null, "<0.5") // start image changing
       
            if(numTextBoxesToShow>0){
                tl
                .fadeIn(heads, "<-1.8")
                .fadeIn(subheads, {y:0}, "<0.5")
                .fadeOut(heads2, "<3.5")
                .fadeOut(subheads2, {y:0}, "<0")
            }
		}
        function goPic (){   tl_images.play(0,false)  }

/******************  //end of MAIN ANIMATION  ******************/    
    
        
/********************  EVENTS  ********************/ 
        cta.addEventListener('mouseover', (e) => {
            e.target.style.background = dc.color_ctaBG_over ;
            e.target.style.borderColor = dc.color_ctaBG_over;
            e.target.style.color = dc.color_ctaText_over;
            // e.target.style.color = "#ff0000";

        });
        cta.addEventListener('mouseout', (e) => {
            e.target.style.background = dc.color_ctaBG;
            e.target.style.borderColor = dc.color_ctaBG;
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