# Base Image
FROM node:20-alpine3.18 as phase1

WORKDIR /app

# Run yarn only if package.json changes
# copied tsconfig as server's tsconfig extends rootDir's tsconfig
COPY --chown=node:node turbo.json .
COPY --chown=node:node tsconfig.json .
COPY --chown=node:node package.json .

# first create these directories, else the copying won't work.
RUN mkdir -p apps/server

# copying only the required packages
COPY --chown=node:node ./apps/tsconfig.*.json apps/server
COPY --chown=node:node ./apps/package.json apps/server
COPY --chown=node:node ./apps/server apps/server


RUN mkdir -p apps/client
COPY ./apps/client ./apps/client

RUN yarn workspace next-client build
# install node_modules
RUN yarn

# run server in prod env
CMD ["yarn", "workspace", "server", "prod"]