# FROM adoptopenjdk/openjdk11:alpine-jre
#FROM adoptopenjdk/openjdk11:aarch64-ubuntu-jre11u-nightly
FROM adoptopenjdk/openjdk16:aarch64-ubuntu-jre16u-nightly
ADD target/master-node-raspberry-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]