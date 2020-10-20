var BarChart = {
    "width": 1000,
    "height": 300,
    "description": "Bar Chart",
    "data": {"url": "tweets.csv"},
    "mark": {
        "type": "bar"
    },
    "encoding": {
        "x": {
            "field":"source",
            "axis": {
                "labelAngle": 0,
                "labelPadding": 4
            }
        },
        "y": {"aggregate": "count"},
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
