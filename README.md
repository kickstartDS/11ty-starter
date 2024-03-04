# 11ty / Eleventy Starter Project

This project is a starter/template for building static websites using the [11ty](https://www.11ty.dev/) (Eleventy) static site generator. It provides a nearly opinionless foundation to continue building on, making it perfect for simple multi-page sites. This project is pre-configured with [@kickstartds/ds-agency](https://github.com/kickstartDS/ds-agency) for global styles and components and uses [@kickstartds/eleventy-plugin-kickstartds](https://github.com/kickstartDS/eleventy-plugin-kickstartds) for additional Eleventy features.

## Deploy your own

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kickstartDS/11ty-starter)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FkickstartDS%2F11ty-starter)

## Features

- Minimal setup: Just enough to get you started with 11ty.
- ES6 and JSX support: Write your templates using modern JavaScript with [Babel](https://babeljs.io/).
- A simple, customizable base layout.
- Basic sample pages to get you started.
- Pre-configured with [@kickstartds/ds-agency](https://github.com/kickstartDS/ds-agency) for global styles and components.
- Uses [@kickstartds/eleventy-plugin-kickstartds](https://github.com/kickstartDS/eleventy-plugin-kickstartds) for additional Eleventy features.
- Includes a `PageWrapper` component for consistent page structure.
- Navigation is automatically generated from your Eleventy collections.
- Includes a header and footer component with navigation links.

## Getting Started

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm start`.
4. Build the site with `npm run build`.

```
git clone https://github.com/kickstartDS/11ty-starter.git
cd 11ty-starter
npm install
npm start
```

## Project Structure

- `src/`: This is where your 11ty pages, includes, and data live.
  - `index.tsx`: The main entry point for your site.
  - `_includes/`: This is where your layouts and partials live.
  - `_data/`: This is where your 11ty global data files live.
- `.eleventy.js`: This is the Eleventy config file.
- `package.json`: This is where your JavaScript dependencies and scripts live.

## Usage

### Design System

Implementation is based on the `@kickstartds/ds-agency` package, which is a pre-configured Design System provided by kickstartDS. It's used as a base in this 11ty starter project to provide a set of ready-to-use components and features, allowing you to focus on what makes your project unique.  
The `@kickstartds/ds-agency` package also provides global styles and scripts ready for import.

`@kickstartds/ds-agency` itself is based on the `@kickstartds/ds-starter` package, a starter to create your own, tailer-made (and not necessarily agency based!) Design System. Described in detail [here](https://github.com/kickstartDS/ds-starter). It provides a ready-to-use Design System with pre-configured features such as:

- Semantic token structure
- Exemplary components (Button, Headline, and TeaserCard)
- Full page demo, recipe demo, and rudimentary demo docs
- Storybook integration with hot reload for all code changes
- Playroom integration for prototyping
- Bundling of the Design System for use with and without React
- Automatic, semantic release handling using `auto`

### Menus and Navigation

Navigation is automatically generated from your Eleventy collections. This is done by adding the `eleventyNavigation` object to your front matter data in your `.tsx` files. Assign a unique string to the `key` property inside of `eleventyNavigation` to add the page to the navigation. You can also specify the `order` property to control the order of the navigation items.

## Customizing

This starter is highly customizable. Here are some files you might want to edit:

1. `src/_data/meta.js`: This file contains metadata for your site, such as the site name, description, and author information. You can edit these values to suit your needs.

2. `src/_data/logo.json`: This file defines the logo of your site. You can replace the `src` value with the path to your own logo file.

3. `src/_includes/_opengraph.njk` and `src/_includes/_twittercard.njk`: These files contain meta tags for Open Graph and Twitter Cards, respectively. You can edit these files to customize how your site appears when shared on social media.

4. `src/_includes/base.njk`: This file is the base layout for your site. It includes the HTML `head` and `body` tags, as well as includes for the Open Graph and Twitter Card meta tags. You can customize this file to change the overall layout of your site.

5. `src/_includes/PageWrapper.tsx`: This file is a React component that wraps around the content of each page. It includes the header and footer components. You can customize this file to change the structure of your pages.

6. `src/index.tsx`: This file is the main entry point for your site. It exports a React component that renders the homepage of your site. You can edit this file to customize the content of your homepage, or create new `.tsx` files in the `src/` directory to add more pages to your site.

Remember to run `npm start` to start the development server and see your changes in real time.

##

## Deploy this to your own site

Deploy this Eleventy site in just a few clicks on these services:

- [Get your own Eleventy web site on Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/kickstartDS/11ty-starter)
- If you run Eleventy locally you can drag your `_site` folder to [`drop.netlify.com`](https://drop.netlify.com/) to upload it without using `git`.
- [Get your own Eleventy web site on Vercel](https://vercel.com/import/project?template=kickstartDS%2F11ty-starter)
- [Try it out on Stackblitz](https://stackblitz.com/github/kickstartDS/11ty-starter)
- Read more about [Deploying an Eleventy project](https://www.11ty.dev/docs/deployment/) to the web.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is dual licensed under the MIT and Apache 2.0 licenses. For more information, see the `LICENSE` file.

## Questions?

If you have questions, please open an issue and we'll do our best to help.
