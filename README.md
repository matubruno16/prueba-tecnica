## Weather Application - Adistec Technical Challenge

## Description of the APP

This is an application that allows to obtain the current weather of a city using the Open Weather API. The data is obtained through the **RapidAPI** platform and processed to display information such as temperature, humidity, and weather condition in real time.

## Technologies used

- Node.js
- **JavaScript**
- **Axios**
- **Fetch API**
- DOM manipulation
- **Git and GitHub**

## Technical challenge requirements

- Git repository basics
- Iteration handling
- Object handling
- Function handling
- HTTPS request
- Constructors
- Basic DOM manipulation

---

## Project structure

```
📁 weather-app
│─── 📁 src
    ├─── 📁 controllers # Logic for handling weather requests and responses.
      ├─── 📄 weather.controller.js # Controller to handle weather data.
    ├─── 📁 models # Structure of weather data.
      ├─── 📄 weather.model.js # Weather data model.
    ├─── 📁 public # Static files such as CSS and JS.
      ├─── 📁 css # Application styles.
        ├─── 📄 styles.css # Main styles.
      ├─── 📁 js # Client logic scripts.
        ├─── 📄 weather.js # Logic to interact with the form.
    ├─── 📁 routes # Define API routes.
          ├── 📄 weather.routes.js # Routes for weather forecasting.
    ├─── 📁 services # Interaction with external APIs.
      ├─── 📄 weather.services.js # Service to get weather data.
    ├─── 📁 view # Templates for user interface.
      ├─── 📄 weather.html # User interface for forecast.
│─── 📄 index.js # Server initialization and configuration.
│─── 📄 package.json # Project dependencies and configuration.
│─── 📄 README.md # Project documentation.

```

## Installation and execution

1. Clone the repository:

```
git clone https://github.com/matubruno16/prueba-tecnica.git
```

2. Access the project directory:
``` 
cd prueba-tecnica
```

3. Install dependencies:
```
npm install
```

4. Run the application:
```
npm start
```

## Useful links
- [OpenWeather API](https://rapidapi.com/worldapi/api/open-weather13)
- [Node.js](https://nodejs.org/)
- [Axios](https://axios-http.com/)
- [Repository](https://github.com/matubruno16/prueba-tecnica.git)

## Developed by
This project was developed by **Matias Ceferino Bruno** as part of a technical challenge for **Adistec**.
