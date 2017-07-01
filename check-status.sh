#!/bin/bash

config_file=/etc/dnsmasq.d/03-pihole-wildcard.conf
temp_location=/etc/03-pihole-wildcard.conf

if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root" 1>&2
    exit 1
fi

response=$(curl --silent http://localhost:3000/status)
echo "Server status: $response"

if [[ $response == "Enabled" ]]
then
    if [ -f $temp_location ]
    then
        echo "Enabling pihole"
        mv -v $temp_location $config_file
    else
        echo "Pihole already enabled"
    fi
else
    if [ -f $config_file ]
    then
        echo "Disabling pihole"
        mv -v $config_file $temp_location
    else
        echo "Pihole already disabled"
    fi
fi

