// ------- DISPLAY TODAY'S DATE ----------

function getToday() {
  var todaysFullDate = new Date();
  console.log("The full date is: " + todaysFullDate);
  var todaysShortDate = {
    "month": todaysFullDate.getUTCMonth() + 1,
    "day": todaysFullDate.getUTCDate()};
  console.log(todaysShortDate)
  return todaysShortDate;
}

function displayDate() {
  var todayDate = getToday();
  var dailyDisplay = document.getElementById("dailyDisplay");
  dailyDisplay.innerHTML = todayDate.day + "." + todayDate.month;
  // dailyDisplay.innerHTML = dateConverter(todayDate.day) + "." + dateConverter(todayDate.month);
}
displayDate();


// ------- DISPLAY AVAILABLE CURRENCIES IN THE DROPDOWN, LOAD RATES JSON----------

var rates;

function displayAvailableCurrencies(){

  var currencyUrl = "http://api.fixer.io/latest";

  $.getJSON(currencyUrl, function(data){
    $.each(data.rates, function(i) {
      var option = "<option>"+i+"</option>";
      $("#fromCurrency").append($(option));
      $("#toCurrency").append($(option));
      rates = data.rates;
    });
  });
}

displayAvailableCurrencies();


// ---------------- SHOW THE FINAL EXCHANGE RESULT --------------------


function getRates() {
  var baseCurrency = $("#fromCurrency option:selected").text();
  var targetCurrency = $( "#toCurrency option:selected" ).text();
  // var targetCalc = "http://api.fixer.io/latest?symbols=" + targetCurrency;

  if (baseCurrency === "EUR") {
    console.log(baseCurrency + " base (FROM), target is " + targetCurrency );
    var result = rates[targetCurrency];
    console.log(result);
    valueDisplay.innerHTML = "rate from " + baseCurrency + " to " + targetCurrency + " is: " + result;

} else {

  console.log(baseCurrency + " base (FROM), target is " + targetCurrency );

  var baseChangerUrl = "http://api.fixer.io/latest?base=" + baseCurrency;
  console.log(baseChangerUrl);
  $.getJSON(baseChangerUrl, function(data){

      var newBaseRates = data.rates;

      console.log("base changed to " + baseCurrency);
      console.log(data.rates);

      var newBaseResult = newBaseRates[targetCurrency];
      console.log(newBaseResult);

      valueDisplay.innerHTML = "rate from " + baseCurrency + " to " + targetCurrency + " is: " + newBaseResult;



// COMPARISON TO YESTERDAY

      // console.log(getToday());
      // console.log(getToday().day);
      // var yesterdayDay = (getToday().day) - 1;
      // console.log(yesterdayDay);
      // var currentMonth = (getToday().month);
      // console.log(currentMonth);
      //
      //
      // var currentYear = new Date().getFullYear();
      // console.log(currentYear);
      // var yesterdaysDate = currentYear + "-" + currentMonth + "-" + yesterdayDay;
      // console.log(yesterdaysDate);
      //
      // var yesterdaysDateRateUrl =  "http://api.fixer.io/" + yesterdaysDate;
      // console.log(yesterdaysDateRateUrl);
      //
      // $.getJSON(yesterdaysDateRateUrl, function(data){
      //     var yesterdayRates = data.rates;
      //     console.log(yesterdayRates);
      //     var yesterdayResult = yesterdayRates[targetCurrency];
      //     console.log("yesterday the rate was" + yesterdayResult);
      //
      //     })




      // $.getJSON("http://api.fixer.io/2000-01-03", function(data){
      //
      // }
      //
      // historyDisplay.innerHTML = "Yesterday this currency  rate was" + baseCurrency + " to " + targetCurrency + " is: " + newBaseResult;

      // var dailyDisplay = document.getElementById("dailyDisplay");
      // dailyDisplay.innerHTML = todayDate.day + "." + todayDate.month;

      // var yesterday =
      //
      // historyDisplay.innerHTML = ""
    });

  }
}
