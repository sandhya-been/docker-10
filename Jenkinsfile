pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        bat 'npm install'
      }
    }

    stage('Unit Tests') {
      steps {
        bat 'npm test'
      }
    }

    stage('Docker Build') {
      steps {
        bat 'docker build -t docker-demo:latest .'
      }
    }
  }

  post {
    success {
      echo '✅ Build and tests passed successfully!'
    }
    failure {
      echo '❌ Pipeline failed — check logs.'
    }
  }
}

