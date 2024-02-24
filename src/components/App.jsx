import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import SideBar from "./SideBar";
import ItemContextProviders from "../contexts/ItemContextProviders";

function App() {
  return (
    <>
      test
      <BackgroundHeading></BackgroundHeading>
      <main>
        <ItemContextProviders>
          <Header></Header>
          <ItemList />
          <SideBar />
        </ItemContextProviders>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
