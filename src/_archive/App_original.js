import React from 'react';
import ReactDOM from 'react-dom'
import {FaYoutube, FaFacebook,FaLinkedin, FaGithubSquare,FaRunning ,FaCode,FaPalette} from 'react-icons/fa';

import { IconContext } from "react-icons";
//
import './css/bootstrap.css';
import './css/style.css';
//
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from 'react-fontawesome'

//library.add( faCheckSquare, faCoffee)

//const camera = icon({ prefix: 'fa', iconName: 'camera' })
//const camera = icon({ prefix: 'fas', iconName: 'camera' })


class App extends React.Component {
  constructor(props) {
    super(props);
    //
    this.bg = null; // reference to the DOM node
    this.item = null; // reference to the DOM node
    //
    //if (props.visibility) {
    //this.style.visibility = props.visibility;
    //}
  }
  componentDidMount() {

  }
  render() {
    // const { filePath, h, w, killMe } = this.props;
    return (
      <React.Fragment>
        <div id="page" className="page">{/* mian-content */}
          <div className="main-content bg bg2" id="home">
            <div className="layer">
              {/* header */}
              <header className="editContent">
                <div className="container-fluid px-lg-5">
                  {/* nav */}
                  <nav className="py-4 d-lg-flex">
                    <div id="logo">
                      <h1> <a className="editContent" href="index.html" style={{ outline: 'none', cursor: 'inherit' }}> Derek Mosher</a></h1>
                    </div>
                    <label htmlFor="drop" className="toggle">Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu mt-2 ml-auto">
                      <li className="active"><a href="index.html" style={{ outline: 'none', cursor: 'inherit' }}>Home</a></li>
                      <li><a href="#about" className="scroll">About</a></li>
                      <li><a href="#blog" className="scroll" style={{ outline: 'none', cursor: 'inherit' }}>Blog</a></li>
                      <li>
                        {/* First Tier Drop Down */}
                        <label htmlFor="drop-2" className="toggle">Dropdown <span className="fa fa-angle-down" aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} /> </label>
                        <a href="#" style={{ outline: 'none', cursor: 'inherit' }}>Dropdown <span className="fa fa-angle-down" aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} /></a>
                        <input type="checkbox" id="drop-2" />
                        <ul className="inner-ul">
                          <li><a className="scroll" href="#gallery" style={{ outline: 'none', cursor: 'inherit' }}>Gallery</a></li>
                          <li><a href="#plans" className="scroll" style={{ outline: 'none', cursor: 'inherit' }}>Plans</a></li>
                          <li><a href="#blog" className="scroll" style={{ outline: 'none', cursor: 'inherit' }}>Blog</a></li>
                        </ul>
                      </li>
                      <li><a href="#contact" className="scroll" style={{ outline: 'none', cursor: 'inherit' }}>Contact</a></li>
                    </ul>
                  </nav>
                  {/* //nav */}
                </div>
              </header>
              {/* //header */}
              <div className="container">
                {/* /banner */}
                <div className="banner-info-w3layouts">
                  <h3 className="editContent">Motion, Design, Code</h3>
                  <p className="my-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Lorem Ipsum has been the industry's standard since the 1500s.Vestibulum ante ipsum primis in faucibus orci luctus.</p> <a href="single.html" className="read-more mt-3 btn" style={{ outline: 'none', cursor: 'inherit' }}>Read More </a> </div>
              </div>
            </div>
            {/* //banner */}
          </div>
          {/*// mian-content */}
          {/* banner-bottom-wthree */}
          <section className="banner-bottom-wthree py-5 editContent" id="about">
            <div className="container py-md-5 px-lg-5">
              <div className="content-left-bottom text-center">
                <h3 className="tittle mb-lg-5 mb-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>About</h3>
              </div>
              <div className="content-right-bottom mt-md-0 mt-3 text-center">
                <p className="mt-2 editContent" style={{ outline: 'none', cursor: 'inherit' }}>I've been <strong className="text-capitalize"> animating, designing,</strong> and <strong className="text-capitalize"> coding </strong> for 20 years.</p>
                <p className="mt-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>        
                 My primary focus has always been motion design. I started out doing
            Flash back in 2000 but have transitioned to HTML, CSS, and
            JavaScript. Keeping up with technology I am using Reactjs and JSX to
            create this site from scratch (no template).</p>
              </div>
              <div className="row banner-grids mt-lg-5 editContent">
                <div className="col-lg-4 banner-grid">
                  <div className="content-grid-info editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                    <div className="row">
                      <div className="col-2"style={{ display:'flex',alignItems:'flex-top',justifyContent:'center',backgroundColor:''}}>
                      <IconContext.Provider value={{ size: '6em',color: "red", className: "global-class-name" }}>
 
