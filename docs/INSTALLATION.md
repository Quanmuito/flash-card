# flash-card Installation

#### Techstack:
React, TypeScript, Docker

### How to setup project locally
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