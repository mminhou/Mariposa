import React from 'react';

interface ProductNameProps {
  name: string;
}

const ProductName = ({ name }: ProductNameProps) => {
  return (
    <h1 className="text-2xl font-semibold text-gray-900 mb-2 text-left md:mt-4">
      {/* {name} */}
      로미 딱핀
    </h1>
  );
};

export default ProductName;
