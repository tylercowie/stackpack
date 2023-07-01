# Updating the Website

This document provides a guide on how to update the website developed with Next.js, Directus CMS, and Vercel CI/CD.

## Updating Content in Directus CMS

1. Log into your Directus CMS account.
2. Navigate to the `Collections` section.
3. Select the collection you want to update (e.g., `site_content` or `languages`).
4. Find the item you want to update and click on it.
5. Make the necessary changes in the fields.
6. Click `Save` to apply the changes.

## Updating the Next.js Application

1. Open your code editor and navigate to the Next.js project directory.
2. Make the necessary changes in the relevant files.
3. Test your changes locally by running `npm run dev` in the terminal.
4. If everything works as expected, commit your changes with git using `git commit -m "Your commit message"`.
5. Push your changes to the remote repository using `git push`.

## Deploying Updates with Vercel

1. Once you push your changes to the remote repository, Vercel will automatically detect the changes and start a new deployment.
2. You can monitor the deployment process in your Vercel dashboard.
3. Once the deployment is successful, your changes will be live on the website.

Remember, any changes made in Directus CMS will be fetched at build time by the Next.js application using the `getStaticProps` function. Therefore, after updating content in Directus, you may need to trigger a new build in Vercel for the changes to reflect on the live website.