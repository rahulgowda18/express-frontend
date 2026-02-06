pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/rahulgowda18/express-frontend.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t express-app .'
            }
        }
        stage('Deploy Container') {
            steps {
                sh '''
                docker rm -f express-container || true
                docker run -d -p 3000:3000 --name express-container express-app
                '''
            }
        }
    }
}
