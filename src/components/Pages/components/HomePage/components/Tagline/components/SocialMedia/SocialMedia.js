import './SocialMedia.css';

const SocialMedia = ({
  iconName,
}) => (
  <i className={`fa fa-${iconName} homepage__socialMediaItem`}></i>
);

export default SocialMedia;
