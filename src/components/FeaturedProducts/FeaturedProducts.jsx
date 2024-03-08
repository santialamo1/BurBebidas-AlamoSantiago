import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FeaturedProducts.css'; 
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore();
        const bebidasCollection = collection(db, "bebidas");
        const bebidasSnapshot = await getDocs(bebidasCollection);
        const bebidasList = bebidasSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(bebidasList);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
  
    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="featured-products">
      <h2>Productos Destacados</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.imagen} alt={product.nombre} />
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;