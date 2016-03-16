(function() {
  "use strict";

  /////////////////////////////////////////////
  // SVG 1 - Circles
  /////////////////////////////////////////////

  var svg1 = d3.select("#svg-1 svg");

  var data1 = [20, 30, 40, 50];

  var circle = svg1.selectAll("circle")
      .data(data1)
    .enter().append("circle")
      .attr("cy", 100)
      .attr("cx", function(d, i) {
        return i * 130 + 100;
      })
      .attr("r", function(d) {
        return d;
      });

  // Run SVG1
  $("#run-1").on("click", function() {

    var n;
    data1 = [];

    for (var i = 0; i < 4; i++) {
      n = Math.floor(Math.random() * (65 - 1) + 1);
      data1.push(n);
    }

    circle.data(data1);

    circle.attr("r", function(d) { return d; });

  });

  /////////////////////////////////////////////
  // SVG 2 - Bar Chart
  /////////////////////////////////////////////

  var chartWidth = 570;
  var barHeight = 34;

  var data2 = [4, 8, 15, 16, 23, 42];

  var generateBarChart = function(newData) {

    console.log("generateBarChart executing. Data being used: " + newData);

    // Set data scale based on the width of the chart
    var x = d3.scale.linear()
        .domain([0, d3.max(newData)])
        .range([0, chartWidth]);

    // Select svg2 and give it a width and height
    var svg2 = d3.select($("div#svg-2 svg")[0]);

    // Create group divs for the bars within the svg element with a data join and display them in rows using CSS transform
    var bar = svg2.selectAll("g")
        .data(newData)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    // Append rectangles and text to each group div within the SVG element
    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 2);

    bar.append("text")
        .attr("x", function(d) { return x(d) - 5; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });
  };

  generateBarChart(data2);

  // Run SVG2
  $("#run-2").on("click", function() {

    var rData = function() {
      var newData = [];
      var n;

      for (var i = 0; i < 6; i++) {
        n = Math.floor(Math.random() * (chartWidth - 1) + 1);
        newData.push(n);
      }

      console.log(newData);
      return newData;
    };

    generateBarChart(rData());

  });


  /////////////////////////////////////////////
  // SVG 3
  /////////////////////////////////////////////

  var data3 = [40, 60, 80, 100];

  var svg3 = d3.select("#svg-3 svg");

  svg3.selectAll("g")
      .data(data3)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(" + ((i * 130) + 50) + "," + (200 - d) / 2 + ")"; });

  svg3.selectAll("g")
    .append("rect")
      .attr("height", function(d) { return d; })
      .attr("width", function(d) { return d; });

  svg3.selectAll("g")
    .append("text")
      .attr("dy", function(d) { return (d / 2) + 5; })
      .attr("dx", function(d) { return (d / 2) - 7; })
      .text(function(d) { return d; });

  // Run SVG3
  $("#run-3").on("click", function() {

    // Generate new data
    var newData3 = [];
    var n3;
    for (var i = 0; i < 4; i++) {
      n3 = Math.floor(Math.random() * 100 - 1) + 10;
      newData3.push(n3);
    }
    console.log("newData3: " + newData3);

    // Render new data
    var newRect = svg3.selectAll("g")
        .data(newData3);

    newRect.attr("transform", function(d, i) { return "translate(" + ((i * 130) + 50) + "," + (200 - d) / 2 + ")"; });

    newRect.selectAll("rect")
        .attr("height", function(d) { return d; })
        .attr("width", function(d) { return d; });

    newRect.selectAll("text")
        .data(newData3)
        .attr("dy", function(d) { return (d / 2) + 5; })
        .attr("dx", function(d) { return (d / 2) - 7; })
        .text(function(d) { return d; });

    // NOTE Having trouble iteratin gthrought the array of new data. Each rectangle gets the first x/y in the array

  });

  /////////////////////////////////////////////
  // SVG 4 - ???
  /////////////////////////////////////////////

  var svg4 = d3.select("div#svg-4 svg");

  // Run SVG-4
  $("#run-4").on("click", function() {

    var data4 = [];
    var n;
    for (var i = 0; i < 5; i++) {
      n = Math.floor(Math.random() * 70 - 1) + 10;
      data4.push(n);
    }

    console.log("data4: " + data4);

    svg4.selectAll("circle")
        .data(data4)
      .enter().append("circle")
        .attr("cx", function(d, i) { return i * 100 + 80; })
        .attr("cy", 100)
        .attr("r", function(d) { return d; });

  });

  // Reset SVG-4
  $("#reset-4").on("click", function() {

    svg4.selectAll("circle").remove();

  });






// End of IIFE
})();
