import iconLinkedIn from '../assets/icon-linkedin.png';
import iconMail from '../assets/icon-mail.png';

function Info() {
  return (
    <main className="info__container">
      <div className="info__img-wrapper">
        <img src="info__main-img" alt="" />
      </div>
      <section className="info__details">
        <h1 className="info__name">Laura Smith</h1>
        <h5 className="info__job-position">Frontend Developer</h5>
        <a href="#">Website.com</a>

        <div className="info__btn-container">
          <button type="button" className="btn-email">
            <img src={iconMail} alt="mail iconn" />
            <span className="btn-email__label">Email</span>
          </button>
          <button type="button" className="btn-linkedin">
            <img src={iconLinkedIn} alt="mail iconn" />
            <span className="btn-linkedin__label">LinkedIn</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Info;
