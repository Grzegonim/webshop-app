import { Container, Row, Col, Form, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import styles from './Review.module.scss';
import { useState } from "react";
import Button from '../Button/Button';
import { addReview } from "../../../redux/reviewReducer";

const Review = ({ prodId }) => {
  const dispatch = useDispatch();
  const [reviewDescription, setReview] = useState('');
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const product = useSelector(state => state.products);
  const user = useSelector(state => state.user);
  const request = useSelector(state => state.request);

  const handleSubmit = async () => {
    const reviewData = {
      productId: prodId,
      review: reviewDescription,
      name: user.name,
      userId: user.id
    }
    dispatch(addReview(reviewData));
    setReview('');
    setShow(true);
  }

  return (
    <>
      <Row className={styles.container + ' mb-3 mt-3'}>
        {product[0].reviews.length === 0 
          ? 
          <Col className="col-12 text-center">
            <h2>Brak opinii o produkcie</h2>
          </Col>
          :
          <>
            <Col className="col-12">
              {product[0].reviews.map(review => product[0].reviews.indexOf(review) <= counter
              &&
              <Col key={review.id} className="col-12 d-flex mb-2">
                  <div className={styles.imgContainer}><FontAwesomeIcon icon={faUser} /></div>
                  <div className={styles.dataContainer}>
                    <div className={styles.name}>{review.name}</div>
                    <div className={styles.review}>{review.review}</div>
                  </div>
              </Col>)
              }
            </Col>
            
            <Col className="d-flex justify-content-center">
              { counter === 0 
                ?
                <Button onClick={() => setCounter(product[0].reviews.length)}>Pokaż więcej</Button>
                :
                <Button onClick={() => setCounter(0)}>Ukryj</Button>
              }
            </Col>
          </>
        }
        
      </Row>
      
      { (user.access_token !== null && user.name !== null) &&
        <Row>
        <Col className="col-12">
          <Form.Group onChange={e => setReview(e.target.value)} className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Napisz opinię o produkcie!</Form.Label>
            <Form.Control as="textarea" rows={3} value={reviewDescription} />
          </Form.Group>
        </Col>
        <Col className="col-12 d-flex justify-content-center">
          <Button onClick={() => handleSubmit()}>Dodaj opinię</Button>
        </Col>
        </Row>
      }

      <Modal show={request.status === 'error.review' && show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header>
          <Modal.Title>Dodałeś już jedną recenzję!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Zamknij okno dialogowe
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={request.status === 'success' && show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header>
          <Modal.Title>Dziękujemy za dodanie recenzji!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Zamknij okno dialogowe
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Review;