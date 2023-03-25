import './container.css';

function Container({ className, children }) {
  const classes = className ? `container ${className}` : 'container';
  // if(className) {
  //   `container ${className}`
  // } else {
  //   'container'
  // }
  return <div className={classes}>{children}</div>;
}

export default Container;
