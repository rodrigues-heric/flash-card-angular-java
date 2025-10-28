# Flashcards (Angular + Java SpringBoot)

This is the first version of the project and it only runs locally. Later this project will receive a web version with account management and persistent progress.

## Table of contents

1. [Goal](#goal)
2. [Launching the app](#launching-the-app)
3. [How to use](#how-to-use)

## Goal

This project goal is to create a software that allows the user to create flashcards using Angular (frontend) and Java with SpringBoot (backend). 
Flashcards are a study method for learning and retaining concepts chosen by the student. 

They consist of a two-sided card. The front contains a question or word, and the back contains the answer.
It's truly powerful with spaced repetition, a method that reinforces concepts over time.
With spaced repetition, short-term memory becomes long-term memory, improving retention.

## Launching the app

Clone the repo and navigate to the project root. In this version, the project only runs locally with a temporary database so you do not need to create any account previously. 

Create two terminal sessions, one for the frontend and other for the backend.

For the backend, navigate to `backend/flashcards` and follow the steps:

1. Run `./mvnw clean install` to install all the project packages
2. Run `./mvnw spring-boot:run` to start the backend of the application

You should see a message saying the compilation was successfull and the springboot is running

For the frontend, navigate to `frontend/flashcards` and follow the steps:

1. Run `npm install` to install all the project packages
2. Run `npm start` to start the frontend of the application 

You should see a message saying the compilation was successfull and the angular is running

## How to use

After launching the app you will see a home screen with no contents other than a message saying that there is no flashcards or decks. To create your first flashcard or deck, click the "+" button and choose the desired option.

For the deck creation you have to choose a name for it and confirm.

For the card creation you have to choose the face text of the card (what you want to guess) and the back text (the answer). A preview version will be flipping at the bottom before you confirm.

After the creation of the first card there will be a play button at the bottom right of the screen. Clicking it will take you to the play screens where each card will be displayed in a sequence and you will have to guess the answers. There will be a flip icon to check the answer and buttons to advance to next, or previous, cards.

This same logic will happen if you hit play inside a deck but only the cards inside of the deck will be shown.