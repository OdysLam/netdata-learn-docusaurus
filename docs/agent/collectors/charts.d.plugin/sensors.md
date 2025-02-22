---
title: "Linux machine sensors monitoring with Netdata"
custom_edit_url: https://github.com/netdata/netdata/edit/master/collectors/charts.d.plugin/sensors/README.md
---



> THIS MODULE IS OBSOLETE.
> USE [THE PYTHON ONE](/docs/agent/collectors/python.d.plugin/sensors) - IT SUPPORTS MULTIPLE JOBS AND IT IS MORE EFFICIENT
>
> Unlike the python one, this module can collect temperature on RPi.

The plugin will provide charts for all configured system sensors

> This plugin is reading sensors directly from the kernel.
> The `lm-sensors` package is able to perform calculations on the
> kernel provided values, this plugin will not perform.
> So, the values graphed, are the raw hardware values of the sensors.

The plugin will create Netdata charts for:

1.  **Temperature**
2.  **Voltage**
3.  **Current**
4.  **Power**
5.  **Fans Speed**
6.  **Energy**
7.  **Humidity**

One chart for every sensor chip found and each of the above will be created.

## Configuration

Edit the `charts.d/sensors.conf` configuration file using `edit-config` from the Netdata [config
directory](/docs/configure/nodes), which is typically at `/etc/netdata`.

```bash
cd /etc/netdata   # Replace this path with your Netdata config directory, if different
sudo ./edit-config charts.d/sensors.conf
```

This is the internal default for `charts.d/sensors.conf`

```sh
# the directory the kernel keeps sensor data
sensors_sys_dir="${NETDATA_HOST_PREFIX}/sys/devices"

# how deep in the tree to check for sensor data
sensors_sys_depth=10

# if set to 1, the script will overwrite internal
# script functions with code generated ones
# leave to 1, is faster
sensors_source_update=1

# how frequently to collect sensor data
# the default is to collect it at every iteration of charts.d
sensors_update_every=

# array of sensors which are excluded
# the default is to include all
sensors_excluded=()
```

---


