import SocialLinks from 'components/SocialLinks';
import FooterStyles from "styles/FooterStyles";
import ContainerStyles from "styles/ContainerStyles";

const Footer = () => {
  return (
    <FooterStyles>
      <ContainerStyles align="center">
        <h4>Follow us</h4>
        <SocialLinks />
      </ContainerStyles>
    </FooterStyles>
  );
};

export default Footer;
