import iconFB from '../assets/icon-facebook.png';
import iconTwt from '../assets/icon-twitter.png';
import iconGH from '../assets/icon-github.png';
import iconIG from '../assets/icon-instagram.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={iconFB} alt="Facebook Icon" />
      <img src={iconTwt} alt="Twitter Icon" />
      <img src={iconIG} alt="Instagram Icon" />
      <img src={iconGH} alt="Github Icon" />
    </footer>
  );
}

export default Footer;
