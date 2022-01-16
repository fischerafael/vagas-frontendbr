import { PageHome } from "../src/pages/PageHome";
import { IJobRes } from "../src/data/interfaces";
import axios from "axios";
import { GetServerSideProps } from "next";

const index = ({ jobs }: { jobs: IJobRes[] }) => {
  return <PageHome jobs={jobs} />;
};

export default index;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const response = await axios.get(
    "https://api.github.com/repos/frontendbr/vagas/issues"
  );
  const data = response.data as IJobRes[];

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return { props: { jobs: data || [] } };
};
