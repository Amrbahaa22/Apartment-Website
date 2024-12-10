FROM node:20-alpine3.18 AS base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine 
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Set working directory in the container
WORKDIR /app

# first create these directories, else the copying won't work.
RUN mkdir -p apps/client

COPY --chown=node:node package.json .
COPY --chown=node:node yarn.lock .
COPY --chown=node:node ./apps/client/package.json  ./apps/client

# Install dependencies
RUN yarn --frozen-lockfile

# Copy the rest of the application code to the container
COPY ./apps/client ./apps/client

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# Build the Next.js app
RUN yarn workspace client build

# Expose the port Next.js app runs on (default is 3000)
EXPOSE 3000

CMD [ "yarn", "workspace", "client", "start" ]