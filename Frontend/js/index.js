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
  document.getElementById("FatAnual").innerHTML = result[0].TotalCredit + "€";
  var media = result[0].TotalCredit/12;
  document.getElementById("mediaMensal").innerHTML = media.toFixed(2) + "€";
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


