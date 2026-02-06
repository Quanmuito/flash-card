# Flash Card Installation Guide

This guide contains all technical information for developers who want to set up, build, and deploy the Flash Card application.

## Tech Stack

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 5.7.0
- **Routing**: React Router DOM 7.13.0
- **Internationalization**: i18next with react-i18next
- **Form Handling**: React Hook Form
- **Build Tool**: React Scripts 5.0.1
- **Containerization**: Docker with Nginx
- **Deployment**: GitHub Pages

## Project Structure

```
flash-card/
├── src/
│   ├── app/              # Main application components
│   │   ├── pages/        # Home and Practice pages
│   │   └── Layouts/      # Header and navigation
│   ├── components/       # Reusable UI components
│   ├── contexts/         # React contexts (Theme, Locale, etc.)
│   ├── data/            # Finnish vocabulary data
│   ├── libs/            # Utilities and i18n configuration
│   └── styles/          # Global styles
├── public/              # Static assets
├── docker/              # Docker configuration
└── docs/               # Documentation
```

## How to Setup Project Locally
Clone this repository to your local machine.

##### Run with Node.js
- Install [Node.js](https://nodejs.org/en/). Recommended version: 20.9.0.

- Open a terminal in the project directory.

- Run command `yarn install` or `npm install` to install packages.

- Run command `yarn start` or `npm start` to start the project.

- Access at [http://localhost:3000/](http://localhost:3000/)

##### Run with Docker
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/).

- The project uses a production build configuration with nginx. The application will be built to static files and served with nginx.

- Open a terminal in the project directory.

- Run `docker-compose up` or `docker-compose up -d`
    - NOTE! It might take a while until docker-compose completes installing the packages.
    - NOTE! If using Mac and errors occur during the `docker-compose up` run, try to add resources to Docker. Go to Preferences -> Resources and set CPUs: 6 and Memory: 8 GB.

- Edit your `/etc/hosts` file (OSX/Linux) or `C:\Windows\System32\drivers\etc\hosts` file (Windows), add a line below (or choose whatever name you want)
```
127.0.0.1 my-flash-card.local
```

- Access at [http://my-flash-card.local:8080/](http://my-flash-card.local:8080/)

### Deploy
- Make a pull request from `develop` and point to `master`, name the pull request `RELEASE vx.x.x`

- Make a commit to `develop` to fix the version with message `RELEASE vx.x.x`.
    - Version in `README.md`
    - Version in `package.json`

- Merge pull request.

- Pull the latest changes from `master`, run `yarn deploy` or `npm deploy`

- Create a new [Release](https://github.com/Quanmuito/releases)
    - Tag: vx.x.x
    - Title: vx.x.x (dd-mm-yyyy)
    - Content:
    ```
    ### Content
    - Change in [#PRNUMBER](PR url)
    ```

- Access at [Flash Card](https://quanmuito.github.io/flash-card/)

## Available Scripts

- `yarn start` or `npm start` - Start the development server
- `yarn build` or `npm run build` - Build the app for production
- `yarn test` or `npm test` - Run tests with coverage
- `yarn deploy` or `npm run deploy` - Deploy to GitHub Pages