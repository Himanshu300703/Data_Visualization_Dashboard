## Data Visulization Dashboard  
This project is a data visualization dashboard that uses a MongoDB database to store and retrieve data, and presents it through a modern and interactive frontend interface. The backend is built using Flask (Python) to handle API requests, and the frontend is developed using React.js with various charting libraries to dynamically visualize data from the database.

### Tech Stack

- **Backend** : Python, Flask, MongoDB
- **Frontend** : React.js, Chart.js, ApexCharts
- **Database** : MongoDB

### Project Structure
![image](https://github.com/user-attachments/assets/cab7bd1c-73d2-4040-8a85-2c5dfe04e832)

### Installation

### Backend

1. Navigate to the backend directory:

    ~cd backend


2. Install the backend dependencies:

    ~pip install -r requirements.txt


### Frontend

1. Navigate to the frontend directory:

    ~cd frontend


2. Install the frontend dependencies:

    ~npm install


### Running the Project

### Backend

1. Start the Flask server:

    ~python app.py

   The backend API will run on `http://127.0.0.1:5000/`.

### Frontend

1. Start the React development server:

    ~npm start

   The frontend will run on `http://localhost:3000/`.

### API Endpoints

- **GET** `/api/data`: Fetch all data from the MongoDB collection in JSON format.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

## Acknowledgements

- [Flask](https://flask.palletsprojects.com/)
- [React](https://reactjs.org/)
- [Chart.js](https://www.chartjs.org/)
