import Link from "next/link";
import Image from "next/image";

import Header from "components/Header";
import Footer from "components/Footer";
import Meta from "components/Meta";

import Hero from "components/Hero";

import CardStyles from "styles/CardStyles"
import ContainerStyles from "styles/ContainerStyles";
import PageStyles from "styles/PageStyles";

// data
import { getAllPosts, getPage } from "lib/wordpress-api";

interface BlogPageProps {
  pageData?: any;
  allPosts?: any;
  notFound?: boolean;
}

const Blog = ({ pageData, allPosts: { edges } }: BlogPageProps) => {
  const { pageBy: page } = pageData;
  return (
    <PageStyles>
      <Meta />
      <Header />
      <Hero
        title={page?.title}
        backgroundImage={page?.featuredImage?.node?.sourceUrl}
      />
      <main className="main">
        <div className="wp-content" dangerouslySetInnerHTML={{__html: page?.content}} />
        <ContainerStyles>
          {edges.map(({ node }: any) => (
            <CardStyles key={node?.id}>
              <div className="listitem__thumbnail">
                {node?.featuredImage && (
                  <figure>
                    <Image
                      src={node?.featuredImage?.node?.sourceUrl}
                      alt={node?.title}
                    />
                  </figure>
                )}
              </div>
              <div className="listitem__content">
                <h2>{node?.title}</h2>
                <Link href={`/blog/${node?.slug}`}>
                  <a>Read more </a>
                </Link>
              </div>
            </CardStyles>
          ))}
        </ContainerStyles>
      </main>
      <Footer />
    </PageStyles>
  );
};

export default Blog;

export async function getStaticProps() {
  const pageData = await getPage("blog");
  const allPosts = await getAllPosts();

  if (!pageData && !allPosts) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: {
      pageData,
      allPosts,
    },
  };
}
