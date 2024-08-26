import React from "react";

const Hero = (props) => {
  return (
    <div className="col-xxl-8 py-5 mx-auto">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={props.imageUrl}
            className="d-block mx-auto img-fluid"
            loading="lazy"
            alt="Hero"
          />
        </div>
        <div className="col-lg-6 d-flex flex-column align-items-center gap-2">
          <h1 className="display-5 fw-bold lh-1 mb-3">{props.title}</h1>
          <p className="lead">{props.message}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
              href={props.link}
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              {props.buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
