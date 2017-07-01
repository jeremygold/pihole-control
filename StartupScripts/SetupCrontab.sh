#!/bin/bash

if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root" 1>&2
   exit 1
fi

(crontab -l 2>/dev/null; echo "* * * * * /home/pi/git/pihole-control/check-status.sh > /dev/null 2>&1") | crontab -
