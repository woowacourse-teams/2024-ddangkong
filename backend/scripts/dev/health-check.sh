#!/bin/bash

# 최대 반복 횟수
MAX_RETRIES=60

# 성공 상태 코드와 요청 URL
SUCCESS_STATUS=200
HEALTH_CHECK_URL="localhost:8080/actuator/health"

# 반복 시작
i=1
while [ "$i" -le "$MAX_RETRIES" ]; do
  # HTTP 요청 보내기
  RESPONSE_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$HEALTH_CHECK_URL")
  echo "[TRY $i] StatusCode : $RESPONSE_STATUS "
  # 상태 코드 확인
  if [ "$RESPONSE_STATUS" -eq "$SUCCESS_STATUS" ]; then
    echo "Success: Received $SUCCESS_STATUS status code on attempt $i."
    exit 0
  fi

  # 1초 대기
  sleep 1

  # 반복 변수 증가
  i=$((i + 1))
done

# 실패 메시지
echo "Failure: Did not receive $SUCCESS_STATUS status code within $MAX_RETRIES attempts."
sh kill-application.sh
exit 1
