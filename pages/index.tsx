import { PageHome } from "../src/pages/PageHome";

const index = () => {
  return <PageHome />;
};

export default index;

export const getStaticProps: any = async () => {
  return { props: { repos: "reposWithCover" }, revalidate: 60 };
};
