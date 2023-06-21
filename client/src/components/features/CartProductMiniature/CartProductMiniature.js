import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from './CartProductMiniature.module.scss';
import { removeFromLocalStorage, changeQuantityLocalStorage } from "../../../redux/cartReducer";
import Button from '../Button/Button';

const CartProductMiniature = ({id, name, quantity, price, totalPrice}) => {
  const dispatch = useDispatch();
  const handleDecrease = (id, sign) => {
    dispatch(changeQuantityLocalStorage({id, sign}));
  };

  const handleDelete = (id) => {
    dispatch(removeFromLocalStorage(id));
  };
  
  return (
    <Row className={styles.miniatureContainer}>
      <Col sm={5} className={styles.name + " d-flex justify-content-center"}>{name}</Col>
      <Col sm={2} className={styles.quantity + " d-flex justify-content-center"}>
        <Button onClick={() => handleDecrease(id, 'decrease')}>-</Button>
        <span>{quantity}</span>
        <Button onClick={() => handleDecrease(id, 'increase')}>+</Button>
      </Col>
      <Col sm={2} className={styles.price + " d-flex justify-content-center"}>{price} zł</Col>
      <Col sm={2} className={styles.price + " d-flex justify-content-center"}>{totalPrice} zł</Col>
      <Col sm={1} className={styles.delete + " d-flex justify-content-center"}>
        <FontAwesomeIcon onClick={() => handleDelete(id)} icon={faTrash} />
      </Col>
    </Row>
  )
}

export default CartProductMiniature;