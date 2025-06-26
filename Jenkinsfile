pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'Frontend'
        BACKEND_DIR = 'Backend'
        DOCKERHUB_USER = 'edwindominic'
        IMAGE_NAME = 'bookverse-app'
        FRONTEND_PORT = '3000'
        BACKEND_PORT = '5000'
        DB_URL = credentials('DB_URL')  // 👈 Stored in Jenkins as "Secret text"
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

        stage('Run Docker Compose') {
            steps {
                echo '🐳 Running Docker Compose for local containers...'
                dir("${env.WORKSPACE}") {
                    writeFile file: '.env', text: """
                        PORT=${BACKEND_PORT}
                        DB_URL=${DB_URL}
                    """.stripIndent()

                    bat 'docker-compose down || exit 0'
                    bat 'docker-compose --env-file .env up -d --build'
                }
            }
        }
    }

    post {
        success {
            echo "✅ BookVerse is up: Frontend on http://localhost:${FRONTEND_PORT}, Backend on http://localhost:${BACKEND_PORT}"
        }
        failure {
            echo '❌ Build failed. Please check the logs above.'
        }
    }
}
