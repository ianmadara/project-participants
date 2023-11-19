# Project Participants CLI App

This is an Express.js project that interacts with an external API and handles data from an Excel file to create project participants

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Environment Variables](#environment-variables)

## Getting Started

To run this project locally, follow the steps below.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/express-api-project.git

2. Navigate to Project folder:

   ```bash
   cd project-participants

3. Install Dependencies

   ```bash
   npm install

4. Create a .env file in the root of your project and add the required environment variables:
      ```bash
    APP_ENV=development
    BASE_URL=http://localhost
    PORT=3000
    API_KEY=test-api-key

5. Start the application
    ```bash
    npm start  

 ### Usage
   
 This Express.js application interacts with an external API to manage project participants. It reads data from Excel files and sends it to the API.

 #### Environment Variables

The following environment variables need to be set:

- PORT: Port on which the server will run. Default is 3000.
- API_KEY: API key required for authentication.
- APP_ENV : Determines wheather to use the local API or production api, default is `development`
- BASE_URL : defines the base API URL, default is `http://localhost` you can change to `https://test-api.not.nrc.no` after changing the `APP_ENV` to production

 #### Posting Project Participants

To post the excel data to the API run the below command. By default a local API is configured to save the participants in `src/data/project_participants.json` for testing purpose

    node src/main.js

