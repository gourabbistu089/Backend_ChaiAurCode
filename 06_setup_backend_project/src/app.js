import express from "express";
import cors from 'cors'
const app = express();

// Enable cors so that the react app can make requests to the express server
// The origin is set to the value of the CORS_ORIGIN environment variable
// The credentials option is set to true so that the server can send back cookies
app.use(
    cors({
            origin:process.env.CORS_ORIGIN,
            credentials:true
        })
    )
// Parse the request body as json
app.use(express.json());
// Parse the request body as url encoded (for forms)
app.use(express.urlencoded({ extended: true }));
// Serve static files from the public folder
app.use(express.static('public'))
export { app };

