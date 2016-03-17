$(document).ready(function() {

  "use strict";

  var app = {

    // Demo 1: Circles //////////////////////////
    demo1: function() {
    /////////////////////////////////////////////

      var svg = d3.select("#svg-1 svg");
      var data = [20, 30, 40, 50];

      var circle = svg.selectAll("circle")
          .data(data)
        .enter().append("circle")
          .attr("cy", 100)
          .attr("cx", function(d, i) {
            return i * 130 + 100;
          })
          .attr("r", function(d) {
            return d;
          });

      // SVG Function
      var svgRun = function () {
        var n;
        data = [];
        for (var i = 0; i < 4; i++) {
          n = Math.floor(Math.random() * (65 - 1) + 1);
          data.push(n);
        }
        circle.data(data);
        circle.attr("r", function(d) { return d; });
      };

      // Run SVG1
      $("#run-1").on("click", function() {
        svgRun();
      });
    },

    // Bar Chart ////////////////////////////////
    demo2: function() {
    /////////////////////////////////////////////

      var chartWidth = 570;
      var barHeight = 34;

      // FUNCTION: Generate random data
      var randomData = function() {
        var data = [];
        var n;

        for (var i = 0; i < 6; i++) {
          n = Math.floor(Math.random() * (chartWidth - 1) + 1);
          data.push(n);
        }
        return data;
      };

      // FUNCTION: Generate bar chart
      var generateBarChart = function(data) {
        // Set data scale based on the width of the chart
        var x = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([0, chartWidth]);

        // Select svg and give it a width and height
        var svg = d3.select("div#svg-2 svg");

        // Create group divs for the bars within the svg element with a data join and display them in rows using CSS transform
        var bar = svg.selectAll("g")
            .data(data)
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

      // Run SVG2
      $("#run-2").on("click", function() {
        generateBarChart(randomData());
      });

    },

    // Squares //////////////////////////////////
    demo3: function() {
    /////////////////////////////////////////////

      var data3 = [40, 60, 80, 100];
      var svg = d3.select("#svg-3 svg");

      svg.selectAll("g")
          .data(data3)
        .enter().append("g")
          .attr("transform", function(d, i) { return "translate(" + ((i * 130) + 50) + "," + (200 - d) / 2 + ")"; });

      svg.selectAll("g")
        .append("rect")
          .attr("height", function(d) { return d; })
          .attr("width", function(d) { return d; });

      svg.selectAll("g")
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
        var newRect = svg.selectAll("g")
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

        // NOTE Having trouble iterating through the array of new data. Each rectangle gets the first x/y in the array

      });

    },

    // Animated /////////////////////////////////
    demo4: function() {
    /////////////////////////////////////////////

      var svg4 = d3.select("div#svg-4 svg");

      // SVG 4 FUNCTION
      var run4 = function(evt) {
        var self = $(evt.target);

        // If reset button...
        if (self.hasClass("reset")) {
          svg4.selectAll("circle").remove();
          // Change button to run
          self.text("Run");
          self.removeClass("reset");

        // If run button...
        } else {
          var data4 = [];
          var n;
          for (var i = 0; i < 5; i++) {
            n = Math.floor(Math.random() * 70 - 1) + 10;
            data4.push(n);
          }

          // Render circles
          svg4.selectAll("circle")
              .data(data4)
            .enter().append("circle")
              .attr("cx", function(d, i) { return i * 100 + 80; })
              .attr("cy", 100)
              .attr("r", function(d) { return d; });

          // Change button to reset
          self.text("Reset");
          self.addClass("reset");
        }
      };

      // SVG 4 BUTTON
      $("#run-4").on("click", function(evt) {
        run4(evt);
      });


    },

    /////////////////////////////////////////////
    runApp: function() {
    /////////////////////////////////////////////
      app.demo1();
      app.demo2();
      app.demo3();
      app.demo4();
    }

  };

  // Run app
  app.runApp();

});
