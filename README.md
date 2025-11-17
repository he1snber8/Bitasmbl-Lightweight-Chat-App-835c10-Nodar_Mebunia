# Bitasmbl-Lightweight-Chat-App-835c10-Nodar_Mebunia

## Description
Build a web application that allows users to join anonymous chatrooms and exchange messages in real-time using WebSockets. The focus is on fast communication, simple interface, and responsive updates without requiring user registration.

## Tech Stack
- Express.js
- React
- Socket.IO

## Requirements
- Allow users to join chatrooms without authentication
- Gracefully handle disconnected users and reconnections
- Handle multiple chatrooms simultaneously
- Display messages with timestamps and user identifiers (anonymous)
- Send and receive messages in real-time using WebSockets

## Installation
1. Clone the repository (replace the path if your repository name differs):

   git clone https://github.com/he1snber8/Bitasmbl-Lightweight-Chat-App-835c10-Nodar_Mebunia.git

2. Change into the project directory:

   cd Bitasmbl-Lightweight-Chat-App-835c10-Nodar_Mebunia

3. Backend (Express.js + Socket.IO):

   - Change to the backend directory (commonly named `server`):

     cd server

   - Install backend dependencies:

     npm install

4. Frontend (React):

   - Change to the frontend directory (commonly named `client`):

     cd ../client

   - Install frontend dependencies:

     npm install

Note: The repository structure assumed above follows a common pattern with `server` and `client` directories. Adjust directory names if your project uses different conventions.

## Usage
1. Start the backend server (run in a terminal):

   cd server
   npm start

   - The Express.js server will initialize and attach a Socket.IO server to accept WebSocket connections.

2. Start the frontend development server (run in a separate terminal):

   cd client
   npm start

   - The React app will run and connect to the backend Socket.IO server to join anonymous chatrooms and exchange messages in real-time.

3. Open the React application in your browser (commonly http://localhost:3000) and join any chatroom by name. No authentication is required.

4. To stop the servers, terminate the processes in their respective terminals (Ctrl+C).

## Implementation Steps
1. Initialize the repository and create two folders: `server` (Express.js) and `client` (React).
2. In `server`, initialize a Node project (npm init) and install Express.js and Socket.IO (`npm install express socket.io`).
3. Create an Express HTTP server and attach a Socket.IO instance to it to accept WebSocket connections.
4. Implement Socket.IO event handlers on the server to:
   - Allow a socket to join a named chatroom (socket.join(room)).
   - Broadcast messages to all sockets in the room.
   - Track connected sockets per room to support multiple chatrooms simultaneously.
   - Emit timestamps and an anonymous identifier with each message payload.
5. Handle disconnects and reconnections on the server by listening for the `disconnect` event and using Socket.IO's built-in reconnection behavior; optionally emit presence updates to remaining room members.
6. In `client`, bootstrap a React app and install the Socket.IO client (`npm install socket.io-client`).
7. Implement a UI that allows users to:
   - Enter or select a chatroom name and join it without authentication.
   - Send messages to the current room.
   - Display incoming messages in real-time with timestamp and anonymous user identifier.
8. Use Socket.IO client to:
   - Connect to the backend Socket.IO server.
   - Emit a join event with the chosen room name.
   - Emit message events with text payloads.
   - Listen for message broadcasts to update the UI immediately.
9. Implement client-side handling for connection loss and reconnection to restore room membership and fetch missed messages if desired (using Socket.IO reconnection events).
10. Test multiple simultaneous rooms by opening multiple browser windows/tabs, joining different room names, and verifying isolation of messages between rooms.

## API Endpoints (Optional)
- GET /health
  - Method: GET
  - Very short description: Basic health check endpoint returning server status. The real-time chat behavior is handled over WebSocket (Socket.IO) events rather than additional HTTP routes.