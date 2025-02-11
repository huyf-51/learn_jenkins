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
            environment {
                scannerHome = tool 'sonarqube'
            }
            steps {
                sh 'npm run test'
                script {
                    withSonarQubeEnv('sonarqube') {
                        sh "${scannerHome}/bin/sonar-scanner \
                            -Dsonar.token=$SONAR_TOKEN"
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}