docker build -t my-jenkins-image .


docker run -d -p 8080:8080 -p 50000:50000 \
  -v /Users/debug2live/ltm_mn/devops/simple-nodejs/jenkins_home:/var/jenkins_home \
  --name my-jenkins-container my-jenkins-image