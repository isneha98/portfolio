import './css/Chart.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';


const data = [
  { name: 'Jan', value: 1000 },
  { name: 'Feb', value: 2000 },
  { name: 'Mar', value: 1500 },
  { name: 'Apr', value: 1200 },
  { name: 'May', value: 1300 },
  { name: 'june', value: 1450 },
  // Add more data points as needed
];
const Charts = () => {
  return (
    <div className='chart'>
      
      <AreaChart width={700} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    </div>
  )
}


export default Charts;