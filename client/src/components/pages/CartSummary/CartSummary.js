import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import CartProductMiniature from "../../features/CartProductMiniature/CartProductMiniature";
import styles from './CartSummary.module.scss'
import { useDispatch } from "react-redux";
import { clearCart, clearLocalStorage } from "../../../redux/cartReducer";
import { Link } from "react-router-dom";
import Button from "../../features/Button/Button";

const CartSummary = () => {
  const dispatch = useDispatch();
  const summary = useSelector((state) => state.cart);
  const localSummary = JSON.parse(localStorage.getItem("cart"));

  const totalCartPrice = summary.reduce((total, item) => {
    return total += item.totalPrice;
  }, 0)
  const handleClear = () => {
    dispatch(clearLocalStorage())
  }

  return (
   <>
      <Row className={styles.description + ' mb-2'}>
        <Col sm={5} className="d-flex justify-content-center">Product</Col>
        <Col sm={2} className="d-flex justify-content-center">Quantity</Col>
        <Col sm={2} className="d-flex justify-content-center">Price</Col>
        <Col sm={2} className="d-flex justify-content-center">Total</Col>
        <Col sm={1} className="d-flex justify-content-center"></Col>
      </Row>
      {summary.map(
          item => 
            <CartProductMiniature key={item.id} {...item} />
        )
      }
      <Row>
        <Col className={styles.subtotal + " d-flex justify-content-end"}>
          Subtotal: <span>{totalCartPrice}</span> zł
        </Col>
      </Row>
      <Row>
        <Col className="mt-2 mb-2">
          <Button onClick={() => handleClear()} variant={'warning'}>Wyczyść koszyk</Button>
        </Col>
        <Col className={styles.subtotal + " d-flex justify-content-end mt-2"}>
          <Link to={'/order'}><Button variant={'success'}>Złóż zamówienie</Button></Link>
        </Col>
      </Row>      

   </>
  )
}

export default CartSummary;