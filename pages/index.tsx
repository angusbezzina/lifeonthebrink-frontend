import moment from "moment";

import Meta from "components/Meta";
import Header from "components/Header";
import Footer from "components/Footer";
import ContactForm from "components/ContactForm";

import { getAllEpisodes, Episode } from "api/podcastRss";
import PageStyles from "styles/PageStyles";
import CardStyles from "styles/CardStyles";
import ContainerStyles from "styles/ContainerStyles";
import { PodcastList, PodcastListItem } from "styles/PodcastStyles";
import Hero from "components/Hero";

interface HomePageProps {
  allEpisodes?: [Episode];
  notFound?: boolean;
}

export default function Home({ allEpisodes }: HomePageProps) {
  return (
    <PageStyles>
      <Meta />
      <Header />

      <Hero
        title="Life: on the brink"
        isHome
        backgroundImage="/default-image.png"
      />

      <main className="main">
        <ContainerStyles align="center">
          <div className="content">
            Have you ever wondered what drives someone to track kiwis in the
            rain, chase lions up trees or jump on dugongs? Or with so many
            different species, why it matters if a few of them go the way of the
            Dodo? Well wonder no more! Join Gabe and Alex as they chat to
            different conservationists and ask them the big questions: Why does
            this species matter? What has been their best and worst day? And
            what about these creatures makes deadly risk, soggy clothes, and
            awkward bathroom situations worth it?
          </div>
          {allEpisodes && (
            <CardStyles>
              <h2 className="featureTitle">Latest shows</h2>
              <PodcastList>
                {allEpisodes.map((item: Episode, index: number) => {
                  const { title, pubDate, enclosure } = item;

                  return (
                    <PodcastListItem key={index}>
                      <h4>{title}</h4>
                      <time>{moment(pubDate).format("Do MMMM, YYYY")}</time>
                      <audio controls controlsList="nodownload">
                        <source src={enclosure.url} type="audio/mpeg" />
                        Your browser does not support the audio tag.
                      </audio>
                    </PodcastListItem>
                  );
                })}
              </PodcastList>
            </CardStyles>
          )}
          <ContactForm title="Get in touch" />
        </ContainerStyles>
      </main>
      <Footer />
    </PageStyles>
  );
}

export async function getStaticProps() {
  const allEpisodes = await getAllEpisodes();

  if (!allEpisodes) {
    return {
      notFound: true,
    };
  }

  return {
    props: { allEpisodes },
  };
}
