import Header from "../../components/Header/Header";
import type { HeaderProps } from "../../types/components";

function Home({ isLogin }: HeaderProps) {
  return <Header isLogin={isLogin} />;
}

export default Home;
