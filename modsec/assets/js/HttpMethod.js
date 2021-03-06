$(document).ready(function () {
            $.getJSON("getMethod.php", function (result) {
                var chart = new CanvasJS.Chart("chartContainer4", {
					
					animationEnabled: true,
					legend: {
						verticalAlign: "bottom",
						horizontalAlign: "center"
					},
					theme: "theme1",                   
					data: [
                        {
                            type: "pie",
							indexLabelFontFamily: "Garamond",       
							indexLabelFontSize: 20,
							indexLabelFontWeight: "bold",
							startAngle:0,
							indexLabelFontColor: "MistyRose",       
							indexLabelLineColor: "darkgrey", 
							indexLabelPlacement: "inside", 
							toolTipContent: "{name}: {y}hrs",
							showInLegend: true,
							indexLabel: "#percent%",
                            dataPoints: result
                        }
                    ]
                });
                chart.render();
            });
        });
