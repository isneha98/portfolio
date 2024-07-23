import './css/Featured.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircularProgress from '@mui/material/CircularProgress';
import 'react-circular-progressbar/dist/styles.css';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
         <h1 className='title'>Total Revenue</h1>
         <MoreVertIcon fontSize='small'/>
      </div>
      <div class="bottom" >
        <div className="featuredChart">
          <CircularProgress variant="determinate" value={75}  text={"70%"} strokewidth={5}/>
        </div>
        <p className='title'>Total Sale Made Today</p>
        <p className='amount'>$420</p>
        <p className='desc'>Previous Transaction Proceed.Last Payment May Not Be Included</p>
        <div className='summary'>
           <div className='item'>
             <div className="itemTitle">Target</div>
             <div className="itemResult">
               <div className='resultAmount'>
                 $12.4k
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}
export default Featured ;
