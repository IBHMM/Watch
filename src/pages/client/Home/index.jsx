import Header from "../../../components/client/Header";
import NewArriwal from "../../../components/client/NewArriwal";
import Photos from "../../../components/client/Photos";
import Product from "../../../components/client/Product";

export function Home() {
  return (
    <>
      <Header />
      <NewArriwal/>
      <Photos/>
      <Product/>
    </>
  );
}
