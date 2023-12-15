# Continuous integration practical

## Set up a basic project
- Use create react app to create a basic project
- Set up a new repo in your own git account
- cd into your new directory
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

- get the App.js from the folder in this repo
- replace the standard create react app one with this
- run it, see it working, run the tests, fix the tests
- once you are happy, create a branch and commit to it and push the commit

```
git branch part-1
git checkout part-1
git add .
git commit -m "Say hello to a friend"
git push 
```

## Set up some github actions to build the code and run tests

