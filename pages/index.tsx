import { PageHome } from "../src/pages/PageHome";
import { IJobRes } from "../src/data/interfaces";
import axios from "axios";
import { GetStaticProps } from "next";

const index = ({ jobs }: { jobs: IJobRes[] }) => {
  return <PageHome jobs={jobs} />;
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    "https://api.github.com/repos/frontendbr/vagas/issues"
  );
  const data = res.data as IJobRes[];

  return { props: { jobs: data || [] }, revalidate: 60 };
};
