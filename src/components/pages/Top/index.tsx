import MiddleSizeCard from "src/components/atoms/MiddleSizeCard";
import ResizeLayout from "src/components/molecules";

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

const Top = () => {
  return (
    <ResizeLayout>
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
  );
};

export default Top;
