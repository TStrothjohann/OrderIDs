var orderIDs = [];
var getOrderIDs = function(){
	for(var i = t4ftPlacement.length - 1; i >= 0; i--){
		orderIDs.push(t4ftPlacement[i].orderid)
	};
};
getOrderIDs();
dataLayer.push({"AdOrderIDs" : orderIDs})