# Setup Jenkins server locally

### Step 1: Navigate to the directory containing the Dockerfile

```sh
cd cicd/jenkins
```

### Step 2: Build the Docker image

```
docker build -t my-jenkins-server .
```

### Step 3: Run the Docker container

```
docker run -d -p 8080:8080 -p 50000:50000 --name my-jenkins-server my-jenkins-server
```

### Step 4: Access Jenkins

Open your web browser and navigate to http://localhost:8080.

### Step 5: Initial Setup

During the initial setup, Jenkins will prompt you for an administrator password. You can find this password by running:

```
docker exec my-jenkins-server cat /var/jenkins_home/secrets/initialAdminPassword
```