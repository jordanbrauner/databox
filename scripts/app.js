$(document).ready(function() {

  "use strict";

  var app = {

    // Collaboration 1: Bar Chart ////////////////////////////
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
        for (var i = 0; i < 5; i++) {
          numbers.push(datumGen());
        }
      };

      // Generate datum
      var datumGen = function() {
        var num;
        if (numbers.length < 6) {
          num = Math.floor(Math.random() * 35);
          if (num <= 10) { num += 7; }
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
            .on("click", function(d, i) {
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

    // Demo 2: Test Code for Demo 1 //////////////////////////
    demo2: function() {
    //////////////////////////////////////////////////////////

      var svg = d3.select("#demo-2 svg"),
          numbers = [];

      // Generate starting data
      var dataStart = function() {
        for (var i = 0; i < 5; i++) {
          numbers.push(datumGen());
        }
      };

      // Generate datum
      var datumGen = function() {
        var num;
        if (numbers.length < 6) {
          num = Math.floor(Math.random() * 35);
          if (num <= 10) { num += 7; }
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
            .on("click", function(d, i) {
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

    // Demo 3: TSV ///////////////////////////////////////////
    demo3: function() {
    //////////////////////////////////////////////////////////

      var svg = d3.select("#demo-3 svg");

      var salesData = {
        January: "18",
        February: "29",
        March: "25",
        April: "52",
        May: "43",
        June: "47",
        July: "59",
        August: "72",
        September: "54",
        Opctober: "70",
        November: "75",
        December: "79"
      };

      svg.selectAll("rect")
        .attr()



    },

    //////////////////////////////////////////////////////////
    runApp: function() {
    //////////////////////////////////////////////////////////
      app.pair1();
      app.demo1();
      app.demo3();

      // TODO How do I make this run on scroll code more DRY (i.e. when using it on multiple DOM elements)

      // Run Demo 2 on scroll
      // var elem2 = $("#demo-2");
      // var hasRun2 = false;
      // $(window).scroll(function(){
      //   var docViewTop = $(window).scrollTop();
      //   var docViewBottom = docViewTop + $(window).height();
      //   var elemTop = $(elem2).offset().top;
      //   var elemBottom = elemTop + $(elem2).height();
      //   if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop) && (hasRun2 === false)) {
      //       hasRun2 = true;
      //       setTimeout(function() { app.demo2(); }, 200);
      //   }
      // });

    }

  };

  // Run app
  app.runApp();

});
