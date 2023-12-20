# Continuous delivery practical

## Deploy to vercel
- Go to vercel.com and create an account
- Add new project
- Import your git repository
- Create a deployment

You have a deployed app! Vercel will create a preview of any branches you create, and a production deployment of anything in main.

Due to the steps you set up in the last practical, you won't be able to merge your changes with main unless your tests pass. Once you merge to main, vercel will deploy a new production version.

## Move your deployment steps to your workflow
You might want to keep all your CI-CD steps in code in the same place. To do this you can move the Vercel deploy steps to a github action too.

- Follow these steps for the *preview* workflow: 
https://vercel.com/guides/how-can-i-use-github-actions-with-vercel
  - `uses: actions/checkout@v3` instead of `uses: actions/checkout@v2`
  - add the secrets to repo secrets not environment secrets!
- Merge the two workflows so the different steps run in the right order, and you are only building the code once. See the example [here](02-files/workflow_preview.yml)
- Update the git settings in vercel to add an ignored build step with the behaviour "Don't build anything". This will stop the automatic deployments vercel does and only use the actions to build and deploy.
- Update your status check for your branch protection so that you can only merge it after your new workflow has successfully run
- Add a new branch protection requirement that the deployment to the 'Preview' environment is successfull before merging.

## Add some environment variables
- Add some text that changes based on an environment variable. You could change a class too to make it really obvious. eg: 
``` jsx
<p className={`background-${process.env.REACT_APP_VARIABLE_NAME}`}>I'm going to change {process.env.REACT_APP_VARIABLE_NAME}</p>
```
- Run it locally setting your environment variable (see [here](https://create-react-app.dev/docs/adding-custom-environment-variables/) for how to add it locally on mac and windows)
- Add environment variables in github (with different values for different environments)
  - Settings -> Environments -> New Environment (you can create both your preview and production environments now if you'd like)
  - Select the environment you created -> Add variable
- Reference the environment variable in your workflow like so:
```yaml
env:
  REACT_APP_VARIABLE_NAME: ${{ vars.REACT_APP_VARIABLE_NAME }}
```
- You'll also need to set the environment the job is running in to the same as the environment you set the variable in eg:
```yaml
jobs:
  Build:
    runs-on: ubuntu-latest
    environment: Preview
```
- Run the workflow
- You should see the correct string for your environment
- See the example [here](02-files/workflow_preview_with_variable.yml) if you're having any issues

## Add a production deployment workflow
- Copy your previous workflow but change the on section so that instead of ignoring the main branch, it only runs on pushes to main:
```yaml
on:
  push:
    branches:
      - main
```
- Also change the environment to 'Production' so it pulls the right environment variables, and check the vercel tutorial you followed before for the production flags vercel requires
- See the example [here](02-files/worflow_production.yml) if you're having any issues
- Make sure you've created a production environment in github and added the environment variable
- Try merging your branch into main to see the production workflow run and deploy to the production vercel environment.

## You now have a basic CI-CD pipeline! 
You can check in your code, make sure it is built and tested and deploys to pre-production environments before merging. You have a manual step (approving the pull request) which triggers a deployment to production.

