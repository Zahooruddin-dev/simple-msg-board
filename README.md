# Mini Message Board

A simple message board built with Node.js, Express, and EJS. Users can view
messages, add new ones through a form, and open individual message pages. This
project was created to practice Express routing, form handling, and server-side
rendering.

---

## Preview

<img width="1920" height="1243" alt="1" src="./public/Screenshot 2026-01-21 224435" />

<img width="1920" height="1243" alt="2" src="./public/Screenshot 2026-01-21 224445" />

<img width="1920" height="1243" alt="3" src="./public/Screenshot 2026-01-21 224523" />

---

## Tech Stack

| Technology                   | Purpose                     |
| ---------------------------- | --------------------------- |
| **Node.js**                  | JavaScript runtime          |
| **Express.js 5**             | Web framework               |
| **EJS**                      | Templating engine           |
| **Neon**                     | Serverless Postgres hosting |
| **@neondatabase/serverless** | Neon's serverless driver    |
| **Render / Vercel**          | Deployment                  |

---

## Features

- **Create Messages** - Post new messages with your name
- **View Message Details** - Click the eye icon to see full message details
- **Responsive Design** - Fully responsive on all devices
- **Serverless Database** - Powered by Neon's serverless PostgreSQL

---

## 📁 Folder Structure

```
mini-msg-board/
├── app.js                 # Express application entry point
├── vercel.json            # Vercel deployment configuration
├── package.json           # Dependencies and scripts
│
├── db/
│   └── pool.js            # Neon database connection
│
├── routes/
│   └── index.js           # All route handlers (GET /, GET /new, POST /, GET /message/:id)
│
├── views/
│   ├── index.ejs          # Main message board page
│   ├── form.ejs           # New message form page
│   └── message.ejs        # Message detail page
│
├── public/
│   ├── styles.css         # All CSS styles
│   ├── favicon.ico        # Favicon files
│   └── ...                # Other favicon sizes
```

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- A [Neon](https://neon.tech) PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:Zahooruddin-dev/simple-msg-board.git
   cd mini-msg-board
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL=postgresql://username:password@your-neon-host/database?sslmode=require
   ```

4. **Create the database table**

   Run this SQL in your Neon console:

   ```sql
   CREATE TABLE messages (
       id SERIAL PRIMARY KEY,
       user_name VARCHAR(20) NOT NULL,
       text VARCHAR(200) NOT NULL,
       added TIMESTAMP DEFAULT NOW()
   );
   ```

5. **Start the server**

   ```bash
   node app.js
   ```

6. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## What I Learned

Through building this project, I learned:

- **EJS Templating** - Dynamic HTML rendering with embedded JavaScript
- **Neon Serverless** - Using Neon's serverless driver for edge-compatible
  database connections
- **MVC Architecture** - Separating concerns with routes, views, and database
  logic

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the curriculum
- [Neon](https://neon.tech) for serverless PostgreSQL
