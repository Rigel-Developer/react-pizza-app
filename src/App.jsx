import { Footer } from "./Footer";
import { Header } from "./Header";
import { Menu } from "./Menu";

export const App = () => {
  return (
    <div className="container">
      <Header />

      <Menu />

      <Footer />
    </div>
  );
};
