import styles from './Button.module.scss';

const Button = ({ type, onClick, children, variant }) => {
  const warning = styles.warning;
  const success = styles.success;

  return(
    <button onClick={onClick} className={variant === 'warning' ? warning : variant === 'success' ? success : ''} type={type}>{children}</button>
  )
}

export default Button;