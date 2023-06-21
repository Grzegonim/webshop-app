import { Container, Form, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";

import styles from './Login.module.scss';
import { loginUser, user } from '../../../redux/userReducer';
import Button from '../../features/Button/Button';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const request = useSelector(state => state.request.status);
  const userData = useSelector(user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (request === 'login-error') return setShow(true);
    if (request === 'start') return setShow(false);
    if (request === 'success' && userData.access_token !== null && userData.name !== null) return navigate('/');
  }, [request]);

  const handleLogin = e => {
    e.preventDefault();
    dispatch(loginUser({ data: { email, password }, user: userData.access_token }));
  };

  return(
    <Container  className='my-2 d-flex justify-content-center'>

        <Form onSubmit={e => handleLogin(e)}>

        <Form.Group controlId='formEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Email' onChange={e => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId='formPassword' className='mb-2'>
          <Form.Label>Hasło</Form.Label>
          <Form.Control type='password' autoComplete="off" placeholder='Hasło' onChange={e => setPassword(e.target.value)} required />
        </Form.Group>

        <Button>Zaloguj</Button>

      </Form>

      <Modal show={show} onHide={() => setShow(false)} animation={false}>

        <Modal.Header>
          <Modal.Title>Zalogowano!</Modal.Title>
        </Modal.Header>

        <Modal.Body>Zapraszamy na zakupy</Modal.Body>

        <Modal.Footer onClick={() => setShow(false)}>

          <Link to="/">
            <Button onClick={() => setShow(false)}>
              Do strony głownej
            </Button>
          </Link>

        </Modal.Footer>

      </Modal>

      <Modal show={show} onHide={() => setShow(false)} animation={false}>

      <Modal.Header>
        <Modal.Title>Niepoprawne dane logowania</Modal.Title>
      </Modal.Header>

      <Modal.Body>Spróbuj jeszcze raz</Modal.Body>

      <Modal.Footer onClick={() => setShow(false)}>

        
          <Button onClick={() => setShow(false)}>
            Zaloguj
          </Button>
        

      </Modal.Footer>

      </Modal>


    </Container>
  )
}

export default Login;