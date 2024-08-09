import { Choise } from "../../../components/client/Choises/Choise";
import Header from "../../../components/client/Header";
import NewArriwal from "../../../components/client/NewArriwal";
import Photos from "../../../components/client/Photos";
import Product from "../../../components/client/Product";
import { Video } from "../../../components/client/Video/Video";

export function Home() {
  return (
    <>
      <Header />
      <NewArriwal/>
      <Photos/>
      <Product/>
      <Video />
      <Choise />
    </>
  );
}
