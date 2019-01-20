// HW_14_JavaScript_and DOM_Manipulation_wen_WASHSTL201809DATA3

// from data.js
var tableData = data;

// select table body
var tbody = d3.select("tbody");

// add data to table
tableData.forEach(function(sighting) {

  // clean-up comments
  sighting.comments = sighting.comments.replace(/&#44/g, ",")
  sighting.comments = sighting.comments.replace(/&#39/g, "'")
  sighting.comments = sighting.comments.replace(/&#33/g, "!")

  // add new row
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    // add new cell
    var cell = row.append("td");
    // populate cell
    cell.text(value);
  });
});

// select the submit button
var submit = d3.select("#filter-btn");

// click handling
submit.on("click", function() {

  // prevent page from refreshing
  d3.event.preventDefault();

  // select input element and get value
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#state").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");

  // select table body 
  var tbody = d3.select("tbody");

  // check for date input & filter
  if (inputDate.length > 0) {
    var filteredData = tableData.filter(sighting => sighting.datetime === inputDate)
    console.log(`date: ${inputDate}`)
  }
  else {
    filteredData = tableData
    console.log("no date input")
  }

  // check for city input & filter
  if (inputCity.length > 0) {
    filteredData = filteredData.filter(sighting => sighting.city === inputCity)
    console.log(`city: ${inputCity}`)
  }
  else {
    console.log("no city input")
  }

  // check for state input & filter
  if (inputState.length > 0) {
    filteredData = filteredData.filter(sighting => sighting.state === inputState)
    console.log(`state: ${inputState}`)
  }
  else {
    console.log("no state input")
  }

  // check for country input & filter
  if (inputCountry.length > 0) {
    filteredData = filteredData.filter(sighting => sighting.country === inputCountry)
    console.log(`country: ${inputCountry}`)
  }
  else {
    console.log("no country input")
  }

  // check for shape input & filter
  if (inputShape.length > 0) {
    filteredData = filteredData.filter(sighting => sighting.shape === inputShape)
    console.log(`shape: ${inputShape}`)
  }
  else {
    console.log("no shape input")
  }
  
  console.log(filteredData);

  // select ufo table
  var ufoTable = d3.select("#ufo-table");
  // remove old table body
  tbody.remove();

  // add new table body & select
  ufoTable.insert("tbody");
  var tbody = d3.select("tbody");

  // add filtered data to table body
  filteredData.forEach(function(sighting) {
    // add new row
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      // add new cell
      var cell = row.append("td");
      // populate cell
      cell.text(value);
    });
  });
});