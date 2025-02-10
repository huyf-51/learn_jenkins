pipeline {
    agent any
    tools {
        nodejs 'nodejs-tool'
        hudson.plugins.sonar.SonarRunnerInstallation 'sonarscan'
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
                sh 'sonar-scanner -D sonar.token=sqp_f0acb5c83ade634d86ad64491802efbf030f1294'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}