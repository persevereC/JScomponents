(function() {
    var datePicker = {};

    datePicker.getMonthData = function(y, m) {
        var arr = [];
        if(!y || !m){
        	var today = new Date();
        	y = today.getFullYear();
        	m = today.getMonth() + 1;
        }
        var firstDay = new Date(y, m-1, 1);
        var week = firstDay.getDay();
        if(week === 0){
        	week = 7;
        }
        var lastDayOfLastMonth = new Date(y, m-1, 0);
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        var preMonthDay = week - 1;
        var lastDay = new Date(y, m, 0);
        var lastDate = lastDay.getDate();
    } 

    window.datePicker = datePicker;
})();