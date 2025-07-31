#!/bin/bash

PIDS=$(sudo lsof -t -i:8080)

# 프로세스 종료
if [ -z "$PIDS" ]; then
  echo "No process is using port 8080."
else
  for PID in $PIDS; do
    echo "Killing process with PID: $PID"
    if sudo kill -15 "$PID"; then
      echo "Process $PID terminated successfully."
    else
      echo "Failed to terminate process $PID."
    fi
  done
fi

JAR_FILE=$(ls /home/ddangkong/app/*.jar | head -n 1)

sudo nohup java -Dspring.profiles.active=dev -Duser.timezone=Asia/Seoul -Dserver.port=8080 -jar "$JAR_FILE" &
