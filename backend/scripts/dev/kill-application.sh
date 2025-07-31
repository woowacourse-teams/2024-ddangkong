PIDS=$(lsof -t -i:8080)

# 프로세스 종료
if [ -z "$PIDS" ]; then
  echo "No process is using port 8080."
else
  sudo kill -15 $PIDS
  echo "Killing process with PIDS: $PIDS"
fi
