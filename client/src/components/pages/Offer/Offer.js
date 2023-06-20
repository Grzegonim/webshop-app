import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../../redux/productsRecuer"; 
import { Container, Row, Col, Spinner } from "react-bootstrap";
import styles from './Offer.module.scss';
import { addCartToLocalStorage } from "../../../redux/cartReducer";
import { loadReviews } from "../../../redux/reviewReducer";
import axios from "axios";
import { API_URL, IMGS_URL } from "../../../config";
import Review from "../../features/Review/Review";
import Button from "../../features/Button/Button";

const Offer = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const summary = useSelector((state) => state.cart);
  const reviews = useSelector(state => state.reviews);
  const offer = useSelector(state => state.products[0]);

  const handleCart = () => {
    dispatch(addCartToLocalStorage( { id: offer.id, price: offer.price, quantity, name: offer.name, totalPrice: quantity * offer.price }, summary ));
  }
  
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);

  useEffect(() => {
    fetchReviews();
    dispatch(fetchProductById(id));
  }, [reviews.length]);

  const fetchReviews = async () => {
    let res = await axios.get(`${API_URL}/reviews`)
    dispatch(loadReviews(res.data))
  };

  if(quantity < 1) return setQuantity(1)

  if(offer === undefined) return <Spinner />
  return (
    <>
      <Container className="d-flex mt-2 mb-2">
        <Row>
          <Col className={styles.imgContainer + ' col-lg-4 col-md-4'}>
            <img alt='product' src={IMGS_URL +   offer.img} />
          </Col>
          <Col className={styles.nameContainer + " col-lg-5 col-md-8"}>
            <h1>{offer.name}</h1>
            <span><b>Dostawa:</b> 1 dzień roboczy</span>
            <span><b>Opis: </b>{offer.description}</span>
          </Col>
          <Col className={styles.priceContainer + " col-lg-3 col-md-12"}>
            <h2>{offer.price},00 zł</h2>
            <p>*Cena detaliczna zawiera podatek VAT</p>
            <div className={styles.quantityContainer}>
            <Button onClick={() => setQuantity(quantity - 1)}>-</Button>
              <input type='number' min='1' onChange={e => setQuantity(parseInt(e.target.value))} value={quantity}></input>
            <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
            </div>
            <Button onClick={() => handleCart()}>Do koszyka</Button>
          </Col>
        </Row>
      </Container>
      <Review prodId={id} />
    </>
  )
}

export default Offer;