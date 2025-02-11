pipeline {
    agent any
    tools {
        nodejs 'nodejs-tool'
    }

    environment {
        SONAR_TOKEN = credentials('123')
    }

    stages {
        stage('Build 1') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
                sh 'sonar-scanner -D sonar.token=$SONAR_TOKEN'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}