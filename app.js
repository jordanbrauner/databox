(function() {
  "use strict";

  /////////////////////////////////////////////
  // Action 1 - Circles
  /////////////////////////////////////////////

  var svg1 = d3.select($("div#svg-1 svg")[0]);

  var circle = svg1.selectAll("circle")
      .data([20, 30, 40, 50])
    .enter().append("circle")
      .attr("cy", 100)
      .attr("cx", function(d, i) {
        return i * 130 + 100;
      })
      .attr("r", function(d) {
        return d;
      });

  // Run
  $("#action-1").on("click", function() {
    circle.attr("r", function(d) {
      return (Math.random() * d) + 1;
    });
  });

  /////////////////////////////////////////////
  // Action 2 - Bar Chart
  /////////////////////////////////////////////

  var chartWidth = 570;
  var barHeight = 34;

  var barData = [4, 8, 15, 16, 23, 42];

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
  }

  // generateBarChart(barData);

  // Run
  $("#action-2").on("click", function() {

    var rData = function() {
      var newData = [];
      var n;

      for (var i = 0; i < 6; i++) {
        n = Math.floor(Math.random() * (chartWidth - 1) + 1);
        newData.push(n);
      }

      console.log(newData);
      return newData;
    }

    generateBarChart(rData());

  });

})();
