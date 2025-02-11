pipeline {
    agent any
    tools {
        nodejs 'nodejs-tool'
        sonarScanner 'sonarscan'
    }

    environment {
        SONAR_TOKEN = credentials('sonar_token')
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