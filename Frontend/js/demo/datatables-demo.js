// Call the dataTables jQuery plugin
$.fn.dataTable.ext.errMode = 'none';

//Initialize tables

$(document).ready(function() {

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
		

		$('#dataTableProdutos2020').DataTable({
			data: result,
			columns: [
			{ data: '_id.ProductType' },
			{ data: '_id.ProductCode' },
			{ data: '_id.ProductGroup' },
			{ data: '_id.ProductDescription'},
			{ data: '_id.ProductNumberCode'}
			],
			"order": [[ 2, "desc" ]]
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
			{ data: 'BillingAddress.AddressDetail'},
			{ data: 'BillingAddress.City'},
			{ data: 'BillingAddress.PostalCode'},
			{ data: 'Website'}
			],
			"order": [[ 4, "desc" ]]
		}
		);

	})
	.catch(error => alert('Error! ' + error.message));




	fetch("http://localhost:4000/customer",{
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
			columns: [
			{ data: 'CompanyName' },
			{ data: 'Telephone' },
			{ data: 'Fax' },
			{ data: 'BillingAddress.AddressDetail'},
			{ data: 'BillingAddress.City'},
			{ data: 'BillingAddress.PostalCode'}
			],
			"order": [[ 4, "desc" ]]
		}
		);

	})
	.catch(error => alert('Error! ' + error.message));
});