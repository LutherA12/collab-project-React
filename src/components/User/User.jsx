import "./user.css";

function User() {
  /*const lineBreak = (
    <>
      <br />
    </>
  );*/
  const userInfo = [
    {
      id: 1,
      img: (
        <>
          <img src="" alt="" />
        </>
      ),
      greeting: <p className="user-greeting">Welcome back</p>,
      name: <h1 className="user-name">John Doe</h1>,
    },
  ];

  return (
    <div className="user-parent-container">
      <div className="user-picture">{userInfo[0].img}</div>
      <div className="user-content-container">
        {userInfo[0].greeting}
        {userInfo[0].name}
      </div>
    </div>
  );
}

export default User;
