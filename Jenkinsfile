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

        stage('Install & Lint') {
            parallel {
                stage('Frontend Setup') {
                    steps {
                        dir("${FRONTEND_DIR}") {
                            bat 'npm ci'
                        }
                    }
                }
                stage('Backend Setup') {
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

        stage('Docker Build (Frontend + Backend)') {
            steps {
                script {
                    dir("${FRONTEND_DIR}") {
                        bat "docker build -t ${IMAGE_NAME}-frontend:local ."
                    }
                    dir("${BACKEND_DIR}") {
                        bat "docker build -t ${IMAGE_NAME}-backend:local ."
                    }
                }
            }
        }

        stage('Docker Run (Locally)') {
    steps {
        echo '🐳 Running local Docker containers using docker-compose...'
        script {
            // Stop and remove any existing containers
            bat 'docker-compose down || exit 0'

            // Rebuild images and start containers
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
            echo '❌ Something went wrong. Check build logs.'
        }
    }
}
