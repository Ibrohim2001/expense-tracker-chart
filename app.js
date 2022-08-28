const chartContainer = document.querySelector('.chart_container');
const bgColor = 'hsl(186, 34%, 60%)';
const currentClass = 'chart_indicator current';
const chartIndicator = 'chart_indicator';

fetch('./data.json').then(res => res.json()).then(data => getData(data));

function getData(data) {
  const currentDay = new Date().getDay();
  // console.log(currentDay) 
  console.log(new Date().getUTCDay())
  data.map(item => {
    const currentIndex = data.indexOf(item);
    console.log(currentIndex - 1)
    const height = 250 / 100 * Math.floor(item.amount);
    chartContainer.innerHTML += `
      <div class="chart_item">  
        <div class="chart_indicator" style="background-color: ${currentDay === currentIndex && bgColor}; height:${height}px;">         
          <p class="daily_spending">$<span class="daily_amount">${item.amount}</span></p>
        </div>
        <p class="weekday">${item.day}</p>
      </div>
    `;
  });
}
{/* <div class="${currentDay === currentIndex ? currentClass : chartIndicator}" style="height:${height}px;">  */}

