import { Row, Col, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import styles from './Register.module.scss';
import Button from '../../features/Button/Button';
import { registerUser, user } from '../../../redux/userReducer';

const Register = () => {
  const dispatch = useDispatch();
  const userData = useSelector(user);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const [passwordTest, setPasswordTest] = useState(false);

  useEffect(() => {
    setShow(!show)
  }, [userData]);

  function hasNumber(testingString) {
    return /\d/.test(testingString);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password.length <= 5 | hasNumber(password) === false) {
      setPasswordTest(true);
      return alert('Wprowadź właściwe hasło');
    };
    setPasswordTest(false);
    const userData = {
      name: name + ' ' + surname, 
      address,
      email,
      phone,
      password
    };
    dispatch(registerUser(userData));
  };

  return (
    <>
      <Row className='my-2 d-flex justify-content-center'>
        <Col xl={8} className='d-flex justify-content-center'>
          <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group controlId="formEmail">
              <Form.Control onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' required />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control onChange={e => setPassword(e.target.value)} type='Password' placeholder='Hasło' required />
              {
                !passwordTest ? 
                <Form.Text className="text-muted">
                  Hasło musi zawierać litery oraz cyfry, musi być dłuższe niż 5 znaków
                </Form.Text> : 
                <Form.Text className="text-muted">
                  Wprowdź prawidłowe hasło! Musi mieć conajmniej 5 znaków, litery i cyfry!
                </Form.Text>
              }
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Control onChange={e => setName(e.target.value)} type='text' placeholder='Imię'/>
            </Form.Group>
            <Form.Group controlId="formSurname">
              <Form.Control onChange={e => setSurname(e.target.value)} type='text' placeholder='Nazwisko' required />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Control onChange={e => setAddress(e.target.value)} type='text' placeholder='Adres' required />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Control onChange={e => setPhone(e.target.value)} type='number' placeholder='Telefon' required />
            </Form.Group>
            <Button>Zarejestruj</Button>
          </Form>
        </Col>
      </Row>
      
      <Modal show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header>
          <Modal.Title>Rejestracja przebiegła pomyślnie!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Teraz możesz się zalogować</Modal.Body>
        <Modal.Footer>
        <Link className='mx-1' to={'/login'}>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Zaloguj się
          </Button>
        </Link>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Register;