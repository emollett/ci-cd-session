# Continuous integration practical
## Pre requisites
- [Have npm installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 

## Set up a basic project
- Use create react app to create a basic project

```
npx create-react-app {{my-app-name}}
```

- Set up a new repo in your own git account (use the name you gave the app)
- cd into your new directory

```
cd {{my-app-name}}
```

- initialise git and create your first commit
```
git init
git status
git add .
git commit -m "first commit"
git remove add origin {{your repo here}}
git branch -M main
git push -u origin main
```

- get the App.js and app.css files from the folder in this repo
- replace the standard create react app ones with these
- run it, see it working, run the tests, fix the tests
- once you are happy, create a branch and commit to it and push the commit

```
git branch part-1
git checkout part-1
git add .
git commit -m "Say hello to a friend"
git push 
```

## Build the code and run the tests
- Go to actions
- Search for node.js
- Configure the "Node.js By GitHub Actions Build and test a Node.js project with npm." action
- Take a look at the logs, see it running your tests

## Prevent code that can't be built or doesn't pass tests from merging to main
- Go to settings
- Go to branches
- Add a branch protection rule to main
- "Require status checks to pass before merging"
- status check = build (16.x)
- Take a look at the other potential rules, anything you think looks useful?
- Create a branch, make a change, push it and make a pull request.
- See the checks pass
- Push a breaking change
- Hopefully see the checks fail!

## potential problems
- installing things globally https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
- 


