import Header from "../../components/Header/Header";
import TopBanner from "../../components/TopBanner/TopBanner";
import GraySection from "../../components/GraySection/GraySection";
import Main from "../../components/Main/Main";
import Category from "../../components/Category/Category";
import LimitedTime from "../../components/LimitedTime/LimitedTime";
import type { HeaderProps } from "../../types/components";

function Home({ isLogin }: HeaderProps) {
  return (
    <>
      <Header isLogin={isLogin} />
      <TopBanner />
      <GraySection>
        <Main />
        <Category />
        <LimitedTime />
      </GraySection>
    </>
  );
}

export default Home;
