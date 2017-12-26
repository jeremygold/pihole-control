#!/bin/bash

pihole_cmd=/usr/local/bin/pihole
config_file=/etc/dnsmasq.d/03-pihole-wildcard.conf
temp_location=/etc/03-pihole-wildcard.conf

# Temp variables for testing
# pihole_cmd=echo
# config_file=/home/jeremy/test.config
# temp_location=/home/jeremy/temp/test.config

if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root" 1>&2
    exit 1
fi

if [ "$1" != "" ]; then
    pihole_status="$1"
    echo "Pihole status: $pihole_status"

    if [[ $pihole_status == "Enabled" ]]
    then
        if [ -f $temp_location ]
        then
            echo "Enabling pihole"
            mv -v $temp_location $config_file
            $pihole_cmd restartdns
        else
            echo "Pihole already enabled"
        fi
    else
        if [ -f $config_file ]
        then
            echo "Disabling pihole"
            mv -v $config_file $temp_location
            $pihole_cmd restartdns
        else
            echo "Pihole already disabled"
        fi
    fi
fi
