# Trivia Game

[Live Demo](https://at-trivia-game.herokuapp.com/) (Hosted on _Heroku_)

[REST API](https://at-assignment-api.herokuapp.com/trivia) (Hosted on _Heroku_)

[Component Tree Image](docs/component_tree.png)

## Table of Contents

- [General Information](#general-information)

- [Technologies](#technologies)

- [Installation and Usage](#installation-and-usage)

- [Contributors](#contributors)

## General Information

**Start Screen**

The application starts on the Start Screen. This view contains a text input field where the player can enter their chosen username. There's also an options menu from where the player can select the difficulty, the amount and the category of their desired trivia questions. If the player doesn't change these options, the game will use default values. The default values are currently set to 5 questions from all categories and all difficulties. The data is fetched from [a free API](https://opentdb.com/api_config.php). Upon clicking the Start Button, the application checks whether the entered username already exists in the proprietary REST API and updates the application state accordingly with the correct values for user id and high score. If the entered username doesn't exist in the API, a new user is created using a unique id and a high score of 0. Clicking the Start button will start the game. No authentication is required and playing with an existing username will just update the record for that user if necessary.

**Question Screen**

The Question Screen contains the actual game view. This view displays one trivia question at time and the answer options related to it. By clicking an answer, the next question is displayed. A correct answer is worth 10 points which will be added to the user's score. Upon answering the last question, the next view is shown automatically.

**Results Screen**

The Result Screen is shown after a game is finished. In this view, the total score and a summary of the questions and answers will be displayed. If score was higher than the former high score for that username,  it will be updated to the REST API. In the summary section, each individual question can be inspected again along with it's correct answer and the user's answer. The correct answer is highlighted in green. The Restart and Reset buttons can be found below the summary. Upon clicking Restart, the game starts again using the same options as before. Clicking Reset will return the user to the Start Screen and reset the application state.

## Technologies

The project is implemented using the following technologies:

- Vue
- Javascript
- Vuex
- vue-router

## Installation and Usage

**NOTE:** You will need _node_ and _npm_ installed on your machine

1) Clone the project repository:

```sh
git clone https://github.com/arttuhar/triviaGame.git
```

2) Install the dependencies while inside the project directory:

```sh
npm install
```

3) Start the development server:

```sh
npm run dev
```

After starting the development server, you can access the application by navigating to `localhost:3000` on your browser.

## Contributors

[Arttu Hartikainen (@arttuhar)](https://github.com/arttuhar)

[Timo Järvenpää (@TimoJarvenpaa)](https://github.com/TimoJarvenpaa)
