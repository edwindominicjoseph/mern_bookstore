pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'Frontend'
        BACKEND_DIR = 'Backend'
        DOCKERHUB_USER = 'edwindominic'
        IMAGE_NAME = 'bookverse-app'
    }

    tools {
        nodejs 'NodeJS_24'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-token',
                    url: 'https://github.com/edwindominicjoseph/mern_bookstore.git'
            }
        }

        stage('Install Dependencies') {
            parallel {
                stage('Install Frontend') {
                    steps {
                        dir("${FRONTEND_DIR}") {
                            bat 'npm ci'
                        }
                    }
                }
                stage('Install Backend') {
                    steps {
                        dir("${BACKEND_DIR}") {
                            bat 'npm ci'
                        }
                    }
                }
            }
        }

        stage('Frontend Unit Tests') {
            steps {
                dir("${FRONTEND_DIR}") {
                    bat 'if not exist test-results mkdir test-results'
                    bat 'npm run test'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir("${FRONTEND_DIR}") {
                    bat 'npm run build'
                }
            }
        }

        stage('Docker Compose Up') {
    steps {
        echo '🐳 Running Docker Compose for local containers...'
        dir("${env.WORKSPACE}") {
            bat 'docker-compose down || exit 0'
            bat 'docker-compose up -d --build'
        }
    }
}
    }

    post {
        success {
            echo '✅ BookVerse app built, tested, and running locally in Docker.'
        }
        failure {
            echo '❌ Build failed. Please check logs.'
        }
    }
}
