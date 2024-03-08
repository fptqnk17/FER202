import NavbarComponent from "../components/NavbarComponent";
import CarouselComponent from "../components/CarouselComponent";
import MenuComponent from "../components/MenuComponent";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <CarouselComponent />
      <MenuComponent />
      <h1 style={{ color: "red" }}>This is Home Page</h1>
    </>
  );
};

export default Home;