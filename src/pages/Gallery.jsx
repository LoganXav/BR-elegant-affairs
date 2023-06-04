import { useEffect, useRef, useState } from "react";
import { LazyImage } from "../components/LazyImage"
import img1 from "../assets/wedding/wedding-1.jpg";
import img2 from "../assets/wedding/wedding-2.jpg";
import img3 from "../assets/wedding/wedding-3.jpg";
import img4 from "../assets/wedding/wedding-4.jpg";
import img5 from "../assets/wedding/wedding-5.jpg";
import img6 from "../assets/wedding/wedding-6.jpg";
import img7 from "../assets/wedding/wedding-7.jpg";
import img8 from "../assets/wedding/wedding-8.jpg";
import img9 from "../assets/wedding/wedding-9.jpg";
import img10 from "../assets/wedding/wedding-10.jpg";
import img11 from "../assets/wedding/wedding-11.jpg";
import img12 from "../assets/wedding/wedding-12.jpg";
import img13 from "../assets/wedding/wedding-13.jpg";
import img14 from "../assets/wedding/wedding-14.jpg";
import img15 from "../assets/wedding/wedding-15.jpg";
import img16 from "../assets/wedding/wedding-16.jpg";
import img17 from "../assets/wedding/wedding-17.jpg";
import img18 from "../assets/wedding/wedding-18.jpg";
import img19 from "../assets/wedding/wedding-19.jpg";
import img20 from "../assets/wedding/wedding-20.jpg";
import img21 from "../assets/birthday/birthday-1.jpg";
import img22 from "../assets/birthday/birthday-2.jpg";
import img23 from "../assets/birthday/birthday-3.jpg";
import img24 from "../assets/birthday/birthday-4.jpg";
import img25 from "../assets/birthday/birthday-5.jpg";
import img26 from "../assets/birthday/birthday-6.jpg";
import img27 from "../assets/birthday/birthday-7.jpg";
import img28 from "../assets/birthday/birthday-8.jpg";
import img29 from "../assets/birthday/birthday-9.jpg";
import img42 from "../assets/birthday/birthday-10.jpg";
import img43 from "../assets/birthday/birthday11.jpg";
import img30 from "../assets/baby/baby-1.jpg";
import img31 from "../assets/baby/baby-2.jpg";
import img32 from "../assets/baby/baby-3.jpg";
import img33 from "../assets/baby/baby-4.jpg";
import img34 from "../assets/baby/baby-5.jpg";
import img35 from "../assets/baby/baby-6.jpg";
import img36 from "../assets/baby/baby-7.jpg";
import img37 from "../assets/baby/baby-8.jpg";
import img38 from "../assets/baby/baby-9.jpg";
import img39 from "../assets/baby/baby-10.jpg";
import img40 from "../assets/baby/baby-11.jpg";
import img41 from "../assets/baby/baby-12.jpg";

const Gallery = () => {
  const allData = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    },
    {
      id: 9,
      img: img9,
    },
    {
      id: 10,
      img: img10,
    },
    {
      id: 11,
      img: img11,
    },
    {
      id: 12,
      img: img12,
    },
    {
      id: 13,
      img: img13,
    },
    {
      id: 14,
      img: img14,
    },
    {
      id: 15,
      img: img15,
    },
    {
      id: 16,
      img: img16,
    },
    {
      id: 17,
      img: img17,
    },
    {
      id: 18,
      img: img18,
    },
    {
      id: 19,
      img: img19,
    },
    {
      id: 20,
      img: img20,
    },
    {
      id: 21,
      img: img21,
    },
    {
      id: 22,
      img: img22,
    },
    {
      id: 23,
      img: img23,
    },
    {
      id: 24,
      img: img24,
    },
    {
      id: 25,
      img: img25,
    },
    {
      id: 26,
      img: img26,
    },
    {
      id: 27,
      img: img27,
    },
    {
      id: 28,
      img: img28,
    },
    {
      id: 29,
      img: img29,
    },
    {
      id: 30,
      img: img30,
    },
    {
      id: 31,
      img: img31,
    },
    {
      id: 32,
      img: img32,
    },
    {
      id: 33,
      img: img33,
    },
    {
      id: 34,
      img: img34,
    },
    {
      id: 35,
      img: img35,
    },
    {
      id: 36,
      img: img36,
    },
    {
      id: 37,
      img: img37,
    },
    {
      id: 38,
      img: img38,
    },
    {
      id: 39,
      img: img39,
    },
    {
      id: 40,
      img: img40,
    },
    {
      id: 41,
      img: img41,
    },
  ];
  const wedding = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    },
    {
      id: 9,
      img: img9,
    },
    {
      id: 10,
      img: img10,
    },
    {
      id: 11,
      img: img11,
    },
    {
      id: 12,
      img: img12,
    },
    {
      id: 13,
      img: img13,
    },
    {
      id: 14,
      img: img14,
    },
    {
      id: 15,
      img: img15,
    },
    {
      id: 16,
      img: img16,
    },
    {
      id: 17,
      img: img17,
    },
    {
      id: 18,
      img: img18,
    },
    {
      id: 19,
      img: img19,
    },
    {
      id: 20,
      img: img20,
    },
  ];
  const birthday = [
    {
      id: 21,
      img: img21,
    },
    {
      id: 22,
      img: img22,
    },
    {
      id: 23,
      img: img23,
    },
    {
      id: 24,
      img: img24,
    },
    {
      id: 25,
      img: img25,
    },
    {
      id: 26,
      img: img26,
    },
    {
      id: 27,
      img: img27,
    },
    {
      id: 28,
      img: img28,
    },
    {
      id: 29,
      img: img29,
    },
    {
      id: 42,
      img: img42,
    },
    {
      id: 43,
      img: img43,
    },
  ];
  const baby = [
    {
      id: 30,
      img: img30,
    },
    {
      id: 31,
      img: img31,
    },
    {
      id: 32,
      img: img32,
    },
    {
      id: 33,
      img: img33,
    },
    {
      id: 34,
      img: img34,
    },
    {
      id: 35,
      img: img35,
    },
    {
      id: 36,
      img: img36,
    },
    {
      id: 37,
      img: img37,
    },
    {
      id: 38,
      img: img38,
    },
    {
      id: 39,
      img: img39,
    },
    {
      id: 40,
      img: img40,
    },
    {
      id: 41,
      img: img41,
    },
  ];

  const [option, setOption] = useState("all");

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
            <span className={option === "all" ? "active" : ""} onClick={() => setOption("all")}>SHOW ALL</span>
            <span className={option === "wedding" ? "active" : ""} onClick={() => setOption("wedding")}>WEDDINGS</span>
            <span className={option === "birthday" ? "active" : ""} onClick={() => setOption("birthday")}>BIRTHDAYS</span>
            <span className={option === "baby" ? "active" : ""} onClick={() => setOption("baby")}>BABY SHOWERS</span>
          </div>
        </div>
        <div className="grid">
          <div className="images">
            {
                option === "all" ? (allData.map((image) => (
                <div className="image" key={image.id}>
                  <LazyImage img={image.img} />
                </div>
                ))): option === "wedding" ? (wedding.map((image) => (
                <div className="image" key={image.id}>
                  <LazyImage img={image.img} />
                </div>
                ))): option === "birthday" ? (birthday.map((image) => (
                <div className="image" key={image.id}>
                  <LazyImage img={image.img} />
                </div>
                ))): option === "baby" ? (baby.map((image) => (
                <div className="image" key={image.id}>
                  <LazyImage img={image.img} />
                </div>
                ))) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
