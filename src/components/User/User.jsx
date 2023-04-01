import './user.css';

// Profile images for the profiles
// import femaleProfile from '../../assets/users/female-icon.svg';
import maleProfile from '../../assets/users/male-icon.svg';

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
          <img className="user-img" src={maleProfile} alt="" />
        </>
      ),

      //*********************** Do we really need a greeting, at the moment it wouldn't change dynamically except if you were to write good morning, good evening based on local time.
      greeting: <p className="user-greeting">Welcome back</p>,
      //*********************** When we dynamically change the name do you want to create a login component where the displayed name changes based on the data the user gave us?
      /* inputs needed:
      Gender: Male, Female (for the image above) let's just have 2 options.
      Name (No numbers allowed)
      Email (validate email)
      Password (Maybe some restrictions? At least one capital? at least 1 number, at least 1 character #,! etc.)
      Repeat Password (a small challange to make sure the two passwords are identical)
       */
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
