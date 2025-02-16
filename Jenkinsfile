// pipeline {
//     agent any

//     tools {
//         nodejs 'nodejs-tool'
//         dockerTool 'docker'
//     }

//     stages {
//         stage('Build 1') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('Test') {
//             environment {
//                 scannerHome = tool 'sonarscan'
//             }
//             steps {
//                 sh 'npm run test'
//                 // withSonarQubeEnv('sonarqube') {
//                 //     sh "${scannerHome}/bin/sonar-scanner"
//                 // }
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 sh 'docker build -t huyfst/learn-jenkins .'
//             }
//         }

//     }
// }

pipeline {
  agent any
  tools {
    // a bit ugly because there is no `@Symbol` annotation for the DockerTool
    // see the discussion about this in PR 77 and PR 52: 
    // https://github.com/jenkinsci/docker-commons-plugin/pull/77#discussion_r280910822
    // https://github.com/jenkinsci/docker-commons-plugin/pull/52
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' '18.09'
  }
  environment {
    DOCKER_CERT_PATH = credentials('id-for-a-docker-cred')
  }
  stages {
    stage('foo') {
      steps {
        sh "docker version" // DOCKER_CERT_PATH is automatically picked up by the Docker client
      }
    }
  }
}