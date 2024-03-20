const Filter_Crad_items = () => {
  return (
    <>
      <div className="w-full h-20">
        <div
          id="filter_btn"
          className=" flex justify-center items-center mt-5 space-x-2 bg-white max-w-[750px] shadow-lg m-auto rounded-lg border py-2  sm:space-x-10 lg:space-x-16"
        >
          <button className="btn">Breakfast</button>
          <button className="btn">Launch</button>
          <button className="btn">Evening</button>
          <button className="btn">Dinner</button>
          <button className="btn">All</button>
        </div>
      </div>
      <div className="">
        <Card_data />
      </div>
    </>
  );
};

export default Filter_Crad_items;
