// components/main/main/Product.tsx

import React from "react";
import ProductContent from "../sub/ProductContent";
import Footer from "./Footer";
import BackgroundSwitcher from "../sub/BackgroundSwitcher";

const Product: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">


      <div className="flex-grow relative overflow-hidden">
        

        <ProductContent />
      </div>

      
    </div>
  );
};

export default Product;
