import { useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar.jsx";
import SideBar from "./components/SideBar";
import ProductPage from "./components/ProductPage.jsx";
function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProductData(data.products);
        console.log(data.products);
        console.log(productData);
      } catch (error) {
        console.log("Error in Api");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBar />
        {/* <MainContainer productData={productData} /> */}
      </div>
      <ProductPage/>
    </>
  );
}

export default App;
