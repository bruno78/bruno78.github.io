var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

//var formatDate = d3.timeFormat("%Y");
var parseDate = d3.timeParse("%Y");
var formatAsPercentage = d3.format(".1%");

var x = d3.scaleTime()
    .range([0, width]);

var y = d3.scaleLinear()
    .range([height, 0]);

var xAxis = d3.axisBottom()
    .scale(x)


var yAxis = d3.axisLeft()
    .scale(y)
    .tickFormat(formatAsPercentage);

var line = d3.line()
    .x(function(d) { return x(d.Year); })
    .y(function(d) { return y(d.GunLawFavor); });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("/assets/data/gunlaw_opinion.csv", type, function(error, data) {
  if (error) throw error;

  x.domain(d3.extent(data, function(d) { return d["Year"]; }));
  y.domain(d3.extent(data, function(d) { return d["GunLawFavor"]; }));

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Percentage (%)");

  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
});

function type(d) {
  d.Year = parseDate(d["Year"]);
  d.close = +d["GunLawFavor"];
  return d;
}
