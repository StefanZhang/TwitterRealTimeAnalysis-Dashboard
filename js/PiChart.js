var PiChart = {
    "width": 200,
    "height": 200,
    "description": "Donut chart with embedded data.",
    "data": {"url": "tweets.csv"},

    "mark": {"type": "arc", "innerRadius": 30},
    // "transform": [{
    //     "window": [{
    //         "op": "count",
    //         "field": "sentiment",
    //         "as": "Totalsentiment"
    //     }],
    //     "frame": [null, null]
    // },
    //     {
    //         "calculate": "datum.sentiment/datum.Totalsentiment * 100",
    //         "as": "PercentOfTotal"
    //     }],

    "encoding": {
        "theta": {"aggregate": "count", "field": "sentiment"},
        "color": {
            "field": "sentiment",
            "type": "nominal",
            "scale": {
                "domain": ["VERY_NEGATIVE", "NEGATIVE", "NEUTRAL", "POSITIVE", "VERY_POSITIVE", "NOT_UNDERSTOOD"],
                "range": ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600", "#c7c7c7"]
            },
        },
        "tooltip": [{"aggregate":"count", "field": "sentiment", "type": "quantitative"}, {"field": "sentiment", "type": "ordinal"}]
    },

    "view": {"stroke": null}
    };

