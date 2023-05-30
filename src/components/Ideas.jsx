import { Link } from "react-router-dom";

export const Ideas = () => {
  return (
    <div className="ideas--container">
      <div className="ideas">
        <div className="header">
          <h2>Ideas and tips</h2>
          <p>Browse our gallery for tips and inspiration</p>
        </div>
        <div className="grid">
          <div className="img-container">
            <img src="https://media.istockphoto.com/id/1464666987/photo/beautiful-emotional-woman-with-natural-make-up.jpg?b=1&s=170667a&w=0&k=20&c=3pBli3ApYNyyNc9MXWkXk3ByDOW-_7nnlL6RuhScEwo=" />
          </div>
          <div className="img-container">
            <img src="https://media.istockphoto.com/id/1440458000/photo/young-girl-with-hands-near-skin-face.jpg?b=1&s=170667a&w=0&k=20&c=vXSG4-x3jbQEqD_l9nwpqdWjAMsmcJjHt6LFAQ2vIDc=" />
          </div>
          <div className="img-container">
            <img src="https://media.istockphoto.com/id/1442495175/photo/beauty-portrait-and-natural-face-of-black-woman-with-healthy-freckle-skin-texture-touch.jpg?b=1&s=170667a&w=0&k=20&c=ROYbN_x6cYubTzSW3EzzaL_NCFjMzoXR2XXch9pXUCo=" />
          </div>
          <div className="img-container">
            <img src="https://media.istockphoto.com/id/1377343276/photo/pretty-young-afro-woman.jpg?b=1&s=170667a&w=0&k=20&c=Z-UXLUcC8MfiHr9OMzH79s50pXovz_WZPW-cbiobFnM=" />
          </div>
          <div className="img-container">
            <img src="https://media.istockphoto.com/id/1409084667/photo/brown-hair-beauty-woman-brunette-model-with-shiny-straight-long-hairstyle-hair-care-spa-and.jpg?b=1&s=170667a&w=0&k=20&c=9Pwz2Uwz2WcgD_bfBBeLI6Eef0GS9aqRCrPyqR0j-G4=" />
          </div>
          <div className="img-container">
            <img src="https://media.istockphoto.com/id/1371802936/photo/beautiful-emotional-woman-with-perfect-make-up.jpg?b=1&s=170667a&w=0&k=20&c=Sdiq2RAY1MmqkzH_EEmGI1BzU7k-vKvN7zfep9CEUok=" />
          </div>
          <div className="img-container">
            <img src="https://media.istockphoto.com/id/1371802936/photo/beautiful-emotional-woman-with-perfect-make-up.jpg?b=1&s=170667a&w=0&k=20&c=Sdiq2RAY1MmqkzH_EEmGI1BzU7k-vKvN7zfep9CEUok=" />
          </div>
          <div className="img-container">
            <img src="https://media.istockphoto.com/id/1371802936/photo/beautiful-emotional-woman-with-perfect-make-up.jpg?b=1&s=170667a&w=0&k=20&c=Sdiq2RAY1MmqkzH_EEmGI1BzU7k-vKvN7zfep9CEUok=" />
          </div>
        </div>
        <Link to="/gallery">
          <button>VIEW MORE INSPIRATION</button>
        </Link>
      </div>
    </div>
  );
};
