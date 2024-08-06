
# GraphQL with React.js and Node.js Example

This project demonstrates how to set up a GraphQL API with Node.js and consume it in a React.js application using Apollo Client.

## Project Structure

```
/graphql-react-example
│
├── /server
│   ├── index.js           # Main server file
│   └── package.json       # Server dependencies
│
└── /client
    ├── /src
    │   ├── apolloClient.js # Apollo Client setup
    │   └── App.js          # Main React component
    ├── package.json        # Client dependencies
    └── public
        └── index.html      # Main HTML file
```

## Setup Instructions

### Server

1. **Navigate to the server directory:**

    ```bash
    cd server
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the server:**

    ```bash
    node index.js
    ```

    The server will be available at `http://localhost:4000/graphql`.

### Client

1. **Navigate to the client directory:**

    ```bash
    cd client
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the React application:**

    ```bash
    npm start
    ```

    The React app will be available at `http://localhost:3000`.

## Usage

1. **Ensure the GraphQL server is running** at `http://localhost:4000/graphql`.

2. **Start the React application** and navigate to `http://localhost:3000` to see the data fetched from the GraphQL server.

## GraphQL Queries

The GraphQL server supports these queries:

- **hello**: Returns a greeting message.
- **number**: Returns a fixed number.

Example query:

```graphql
{
  hello
  number
}
```

## Troubleshooting

- **Check server logs** for errors.
- **Inspect the browser console** for client-side issues.
- **Verify server availability** at the provided URL.

## License

This project is licensed under the MIT License.

---

Feel free to adjust as needed!
