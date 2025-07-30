# Real-Time Collaboration Take-Home Assessment Starter

This monorepo contains a minimal setup for a real-time collaboration take-home assignment.

## Apps

- `apps/web`: Minimal Next.js app with connect/disconnect button.
- `apps/socket`: Empty Node.js app for your real-time server implementation.

## Assignment

Implement a real-time server that allows two users to connect to a project and add/remove components (an object e.x.: `{ id: 1, message: 'hello'}`) to shared in-memory data. All data should be stored in memory only. When one user adds/removes a component, the other user sees the update in real time.

- The web app should allow connecting/disconnecting to the socket server, and adding/removing components.
- The web app should allow to display all current components and allow users to select and delete one or multiple.
- The backend should use any real-time technology (socket.io, ws, or native sockets).
- All data should be in-memory only.
- The UI can be minimal / unstyled.

## Getting Started

Install dependencies:

```sh
pnpm install
```

Run both apps in development mode:

```sh
pnpm run dev
```

- The web app will be available at http://localhost:3000
- The socket server will run from `apps/socket/index.js` at the port you define there.

---

Good luck!
