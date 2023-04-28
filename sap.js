var sapnwrfc = require('sapnwrfc');

var conParams = {
	    ashost: '10.17.254.5',
	    sysid: '00',
	    sysnr: '00',
	    user: 'WH000104',
	    passwd: '87654321',
	    client: '880',
	    lang: 'E'
};

var con = new sapnwrfc.Connection;

con.Open(conParams, function(err) {
	    if (err) {
		            console.log(err);
		            return;
		     }
	    console.log('sapnwrfc: ' + con.GetVersion());

	    var params = {
		            I_VBELN:'180009902'
		         };

	    /*
	     var func = con.Lookup('Z_RFC_OPMS_INBOUND_DELIVERY');
	         func.Invoke(params, function(err, result) {
	             if (err) {
	                  console.log(err);
	                  return;
	             }
	   
	             console.log(result);
	         });
	    */
});

