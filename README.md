# datareade

This is the server. Test. Test. Lest. Jest. Yest. change. chaeg. trsthank you sir

### TODO

- when checking for new content, only add / compare content from TODAY onwards. Past publish dates are absolutely not relevant for the database to have/compare to. It serves you function.
- have a notes section (just for you personally so you know what is going on)
- Work on script for uploading (automatically fetch url and share), as well as when uploading, to populate fields based on audio file name.
- NeverFap Deluxe #accountability Thread Pool - 05-06-27

### Server

The server requires a lot more work, but that's just the nature of it.

### Step 0. Remove need to use password to access server
https://www.hongkiat.com/blog/ssh-to-server-without-password/

- `cat id_rsa.pub | ssh root@198.199.67.180 'cat - >> ~/.ssh/authorized_keys'.`

#### Step 1. Setup Let's Encrypt.

Go into the server and setup all the SSL certificates for the server.
<!-- https://www.humankode.com/ssl/how-to-set-up-free-ssl-certificates-from-lets-encrypt-using-docker-and-nginx -->

- `ssh root@198.199.67.180`
- `cd /docker/letsencrypt-docker-nginx/src/letsencrypt/`
- `mv docker-compose.yml && mv nginx.conf`
- `sudo docker-compose up -d`

sudo docker run -it --rm \
-v /docker-volumes/etc/letsencrypt:/etc/letsencrypt \
-v /docker-volumes/var/lib/letsencrypt:/var/lib/letsencrypt \
-v /docker/letsencrypt-docker-nginx/src/letsencrypt/datareade.juliusreade.com:/data/letsencrypt \
-v "/docker-volumes/var/log/letsencrypt:/var/log/letsencrypt" \
certbot/certbot \
certonly --webroot \
--email julius.reade@gmail.com --agree-tos --no-eff-email \
--webroot-path=/data/letsencrypt \
-d datareade.juliusreade.com

### Step 2. Setup Relevant Folders in the Server

- `mkdir /docker/letsencrypt-docker-nginx/src/`
- `

/etc/nginx/sites-available

### Step 4. Clone Repo




TODO I just realised, I will probably need a separate types package so I can export those.

"@dottjt/datareade": "latest"

npm publish --access public

https://www.npmjs.com/package/app-root-path


// Image Manipulation
https://github.com/oliver-moran/jimp

//

### NOTES

- All applications within the DigitalOcean instance sit here. `cd /docker/letsencrypt-docker-nginx/src/`

# Reddit API details
refresh and access tokens create (the ones in the ENV is )
https://not-an-aardvark.github.io/reddit-oauth-helper/

# libpng jpeg librsvg pixman-dev
    # build-base \
    # g++ \
# cairo pango giflib

curated_curated_social_feed_items // would have a reference to an item, either as a podcast, or as a social feed. I wouldn't have to get this via axios, it should already be in this system.

aggregated_curated_social_feed_items // would be via an API.
