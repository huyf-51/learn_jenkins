pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Build 1') {
            steps {
                bat 'npm install jest'
            }
        }
        stage('Test') {
            // environment {
            //     scannerHome = tool 'sonarscan'
            // }
            steps {
                bat 'npm run test'
            //     withSonarQubeEnv('sonarqube') {
            //         bat "${scannerHome}/bin/sonar-scanner"
            //     }
            }
        }
        stage('Deploy') {
            environment {
                DOCKER_PASS = credentials("docker_token")
            }
            steps {
                bat 'docker build -t huyfst/learn-jenkins .'
                bat 'docker login -u huyfst -p $DOCKER_PASS'
                bat 'docker push huyfst/learn-jenkins'
            }
        }
    }
}

