/*
This code was created by Timur the user of planetcalc.com online service.
The code is distributed under Creative Commons Attribution/Share-Alike License 3.0 (Unported) (by-sa).
Please provide a hyperlink to the original work http://planetcalc.com/2162/ from your web site and keep the same license agreement for any derived work. 
*/
(function(i) {
	
	var inputArray = i.split(" ");
	var rel_hum = inputArray[0];	
	var temp = inputArray[1];
/*    var tp = 1000;
    var et = 6.112 * Math.exp( ( 17.62 * temp ) / ( 243.12 + temp ) );
    var fp = 1.0016 + 3.15 * Math.pow( 10, - 6 ) * tp - 0.074 / tp;
    var ew = fp * et;
	var e = ( rel_hum / 100 ) * ew;
	var Rv = 461.5;
	var T = temp + 273.15;*/
	var up = 6.112 * Math.exp((17.67 * temp)/(243.5 + temp)) * rel_hum * 2.1674;
	var down = 273.15+temp;
	//return ( e * 100 / ( Rv * T ) );
	return (up / down);
})(input)
