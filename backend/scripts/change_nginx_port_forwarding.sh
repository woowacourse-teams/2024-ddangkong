#!/bin/bash

NGINX_CONFIG="/etc/nginx/sites-available/default"
OLD_PORT=$1
NEW_PORT=$2

if [ -z "$OLD_PORT" ] || [ -z "$NEW_PORT" ]; then
    echo "Invalid arguments: OLD_PORT=$OLD_PORT, NEW_PORT=$NEW_PORT"
    exit 1
fi

if sudo grep -q "127\.0\.0\.1:$OLD_PORT" "$NGINX_CONFIG"; then
    sudo sed -i "s/127.0.0.1:$OLD_PORT/127.0.0.1:$NEW_PORT/g" "$NGINX_CONFIG"
    echo "Switching from $OLD_PORT to $NEW_PORT"
else
    echo "Can't find port forwarding format in nginx configuration"
    exit 1
fi
