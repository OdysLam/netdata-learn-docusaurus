---
title: "SMA Sunny WebBox monitoring with Netdata"
custom_edit_url: https://github.com/netdata/netdata/edit/master/collectors/node.d.plugin/sma_webbox/README.md
sidebar_label: "SMA Sunny WebBox"
---



Montiroing for the [SMA Sunny
WebBox](https://www.sma-sunny.com/en/questions-and-answers-on-discontinuation-of-the-sunny-webbox/).

The module supports any number of name servers:

```json
{
    "enable_autodetect": false,
    "update_every": 5,
    "servers": [
        {
            "name": "plant1",
            "hostname": "10.0.1.1",
            "update_every": 10
        },
        {
            "name": "plant2",
            "hostname": "10.0.2.1",
            "update_every": 15
        }
    ]
}
```


