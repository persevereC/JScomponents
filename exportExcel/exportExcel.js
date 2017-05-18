var exportExcel = {    array: [],
    getData: function(className) {
		var elements = document.querySelectorAll(className);
		var arr = Array.from(elements), len = arr.length;
		for(var i= 0; i < len; i++){
			this.array.push(arr[i].innerText)
		}
        this.setData();		
	},
    setData: function(){
	    //var table = document.querySelector('#tableExcel');
		var table = document.createElement('table');
		table.id = 'tableExcel';
		table.border = 1;
		table.width = '100%';
		table.innerHTML = '<tr><td colspan="5" align="center">html 表格导出道Excel</td></tr><tr><td>列标题1</td><td>列标题2</td><td>类标题3</td></tr>';
		var len = this.array.length;
		for(var i= 0; i < len; i++){
			table.innerHTML += '<tr><td>'+ this.array[i] +'</td><td>'+ this.array[i] +'</td></tr>'
		}
        this.tableToExcel(table);		
	},
	tableToExcel: (function() {
		var uri = 'data:application/vnd.ms-excel;base64,',  
				template = '<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>',  
				base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) },  
				format = function(s, c) {  
					return s.replace(/{(\w+)}/g,  
							function(m, p) { return c[p]; }) }  
		return function(table, name) {  
			//table = document.getElementById(table)
              console.log(table) 
			var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}  
			window.location.href = uri + base64(format(template, ctx))  
		}  
	})(),
	init: function(className){
	    this.getData(className);
	}
}