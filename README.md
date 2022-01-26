# triviaGame

[Live demo](https://at-trivia-game.herokuapp.com/) hosted on _Heroku_.

[REST API](https://at-assignment-api.herokuapp.com/trivia) hosted on _Heroku_.

## Table of contents

-[General information](#general-information)

-[Technologies](#technologies)

-[Installation and usage](#installation-and-usage)

-[Maintainers](#maintainers)

## General information

**Start screen**
Application starts in Start screen. This view contains text input for player's name and options menu. From options menu, player can select difficulty, amount and category of questions. If player doesn't change those options, game will start with default values. Default values are currently set to 5 questions from all categories and all difficulties. Upon clicking Start button, app checks if entered username already exists in API database and returns id and current high score. If entered username doesn't exist in API database, new user is created along with unique id and default high score which is set to 0. Also clicking Start button will start actual game.

**Question screen**
Question screen is actual game. This view displays one question at time and answer options for it. By clicking answer option, next question is shown. Depending if user has clicked correct answer, 10 points is added to user's score. Upon answering the last question, next view is shown automatically.

**Results screen**
Result screen is shown after game is finished. In this view, player can view score and summary of questions. If score is higher than former high score, score will be updated to API database. In summary, app displays every question, and correct answer and player's answer below it. Correct answer is highlighted with green color. Restart and Reset buttons can be found below summary. Upon clicking restart, game starts again with same options. And upon clicking Reset, app takes player back to Start screen and resets former options and values.

## Technologies

Project is implemented with:

- Vue
- Javascript
- Vuex
- vue-router

## Installation and usage

**NOTE:** You will need _node_ and _npm_ installed on your machine

Clone down this repository:

```sh
git clone https://github.com/arttuhar/triviaGame.git
```

Install dependencies:

```sh
npm install
```

Start development server:

```sh
npm run dev
```

After starting the development server, you can visit app by using `localhost:3000` address on your browser.

## Maintainers

[Arttu Hartikainen (@arttuhar)](https://github.com/arttuhar)
[Timo Järvenpää (@TimoJarvenpaa)](https://github.com/TimoJarvenpaa)
