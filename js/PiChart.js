var PiChart = {
    "width": 200,
    "height": 200,
    "description": "Donut chart with embedded data.",
    "data": {"url": "tweets.csv"},

    "mark": {"type": "arc", "innerRadius": 30},
    "encoding": {
        "theta": {"aggregate": "count", "field": "sentiment"},
        "color": {
            "field": "sentiment",
            "type": "nominal",
            "scale": {
                "domain": ["VERY_NEGATIVE", "NEGATIVE", "NEUTRAL", "POSITIVE", "VERY_POSITIVE"],
                "range": ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"]
            },
        },
        "tooltip": {"aggregate":"count", "field": "sentiment", "type": "quantitative"}
    },
    "view": {"stroke": null}

    };
