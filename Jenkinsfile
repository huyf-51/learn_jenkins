pipeline {
    agent any
    
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
            environment {
                dockerHome = tool 'docker'
            }
            steps {
                sh '${dockerHome}/bin/docker build -t huyfst/learn-jenkins .'
            }
        }
    }
}