---
title: "Install Netdata on macOS"
custom_edit_url: https://github.com/netdata/netdata/edit/master/packaging/installer/methods/macos.md
---



Netdata works on macOS, albeit with some limitations. The number of charts displaying system metrics is limited, but you
can use any of Netdata's [external plugins](/docs/agent/collectors/plugins.d) to monitor any services you might
have installed on your macOS system. You could also use a macOS system as the parent node in a [streaming
configuration](/docs/agent/streaming).

We recommend installing Netdata with the community-created and -maintained [**Homebrew
package**](#install-netdata-with-the-homebrew-package). 

-   [Install Netdata via the Homebrew package](#install-netdata-with-the-homebrew-package)
-   [Install Netdata from source](#install-netdata-from-source)

## Install Netdata with the Homebrew package

If you don't have [Homebrew](https://brew.sh/) installed already, begin with their installation script:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Next, you can use Homebrew's package, which installs Netdata all its dependencies in a single step:

```sh
brew install netdata
```

> Homebrew will place your Netdata configuration directory at `/usr/local/etc/netdata/`. Use the `edit-config` script
> and the files in this directory to configure Netdata. For reference, you can find stock configuration files at
> `/usr/local/Cellar/netdata/{NETDATA_VERSION}/lib/netdata/conf.d/`.

Skip on ahead to the [What's next?](#whats-next) section to find links to helpful post-installation guides.

## Install Netdata from source

We don't recommend installing Netdata from source on macOS, as it can be difficult to configure and install dependencies
manually.

First open your terminal of choice and install the Xcode development packages.

```bash
xcode-select --install
```

Click **Install** on the Software Update popup window that appears. Then, use the same terminal session to use Homebrew
to install some of Netdata's prerequisites. You can omit `cmake` in case you do not want to use 
[Netdata Cloud](/docs/cloud/).

```bash
brew install ossp-uuid autoconf automake pkg-config libuv lz4 json-c openssl@1.1 libtool cmake
```

If you want to use the [database engine](/docs/agent/database/engine) to store your metrics, you need to download
and install the [Judy library](https://sourceforge.net/projects/judy/) before proceeding compiling Netdata.

Next, download Netdata from our GitHub repository:

```bash
git clone https://github.com/netdata/netdata.git --recursive
```

Finally, `cd` into the newly-created directory and then start the installer script:

```bash
cd netdata/
sudo ./netdata-installer.sh --install /usr/local
```

> Your Netdata configuration directory will be at `/usr/local/netdata/`, and your stock configuration directory will
> be at **`/usr/local/lib/netdata/conf.d/`.**
>
> The installer will also install a startup plist to start Netdata when your macOS system boots.

## What's next?

When you're finished with installation, check out our [single-node](/docs/quickstart/single-node) or
[infrastructure](/docs/quickstart/infrastructure) monitoring quickstart guides based on your use case.

Or, skip straight to [configuring the Netdata Agent](/docs/configure/nodes).

Read through Netdata's [documentation](/docs), which is structured based on actions and
solutions, to enable features like health monitoring, alarm notifications, long-term metrics storage, exporting to
external databases, and more.


