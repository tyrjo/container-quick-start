# Container Quickstart

Provides a containerized development environment with the following features:

1. Yarn to allow for fast, cached npm installs
1. Socket.io

## Use

### Starting

1. `docker-compose up`

### Modifying packages
1. `docker-compose run --rm server /bin/bash`
1. `yarn add/remove <dependency>`

## Notes

1. Notice that no npm or yarn install is done during image build. Because yarn is used for the npm package management,
   and the yarn packages are cached, we simply always run yarn every time the container starts. Because the entire
   directory is mounted as a volume mount, the first run will populate the .cache on the host filesystem, and
   subsequent runs will have .cache available from the volume mount.
   
## TODO
1. Containerize react-slingshot
1. Fix react
1. Figure out how to run NOT as root, yet also get volume mount. Consider using
   [volume containers](https://docs.docker.com/engine/tutorials/dockervolumes/).
   
## Docker Sync

1. sudo gem install docker-sync
1. brew install fswatch