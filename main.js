Highcharts.chart('container', {

    title: {
        text: 'Gross Output by Industry, 1993-1997'
    },

    subtitle: {
        text: 'Source: apps.bea.gov'
    },

    yAxis: {
        title: {
            text: 'Gross Output (Billions of $)'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 1993-1997'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1993
        }
    },

    series: [{
        name: 'Mining',
        data: [145.1,	143.3,	142.2,	167.9,	176.9
]
    }, {
        name: 'Utilities',
        data: [239.1,	242.1,	244,	255.5,	262
]
    }, {
        name: 'Construction',
        data: [545.3,	587.7,	613.7,	666.8,	709.1
]
    }, {
        name: 'Manufacturing',
        data: [3052.6,	3282.8,	3541.2,	3667.9,	3898
]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
