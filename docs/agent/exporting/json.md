---
title: "Export metrics to JSON document databases"
description: "Archive your Agent's metrics to a JSON document database for long-term storage, further analysis, or correlation with data from other sources."
custom_edit_url: https://github.com/netdata/netdata/edit/master/exporting/json/README.md
sidebar_label: JSON Document Databases
---



You can use the JSON connector for the [exporting engine](/docs/agent/exporting) to archive your agent's metrics to JSON
document databases for long-term storage, further analysis, or correlation with data from other sources.

## Configuration

To enable data exporting to a JSON document database, run `./edit-config exporting.conf` in the Netdata configuration
directory and set the following options:

```conf
[json:my_json_instance]
    enabled = yes
    destination = localhost:5448
```

Add `:http` or `:https` modifiers to the connector type if you need to use other than a plaintext protocol. For example: `json:http:my_json_instance`,
`json:https:my_json_instance`.

The JSON connector is further configurable using additional settings. See the [exporting reference
doc](/docs/agent/exporting#options) for details.


