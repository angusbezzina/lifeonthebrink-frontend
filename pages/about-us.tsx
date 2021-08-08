import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

import Page from 'components/Page';
import Hero from 'components/Hero';

import { hosts } from 'lib/constants';

import ContainerStyles from "styles/ContainerStyles";
import CardStyles from "styles/CardStyles";

export default function Home() {
  return (
    <Page>
      <Hero title="About Us" backgroundImage="/alternate-image.png" />
      
      <main className="main">
        <ContainerStyles align="center">
          {hosts.map((host, index) => {
            const { name, bio, image, social } = host;
            const { linkedin, email, website } = social;
            return (
              <CardStyles key={index} flex>
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className="cardPhoto"
                />
                <div className="cardContent">
                  <h2>{name}</h2>
                  <div>{bio}</div>
                  <div className="cardSocialLinks">
                    {linkedin && (
                      <a
                        href={linkedin}
                        title="twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cardSocialLink"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    )}
                    {email && (
                      <a href={`mailto:${email}`} className="cardSocialLink">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    )}
                    {website && (
                      <a
                        href={website}
                        title={`${name}'s website`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cardSocialLink"
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                      </a>
                    )}
                  </div>
                </div>
              </CardStyles>
            );
          })}
        </ContainerStyles>
      </main>
    </Page>
  );
}
