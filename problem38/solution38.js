// Calculate the average rate of profit

const calculateAverage = (profit, invst) => {
    const totalProfit = profit.reduce((acc, curr) => acc + curr , 0 );
     console.log("totalProfit",totalProfit);
    const totalIvestment = invst;  
    const averageProfit = totalProfit / totalIvestment ;
    console.log(averageProfit);
      const averageProfitRate = averageProfit * 100 ;
      console.log("averageProfitRate is",averageProfitRate.toFixed(2) + " %");
  };
  
  const investment = 100000;
  const profitsArray = [1000, 1500, 2500, 4500, 5000];
  calculateAverage(profitsArray, investment);