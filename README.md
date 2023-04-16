# Helper Tool App

## Overview
This app was created for the Chingu Voyage 43 group project. It gives users a clean space to organize their daily activities and improve their productivity, providing a variety of widgets like sticky notes and timers.

LIVE LINK: https://chingu-voyages.github.io/v43-tier2-team-24/ 

## Features
+ Sidebar buttons can easily be rearranged and auto-sorted by dragging and dropping into preferred order (using dnd-kit)
+ Widgets can be rearranged into any position by clicking and dragging around the whole board (using react-draggable)
+ Responsive UI for accessibility on different devices (Tailwind CSS)
+ Fast rendering times enabled by Vite with React

## Running the project
From your terminal:
1. Clone the repository to your local machine
``` git clone https://github.com/chingu-voyages/v43-tier2-team-24.git ```
2. Change the directory to the project ``` cd v43-tier2-team-24 ```
3. Install all dependencies by running ``` npm install ```
4. Start the client by running ``` npm run dev ```

The app will start running on http://localhost:3000

## Dependencies
* Vite with React
* Tailwind CSS
* dnd-kit (https://dndkit.com/)
* react-draggable (https://github.com/react-grid-layout/react-draggable)

## Future work
- Clicking on a sidebar button should toggle the corresponding widget on/off on the board
- Allow for full functionality of each widget
- Enable sidebar buttons and widget positions on board to persist after refresh (e.g. localStorage, cookies)
- Implement feature to allow users to change background images and enable light/dark modes
- Features to allow users to increase available widgets on board (via easy-to-use buttons and/or plugin architecture)