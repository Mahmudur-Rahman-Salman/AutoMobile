import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen banner-img">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Say hello to your next
              
              awesome vehicle
            </h1>
            <p className="mb-5">
              Featuring brand new, Wholesale & salvage cars, SUVs for sale
            </p>
            <button className="btn btn-primary">Car Gallery</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
