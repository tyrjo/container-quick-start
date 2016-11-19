FROM node:7.1.0

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

# Install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install yarn

COPY . $HOME/
RUN mkdir node_modules
RUN chown -R app:app $HOME

#USER app
#WORKDIR $HOME/
#RUN yarn install

#USER root
#COPY . $HOME/
#RUN chown -R app:app $HOME/*
#USER app
WORKDIR $HOME/
#RUN chown -R app:app $HOME
#RUN yarn install

CMD ["npm", "start"]