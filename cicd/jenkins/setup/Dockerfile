# Use the official Jenkins LTS image as the base image
FROM jenkins/jenkins:lts

# Switch to the root user to install additional packages
USER root

# Install Docker CLI
RUN apt-get update && \
    apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common && \
    apt-get update 

# Install Node.js and npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Switch back to the Jenkins user
USER jenkins

# Expose the Jenkins web interface port
EXPOSE 8080

# Expose the Jenkins agent port
EXPOSE 50000