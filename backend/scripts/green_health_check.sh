#!/bin/bash

GREEN_PORT=$1

health_check_process() {
    # 헬스 체크를 최대 5번 시도 (3초 간격)
    for i in $(seq 1 5); do
        check_health
        if [ $? -eq 0 ]; then
            echo "Health check passed on attempt $i."
            return 0
        fi
        echo "Waiting 3 seconds before next check..."
        sleep 3
    done
    
    # 5번 시도 후에도 실패하면 종료
    echo "Health check failed after 5 attempts."
    return 1
}

check_health() {
  # HEALTH_URL 생성
  local health_url="http://localhost:$GREEN_PORT/act-ddangkong/health"

  # 헬스 체크 실시
  local response=$(curl -s --connect-timeout 5 -o /dev/null -w "%{http_code}" "$health_url")

  # curl 요청 실패 처리
  if [ $? -ne 0 ]; then
      echo "Curl request failed for $health_url."
      return 1
  fi

  # HTTP 200 상태 확인
  if [ "$response" -eq 200 ]; then
    echo "Health check passed for $health_url."
    return 0
  else
    echo "Health check failed for $health_url. Status code: $response"
    return 1
  fi
}

# 헬스 체크 실행
if health_check_process; then
    echo "Success Health Check"
else
    echo "Exiting due to health check failure."
    exit 1
fi
