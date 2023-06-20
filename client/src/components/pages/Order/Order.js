import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Form, Modal } from "react-bootstrap";
import styles from './Order.module.scss';
import { useState } from "react";
import { sendOrder } from "../../../redux/ordersReducer";
import Button from "../../features/Button/Button";
import { Link } from "react-router-dom";

const Order = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const request = useSelector((state) => state.request);
  const totalCartPrice = cart.reduce((total, item) => {
    return total += item.totalPrice;
  }, 0)
  const [name, setName] = useState(user.name || '');
  const [address, setAddress] = useState(user.address || '');
  const [email, setEmail] = useState(user.email || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [description, setDescription] = useState('');
  const [delivery, setDelivery] = useState('');
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const orderPrice = parseFloat((totalCartPrice + deliveryPrice).toFixed(2));

  const handleDelivery = delivery => {
    if (delivery === "kurier") {
      setDelivery("kurier");
      setDeliveryPrice(15.99)
    } else if (delivery === "paczkomat") {
      setDelivery("paczkomat");
      setDeliveryPrice(9.99);
    } else if (delivery === "pobranie") {
      setDelivery("pobranie");
      setDeliveryPrice(19.99);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (delivery === '') return setShow(true);

    const order = {
      name,
      address, 
      email,
      phone, 
      description,
      delivery, 
      orderPrice,
      cart
    }
    dispatch(sendOrder(order))
    setShowOrderModal(true);
  }

  return (
    <>
      <Row className={styles.formContainer + " mb-2"}>
        <Col xl={8}>
          <h1>Dane zamówienia</h1>
          <Form onSubmit={(e) => handleSubmit(e)}>

            <Form.Group controlId="formName" className={styles.formGroup + " d-flex"}>
              <Form.Control required type="text" placeholder="Imię i nazwisko" onChange={e => setName(e.target.value)} defaultValue={name}></Form.Control>
            </Form.Group>

            <Form.Group controlId="formAdress" className={styles.adress + " d-flex mb-1"}> 
              <Form.Control required type="text" placeholder="Adres" onChange={e => setAddress(e.target.value)} defaultValue={address}></Form.Control>
            </Form.Group>

            <Form.Group controlId="formPhoneEmail" className={styles.formGroup + " d-flex"}>
              <Form.Control required type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} defaultValue={email}></Form.Control>
              <Form.Control required type="number" placeholder="Numer telefonu" onChange={e => setPhone(e.target.value)} defaultValue={phone}></Form.Control>
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Control as="textarea" rows={3} placeholder="Uwagi do zamówienia" onChange={e => setDescription(e.target.value)} defaultValue={description}>
              </Form.Control>
            </Form.Group>

            {totalCartPrice >= 100 ? <h3>Dostawa gratis!</h3> : 
              <Form.Group controlId="formDelivery" className="mt-1 mb-2">
                <Form.Select required onChange={e => handleDelivery(e.target.value)}>
                  <option value="">Wybierz opcję dostawy</option>
                  <option value="kurier">Kurier</option>
                  <option value="paczkomat">Paczkomat</option>
                  <option value="pobranie">Pobranie</option>
                </Form.Select>
              </Form.Group>
            }
            <Button type="submit" variant={'success'} className={"mt-2"}>
              Zamów
            </Button>
          </Form>
        </Col>
        <Col xl={4}>
          <div>
            <h2>Podsumowanie:</h2>
          </div>
          <div className="d-flex justify-content-between">
            <p>Wartość koszyka:</p><span>{totalCartPrice} zł</span>
          </div>
          <div className="d-flex justify-content-between">
            <p>Koszt dostawy:</p><span>{deliveryPrice} zł</span>
          </div>
          <div className="d-flex justify-content-between">
            <p><b>Całkowita wartość zamówienia:</b></p><span><b>{orderPrice} zł</b></span>
          </div>
        </Col>
      </Row>

      <Modal show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Wybierz formę dostawy towaru</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do darmowej dostawy brakuje {100 - totalCartPrice} zł</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showOrderModal && request.status === 'success'} onHide={() => setShow(false)} animation={false}>

      <Modal.Header>
        <Modal.Title>Wysłano!</Modal.Title>
      </Modal.Header>

      <Modal.Body>Zapraszamy na dalsze zakupy</Modal.Body>

      <Modal.Footer onClick={() => setShow(false)}>

        <Link to="/">
          <Button onClick={() => setShow(false)}>
            Do strony głownej
          </Button>
        </Link>

      </Modal.Footer>

      </Modal>

    </>
  )
}

export default Order;