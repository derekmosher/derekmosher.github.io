   "use strict";
window.onload = ()=> {

/******************** VARIABLES  ********************/ 
    const politeInit=()=>{	
        Enabler.setProfileId(10917510);
        let devDynamicContent = {};
    
        devDynamicContent.WLV_formula1_v2_main = [{}];
        devDynamicContent.WLV_formula1_v2_main[0]._id = 0;
        devDynamicContent.WLV_formula1_v2_main[0].version = 1;
        devDynamicContent.WLV_formula1_v2_main[0].color_bg = "#000";
        devDynamicContent.WLV_formula1_v2_main[0].color_border = "#000";
        devDynamicContent.WLV_formula1_v2_main[0].color_head = "#bfa25a";
        devDynamicContent.WLV_formula1_v2_main[0].color_subhead = "#fff";
        devDynamicContent.WLV_formula1_v2_main[0].cta = "LEARN MORE";
        devDynamicContent.WLV_formula1_v2_main[0].color_ctaBG = "#000";
        devDynamicContent.WLV_formula1_v2_main[0].color_ctaBG_over = "#bfa25a";
        devDynamicContent.WLV_formula1_v2_main[0].color_ctaText = "#fff";
        devDynamicContent.WLV_formula1_v2_main[0].color_ctaText_over = "#fff";
        devDynamicContent.WLV_formula1_v2_970x250 = [{}];
        devDynamicContent.WLV_formula1_v2_970x250[0]._id = 0;
        devDynamicContent.WLV_formula1_v2_970x250[0].version = 1;
        devDynamicContent.WLV_formula1_v2_970x250[0].head_1 = "Rooms Now Available";
        devDynamicContent.WLV_formula1_v2_970x250[0].subhead_1 = "Don\u2019t miss a moment of the action, on or off the track. November 21-24, 2024.";
        devDynamicContent.WLV_formula1_v2_970x250[0].head_2 = "";
        devDynamicContent.WLV_formula1_v2_970x250[0].subhead_2 = "";
        devDynamicContent.WLV_formula1_v2_970x250[0].head_3 = "";
        devDynamicContent.WLV_formula1_v2_970x250[0].subhead_3 = "";
        devDynamicContent.WLV_formula1_v2_970x250[0].head_4 = "";
        devDynamicContent.WLV_formula1_v2_970x250[0].subhead_4 = "";
        devDynamicContent.WLV_formula1_v2_970x250[0].text_offsetY = 0;
        devDynamicContent.WLV_formula1_v2_970x250[0].text_gap_offsetY = 2;
        devDynamicContent.WLV_formula1_v2_970x250[0].pic1 = {};
        devDynamicContent.WLV_formula1_v2_970x250[0].pic1.Type = "file";
        devDynamicContent.WLV_formula1_v2_970x250[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925142030334_F1_Car.jpg";
        devDynamicContent.WLV_formula1_v2_970x250[0].pic2 = {};
        devDynamicContent.WLV_formula1_v2_970x250[0].pic2.Type = "file";
        devDynamicContent.WLV_formula1_v2_970x250[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925145853641_room-cornerKing.jpg";
        devDynamicContent.WLV_formula1_v2_970x250[0].pic3 = {};
        devDynamicContent.WLV_formula1_v2_970x250[0].pic3.Type = "file";
        devDynamicContent.WLV_formula1_v2_970x250[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925142111671_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_970x250[0].pic4 = {};
        devDynamicContent.WLV_formula1_v2_970x250[0].pic4.Type = "file";
        devDynamicContent.WLV_formula1_v2_970x250[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925142111671_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_300x250 = [{}];
        devDynamicContent.WLV_formula1_v2_300x250[0]._id = 0;
        devDynamicContent.WLV_formula1_v2_300x250[0].version = 1;
        devDynamicContent.WLV_formula1_v2_300x250[0].head_1 = "Rooms Now Available";
        devDynamicContent.WLV_formula1_v2_300x250[0].subhead_1 = "Don\u2019t miss a moment of the action, on or off the track. November 21-24, 2024.";
        devDynamicContent.WLV_formula1_v2_300x250[0].head_2 = "";
        devDynamicContent.WLV_formula1_v2_300x250[0].subhead_2 = "";
        devDynamicContent.WLV_formula1_v2_300x250[0].head_3 = "";
        devDynamicContent.WLV_formula1_v2_300x250[0].subhead_3 = "";
        devDynamicContent.WLV_formula1_v2_300x250[0].head_4 = "";
        devDynamicContent.WLV_formula1_v2_300x250[0].subhead_4 = "";
        devDynamicContent.WLV_formula1_v2_300x250[0].text_offsetY = 0;
        devDynamicContent.WLV_formula1_v2_300x250[0].text_gap_offsetY = 0;
        devDynamicContent.WLV_formula1_v2_300x250[0].pic1 = {};
        devDynamicContent.WLV_formula1_v2_300x250[0].pic1.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x250[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141219365_F1_Car.jpg";
        devDynamicContent.WLV_formula1_v2_300x250[0].pic2 = {};
        devDynamicContent.WLV_formula1_v2_300x250[0].pic2.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x250[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925145645261_room-cornerKing.jpg";
        devDynamicContent.WLV_formula1_v2_300x250[0].pic3 = {};
        devDynamicContent.WLV_formula1_v2_300x250[0].pic3.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x250[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141202343_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_300x250[0].pic4 = {};
        devDynamicContent.WLV_formula1_v2_300x250[0].pic4.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x250[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141202343_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_728x90 = [{}];
        devDynamicContent.WLV_formula1_v2_728x90[0]._id = 0;
        devDynamicContent.WLV_formula1_v2_728x90[0].version = 1;
        devDynamicContent.WLV_formula1_v2_728x90[0].head_1 = "Rooms Now Available";
        devDynamicContent.WLV_formula1_v2_728x90[0].subhead_1 = "Don\u2019t miss a moment of the action, on or off the track.<br \/>November 21-24, 2024.";
        devDynamicContent.WLV_formula1_v2_728x90[0].head_2 = "";
        devDynamicContent.WLV_formula1_v2_728x90[0].subhead_2 = "";
        devDynamicContent.WLV_formula1_v2_728x90[0].head_3 = "";
        devDynamicContent.WLV_formula1_v2_728x90[0].subhead_3 = "";
        devDynamicContent.WLV_formula1_v2_728x90[0].head_4 = "";
        devDynamicContent.WLV_formula1_v2_728x90[0].subhead_4 = "";
        devDynamicContent.WLV_formula1_v2_728x90[0].text_offsetY = 0;
        devDynamicContent.WLV_formula1_v2_728x90[0].text_gap_offsetY = 1;
        devDynamicContent.WLV_formula1_v2_728x90[0].pic1 = {};
        devDynamicContent.WLV_formula1_v2_728x90[0].pic1.Type = "file";
        devDynamicContent.WLV_formula1_v2_728x90[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141928454_F1_Car.jpg";
        devDynamicContent.WLV_formula1_v2_728x90[0].pic2 = {};
        devDynamicContent.WLV_formula1_v2_728x90[0].pic2.Type = "file";
        devDynamicContent.WLV_formula1_v2_728x90[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925145830914_room-cornerKing.jpg";
        devDynamicContent.WLV_formula1_v2_728x90[0].pic3 = {};
        devDynamicContent.WLV_formula1_v2_728x90[0].pic3.Type = "file";
        devDynamicContent.WLV_formula1_v2_728x90[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925142008589_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_728x90[0].pic4 = {};
        devDynamicContent.WLV_formula1_v2_728x90[0].pic4.Type = "file";
        devDynamicContent.WLV_formula1_v2_728x90[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925142008589_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_300x600 = [{}];
        devDynamicContent.WLV_formula1_v2_300x600[0]._id = 0;
        devDynamicContent.WLV_formula1_v2_300x600[0].version = 1;
        devDynamicContent.WLV_formula1_v2_300x600[0].head_1 = "Rooms Now Available";
        devDynamicContent.WLV_formula1_v2_300x600[0].subhead_1 = "Don\u2019t miss a moment of the<br>action, on or off the track. November 21-24, 2024.";
        devDynamicContent.WLV_formula1_v2_300x600[0].head_2 = "";
        devDynamicContent.WLV_formula1_v2_300x600[0].subhead_2 = "";
        devDynamicContent.WLV_formula1_v2_300x600[0].head_3 = "";
        devDynamicContent.WLV_formula1_v2_300x600[0].subhead_3 = "";
        devDynamicContent.WLV_formula1_v2_300x600[0].head_4 = "";
        devDynamicContent.WLV_formula1_v2_300x600[0].subhead_4 = "";
        devDynamicContent.WLV_formula1_v2_300x600[0].text_offsetY = 0;
        devDynamicContent.WLV_formula1_v2_300x600[0].text_gap_offsetY = 4;
        devDynamicContent.WLV_formula1_v2_300x600[0].pic1 = {};
        devDynamicContent.WLV_formula1_v2_300x600[0].pic1.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x600[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141057037_F1_Car.jpg";
        devDynamicContent.WLV_formula1_v2_300x600[0].pic2 = {};
        devDynamicContent.WLV_formula1_v2_300x600[0].pic2.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x600[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925145736488_room-cornerKing.jpg";
        devDynamicContent.WLV_formula1_v2_300x600[0].pic3 = {};
        devDynamicContent.WLV_formula1_v2_300x600[0].pic3.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x600[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141140721_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_300x600[0].pic4 = {};
        devDynamicContent.WLV_formula1_v2_300x600[0].pic4.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x600[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141140721_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_160x600 = [{}];
        devDynamicContent.WLV_formula1_v2_160x600[0]._id = 0;
        devDynamicContent.WLV_formula1_v2_160x600[0].version = 1;
        devDynamicContent.WLV_formula1_v2_160x600[0].head_1 = "Rooms Now Available";
        devDynamicContent.WLV_formula1_v2_160x600[0].subhead_1 = "Don\u2019t miss a moment of the action, on or off the track.<br \/>November 21-24, 2024.";
        devDynamicContent.WLV_formula1_v2_160x600[0].head_2 = "";
        devDynamicContent.WLV_formula1_v2_160x600[0].subhead_2 = "";
        devDynamicContent.WLV_formula1_v2_160x600[0].head_3 = "";
        devDynamicContent.WLV_formula1_v2_160x600[0].subhead_3 = "";
        devDynamicContent.WLV_formula1_v2_160x600[0].head_4 = "";
        devDynamicContent.WLV_formula1_v2_160x600[0].subhead_4 = "";
        devDynamicContent.WLV_formula1_v2_160x600[0].text_offsetY = 0;
        devDynamicContent.WLV_formula1_v2_160x600[0].text_gap_offsetY = 1;
        devDynamicContent.WLV_formula1_v2_160x600[0].pic1 = {};
        devDynamicContent.WLV_formula1_v2_160x600[0].pic1.Type = "file";
        devDynamicContent.WLV_formula1_v2_160x600[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141439418_F1_Car.jpg";
        devDynamicContent.WLV_formula1_v2_160x600[0].pic2 = {};
        devDynamicContent.WLV_formula1_v2_160x600[0].pic2.Type = "file";
        devDynamicContent.WLV_formula1_v2_160x600[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925145615949_room-cornerKing.jpg";
        devDynamicContent.WLV_formula1_v2_160x600[0].pic3 = {};
        devDynamicContent.WLV_formula1_v2_160x600[0].pic3.Type = "file";
        devDynamicContent.WLV_formula1_v2_160x600[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141523416_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_160x600[0].pic4 = {};
        devDynamicContent.WLV_formula1_v2_160x600[0].pic4.Type = "file";
        devDynamicContent.WLV_formula1_v2_160x600[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141523416_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_320x50 = [{}];
        devDynamicContent.WLV_formula1_v2_320x50[0]._id = 0;
        devDynamicContent.WLV_formula1_v2_320x50[0].version = 1;
        devDynamicContent.WLV_formula1_v2_320x50[0].head_1 = "Rooms Now Available";
        devDynamicContent.WLV_formula1_v2_320x50[0].head_2 = "";
        devDynamicContent.WLV_formula1_v2_320x50[0].head_3 = "";
        devDynamicContent.WLV_formula1_v2_320x50[0].head_4 = "";
        devDynamicContent.WLV_formula1_v2_320x50[0].pic1 = {};
        devDynamicContent.WLV_formula1_v2_320x50[0].pic1.Type = "file";
        devDynamicContent.WLV_formula1_v2_320x50[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141810530_F1_Car.jpg";
        devDynamicContent.WLV_formula1_v2_320x50[0].pic2 = {};
        devDynamicContent.WLV_formula1_v2_320x50[0].pic2.Type = "file";
        devDynamicContent.WLV_formula1_v2_320x50[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925145802317_room-cornerKing.jpg";
        devDynamicContent.WLV_formula1_v2_320x50[0].pic3 = {};
        devDynamicContent.WLV_formula1_v2_320x50[0].pic3.Type = "file";
        devDynamicContent.WLV_formula1_v2_320x50[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141850805_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_320x50[0].pic4 = {};
        devDynamicContent.WLV_formula1_v2_320x50[0].pic4.Type = "file";
        devDynamicContent.WLV_formula1_v2_320x50[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141850805_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_300x50 = [{}];
        devDynamicContent.WLV_formula1_v2_300x50[0]._id = 0;
        devDynamicContent.WLV_formula1_v2_300x50[0].version = 1;
        devDynamicContent.WLV_formula1_v2_300x50[0].head_1 = "Rooms Now Available";
        devDynamicContent.WLV_formula1_v2_300x50[0].head_2 = "";
        devDynamicContent.WLV_formula1_v2_300x50[0].head_3 = "";
        devDynamicContent.WLV_formula1_v2_300x50[0].head_4 = "";
        devDynamicContent.WLV_formula1_v2_300x50[0].pic1 = {};
        devDynamicContent.WLV_formula1_v2_300x50[0].pic1.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x50[0].pic1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141645956_F1_Car.jpg";
        devDynamicContent.WLV_formula1_v2_300x50[0].pic2 = {};
        devDynamicContent.WLV_formula1_v2_300x50[0].pic2.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x50[0].pic2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925145710360_room-cornerKing.jpg";
        devDynamicContent.WLV_formula1_v2_300x50[0].pic3 = {};
        devDynamicContent.WLV_formula1_v2_300x50[0].pic3.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x50[0].pic3.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141731238_wynnF1.jpg";
        devDynamicContent.WLV_formula1_v2_300x50[0].pic4 = {};
        devDynamicContent.WLV_formula1_v2_300x50[0].pic4.Type = "file";
        devDynamicContent.WLV_formula1_v2_300x50[0].pic4.Url = "https://s0.2mdn.net/ads/richmedia/studio/60018935/60018935_20240925141731238_wynnF1.jpg";
        Enabler.setDevDynamicContent(devDynamicContent);
        
        /************** Create VARIABLES ********************/
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
            //
            imgs = [],
            pics = [],
            dc = dynamicContent.WLV_formula1_v2_main[0],
            dcSize = dynamicContent.WLV_formula1_v2_300x600[0],
            //
            numSections = 4,
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

            /************** Modify VARIABLES ********************/

            //Create Arrays for Pics and Text
            for(let i = 1; i <= numSections; i++) {
                pics.push( dcSize["pic" + i ].Url );
                heads.push( dcSize["head_"+ i] );
                subheads.push( dcSize["subhead_"+i ] );
            }

/**********************************/
        bg.style.backgroundColor = dc.color_bg;
        cta.style.background = dc.color_ctaBG;
        cta.style.color = dc.color_ctaText;
        // cta.style.borderColor = dc.color_ctaBG;
        cta.innerHTML = dc.cta;

        //CTA - reduce font size if too long. 
        let maxCTAchars = 8
        if(dc.cta.length>maxCTAchars){
            let myfontSize = parseFloat( window.getComputedStyle(cta, null).getPropertyValue('font-size') );
            let subtractAmt = dc.cta.length - maxCTAchars;
            cta.style.fontSize = (myfontSize - subtractAmt)+"px";
        }

        //CREATE Divs and populate Header and subheader Text:
        for(let i = 0; i < heads.length; i++) {
            let head_div = document.createElement('div');
            head_div.className = "text_header";
            head_div.id = "text_head"+i;
            head_div.innerHTML =  heads[i];
            head_div.style.color =  dc.color_head;
            text_headDiv.push( head_div.id) ;
            textBoxer.appendChild(head_div);

            let subhead_div = document.createElement('div');
            subhead_div.className = "text_subheader";
            subhead_div.id = "text_subhead"+i;
            subhead_div.innerHTML = subheads[i];
            subhead_div.style.color =  dc.color_subhead;
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


  // FIT BOX
        const runFitBox = () =>{  
            gsap.set(textBoxer, {y: "+="+ text_offsetY +""})
            let textRatio = 55;
            let centerOn = 0.3;  // 0 to 1
            let pad = 1 + text_gap_offsetY;

            for(let i= 0;i<numSections; i++ ){
                let elementHead = 'text_head'+i;
                let elementSub = 'text_subhead'+i;
                fitBox.run( pad , centerOn , textRatio,  document.getElementById(elementHead),  document.getElementById(elementSub) ) ;
            }
        }
        const testFitBox = ()=>{   
            console.log('test fitbox')
            let errorAlert =  fitBox.test(numSections)
            console.log('errorAlert ='+ errorAlert)
            if (errorAlert){  
                runFitBox() ; 
                gsap.delayedCall(1,testFitBox,[ numSections] );
            } 
        }
         //// runFitBox ////
        gsap.delayedCall(0,runFitBox);  //dropping this to 0 or less than 0.4 can cause alignment issues with fitbox. 
        gsap.delayedCall(1,testFitBox);
/******************  MAIN ANIMATION  ******************/ 

        const animate = () =>{ 
            gsap.registerEffect({
                name: "blurIn",
                effect: (targets, config) => {
                    let tlEffect = gsap.timeline();
                    tlEffect
                        .from(targets, {duration: config.duration, blur:config.blur, stagger:config.stagger, force3D:true, ease:"sine"})
                        .from(targets, {duration: config.duration, stagger:config.stagger, alpha:0,ease:"none"}, "<")
                        .from(targets, {duration: 5.5, stagger:config.stagger, scale:1.1,ease:"Power1.easeOut"}, "<")
                        return tlEffect;
                },
                defaults: {duration:1.3 , stagger:5.5, blur:10, },
                extendTimeline: true,
            });
            ///////////////////////////////////////////////////////////////
            let heads = selectAll('.text_header'),
                subheads = selectAll('.text_subheader'),
                imageDivs = selectAll('.imageDiv'),
                heads2 = [], 
                subheads2 = [],
                d = 1;

                for(let i = 0; i < heads.length-1; i++) {
                    heads2[i] = heads[i];
                    subheads2[i] = subheads[i];
                }

			    tl
                .to([border], {duration: 0.7, borderColor: dc.color_border, ease: "none"})
                .to(bannerCover, {duration:0.7, alpha:0, ease:"none"})
                ////
                .blurIn(imageDivs, "<")

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
                .from(cta, {duration:0.5, alpha: 0, ease:"none"}, "<")
                .from(cta, {duration:1, rotateX:90, ease:"power2"}, "<")
                .to(logo, {duration:1, alpha:1, ease:"none"}, "<0.3")

		}

/******************  //end of MAIN ANIMATION  ******************/    
    
        
/********************  EVENTS  ********************/ 
        cta.addEventListener('mouseover', (e) => {
            gsap.to(e.target, {duration:0.4, 
                backgroundColor:dc.color_ctaBG_over,
                color: dc.color_ctaText_over, 
                // borderColor = dc.color_ctaBG;
                ease:"none"}  
            )      
        });
        cta.addEventListener('mouseout', (e) => {
            gsap.to(e.target, {duration:0.2, 
                backgroundColor:dc.color_ctaBG,
                color: dc.color_ctaText, 
                ease:"none"}  
            )    
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
/***************** //end ofENABLER  *****************/   
       
}