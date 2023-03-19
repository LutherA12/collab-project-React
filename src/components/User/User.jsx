import './user.css';

function User() {
  return (
    <header className="user-info">
      <div className="user-info__profile-pic"></div>
      <div className="user-info__content">
        <p className="user-info__content--greeting">Welcome back,</p>
        <h1 className="user-info__content--username">John Doe</h1>
      </div>
    </header>
  );
}

export default User;
