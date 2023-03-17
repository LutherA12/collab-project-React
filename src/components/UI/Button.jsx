import './button.css';

function Button({ className }) {
  const classes = className ? `btn ${className}` : 'btn';
  return <button className={classes}></button>;
}

export default Button;
