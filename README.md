# Readme

## To do

This will touch on the Next app router, client and server routes, API routes, layouts.

### 0.
- you can use any database setup you want, but here I have used MongoDB
- install and set up MongoDB and Compass (see below)
- create a Next 13 project and npm install `mongoose`

### 1.
- create a simple MongoDB model and scheme with some home page content (see src/model/Home.ts)
- create a page that connect to the database and displays the data in some way, this must be a server page
- try it yourself, a succesful attempt is here: src/components/Data.tsx

### 2.
- create a simple MongoDB model and scheme
- create a NEXT api route (https://nextjs.org/docs/pages/building-your-application/routing/api-routes) with a POST method
- map the POST route to the Mongo `create` and make a button that posts a new item to MongoDB on click
- check whether the new item is added (e.g. by using Compass)

### 3.
- create API routes for GET, POST, DELETE and PATCH (or PUT) and map them to the MongoDB methods
- create simple components to make these requests, using fetch or your data fetching library of choice
- now you have completely unlocked the database via the Next API route

### 4.
- now you have some components to throw around, create some more pages, with a nested structure, with at least 2 branches and 3 levels deep
- you should have a layout already; create a new layout and apply it to one of the branches
- create a navigation for each branch and via layouts make sure every branch has the correct navigation
- create another branch which handles parameters, using the `[slug]` folder name

Next steps:
- integrate shadcn and tailwind
- ...

## To run this project

Install MongoDB:
- `brew tap mongodb/brew`
- `brew install mongodb-community`
- `brew services start mongodb-community`
- create a database, e.g. with Compass (https://www.mongodb.com/products/tools/compass)
- add the URI to env file, this is usually `mongodb://127.0.0.1:27017/MY_DATABASE_NAME` (obviously replace "MY_DATABASE_NAME" with YOUR database name)

Install packages
- `npm i`

To run:
- `brew services start mongodb-community` (if not running already)
- `npm run dev`
