# Pomodoro Timer

A sleek and intuitive Pomodoro Timer built with HTML, CSS, and JavaScript to help improve focus and productivity through the Pomodoro Technique. This application features a visually engaging circular countdown, responsive design, and audio feedback when the timer completes.

## Features

* 25-minute default Pomodoro session
* Circular progress animation to visualize time remaining
* Start, pause, resume, and reset timer controls
* Responsive layout for both desktop and mobile devices
* Audio notification when the timer ends
* Modern and minimal design using elegant typography and gradients
* Accessible HTML structure with ARIA support for screen readers

## Demo

You can try the live demo here:
[Live Demo](https://your-username.github.io/pomodoro-timer)
(Replace the link with your GitHub Pages URL after deploying)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pomodoro-timer.git](https://github.com/Grimarks/Pomodoro.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pomodoro-timer
   ```

3. Open `index.html` in your browser, or use a local server for best results (especially for audio support):

   ```bash
   npx live-server
   ```

   Alternatively, you can install `live-server` globally:

   ```bash
   npm install -g live-server
   live-server
   ```

## Usage

* Open the application in a browser
* Click **Start** to begin the 25-minute session
* Use **Pause** to stop the timer (click again to resume)
* Click **Reset** to stop and reset the timer to 25:00
* A bell sound will play when the timer reaches 00:00

## Project Structure

```
pomodoro-timer/
├── index.html        # Main HTML file
├── style.css         # Styling including animations and responsiveness
├── app.js            # JavaScript logic for timer and interactions
├── sounds/
│   └── bell.mp3      # Sound played when the timer ends
└── README.md         # Project documentation
```

## Technologies Used

* HTML5 for structure and semantic markup
* CSS3 for layout, animation, and modern visual design
* JavaScript for timer logic, user interaction, and state handling
* Google Fonts (EB Garamond, Fira Sans, Droid Sans Mono) for clean and readable typography
