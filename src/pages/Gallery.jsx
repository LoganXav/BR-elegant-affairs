import { useEffect, useRef } from "react";

const Gallery = () => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={divRef} className="gallery--container">
      <div className="gallery">
        <div className="header">
          <h2>Our Amazing Work</h2>
          <div className="options">
            <span>SHOW ALL</span>
            <span>WEDDINGS</span>
            <span>BIRTHDAY DINNERS</span>
            <span>BABY SHOWERS</span>
          </div>
        </div>
        <div className="grid">
          <div className="images">
            <div className="image">
              <img src="https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg" />
            </div>
            <div className="image">
              <img src="https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg" />
            </div>
            <div className="image">
              <img src="https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg" />
            </div>
            <div className="image">
              <img src="https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg" />
            </div>
            <div className="image">
              <img src="https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg" />
            </div>
            <div className="image">
              <img src="https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg" />
            </div>
            <div className="image">
              <img src="https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg" />
            </div>
            <div className="image">
              <img src="https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg" />
            </div>
            <div className="image">
              <img src="https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg" />
            </div>
            <div className="image">
              <img src="https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg" />
            </div>
            <div className="image">
              <img src="https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
