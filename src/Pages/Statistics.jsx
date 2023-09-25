import  Chart  from "react-apexcharts";

const Statistics = () => {
  return (
    
    <div className="container-fluid mb-3">
        <h3 className="mt-3 font-bold">Donation Pie Chart</h3>
        <Chart 
        type="pie"
        width={1200}
        height={400}
        series={[30,70] }              
        options={{
              labels:["Your Doantion", "Total Donation"]                     
         }}
        >
        </Chart>
    </div>
);
}


export default Statistics;