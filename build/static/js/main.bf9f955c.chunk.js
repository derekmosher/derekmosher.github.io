(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(46)},32:function(e,t,a){},33:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(26),s=a.n(i),r=(a(32),a(7)),o=a(8),c=a(10),m=a(9),d=a(11),u=a(5),h=a(0),g=(a(33),a(13)),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).bg=null,a.item=null,e.visibility&&(a.style.visibility=e.visibility),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){g.a.set(this.bg,{transformOrigin:"50% 50%"}),g.a.from(this.bg,.3,{alpha:.8,scale:0}),g.a.from(this.item,.5,{delay:.3,alpha:0})}},{key:"render",value:function(){var e=this,t=this.props,a=t.filePath,n=t.h,i=t.w,s=t.killMe;return console.log("f = "+a),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{ref:function(t){return e.bg=t},className:"bgStyle",onClick:s}),l.a.createElement("div",{ref:function(t){return e.item=t},className:"iframeHolderStyle"},l.a.createElement("iframe",{title:"react box",className:"iframeStyle",src:a,width:i,height:n})))}}]),t}(l.a.Component),b=a(12),y=a.n(b),E=(a(44),a(45),function(e){var t=e.id,a=e.title,n=e.description,i=e.thumbPath,s=e.handleClick,r=e.itemsKey;e.isVisible;return l.a.createElement("div",{className:"col-lg-3 ab-content"},l.a.createElement("div",{className:"ab-content-inner editContent gal-img"},l.a.createElement("img",{className:"img-fluid",onClick:function(){return s(t,r)},alt:"thumbnail_"+t,src:i.includes("http")?i:"../images/"+i,style:{outline:"none",cursor:"pointer"}}),l.a.createElement("div",{className:"ab-info-con"},l.a.createElement("h4",{className:"editContent",style:{outline:"none",cursor:"inherit",marginBottom:"6px"}},a),l.a.createElement("p",{className:"editContent"},n))))}),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).hideReactBox=function(){a.setState({showtimeVisible:!1})},a.showReactBox=function(e,t){console.log(e,t),a.setState({itemsKey:t,showtimeVisible:!0,thumbNum:e})},a.state={showtimeVisible:!1,thumbNum:e.thumbNum,itemsKey:"items",data:{}},console.log("Mydata = ",e.json),console.log("Mydata title = ",e.json.section1.bg,e.json.section4.title),console.log("Mydata title = ",e.json.section0.title,e.json.section0.description,e.json.section0.url),a.json=e.json,a.bg=null,a.item=null,a.textArray=[],a.thumbArray0=e.thumbs_design,a.thumbArray1=e.thumbs_banner,a.thumbArray4=e.thumbs_social,a.thumbArray2=e.thumbs_yt,a.thumbArray3=e.thumbs_book,a.mytitle1=e.json.section1.title,a.mytitle2=e.json.section2.title,a.mytitle3=e.json.section3.title,a.mytitle4=e.json.section4.title,a.mytitle5=e.json.section5.title,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"page",className:"page"},l.a.createElement("div",{className:"main-content bg bg2",id:"home"},l.a.createElement("div",{className:"layer",style:{position:"absolute",top:"0px",left:"0px",width:"100%",zIndex:"1"}},l.a.createElement("header",{className:"editContent"},l.a.createElement("div",{className:"container-fluid px-lg-5"},l.a.createElement("nav",{className:"py-4 d-lg-flex"},l.a.createElement("div",{id:"logo"},l.a.createElement("h1",null," ",l.a.createElement("a",{className:"editContent",href:"index.html",style:{outline:"none",cursor:"inherit"}}," Derek Mosher"))),l.a.createElement("label",{htmlFor:"drop",className:"toggle"},"Menu"),l.a.createElement("input",{type:"checkbox",id:"drop"}),l.a.createElement("ul",{className:"menu mt-2 ml-auto"},l.a.createElement("li",null,l.a.createElement("a",{href:"#about",className:"scroll"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#work",className:"scroll",style:{outline:"none",cursor:"inherit"}},"Work")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact",className:"scroll",style:{outline:"none",cursor:"inherit"}},"Contact")))))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"banner-info-w3layouts"},l.a.createElement("p",{className:"editContent",style:{outline:"none",color:"fff",fontSize:"27px",fontWeight:"600",lineHeight:"100%"}},"Motion, Design, Code "),l.a.createElement("p",{className:"my-3 editContent",style:{outline:"none",cursor:"inherit"}}," My primary focus has always been motion design. I've been in the advertising and entertainment industry for 20 years.")," "))),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(y.a,{url:this.props.json.section0.url,className:"react-player",muted:"true",volume:"0",playing:"true",loop:"true",controls:"false",width:"100%",height:"100%"}))),l.a.createElement("section",{className:"sectionAbout banner-bottom-wthree py-5 editContent",id:"about"},l.a.createElement("div",{className:"container py-md-5 px-lg-5"},l.a.createElement("div",{className:"content-left-bottom text-center"},l.a.createElement("h3",{className:"tittle mb-lg-5 mb-4 editContent",style:{outline:"none",cursor:"inherit"}},"About")),l.a.createElement("div",{className:"content-right-bottom mt-md-0 mt-3 text-center"},l.a.createElement("p",{className:"mt-2 editContent",style:{outline:"none",cursor:"inherit"}},"I've been ",l.a.createElement("strong",{className:"text-capitalize"}," animating, designing,")," and ",l.a.createElement("strong",{className:"text-capitalize"}," coding ")," for 20 years."),l.a.createElement("p",{className:"mt-3 editContent",style:{outline:"none",cursor:"inherit"}},"I started out back in 1997 studying ",l.a.createElement("strong",{className:"text-capitalize"},"  Digital Storytelling ")," in Graduate School. I had always loved to draw and wanted to see my images come to life. Flash was in demand and I jumped right into it. Working at entertainment and advertising companies I created ads, sites, interactive experiences and even some small games. Post Flash apocalypse, I transitioned to Adobe Edge, Google Web Designer and ultimately into ",l.a.createElement("strong",{className:"text-capitalize"}," HTML, CSS,")," and",l.a.createElement("strong",{className:"text-capitalize"}," JavaScript"),". Keeping up with technology I built this new portfolio with Reactjs and JSX.")),l.a.createElement("div",{className:"row banner-grids mt-lg-5 editContent"},l.a.createElement("div",{className:"col-lg-4 banner-grid"},l.a.createElement("div",{className:"content-grid-info editContent",style:{outline:"none",cursor:"inherit"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2",style:{display:"flex",alignItems:"flex-top",justifyContent:"center",backgroundColor:""}},l.a.createElement(h.b.Provider,{value:{size:"6em",color:"red",className:"global-class-name"}},l.a.createElement(u.e,{"aria-hidden":"true",style:{outline:"none",cursor:"inherit"}}))),l.a.createElement("div",{className:"col-10"},l.a.createElement("h4",{className:"mb-3 editContent",style:{outline:"none",cursor:"inherit"}},"Animation"),l.a.createElement("p",{className:"editContent",style:{outline:"none",cursor:"inherit"}},"GSAP, ",l.a.createElement("br",null),"After Effects,",l.a.createElement("br",null),"Google Web Designer,",l.a.createElement("br",null)," Premiere"))))),l.a.createElement("div",{className:"col-lg-4 banner-grid"},l.a.createElement("div",{className:"content-grid-info editContent"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2",style:{display:"flex",alignItems:"flex-top",justifyContent:"center",backgroundColor:""}},l.a.createElement(h.b.Provider,{value:{size:"6em",color:"red",className:"global-class-name"}},l.a.createElement(u.d,{"aria-hidden":"true",style:{outline:"none",cursor:"inherit"}}))),l.a.createElement("div",{className:"col-10"},l.a.createElement("h4",{className:"mb-3 editContent"},"Design"),l.a.createElement("p",{className:"editContent",style:{outline:"none",cursor:"inherit"}},"PhotoShop"))))),l.a.createElement("div",{className:"col-lg-4 banner-grid"},l.a.createElement("div",{className:"content-grid-info editContent",style:{outline:"none",cursor:"inherit"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2",style:{display:"flex",alignItems:"flex-top",justifyContent:"center",backgroundColor:""}},l.a.createElement(h.b.Provider,{value:{size:"6em",color:"red",className:"global-class-name"}},l.a.createElement(u.a,{"aria-hidden":"true",style:{outline:"none",cursor:"inherit"}}))),l.a.createElement("div",{className:"col-10"},l.a.createElement("h4",{className:"mb-3 editContent",style:{outline:"none",cursor:"inherit"}},"Code"),l.a.createElement("p",{className:"editContent",style:{outline:"none",cursor:"inherit"}},"HTML, CSS, JavaScript, ",l.a.createElement("br",null),"GSAP",l.a.createElement("br",null),"Git",l.a.createElement("br",null),"Reactjs, JSX, NPM")))))))),l.a.createElement("section",{className:"section0 gallery py-5",id:"gallery"},l.a.createElement("div",{className:"container py-md-5"},l.a.createElement("div",{className:"header text-center"},l.a.createElement("h3",{className:"tittle mb-lg-5 mb-3 editContent",style:{outline:"none",cursor:"inherit"}},this.props.json.section0.title),l.a.createElement("h6",null," ",this.props.json.section0.description)),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(y.a,{url:this.props.json.section0.url,className:"react-player",stopped:"true",controls:!0,width:"640px",height:"360px"})))),l.a.createElement("section",{className:"section1 py-5 editContent",id:"work",style:{backgroundColor:this.props.json.section1.bg}},l.a.createElement("div",{className:"container py-md-5"},l.a.createElement("div",{className:"header pb-lg-3 pb-3 text-center"},l.a.createElement("h3",{className:"tittle mb-lg-3 mb-3 editContent"},this.mytitle1)),l.a.createElement("div",{className:"row ab-info second mt-lg-4 editContent"},this.props.thumbs_design.map(function(t,a){return l.a.createElement(E,{handleClick:e.showReactBox,itemsKey:"items_design",key:a,id:a,title:t.title,description:t.description,info:t.info,thumbPath:t.thumbPath})})))),l.a.createElement("section",{className:"section2 py-5 editContent",id:"work",style:{backgroundColor:this.props.json.section2.bg}},l.a.createElement("div",{className:"container py-md-5"},l.a.createElement("div",{className:"header pb-lg-3 pb-3 text-center"},l.a.createElement("h3",{className:"tittle mb-lg-3 mb-3 editContent"},this.mytitle2)),l.a.createElement("div",{className:"row ab-info second mt-lg-4 editContent"},this.props.thumbs_banner.map(function(t,a){return l.a.createElement(E,{handleClick:e.showReactBox,itemsKey:"items_banner",key:a,id:a,title:t.title,description:t.description,info:t.info,thumbPath:t.thumbPath})})))),l.a.createElement("section",{className:"section3 py-5 editContent",id:"work",style:{backgroundColor:this.props.json.section3.bg}},l.a.createElement("div",{className:"container py-md-5"},l.a.createElement("div",{className:"header pb-lg-3 pb-3 text-center"},l.a.createElement("h3",{className:"tittle mb-lg-3 mb-3 editContent"},this.mytitle3)),l.a.createElement("div",{className:"row ab-info second mt-lg-4 editContent"},this.props.thumbs_social.map(function(t,a){return l.a.createElement(E,{handleClick:e.showReactBox,itemsKey:"items_social",key:a,id:a,title:t.title,description:t.description,info:t.info,thumbPath:t.thumbPath})})))),l.a.createElement("section",{className:"section4 py-5 editContent",id:"",style:{backgroundColor:this.props.json.section4.bg}},l.a.createElement("div",{className:"container py-md-5"},l.a.createElement("div",{className:"header pb-lg-3 pb-3 text-center"},l.a.createElement("h3",{className:"tittle mb-lg-3 mb-3 editContent"},this.mytitle4),l.a.createElement("h6",null,l.a.createElement("a",{href:"https://www.youtube.com/c/derekmosher",target:"_blank",rel:"noopener noreferrer"},"My Youtube channel"),"\xa0has over a 1,100,000 views. I enjoy doing reviews, unboxings, how to's, and creative stuff. I use Premiere, After Effects, and PhotoShop to create my videos.")),l.a.createElement("div",{className:"row ab-info second mt-lg-4 editContent"},this.props.thumbs_yt.map(function(t,a){return l.a.createElement(E,{handleClick:e.showReactBox,itemsKey:"items_youtube",key:a,id:a,title:t.title,description:t.description,info:t.info,thumbPath:t.thumbPath})})))),l.a.createElement("section",{className:"section5 gallery py-5",id:"gallery",style:{backgroundColor:this.props.json.section5.bg}},l.a.createElement("div",{className:"container py-md-5"},l.a.createElement("div",{className:"header text-center"},l.a.createElement("h3",{className:"tittle mb-lg-5 mb-3 editContent",style:{outline:"none",cursor:"inherit"}},this.mytitle5),l.a.createElement("h6",null," I wrote and illustrated,",l.a.createElement("b",null,l.a.createElement("a",{href:"https://www.amazon.com/Creepy-Little-TV-Guy/dp/197586946X",target:"_blank",rel:"noopener noreferrer"},"The Creepy Little TV Guy")),". It's available to purchase on\xa0",l.a.createElement("a",{href:"https://www.amazon.com/Creepy-Little-TV-Guy/dp/197586946X",target:"_blank",rel:"noopener noreferrer"},"Amazon"),". Makes a great gift. Get your copy today!")),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",backgroundColor:""}},l.a.createElement(y.a,{url:"https://www.youtube.com/embed/c43dQ71y0lk",className:"react-player",stopped:"true",controls:!0,width:"640px",height:"360px"})),l.a.createElement("div",{className:"row news-grids text-center"},l.a.createElement("div",{className:"col-md-4 gal-img"},l.a.createElement("a",{href:"#gal1"},l.a.createElement("img",{src:"../images/cltvg1.jpg",alt:"news image1",className:"img-fluid",style:{outline:"none",cursor:"inherit"}}))),l.a.createElement("div",{className:"col-md-4 gal-img"},l.a.createElement("a",{href:"#gal2"},l.a.createElement("img",{src:"../images/cltvg2.jpg",alt:"news image2",className:"img-fluid"}))),l.a.createElement("div",{className:"col-md-4 gal-img"},l.a.createElement("a",{href:"#gal3"},l.a.createElement("img",{src:"../images/cltvg3.jpg",alt:"news image3",className:"img-fluid",style:{outline:"none",cursor:"inherit"}})))),l.a.createElement("div",{id:"gal1",className:"pop-overlay animate"},l.a.createElement("div",{className:"popup"},l.a.createElement("img",{src:"../images/cltvg1.jpg",alt:"Popup Image1",className:"img-fluid",style:{outline:"none",cursor:"inherit"}}),l.a.createElement("p",{className:"mt-4 editContent",style:{outline:"none",cursor:"inherit"}},"For three months straight, Timothy sat lost to the world, submersed in sights and sounds that whirled and twirled."),l.a.createElement("a",{className:"close",href:"#gallery"},"\xd7"))),l.a.createElement("div",{id:"gal2",className:"pop-overlay animate"},l.a.createElement("div",{className:"popup"},l.a.createElement("img",{src:"../images/cltvg2.jpg",alt:"Popup Image2",className:"img-fluid",style:{outline:"none",cursor:"inherit"}}),l.a.createElement("p",{className:"mt-4 editContent",style:{outline:"none",cursor:"inherit"}},"He streaked through the streams. He swung from the trees. He danced in the daisies. He buzzed with the bees."),l.a.createElement("a",{className:"close",href:"#gallery"},"\xd7"))),l.a.createElement("div",{id:"gal3",className:"pop-overlay animate"},l.a.createElement("div",{className:"popup"},l.a.createElement("img",{src:"../images/cltvg3.jpg",alt:"Popup Image3",className:"img-fluid",style:{outline:"none",cursor:"inherit"}}),l.a.createElement("p",{className:"mt-4 editContent",style:{outline:"none",cursor:"inherit"}},"Then out the front door, Timothy sailed. And at last, the chase was derailed."),l.a.createElement("a",{className:"close",href:"#gallery"},"\xd7"))))),l.a.createElement("footer",{className:"footer-content bg bg1",id:"contact"},l.a.createElement("div",{className:"layer footer-1"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row footer-top-inner-w3ls"}," "),l.a.createElement("p",{className:"copy-right-grids text-li text-center my-sm-4 my-4"},"- Connect with me - ",l.a.createElement("br",null)," derekmosher@gmail.com"),l.a.createElement("div",{className:"w3ls-footer text-center mt-4"},l.a.createElement("ul",{className:"list-unstyled w3ls-icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/dmosh/"},l.a.createElement(h.b.Provider,{value:{size:"3em",color:"white",className:"global-class-name"}},l.a.createElement(u.c,{"aria-hidden":"true",style:{outline:"none",cursor:"inherit"}})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.youtube.com/c/derekmosher"},l.a.createElement(h.b.Provider,{value:{size:"3em",color:"white",className:"global-class-name"}},l.a.createElement(u.f,{"aria-hidden":"true",style:{outline:"none",cursor:"inherit"}})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/derekmosher"},l.a.createElement(h.b.Provider,{value:{size:"3em",color:"white",className:"global-class-name"}},l.a.createElement(u.b,{"aria-hidden":"true",style:{outline:"none",cursor:"inherit"}})))))),l.a.createElement("div",{className:"move-top text-right"},l.a.createElement("a",{href:"#home",className:"move-top"}," ",l.a.createElement("span",{className:"fa fa-angle-up  mb-3","aria-hidden":"true",style:{outline:"none",cursor:"inherit"}})))))),l.a.createElement("div",{style:{position:"absolute",top:"0px"}},this.state.showtimeVisible&&l.a.createElement(p,{filePath:this.json[this.state.itemsKey][this.state.thumbNum].filePath,h:this.json[this.state.itemsKey][this.state.thumbNum].h,w:this.json[this.state.itemsKey][this.state.thumbNum].w,killMe:this.hideReactBox}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));fetch("https://derekmosher.github.io/work_to_display/mydata.json").then(function(e){return e.json()}).then(function(e){console.log("hi j"),console.dir(e),s.a.render(l.a.createElement(f,{json:e,thumbs_design:e.items_design,thumbs_banner:e.items_banner,thumbs_social:e.items_social,thumbs_yt:e.items_youtube,thumbs_book:e.items_book}),document.getElementById("root"))}).catch(function(e){console.error(e)}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.bf9f955c.chunk.js.map