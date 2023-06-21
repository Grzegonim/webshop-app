import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from './Cart.module.scss';
import { addToCart } from '../../../redux/cartReducer';

const Cart = () => {
  const dispatch = useDispatch();
  const summary = useSelector((state) => state.cart);
  const localSummary = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    if(summary.length === 0 && localSummary !== null) {
      localSummary.map(product => dispatch(addToCart(product)));
    }
  }, []);

  return (
    <Link to={'/summary'}>
      <div className={styles.cart}>
        <FontAwesomeIcon icon={faCartShopping} />
        <div className={styles.counter}>{summary.length}</div>
      </div>
    </Link>
  )
}

export default Cart;