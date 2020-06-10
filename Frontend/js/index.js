//Initialize bar-charts
const getVendasAno=async function (year){
  return new Promise(async function(resolve,reject){
    fetch("http://localhost:4000/line/vendasMes/" + year,{
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
      resolve(result);
    }).catch(error => alert('Error! ' + error.message));
  })
}

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


fetch("http://localhost:4000/Line/queryDoAbilio/2020",{
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
   document.getElementById("FatAnual").innerHTML = result[0].QuantidadeVendida + "€";
  var media = result[0].QuantidadeVendida/12;
  document.getElementById("mediaMensal").innerHTML = media.toFixed(2) + "€";
  document.getElementById("vendasAnuais").innerHTML = result[0].soma.toFixed(2) + "€";
  document.getElementById("devAnuais").innerHTML = "-" + result[0].sub.toFixed(2) + "€";
});

fetch("http://localhost:4000/transaction/comprasAno",{
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

  document.getElementById("comprasAnuais").innerHTML = result[0].TotalDinheiro + "€";
  var media = result[0].TotalDinheiro/12;
  document.getElementById("mediaComprasMensais").innerHTML = media.toFixed(2) + "€";


});

async function vendasBarChart(year){

  let vendas2020 = await getVendasAno(year);
  let vendas2019 = await getVendasAno(year -1);
  var yearBefore = year - 1;

  var totalDinheiro2020 = [];
  var totalDinheiro2019 = [];
  var vendasTotais = [];
  var labels = ["Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  var canvasDiv = document.getElementById('myBarChartCanvasDiv');
  var oldCanvas = document.getElementById('myBarChart');

  oldCanvas.parentNode.removeChild(oldCanvas);

  var canv = document.createElement('canvas');
  canv.id = 'myBarChart';
  canvasDiv.appendChild(canv);

  var lab = document.getElementById('myBarChartLabels') ;

  lab.innerHTML = "";

  lab.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:#4E73DF"></i>'+ year +'</span>';
  lab.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:#EE7334"></i>'+ yearBefore +'</span>';

  console.log()

  /*for(let i = 0; i < 12 ;i++){

    totalDinheiro2019.push(vendas2019[i].TotalDinheiro);
    totalDinheiro2020.push(vendas2020[i].TotalDinheiro);
    
  }*/

  var totalDinheiro2020 = [0,0,0,0,0,0,0,0,0,0,0,0];
  var totalDinheiro2019 = [0,0,0,0,0,0,0,0,0,0,0,0];
  //var totalDinheiroTeste = [-1000,0,5532,-60000,24134,35555,53636,3333,96868,-6545,222,1000];

  var cycle = Math.max(vendas2019.length,vendas2020.length);

  for(let i = 0; i < cycle ;i++){
    if (typeof vendas2019[i] === "undefined"){
    }else{
     totalDinheiro2019[(vendas2019[i]._id -1)] = vendas2019[i].QuantidadeVendida;
   }
   if(typeof vendas2020[i] === "undefined"){   
   }else{
    totalDinheiro2020[(vendas2020[i]._id -1)] = vendas2020[i].QuantidadeVendida;
  }
}
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: year,
      backgroundColor: "#4E73DF",
      borderColor: "#4E73DF",
      data: totalDinheiro2020
    },
    {
      label: year - 1,
      backgroundColor: "#EE7334",
      borderColor: "#EE7334",
      data: totalDinheiro2019
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
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 12
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          //min: 0,
          maxTicksLimit: 5,
          padding: 10,
          // Include an euro sign in the ticks
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
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': €' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});
}

vendasBarChart(2020);


  $('#anexosDataList').on('change', function() {
    var btn = document.getElementById("btnAnexos");
    console.log($(this).val());
    btn.href = $(this).val();    

    });


  $('#anexosDataList').on('select', function() {
    var btn = document.getElementById("btnAnexos");
    console.log($(this).val());
    btn.href = $(this).val();    

    });


