import Card_data from "./Card_data";

const Filter_Crad_items = () => {
  return (
    <>
      <div id="filter_btn" className="w-full h-16">
        <div className=" flex justify-center items-center mt-5 space-x-2 bg-white max-w-[750px] shadow-lg m-auto rounded-lg border py-2  sm:space-x-10 lg:space-x-16">
          <button className="btn">Breakfast</button>
          <button className="btn">Launch</button>
          <button className="btn">Evening</button>
          <button className="btn">Dinner</button>
          <button className="btn">All</button>
        </div>
      </div>
      <div id="Card_items" className="">
        <Card_data />
      </div>
    </>
  );
};

export default Filter_Crad_items;
