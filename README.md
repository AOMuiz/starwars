# Star Wars Movie / SWAPI API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using API from [SWAPI](https://swapi.co).<br>
To see this project in action, go to [Demo Star Wars](https://6bseh.csb.app/) on Code SandBox

## Preview

<span>
<img src="./docs/assets/initialpage.png" alt="preview"  width="270" />
<!-- <img src="./docs/assets/loadingstate.png" alt="preview"  width="270" /> -->
<img src="./docs/assets/error state.png" alt="preview"  width="270" />
<img src="./docs/assets/loadingselect-movie.png" alt="preview"  width="270" />
<img src="./docs/assets/moviedesc-marquee.png" alt="preview"  width="270" />
<img src="./docs/assets/moviedetail.png" alt="preview"  width="270" />
<img src="./docs/assets/tablefiltered.png" alt="preview"  width="270" />
<img src="./docs/assets/tableSorted-asc.png" alt="preview"  width="270" />
<img src="./docs/assets/tableSorted-desc.png" alt="preview"  width="270" />
</span>

<hr />

## Getting Started

Clone this repo :
`git clone https://github.com/AOMuiz/starwars`

Navigate to the root folder and install all dependencies :

- `yarn` or `npm install`

Start Development Mode :

- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Happy Hacking!

## A brief description of the project

### Task

> Build a Starwars Website Using Swapi api

> List all characters(name, height, gender) in a table based on selected movie.

> Filter table based on the selected gender.

> Sort the table by clicking on the header in ascending or descending order.

> Show the sum of the character and the total heights in cm(ft/in)

## Technologies Used

1. Used `React Js` for building the website.

2. Implemented website styling using `Styled Components`.

3. Used `Error Boundary` npm package for handling errors.

4. Used `fetch api` for data fecthing.

5. Created `Custom Hooks` for data fetching and rendering.

## Style Utilities

### Relative Unit

This project using relative unit based 10px. so you can use `1rem` which means `10px` propeties in css to help ours styling more easier handling Resposive.

### Media Queries

#### Relative Unit

| State           | Properties  |
| --------------- | ----------- |
| Default         | 1rem = 10px |
| max-width 768px | 1rem = 9px  |
| max-width 576px | 1rem = 8px  |

#### Container

| State            | Properties     |
| ---------------- | -------------- |
| Default          | width = 100%   |
| min-width 576px  | width = 540px  |
| min-width 768px  | width = 720px  |
| min-width 992px  | width = 960px  |
| min-width 1200px | width = 1140px |
