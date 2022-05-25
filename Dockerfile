From ubuntu:focal

WORKDIR ~

# Without interactive dialogue
ARG DEBIAN_FRONTEND=noninteractive

# Install required packages
RUN apt-get update
RUN apt-get install -y wget gnupg2 software-properties-common git apt-utils vim dirmngr apt-transport-https ca-certificates

# Installing NVM, NodeJS and NPM
RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
ENV NODE_VERSION=16
RUN . $HOME/.nvm/nvm.sh && nvm install $NODE_VERSION && nvm alias default $NODE_VERSION && nvm use default

RUN rm -rf /var/lib/apt/lists/*
RUN apt-get update


# # Install Wine from WineHQ Repository
# RUN dpkg --add-architecture i386
# # RUN wget -qO- https://dl.winehq.org/wine-builds/Release.key | apt-key add -
# # RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv F987672F
# # RUN apt-add-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ bionic main'
# RUN wget -nc https://dl.winehq.org/wine-builds/winehq.key
# RUN mv winehq.key /usr/share/keyrings/winehq-archive.key

# RUN wget -nc https://dl.winehq.org/wine-builds/ubuntu/dists/focal/winehq-focal.sources
# RUN mv winehq-focal.sources /etc/apt/sources.list.d/

# RUN apt-get update
# RUN apt-get install -y --install-recommends winehq-stable

# Installing Wine
RUN dpkg --add-architecture i386
RUN wget -nc https://dl.winehq.org/wine-builds/winehq.key
RUN mv winehq.key /usr/share/keyrings/winehq-archive.key
RUN wget -nc https://dl.winehq.org/wine-builds/ubuntu/dists/focal/winehq-focal.sources
RUN mv winehq-focal.sources /etc/apt/sources.list.d/
RUN apt-get update
RUN apt-get install --install-recommends -y winehq-stable

# Installing mono
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
RUN sh -c 'echo "deb https://download.mono-project.com/repo/ubuntu stable-focal main" > /etc/apt/sources.list.d/mono-official-stable.list'
RUN apt-get update
RUN apt-get install -y mono-complete


RUN apt-get install -y curl

# Install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update
RUN apt-get install -y yarn

RUN PROJECT_DIR=/root/project

WORKDIR $PROJECT_DIR
