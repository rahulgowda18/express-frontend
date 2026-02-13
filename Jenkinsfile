pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/rahulgowda18/express-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Restart Application') {
            steps {
                sh 'pm2 restart express-app || pm2 start app.js --name express-app'
            }
        }
    }
}

