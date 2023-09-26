import  Chart  from "react-apexcharts";

const Statistics = () => {

const pieData = () => {
  const card = JSON.parse(localStorage.getItem('card'))
  const cardValue = card?.length || 0
  const valuePercentage = (cardValue / 12) * 100;
  const valuePercentageFixed = parseFloat(valuePercentage.toFixed(2))
  const array = [valuePercentageFixed, 100 - valuePercentageFixed]
  return array;
} 
  return (
    <div className="container-fluid mb-3 flex justify-center">
        <Chart 
        className="w-[600px] h-[400px]"
        type="pie"
        series={pieData()}            
        options={{
                labels:["Your Doantion", "Total Donation"],
                legend: {position: 'bottom'},
                colors:['#00C49F', '#FF444A'] 
              }}
        >
        </Chart>
    </div>
);
}


export default Statistics;