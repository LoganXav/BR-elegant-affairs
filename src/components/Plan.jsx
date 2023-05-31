import betty from "../assets/betty-crop.jpg";

export const Plan = () => {
  return (
    <div className="plan--container">
    
    
      <div className="plan">
        <img src={betty} />
        <div className="plan--details">
          <h2 className="header">B & R Elegant Affairs</h2>
          <p>We're to serve you, step-by-step.</p>
          <p>
            Many people create notes on a computer and print them or send them
            through the Internet. However, I believe the most effective notes
            are handwritten. A handwritten note is personal and rare. Due to
            this, it will be given more attention.
          </p>
          <p>
            A few weeks ago I was in Michigan for my dad’s funeral. While there
            I attended my mom’s church on Sunday and met her pastor for the
            second time.
          </p>
        </div>
      </div>
    </div>
  );
};
