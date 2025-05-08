# Deployment-CI-CD

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Description
A quiz program that allows aspiring developers to test their tech knowledge. This full-stack application is built with a React frontend, a Node.js/Express backend, and MongoDB for data storage. It includes CI/CD pipelines for automated testing and deployment to Render.


## User Story
AS A software engineer looking to integrate a CI/CD pipeline in a codebase<br>
I WANT a full-stack application that runs test cases when a Pull Request is made to the develop branch and automatically deploys to Render when the code is merged to main<br>
SO THAT I can ensure that all code integrations are clean and pass the proper requirements and that the application is constantly updated when major releases are made to the main branch

---

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Thida612/Deployment_CI-CD.git
   cd Deployment_CI-CD
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the `.env` file:
   - Create a `.env` file in the `server` directory.
   - Add the following environment variable:
     ```properties
     MONGODB_URI='mongodb://127.0.0.1:27017/techquiz'
     ```

4. Build the application:
   ```bash
   npm run build
   ```

5. Seed the MongoDB database:
   ```bash
   npm run seed
   ```

---

## Usage

1. Start the server:
   ```bash
   npm run start
   ```

2. Follow the on-screen prompts to test your tech knowledge.

3. Access the deployed web application at the following link:
   [Deployed Web App](https://deployment-ci-cd-1-a6yy.onrender.com)

---

## Contributing

Contact Thida Johnson for inquiries about contributing to this project.

---

## Tests

This project uses Cypress for testing. Available test scripts:

1. Run component tests:
   ```bash
   npm run test-component
   ```

2. Open the Cypress GUI for testing:
   ```bash
   npm run test-gui
   ```

---

## CI/CD Workflow

### Workflow Overview:
1. **Pull Requests to `develop`**:
   - When a pull request is created for the `develop` branch, GitHub Actions will:
     - Run Cypress component tests.
     - Display test results in the GitHub Actions tab.

2. **Merging to `main`**:
   - When code is pushed to the `main` branch, GitHub Actions will:
     - Trigger a deployment to Render using the `RENDER_DEPLOY_HOOK_URL`.

### Deployment:
The application is deployed to [Render](https://deployment-ci-cd-1-a6yy.onrender.com). Ensure the following secrets are set in your GitHub repository:
- `MONGODB_URI`: MongoDB connection string.
- `RENDER_DEPLOY_HOOK_URL`: Render deploy hook URL.

---

## Questions

For questions or support, contact:

- GitHub: [THida612](https://github.com/Thida612)
- Email: [thidajohnson7@gmail.com](mailto:thidajohnson7@gmail.com)

---

## License

This project is licensed under the MIT License. 

---

## About

This project was created to demonstrate a CI/CD pipeline for a full-stack application. It includes automated testing and deployment workflows to ensure code quality and seamless updates.

---




