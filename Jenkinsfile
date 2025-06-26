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
                    bat 'npm run test -- --ci --run'
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
                echo '🐳 Running local Docker containers...'
                script {
                    bat 'docker rm -f bookverse-frontend || exit 0'
                    bat 'docker rm -f bookverse-backend || exit 0'

                    bat "docker run -d --name bookverse-backend -p 5000:5000 ${IMAGE_NAME}-backend:local"
                    bat "docker run -d --name bookverse-frontend -p 5173:5173 ${IMAGE_NAME}-frontend:local"
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
