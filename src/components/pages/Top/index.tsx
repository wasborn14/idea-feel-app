import MiddleSizeCard from "src/components/atoms/MiddleSizeCard";
import ResizeLayout from "src/components/molecules";
import SideNav from "src/components/organisms/SideNav";
import { Layout } from "src/components/templates/Layout";

const props = {
  title: "Mind",
  titles: [
    {
      title: "Test",
      titles: [
        {
          title: "test",
        },
        {
          title: "test",
        },
      ],
    },
  ],
};

const props2 = {
  title: "Mind",
  titles: [
    {
      title: "Test",
      titles: [
        {
          title: "test",
        },
        {
          title: "test",
        },
        {
          title: "test",
        },
        {
          title: "test",
        },
      ],
    },
    {
      title: "Test",
      titles: [
        {
          title: "test",
        },
        {
          title: "test",
        },
        {
          title: "test",
        },
        {
          title: "test",
        },
      ],
    },
  ],
};

export const Top = () => {
  return (
    <Layout meta={{ pageTitle: "Top" }}>
      <ResizeLayout sideNavContents={<SideNav />}>
        <MiddleSizeCard data={props} />
        <MiddleSizeCard data={props2} />
        <MiddleSizeCard data={props} />
        <MiddleSizeCard data={props} />
        <MiddleSizeCard data={props} />
        <MiddleSizeCard data={props} />
        <MiddleSizeCard data={props} />
        <MiddleSizeCard data={props} />
        <MiddleSizeCard data={props} />
        <MiddleSizeCard data={props} />
        <MiddleSizeCard data={props} />
        <MiddleSizeCard data={props} />
      </ResizeLayout>
    </Layout>
  );
};
