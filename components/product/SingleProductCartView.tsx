"use client";
import React from "react";
import RatingReview from "../others/RatingReview";
import Link from "next/link";
import Image from "next/image";
import ProductOptions from "./ProductOptions";
import { Product } from "@/types";
import { calculateDiscount } from "@/lib/calculateDiscount";

const SingleProductCartView = ({product}: {product:Product}) => {
  
  const {
    category,
    discount,
    id,
    images,
    name,
    price,
    rating,
    reviews,
    stockItems,
  } = product;

  // Calculate discounted price
  const discountedPrice = calculateDiscount(price, discount);

  return (
    <Link
      href={`/shop/${id}`}
      className="relative border rounded-xl shadow-lg overflow-hidden group"
    >
      <div className={`w-full bg-gray-200 overflow-hidden`}>
        <div className="relative w-full h-[18rem] group-hover:scale-110 transition-all duration-300 rounded-md overflow-hidden">
          <Image className="object-contain" src={images[0]} alt={name} fill />
          {stockItems === 0 ? (
            <p className="py-1 px-4 text-sm font-bold rounded-sm bg-rose-500 text-white absolute top-2 right-2">
              out of stock
            </p>
          ) : (
            <p className="py-1 px-4 text-sm font-bold rounded-sm bg-rose-500 text-white absolute top-2 right-2">
              {product.discount}% off
            </p>
          )}
        </div>
      </div>
      <div className="hidden group-hover:block slideCartOptions absolute top-16 right-3">
        <ProductOptions product={product} />
      </div>
      <div className="my-2 space-y-1 p-4">
        <Link
          href={`shop?category=${category}`}
          className="text-sm text-sky-500 font-light"
        >
          {" "}
          {category}
        </Link>
        <h3 className="text-xl font-fold capitalize hover:text-green-500">
          {name.slice(0, 45)}
          {name.length > 45 && "..."}
        </h3>
        <RatingReview rating={rating} review={reviews.length} />
        <div className="text-lg font-bold space-x-3 ">
          <span className="line-through text-muted-foreground">${price}</span>
          <span className="text-xl font-bold text-green-500">
            ${discountedPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SingleProductCartView;
