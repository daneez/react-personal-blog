import SocialMedia from './components/SocialMedia/SocialMedia';
import './Tagline.css';

const Tagline = () => (
  <div className="homepage__title">
    <h2 className="homepage__name">Danni Zhao</h2>
    <div className="homepage__position">Frontend Developer</div>
    <div className="homepage__socialMedias">
      <SocialMedia iconName="twitter" />
      <SocialMedia iconName="facebook" />
      <SocialMedia iconName="instagram" />
    </div>
  </div>
);

export default Tagline;
