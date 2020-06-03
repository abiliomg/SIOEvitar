// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example

fetch("http://localhost:4000/supplier",{
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

 console.log(result[0].CompanyName);
 for(let i = 0; i < result.length; i++){
  labels.push(result[i].CompanyName);
}


var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
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


fetch("http://localhost:4000/salesInvoice/InvoiceCreditYear",{
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

  console.log(result[0].TotalCredit);
  document.getElementById("FatAnual").innerHTML = result[0].TotalCredit + "€";
});


$("#charts2019").hide();
console.log("yooo");

$(document).ready(function(){
  $('#selectYear').on('change', function() {
    if ( this.value == '2020')
    {
      $("#charts2020").show();
      $("#charts2019").hide();

    }
    else
    {
      if (this.value == '2019') {
        $("#charts2019").show();
        $("#charts2020").hide();
      }
    }
  });
});

console.log("teste");

$("#tables2019").hide();

$(document).ready(function(){
  $('#selectYearTables').on('change', function() {
    if ( this.value == '2020')
    {
      $("#tables2020").show();
      $("#tables2019").hide();

    }
    else
    {
      if (this.value == '2019') {
        $("#tables2019").show();
        $("#tables2020").hide();
      }
    }
  });
});

