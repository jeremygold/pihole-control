#!/bin/bash

if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root" 1>&2
   exit 1
fi

# Install and run pihole-control init script
cp pihole-control /etc/init.d/
chmod 755 /etc/init.d/pihole-control
/etc/init.d/pihole-control start

# Update to run by default
update-rc.d pihole-control defaults

