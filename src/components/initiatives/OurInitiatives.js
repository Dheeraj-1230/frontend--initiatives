import React from 'react'
import { Carousel } from 'react-bootstrap'
// import img from '../../assets/bg.jpg'
import './OurInitiatives.css'
import Card from "./Cards"
import img from './initiatives.jpg'
// import img from './initiatives.jpg'
import img1 from './scholarship.jpg'
import img2 from './events.jpg'
import img3 from './webinar.jpg'
import img4 from './zenith.png'
import img6 from './otherinitiatives.png'
import img5 from './interaction.jpg'
import main from './main.jpg'
import test1 from './testimonials-1.jpg'
import test2 from './testimonials-2.jpg'
import test3 from './testimonials-3.jpg'
import test4 from './testimonials-4.jpg'
export default class OurInitiatives extends React.Component{
    render(){
        return(
            <div>
                    

     <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9 text-center">
          <h1>Our Initiatives</h1>
          <h2>We are team of talented designers in NITTSAC</h2>
        </div>
      </div>
      <div class="text-center">
        <a href="/" class="btn-get-started scrollto">Get Started</a>
      </div>

      <div class="row icon-boxes">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><i class="ri-stack-line"></i></div>
            <img src={img4} className="logoofe" alt="zenitth"></img>
            <h4 class="title"><a href="">ZeNITTh</a></h4>
            
            <p class="description">The point of the celestial sphere that is directly opposite the nadir and ....</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon"><i class="ri-palette-line"></i></div>
            <img src={img3} className="logoofe" alt="webinar"></img>
            <h4 class="title"><a href="">Webinars</a></h4>
            <p class="description">A webinar is an event held virtually which is attended exclusively...</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
          <div class="icon-box">
            <div class="icon"><i class="ri-command-line"></i></div>
            <img src={img2} className="logoofe" alt="events"></img>
            <h4 class="title"><a href="">Events</a></h4>
            <p class="description">A thing that happens or takes place, especially one of importance.</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
          <div class="icon-box">
            <div class="icon"><i class="ri-fingerprint-line"></i></div>
            <img src={img1} className="logoofe" alt="scholarship"></img>
            <h4 class="title"><a href="">Scholarships</a></h4>
            <p class="description">A scholarship is an award of financial aid for a student to further their education.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

<br /><br />
  <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h1>Know Your Alumini</h1>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="owl-carousel testimonials-carousel">

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={test1} class="testimonial-img" alt=""></img>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={test2} class="testimonial-img" alt=""></img>
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
          </div>

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={test3} class="testimonial-img" alt=""></img>
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
          </div>

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={test3} class="testimonial-img" alt=""></img>
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
          </div>

          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={test4} class="testimonial-img" alt=""></img>
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
          </div>

        </div>

      </div>
    </section>
{/* <h1>Hello</h1> */}
    <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter">Twitter</i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook">facebook</i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
                
            </div>
        )
    }
    
}