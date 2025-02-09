pipeline {
    agent any

    stages {
        stage('Build 1') {
            steps {
                npm install
            }
        }
        stage('Test') {
            steps {
                npm run test
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}