$(document).ready(function() {

    /* load data */
    var Data = [];
    d3.json("rawExportData.json", function(error, rawData) {
        // alert(error);
        var numDataUnit = rawData.length;
        for (var i = 1; i < numDataUnit; i++) {
            var temp = {};
            var tempUnit = rawData[i];
            temp["Category"] = tempUnit["FIELD1"];
            temp["Region"] = tempUnit["FIELD2"];
            temp["Quarter"] = tempUnit["FIELD3"];
            temp["Cost"] = Number(tempUnit["FIELD5"].replace(/[^0-9\.]+/g, "")) / 600;
            temp["Profit"] = Number(tempUnit["FIELD6"].replace(/[^0-9\.]+/g, "")) / 600;
            Data.push(temp);
        }

        console.log(Data.length) // for test 
            //    console.log(Data); // test 

        /* draw graph*/

        // Category: Books, Electronics, Movies, Music
        var chart = document.getElementById("chart");
        var width = chart.offsetWidth,
            height = chart.offsetHeight;

        // d3.select(chart).append("p").text(Data[i]["Cost"]);

        var svg = 0,
            bar = 0,
            margin = 6;
        axisMargin = 6,
            barHeight = (height - axisMargin - margin * 2) * 0.4 / Data.length,
            barPadding = (height - axisMargin - margin * 2) * 0.6 / Data.length,

            svg = d3.select(chart).append("svg").attr("width", width).attr("height", height);
        bar = svg.selectAll("g").data(Data).enter().append("g");

        bar.attr("class", "bar")
            .attr("cx", 0)
            .attr("transform", function(d, i) {
                return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
            });


        var scale, xAxis, labelWidth = 0;
        maxCost = d3.max(Data.map(function(i) {
            return i["Cost"];
        }));

        scale = d3.scale.linear()
            .domain([0, maxCost])
            .range([0, 300]);

        bar.append("rect")
        .attr("class", "cost")
            .attr("transform", "translate(" + labelWidth + ", 0)")
            .attr("height", barHeight)
            .attr("width", function(d) {
                return scale(d["Cost"]);
            });
        
       var maxProfit = d3.max(Data.map(function(i) {
            return i["Profit"];
        }));
       scale = d3.scale.linear()
            .domain([0, maxProfit])
            .range([0, 300]);

       bar.append("rect")
           .attr("class","profit")
            .attr("transform", "translate(" + labelWidth + ", 0)")
            .attr("transform", "translate("+ 300+",0)")
            .attr("height", barHeight)
            .attr("width", function(d) {
                return scale(d["Profit"]);
            });

    }); // end of d3.json()




});
