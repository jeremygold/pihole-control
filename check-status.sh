#!/bin/bash

response=$(curl --silent http://192.168.1.116:3000/status)

config_file=test/config.file
temp_location=test/config.file.bak

echo "Server status: $response"

if [[ $response == "Enabled" ]]
then
    if [ -f $config_file ]
    then
        echo "Enabling"
        mv -v $config_file $temp_location
    else
        echo "Already Enabled"
    fi
else
    if [ -f $temp_location ]
    then
        echo "Disabling"
        mv -v $temp_location $config_file
    else
        echo "Already disabled"
    fi
fi

