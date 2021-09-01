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
      <a
        href="https://twitter.com/aLifeOnTheBrink"
        title="twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://www.facebook.com/lifeonthebrinkpodcast"
        title="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCF8L6kx2eIs46Z5OIGNArrQ"
        title="youtube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </SocialLinkStyles>
  );
};

export default SocialLinks;
