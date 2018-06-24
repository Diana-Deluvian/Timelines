    var dTimeline = document.getElementById('timeline')
    var width = dTimeline.clientWidth;
    var height = dTimeline.clientHeight;
      var percent = width / 100;
      y = 100;

function drawTimeline() {

    var timeline = d3.select('#timeline');

    var padding = 50;

    var xScale = d3.scaleLinear()
                                 .domain([1450, 1550])
                                 .range([0, width]);



    timeline.attr("width", width).attr("height", height);

    var xAxis = d3.axisBottom(xScale);
        xAxis.tickSizeOuter(0);


    timeline.append("g").attr("transform", "translate(0," + (height - padding) +")").call(xAxis);

    drawCharacterMark(timeline, 25, 1475, "Mizerawa");
      drawCharacterMark(timeline, 50, 1477, "Eluviete");
      drawCharacterMark(timeline, 50, 1475, "Annavera");
      drawCharacterMark(timeline, 67, 1433, "Nahranelia");

                       }


drawTimeline();

function drawMark(svg, startX, startY){

   svg.append("line")
  .attr("x1", startX)
  .attr("y1", startY)
  .attr("x2", startX-50)
  .attr("y2", startY-50)



  svg.append("line")
  .attr("x1", startX-50)
  .attr("y1", startY-50)
  .attr("x2", startX-75)
  .attr("y2", startY-50)

var circle = svg.append("circle")
                         .attr("cx", startX - 75)
                         .attr("cy", startY-50)
                       .attr("r", 10);


}

function drawCharacterMark(svg, age, birth, name){

  var x1 = (birth - 1450) * percent;
  var x2 = x1 + age*percent; 
                        var charMark = svg.append("line")
                        .attr("x1", x1)
                        .attr("y1", y)
                        .attr("x2", x2)
                       .attr("y2", y).attr('class', 'mainBranch');
    charMark.on("click", function() {
          var coords = d3.mouse(this);

          // Normally we go from data to pixels, but here we're doing pixels to data
/*          var newData= {
            x: Math.round( xScale.invert(coords[0])),  // Takes the pixel number to convert to number
            y: Math.round( yScale.invert(coords[1]))
          };*/

          drawMark(svg, coords[0], coords[1])
        });

    svg.append("text").attr("x", (x1+x2)/2).attr('text-anchor', 'start').attr("y", y+25).attr('class', 'charName').text(name);
                           y += 100;

}

/*
  var lineFunction = d3.line()
  .x(function(d) { return d.x; })
  .y(function(d) { return d.y; })
  .curve(d3.curveLinear);   

 var lineData = [ { "x": 100,   "y": 50},  { "x": 200,  "y": 50},
                  { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

   var lineGraph = timeline.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");*/


/*
yAxis 
    timeline.append("g").attr("transform", "translate(" +0 +",0)").call(yAxis);
        var yScale = d3.scaleLinear()
                                  .domain([0, 5])
                                  .range([height, 0]);

                                      var yAxis = d3.axisLeft(yScale);
        yAxis.tickSizeOuter(0);
        yAxis.ticks(5);
        yAxis.tickValues([1,2,3,4,5])*/