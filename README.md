
# Meditation Timer

![Meditation Timer Icon]([path/to/icon.png](https://raw.githubusercontent.com/Muunsparkss/meditationtimer/refs/heads/main/timer.ico))

Meditation Timer is a simple desktop application built with Electron that allows users to set a meditation timer. Once the timer runs out, the application will shut down the PC. This project is designed to help users manage their meditation sessions effectively.

## Features

- Set a meditation timer in minutes.
- Visual countdown display.
- Automatic PC shutdown when the timer expires.
- Modern UI with a dark theme.

## Installation

To install and run the Meditation Timer application, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/meditation-timer.git
   cd meditation-timer
   ```

2. **Install Dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Run the Application:**

   Start the application in development mode:

   ```bash
   npm start
   ```

4. **Build the Application:**

   To create a standalone executable, run:

   ```bash
   npm run package
   ```

   The installer will be located in the `dist` directory.

## Usage

1. Open the Meditation Timer application.
2. Enter the desired meditation time in minutes.
3. Click the "Start Timer" button to begin the countdown.
4. The application will display the remaining time and automatically shut down the PC when the timer reaches zero.

## Development

To contribute to the development of this application, follow these steps:

1. **Fork the Repository:**

   Click the "Fork" button at the top right of this page to create a copy of this repository under your GitHub account.

2. **Create a Branch:**

   Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

3. **Make Changes:**

   Implement your changes and commit them:

   ```bash
   git commit -m "Description of changes"
   ```

4. **Push Changes:**

   Push your changes to your forked repository:

   ```bash
   git push origin feature-name
   ```

5. **Create a Pull Request:**

   Open a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Electron](https://www.electronjs.org/) for providing the framework to build cross-platform desktop apps.
- [Node.js](https://nodejs.org/) for the runtime environment.

## Icon

The application icon is included in the repository. If you wish to use a custom icon, replace the existing icon file with your own in the appropriate format.
