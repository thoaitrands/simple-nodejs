# Use the official Jenkins LTS image as the base
FROM jenkins/jenkins:lts

# Switch to root user to install additional packages or plugins
USER root

# Example: install some common tools
RUN apt-get update && apt-get install -y \
    git \
    curl \
    sudo \
 && apt-get clean

# Create a new Jenkins admin user (optional, safer to do via init scripts or UI)
# You can also mount an init.groovy script instead (see note below)

# Return to the Jenkins user
USER jenkins

# Pre-install plugins (optional, better handled with a plugins.txt file)
RUN jenkins-plugin-cli --plugins "blueocean git workflow-aggregator"

# Expose the default port
EXPOSE 8080

# Start Jenkins
CMD ["java", "-jar", "/usr/share/jenkins/jenkins.war"]
