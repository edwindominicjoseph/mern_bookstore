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
                            sh 'npm ci'
                        }
                    }
                }
                stage('Backend Setup') {
                    steps {
                        dir("${BACKEND_DIR}") {
                            sh 'npm ci'
                            sh 'npm run lint'
                        }
                    }
                }
            }
        }

        stage('Frontend Unit Tests') {
            steps {
                dir("${FRONTEND_DIR}") {
                    sh 'mkdir -p test-results'
                    sh 'npm run test -- --ci --run'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir("${FRONTEND_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build (Frontend + Backend)') {
            steps {
                script {
                    dir("${FRONTEND_DIR}") {
                        sh "docker build -t ${IMAGE_NAME}-frontend:local ."
                    }
                    dir("${BACKEND_DIR}") {
                        sh "docker build -t ${IMAGE_NAME}-backend:local ."
                    }
                }
            }
        }

        stage('Docker Run (Locally)') {
            steps {
                echo '🐳 Running local Docker containers...'
                script {
                    sh 'docker rm -f bookverse-frontend || true'
                    sh 'docker rm -f bookverse-backend || true'

                    sh "docker run -d --name bookverse-backend -p 5000:5000 ${IMAGE_NAME}-backend:local"
                    sh "docker run -d --name bookverse-frontend -p 5173:5173 ${IMAGE_NAME}-frontend:local"
                }
            }
        }
    } // end of stages

    post {
        success {
            echo '✅ BookVerse app built, tested, and running locally in Docker.'
        }
        failure {
            echo '❌ Something went wrong. Check build logs.'
        }
    }
}