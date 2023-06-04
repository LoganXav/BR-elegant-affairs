import { LazyImage } from "./LazyImage"

export const Card = ({ event }) => {


  return (
    <div className="card">
      <div className="image">
        <LazyImage img={event.img} />
      </div>
      <div className="info">
        <h2>{event.name}</h2>
        <p>{event.location}</p>
        <span>{event.year}</span>
      </div>
    </div>
  );
};
