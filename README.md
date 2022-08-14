# Docker command cheatsheet

## Clone or Pull the docker image from docker hub

```docker
# clone the docker image from docker hub to local
$ docker run [docker-image]

$ docker pull [docker-image]
```

## Build the own docker image from Dockerfile

```docker
# Build our own docker image from the Dockerfile
# -t flag stand for give the tag name to the image that we created for the instance. 
# -t [image-name-we-want-to-give]
# The dot (.) at the end of the command which stand for the everything in the same directory with Dockerfile
$ docker build -t [image-name] .

# To build our own image with version name/number
$ docker build -t [image-name]:[version] .
```


## Run the docker container by using docker image

```docker
# Run the docker image as the docker container
# --name flag set to give the name of container. --name [container-name-we-want-to-give]
# -p flag set to publish the container port on our/host computer
# In 4000:4000, right side of the colon(:) is port expose by the container and the left side of the colon(:) is port publish on our computer

# -d flag stand for the detached mode
$ docker run --name [container-name] -p 4000:4000 -d [image-name]

# --rm flag is used to remove the container if it is not neccessory after we stopped it
$ docker run --name [container-name] -p 4000:4000 --rm [image-name]

# -v flag is stand for volume.
# -v [absolute path of project folder]:/[workdir in docker container]
# Above line mean the project folder in our computer will be map to the project in docker container. And they will sync when we run our container
# -v /app/node_modules means we will use the volume /app/node_modules from our container
$ docker run --name [container-name] -p 4000:4000 --rm -v [absolute path]:/[workdir in container] -v /app/node_modules [image-name]
```


## Run the docker container that created already

```docker
# To run the container that we already created before.
$ docker start [created-container-name]

# -i flag means interactive and attach container's STDIN
# --interactive , -i
$ docker start -i [created-container-name]
```


## Stop the running container

```docker
# Stop the running container
$ docker stop [container-name]
```


## Delete the docker image

```docker
# To delete the docker image which is not used by any container
$ docker image rm [image-name]

# To delete the image which is used by container
# -f flag stand for force
$ docker image rm [image-name] -f
```


## Delete all docker system

```docker
# To delete the all containers, images and volumes
$ docker system prune -a
```


# Docker-compose command cheatsheet

## Build the docker images and containers by using docker-compose

```docker
# Build the docker images and containers with no cache
$ docker-compose build --no-cache
```

## Build and run the docker system by using docker-compose

```docker
# Build the image, container and volumes. And start and run the container that created instantly by docker-compose.
$ docker-compose up
```


## Stop and remove the docker system by using docker-compose

```docker
# Stop the running container and remove that container
$ docker-compose down

# Stop the running container and remove all containers, images and volumes
$ docker-compose down --rmi all -v
```

# Open MongoDB shell in the docker container

```docker
# Open MongoDB shell in the docker container
$ docker exec -it [MONGO_CONTAINER] mongo
```