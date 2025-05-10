# Jenkins Docker Setup

## Build the Jenkins Docker Image

```sh
docker build -t my-jenkins-image .
```

## Run Jenkins Container

```sh
docker run -d \
  -p 8080:8080 -p 50000:50000 \
  -v /Users/debug2live/ltm_mn/devops/simple-nodejs/.jenkins_home:/var/jenkins_home \
  --name my-jenkins-container my-jenkins-image
```

- Access Jenkins at: [http://localhost:8080](http://localhost:8080)
- Jenkins data is persisted in `.jenkins_home` directory.
