# The Eras Tour Surprise Song Bingo Frontend

This is the backend part of the The Eras Tour Surprise Song Bingo project, responsible for managing data and providing APIs for the frontend.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Tech Used](#tech-used)
- [Contact](#contact)
- [License](#license)

## Getting Started

To run the frontend locally on your machine, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/h-fcosta/bingo-eras-tour-frontend.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using a package manager like npm or yarn:

```bash
  cd bingo-eras-tour-frontend
  npm install
```

3. **Configure the enviroment variables**: API URL to access the data:

```bash
  REACT_APP_API_URL
```

4. **Start the Development Server**: Run the development server to view the application in your browser?

```bash
  npm start
```

5. **Access the Application**: Open `http://localhost:3000` to access the application

## Features

- The application fetches the songs and singles from the API and render the data in bingo-like table.
- Songs already played in the tour have a darker background and information of where and when played.
- All songs have the Spotify link.

## Tech Used

- React
- Axios
- TypeScript
- Styled Components

## Contact

For any questions and suggestions, feel free to contact me at [henriquefcosta19@gmail.com]

## License

This project is licensed under the MIT License - see the LICENSE file for details.
