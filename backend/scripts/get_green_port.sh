#!/bin/bash

set -e

NGINX_CONFIG="/etc/nginx/sites-available/default"
BLUE_PORT=""
GREEN_PORT=""

# 현재 BLUE 호스트 확인 (8080 또는 8081)
BLUE_PORT=$(sudo grep -oP '127\.0\.0\.1:\K(8080|8081)' "$NGINX_CONFIG")

# 오류 처리: BLUE 호스트를 찾을 수 없을 경우
if [ -z "$BLUE_PORT" ]; then
    echo "Unable to determine the current BLUE host from NGINX configuration."
    echo "blue host : $BLUE_PORT"
    exit 1
fi

if [ "$BLUE_PORT" = "8080" ]; then
    GREEN_PORT="8081"
elif [ "$BLUE_PORT" = "8081" ]; then
    GREEN_PORT="8080"
else
    echo "Invalid BLUE_PORT value: $BLUE_PORT"
    exit 1
fi

echo "$GREEN_PORT"
