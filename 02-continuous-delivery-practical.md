# Continuous integration practical

## Deploy to vercel
- Go to vercel.com and create an account
- Add new project
- Import your git repository
- Create a deployment

You have a deployed app! Vercel will create a preview of any branches you create, and a production deployment of anything in main.

Due to the steps you set up in the last practical, you won't be able to merge your changes with main unless your tests pass. Once you merge to main, vercel will deploy a new production version.

## Move your deploy steps to your code
You might want to keep all your CI-CD steps in code in the same place. To do this you can move the Vercel deploy steps to a github action too.

- Follow these steps for the preview workflow: 
https://vercel.com/guides/how-can-i-use-github-actions-with-vercel
  - `uses: actions/checkout@v3` instead of `uses: actions/checkout@v2`
  - add the secrets to repo secrets not environment secrets!
- Merge the two workflows so the different steps run in the right order, and you are only building the code once. See the example [here](02-files/workflow_preview.yml)
- Update your status check for your branch protection so that you can only merge it after your new workflow has successfully run
- Add a new branch protection requirement that the deployment to the 'Preview' environment is successfull before merging.

## Add some environment variables
- Add some text that changes based on an environment variable. You could change a class too to make it really obvious. eg: 
``` jsx
<p className={`background-${process.env.REACT_APP_VARIABLE_NAME}`}>I'm going to change {process.env.REACT_APP_VARIABLE_NAME}</p>
```
- run it locally setting your environment variable (see [here](https://create-react-app.dev/docs/adding-custom-environment-variables/) for how to add it locally on mac and windows)
- Add environment variables in github (with different values for different environments)
- Reference the environment variable in your workflow like so:
```yaml
env:
  REACT_APP_VARIABLE_NAME: ${{ vars.REACT_APP_VARIABLE_NAME }}
```
- You should see the correct string for your environment
- See the example [here](02-files/workflow_preview_with_variable.yml) if you're having any issues

## Add a deployment workflow
- Copy your previous workflow but change the on section so that instead of ignoring the main branch, it only runs on pushes to main:
```yaml
on:
  push:
    branches:
      - main
```
- Also change the environment to 'Production' so it pulls the right environment variables
- See the example [here](02-files/worflow_production.yml) if you're having any issues
- Try merging your branch into main to see the production workflow run and deploy to the production vercel environment.

## You now have a basic CI-CD pipeline! 
You can check in your code, make sure it is built and tested and deploys to pre-production environments before merging. You have a manual step (approving the pull request) which triggers a deployment to production.

