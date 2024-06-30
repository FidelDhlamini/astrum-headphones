import React from "react";
import ProductContent from "../sub/ProductContent";

const Product = () => {
    return(
        <div className="relative flex flex-col h-full w-full">
        <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1]  object-cover'
        >
            <source src='/speakerThump.mp4' type="video/mp4"/>

        </video>
        <ProductContent />
        </div>
    );
};

export default Product;