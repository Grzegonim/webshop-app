import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faCubesStacked, faJarWheat, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

import styles from './Products.module.scss';

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <Row className="mt-3 mb-3">
        <Col className="col-6 col-lg-3 mb-2" onClick={() => navigate('/category/maka')}>
          <div className={styles.products + ' d-flex justify-content-center align-items-center flex-column'}>
            <FontAwesomeIcon icon={faJarWheat} />
            <h3>mąki</h3>
          </div>
        </Col>
        <Col className="col-6 col-lg-3 mb-2" onClick={() => navigate('/category/herbata')}>
          <div className={styles.products + ' d-flex justify-content-center align-items-center flex-column'}>
          <FontAwesomeIcon icon={faMugHot} />
            <h3>herbaty</h3>
          </div>
        </Col>
        <Col className="col-6 col-lg-3 mb-2" onClick={() => navigate('/category/cukry')}>
          <div className={styles.products + ' d-flex justify-content-center align-items-center flex-column'}>
            <FontAwesomeIcon icon={faCubesStacked} />
            <h3>cukry</h3>
          </div>
        </Col>
        <Col className="col-6 col-lg-3 mb-2" onClick={() => navigate('/category/mleko-roslinne')}>
          <div className={styles.products + ' d-flex justify-content-center align-items-center flex-column'}>
            <FontAwesomeIcon icon={faLeaf} />
            <h3>mleka roślinne</h3>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Products;