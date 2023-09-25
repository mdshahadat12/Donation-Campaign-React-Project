import  Chart  from "react-apexcharts";

const Statistics = () => {

const pieData = () => {
  const card = JSON.parse(localStorage.getItem('card'))
  const cardValue = card?.length || 0
  const arrd = (cardValue / 12) * 100;
  const arr = [arrd, 100 - arrd]
  return arr;
} 

  return (
    <div className="container-fluid mb-3">
        <h3 className="my-5 font-bold">Donation Pie Chart</h3>
        <Chart 
        type="pie"
        width={1200}
        height={400}
        series={pieData()}              
        options={{
              labels:["Your Doantion", "Total Donation"]                     
         }}
        >
        </Chart>
    </div>
);
}


export default Statistics;