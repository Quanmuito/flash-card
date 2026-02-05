# flash-card Installation

#### Techstack:
React, Typescript, Docker

### How to setup project locally
Clone this repository to your local machine.

##### Run with Node.js
- Install [Node.js](https://nodejs.org/en/). Recommend version: 20.9.0.

- Open a terminal on the project directory.

- Run command `yarn install` or `npm install` to install packages.

- Run command `yarn start` or `npm start` to start the project.

- Access at [localhost:3000/](localhost:3000/)

##### Run with Docker
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
s
- In the project directory, change `.env.example` to `.env`.

- You can run the project in either `develop` or `production` environment:
    - Develop envirionment: Copy `docker-compose-dev.yml` and `Dockerfile.dev` to `docker-compose.yml` and `Dockerfile`. Anychange you made to the project will be apply after refresh the page.

    - Production environment: Copy `docker-compose-prod.yml` and `Dockerfile.prod` to `docker-compose.yml` and `Dockerfile`. The project will be built to static and running with nginx, mimic the production environment.

- Open a terminal on the project directory.

- Run `docker-compose up` or `docker-compose up -d`
    - NOTE! It might take a while until composer completes installing the packages.
    - NOTE! If using Mac and errors occur during the `docker-compose up` run, try to add resources to Docker. Go to Preferences -> Resources and set CPUs: 6 and Memory: 8 GB.

- Edit your `/etc/hosts` file (OSX/Linux) or `C:\Windows\System32\drivers\etc\hosts` file (Windows), add a line below (or choose whatever name you want)
```
127.0.0.1 my-flash-card.local
```

- Access:
    - Develop envirionment: [my-flash-card.local:3000/](my-flash-card.local/)
    - Production environment: [my-flash-card.local/](my-flash-card.local/)

### Deploy
- Make a pull request from `develop` and point to `master`, name the pull request `RELEASE vx.x.x`

- Make a commit to `develop` to fix the version with message `RELEASE vx.x.x`.
    - Version in `README.md`
    - Version in `package.json`
    - `VERSION` in `src/global.ts`

- Merge pull request.

- Pull the lastest changes from `master`, run `yarn deploy` or `npm deploy`

- Create a new [Release](https://github.com/Quanmuito/releases)
    - Tag: vx.x.x
    - Title: vx.x.x (dd-mm-yyyy)
    - Content:
    ```
    ### Content
    - Change in [#PRNUMBER](PR url)
    ```

- Access at [Flash Card](https://quanmuito.github.io/flash-card/)