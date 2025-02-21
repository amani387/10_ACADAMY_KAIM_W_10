# Change Point Analysis & Statistical Modeling of Brent Oil Prices

## 📌 Project Overview  
This project focuses on analyzing **Brent oil prices** over time to detect **significant changes (change points)** and understand their **causes**. By using **statistical models and machine learning**, we aim to provide insights into how **political events, economic sanctions, and OPEC policies** impact oil prices.

## 📊 Business Objective  
- Detect **major price changes** in Brent oil using **time series analysis**.
- Identify **key political/economic events** that influenced these price shifts.
- Provide **data-driven insights** to investors, policymakers, and energy companies.

## 📂 Dataset  
**Source:** The dataset contains historical **daily Brent oil prices** from **May 20, 1987, to September 30, 2022**.  

- **Date:** The recorded date (formatted as `day-month-year`).
- **Price:** The price of Brent oil in USD per barrel.

## 🔥 Key Tasks  
### ✅ **Task 1: Data Analysis Workflow & Understanding the Model**  
- Load and preprocess the dataset.
- Perform **exploratory data analysis (EDA)** to visualize price trends.
- Select suitable **time series models** (e.g., **ARIMA, Bayesian Change Point Detection**).
- Define assumptions and limitations.

### ✅ **Task 2: Change Point Detection & Advanced Analysis**  
- Apply **Bayesian Change Point Detection (PyMC3)**.
- Use **ARIMA/GARCH** models for volatility analysis.
- Explore external factors like **GDP, inflation, and OPEC decisions**.
- Evaluate models using **RMSE, MAE, and R² scores**.

### ✅ **Task 3: Interactive Dashboard (Flask + React)**  
- Backend (**Flask**): Serve time series data & model outputs via APIs.
- Frontend (**React + Recharts/D3.js**):  
  - **Visualize oil price trends**.
  - **Highlight major price change points**.
  - **Allow users to explore event impacts on prices**.

## 🛠 Tech Stack  
- **Python**: `pandas`, `numpy`, `matplotlib`, `seaborn`, `PyMC3`, `statsmodels`
- **Machine Learning**: `scikit-learn`, `LSTM (TensorFlow/Keras)`
- **Backend**: `Flask` (API development)
- **Frontend**: `React`, `Recharts/D3.js` (interactive charts)
- **Deployment**: `Docker`, `Heroku` (optional)

## 🚀 How to Run the Project  
### **1️⃣ Setup Environment**
```bash
pip install -r requirements.txt
