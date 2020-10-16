var LineChart = {
    "width": 1000,
    "height": 300,
    "description": "Line Chart",
    "data": {"url": "tweets.csv"},
    "mark": {
        "type": "line",
            "point": {
            "filled": true,
                "fill": "black"
            }
    },
    "format": {
        "parse": {"time": "'%Y/%D/%H %H:%M'"}
    },
    "encoding": {
        "x": {"timeUnit": "hours", "field": "time"},
        "y": {"aggregate":"count", "field": "sentiment", "type": "quantitative"},
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
