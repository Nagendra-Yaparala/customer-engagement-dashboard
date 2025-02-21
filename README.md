# 🚀 Customer Engagement Dashboard

### **📊 A full-stack dashboard to analyze user engagement, predict churn, and provide AI-driven retention strategies.**

---

## **📈 Overview**
Businesses need to understand how their users interact with their products. This **Customer Engagement Dashboard** helps track user activity, engagement scores, and retention risks. It also offers **AI-powered insights** to improve customer retention.  

The dashboard provides:  
👉 **User Analytics** – View user activity, engagement scores, and retention trends.  
👉 **Churn Prediction** – Identify users at risk of leaving the platform.  
👉 **AI Insights** – Get smart recommendations to improve user retention.  
👉 **Interactive Charts** – Visualize data using bar and pie charts.  

---

## **📈 Features**
### **1️⃣ Engagement Score Calculation 📊**
Each user has an **Engagement Score** based on:
- **Logins Frequency**
- **Feature Usage**
- **Time Spent on Platform**

📌 **Formula Used:**
```
Engagement Score = (Logins * 0.3) + (Feature Usage * 0.5) + (Time Spent * 0.2)
```
Higher scores mean more engaged users.

---

### **2️⃣ Churn Prediction 🔄**
📌 **Users are categorized into:**
- **High Risk** (Score < 50) ❌ – Likely to leave soon.  
- **Medium Risk** (Score 50-75) ⚠️ – Might leave if not engaged.  
- **Low Risk** (Score 75+) ✅ – Highly engaged users.  

---

### **3️⃣ AI Insights 🤖**
- Suggests **retention strategies** based on user behavior.
- Highlights **most-used** and **underperforming features**.

---

## **📈 Tech Stack**
### **Frontend:**  
- **React.js** – UI framework  
- **Material-UI** – Styled components  
- **Recharts** – Data visualization  

### **Backend:**  
- **Node.js + Express.js** – API development  
- **MongoDB** – NoSQL database  

---

## **📚 Setup Guide (Run the Project Locally)**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/customer-engagement-dashboard.git
cd customer-engagement-dashboard
```

### **2️⃣ Install Dependencies**
#### **Backend:**
```sh
cd backend
npm install
```
#### **Frontend:**
```sh
cd frontend
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the **backend** folder:
```
MONGO_URI=mongodb://localhost:27017/engagementDB
PORT=5000
```

Create a `.env` file in the **frontend** folder:
```
REACT_APP_API_URL=http://localhost:5000
```

### **4️⃣ Start the Backend**
```sh
cd backend
node server.js  # OR npm run dev (if using nodemon)
```

### **5️⃣ Start the Frontend**
```sh
cd frontend
npm start
```

👉 **Now open** `http://localhost:3000` **in your browser!**

---

## **📚 API Endpoints**
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/users` | GET | Fetch all user data |
| `/api/churn-prediction` | GET | Get churn risk analysis |
| `/api/user/:id` | GET | Get specific user details |

📌 **To test APIs, use** [Postman](https://www.postman.com/) or simply open in a browser.

---

## **📚 Folder Structure**
```
customer-engagement-dashboard/
│── frontend/       # React frontend
│── backend/        # Express.js backend
│── docs/           # Documentation
│── README.md       # Project Overview
│── .env.example    # Sample environment variables
│── package.json    
│── LICENSE         # Open-source license
```

---

## **📈 Screenshots**
### **📊 Dashboard with Charts & AI Insights**
![Dashboard Screenshot](assets/c_e_dashboard_1,c_e_dashboard_2))

---

## **📈 Future Improvements 🚀**
1️⃣ **Real AI Model** – Replace mock AI logic with an ML model.  
2️⃣ **Real-Time Analytics** – Display live engagement data.  
3️⃣ **Custom User Reports** – Export user data insights.  

---

## **📚 Author**
👨‍💻 **YAPARALA NAGENDRA**  
📧 Email: (nagendrayaparala@gmail.com)  
🔗 LinkedIn: (www.linkedin.com/in/yaparala-nagendra)

