pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                bat 'npm install jest'
                bat 'npm run test'
            }
        }
        // stage('Sonar scan') {
            // environment {
            //     scannerHome = tool 'sonarscan'
            // }
            // steps {
            //     withSonarQubeEnv('sonarqube') {
            //         bat "${scannerHome}/bin/sonar-scanner"
            //     }
            // }
        // }
        stage('Deploy') {
            environment {
                DOCKER_PASS = credentials("docker_token")
            }
            steps {
                bat 'docker build -t huyfst/learn-jenkins .'
                bat 'docker login -u huyfst -p %DOCKER_PASS%'
                bat 'docker push huyfst/learn-jenkins'
                bat 'trivy image huyfst/learn-jenkins'
            }
        }
        
    }
}

