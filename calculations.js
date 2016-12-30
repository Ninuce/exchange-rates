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


  //
  // var selectedTargetRate = rates[targetCurrency];
  // console.log(selectedTargetRate);
  // valueDisplay.innerHTML = "rate from " + baseCurrency + " to " + targetCurrency + " is: " + selectedTargetRate;}


  // function getRates() {
  //   var baseCurrency = $("#fromCurrency option:selected").text();
  //   var targetCurrency = $( "#toCurrency option:selected" ).text();
  //   var targetCalc = "http://api.fixer.io/latest?symbols=" + targetCurrency;
  //
  //   console.log(baseCurrency + " default base (FROM), target is " + targetCurrency );
  //   var selectedRate = rates[targetCurrency];
  //   console.log(selectedRate);
  //   valueDisplay.innerHTML = "rate from " + baseCurrency + " to " + targetCurrency + " is: " + selectedRate;
  //   }
















  // $.getJSON(targetCalc, function(data){
  //   var resultObj = data.rates;
  //   console.log($.parseJSON(data.rates));
  // });



// display selected rates onscreen (before clicking calc btn)

// $("#fromCurrency").change(function() {
//   var selectedChoice = $( "#fromCurrency option:selected" ).text();
//   selectionFromDisplay.innerHTML = "FROM " + selectedChoice;
// });
//
// $("#toCurrency").change(function() {
//   var selectedChoice = $( "#toCurrency option:selected" ).text();
//   selectionToDisplay.innerHTML = "TO " + selectedChoice;
// });


// $("#select").change(function() {
//   var selectedChoice = $( "#select option:selected" ).text();
//   selectionDisplay.innerHTML = "selected choice is " + selectedChoice;
// });



  // if (baseCurrency = "EUR")???



    // var valueDisplay = document.getElementById("valueDisplay");
    // valueDisplay.innerHTML = "Exchange rate from " + baseCurrency + " to " + targetCurrency + " is " + data.rates.USD;
    // JSON.stringify(data.rates);
    // valueDisplay.innerHTML = JSON.stringify(JSON.parse(data.rates));


//
// getRates();










// function showSelected(){
  // $(":select").select(function() {
  //   selectionDisplay.innerHTML = "something got selected";
  //
  // });
  // var selection = $("#select").val();
  // selectionDisplay.innerHTML = (selection).toString;
  // console.log(selection);

  //
  // var selection = $("#select").val();
  // console.log($("#select").val());
// }
// showSelected();


      // JSON.stringify(data.rates);
      // valueDisplay.innerHTML = JSON.stringify(JSON.parse(data.rates));
  //   });
  // }













// ???[vēlāk ielikt selector funkcijas iekavās un #select aizstāt ar selector, indexā pierakstīt ka izsaucās tas selectors, kad uzspiež ?????]


// ---------------------------------
































// function dateConverter(dateToConvert) {
//   if (dateToConvert.toString().length < 2) {
//     dateToConvert="0" + dateToConvert;
//   }
//   return dateToConvert;
// }










//
// function displayDailyNamedays() {
//
//   var todayDate = getToday();
//   var dailyDisplay = document.getElementById("dailyDisplay");
//   dailyDisplay.innerHTML = dateConverter(todayDate.day) + "." + dateConverter(todayDate.month);
//
//   var dailyNameDays = nameDays[todayDate.month][todayDate.day];
//   var dailyName = "";
//   for (i = 0; i < dailyNameDays.length; i++) {
//     dailyName += dailyNameDays[i];
//     if (i < dailyNameDays.length - 1) {
//       dailyName += ", ";
//     }
//   }
//   console.log(dailyName);
//   document.getElementById("nameDisplay").innerHTML = dailyName;
// }
// displayDailyNamedays();


//

//
//
//
// function displayName() {
//   var searchDay = document.getElementById("daySelect").value;
//   var searchMonth = document.getElementById("monthSelect").value;
//
//   if(searchDay <= 31 && searchMonth <= 12) {
//     console.log("validation successful, chosen date " + searchDay + "." + searchMonth);
//
//     var nameArray = nameDays[searchMonth][searchDay];
//     console.log(nameArray);
//
//     var foundNames = "";
//     for (i = 0; i < nameArray.length; i++) {
//       foundNames += nameArray[i];
//       if (i < nameArray.length - 1) {
//         foundNames += ", ";
//       }
//     }
//     console.log(foundNames);
//     alert("Namedays on " + dateConverter(searchDay) + "." + dateConverter(searchMonth) + " are: " + foundNames);
//   } else {
//     alert("Something went wrong, please try again.\n\nExample: for 3rd of January, put 3 in 'day' and 1 in 'month'.");
//   }
// }
//
//
//
// function displayDate() {
//   var searchName = document.getElementById("nameInput").value;
//   var foundDate = false;
//
//   var allMonths = Object.keys(nameDays);
//   allMonths.forEach(function(monthKey) {
//     var allDaysInOneMonth = Object.keys(nameDays[monthKey]);
//     allDaysInOneMonth.forEach(function(dayKey){
//       var singleDayArray = nameDays[monthKey][dayKey];
//       singleDayArray.forEach(function(singleNameItem) {
//         if(searchName.toUpperCase() === singleNameItem.toUpperCase()) {
//           console.log("found, month: " + monthKey + " day: " + dayKey);
//           alert(searchName + "'s nameday is on " + dateConverter(dayKey) + "." + dateConverter(monthKey));
//           foundDate = true;
//         }
//       });
//     });
//   });
//
//   if (!foundDate) {
//       alert("Nothing found, please check the name and try again!");
//   }


//   for (i = 0; i < allMonths.length; i++) {
//   	var singleMonth = nameDays[allMonths[i]];
//
//   	var allDays = Object.keys(singleMonth);
//   	for (n = 0; n < allDays.length; n++) {
//   		var singleDay = singleMonth[allDays[n]];
//       console.log(n + ":::" + singleDay);
//
//       for(j=0; j <singleDay.length; j++) {
//         var searchName = document.getElementById("nameInput").value;
//         if(searchName === singleDay[j]) {
//           console.log("found, month: " + allMonths[i] + " day: " + allDays[n]);
//           alert(searchName + "'s nameday is on " + allDays[n] + "." + allMonths[i]);
//           return(singleDay[j]);
//         }
//       }
//     }
//   }
// }
