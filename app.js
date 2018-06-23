function drawTimeline() {
    var timeline = d3.select('#timeline');
    var width = 1000;
    var height = 600;
    var padding = 100;

    var xScale = d3.scaleLinear()
                                 .domain([1400, 1500])
                                 .range([padding, width - padding]);

    var yScale = d3.scaleLinear()
                                  .domain([0, 5])
                                  .range([height - padding, padding]);

    timeline.attr("width", width).attr("height", height);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    timeline.append("g").attr("transform", "translate(0," + (height - padding) +")").call(xAxis);
    timeline.append("g").attr("transform", "translate(" +padding +",0)").call(yAxis);



                            var circle = timeline.append("line")
                        .attr("x1", 200)
                        .attr("y1", 150)
                        .attr("x2", 500)
                       .attr("y2", 150).attr("stroke-width", 2)
                         .attr("stroke", "black");
drawMark(timeline, 300, 150);

                       }


drawTimeline();

function drawMark(svg, startX, startY){
  svg.append("line")
  .attr("x1", startX)
  .attr("y1", startY)
  .attr("x2", startX-50)
  .attr("y2", startY-50).attr("stroke-width", 2)
  .attr("stroke", "black");

  svg.append("line")
  .attr("x1", startX-50)
  .attr("y1", startY-50)
  .attr("x2", startX-75)
  .attr("y2", startY-50).attr("stroke-width", 2)
  .attr("stroke", "black");

var circle = svg.append("circle")
                         .attr("cx", startX - 75)
                         .attr("cy", startY-50)
                       .attr("r", 10);


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