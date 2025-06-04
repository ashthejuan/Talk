<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
<body>

<h1>Talk</h1>

<p>A real-time chat application built with a modern web stack, enabling seamless communication between users. This project utilizes a client-server architecture to provide instant messaging capabilities.</p>

<h2>Features</h2>
<ul>
  <li><strong>Real-time Messaging</strong>: Instant communication between users using WebSockets.</li>
  <li><strong>User Authentication</strong>: Secure login and registration system.</li>
  <li><strong>Responsive Design</strong>: Optimized for various devices and screen sizes.</li>
  <li><strong>Scalable Architecture</strong>: Modular codebase for easy maintenance and scalability.</li>
</ul>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend</strong>: React.js, HTML, CSS</li>
  <li><strong>Backend</strong>: Node.js, Express.js</li>
  <li><strong>Real-time Communication</strong>: Socket.IO</li>
  <li><strong>Database</strong>: MongoDB (via Mongoose)</li>
  <li><strong>Authentication</strong>: JSON Web Tokens (JWT)</li>
</ul>

<h2>Installation</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js and npm installed on your machine.</li>
  <li>MongoDB instance running locally or remotely.</li>
</ul>

<h3>Clone the Repository</h3>
<pre><code>git clone https://github.com/ashthejuan/Chat_application.git
cd Chat_application</code></pre>

<h3>Backend Setup</h3>
<pre><code>cd backend
npm install</code></pre>

<p>Create a <code>.env</code> file in the <code>backend</code> directory and add your environment variables:</p>
<pre><code>PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret</code></pre>

<p>Start the backend server:</p>
<pre><code>npm start</code></pre>

<h3>Frontend Setup</h3>
<pre><code>cd ../frontend
npm install</code></pre>

<p>Start the frontend development server:</p>
<pre><code>npm start</code></pre>

<p>The application should now be running at <a href="http://localhost:3000">http://localhost:3000</a>.</p>

<h2>Usage</h2>
<ol>
  <li>Register a new account or log in with existing credentials.</li>
  <li>Start a new chat or join existing chat rooms.</li>
  <li>Enjoy real-time messaging with other users.</li>
</ol>

<h2>Contributing</h2>
<p>Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>

</body>
</html>
