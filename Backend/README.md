# Uber Clone Backend

## API Documentation

### POST /users/register

#### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

#### Request Body
- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user.
- `email` (string, required): The email of the user. Must be a valid email address.
- `password` (string, required): The password of the user. Must be at least 6 characters long.

#### Responses
- `200 OK`: User registered successfully.
  - Body: `{ token: string, user: object }`
- `400 Bad Request`: Validation error.
  - Body: `{ errors: array }`
- `500 Internal Server Error`: Server error.

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### How the Code is Required in the Endpoint
The code for the `/users/register` endpoint is structured as follows:

1. **Route Definition**: The route is defined in `routes/user.route.js`.
2. **Controller**: The controller logic is implemented in `controllers/user.controller.js`.
3. **Service**: The service logic for creating a user is implemented in `services/user.services.js`.
4. **Model**: The user model is defined in `models/user.model.js`.

The route uses `express-validator` to validate the request body. The controller handles the request, calls the service to create the user, and returns a response. The service interacts with the model to create the user in the database.


### POST /users/login

#### Description
This endpoint is used to log in an existing user. It requires the user's email and password.

#### Request Body
- `email` (string, required): The email of the user. Must be a valid email address.
- `password` (string, required): The password of the user. Must be at least 6 characters long.

#### Response
- `token` (string): The JWT token for the authenticated user.
- `user` (object): The authenticated user's details.
- `message` (string): A success message indicating successful login.
- `mymessage` 
controller handles the request, calls the service to create the user, and returns a response. The service interacts with the model to create the user in the database.