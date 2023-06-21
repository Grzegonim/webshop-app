import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import styles from './OfferMiniature.module.scss';
import { IMGS_URL } from '../../../config';
import Button from '../Button/Button';

const OfferMiniature = ({name, price, img, id}) => {
  return (   
    <Col key={id} className={styles.miniatureContainer + ' col-sm-6 col-lg-4 mt-1 mb-1'}>
      <div className={styles.imgContainer}>
        <img src={IMGS_URL + img} alt="offer"></img>
      </div>
      <span className={styles.price}>{price},00 zł</span>
      <span className={styles.title}>{name}</span>
      <div>
        <Link to={'/offer/' + id}><Button>Zobacz więcej</Button></Link>
      </div>
    </Col>
  )
}

export default OfferMiniature;