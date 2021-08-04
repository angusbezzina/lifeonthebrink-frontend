import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import SocialLinkStyles from "styles/SocialLinkStyles";

const SocialLinks = () => {
  return (
    <SocialLinkStyles>
      <a
        href="https://www.instagram.com/lifeonthebrinkpodcast/"
        title="instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      {/* <a href="" title="twitter" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="" title="facebook" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="" title="youtube" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
      </a> */}
    </SocialLinkStyles>
  );
};

export default SocialLinks;
