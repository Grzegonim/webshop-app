import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Spinner, Row, Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from "axios";

import styles from './Homepage.module.scss';
import { loadProducts, productsList } from "../../../redux/productsRecuer";
import OfferMiniature from "../../features/OfferMiniature/OfferMiniature";
import { API_URL, IMGS_URL } from "../../../config";
import Products from "../../features/Products/Products";

const Homepage = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsList);
  const [isLoading, setLoading] = useState(products);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    fetchProducts()
  }, [dispatch]);

  const updateSize = () => {
    setWindowSize(window.innerWidth);
  }

  window.addEventListener("resize", updateSize);

  const fetchProducts = async () => {
    setLoading(true)
    let res = await axios.get(`${API_URL}/products/promotions`)
    dispatch(loadProducts(res.data))
    setLoading(false)
  };  

  if (isLoading) return (
    <Spinner animation="border" role="status" className="block mx-auto">
      <span className="visually-hidden">Loading</span>
    </Spinner>
  )
  if (!isLoading) return (
    <>
      <Carousel className="d-none d-sm-block" fade>
        <Carousel.Item>
          <img 
            src={IMGS_URL + 'carousel-1.jpg'}
            className={styles.carouselImg + " d-block w-100"}
            alt=''
          />
        </Carousel.Item>
        <Carousel.Item>
          <Link to='/category/mleko-roslinne'>
            <img 
              src={IMGS_URL + 'carousel-2.jpg'}
              className={styles.carouselImg + " d-block w-100"}
              alt='mleka'
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to='/category/herbata'>
            <img 
              src={IMGS_URL + 'carousel-3.jpg'}
              className={styles.carouselImg + " d-block w-100"}
              alt='herbaty'
            />
          </Link>
        </Carousel.Item>
      </Carousel>
      <Row>
        {
          windowSize >= 600 ?
          products.map(product => products.indexOf(product) <= 5 && <OfferMiniature key={product.id} {...product} />) :
          <Carousel variant="dark">
            {
              products.map(product => products.indexOf(product) <= 5 &&
                <Carousel.Item className="mb-2"><OfferMiniature className="mb-2" key={product.id} {...product} /></Carousel.Item>)
            }
          </Carousel>
        }
      </Row>
      <Products />
    </>
  )
}

export default Homepage;