import { Parallax } from "react-parallax";

const Cover = ({ img }) => {
  return (
    <>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div
          className="hero min-h-screen"
          
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Explore Our Cars</h1>
              <p className="mb-5">
                Discover a wide selection of vehicles tailored to your needs and
                lifestyle. Whether you're searching for a sleek sedan, a robust
                SUV, or an eco-friendly hybrid, we have the perfect car waiting
                for you. Start your journey today and find the vehicle that
                complements your adventures and everyday travels!
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Cover;
