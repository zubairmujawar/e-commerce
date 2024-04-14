import Card from "./Card";

const MainContainer = ({ productData }) => {
  return (
    <div className="w-full flex flex-wrap p-2 mt-10 justify-center gap-3">
      {productData.map((data) => {
        return <Card data={data} key={data.id} />;
      })}
    </div>
  );
};

export default MainContainer;
