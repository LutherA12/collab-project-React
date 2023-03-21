import './card.css';

//incase you add a className as a prop.
function Card({ className, children }) {
  const classes = className ? `card ${className}` : 'card';
  return <div className={classes}>{children}</div>;
}

export default Card;
