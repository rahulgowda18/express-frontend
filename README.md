🚀 CI/CD Deployment – Flask & Express on EC2

This project demonstrates deploying a Flask backend and an Express frontend on an EC2 instance and automating deployment using Jenkins.

🛠 Tech Stack

Amazon Web Services

Amazon EC2

Jenkins

Flask (Python)

Express (Node.js)

PM2

GitHub

🏗 Architecture
User → EC2 Public IP
          │
          ├── Express App (Port 3000)
          │
          └── Flask App (Port 5000)

Jenkins runs on Port 8080

⚙ Deployment Steps (Manual)

Launch EC2 instance

Install Python, Node.js, Git

Clone Flask & Express repositories

Install dependencies

Start apps using PM2

Access applications:

http://<EC2-Public-IP>:3000   → Express
http://<EC2-Public-IP>:5000   → Flask
http://<EC2-Public-IP>:8080   → Jenkins

🔄 CI/CD Pipeline

Jenkins pulls latest code from GitHub

Installs dependencies

Restarts application using PM2

Triggered automatically using GitHub Webhook

🎯 Project Outcome

✔ Applications deployed on EC2
✔ CI/CD pipeline implemented
✔ Automated deployment using Jenkins
✔ GitHub webhook integration
