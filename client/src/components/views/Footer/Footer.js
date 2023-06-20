import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className='d-flex'>
      <div>
        <span>Odwiedź nasze socjale!</span>
      </div>
      <div>
        <FontAwesomeIcon icon='fa-brands fa-twitter' />
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
      </div>      
    </footer>
  )
}

export default Footer;