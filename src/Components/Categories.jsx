import React from "react";

const Categories = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-gray-100 py-10 rounded-3xl px-16">
          <h1 className="text-center tt text-5xl my-5">
            BROWSE BY dress STYLE
          </h1>
          <div className="grid grid-rows-2 gap-3">
            <div className="grid grid-cols-12 gap-4 h-24">
              <div className="col-span-5">
                <img
                  className="h-full w-full"
                  src="/public/imgs/categories/casual.png"
                  alt=""
                />
              </div>
              <div className="col-span-7">
                <img
                  className="h-full w-full"
                  src="/public/imgs/categories/formal.png"
                  alt=""
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7">
                <img
                  className="h-full w-full"
                  src="/public/imgs/categories/casual.png"
                  alt=""
                />
              </div>
              <div className="col-span-5">
                <img
                  className="h-full w-full"
                  src="/public/imgs/categories/formal.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
