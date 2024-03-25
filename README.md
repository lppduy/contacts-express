
# Contacts API

## Introduction

This is a simple Contacts API built with Node.js, Express, and MongoDB. It provides endpoints for creating, reading, updating, and deleting contacts. It also includes user registration and login functionality.

## Installation

To install and run this project, follow these steps:

1. Clone the project to your machine:

```bash
git clone [https://github.com/lppduy/contacts-express]
```

2. Install the dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm start
```

## API Documentation

The API documentation is available at `/api-docs` route after starting the server. The documentation is built with Swagger UI.

## Endpoints

- User Registration: `POST /users/register`
- User Login: `POST /users/login`
- Get Current User: `POST /users/current`
- Get Contacts: `GET /contacts`
- Create Contact: `POST /contacts`
- Update Contact: `PUT /contacts/:id`
- Get Contact: `GET /contacts/:id`
- Delete Contact: `DELETE /contacts/:id`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

