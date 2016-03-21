$(document).ready(function() {

  "use strict";

  var app = {

    // Collaboraiton 1: Scatterplot /////////////
    pair1: function() {
    /////////////////////////////////////////////

    },

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

      // Generate datum
      var datumRandom = function() {
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
          .attr("cy", 220)
          .attr("cx", function(d, i) { return i * 90 + 70; })
          .attr("r", function(d) { return d; })
          .on("click", function(evt, i) {
            numbers.splice(i, 1);
            update();
          })
          .transition()
            .attr("cy", 100)
            .duration(250);

        // Exit
        // sel.exit().remove();

        sel.exit()
            .transition()
            .attr("cy", -100)
            .duration(250)
            .each("end", function() {
              d3.select(this).remove();
            });

      };

      // Run Demo
      $("#run-1").on("click", function() {
        if (numbers.length < 6) {
          numbers.push(datumRandom());
          update();
        }
      });

      dataStart();
      update();
    },

    /////////////////////////////////////////////
    runApp: function() {
    /////////////////////////////////////////////
      app.pair1();
      app.demo1();
    }

  };

  // Run app
  app.runApp();

});
