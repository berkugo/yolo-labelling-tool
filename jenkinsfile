Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker { image 'node:12.8.3' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
