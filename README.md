# Yarn app

Sample app developed with TypeScript, Next.js and Styled Components. 

Some key features:

- Implemented a Skeleton Loader to increase perceived performance during data fetching, and avoid Content Layout Shift.
- Implemented debouncing in the search input to avoid unnecessary API queries while the user is still typing.
- Ensured accessibility of the page (e.g. using aria-live to announce order updates or errors to screen reader users).

## Screenshots

![1](https://github.com/user-attachments/assets/82f7c466-16c6-4e6e-ba50-58cea7a6b33c)

<details>
  <summary>More screenshots</summary>
  
  ### Search
  
![2](https://github.com/user-attachments/assets/f2f845a5-0e6c-4968-b9e8-62aca0754352)

 ### Product Modal

![3](https://github.com/user-attachments/assets/ea205803-f18a-461d-b90a-23dab623b20d)

 ### Product Modal (Order placed)
 
 ![4](https://github.com/user-attachments/assets/9e0f0e89-8885-411b-82b9-e212c0eb9de7)

### Loading State

![5](https://github.com/user-attachments/assets/f7430b15-a405-41c8-8305-61afa28126ee)

### Error States
#### Error State - Fetching Products

![Error 1](https://github.com/user-attachments/assets/4d64b9a1-6191-46fc-9a00-99e99fd0b8ef)


#### Error State - No Search Results

![Error 2](https://github.com/user-attachments/assets/779aa723-0b5e-4725-a9eb-70c6fd03d132)


 
</details>


## Getting started

### Prerequisites

- Node 18.x
- NPM >= 7.x

### How to run the project locally

1. Clone the project repository
2. Install the dependencies `npm install`
3. Build the project with `npm run build`
4. Run the project with `npm run dev`
5. Start the server with `npm run server`

### Running the tests

To run the tests, use `npm run test`

## About the project

- This project was bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).
- [JSON server](https://github.com/typicode/json-server) will give you a fake but realistic REST API using the static `server/db.json` file created after running `npm install`. If you make POST, PUT, PATCH or DELETE requests, changes will be automatically saved to `db.json`.

### Project stack

- React
- Next.js
- CSS with Styled-Components
- TypeScript
- Jest and React testing library

### Project structure

```bash
src/
  components # Some components already built
  hooks # Some useful react hooks
  icons # The icons used within the project
  pages # next.js pages directory, where you find the homepage named index.jsx
  test # Mocks for testing
  theme # Some base styles used across the project. You'll find the color variables here
  types # TypeScript types
public/ # files within this folder are publicly available. i.e. http://localhost:3000/favicon.ico
  products # product images
server # A fake API
```

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

[JSON server](https://github.com/typicode/json-server) will run concurrently in watch mode on port 4002 - [http://localhost:4002](http://localhost:4002).

### `npm run seed-db`

Resets `db.json` to the original initial data (`db.base.json`).\
This script runs automatically after `npm install`.

### `npm test`

Runs the Jest unit tests.

## Available endpoints

- `GET http://localhost:4002/products`: get the full list of products
- `GET http://localhost:4002/products?name_like={substring}`: search for products where the name includes `{substring}`
- `POST http://localhost:4002/orders`: create a new order.
  - Expects a JSON body object with
    - `productId` - The product `id` value
    - `amount` - The amount number
    - `color` - The value of the color select field

## Implementation details

A few of the choices/decisions I've made:

- Migrated to TypeScript to enhance type safety across the project.
- Did not upgrade library versions besides focusing on removing high vulnerabilities.
- To ensure accessibility was covered I used tools like Wave and Axe browser extensions and tested with Mac's VoiceOver screen reader.
- Introduced a Skeleton Loader to enhance perceived performance during data fetching.
- Implemented debouncing in the search input to avoid unnecessary API queries while the user is still typing.
- Used UserMessage component to give feedback to the user in the case of errors, informational messages or edge cases. This uses aria-live to announce changes to screen reader users.

### Production Readiness Considerations

Other aspects I would consider for production readiness:

- Setting up a CI/CD pipeline for automated testing and deployment.
- Implement more comprehensive testing (e.g. e2e or screenshot testing or jest-axe for a11y).
- Evaluate the use of the Context Provider API or alternative state management solutions as the complexity grows (e.g. stock management)
- Ensuring that the API responses are correct and conform to a given schema.
- Further SEO considerations: SSR, finalising metadata tags (e.g., `og:image`, `og:url`) or incorporating JSON-LD structured data for richer search results.
- Ensuring consistent theming (e.g. spacing) and further layout improvements (e.g. for wider screen users).
- Adding a React error boundary.
