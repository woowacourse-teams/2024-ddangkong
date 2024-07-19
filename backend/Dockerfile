# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Copy the jar file into the container
COPY build/libs/*.jar app.jar
  
# Run the jar file
ENTRYPOINT ["java", "-jar", "-Duser.timezone=Asia/Seoul","-Dspring.profiles.active=dev", "app.jar"]
