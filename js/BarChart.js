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
                "domain": ["VERY_NEGATIVE", "NEGATIVE", "NEUTRAL", "POSITIVE", "VERY_POSITIVE"],
                "range": ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"]
            },
            "title": "Sentiment"
        },
        "tooltip": {"aggregate":"count", "field": "sentiment", "type": "quantitative"}
    }
};
