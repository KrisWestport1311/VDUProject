import "./widgets.scss"

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import EuroIcon from '@mui/icons-material/Euro';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


/*according to the prop called type we are going to decide which title, link etc we are going to change here and are going to change the value of it using let. Using switch it will let us let look inside block 'type' for each case we want to examine and change */

const Widgets = ({type}) => { 

let data; 

const amount = 159
const diff = 456

  switch (type) {
      case "user":
          data = {
            title: "CANDIDATES",
            isMoney: false,
            link:"See all Users",
            icon: (<PersonIcon className="icon" style={{color:"#074993", backgroundColor:"#a6a6a6"}} />),
          };
        break;

      case "order":
          data = {
            title: "INSPECTIONS",
            isMoney: false,
            link:"View all Inspections",
            icon: (<ShoppingBasketIcon className="icon" style={{color:"#074993", backgroundColor:"#a6a6a6"}}/>),
          };
        break; 

      case "earnings":
          data = {
            title: "VALUE",
            isMoney: true,
            link:"View all Earnings",
            icon: (<EuroIcon className="icon" style={{color:"#074993", backgroundColor:"#a6a6a6"}}/>),
          };
        break; 

      case "balance":
          data = {
            title: "BALANCE",
            isMoney: true,
            link:"View total",
            icon: (<AccountBalanceWalletIcon className="icon" style={{color:"#074993", backgroundColor:"#a6a6a6"}} />),
          };
        break;       

      default:
        break;
}

return (
    <div className="widgets">
        <div className="left"> 
            <span className="title">{data.title}</span>          
            <span className="counter">{data.isMoney && "€"} {amount} </span>          
            <span className="link">{data.link}</span>
            </div>
        <div className="right">
            <div className="percentage positive">
            <ArrowUpwardIcon/>
            {diff}%
            </div>
            {data.icon}
        </div>   
    </div>
  )
}

export default Widgets