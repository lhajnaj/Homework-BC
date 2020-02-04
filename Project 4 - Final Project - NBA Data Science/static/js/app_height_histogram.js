d3.json("/player2").then(function (response) {
        var data = response;
        // console.log(data)
        var ages = data.map(d => d.age)
        var names = data.map(d => d.player)
        var teams = data.map(d => d.tm)
        // console.log(ages)
        var salary = data.map(d => d.salary_2019to2020)
        var height = data.map(d => d.height)
        // console.log(height)

        
        var trace1 = {
                // y: salary,
                x: height,
                type: 'histogram'
        };

        var layout = {
                title: 'Frequency of Height',
                showlegend: false,
                height: 600,
                // width: 800,
                hovermode: 'closest',
                xaxis: {
                        title: {
                                text: 'Height',
                                font: {
                                        family: 'Courier New, monospace',
                                        size: 18,
                                        color: '#7f7f7f'
                                }

                        }
                },
                yaxis: {
                        title: {
                                text: 'Frequency',
                                font: {
                                        family: 'Courier New, monospace',
                                        size: 18,
                                        color: '#7f7f7f'
                                }

                        }
                }
        };

        var data = [trace1];

        Plotly.newPlot('chart here', data, layout);
        
});
