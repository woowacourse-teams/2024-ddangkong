#!/bin/bash

set -e

NGINX_CONFIG="/etc/nginx/sites-available/default"
BLUE_PORT=""

# 현재 BLUE 호스트 확인 (8080 or 8081)
BLUE_PORT=$(sudo grep -oP '127\.0\.0\.1:\K(8080|8081)' "$NGINX_CONFIG")

# 오류 처리: BLUE 호스트를 찾을 수 없을 경우
if [ -z "$BLUE_PORT" ]; then
    echo "Unable to determine the current BLUE host from NGINX configuration."
    echo "Invalid blue port : $BLUE_PORT"
    exit 1
fi

# 환경 변수 설정
if [ "$BLUE_PORT" = "8080" ]; then
    export BLUE_PORT="8080"
    export GREEN_PORT="8081"
else
    export BLUE_PORT="8081"
    export GREEN_PORT="8080"
fi
