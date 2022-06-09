import { ReactNode } from "react";
import { Head, HeadProps } from "./Head";

interface Props {
  children: ReactNode;
  meta: HeadProps;
  //   headerType?:
}

export const Layout = ({ children, meta }: Props) => {
  return (
    <>
      <Head {...meta} />
      {/* <Header headerType={}/> */}
      <>{children}</>
      {/* <Footer /> */}
    </>
  );
};
