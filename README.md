# Recipe Management System

This project is a recipe management system built using Node.js, Express.js, PostgreSQL, and Sequelize. It provides CRUD (Create, Read, Update, Delete) functionality for recipes and implements server-side data validation using Sequelize's built-in validation methods.

## Requirements

To run this project, you need to have the following dependencies installed:

- Node.js
- Express.js
- Sequelize
- Any API testing tool (e.g., Postman)

## Installation

1. Clone the repository to your local machine.
  
    ```bash
    git clone https://github.com/PatrickLisiecki/recipe-management-system
    ```
     
2. Open the project in an IDE and navigate to the ```api``` directory.

    ```bash
    cd recipe-management-system
    cd api
    ```

3. Install the dependencies in the ```api``` directory by running the following command:

   ```bash
   npm install
   ```

## Database Setup

1. Set up a PostgreSQL database and note down the connection details.
2. Create a ```.env``` file in the ```api``` directory and include the connection details in the following format:

   ```env
   DB_USER=<your_username>
   DB_HOST=<hostname_of_database>
   DB_NAME=<database_name>
   DB_PASSWORD=<your_password>
   DB_PORT=<database_port>
   ```

3. Create the table in your database by running the migration in the terminal:

   ```bash
   npx sequelize-cli db:migrate
   ```

4. (Optional) Add mock data to the database with the included seed file in the terminal:

   ```bash
   npx sequelize-cli db:seed:all
   ```

## Usage

1. Start the application by running the following command:

   ```bash
   npm start
   ```

2. Once the server is running, you can use any API testing tool like Postman to test the API endpoints.



## API Endpoints

The following API endpoints are available:

- `GET /recipes`: Retrieves a list of all recipes.
- `GET /recipes/:id`: Retrieves a specific recipe by ID.
- `POST /recipes`: Creates a new recipe.
- `PUT /recipes/:id`: Updates an existing recipe.
- `DELETE /recipes/:id`: Deletes a recipe.

## Data Validation

Server-side data validation is implemented using Sequelize's built-in validation methods. The following fields have specific validation rules:

- `title`: Required, minimum length of 3 characters.
- `description`: Required, maximum length of 500 characters.
- `ingredients`: Required, maximum length of 1000 characters.
- `instructions`: Required, maximum length of 5000 characters.

## Error Handling

The application handles errors and provides appropriate error messages for invalid requests or database errors. If an error occurs, the server responds with an appropriate HTTP status code and an error message in the response body.

## Testing

To test the application, you can use an API testing tool like Postman. Make requests to the API endpoints mentioned above and verify that the CRUD operations and data validations are working correctly.
