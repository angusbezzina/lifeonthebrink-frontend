import Link from "next/link";
import { useRouter } from "next/router";

import Meta from "components/Meta";
import Header from "components/Header";
import Hero from "components/Hero";

import { getAllPostsWithSlug, getPost } from "lib/wordpress-api";

import PageStyles from "styles/PageStyles";
import ContainerStyles from "styles/ContainerStyles";

export default function Post({ postData }: any) {
  const router = useRouter();

  if (!router.isFallback && !postData?.slug) {
    return <p>We&aposre sorry, but it looks like something went wrong</p>;
  }

  const formatDate = (date: string) => {
    const newDate = new Date(date);

    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  };

  return (
    <PageStyles>
      <Meta />
      <Header />
      {router.isFallback ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Hero title={postData?.title} date={formatDate(postData?.date)} />

          <ContainerStyles flexDirection="column">
            <main className="main">
              <div
                className="post-content content"
                dangerouslySetInnerHTML={{ __html: postData?.content }}
              />
              <p>
                <Link href="/blog">
                  <a>Back to articles</a>
                </Link>
              </p>
            </main>
          </ContainerStyles>
        </>
      )}
    </PageStyles>
  );
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }: any) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const data = await getPost(params.slug);

  return {
    props: {
      postData: data.post,
    },
  };
}