                      <FaRunning   aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
                      </IconContext.Provider>
                      </div>
                      <div className="col-10">
                        <h4 className="mb-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Animation</h4>
                       
                        <p className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>GSAP, <br/>After Effects,<br/>Google Web Designer,<br/> Premiere</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 banner-grid">
                  <div className="content-grid-info editContent">
                    <div className="row">
                    <div className="col-2"style={{ display:'flex',alignItems:'flex-top',justifyContent:'center',backgroundColor:''}}>
                      <IconContext.Provider value={{ size: '6em',color: "red", className: "global-class-name" }}>
 
 <FaPalette  aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
 </IconContext.Provider>
                      </div>
                      <div className="col-10">
                        <h4 className="mb-3 editContent">Design</h4>
                        <p className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>PhotoShop</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 banner-grid">
                  <div className="content-grid-info editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                    <div className="row">
                    <div className="col-2"style={{ display:'flex',alignItems:'flex-top',justifyContent:'center',backgroundColor:''}}>
                      <IconContext.Provider value={{ size: '6em',color: "red", className: "global-class-name" }}>
 
 <FaCode  aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
 </IconContext.Provider>
                      </div>
                      <div className="col-10">
                        <h4 className="mb-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Code</h4>
                        <p className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>HTML, CSS, JavaScript, <br/>GSAP<br/>Git<br/>Reactjs, JSX, NPM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* //banner-bottom-wthree */}
          {/*/mid-sec*/}
          {/*//mid-sec*/}
          {/*/ about */}
          <section className="services py-5 editContent" id="services">
            <div className="container py-md-5">
              <div className="header pb-lg-3 pb-3 text-center">
                <h3 className="tittle mb-lg-3 mb-3 editContent">Our Services</h3>
              </div>
              <div className="row ab-info second mt-lg-4 editContent">
                <div className="col-lg-3 ab-content">
                  <div className="ab-content-inner editContent">
                  
