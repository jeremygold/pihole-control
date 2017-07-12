#!/bin/bash

### Only works for ARM V7 or greater!?! Ref http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/, section "Install Node.js"
# curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

# The manual way (TODO: Approximate only - not tested yet
cd /home/pi
wget https://nodejs.org/dist/v8.1.4/node-v8.1.4-linux-armv6l.tar.xz
tar xvf node-v8.1.4-linux-armv6l.tar.xz
sudo mv /usr/local/bin/node /usr/local/bin/node.bak
sudo mv /usr/local/bin/npm /usr/local/bin/npm.bak

sudo ln -s /home/pi/node-v8.1.4-linux-armv6l/bin/node /usr/local/bin/node
sudo ln -s /home/pi/node-v8.1.4-linux-armv6l/bin/npm /usr/local/bin/npm


