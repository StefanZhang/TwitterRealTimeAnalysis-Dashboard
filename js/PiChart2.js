var PiChart2 = {
    "width": 200,
    "height": 200,
    "description": "Donut chart with embedded data.",
    "data": {"url": "tweets.csv"},
    "mark": {"type": "arc", "innerRadius": 30},
    "encoding": {
        "theta": {"aggregate": "count", "field": "id"},
        "color": {
            "field": "source",
            "type": "nominal",
            "scale": {
                "domain": ["Android", "iPhone", "iPad", "Web app", "other"],
                "range": ["#c7c7c7", "#e7ba52", "#aec7e8", "#1f77b4", "#9467bd"]
            },
        },
    },
    "view": {"stroke": null}

};
