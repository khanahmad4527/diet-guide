# diet-guide

This web application allows users to log in with Firebase Google authentication and access three main features: Recipe, Calorie, and Diet. It utilizes data from the EDAMAM Try API for recipe information.

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo](#demo)


## Description

This web application allows users to log in with Firebase Google authentication and access three main features: Recipe, Calorie, and Diet. It utilizes data from the EDAMAM Try API for recipe information.

## Tech Stack

<h4 align="center">Frontend:</h4>
<p align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react" />
  <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="firebase" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="javascript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css" />
</p>


<h4 align="center">Deployed On:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercerl">
</p>

## Features

- Firebase Google Login
- Bottom Navigation with three main screens:
  1. Recipe
  2. Calorie
  3. Diet
- Recipe Screen with:
  - Search bar for searching recipes
  - List of recipes (default: Indian cuisine)
  - Recipe cards displaying:
    - Recipe Image
    - Title
    - Protein and Fat content (displayed using circular bars)
    - "Order Now" button (triggers in-app notification)
- Calorie Screen:
  - Displays recipes based on user-defined calorie intake
  - Recipe cards with the same details as the Recipe Screen
- Diet Screen:
  - User selects dietary preferences (refer to API Docs for options)
  - Recipes displayed based on user preferences
- Logout

## Installation

1. Clone the repository

```bash
git clone https://github.com/khanahmad4527/diet-guide.git
```
2. Install dependencies

```bash
npm install
```
3. Start the project

```bash
npm run start
```

## Usage

1. **Log In**: When you launch the app, you will be prompted to log in with your Google account using Firebase authentication.

2. **Navigation**: Utilize the bottom navigation bar to access three main screens:

   - **Recipe**: Discover a wide variety of recipes.
   - **Calorie**: Find recipes based on your desired calorie intake.
   - **Diet**: Tailor recipes to your dietary preferences.

## Recipe Screen

On the Recipe screen, you can:

- **Search for Recipes**: Use the search bar to find specific recipes.
- **View Recipes**: Explore a list of recipes displayed in card format.
- **Order Now**: By clicking "Order Now" on a recipe card, you will receive an in-app notification confirming your order.

## Calorie Screen

On the Calorie screen, you can:

- **Set Calorie Intake**: Specify your desired calorie intake to filter recipes accordingly.
- **View Recipes**: Browse recipes that align with your calorie criteria.

## Diet Screen

On the Diet screen, you can:

- **Select Dietary Preferences**: Choose dietary preferences based on the provided options.
- **View Recipes**: Discover recipes that match your selected dietary preferences.

To log out, click on the "Logout" option.


## Screenshots

<div align="center">
  <h3>Signup Page</h3>
  <img src="https://res.cloudinary.com/dalqx198y/image/upload/v1694351366/Screenshot_467_f8alai.png" width="500">
</div>

<div align="center">
  <h3>Home Page</h3>
  <img src="https://res.cloudinary.com/dalqx198y/image/upload/v1694352726/Screenshot_472_jun7hc.png" width="500">
  <img src="https://res.cloudinary.com/dalqx198y/image/upload/v1694352725/Screenshot_474_h2cd5o.png" width="500">
</div>

<div align="center">
  <h3>Calorie Page</h3>
  <img src="https://res.cloudinary.com/dalqx198y/image/upload/v1694352725/Screenshot_475_x7hwdr.png" width="500">
</div>

<div align="center">
  <h3>Diet page</h3>
  <img src="https://res.cloudinary.com/dalqx198y/image/upload/v1694352727/Screenshot_476_uxeolr.png" width="500">
</div>


## Demo

Check out the demo <a href="https://diet-guide.vercel.app" target="_blank">here</a>
