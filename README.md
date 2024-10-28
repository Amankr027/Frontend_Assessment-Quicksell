# Kanban Board Application - Frontend Assessment for QuickSell

This is a React-based Kanban board application developed as part of a frontend assessment for QuickSell. The application fetches task data from an API and allows users to group and sort tasks dynamically, providing a user-friendly interface for task management.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [API](#api)
- [Technical Details](#technical-details)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dynamic Grouping**: Allows users to group tasks by status, user, or priority.
- **Sorting Options**: Sort tasks by priority (descending) or title (ascending).
- **Persistent Settings**: Saves user preferences for grouping and sorting, even after a page reload.
- **Responsive Design**: The application is fully responsive and adheres to the provided design specifications.

## Demo

- Run the application locally or check out the [GitHub Repository](https://github.com/Amankr027/Frontend_Assessment-Quicksell) for source code and additional details.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Amankr027/Frontend_Assessment-Quicksell.git
    cd Frontend_Assessment-Quicksell
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Usage

1. **Grouping**: Use the dropdown menu to group tasks by status, user, or priority.
2. **Sorting**: Choose between sorting tasks by priority or title.
3. **Persistent Settings**: The app remembers your last grouping and sorting preferences across sessions.

## Project Structure

```plaintext
├── public
│   └── index.html               # Main HTML file
├── src
│   ├── assets                   # Static assets (e.g., images, icons)
│   ├── components               # Reusable components
│   │   ├── Board                # Board component to display grouped tasks
│   │   │   ├── index.css
│   │   │   └── index.jsx
│   │   ├── Dropdowns            # Dropdown components for grouping and sorting
│   │   ├── Layout               # Main layout component
│   │   ├── List                 # Components for task lists within the board
│   │   │   ├── column.css
│   │   │   └── index.jsx
│   │   ├── Nav                  # Navigation bar component
│   │   ├── Profile              # User profile component
│   │   └── Spinner              # Loading spinner component
│   ├── help                     # Helper functions for API and data processing
│   ├── App.css                  # Global styles
│   ├── App.js                   # Main application component
│   ├── App.test.tsx             # Unit tests for the App component
│   ├── constants.js             # Contains constants (e.g., API URL)
│   ├── index.css                # Global CSS
│   └── index.js                 # Entry point for the application
└── .gitignore                   # Git ignore file


```

## Components

- **App**: The main component that manages state and renders other components, including `Nav`, `Spinner`, and `Board`.
- **Board**: Displays tasks grouped by the selected criteria (status, user, or priority).
- **Dropdowns**: Components for grouping and sorting options.
- **List**: Renders task lists within each group column on the board.
- **Nav**: Navigation bar for grouping and sorting options.
- **Profile**: Displays user profile details.
- **Spinner**: Loading spinner shown during data fetches.

## API

- **Endpoint**: The application fetches data from an API to populate the Kanban board.

    ```plaintext
    https://api.quicksell.co/v1/internal/frontend-assignment
    ```

    The API response includes tasks with properties like status, priority, title, and assigned user.

## Technical Details

- **React**: Built with React functional components and hooks, including `useState`, `useEffect`, `useCallback`, and `useMemo`.
- **CSS Styling**: Designed with pure CSS (no external libraries), maintaining a responsive and clean UI.
- **State Management**: Manages user preferences (grouping and sorting) with local storage, ensuring persistence across sessions.
- **Helper Functions**: Located in the `help` folder to handle tasks like grouping, sorting, and API data processing.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Make your changes and commit:

    ```bash
    git commit -m 'Add your feature'
    ```

4. Push to your branch:

    ```bash
    git push origin feature/your-feature-name
    ```

5. Open a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
