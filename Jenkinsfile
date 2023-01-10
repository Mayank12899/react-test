pipeline {
    agent any;
    tools {
        nodejs 'NodeJS'
    }
    stages {
 
        stage('Initialize') {
            steps {
                sh '''
                    npm install
                '''
            }
        } 
        stage('Build') {
            steps {
                sh '''
                    npm run build
                '''
            }
        }
    }
}
