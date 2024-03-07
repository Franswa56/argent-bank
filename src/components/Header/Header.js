import logo from "../../designs/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/Actions//AuthActions'
import { useNavigate } from "react-router-dom";
import "./Header.css"

function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const userName = useSelector((state) => state.user.userName);

  console.log(userName)

  const handleLogout = (e) => {

    dispatch(logout())  
    localStorage.removeItem('token')

    navigate('/'); 
};




  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="header-nav">
        {isLoggedIn ? (
          <>
            <button className="main-nav-item" onClick={(e) => {
              e.preventDefault(); 
              handleLogout();
            }}>
              <i className="fa fa-user-circle"></i>
              Sign Out
            </button>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {userName}
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
        }
export default Header
