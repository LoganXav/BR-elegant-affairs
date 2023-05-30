import { Link } from "react-router-dom"


export const WhoWeAre = () => {
  return (
    <div className="about--container">
      <div className="about">
        <div className="about--details">
          <h4>EVENT PLANNING AND DECOR</h4>
          <p>
            The #1 ranked, <Link className="link" to="/gallery">Helped over 50,000 couples</Link> around the country and we
            look forward to supporting you along your wedding planning journey.
          </p>
        </div>
        <div className="about--icons">
          <div className="about--icons-left">
            <div className="about--service">
              <i className="ri-file-list-line"></i>
              <div className="text">
                <h3 className="header">Checklist</h3>
                <p className="info">The ultimate wedding checklist to make sure everything gets done.</p>
              </div>
            </div>
            <div className="about--service">
              <i className="ri-file-list-line"></i>
              <div className="text">
                <h3 className="header">Guest List</h3>
                <p className="info">Seamlessly create and manage lists and RSVPs for all your events.</p>
              </div>
            </div>
            <div className="about--service">
              <i className="ri-file-list-line"></i>
              <div className="text">
                <h3 className="header">Budget</h3>
                <p className="info">Let us run the numbers and keep your spending on track.</p>
              </div>
            </div>
          </div>

          <div className="about--icons-right">
          <div className="about--service">
              <i className="ri-file-list-line"></i>
              <div className="text">
                <h3 className="header">Checklist</h3>
                <p className="info">The ultimate wedding checklist to make sure everything gets done.</p>
              </div>
            </div>
            <div className="about--service">
              <i className="ri-file-list-line"></i>
              <div className="text">
                <h3 className="header">Guest List</h3>
                <p className="info">Seamlessly create and manage lists and RSVPs for all your events.</p>
              </div>
            </div>
            <div className="about--service">
              <i className="ri-file-list-line"></i>
              <div className="text">
                <h3 className="header">Budget</h3>
                <p className="info">Let us run the numbers and keep your spending on track.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
