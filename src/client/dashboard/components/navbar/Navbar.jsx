import "./navbar.scss"

import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';

function Navbar() {
  return (
    <div className='navbar'>
    <div className="wrapper">
        <div className="searchbar">
          <input type="text" placeholder="Search.."/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
          <PublicIcon className="icon"/>Language
          </div>
          <div className="item">
          <AccountCircleIcon className="icon" />User
          </div>
          <div className="item">
          <ListIcon className="icon"/>
          </div>
          <div className="item">
           <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userimage"
            />
          </div>
        </div>
    
    </div>
    
    </div>
  )
}

export default Navbar