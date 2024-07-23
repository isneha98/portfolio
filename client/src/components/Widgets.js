import './css/Widgets.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { color } from '@mui/system';




const Widgets = ({ type }) => {
    let data;
    const amount = 100;
    const diff = 20;
  
    switch (type) {
      case "Users":
        data = {
          istitle: "Users",
          isMoney: false,
          link: "View All Users",
          icon: <PersonOutlinedIcon className='person-icon' style={{color:"crimcon", backgroundColor:"rgb(255,0,0,0.2)"}}/>,
        };
        break;
      case "Orders":
        data = {
          istitle: "Orders",
          isMoney: true,
          link: "View All Orders",
          icon: <ShoppingCartOutlinedIcon className='person-icon' style={{color:"goldenrod", backgroundColor:"rgb(218,165,32,0.2)"}}/>,
        };
        break;
      case "Earnings":
        data = {
          istitle: "Earnings",
          isMoney: true,
          link: "View All Earnings",
          icon: <PersonOutlinedIcon className='person-icon' style={{color:"green", backgroundColor:"rgb(0,128,0,0.2)"}}/>,
        };
        break;
      case "Balance":
        data = {
          istitle: "Balance",
          isMoney: true,
          link: "View All Balance",
          icon: <AccountBalanceOutlinedIcon className='person-icon' style={{color:"purple", backgroundColor:"rgb(0,128,0,0.2)"}}/>,
        };
        break;
      default:
        data = {}; // Provide a default empty object or handle the default case as per your requirement
        break;
    }
  
    return (
      <div className='widget'>
        <div className='left'>
          <span className='title'>{data.istitle}</span>
          <span className='counters'>{data.isMoney && "$"}{amount}</span>
          <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
          <div className='percentage positive'>
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          {data.icon}
        </div>
      </div>
    );
  };
  
export default Widgets;
  
