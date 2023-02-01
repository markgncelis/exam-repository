import './Navbar.scss';
import { faBell, faCaretDown, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
    return (
        <>
        <nav>
          <div className='sprout-logo'>
            <a href="#"><img src='sprout-logo.PNG' alt='sprout logo' /></a>
          </div>
          <div className='nav-list'>
            <ul>
              <li><button>My Requests <FontAwesomeIcon className='icon' icon={faCaretDown} /></button></li>
              <li><button>My Team <FontAwesomeIcon className='icon' icon={faCaretDown} /></button></li>
              <li><button>Company <FontAwesomeIcon className='icon' icon={faCaretDown} /></button></li>
              <li><button>Administration Tools <FontAwesomeIcon className='icon' icon={faCaretDown} /></button></li>
              <li><button>Maintenance <FontAwesomeIcon className='icon' icon={faCaretDown} /></button></li>
              <li><input type='search' placeholder='employee search' /></li>
              <li><button><FontAwesomeIcon className='icon' icon={faSearch} /></button></li>
              <li><button><FontAwesomeIcon className='icon' icon={faBell} /></button></li>
              <li><button><FontAwesomeIcon className='w-4 h-4 object-cover border-2 border-gray-500 bg-gray-500 rounded-full' icon={faUser} /></button></li>
              {/* <li><button><img src='logo192.png' className='w-5 h-5 object-cover border-2 border-gray-500 bg-gray-500 rounded-full' alt='profile picture'/></button></li> */}
              <li><button className='admin-btn'>Admin <FontAwesomeIcon className='icon' icon={faCaretDown} /></button></li>
            </ul>

          </div>
        </nav>
        </>
    )

}

export default Navbar