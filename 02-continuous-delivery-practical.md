# Continuous integration practical

## Deploy to vercel
- Go to vercel.com and create an account
- Add new project
- Import your git repository
- Create a deployment

You have a deployed app! Vercel will create a preview of any branches you create, and a production deployment of anything in main.

Due to the steps you set up in the last practical, you won't be able to merge your changes with main unless your tests pass. Once you merge to main, vercel will deploy a new production version.

## Move your deploy steps to your code (*optional*)
You might want to keep all your CI-CD steps in code in the same place. To do this you can move the Vercel deploy steps to a github action too.

- Follow these steps: 
https://vercel.com/guides/how-can-i-use-github-actions-with-vercel
  - `uses: actions/checkout@v3` instead of `uses: actions/checkout@v2`
  - add the secrets to repo secrets not environment secrets!
- Add another status check 'Deploy-Preview' to your branch protection

## Make sure the deployment to pre-prod works before merging and deploying to production
You can put a status check on the deployment to pre prod action working if you've decided to move it to GitHub actions. You can alternatively require that the deployment to the 'Preview' environment works before merging.

## Reuse the build artifacts from the test and build step in the deployment step (*optional*)
To prevent duplication, you can reuse the build artefacts from the build stage in the deployment stage by linking them together: https://docs.github.com/en/actions/using-workflows/reusing-workflows

## You now have a basic CI-CD pipeline! 
You can check in your code, make sure it is built and tested and deploys to pre-production environments before merging. You have a manual step (approving the pull request) which triggers a deployment to production.

