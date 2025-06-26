pipeline {
    agent any

    tools {
        nodejs 'NodeJS_24'
    }

    environment {
        FRONTEND_DIR = 'Frontend'
        BACKEND_DIR = 'Backend'
        DOCKERHUB_USER = 'edwindominic' 
        IMAGE_NAME = 'bookverse-app'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'github-creds', url: 'https://github.com/edwindominicjoseph/mern_bookstore.git'
            }
        }

        stage('Install & Lint') {
            parallel {
                stage('Frontend Setup') {
                    steps {
                        dir("${FRONTEND_DIR}") {
                            sh 'npm ci'
                            sh 'npm run lint'
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
                    // Clean up old containers if running
                    sh 'docker rm -f bookverse-frontend || true'
                    sh 'docker rm -f bookverse-backend || true'

                    // Run backend
                    sh "docker run -d --name bookverse-backend -p 5000:5000 ${IMAGE_NAME}-backend:local"

                    // Run frontend
                    sh "docker run -d --name bookverse-frontend -p 5173:5173 ${IMAGE_NAME}-frontend:local"
                }
            }
        }
    }

    post {
        success {
            echo "✅ BookVerse app built, tested, and running locally in Docker."
        }
        failure {
            echo "❌ Something went wrong. Check build logs."
        }
    }
}
