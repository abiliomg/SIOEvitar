// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

//Call Functions to populate pie-charts
pieChartClientes(2020);
pieChartProdutos(2020);


// Pie Chart Example
function pieChartProdutos(year){
  fetch("http://localhost:4000/line/topProdutos/" + year,{
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },       
    method: 'GET'
  }).then(
  response=>{
    if(response.ok){
      return response.json();
    }else{
      throw new Error("something went wrong");
    }
  }
  ).then(result=>{

   var labels = [];
   var quantity = [];
   var colors = ["#4e73df", "#1cc88a", "#36b9cc","#c15353","#cebc09"];

   var canvasDiv = document.getElementById('canvasProdutos');
   var oldCanvas = document.getElementById('myPieChartProdutos');

   oldCanvas.parentNode.removeChild(oldCanvas);

   var canv = document.createElement('canvas');
   canv.class = 'class="chart-pie pt-4"';
   canv.id = 'myPieChartProdutos';
   canvasDiv.appendChild(canv);

   var pie = document.getElementById("pieChartLabels");
   pie.innerHTML = "";
//console.log(document.getElementById("pieChartLabels"));

for(let i = 0; i < result.length; i++){
  labels.push(result[i].Description);
  quantity.push(result[i].Quantity);
  pie.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:' + colors[i] +'"></i>'+ result[i].Description +'</span>';

}


var myPieChart = new Chart(canv, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      data: quantity,
      backgroundColor: colors,
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
}).catch(error => alert('Error! ' + error.message));

}

function pieChartClientes(year) {
  fetch("http://localhost:4000/invoice/topClientesAno/"+ year,{
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },       
    method: 'GET'
  }).then(
  response=>{
    if(response.ok){
      return response.json();
    }else{
      throw new Error("something went wrong");
    }
  }
  ).then(result=>{

   var labels = [];
   var quantity = [];
   var colors = ["#588C7E", "#F2E394", "#F2AE72","#D96459","#8C4646"];

   var canvasDiv = document.getElementById('canvasClientes');
   var oldCanvas = document.getElementById('myPieChartClientes');

   oldCanvas.parentNode.removeChild(oldCanvas);

   var canv = document.createElement('canvas');
   canv.class = 'class="chart-pie pt-4"';
   canv.id = 'myPieChartClientes';
   canvasDiv.appendChild(canv);

   var pie = document.getElementById("pieChartLabelsClientes");
   pie.innerHTML = "";

   for(let i = 0; i < result.length; i++){
    labels.push(result[i].CustomerInfo[0].CompanyName);
    quantity.push(result[i].TotalDinheiro);
    pie.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:' + colors[i] +'"></i>'+ result[i].CustomerInfo[0].CompanyName +'</span>';
   
  }

  var ctx = document.getElementById("myPieChartClientes");
  var myPieChart = new Chart(canv, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: quantity,
        backgroundColor: colors,
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
  });

}).catch(error => alert('Error! ' + error.message));  
}


$(document).ready(function(){
  $('#selectYear').on('change', function() {

      pieChartClientes(this.value);
      pieChartProdutos(this.value);
      
  
 });
});