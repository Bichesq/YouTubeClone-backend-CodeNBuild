# YouTubeClone-backend-CodeNBuild

## Backend
express JS
nodemon

data
    users
    videos
    comments

routes (GET, POST, PUT, DELETE)
    - /
    users
        GET
            - /users        # get all users
            - /user/:id     # get user by id
        POST
            - /user          # create user
        PUT
            - /user/:id     # update user
        DELETE
            - /user/:id     # delete user

    videos
        GET
            - /videos        # get all video
            - /video/:id     # get video by id
        POST
            - /video          # create video
        PUT
            - /video/:id     # update video
        DELETE
            - /video/:id     # delete video

    comments
        GET
            - /comments        # get all comments
            - /comment/:id     # get comment by id
        POST
            - /comment          # create comment
        PUT
            - /comment/:id     # update comment
        DELETE
            - /comment/:id     # delete comment

