import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookie from "universal-cookie";

import { Layout } from "../../templates/Layout";

const meta = {
  pageTitle: "Topページ",
};

const cookie = new Cookie();

export const InitialScreen = () => {
  const router = useRouter();

  useEffect(() => {
    if (cookie.get("access_token")) {
      router.push("pc/login");
    } else {
      router.push("pc/top");
    }
  }, [router]);

  return (
    <Layout meta={meta}>
      <></>
    </Layout>
  );
};
