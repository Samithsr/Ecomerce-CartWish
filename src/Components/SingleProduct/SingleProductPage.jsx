import React from 'react'

import "./SingleProductPage.css"


const product = {
    id: 1,
    title: "Product Title",
    description: 
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corporis iste minus. Esse dolore sed natus sint voluptates culpa expedita id itaque, necessitatibus molestiae accusantium minima nemo deleniti tenetur quam ducimus consequatur exercitationem aspernatur? Vel dolorem culpa sed voluptatum quasi?",
               price: 9.99,
               images: [
                "https://via.placeholder.com/500x500?text=Product+Image+1",
                "https://via.placeholder.com/500x500?text=Product+Image+2",
                "https://via.placeholder.com/500x500?text=Product+Image+3",
                "https://via.placeholder.com/500x500?text=Product+Image+4",
               ],
               stock: 10,
            };


const SingleProductPage = () => {
  return (
   <section className='align_center single_product'>
    <div className='align_center'>
        <div className='single_product_thumbnail'>
            {
                product.images.map((image, index) => <img  src={image} alt={product.title} />)     
                 }  
        </div>
    </div>

        <div className='align_center single_product_details'></div>
    

   </section>
  )
}

export default SingleProductPage