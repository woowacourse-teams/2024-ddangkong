#!/bin/bash

set -e

NGINX_CONFIG="/etc/nginx/sites-available/default"
PORT=$1

CURRENT_PORT=$(sudo grep -oP '127.0.0.1:\K\d+' "$NGINX_CONFIG")

if [ -n "$CURRENT_PORT" ]; then
    sudo sed -i "s/127.0.0.1:$CURRENT_PORT/127.0.0.1:$PORT/g" "$NGINX_CONFIG"
    echo "Switching from ($CURRENT_PORT) to ($PORT)"
else
    echo "Can't find port forwarding format in nginx configuration"
    exit 1
fi
