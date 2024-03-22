const Card_data = () => {
  return (
    <>
      <div className="w-full ">
        <div className="w-[300px] m-auto rounded-md border bg-white">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="h-[120px] w-full rounded-t-md object-cover"
          />
          <div className="p-2">
            <h1 className="inline-flex items-center text-lg font-semibold">
              About Macbook
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <div className="mt-2">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Macbook
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Apple
              </span>
            </div>
            <button
              type="button"
              className="mt-1 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 "
            >
              Read
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_data;
