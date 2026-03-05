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
        Enabler.setProfileId(10874071);
        let devDynamicContent = {};
    
        devDynamicContent.EBH_rareSteak_v2_main = [{}];
        devDynamicContent.EBH_rareSteak_v2_main[0]._id = 0;
        devDynamicContent.EBH_rareSteak_v2_main[0].unique_id = 1;
        devDynamicContent.EBH_rareSteak_v2_main[0].reporting_label = "default";
        devDynamicContent.EBH_rareSteak_v2_main[0].logoIntro = true;
        devDynamicContent.EBH_rareSteak_v2_main[0].color_bg = "#F9F7E8";
        devDynamicContent.EBH_rareSteak_v2_main[0].color_border = "#B7B5A5";
        devDynamicContent.EBH_rareSteak_v2_main[0].color_headline = "#623c21";
        devDynamicContent.EBH_rareSteak_v2_main[0].color_subheadline = "#623c21";
        devDynamicContent.EBH_rareSteak_v2_main[0].cta = "LEARN MORE";
        devDynamicContent.EBH_rareSteak_v2_main[0].color_ctaBG = "#b78b1e";
        devDynamicContent.EBH_rareSteak_v2_main[0].color_ctaBG_over = "#6d3f25";
        devDynamicContent.EBH_rareSteak_v2_main[0].color_ctaText = "#F9F7E8";
        devDynamicContent.EBH_rareSteak_v2_main[0].color_ctaText_over = "#F9F7E8";
        devDynamicContent.EBH_rareSteak_v2_main[0].color_logo_ebh = "#775C3D";
        devDynamicContent.EBH_rareSteak_v2_main[0].color_logo_partner = "#000000";
        devDynamicContent.EBH_rareSteak_v2_main[0].numPicsToShow = 4;
        devDynamicContent.EBH_rareSteak_v2_main[0].is_active = true;
        devDynamicContent.EBH_rareSteak_v2_160x600 = [{}];
        devDynamicContent.EBH_rareSteak_v2_160x600[0]._id = 0;
        devDynamicContent.EBH_rareSteak_v2_160x600[0].unique_id = 1;
        devDynamicContent.EBH_rareSteak_v2_160x600[0].reporting_label = "default";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].headline_1 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].subheadline_1 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].headline_2 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].subheadline_2 = "";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].headline_3 = "";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].subheadline_3 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].headline_4 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].subheadline_4 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].text_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_160x600[0].text_gap_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic1 = {};
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic1.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133541644_surfTurf.jpg";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic2 = {};
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic2.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133538106_shrimp.jpg";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic3 = {};
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic3.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133530540_lionsShare.jpg";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic4 = {};
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic4.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133545492_tomaHawk.jpg";
        devDynamicContent.EBH_rareSteak_v2_160x600[0].is_active = true;
        devDynamicContent.EBH_rareSteak_v2_300x250 = [{}];
        devDynamicContent.EBH_rareSteak_v2_300x250[0]._id = 0;
        devDynamicContent.EBH_rareSteak_v2_300x250[0].unique_id = 1;
        devDynamicContent.EBH_rareSteak_v2_300x250[0].reporting_label = "default";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].headline_1 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].subheadline_1 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].headline_2 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].subheadline_2 = "";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].headline_3 = "";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].subheadline_3 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].headline_4 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].subheadline_4 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].text_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_300x250[0].text_gap_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic1 = {};
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic1.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133637950_surfTurf.jpg";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic2 = {};
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic2.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133634306_shrimp.jpg";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic3 = {};
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic3.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133626853_lionsShare.jpg";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic4 = {};
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic4.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133641469_tomaHawk.jpg";
        devDynamicContent.EBH_rareSteak_v2_300x250[0].is_active = true;
        devDynamicContent.EBH_rareSteak_v2_300x600 = [{}];
        devDynamicContent.EBH_rareSteak_v2_300x600[0]._id = 0;
        devDynamicContent.EBH_rareSteak_v2_300x600[0].unique_id = 1;
        devDynamicContent.EBH_rareSteak_v2_300x600[0].reporting_label = "default";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].headline_1 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].subheadline_1 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].headline_2 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].subheadline_2 = "";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].headline_3 = "";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].subheadline_3 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].headline_4 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].subheadline_4 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].text_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_300x600[0].text_gap_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic1 = {};
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic1.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133914772_surfTurf.jpg";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic2 = {};
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic2.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133910997_shrimp.jpg";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic3 = {};
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic3.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133904210_lionsShare.jpg";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic4 = {};
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic4.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133918324_tomaHawk.jpg";
        devDynamicContent.EBH_rareSteak_v2_300x600[0].is_active = true;
        devDynamicContent.EBH_rareSteak_v2_728x90 = [{}];
        devDynamicContent.EBH_rareSteak_v2_728x90[0]._id = 0;
        devDynamicContent.EBH_rareSteak_v2_728x90[0].unique_id = 1;
        devDynamicContent.EBH_rareSteak_v2_728x90[0].reporting_label = "default";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].headline_1 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].subheadline_1 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].headline_2 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].subheadline_2 = "";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].headline_3 = "";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].subheadline_3 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].headline_4 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].subheadline_4 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].text_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_728x90[0].text_gap_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic1 = {};
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic1.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133730305_surfTurf.jpg";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic2 = {};
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic2.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133726885_shrimp.jpg";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic3 = {};
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic3.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133719441_lionsShare.jpg";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic4 = {};
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic4.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133733804_tomahawk.jpg";
        devDynamicContent.EBH_rareSteak_v2_728x90[0].is_active = true;
        devDynamicContent.EBH_rareSteak_v2_970x250 = [{}];
        devDynamicContent.EBH_rareSteak_v2_970x250[0]._id = 0;
        devDynamicContent.EBH_rareSteak_v2_970x250[0].unique_id = 1;
        devDynamicContent.EBH_rareSteak_v2_970x250[0].reporting_label = "default";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].headline_1 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].subheadline_1 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].headline_2 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].subheadline_2 = "";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].headline_3 = "";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].subheadline_3 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].headline_4 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].subheadline_4 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].text_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_970x250[0].text_gap_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic1 = {};
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic1.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133820741_surfTurf.jpg";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic2 = {};
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic2.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133817077_shrimp.jpg";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic3 = {};
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic3.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133810138_lionsShare.jpg";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic4 = {};
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic4.Type = "file";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20231204133824192_tomahawk.jpg";
        devDynamicContent.EBH_rareSteak_v2_970x250[0].is_active = true;
        devDynamicContent.EBH_rareSteak_v2_320x50 = [{}];
        devDynamicContent.EBH_rareSteak_v2_320x50[0]._id = 0;
        devDynamicContent.EBH_rareSteak_v2_320x50[0].unique_id = 1;
        devDynamicContent.EBH_rareSteak_v2_320x50[0].reporting_label = "default";
        devDynamicContent.EBH_rareSteak_v2_320x50[0].headline_1 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_320x50[0].subheadline_1 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_320x50[0].headline_2 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_320x50[0].subheadline_2 = "";
        devDynamicContent.EBH_rareSteak_v2_320x50[0].headline_3 = "";
        devDynamicContent.EBH_rareSteak_v2_320x50[0].subheadline_3 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_320x50[0].headline_4 = "Visit Rare Lounge tonight";
        devDynamicContent.EBH_rareSteak_v2_320x50[0].subheadline_4 = "Make friends at Encore Boston Harbor\u2019s newest place to sip, snack and mingle.";
        devDynamicContent.EBH_rareSteak_v2_320x50[0].text_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_320x50[0].text_gap_offsetY = 0;
        devDynamicContent.EBH_rareSteak_v2_320x50[0].is_active = true;
        Enabler.setDevDynamicContent(devDynamicContent);
    
    
        let select =(s)=> {
            return document.querySelector(s);
            },
            selectAll = (s)=> {
            return document.querySelectorAll(s);
            },
            bannerCover = select('#bannerCover'),
            border = select('#border'),
            bg = select('#wrapper'),
            logo = select('#logo'),
            logo_partner = select('#logo_partner'),
            pipe = select('#pipe'),
            cta = select('#cta'), 
            disclaimer = select('#disclaimer'),
            // EBH logo stuff
            enco = select('#enco'),
            re = select('#re'),
            e = select('#e'),
            boston = select('#boston'),
            wynnresort = select('#wynnresort'),
            r = select('#r'),
            //
            imgs = [],
            pics = [],
            dc = dynamicContent.EBH_rareSteak_v2_main[0],
            dcSize = dynamicContent.EBH_rareSteak_v2_300x600[0],
            //
            numPicsToShow = ((dc.numPicsToShow>4) ? 4: dc.numPicsToShow) ,
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
            tl = gsap.timeline();
            //
            for(let i = 1; i <= numPicsToShow; i++) {
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
            let logoArr = [enco,re,e,r]
            let logoArr2 = [boston,wynnresort]
            for(let i =0;i<logoArr.length;i++){
                logoArr[i].style.stroke = newColor
            }
            for(let i =0;i<logoArr2.length;i++){
                logoArr2[i].style.fill = newColor
            }
            pipe.style.backgroundColor  = newColor;
        }
        setLogoColor(dc.color_logo_ebh);

        const setLogoColor_partner = (newColor) => {
            logo_partner.style.fill  = newColor;
        }
        setLogoColor_partner(dc.color_logo_partner);

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
            let textRatio = 80
            let centerOn = 0.5;  // 0 to 1
            let pad = 1 + text_gap_offsetY;
            //
            for(let i= 0;i<numPicsToShow; i++ ){
                let elementHead = 'text_head'+i;
                let elementSub = 'text_subhead'+i;
                fitBox.run( pad , centerOn , textRatio,  document.getElementById(elementHead),  document.getElementById(elementSub) ) ;
            }
        }
        const testFitBox = ()=>{  
            let errorAlert =  fitBox.test(numPicsToShow)
            console.log('testFitBox for alignment errors - ErrorAlert ='+ errorAlert)
            if (errorAlert){  
                runFitBox() ; 
                gsap.delayedCall(1,testFitBox,[ numPicsToShow] );
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
                defaults: {duration:1.3, stagger:5.5, blur:10},
                extendTimeline: true,
            });
            
            gsap.registerEffect({
                name: "fadeIn",
                effect: (targets, config) => {
                    let tlEffect = gsap.timeline();
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
                    let tlEffect = gsap.timeline();
                    tlEffect
                        .to(targets, {duration: config.duration, y:config.y, stagger:config.stagger, ease:"power2.in"})
                        .to(targets, {duration: config.duration, stagger:config.stagger, alpha:0, ease:"none"}, "<")
                    return tlEffect;
                },
                defaults: {duration: 1.3, y:"-=7", stagger:5.5},
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
            //  logoIntro = true;
			tl
            .to(border, {duration: 0.7, borderColor: dc.color_border, ease: "none"})
            .to(bannerCover, {duration:0.7, alpha:0, ease:"none"})
            
            if(logoIntro) {
                tl
                .set(logo, {alpha:1})
                .from(enco, {duration: 1.6, drawSVG: 0, ease: "sine.inOut"}, "<")
                .from(re, {duration: 0.6, drawSVG: 0, ease: "sine.inOut"}, ">-0.2")
                .from(e, {duration: 0.3, drawSVG: 0, ease: "sine.in"}, ">-0.1")
                .from(boston, {duration: 0.6, stagger: 0., y: "-=10", alpha: 0, ease: "sine"}, ">")
                .from(wynnresort, {duration: 0.8, y: "-=20", alpha: 0, ease: "sine"}, "<")
                .from(r, {duration: 0.5, alpha: 0, ease: "none"}, "<")
                .to(logo, {duration: 0.5, alpha: 0, ease: "none"}, ">1")
            } else {
                tl.set(logo, {alpha:0}, "<")
            }
            tl
            .set(logo, {y:270, x:3, scale:0.58}, ">")
            .blurIn(imageDivs, "<")
            //
            .fadeIn(heads, "<")
            .fadeIn(subheads, {y:0}, "<0.5")
            //
            .from(pipe, {duration:1, alpha:0, ease:"none"}, "<0.0")
            .from(logo_partner, {duration:1, alpha:0, ease:"none"}, "<0.0")
            .from(cta, {duration:0.5, alpha: 0, ease:"none"}, "<")
            .from(cta, {duration:1, rotateX:90, ease:"power2"}, "<")
            .to(logo, {duration:1, alpha:1, ease:"none"}, "<")
            .from(disclaimer, {duration: 0.8, alpha: 0, ease: "none"}, "<")
            //
            if(numPicsToShow>1){
                
                tl.fadeOut(heads2, "<3.5")
                tl.fadeOut(subheads2, {y:0}, "<0.3")
            }
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
}