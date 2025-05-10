# Simple Node.js Web Server

A basic web server built using Node.js and Express. This project serves as an introduction to building and deploying web servers with Node.js.

## ✨ Features

- 🚀 Simple routing with Express.js.
- 🔥 Lightweight and fast setup.
- 🌩️ Ready for deployment on AWS EC2.

---

## Getting Started

## 📋 Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)

---

## 📂 Installation

1. Clone the repository:
   ```bash
   https://github.com/thoaitrands/simple-nodejs.git

2. Install dependencies:
    ```bash
    npm install

### ▶️ Usage

1. Start the server:
    ```bash
    node server.js

2. Open your browser and visit:
    ```arduino
    http://localhost:3000
3. Dockerize the Application

    3.1. Build docker image.
    ```
    docker build -t node-express-docker .
    ```
    3.2. Run docker container.
    ```
    docker run -p 3000:3000 node-express-docker
    ```
    3.2. Run docker container in Detached Mode (Optional)
    ```
    docker run -d -p 3000:3000 node-express-docker
    ```
    3.2.1. Push image to docker hub
    ```
    docker push thoaitrands/node-express-docker
    ```
    3.3. Verify the Application
    ```
    http://localhost:3000
    ```

### 🛠️ Technologies Used
- Node.js: JavaScript runtime.
- Express.js: Web framework for Node.js.

## Folder Structure

```bash
    simple-nodejs/
    ├── server.js       # Main server file
    ├── package.json    # Project metadata and dependencies
    └── README.md       # Documentation
    ├── Dockerfile      # Dockerize
```

## Basic architech

## Advance architech

## DevOps setting

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes. 🙌
