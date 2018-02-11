
var euro = Number (prompt("Please, enter the amount of EURO "));
var usd = Number (prompt("Please, enter the amount of USD "));

var one_euro = 33.2324;
var one_usd = 27.1240;

var euro_to_uah;
var usd_to_uah;
var euro_to_usd;

if (euro <= 0 && usd <= 0) {
	console.log("Incorrect data");
} else {
	euro_to_uah = euro * one_euro;
	usd_to_uah = usd * one_usd;
	euro_to_usd = one_usd / one_euro;

	console.log( euro + " euros are equal " + euro_to_uah.toFixed(2) + " UAH, ", + 
				 usd + " dollars are equal " + usd_to_uah.toFixed(2) + " UAH, ", + 
				 " one euro is equal " +  euro_to_usd.toFixed(2) + " dollars." );
}


