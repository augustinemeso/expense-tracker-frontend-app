## Expense Tracker Application ##

# OVERVIEW #

The Expense Tracker Application is a simple and efficient tool to help users track their daily expenses. It provides functionalities such as adding, editing, and deleting expenses while ensuring data persistence through a PostgreSQL database.

### Features ###
✔️ User authentication (Login & Registration)
✔️ Add, edit, and delete expenses
✔️ View all expenses in a structured format
✔️ Secure backend using Flask & PostgreSQL
✔️ Responsive and modern UI with TailwindCSS
✔️ Deployed backend on Render

#### Tech Stack ####
Frontend
⚡ React (Vite)

🎨 TailwindCSS

🔄 React Router

Backend
🐍 Flask

🛢️ PostgreSQL

🔒 JWT Authentication

💻 Setup Instructions
1️⃣ Clone the Repository
sh
Copy
Edit
cd expense-tracker
2️⃣ Install Frontend Dependencies
sh
Copy
Edit
cd frontend
npm install
3️⃣ Run the Frontend (Vite)
sh
Copy
Edit
npm run dev
4️⃣ Set Up the Backend
sh
Copy
Edit
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
Run the Backend
sh
Copy
Edit
python3 app.py
 Access the Application
Frontend: http://localhost:5173

Backend: http://localhost:5000

🌍 Deployment
Frontend Deployed On: vercel

Backend Deployed On: Render

🚨 Issues & Challenges Faced
🔹 Handling authentication & security with Flask
🔹 Ensuring smooth communication between frontend & backend
🔹 Implementing CRUD operations efficiently

🔮 Future Enhancements
✅ Add charts and graphs for better expense visualization
✅ Implement monthly budget tracking
✅ Add income tracking


