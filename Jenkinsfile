pipeline {
    agent any

    // tools {
    //     nodejs 'nodejs-tool'
    //     dockerTool 'docker'
    // }

    stages {
        // stage('Build 1') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }
        // stage('Test') {
        //     environment {
        //         scannerHome = tool 'sonarscan'
        //     }
        //     steps {
        //         sh 'npm run test'
        //         // withSonarQubeEnv('sonarqube') {
        //         //     sh "${scannerHome}/bin/sonar-scanner"
        //         // }
        //     }
        // }
        stage('Deploy') {
            steps {
                bat 'docker build -t huyfst/learn-jenkins .'
            }
        }
    }
}

