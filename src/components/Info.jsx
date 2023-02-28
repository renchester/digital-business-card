import iconLinkedIn from '../assets/icon-linkedin.png';
import iconMail from '../assets/icon-mail.png';
import profile from '../assets/profile-img.png';

function Info() {
  return (
    <main className="info__container">
      <div className="info__img-wrapper">
        <img src={profile} className="info__img-profile" alt="" />
      </div>
      <section className="info__details">
        <h1 className="info__name">Avatar Aang</h1>
        <h5 className="info__job-position">Master of all Four Elements</h5>
        <a href="#" className="info__website">
          thelastairbender.fake.com
        </a>

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
