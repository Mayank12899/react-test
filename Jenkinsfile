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
 
        stage('Unit Tests') {
            steps {
                sh '''
                    npm run test -- --watchAll=false
                '''
            }
        }
 
        stage('Build') {
            steps {
                sh '''
                    npm run build
                '''
                
                sh '''
                    echo "Trying Deploy"
                '''
                sh "sudo rm -rf /var/www/react-test"
                sh "sudo rm -f /var/www/html/index.nginx-debian.html"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/html/"
            }
        }
    }
}
