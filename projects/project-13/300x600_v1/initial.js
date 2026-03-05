"use strict";
window.onload = ()=> {
/******************** ENABLER  ********************/     
const init = () => {
    (Enabler.isPageLoaded()) ? politeInit() : Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
};
Enabler.isInitialized() ? init() : Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
/***************** //end ofENABLER  *****************/  

/******************** VARIABLES  ********************/ 
    
    const politeInit=()=>{	
        // Dynamic Content variables and sample values
        Enabler.setProfileId(10914388);
        var devDynamicContent = {};
    
        devDynamicContent.WLV_seasonal_970x250 = [{}];
        devDynamicContent.WLV_seasonal_970x250[0]._id = 0;
        devDynamicContent.WLV_seasonal_970x250[0].version = "v1";
        devDynamicContent.WLV_seasonal_970x250[0].head_1 = "Work Hard,<br><i>Play<\/i> Harder";
        devDynamicContent.WLV_seasonal_970x250[0].subhead_1 = "Save up to 30% on select dates,<br>and enjoy a $75 beverage credit per stay. ";
        devDynamicContent.WLV_seasonal_970x250[0].head_2 = "";
        devDynamicContent.WLV_seasonal_970x250[0].subhead_2 = "";
        devDynamicContent.WLV_seasonal_970x250[0].head_3 = "";
        devDynamicContent.WLV_seasonal_970x250[0].subhead_3 = "";
        devDynamicContent.WLV_seasonal_970x250[0].head_4 = "";
        devDynamicContent.WLV_seasonal_970x250[0].subhead_4 = "";
        devDynamicContent.WLV_seasonal_970x250[0].text_offsetY = 0;
        devDynamicContent.WLV_seasonal_970x250[0].text_gap_offsetY = 0;
        devDynamicContent.WLV_seasonal_970x250[0].pic1 = {};
        devDynamicContent.WLV_seasonal_970x250[0].pic1.Type = "file";
        devDynamicContent.WLV_seasonal_970x250[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240821162534682_barParasol-TrioBar.jpg";
        devDynamicContent.WLV_seasonal_970x250[0].pic2 = {};
        devDynamicContent.WLV_seasonal_970x250[0].pic2.Type = "file";
        devDynamicContent.WLV_seasonal_970x250[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240821162542624_pool-WomenTrio.jpg";
        devDynamicContent.WLV_seasonal_970x250[0].pic3 = {};
        devDynamicContent.WLV_seasonal_970x250[0].pic3.Type = "file";
        devDynamicContent.WLV_seasonal_970x250[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_970x250[0].pic4 = {};
        devDynamicContent.WLV_seasonal_970x250[0].pic4.Type = "file";
        devDynamicContent.WLV_seasonal_970x250[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_970x250[0].color_ctaBG = "#693f25";
        devDynamicContent.WLV_seasonal_970x250[0].color_ctaText = "#000";
        devDynamicContent.WLV_seasonal_970x250[0].color_ctaBG_over = "#000";
        devDynamicContent.WLV_seasonal_970x250[0].color_ctaText_over = "#693f25";

        devDynamicContent.WLV_seasonal_300x600 = [{}];
        devDynamicContent.WLV_seasonal_300x600[0]._id = 0;
        devDynamicContent.WLV_seasonal_300x600[0].version = "v1";
        devDynamicContent.WLV_seasonal_300x600[0].head_1 = "Work Hard,<br><i>Play<\/i> Harder";
        devDynamicContent.WLV_seasonal_300x600[0].subhead_1 = "Save up to 30% on select dates,<br>and enjoy a $75 beverage credit per stay. ";
        devDynamicContent.WLV_seasonal_300x600[0].head_2 = "";
        devDynamicContent.WLV_seasonal_300x600[0].subhead_2 = "";
        devDynamicContent.WLV_seasonal_300x600[0].head_3 = "";
        devDynamicContent.WLV_seasonal_300x600[0].subhead_3 = "";
        devDynamicContent.WLV_seasonal_300x600[0].head_4 = "";
        devDynamicContent.WLV_seasonal_300x600[0].subhead_4 = "";
        devDynamicContent.WLV_seasonal_300x600[0].text_offsetY = 0;
        devDynamicContent.WLV_seasonal_300x600[0].text_gap_offsetY = 5;
        devDynamicContent.WLV_seasonal_300x600[0].pic1 = {};
        devDynamicContent.WLV_seasonal_300x600[0].pic1.Type = "file";
        devDynamicContent.WLV_seasonal_300x600[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20241001153925999_pool-WomenTrio.jpg";
        devDynamicContent.WLV_seasonal_300x600[0].pic2 = {};
        devDynamicContent.WLV_seasonal_300x600[0].pic2.Type = "file";
        devDynamicContent.WLV_seasonal_300x600[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20241001153920244_barParasol-TrioBar.jpg";
        devDynamicContent.WLV_seasonal_300x600[0].pic3 = {};
        devDynamicContent.WLV_seasonal_300x600[0].pic3.Type = "file";
        devDynamicContent.WLV_seasonal_300x600[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_300x600[0].pic4 = {};
        devDynamicContent.WLV_seasonal_300x600[0].pic4.Type = "file";
        devDynamicContent.WLV_seasonal_300x600[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_300x600[0].color_logos = "#FFF";
        devDynamicContent.WLV_seasonal_300x600[0].color_ctaBG = "#FFF";
        devDynamicContent.WLV_seasonal_300x600[0].color_ctaText = "#693f25";
        devDynamicContent.WLV_seasonal_300x600[0].color_ctaBG_over = "#693f25";
        devDynamicContent.WLV_seasonal_300x600[0].color_ctaText_over = "#FFF";

        devDynamicContent.WLV_seasonal_160x600 = [{}];
        devDynamicContent.WLV_seasonal_160x600[0]._id = 0;
        devDynamicContent.WLV_seasonal_160x600[0].version = "v1";
        devDynamicContent.WLV_seasonal_160x600[0].head_1 = "Work Hard, <i>Play<\/i> Harder";
        devDynamicContent.WLV_seasonal_160x600[0].subhead_1 = "Save up to 30% on select dates,  and enjoy a $75 beverage credit per stay. ";
        devDynamicContent.WLV_seasonal_160x600[0].head_2 = "";
        devDynamicContent.WLV_seasonal_160x600[0].subhead_2 = "";
        devDynamicContent.WLV_seasonal_160x600[0].head_3 = "";
        devDynamicContent.WLV_seasonal_160x600[0].subhead_3 = "";
        devDynamicContent.WLV_seasonal_160x600[0].head_4 = "";
        devDynamicContent.WLV_seasonal_160x600[0].subhead_4 = "";
        devDynamicContent.WLV_seasonal_160x600[0].text_offsetY = 0;
        devDynamicContent.WLV_seasonal_160x600[0].text_gap_offsetY = 1;
        devDynamicContent.WLV_seasonal_160x600[0].pic1 = {};
        devDynamicContent.WLV_seasonal_160x600[0].pic1.Type = "file";
        devDynamicContent.WLV_seasonal_160x600[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240821154628810_barParasol-TrioBar.jpg";
        devDynamicContent.WLV_seasonal_160x600[0].pic2 = {};
        devDynamicContent.WLV_seasonal_160x600[0].pic2.Type = "file";
        devDynamicContent.WLV_seasonal_160x600[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240821154637369_pool-WomenTrio.jpg";
        devDynamicContent.WLV_seasonal_160x600[0].pic3 = {};
        devDynamicContent.WLV_seasonal_160x600[0].pic3.Type = "file";
        devDynamicContent.WLV_seasonal_160x600[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_160x600[0].pic4 = {};
        devDynamicContent.WLV_seasonal_160x600[0].pic4.Type = "file";
        devDynamicContent.WLV_seasonal_160x600[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_160x600[0].color_logos = "#FFF";
        devDynamicContent.WLV_seasonal_160x600[0].color_ctaBG = "#FFF";
        devDynamicContent.WLV_seasonal_160x600[0].color_ctaText = "#693f25";
        devDynamicContent.WLV_seasonal_160x600[0].color_ctaBG_over = "#693f25";
        devDynamicContent.WLV_seasonal_160x600[0].color_ctaText_over = "#FFF";


        devDynamicContent.WLV_seasonal_300x250 = [{}];
        devDynamicContent.WLV_seasonal_300x250[0]._id = 0;
        devDynamicContent.WLV_seasonal_300x250[0].version = "v1";
        devDynamicContent.WLV_seasonal_300x250[0].head_1 = "Work Hard, <i>Play<\/i> Harder";
        devDynamicContent.WLV_seasonal_300x250[0].subhead_1 = "Save up to 30% on select dates,  and enjoy a $75 beverage credit per stay. ";
        devDynamicContent.WLV_seasonal_300x250[0].head_2 = "";
        devDynamicContent.WLV_seasonal_300x250[0].subhead_2 = "";
        devDynamicContent.WLV_seasonal_300x250[0].head_3 = "";
        devDynamicContent.WLV_seasonal_300x250[0].subhead_3 = "";
        devDynamicContent.WLV_seasonal_300x250[0].head_4 = "";
        devDynamicContent.WLV_seasonal_300x250[0].subhead_4 = "";
        devDynamicContent.WLV_seasonal_300x250[0].text_offsetY = 0;
        devDynamicContent.WLV_seasonal_300x250[0].text_gap_offsetY = 0;
        devDynamicContent.WLV_seasonal_300x250[0].pic1 = {};
        devDynamicContent.WLV_seasonal_300x250[0].pic1.Type = "file";
        devDynamicContent.WLV_seasonal_300x250[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240821170228169_barParasol-TrioBar.jpg";
        devDynamicContent.WLV_seasonal_300x250[0].pic2 = {};
        devDynamicContent.WLV_seasonal_300x250[0].pic2.Type = "file";
        devDynamicContent.WLV_seasonal_300x250[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240821170235528_pool-WomenTrio.jpg";
        devDynamicContent.WLV_seasonal_300x250[0].pic3 = {};
        devDynamicContent.WLV_seasonal_300x250[0].pic3.Type = "file";
        devDynamicContent.WLV_seasonal_300x250[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_300x250[0].pic4 = {};
        devDynamicContent.WLV_seasonal_300x250[0].pic4.Type = "file";
        devDynamicContent.WLV_seasonal_300x250[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_300x250[0].color_logos = "#FFF";
        devDynamicContent.WLV_seasonal_300x250[0].color_ctaBG = "#693f25";
        devDynamicContent.WLV_seasonal_300x250[0].color_ctaText = "#000";
        devDynamicContent.WLV_seasonal_300x250[0].color_ctaBG_over = "#000";
        devDynamicContent.WLV_seasonal_300x250[0].color_ctaText_over = "#693f25";

        devDynamicContent.WLV_seasonal_728x90 = [{}];
        devDynamicContent.WLV_seasonal_728x90[0]._id = 0;
        devDynamicContent.WLV_seasonal_728x90[0].version = "v1";
        devDynamicContent.WLV_seasonal_728x90[0].head_1 = "Work Hard, <i>Play<\/i> Harder";
        devDynamicContent.WLV_seasonal_728x90[0].subhead_1 = "Save up to 30% on select dates,  and enjoy a $75 beverage credit per stay. ";
        devDynamicContent.WLV_seasonal_728x90[0].head_2 = "";
        devDynamicContent.WLV_seasonal_728x90[0].subhead_2 = "";
        devDynamicContent.WLV_seasonal_728x90[0].head_3 = "";
        devDynamicContent.WLV_seasonal_728x90[0].subhead_3 = "";
        devDynamicContent.WLV_seasonal_728x90[0].head_4 = "";
        devDynamicContent.WLV_seasonal_728x90[0].subhead_4 = "";
        devDynamicContent.WLV_seasonal_728x90[0].text_offsetY = 0;
        devDynamicContent.WLV_seasonal_728x90[0].text_gap_offsetY = 0;
        devDynamicContent.WLV_seasonal_728x90[0].pic1 = {};
        devDynamicContent.WLV_seasonal_728x90[0].pic1.Type = "file";
        devDynamicContent.WLV_seasonal_728x90[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240821165224606_barParasol-TrioBar.jpg";
        devDynamicContent.WLV_seasonal_728x90[0].pic2 = {};
        devDynamicContent.WLV_seasonal_728x90[0].pic2.Type = "file";
        devDynamicContent.WLV_seasonal_728x90[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240821165231889_pool-WomenTrio.jpg";
        devDynamicContent.WLV_seasonal_728x90[0].pic3 = {};
        devDynamicContent.WLV_seasonal_728x90[0].pic3.Type = "file";
        devDynamicContent.WLV_seasonal_728x90[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_728x90[0].pic4 = {};
        devDynamicContent.WLV_seasonal_728x90[0].pic4.Type = "file";
        devDynamicContent.WLV_seasonal_728x90[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_728x90[0].color_logos = "#693f25";
        devDynamicContent.WLV_seasonal_728x90[0].color_ctaBG = "#693f25";
        devDynamicContent.WLV_seasonal_728x90[0].color_ctaText = "#000";
        devDynamicContent.WLV_seasonal_728x90[0].color_ctaBG_over = "#000";
        devDynamicContent.WLV_seasonal_728x90[0].color_ctaText_over = "#693f25";

        devDynamicContent.WLV_seasonal_320x50 = [{}];
        devDynamicContent.WLV_seasonal_320x50[0]._id = 0;
        devDynamicContent.WLV_seasonal_320x50[0].version = "v1";
        devDynamicContent.WLV_seasonal_320x50[0].head_1 = "Work Hard, <i>Play<\/i> Harder";
        devDynamicContent.WLV_seasonal_320x50[0].subhead_1 = "";
        devDynamicContent.WLV_seasonal_320x50[0].head_2 = "";
        devDynamicContent.WLV_seasonal_320x50[0].subhead_2 = "";
        devDynamicContent.WLV_seasonal_320x50[0].head_3 = "";
        devDynamicContent.WLV_seasonal_320x50[0].subhead_3 = "";
        devDynamicContent.WLV_seasonal_320x50[0].head_4 = "";
        devDynamicContent.WLV_seasonal_320x50[0].subhead_4 = "";
        devDynamicContent.WLV_seasonal_320x50[0].text_offsetY = 0;
        devDynamicContent.WLV_seasonal_320x50[0].text_gap_offsetY = 0;
        devDynamicContent.WLV_seasonal_320x50[0].pic1 = {};
        devDynamicContent.WLV_seasonal_320x50[0].pic1.Type = "file";
        devDynamicContent.WLV_seasonal_320x50[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240822124135783_barParasol-TrioBar.jpg";
        devDynamicContent.WLV_seasonal_320x50[0].pic2 = {};
        devDynamicContent.WLV_seasonal_320x50[0].pic2.Type = "file";
        devDynamicContent.WLV_seasonal_320x50[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240822124143153_pool-WomenTrio.jpg";
        devDynamicContent.WLV_seasonal_320x50[0].pic3 = {};
        devDynamicContent.WLV_seasonal_320x50[0].pic3.Type = "file";
        devDynamicContent.WLV_seasonal_320x50[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_320x50[0].pic4 = {};
        devDynamicContent.WLV_seasonal_320x50[0].pic4.Type = "file";
        devDynamicContent.WLV_seasonal_320x50[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_320x50[0].color_logos = "#693f25";
        devDynamicContent.WLV_seasonal_320x50[0].color_ctaBG = "#693f25";
        devDynamicContent.WLV_seasonal_320x50[0].color_ctaText = "#000";
        devDynamicContent.WLV_seasonal_320x50[0].color_ctaBG_over = "#000";
        devDynamicContent.WLV_seasonal_320x50[0].color_ctaText_over = "#693f25";

        devDynamicContent.WLV_seasonal_300x50 = [{}];
        devDynamicContent.WLV_seasonal_300x50[0]._id = 0;
        devDynamicContent.WLV_seasonal_300x50[0].version = "v1";
        devDynamicContent.WLV_seasonal_300x50[0].head_1 = "Work Hard, <i>Play<\/i> Harder";
        devDynamicContent.WLV_seasonal_300x50[0].subhead_1 = "";
        devDynamicContent.WLV_seasonal_300x50[0].head_2 = "";
        devDynamicContent.WLV_seasonal_300x50[0].subhead_2 = "";
        devDynamicContent.WLV_seasonal_300x50[0].head_3 = "";
        devDynamicContent.WLV_seasonal_300x50[0].subhead_3 = "";
        devDynamicContent.WLV_seasonal_300x50[0].head_4 = "";
        devDynamicContent.WLV_seasonal_300x50[0].subhead_4 = "";
        devDynamicContent.WLV_seasonal_300x50[0].text_offsetY = 0;
        devDynamicContent.WLV_seasonal_300x50[0].text_gap_offsetY = 0;
        devDynamicContent.WLV_seasonal_300x50[0].pic1 = {};
        devDynamicContent.WLV_seasonal_300x50[0].pic1.Type = "file";
        devDynamicContent.WLV_seasonal_300x50[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240822124135783_barParasol-TrioBar.jpg";
        devDynamicContent.WLV_seasonal_300x50[0].pic2 = {};
        devDynamicContent.WLV_seasonal_300x50[0].pic2.Type = "file";
        devDynamicContent.WLV_seasonal_300x50[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240822124143153_pool-WomenTrio.jpg";
        devDynamicContent.WLV_seasonal_300x50[0].pic3 = {};
        devDynamicContent.WLV_seasonal_300x50[0].pic3.Type = "file";
        devDynamicContent.WLV_seasonal_300x50[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_300x50[0].pic4 = {};
        devDynamicContent.WLV_seasonal_300x50[0].pic4.Type = "file";
        devDynamicContent.WLV_seasonal_300x50[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240812103314047_empty.png";
        devDynamicContent.WLV_seasonal_300x50[0].color_logos = "#693f25";
        devDynamicContent.WLV_seasonal_300x50[0].color_ctaBG = "#693f25";
        devDynamicContent.WLV_seasonal_300x50[0].color_ctaText = "#000";
        devDynamicContent.WLV_seasonal_300x50[0].color_ctaBG_over = "#000";
        devDynamicContent.WLV_seasonal_300x50[0].color_ctaText_over = "#693f25";
        
        devDynamicContent.WLV_seasonal_main = [{}];
        devDynamicContent.WLV_seasonal_main[0]._id = 0;
        devDynamicContent.WLV_seasonal_main[0].unique_id = 1;
        devDynamicContent.WLV_seasonal_main[0].reporting_label = "main_default";
        devDynamicContent.WLV_seasonal_main[0].logoIntro = true;
        devDynamicContent.WLV_seasonal_main[0].version = "v1";
        devDynamicContent.WLV_seasonal_main[0].color_bg = "#000";
        devDynamicContent.WLV_seasonal_main[0].color_border = "#aaaaaa";
        devDynamicContent.WLV_seasonal_main[0].color_headline = "#FFF";
        devDynamicContent.WLV_seasonal_main[0].color_subheadline = "#FFF";
        devDynamicContent.WLV_seasonal_main[0].cta = "Book now";
        devDynamicContent.WLV_seasonal_main[0].is_active = true;
        devDynamicContent.WLV_seasonal_main[0].is_default = true;
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
            image_to_mask = select('#image_to_mask'),
            mask = select('#mask'),
            myCanvas = select('#myCanvas'),
            
            //LOGO stuff
                logo = select('#logo'),
                letter_w = select('#w'),
                letter_y = select('#y'),
                letter_nn = select('#nn'),
                lasvegas = select('#lasvegas'),
                sign_r = select('#r'),
            //
            imgs = [],
            pics = [],
            dc = dynamicContent.WLV_seasonal_main[0],
            dcSize = dynamicContent.WLV_seasonal_300x600[0],
            //
            totalPossible = 4 ,
            logoIntro = dc.logoIntro,
            text_offsetY = dcSize.text_offsetY,
            text_gap_offsetY = dcSize.text_gap_offsetY,
            //
            textBoxer  = select('#textBoxer'),
            text_headDiv = [],
            text_subheadDiv = [],
            heads = [],
            subheads = [],
            //
            cta = select('#cta'), 
            tl = gsap.timeline();
            //
            for(let i = 1; i <= totalPossible; i++) {
                pics.push( dcSize["pic" + i ].Url );
                heads.push( dcSize["head_"+ i] );
                subheads.push( dcSize["subhead_"+i ] );
            }

/***************** //end of VARIABLES  *****************/

        var ctx = myCanvas.getContext("2d");
        ctx.drawImage(image_to_mask, 0, 0, 300, 600);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.drawImage(mask, 0, 0,300,600);

        bg.style.backgroundColor = dc.color_bg;
        cta.style.backgroundColor = dcSize.color_ctaBG;
        cta.style.borderColor = dcSize.color_ctaBG;
        cta.style.color = dcSize.color_ctaText;
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
        }
        setLogoColor(dcSize.color_logos);


        //CREATE Divs and populate Header and subheader Text:
        for(let i = 0; i < heads.length; i++) {
            let head_div = document.createElement('div');
            head_div.className = "text_header";
            head_div.id = "text_head"+i;
            head_div.innerHTML =  heads[i];
            head_div.style.color =  dc.color_headline;
            text_headDiv.push( head_div.id) ;
            textBoxer.appendChild(head_div);

            let subhead_div = document.createElement('div');
            subhead_div.className = "text_subheader";
            subhead_div.id = "text_subhead"+i;
            subhead_div.innerHTML = subheads[i];
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
            let textRatio = 58;
            let centerOn = 0.35;  // 0 to 1
            let pad = 1 + text_gap_offsetY;
            //
            for(let i= 0;i<totalPossible; i++ ){
                let elementHead = 'text_head'+i;
                let elementSub = 'text_subhead'+i;
                fitBox.run( pad , centerOn , textRatio,  document.getElementById(elementHead),  document.getElementById(elementSub) ) ;
            }
        }
        const testFitBox = ()=>{  
            let errorAlert =  fitBox.test(totalPossible)
            console.log('testFitBox for alignment errors - ErrorAlert ='+ errorAlert)
            if (errorAlert){  
                runFitBox() ; 
                gsap.delayedCall(1,testFitBox,[ totalPossible] );
            } 
        }
        //// RUN ////
        gsap.delayedCall(0.5,runFitBox); 
        gsap.delayedCall(1,testFitBox);
/******************  MAIN ANIMATION  ******************/ 
		const animate = () =>{ 
            gsap.registerPlugin(DrawSVGPlugin);
            gsap.registerEffect({
                name: "blurIn",
                effect: (targets, config) => {
                    let tlEffect = gsap.timeline();
                    tlEffect.from(targets, {duration: config.duration, blur:config.blur, stagger:config.stagger, force3D:true, ease:"sine"})
                    .from(targets, {duration: config.duration, stagger:config.stagger, alpha:0,ease:"none"}, "<")
                    .from(targets, {duration: 5.5, stagger:config.stagger, scale:1.15,ease:"Power1.easeOut"}, "<")
                    return tlEffect;
                },
                defaults: {duration:1.3, stagger:5, blur:10},
                extendTimeline: true,
            });
            
            /////////////////////////////////////////
            let heads = selectAll('.text_header'),
                subheads = selectAll('.text_subheader'),
                imageDivs = selectAll('.imageDiv'),
                heads2 = [], 
                subheads2 = [];
            
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
            .set(logo, {y:168, x:0, scale:0.41}, ">")

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
                    gsap.to(subheads[i], {duration: 1.3, delay:d2+1, y:"0", alpha:1, ease:"power2.out"})
                }
            }
        //// End - Text Box animations ////

            tl
            .from(myCanvas, {duration:1, alpha:0}, "<0.0")
            .from(cta, {duration:0.5, alpha: 0, ease:"none"}, "<")
            .from(cta, {duration:1, rotateX:90, ease:"power2"}, "<")
            .to(logo, {duration:1, alpha:1, ease:"none"}, "<")
            //
		}

/******************  //end of MAIN ANIMATION  ******************/    
    
        
/********************  EVENTS  ********************/ 
        cta.addEventListener('mouseover', (e) => {

            gsap.to(e.target, {duration:0.4, 
                background:dcSize.color_ctaBG_over,
                color: dcSize.color_ctaText_over, 
                // borderColor = dc.color_ctaBG;
                ease:"none"}  
            )     
        });
        cta.addEventListener('mouseout', (e) => {
            gsap.to(e.target, {duration:0.2, 
                background:dcSize.color_ctaBG,
                color: dcSize.color_ctaText, 
                ease:"none"}  
            )  
        });
        let type = ((Modernizr.touchevents)&&(!isChrome)) ? 'touchend' : 'click',
        clickable = selectAll('.clickable');

        clickable.forEach(element => element.addEventListener(type, (e)=> {
            Enabler.exit('Exit');
            console.lot('exit')
            return false;
        }, false));
        };
/****************** //end of  EVENTS  ******************/   
}