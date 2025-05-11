pipeline {
  agent { label 'mac' }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t thoaitrands/nodejs-argocd-demo:${BUILD_NUMBER} .'
      }
    }
    stage('Push') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
          sh 'docker push thoaitrands/nodejs-argocd-demo:${BUILD_NUMBER}'
        }
      }
    }
  }
}
