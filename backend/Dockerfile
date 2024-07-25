FROM openjdk:17-jdk-slim

ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT [ "java", "-jar", "-Duser.timezone=Asia/Seoul", "-Dspring.profiles.active=${SPRING_PROFILE}", "app.jar" ]
