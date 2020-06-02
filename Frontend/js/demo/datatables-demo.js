// Call the dataTables jQuery plugin
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
		$('#dataTableProdutos').DataTable({
			data: result,
			columns: [
			{ data: 'ProductType' },
			{ data: 'ProductCode' },
			{ data: 'ProductGroup' },
			{ data: 'ProductDescription'},
			{ data: 'ProductNumberCode'}
			]
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
		$('#dataTableFornecedores').DataTable({
			data: result,
			columns: [
			{ data: 'CompanyName' },
			{ data: 'Telephone' },
			{ data: 'Fax' },
			{ data: 'Email'},
			{ data: 'Website'}
			]
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
		$('#dataTableClientes').DataTable({
			data: result,
			columns: [
			{ data: 'CompanyName' },
			{ data: 'Telephone' },
			{ data: 'Fax' },
			{ data: 'Email'},
			{ data: 'Website'}
			]
		}
		);

	})
	.catch(error => alert('Error! ' + error.message));

	
	
});
