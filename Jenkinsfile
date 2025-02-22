pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }
    stages {
        // stage('Build 1') {
        //     steps {
        //         sh 'npm install jest'
        //     }
        // }
        stage('Test') {
            environment {
                scannerHome = tool 'sonarscan'
            }
            steps {
                // sh 'npm run test'
                withSonarQubeEnv('sonarqube') {
                    bat "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Deploy') {
            steps {
                bat 'docker build -t huyfst/learn-jenkins .'
            }
        }
    }
}

