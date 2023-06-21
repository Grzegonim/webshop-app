import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import styles from './Header.module.scss';
import Cart from '../../features/Cart/Cart';
import { user, logoutUser } from '../../../redux/userReducer';
import Button from '../../features/Button/Button';
import { IMGS_URL } from '../../../config';

const Header = () => {
  const userData = useSelector(user);
  const navigate = useNavigate();
  const [searchPhrase, setSearchPhrase] = useState('');
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser(userData.access_token))
  };

  const handleSearch = e => {
    e.preventDefault();
    navigate(`/search/${searchPhrase}`);
    setSearchPhrase('');
  };

  return (
    <Container className={styles.header}>
      <Row className={styles.headerRow}>

      <Col className='col-6 col-sm-4 order-1 order-sm-1' ><Link to='/'><img className={styles.logo} src={IMGS_URL + 'logo.svg'} alt='logo' /></Link></Col>

      <Col className='col-12 col-sm-5 d-flex align-items-center order-3 order-sm-2'>
        <div className={styles.formContainer}>
          <form onSubmit={e => handleSearch(e)}>
            <input type='search' onChange={e => setSearchPhrase(e.target.value)} placeholder='Szukaj...' value={searchPhrase} id="search"></input>
          </form>
          <Button><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        </div>  
      </Col>

      <Col className={styles.iconContainer + ' col-6 col-sm-3 order-2 order-sm-3'}>
        <div className={styles.user}>
          <FontAwesomeIcon icon={faUser} />
          {
            userData.name === null 
            ?
            <>
            <Link className='mx-1' to={'/login'}>Login</Link>lub  
            <Link className='mx-1' to={'/register'}>Rejestracja</Link>
            </> 
            :
            <div className={styles.logout} onClick={() => handleLogout()}>Wyloguj</div>
          }
        </div>
        <Cart />
      </Col>

      </Row>
    </Container>
  )
}

export default Header;