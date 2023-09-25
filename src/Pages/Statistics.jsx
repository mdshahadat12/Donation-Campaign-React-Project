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
    <div className="container-fluid mb-3 flex justify-center">
        <Chart 
        className="w-[600px] h-[400px]"
        type="pie"
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