$(document).ready(function() {
  
  "use strict";

  var app = {

    // Collaboraiton 1: Scatterplot //////////////////////////
    pair1: function() {
    //////////////////////////////////////////////////////////

    },

    // Demo 1: Circles ///////////////////////////////////////
    demo1: function() {
    //////////////////////////////////////////////////////////

      var svg = d3.select("#demo-1 svg"),
          numbers = [];

      // Generate starting data
      var dataStart = function() {
        for (var i = 0; i < 4; i++) {
          numbers.push(datumGen());
        }
      };

      // Generate datum
      var datumGen = function() {
        var num;
        if (numbers.length < 6) {
          num = Math.floor((Math.random() * 25) + 5);
          if (num <= 5) { num += 5; }
        }
        return num;
      };

      // Update
      var update = function() {
        var sel = svg.selectAll("circle")
            .data(numbers)
            .attr("cx", function(d, i) { return i * 90 + 70; })
            .attr("cy", 100)
            .attr("r", function(d) { return d; });

        // Enter
        sel.enter()
            .append("circle")
            .attr("cx", function(d, i) { return i * 90 + 70; })
            .attr("cy", 220)
            .attr("r", function(d) { return d; })
            // Click event for circle
            .on("click", function(evt, i) {
              d3.select(this).transition()
                  .attr("cy", -100)
                  .duration(250)
                  .each("end", function() {
                    numbers.splice(i, 1);
                    update();
                  });
            })
            .transition()
              .attr("cy", 100)
              .duration(250);

        // Exit
        sel.exit().remove();

      };

      // Run Demo
      $("#run-1").on("click", function() {
        if (numbers.length < 6) {
          numbers.push(datumGen());
          update();
        }
      });

      dataStart();
      update();

    },

    // Demo 2: Testing ground for demo 1 /////////////////////
    demo2: function() {
    //////////////////////////////////////////////////////////

      var svg = d3.select("#demo-2 svg"),
          numbers = [];

      // Generate starting data
      var dataStart = function() {
        for (var i = 0; i < 4; i++) {
          numbers.push(datumGen());
        }
      };

      // Generate datum
      var datumGen = function() {
        var num;
        if (numbers.length < 6) {
          num = Math.floor((Math.random() * 25) + 5);
          if (num <= 5) { num += 5; }
        }
        return num;
      };

      // Update
      var update = function() {
        var sel = svg.selectAll("circle")
            .data(numbers)
            .attr("cx", function(d, i) { return i * 90 + 70; })
            .attr("cy", 100)
            .attr("r", function(d) { return d; });

        // Enter
        sel.enter()
            .append("circle")
            .attr("cx", function(d, i) { return i * 90 + 70; })
            .attr("cy", 220)
            .attr("r", function(d) { return d; })
            // Click event for circle
            .on("click", function(evt, i) {
              d3.select(this).transition()
                  .attr("cy", -100)
                  .duration(250)
                  .each("end", function() {
                    numbers.splice(i, 1);
                    update();
                  });
            })
            .transition()
              .attr("cy", 100)
              .duration(250);

        // Exit
        sel.exit().remove();

      };

      // Run Demo
      $("#run-2").on("click", function() {
        if (numbers.length < 6) {
          numbers.push(datumGen());
          update();
        }
      });

      dataStart();
      update();

    },

    //////////////////////////////////////////////////////////
    runApp: function() {
    //////////////////////////////////////////////////////////
      app.pair1();
      app.demo1();
      app.demo2();
    }

  };

  // Run app
  app.runApp();

});
