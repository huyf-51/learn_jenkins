pipeline {
    agent {
        docker {
            image 'node:20-alpine'
        }
    }

    tools {
        nodejs 'nodejs-tool'
    }

    stages {
        stage('Build 1') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            environment {
                scannerHome = tool 'sonarscan'
            }
            steps {
                sh 'npm run test'
                // withSonarQubeEnv('sonarqube') {
                //     sh "${scannerHome}/bin/sonar-scanner"
                // }
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build -t huyfst/learn-jenkins .'
            }
        }
    }
}