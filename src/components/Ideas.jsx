import { Link } from "react-router-dom";
import img1 from "../assets/ideas1.jpg";
import img2 from "../assets/ideas2.jpg";
import img3 from "../assets/ideas3.jpg";
import img4 from "../assets/ideas4.jpg";
import img5 from "../assets/ideas5.jpg";
import img6 from "../assets/ideas6.jpg";
import img7 from "../assets/ideas7.jpg";
import img8 from "../assets/ideas8.jpg";

export const Ideas = () => {
  const data = [
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
  ];

  return (
    <div className="ideas--container">
      <div className="ideas">
        <div className="header">
          <h2>Ideas and tips</h2>
          <p>Browse our gallery for tips and inspiration</p>
        </div>
        <div className="grid">
          {data.map((idea) => (
            <div className="img-container" key={idea.id}>
              <img src={idea.img} />
            </div>
          ))}
        </div>
        <Link to="/gallery">
          <button>VIEW MORE INSPIRATION</button>
        </Link>
      </div>
    </div>
  );
};
