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

      <Hero title="Life: on the brink" backgroundImage="/default-image.png" />

      <main className="main">
        <ContainerStyles align="center">
          <div className="content">
            Bibendum dictumst faucibus imperdiet ullamcorper urna euismod
            eleifend potenti sapien dolor, cubilia tempus diam rhoncus nisi
            magnis orci posuere turpis, consequat ac massa sociosqu in curae nam
            dis donec. Nisl velit nascetur porta vulputate luctus imperdiet
            parturient dis morbi sit arcu, nam gravida donec turpis lacinia in
            libero ornare vehicula sagittis dignissim, potenti malesuada
            volutpat a accumsan blandit pellentesque egestas aliquam risus.
            Bibendum cubilia nullam donec fermentum justo laoreet nunc
            consectetur cum, suscipit risus eu class blandit maecenas auctor
            scelerisque nisl, nec a hendrerit gravida tellus taciti fringilla
            mus.
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
