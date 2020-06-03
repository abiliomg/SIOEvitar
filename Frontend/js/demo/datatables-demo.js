// Call the dataTables jQuery plugin

$.fn.dataTable.ext.errMode = 'none';



$(document).ready(function() {

	fetch("http://localhost:4000/line/topProdutos/2020",{
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
		

		$('#dataTableProdutos2020').DataTable({
			data: result,
			columns: [
			{ data: '_id' },
			{ data: 'Description' },
			{ data: 'Quantity' },
			{ data: 'CreditAmount',render: $.fn.dataTable.render.number( '', '.', 2, '','€' )}
			],
			"order": [[ 2, "desc" ]],
			"searching": false,
			"paging": false,
			"info": false
		}
		);

	})
	.catch(error => alert('Error! ' + error.message));

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
		$('#dataTableFornecedores2020').DataTable({
			data: result,
			columns: [
			{ data: 'CompanyName' },
			{ data: 'Telephone' },
			{ data: 'Fax' },
			{ data: 'Email'},
			{ data: 'Website'}
			],
			"order": [[ 4, "desc" ]],
			"searching": false,
			"paging": false,
			"info": false
		}
		);

	})
	.catch(error => alert('Error! ' + error.message));

	fetch("http://localhost:4000/invoice/topClientesAno/2020",{
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
	
		$('#dataTableClientes2020').DataTable({
			data: result,
			costumerInfo : result.CustomerInfo,
			columns: [
			{ data: 'CustomerInfo.CompanyName' },
			{ data: 'CustomerInfo.BillingAddress.AddressDetail' },
			{ data: 'CustomerInfo.BillingAddress.City' },
			{ data: 'CustomerInfo.BillingAddress.PostalCode'},
			{ data: 'TotalDinheiro',render: $.fn.dataTable.render.number( '', '.', 2, '','€' )}
			],
			"order": [[ 4, "desc" ]],
			"searching": false,
			"paging": false,
			"info": false
		}
		);

	})
	.catch(error => alert('Error! ' + error.message));
});



$(document).ready(function() {

	fetch("http://localhost:4000/line/topProdutos/2019",{
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
		

		$('#dataTableProdutos2019').DataTable({
			data: result,
			columns: [
			{ data: '_id' },
			{ data: 'Description' },
			{ data: 'Quantity' },
			{ data: 'CreditAmount',render: $.fn.dataTable.render.number( '', '.', 2, '','€' )}
			],
			"order": [[ 2, "desc" ]],
			"searching": false,
			"paging": false,
			"info": false
		}
		);

	})
	.catch(error => alert('Error! ' + error.message));

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
		$('#dataTableFornecedores2019').DataTable({
			data: result,
			columns: [
			{ data: 'CompanyName' },
			{ data: 'Telephone' },
			{ data: 'Fax' },
			{ data: 'Email'},
			{ data: 'Website'}
			],
			"order": [[ 4, "desc" ]],
			"searching": false,
			"paging": false,
			"info": false
		}
		);

	})
	.catch(error => alert('Error! ' + error.message));

	fetch("http://localhost:4000/invoice/topClientesAno/2019",{
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
		console.log(result);


		$('#dataTableClientes2019').DataTable({
			data: result,
			costumerInfo : result.CustomerInfo,
			columns: [
			{ data: 'CustomerInfo.CompanyName' },
			{ data: 'CustomerInfo.BillingAddress.AddressDetail' },
			{ data: 'CustomerInfo.BillingAddress.City' },
			{ data: 'CustomerInfo.BillingAddress.PostalCode'},
			{ data: 'TotalDinheiro',render: $.fn.dataTable.render.number( '', '.', 2, '','€' )}
			],
			"order": [[ 4, "desc" ]],
			"searching": false,
			"paging": false,
			"info": false
		}
		);

	})
	.catch(error => alert('Error! ' + error.message));
});