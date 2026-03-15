pipeline {
  agent any

  stages {
    stage ('Install dependencies') {
      echo 'starting installing dependencies...'

      script {
        if (isUnix()) {
          sh 'npm install'
        } else {
          bat 'npm install'
        }
      }
    }

    stage ('Run tests') {
      echo 'starting running tests...'

      script {
        if (isUnix()) {
          sh 'ng test'
        } else {
          bat 'ng test'
        }
      }
    }

    stage ('Down containers') {
      script {
        if (isUnix()) {
          sh 'docker compose down -v'
        } else {
          bat 'docker compose down -v'
        }
      }
    }

    stage ('Build and up containers') {
      echo 'starting running tests...'

      script {
        if (isUnix()) {
          sh 'docker compose up --build -d'
        } else {
          bat 'docker compose up --build -d'
        }
      }
    }
  }
}
