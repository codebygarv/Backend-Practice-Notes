import http from "http";
import app from "./app.js"

// initialzie server 
const server = http.createServer(app);
const PORT = process.env.PORT || 3030;

server.listen(PORT , () => {
    console.log(`PORT is listening on the port ${PORT}`)
})
