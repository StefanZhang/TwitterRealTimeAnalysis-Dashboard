var AreaChart = {
    "width": 1000,
    "height": 300,
    "description": "Area Chart",
    "data": {"url": "tweets.csv"},
    "mark": {"type": "area"},
    "format": {
        "parse": {"time": "'%Y/%D/%H %H:%M'"}
    },
    "encoding": {
        "x": {"timeUnit": "hours", "field": "time",
                "axis": {"domain": true, "format": "%H", "tickSize": 0}
        },

        "y": {"aggregate": "count", "field": "sentiment",
            "axis": null, "stack": "center"
        },
        "color": {
            "field": "sentiment",
            "type": "nominal",
            "scale": {
                "domain": ["VERY_NEGATIVE", "NEGATIVE", "NEUTRAL", "POSITIVE", "VERY_POSITIVE", "NOT_UNDERSTOOD"],
                "range": ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600", "#c7c7c7"]
            },
            "title": "Sentiment"
        },
        "tooltip": [{"aggregate":"count", "field": "sentiment", "type": "quantitative"}, {"field": "sentiment", "type": "ordinal"}]
    },
    // "selection": {
    //     "hours": {
    //         "type": "single",
    //         "fields": ["hours"],
    //         "bind": {
    //             "input": "range",
    //             "min": 0,
    //             "max": 24,
    //             "step": 1,
    //             "name": "hours"
    //         },
    //         "init": {"hours": 1}
    //     }
    // }
};
