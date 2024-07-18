# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jre-slim

# Copy the jar file into the container
COPY build/libs/*.jar app.jar
  
# Make port 8080 available to the world outside this container
EXPOSE 8080
  
# Run the jar file
ENTRYPOINT ["nohup", "java", "-jar", "-Duser.timezone=Asia/Seoul","-Dspring.profiles.active=dev", "app.jar", "&"]
