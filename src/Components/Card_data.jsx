const Card_data = ({ data }) => {
  // console.log(data);
  return (
    <>
      <div className="px-2 space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 mt-3 lg:grid lg:grid-cols-3 max-w-[1400px] m-auto ">
        {data.map((elem, id) => {
          const { image, name, category, prices, description } = elem;
          return (
            <div key={id} className="w-full m-auto rounded-md border bg-white">
              <img
                src={image}
                alt="image"
                className="h-[200px] w-full rounded-t-md object-cover"
              />
              <div className="p-2">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {name}
                </h1>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
                <div className="mt-2">
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[13px] font-semibold text-gray-900">
                    {category}
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[13px] font-semibold text-gray-900">
                    ${prices}
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-1 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 "
                >
                  Order Now!
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card_data;
