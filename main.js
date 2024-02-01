console.log("main.js");

var slope = document.getElementById("slope");
// console.log("slope = ", slope)
var y = document.getElementById("y");
var slopeValue = document.getElementById("slopeValue");
var yValue = document.getElementById("yValue");
slopeValue.innerHTML = slope.value; // Display the default slider value
yValue.innerHTML = y.value;
// Update the current slider value (each time you drag the slider handle)
slope.oninput = function() {
    // console.log(this.value)
    slopeValue.innerHTML = this.value;
    drawGraph();
}

y.oninput = function() {
  // console.log(this.value)
  yValue.innerHTML = this.value;
  drawGraph();
}
drawGraph()
function drawGraph() {
  const xValues = [];
  const yValues = [];
  generateData(`x * ${slope.value} + ${y.value}`, -5, 5, 0.5);
  
  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        pointRadius: 1,
        borderColor: "rgba(255,0,0,0.5)",
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: `y = x * ${slope.value} + ${y.value}`,
        fontSize: 16
      }
    }
  });
  
  function generateData(value, i1, i2, step = 1) {
    console.log("value = ", value)
    for (let x = i1; x <= i2; x += step) {
      if(eval(value) < 50) {
        yValues.push(eval(value));
        xValues.push(x);
      }
      
    }
  }
}
