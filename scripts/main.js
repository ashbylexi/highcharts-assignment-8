Highcharts.chart('container1', {

    title: {
        text: 'Gross Output by Industry: 1993-1997'
    },

    subtitle: {
        text: 'Source: Bureau of Economic Analysis'
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
        data: [145.1,	143.3,	142.2,	167.9,	176.9]
    }, {
        name: 'Utilities',
        data: [239.1,	242.1,	244,	255.5,	262]
    }, {
        name: 'Construction',
        data: [545.3,	587.7,	613.7,	666.8,	709.1]
    }, {
      name: 'Manufacturing',
      data: [3052.6,	3282.8,	3541.2,	3667.9,	3898]
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

Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Value Added by Industry'
    },
    subtitle: {
        text: 'Source: Bureau of Economic Analysis'
    },
    xAxis: {
        categories: [
            '1993',
            '1994',
            '1995',
            '1996',
            '1997'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Value Added (Billions of $)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Mining',
        data: [74.4,	76.1,	76.5,	90.1,	95.1
]

    }, {
        name: 'Utilities',
        data: [164.7,	172.4,	176,	175,	171.5
]

    }, {
        name: 'Construction',
        data: [251.4,	277.7,	292.9,	316.3,	339.6
]

    }, {
        name: 'Manufacturing',
        data: [1124.3,	1193.4,	1259.6,	1301.5,	1382.9
]

    }]
});
