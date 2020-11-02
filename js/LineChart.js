var LineChart = {
    "width": 800,
    "height": 300,
    "description": "Line Chart",
    "data": {"url": "tweets.csv"},
    "mark": {
        "type": "line", //trail
            "point": {
            "filled": true,
                "fill": "black"
            },
        "interpolate": "monotone",
    },
    "format": {
        "parse": {"time": "'%Y/%D/%H %H:%M'"}
    },
    "encoding": {
        "x": {"timeUnit": "date", "field": "time"},
        "y": {"aggregate":"count", "field": "sentiment", "type": "quantitative"},
        "strokeWidth":"3",
        "size": {"aggregate":"count", "field": "sentiment", "type": "quantitative"},
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
    }
};
