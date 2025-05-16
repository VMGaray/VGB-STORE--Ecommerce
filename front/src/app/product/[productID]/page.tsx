import React from 'react'

const DetailProduct = async ({params, } : {
  params: Promise<{ productID: string}>;
}) => {
   const productID = (await params).productID;
  
  return <div> Detalle del producto </div>
}

export default DetailProduct;

