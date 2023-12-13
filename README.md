# shopper-review
A Web App for the users experience for the shopping Malls in Bahrain where users can lookup at the malls and shops directories and add their reviews on different stores.

## How to use
### As an admin you can do the following:
* create / edit / update new `malls` and `shops`.
* view all reviews posted by the users.
* delete review of shops.
* upload a single thumbnail image and multiple images of malls and shops.
* update and delete multiple images of malls and shops.

### As a user you are able to:
* login using your google account for now.
* change your profile avatar.
* add review and rate a shop.

## Entity Relationship Diagram

<img src="https://i.imgur.com/ubSIR4m.png" width="600">

## How to run
* Setup `.env` file using the following template:
```
PORT = 
connectionString = 
APP_CLIENT_ID=
GOOGLE_SECRET=
GOOGLE_CALLBACK=
SECRET=
CLOUDINARY_URL=
```
`connectionString` is your mongo db connection string obtained from [mongo atlas](https://cloud.mongodb.com/).

`APP_CLIENT_ID` `GOOGLE_SECRET` and `GOOGLE_CALLBACK` are obtained from google cloud console.

`CLOUDINARY_URL` is the API key used to upload images to [cloudinary](https://cloudinary.com/).

* Run `npm i` to install required dependencies.
  
* Create a folder in path `public/` name it `ouploads`, this is used by multed to upload images.

## Wireframes

https://i.imgur.com/BZKXJB2.jpeg

https://i.imgur.com/sz8qDCw.jpeg

https://i.imgur.com/D4IBSlK.jpeg

https://i.imgur.com/SVjrPGa.jpeg

https://i.imgur.com/4BaK45W.jpg

https://i.imgur.com/Kl4yEiZ.jpg

https://i.imgur.com/u087skf.jpg

https://i.imgur.com/c16p1as.jpg

https://i.imgur.com/CeKBCQ2.jpeg

https://i.imgur.com/SVjrPGa.jpeg


