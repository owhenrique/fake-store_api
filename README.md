# FAKE STORE API

## Prerequisites
- Node.js v16.14.2 or higher
- npm v8.5.0 or higher

## Getting Started

### Installation
To set up the project, make sure you have Node.js and npm installed on your system. You can download the latest version of Node.js from the official website: https://nodejs.org/

After installing Node.js, open your terminal or command prompt and navigate to the project directory.

1. Copy the `.env_template` file and rename it to `.env`. You can do this by running the following command:

```bash
cp .env_template .env
```
2. Open the .env file in a text editor and fill in the following environment variables:
- **API_PORT**: Set this to the desired port number for your API server (e.g., 8000).
- **DB_URL**: Set this to the MongoDB Compass connection string for your MongoDB database. If you don't have one yet, follow the instructions in the next section to create a database.

Next, run the following command to install the project dependencies:

```bash
$ npm install
```
## Development
To start the development server, use the following command:

```bash
$ npm run dev
```
This will start the development server and make your application available at the specified port (e.g., 8000). You can access the development version of your application by opening your web browser and navigating to http://localhost:8000.

## MongoDB Database Setup
To create a MongoDB database using MongoDB Compass, follow these steps:

Download and install MongoDB Compass from the official website: MongoDB Compass

Launch MongoDB Compass and click on the "Connect" button.

In the connection settings, choose "Fill in connection fields individually."

Enter the following information:

- **Hostname**: localhost (if your MongoDB server is running locally)
- **Port**: 27017 (default MongoDB port)
- **Authentication**: None (if you don't have authentication set up for your local MongoDB server)
Click the "Connect" button to connect to the MongoDB server.

Once connected, click the "Create Database" button to create a new database. Enter the desired database name and click "Create".

That's it! You have successfully created a MongoDB database using MongoDB Compass. Now, you can use the DB_URL environment variable in your .env file to connect to this database in your project.

## Swagger API Documentation

### Accessing API Documentation
This project includes Swagger API documentation, which provides detailed information about the available endpoints, request parameters, response formats, and more.

To access the API documentation, make sure your development server is running, and your application is available at the specified port (e.g., 8000). Then, open your web browser and navigate to the following URL:

http://localhost:API_PORT/api-docs

Replace `API_PORT` with the actual port number you have set in your `.env` file for the API server.

### Interacting with Swagger Documentation
The Swagger UI provides a user-friendly interface to interact with your API endpoints directly from the documentation. You can use this interface to test your endpoints, see example requests and responses, and explore the available API operations.

- Click on the available endpoints to expand and view the details of each operation.
- Click the "Try it out" button to open a form where you can input parameters and execute requests.
- After filling the required parameters, click the "Execute" button to see the response.

The Swagger API documentation makes it easier for developers and consumers of your API to understand and use your endpoints effectively.

## Project Information

- **Author**: Paulo Henrique Almeida
- **GitHub**: [https://github.com/owhenrique/](https://github.com/owhenrique/)
- **Email**: me.pauloalmeida@gmail.com
- **Instagram**: [https://www.instagram.com/henriqueabdon/](https://www.instagram.com/henriqueabdon/)