import React from "react";
import bannerImg from '../../../images/bg-img.png';
import pizza from '../../../images/banner.png';

const Banner = () => {
  return (
    <section className="header_banner ">
      <div
        class="hero min-h-screen text-white"
        style={{background: '#ce2829'}}
        
      >
        <img src={bannerImg} alt="" />
        <div class=""></div>
        <div class="hero-content text-center ">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-warning">Get Started</button>
          </div>
        </div>
        <div className="w-4/6 mt-96">
            <img className="w-full" src={pizza} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
