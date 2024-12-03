#!/bin/bash

NGINX_CONFIG="/etc/nginx/sites-available/default"
NEW_PORT=$1

if [ -z "$NEW_PORT" ]; then
    echo "Invalid new port : $NEW_PORT"
    exit 1
fi

OLD_PORT=$(sudo grep -oP '127.0.0.1:\K\d+' "$NGINX_CONFIG")

if  [ -n "$OLD_PORT" ]; then
    sudo sed -i "s/127.0.0.1:$OLD_PORT/127.0.0.1:$NEW_PORT/g" "$NGINX_CONFIG"
    echo "Switching from $OLD_PORT to $NEW_PORT"
else
    echo "Can't find port forwarding format in nginx configuration"
    exit 1
fi
