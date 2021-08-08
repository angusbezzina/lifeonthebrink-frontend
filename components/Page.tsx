import Meta from "components/Meta";
import Header from "components/Header";
import Footer from "components/Footer";

import PageStyles from "styles/PageStyles";

type PageProps = {
  children: any;
};

export default function Page({ children }: PageProps) {
  return (
    <PageStyles>
      <Meta />
      <Header />
      {children}
      <Footer />
    </PageStyles>
  );
}
