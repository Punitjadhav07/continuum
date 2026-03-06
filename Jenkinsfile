pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Next.js App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Start App For Testing') {
            steps {
                sh 'npx pm2 start node_modules/next/dist/bin/next --name continuum-test -- start -p 3001 || true'
            }
        }
        stage('Wait For App') {
            steps {
                sh 'sleep 10'
            }
        }
        stage('Run E2E Tests') {
            steps {
                sh 'BASE_URL=http://localhost:3001 npm run test:e2e'
            }
        }
        stage('Stop Test App') {
            steps {
                sh 'npx pm2 delete continuum-test || true'
            }
        }
    }
}
