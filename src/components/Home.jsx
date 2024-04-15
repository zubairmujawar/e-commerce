import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useEffect, useState } from "react";

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
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
    <div className="flex">
      <SideBar />
      <MainContainer productData={productData} />
    </div>
  );
};

export default Home;