                    <img src="../images/2.jpg" alt="news image" className="img-fluid" />
                    <div className="ab-info-con">
                      <h4 className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>Shell Chemicals</h4>
                      <p className="editContent">Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ab-content">
                  <div className="ab-content-inner editContent">
                    <img src="../images/1.jpg" alt="news image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                    <div className="ab-info-con">
                      <h4 className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>Quality Material</h4>
                      <p className="editContent">Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ab-content">
                  <div className="ab-content-inner editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                    <img src="../images/3.jpg" alt="news image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                    <div className="ab-info-con">
                      <h4 className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>Industry Chemicals</h4>
                      <p className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ab-content">
                  <div className="ab-content-inner editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                    <img src="../images/4.jpg" alt="news image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                    <div className="ab-info-con">
                      <h4 className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>Commercial Fuel</h4>
                      <p className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*// about */}
          {/* Gallery */}
          <section className="gallery py-5" id="gallery">
            <div className="container py-md-5">
              <div className="header text-center">
                <h3 className="tittle mb-lg-5 mb-3 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Our Gallery</h3>
              </div>
              <div className="row news-grids text-center">
                <div className="col-md-4 gal-img">
                  <a href="#gal1"><img src="../images/g1.jpg" alt="news image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} /></a>
                </div>
                <div className="col-md-4 gal-img">
                  <a href="#gal2"><img src="../images/g2.jpg" alt="news image" className="img-fluid" /></a>
                </div>
                <div className="col-md-4 gal-img">
                  <a href="#gal3"><img src="../images/g3.jpg" alt="news image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} /></a>
                </div>
                <div className="col-md-4 gal-img">
                  <a href="#gal4"><img src="../images/g4.jpg" alt="news image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} /></a>
                </div>
                <div className="col-md-4 gal-img">
                  <a href="#gal5"><img src="../images/g5.jpg" alt="news image" className="img-fluid" /></a>
                </div>
                <div className="col-md-4 gal-img">
                  <a href="#gal6"><img src="../images/g6.jpg" alt="news image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} /></a>
                </div>
              </div>
              {/* popup*/}
              <div id="gal1" className="pop-overlay animate">
                <div className="popup">
                  <img src="../images/g1.jpg" alt="Popup Image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                  <p className="mt-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                  <a className="close" href="#gallery">×</a>
                </div>
              </div>
              {/* //popup */}
              {/* popup*/}
              <div id="gal2" className="pop-overlay animate">
                <div className="popup">
                  <img src="../images/g2.jpg" alt="Popup Image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                  <p className="mt-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                  <a className="close" href="#gallery">×</a>
                </div>
              </div>
              {/* //popup */}
              {/* popup*/}
              <div id="gal3" className="pop-overlay animate">
                <div className="popup">
                  <img src="../images/g3.jpg" alt="Popup Image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                  <p className="mt-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                  <a className="close" href="#gallery">×</a>
                </div>
              </div>
              {/* //popup3 */}
              {/* popup*/}
              <div id="gal4" className="pop-overlay animate">
                <div className="popup">
                  <img src="../images/g4.jpg" alt="Popup Image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                  <p className="mt-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                  <a className="close" href="#gallery">×</a>
                </div>
              </div>
              {/* //popup */}
              {/* popup*/}
              <div id="gal5" className="pop-overlay animate">
                <div className="popup">
                  <img src="../images/g5.jpg" alt="Popup Image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                  <p className="mt-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                  <a className="close" href="#gallery">×</a>
                </div>
              </div>
              {/* //popup */}
              {/* popup*/}
              <div id="gal6" className="pop-overlay animate">
                <div className="popup">
                  <img src="../images/g6.jpg" alt="Popup Image" className="img-fluid" style={{ outline: 'none', cursor: 'inherit' }} />
                  <p className="mt-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                  <a className="close" href="#gallery">×</a>
                </div>
              </div>
              {/* //popup */}
            </div>
          </section>
          {/*// gallery */}
          {/*/counter*/}
          {/*//counter*/}
          {/* blog */}
          <section className="blog_w3ls py-5 editContent" id="blog">
            <div className="container py-xl-5 py-lg-3">
              <div className="header text-center">
                <h3 className="tittle mb-lg-5 mb-4 editContent">Blog Posts</h3>
              </div>
              <div className="row">
                {/* blog grid */}
                <div className="col-lg-4 col-md-6">
                  <div className="card border-0 med-blog editContent">
                    <div className="card-header p-0">
                      <a href="single.html">
                        <img className="card-img-bottom" src="../images/g1.jpg" alt="image" />
                      </a>
                    </div>
                    <div className="card-body border border-top-0 pb-5">
                      <div className="mb-3">
                        <h5 className="blog-title card-title font-weight-bold m-0">
                          <a className="editContent" href="single.html">Dictum porta auris</a>
                        </h5>
                        <div className="blog_w3icon">
                          <span className="editContent">
                            Feb 12, 2019 - loremipsum</span>
                        </div>
                      </div>
                      <p className="mb-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                      <div className="price-button mt-md-3 mt-2">
                        <a className="btn text-uppercase" href="single.html" style={{ outline: 'none', cursor: 'inherit' }}>
                          Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //blog grid */}
                {/* blog grid */}
                <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                  <div className="card border-0 med-blog editContent">
                    <div className="card-body border border-bottom-0 pb-5">
                      <div className="mb-3">
                        <h5 className="blog-title card-title font-weight-bold m-0">
                          <a className="editContent" href="single.html" style={{ outline: 'none', cursor: 'inherit' }}>Dictum porta auris</a>
                        </h5>
                        <div className="blog_w3icon">
                          <span className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                            Feb 14, 2019 - loremipsum</span>
                        </div>
                      </div>
                      <p className="mb-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                      <div className="price-button mt-md-3 mt-2">
                        <a className="btn text-uppercase" href="single.html">
                          Read More</a>
                      </div>
                    </div>
                    <div className="card-header p-0">
                      <a href="single.html">
                        <img className="card-img-bottom" src="../images/g3.jpg" alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* //blog grid */}
                {/* blog grid */}
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                  <div className="card border-0 med-blog editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                    <div className="card-header p-0">
                      <a href="single.html">
                        <img className="card-img-bottom" src="../images/g2.jpg" alt="image" style={{ outline: 'none', cursor: 'inherit' }} />
                      </a>
                    </div>
                    <div className="card-body border border-top-0 pb-5">
                      <div className="mb-3">
                        <h5 className="blog-title card-title font-weight-bold m-0">
                          <a className="editContent" href="single.html" style={{ outline: 'none', cursor: 'inherit' }}>Dictum porta auris</a>
                        </h5>
                        <div className="blog_w3icon">
                          <span className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                            Feb 16, 2019 - loremipsum</span>
                        </div>
                      </div>
                      <p className="mb-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                      <div className="price-button mt-md-3 mt-2">
                        <a className="btn text-uppercase" href="single.html" style={{ outline: 'none', cursor: 'inherit' }}>
                          Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //blog grid */}
              </div>
              <div className="row mt-5">
                {/* blog grid */}
                <div className="col-lg-4 col-md-6">
                  <div className="card border-0 med-blog editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                    <div className="card-header p-0">
                      <a href="single.html">
                        <img className="card-img-bottom" src="../images/g6.jpg" alt="image" style={{ outline: 'none', cursor: 'inherit' }} />
                      </a>
                    </div>
                    <div className="card-body border border-top-0 pb-5">
                      <div className="mb-3">
                        <h5 className="blog-title card-title font-weight-bold m-0">
                          <a className="editContent" href="single.html" style={{ outline: 'none', cursor: 'inherit' }}>Dictum porta auris</a>
                        </h5>
                        <div className="blog_w3icon">
                          <span className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                            Feb 18, 2019 - loremipsum</span>
                        </div>
                      </div>
                      <p className="mb-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                      <div className="price-button mt-md-3 mt-2">
                        <a className="btn text-uppercase" href="single.html" style={{ outline: 'none', cursor: 'inherit' }}>
                          Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //blog grid */}
                {/* blog grid */}
                <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                  <div className="card border-0 med-blog editContent">
                    <div className="card-body border border-bottom-0 pb-5">
                      <div className="mb-3">
                        <h5 className="blog-title card-title font-weight-bold m-0">
                          <a className="editContent" href="single.html" style={{ outline: 'none', cursor: 'inherit' }}>Dictum porta auris</a>
                        </h5>
                        <div className="blog_w3icon">
                          <span className="editContent">
                            Feb 20, 2019 - loremipsum</span>
                        </div>
                      </div>
                      <p className="mb-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                      <div className="price-button mt-md-3 mt-2">
                        <div className="price-button mt-md-3 mt-2">
                          <a className="btn text-uppercase" href="single.html" style={{ outline: 'none', cursor: 'inherit' }}>
                            Read More</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-header p-0">
                      <a href="single.html">
                        <img className="card-img-bottom" src="../images/g5.jpg" alt="image" style={{ outline: 'none', cursor: 'inherit' }} />
                      </a>
                    </div>
                  </div>
                </div>
                {/* //blog grid */}
                {/* blog grid */}
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                  <div className="card border-0 med-blog editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                    <div className="card-header p-0">
                      <a href="single.html">
                        <img className="card-img-bottom" src="../images/g4.jpg" alt="image" style={{ outline: 'none', cursor: 'inherit' }} />
                      </a>
                    </div>
                    <div className="card-body border border-top-0 pb-5">
                      <div className="mb-3">
                        <h5 className="blog-title card-title font-weight-bold m-0">
                          <a className="editContent" href="single.html" style={{ outline: 'none', cursor: 'inherit' }}>Dictum porta auris</a>
                        </h5>
                        <div className="blog_w3icon">
                          <span className="editContent" style={{ outline: 'none', cursor: 'inherit' }}>
                            Feb 24, 2019 - loremipsum</span>
                        </div>
                      </div>
                      <p className="mb-4 editContent" style={{ outline: 'none', cursor: 'inherit' }}>Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                      <div className="price-button mt-md-3 mt-2">
                        <a className="btn text-uppercase" href="single.html" style={{ outline: 'none', cursor: 'inherit' }}>
                          Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //blog grid */}
              </div>
            </div>
          </section>

