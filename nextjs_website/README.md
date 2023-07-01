# Next.js Static Website with Directus CMS and Vercel CI/CD

This project is a static website built with Next.js, with content managed by Directus CMS, and continuous integration/continuous deployment (CI/CD) handled by Vercel.

## Requirements

- Node.js and npm (latest stable versions)
- Directus CMS project setup
- Vercel account

## Development

### Next.js Application

1. Setup: Create a new Next.js application using the `create-next-app` command.
2. Axios: Install the Axios library for making HTTP requests to the Directus API.
3. Data Fetching: Use Next.js's `getStaticProps` function to fetch data from Directus at build time.

### Directus CMS

1. Collections: Set up collections in Directus based on the content requirements of the website.
2. Fields: Create fields within these collections as necessary.
3. Content Creation: Test the setup by creating content in Directus and fetching it in the Next.js application.

### Vercel CI/CD

1. Repository Setup: Push the Next.js application to a Git repository.
2. Vercel Deployment: Import the project into Vercel from the Git repository.
3. Environment Variables: Add the Directus instance URL to the environment variables in the Vercel project settings if necessary.

## Deliverables

1. A Next.js static website that fetches data from Directus CMS.
2. The website is automatically deployed to Vercel whenever changes are pushed to the Git repository.
3. Documentation on how to manage content in Directus and how to update the website.

## Future Considerations

1. Implementing more complex features in Directus, such as reusable page components and trigger static site builds.
2. Expanding the website with more pages and more complex layouts.
3. Optimizing the website for performance and SEO.

For more details, please refer to the documentation files `manage_content.md` and `update_website.md`.