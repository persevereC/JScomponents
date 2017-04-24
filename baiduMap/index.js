var mm = {
	    map: null,
		point: new BMap.Point(116.331398,39.897445),
		geolocation: new BMap.Geolocation(),
	    geoc: new BMap.Geocoder(),
		init: function(id){
		    this.map = new BMap.Map(id);
		    this.map.centerAndZoom(this.point,18);
            this.map.enableScrollWheelZoom(true);
			this.getLocation();
		},
		getLocation: function(){
		    var _this = this;
		    this.geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					var mk = new BMap.Marker(r.point);
					_this.map.addOverlay(mk);
					_this.map.panTo(r.point);
					alert('您的位置：'+r.point.lng+','+r.point.lat);
					x = r.point.lng;
					y = r.point.lat; 
					_this.transLocation(x, y);
				}
				else {
					alert('failed'+this.getStatus());
				}        
			},{enableHighAccuracy: true})  
		},
		transLocation: function(x, y){
		    var point = new BMap.Point(x, y);
			var pt = point;
			this.geoc.getLocation(pt, function(rs){
				console.log(rs)
				var addComp = rs.addressComponents;
				alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
			});
		}
	}