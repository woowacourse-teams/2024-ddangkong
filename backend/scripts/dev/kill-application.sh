PID=$(lsof -t -i:8080)

# 프로세스 종료
if [ -z "$PID" ]; then
  echo "No process is using port 8080."
else
  echo "Killing process with PID: $PID"
  kill -15 "$PID"
fi
