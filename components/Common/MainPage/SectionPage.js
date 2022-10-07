import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { topAirAction } from "../../../store/anime/animeaction";

const SectionPage = () => {
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
  ];

  useEffect(() => {
    dispatch(topAirAction());
  }, []);
  return (
    <>
      <div className="bg-white mt-[30px]  border-yellow-90 border-4 ">
        <div className="mx-auto max-w-2xl    lg:max-w-7xl 	 ">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-400	 pt-[10px] pl-[13px] pb-[10px] bg-yellow-700">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1  ml-[65px] gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-5">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-[70%] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full xl:h-full xl:w-full 2xl:h-full 2xl:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between w-[70%]">
                  <div>
                    <h3 className="text-sm text-gray-700 ">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          <div class="flex justify-end	 mr-[10px]">
            <div class="flex-none w-34 h-14 cursor-pointer	text-cyan-500	font-semibold	hover:text-amber-600">View More</div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionPage;
