// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
  prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
  sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
  dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
  s = '',
  toFixedFix = function(n, prec) {
    var k = Math.pow(10, prec);
    return '' + Math.round(n * k) / k;
  };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}





vendasAreaChart(2020);

async function vendasAreaChart(year){

  let vendas2020 = await getVendasAno(year);
  let vendas2019 = await getVendasAno(year -1);
  var yearBefore = year - 1;

  var totalDinheiro2020 = [];
  var totalDinheiro2019 = [];
  var vendasTotais = [];
  var labels = ["Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  var canvasDiv = document.getElementById('myAreaChartDiv');
  var oldCanvas = document.getElementById('myAreaChart');

  oldCanvas.parentNode.removeChild(oldCanvas);

  var canv = document.createElement('canvas');
  canv.id = 'myAreaChart';
  canvasDiv.appendChild(canv);

  for(let i = 0; i < 12 ;i++){

    if(i != 0){

      if(typeof vendas2019[i] === 'undefined'){
        soma2019 = 0;
      }else{
        soma2019 = totalDinheiro2019[i-1] + vendas2019[i].TotalDinheiro;
      }

      if(typeof vendas2020[i] === 'undefined'){
        soma2020 = 0;
      }else{
        soma2020 = totalDinheiro2020[i-1] + vendas2020[i].TotalDinheiro;
      }

      totalDinheiro2019.push(soma2019);
      totalDinheiro2020.push(soma2020);
    }
    else{
      if(typeof vendas2019[i] !== 'undefined'){
        totalDinheiro2019.push(vendas2019[i].TotalDinheiro);
        console.log(totalDinheiro2019[i]);
      }else{
         totalDinheiro2019.push(0);
      }
      if(typeof vendas2020[i] !== 'undefined'){
        totalDinheiro2020.push(vendas2020[i].TotalDinheiro);
      }
    }
  }


  var lab = document.getElementById('myVendasTrimestraisChartLabels') ;

  lab.innerHTML = "";

  lab.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:#4E73DF"></i>'+ year +'</span>';
  lab.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:#EE7334"></i>'+ yearBefore +'</span>';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: "Vendas " + year ,
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.1)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: totalDinheiro2020 ,
    },
    {
      label: "vendas " + (year - 1),
      lineTension: 0.3,
      backgroundColor: "rgba(238, 145, 52, 0.1)",
      borderColor: "rgba(238, 145, 52, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(238, 145, 52, 1)",
      pointBorderColor: "rgba(238, 145, 52, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(238, 145, 52, 1)",
      pointHoverBorderColor: "rgba(238, 145, 52, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: totalDinheiro2019,
    }
    ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '€' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': €' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});
}

$(document).ready(function(){
  $('#selectYear').on('change', function() {

     vendasAreaChart(this.value);

  });
});
