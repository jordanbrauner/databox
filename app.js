$(document).ready(function() {

  "use strict";

  var app = {

    // Demo 1: Circles //////////////////////////
    demo1: function() {
    /////////////////////////////////////////////

      var svg = d3.select("#demo-1 svg");
      var numbers = [];

      // Generate starting data
      var dataStart = function() {
        var num;
        for (var i = 0; i < 4; i++) {
          num = Math.floor((Math.random() * 25) + 5);
          numbers.push(num);
        }
      };

      // Generare new a datum
      var randomData = function() {
        var num;
        if (numbers.length < 6) {
          num = Math.floor((Math.random() * 30) + 3);
        }
        return num;
      };

      // Update
      var update = function() {
        var sel = svg.selectAll("circle")
          .data(numbers)
          .attr("cy", 100)
          .attr("cx", function(d, i) { return i * 90 + 70; })
          .attr("r", function(d) { return d; });

        // Enter
        sel.enter()
          .append("circle")
          .attr("cy", 100)
          .attr("cx", function(d, i) { return i * 90 + 70; })
          .attr("r", function(d) { return d; })
          .on("click", function(evt, i) {
            numbers.splice(i, 1);
            update();
          });

        // Exit
        sel.exit().remove();

      };

      // Run Demo
      $("#run-1").on("click", function() {
        if (numbers.length < 6) {
          numbers.push(randomData());
          update();
        }
      });

      dataStart();
      update();
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
        var svg = d3.select("div#demo-2 svg");

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

      generateBarChart(randomData());

    },

    // Squares //////////////////////////////////
    demo3: function() {
    /////////////////////////////////////////////

      var svg = d3.select("div#demo-3 svg");

      var runDemo = function() {

        var data = function() {
          var numbers = [];
          var amount = Math.floor((Math.random() * 20) + 2);
          for (var i = 1; i < amount; i++) {
            numbers.push(i);
          }
          return numbers;
        };

        // Update
        var selection = svg.selectAll("circle")
            .data(data)
            .attr("cx", function(d, i) { return (i * 20) + 70; })
            .attr("cy", 100)
            .attr("r", function(d) { return d; });

        // Enter
        selection.enter()
            .append("circle")
            .attr("cx", function(d, i) { return (i * 20) + 70; })
            .attr("cy", 100)
            .attr("r", function(d) { return d; });


        // Exit
        selection.exit().remove();
      };

      runDemo();

      // RUN DEMO 5
      $("#run-3").on("click", function(evt) {
        runDemo();
      });


    },

    // Animated /////////////////////////////////
    demo4: function() {
    /////////////////////////////////////////////

      var svg = d3.select("div#demo-4 svg");

      // SVG 4 FUNCTION
      var run = function(evt) {
        var self = $(evt.target);

        // If reset button...
        if (self.hasClass("reset")) {
          svg.selectAll("circle").remove();
          // Change button to run
          self.text("Run");
          self.removeClass("reset");

        // If run button...
        } else {
          var data = [];
          var n;
          for (var i = 0; i < 5; i++) {
            n = Math.floor(Math.random() * 70 - 1) + 10;
            data.push(n);
          }

          // Render circles
          svg.selectAll("circle")
              .data(data)
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
        run(evt);
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
