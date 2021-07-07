// For reference on methods and attributes:
// https://www.youtube.com/watch?v=C4t6qfHZ6Tw&ab_channel=freeCodeCamp.org

const dataset = [90, 80, 100, 85];
const skillset = ['Communication', 'Teamwork', 'Development', 'Learning'];
const barwidth = 500/dataset.length;

//Bar chart SVG element
var svg = d3.select('.barchart');

var barchart = svg.selectAll('rect')
    .data(dataset)
        .enter()
            .append('rect')
                .attr('y', function(d){
                    return 270-(d*2.7);
                })
                .attr('height', function(d){
                    return d*2.7;
                })
                .attr('width', barwidth-2.0)
                .attr('transform', function(d, i){
                    var translate = [barwidth*i, 0];
                    return "translate("+ translate +")";
                })
                .attr('fill', '#f28500')
                .attr('stroke', 'black')
                .attr('stroke-width', '1');

var skills = svg.selectAll("text")
                .data(skillset)
                    .enter()
                        .append('text')
                            .text(a => a)
                                .attr('y', (d, i) => 290 - 2)
                                .attr('x', (d, i) =>barwidth*i +20);


