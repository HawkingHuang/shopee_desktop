import Header from "../../components/Header/Header";
import TopBanner from "../../components/TopBanner/TopBanner";
import type { HeaderProps } from "../../types/components";

function Home({ isLogin }: HeaderProps) {
  return (
    <>
      <Header isLogin={isLogin} />
      <TopBanner />
    </>
  );
}

export default Home;
