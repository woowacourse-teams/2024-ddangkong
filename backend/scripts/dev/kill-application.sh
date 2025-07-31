PIDS=$(sudo lsof -t -i:8080)

if [ -z "$PIDS" ]; then
  echo "No process is using port 8080."
else
  for PID in $PIDS; do
    echo "Attempting to terminate PID: $PID"
    if sudo kill -15 "$PID"; then
      echo "Process $PID terminated successfully."
    else
      echo "Failed to terminate process $PID."
    fi
  done
fi
