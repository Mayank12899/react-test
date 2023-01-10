pipeline {
agent any;
tools {
    nodejs 'NodeJS'
}
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
    DISABLE_ESLINT_PLUGIN = 'true'
  }
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
      
    stage('Create Build Artifacts') {
        steps {
        sh 'npm run build'
        }
    }

}
