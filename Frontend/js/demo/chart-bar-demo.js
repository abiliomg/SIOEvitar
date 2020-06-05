// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


produtos();
anos();


function anos(){

  fetch("http://localhost:4000/header",{
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

    var anosSelect = document.getElementById("selectYear");

    anosSelect.innerHTML +=  '<option value="'+result[0].FiscalYear +'" selected>' + result[0].FiscalYear + '</option>';

    for(let i=1; i < result.length; i++){
      anosSelect.innerHTML +=  '<option value="'+result[i].FiscalYear +'">' + result[i].FiscalYear + '</option>';
    }
    vendasTrimestre($('#selectYear')[0].value);

  }).catch(error => alert('Error! ' + error.message));
}


function produtos(){

  fetch("http://localhost:4000/product",{
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

    var produtosDataList = document.getElementById("produtosDataList");

    for(let i=0; i < result.length; i++){
      produtosDataList.innerHTML +=  '<option value="'+result[i]._id.ProductCode +'">' + result[i]._id.ProductDescription + '</option>';
    }


  }).catch(error => alert('Error! ' + error.message));
}




//Initialize bar-charts
const getVendasAno=async function (year){
  return new Promise(async function(resolve,reject){
    fetch("http://localhost:4000/invoice/vendasMes/" + year,{
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

//Initialize bar-charts
const getComprasAno=async function (year){
  return new Promise(async function(resolve,reject){
    fetch("http://localhost:4000/transaction/comprasMes/" + year,{
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


const getVendasPrimeiroSemestre=async function (year,produto){
  return new Promise(async function(resolve,reject){
    fetch("http://localhost:4000/line/quantidadeProdutoFirst/" + year + "/" + produto,{
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
      if(result.length == 0){
        resolve(0);
      }else{
        resolve(result[0].QuantidadeVendida);
      }
    }).catch(error => alert('Error! ' + error.message));
  })
}


const getVendasSegundoSemestre=async function (year,produto){
  return new Promise(async function(resolve,reject){
    fetch("http://localhost:4000/line/quantidadeProdutoSecond/" + year + "/" + produto,{
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
     if(result.length == 0){
      resolve(0);
    }else{
      resolve(result[0].QuantidadeVendida);
    }
  }).catch(error => alert('Error! ' + error.message));
  })
}

const getVendasTerceiroSemestre=async function (year,produto){
  return new Promise(async function(resolve,reject){
    fetch("http://localhost:4000/line/quantidadeProdutoThird/" + year + "/" + produto,{
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
     if(result.length == 0){
      resolve(0);
    }else{
      resolve(result[0].QuantidadeVendida);
    }

  }).catch(error => alert('Error! ' + error.message));
  })
}


const getVendasQuartoSemestre=async function (year,produto){
  return new Promise(async function(resolve,reject){
    fetch("http://localhost:4000/line/quantidadeProdutoForth/" + year + "/" + produto,{
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

      if(result.length == 0){
        resolve(0);
      }else{
        resolve(result[0].QuantidadeVendida);
      }
      
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


const getVendasPrimeiroTrimestre=async function (year){
  return new Promise(async function(resolve,reject){
    fetch("http://localhost:4000/invoice/vendasFirst/" + year ,{
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
      if(result.length == 0){
        resolve(0);
      }else{
        resolve(result[0].Valor);
      }
    }).catch(error => alert('Error! ' + error.message));
  })
}

const getVendasSegundoTrimestre=async function (year){
  return new Promise(async function(resolve,reject){
    fetch("http://localhost:4000/invoice/vendasSecond/" + year ,{
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
      if(result.length == 0){
        resolve(0);
      }else{
        resolve(result[0].Valor);
      }
    }).catch(error => alert('Error! ' + error.message));
  })
}


const getVendasTerceiroTrimestre=async function (year){
  return new Promise(async function(resolve,reject){
    fetch("http://localhost:4000/invoice/vendasThird/" + year ,{
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
      if(result.length == 0){
        resolve(0);
      }else{
        resolve(result[0].Valor);
      }
    }).catch(error => alert('Error! ' + error.message));
  })
}


const getVendasQuartoTrimestre=async function (year){
  return new Promise(async function(resolve,reject){
    fetch("http://localhost:4000/invoice/vendasForth/" + year ,{
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
      if(result.length == 0){
        resolve(0);
      }else{
        resolve(result[0].Valor);
      }
    }).catch(error => alert('Error! ' + error.message));
  })
}


//console.log($('#selectYear option:selected').text());





async function vendasTrimestre(year){



  var yearBefore = year - 1;

  let vendasYearFirst = await getVendasPrimeiroTrimestre(year);
  let vendasYearSecond = await getVendasSegundoTrimestre(year);
  let vendasYearThird = await getVendasTerceiroTrimestre(year);
  let vendasYearForth = await getVendasQuartoTrimestre(year);

  console.log(vendasYearFirst);

  let vendasYearBeforeFirst = await getVendasPrimeiroTrimestre(yearBefore);
  let vendasYearBeforeSecond = await getVendasSegundoTrimestre(yearBefore);
  let vendasYearBeforeThird = await getVendasTerceiroTrimestre(yearBefore);
  let vendasYearBeforeForth = await getVendasQuartoTrimestre(yearBefore);

  var vendasYear = [];
  var vendasYearBefore = [];

  vendasYear.push(vendasYearFirst);
  vendasYear.push(vendasYearSecond);
  vendasYear.push(vendasYearThird);
  vendasYear.push(vendasYearForth);

  vendasYearBefore.push(vendasYearBeforeFirst);
  vendasYearBefore.push(vendasYearBeforeSecond);
  vendasYearBefore.push(vendasYearBeforeThird);
  vendasYearBefore.push(vendasYearBeforeForth);


  var canvasDiv = document.getElementById('canvasTrimestre');
  var oldCanvas = document.getElementById('myVendasTrimestraisChart');

  oldCanvas.parentNode.removeChild(oldCanvas);

  var canv = document.createElement('canvas');
  canv.id = 'myVendasTrimestraisChart';
  canvasDiv.appendChild(canv);

  var lab = document.getElementById('myAreaChartLabels') ;

  lab.innerHTML = "";

  lab.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:#4E73DF"></i>'+ year +'</span>';
  lab.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:#EE7334"></i>'+ yearBefore +'</span>';

  var myBarChart = new Chart(canv, {
    type: 'bar',
    data: {
      labels: ["Primeiro Semestre" ,"Segundo Semestre ", "Terceiro Semestre ", "Quarto Semestre "],
      datasets: [{
        label: "Valor: " ,
        backgroundColor: "#4E73DF",
        borderColor: "#4E73DF",
        data: vendasYear
      },
      {
        label: "Valor: ",
        backgroundColor: "#EE7334",
        borderColor: "#EE7334",
        data: vendasYearBefore
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
            min: 0,
            maxTicksLimit: 5,
            padding: 10,
          // Include an euro sign in the ticks
          callback: function(value, index, values) {
            return number_format(value);
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
          return datasetLabel + "€" + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});



}



async function vendasProdutoSemestre(year, produto){

  var yearBefore = year - 1;

  let vendasYearFirst = await getVendasPrimeiroSemestre(year,produto);
  let vendasYearSecond = await getVendasSegundoSemestre(year,produto);
  let vendasYearThird = await getVendasTerceiroSemestre(year,produto);
  let vendasYearForth = await getVendasQuartoSemestre(year,produto);


  let vendasYearBeforeFirst = await getVendasPrimeiroSemestre(year - 1,produto);
  let vendasYearBeforeSecond = await getVendasSegundoSemestre(year - 1,produto);
  let vendasYearBeforeThird = await getVendasTerceiroSemestre(year - 1,produto);
  let vendasYearBeforeForth = await getVendasQuartoSemestre(year - 1,produto);

  var vendasYear = [];
  var vendasYearBefore = [];

  vendasYear.push(vendasYearFirst);
  vendasYear.push(vendasYearSecond);
  vendasYear.push(vendasYearThird);
  vendasYear.push(vendasYearForth);

  vendasYearBefore.push(vendasYearBeforeFirst);
  vendasYearBefore.push(vendasYearBeforeSecond);
  vendasYearBefore.push(vendasYearBeforeThird);
  vendasYearBefore.push(vendasYearBeforeForth);


  var canvasDiv = document.getElementById('canvasTrimestre');
  var oldCanvas = document.getElementById('myVendasTrimestraisChart');

  oldCanvas.parentNode.removeChild(oldCanvas);

  var canv = document.createElement('canvas');
  canv.id = 'myVendasTrimestraisChart';
  canvasDiv.appendChild(canv);

  var lab = document.getElementById('myAreaChartLabels') ;

  lab.innerHTML = "";

  lab.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:#4E73DF"></i>'+ year +'</span>';
  lab.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:#EE7334"></i>'+ yearBefore +'</span>';

  var myBarChart = new Chart(canv, {
    type: 'bar',
    data: {
      labels: ["Primeiro Semestre" ,"Segundo Semestre ", "Terceiro Semestre ", "Quarto Semestre "],
      datasets: [{
        label: "Quantidade: " ,
        backgroundColor: "#4E73DF",
        borderColor: "#4E73DF",
        data: vendasYear
      },
      {
        label: "Quantidade: ",
        backgroundColor: "#EE7334",
        borderColor: "#EE7334",
        data: vendasYearBefore
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
            min: 0,
            maxTicksLimit: 5,
            padding: 10,
          // Include an euro sign in the ticks
          callback: function(value, index, values) {
            return number_format(value);
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
          return datasetLabel + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});

}


vendasBarChart(2020);

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

  /*for(let i = 0; i < 12 ;i++){

    totalDinheiro2019.push(vendas2019[i].TotalDinheiro);
    totalDinheiro2020.push(vendas2020[i].TotalDinheiro);
    
  }*/

  var totalDinheiro2020 = [0,0,0,0,0,0,0,0,0,0,0,0];
  var totalDinheiro2019 = [0,0,0,0,0,0,0,0,0,0,0,0];

  var cycle = Math.max(vendas2019.length,vendas2020.length);

  for(let i = 0; i < cycle ;i++){
    if (typeof vendas2019[i] === "undefined"){
    }else{
     totalDinheiro2019[(vendas2019[i]._id -1)] = vendas2019[i].TotalDinheiro;
   }
   if(typeof vendas2020[i] === "undefined"){   
   }else{
    totalDinheiro2020[(vendas2020[i]._id -1)] = vendas2020[i].TotalDinheiro;
  }
}


// Bar Chart Example
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
          min: 0,
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

comprasBarChart(2020);

async function comprasBarChart(year){

  let vendas2020 = await getComprasAno(year);
  let vendas2019 = await getComprasAno(year -1);
  var yearBefore = year - 1;

  var totalDinheiro2020 = [0,0,0,0,0,0,0,0,0,0,0,0];
  var totalDinheiro2019 = [0,0,0,0,0,0,0,0,0,0,0,0];
  var vendasTotais = [];
  var labels = ["Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];


  var canvasDiv = document.getElementById('myBarChartComprasDiv');
  var oldCanvas = document.getElementById('myBarChartCompras');

  oldCanvas.parentNode.removeChild(oldCanvas);

  var canv = document.createElement('canvas');
  canv.id = 'myBarChartCompras';
  canvasDiv.appendChild(canv);

  var lab = document.getElementById('myBarChartComprasLabels') ;

  lab.innerHTML = "";

  lab.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:#4E73DF"></i>'+ year +'</span>';
  lab.innerHTML += '<span class="mr-2"><i class="fa fa-circle" style="color:#EE7334"></i>'+ yearBefore +'</span>';

  var cycle = Math.max(vendas2019.length,vendas2020.length);

  for(let i = 0; i < cycle ;i++){


    if (typeof vendas2019[i] === "undefined"){

    }else{
     totalDinheiro2019[(vendas2019[i]._id -1)] = vendas2019[i].TotalDinheiro;
   }

   if(typeof vendas2020[i] === "undefined"){   

   }else{
    totalDinheiro2020[(vendas2020[i]._id -1)] = vendas2020[i].TotalDinheiro;
  }
}


// Bar Chart Example
var ctx = document.getElementById("myBarChartCompras");
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
          min: 0,
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

$(document).on('change', 'input', function(){
  var options = $('#produtosDataList')[0].options;
  for (var i=0;i<options.length;i++){
   if (options[i].value == $(this).val()){
    vendasProdutoSemestre( $('#selectYear')[0].value,$(this).val()); 
          //console.log($('select[name=selectYear] option').filter(':selected').val());
          break;
        }
      }
    });



$(document).ready(function(){
  $('#selectYear').on('change', function() {

    vendasBarChart(this.value);
    
    comprasBarChart(this.value); 
    vendasTrimestre($('#selectYear')[0].value);
  });
});
