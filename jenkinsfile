pipeline {
   agent { label 'agent-vinod' }


    stages {
        stage('Code') {
            steps {
                git url: 'https://github.com/rohitbhardwajj/TaskVault.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t rohit20000/todo-img:latest .'
            }
        }

        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    sh 'docker login -u $dockerHubUser -p $dockerHubPassword'
                    sh 'docker push rohit20000/todo-img:latest'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Test successful'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 5173:5173 rohit20000/todo-img:latest'
            }
        }
    }
}
