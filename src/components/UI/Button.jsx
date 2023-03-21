import './button.css';

function Button({ className, children }) {
  const classes = className ? `btn ${className}` : 'btn';
  return <button className={classes}>{children}</button>;
}

export default Button;