          {/* footer */}
          <footer className="footer-content bg bg1">
            <div className="layer footer-1">
              <div className="container-fluid">
                <div className="row footer-top-inner-w3ls"> </div>
                <p className="copy-right-grids text-li text-center my-sm-4 my-4">- Connect with me - <br/> derekmosher@gmail.com
                {/* <a href="http://w3layouts.com/"> W3layouts </a> */}
                </p>
                <div className="w3ls-footer text-center mt-4">
                  <ul className="list-unstyled w3ls-icons">
                  <li>
                      <a href="https://www.linkedin.com/in/dmosh/" target="_blank">
                      <IconContext.Provider value={{ size: '3em',color: "white", className: "global-class-name" }}>
 
 <FaLinkedin  aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
   </IconContext.Provider>
    {/* <span className="fa fa-linkedin" style={{ outline: 'none', cursor: 'inherit' }} /> */}
                      </a>
                    </li>
                    
                    <li>
                      <a href="https://www.youtube.com/c/derekmosher" target="_blank">
                      <IconContext.Provider value={{ size: '3em',color: "white", className: "global-class-name" }}>
 
 <FaYoutube  aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
   </IconContext.Provider>
                        {/* <span className="fa fa-youtube" style={{ outline: 'none', cursor: 'inherit' }} /> */}
                      </a>
                    </li>
                    
  
                    <li>
                      <a href="https://github.com/derekmosher" target="_blank">
                      <IconContext.Provider value={{ size: '3em',color: "white", className: "global-class-name" }}>
 
 <FaGithubSquare  aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} />
   </IconContext.Provider>
                        {/* <span className="fa fa-github" style={{ outline: 'none', cursor: 'inherit' }} /> */}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="move-top text-right"><a href="#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true" style={{ outline: 'none', cursor: 'inherit' }} /></a></div>
              </div>
              {/* //footer bottom */}
            </div>
          </footer>
          {/* //footer */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
