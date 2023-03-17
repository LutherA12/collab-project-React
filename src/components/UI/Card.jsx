import './card.css';

//incase you add a className as a prop.
function Card({ className }) {
  const classes = className ? `card ${className}` : 'card';
  return <div className={classes}></div>;
}

export default Card;
