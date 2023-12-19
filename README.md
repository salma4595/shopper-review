# shopper-review
A Web App for the users experience for the shopping Malls in Bahrain where users can lookup at the malls and shops directories and add their reviews on different stores.

## Demo

App demo on Render: https://shopper-review-app.onrender.com/

# Tasks and features management

Trello link: https://trello.com/b/Z4JzTQMq/main-project

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

## Technology used

* `nodejs` and `expressjs` to run the server and api
* `ejs` engine for front end
* `google authentication` to create users and login authentications
* `multer` to upload images to the server
* `cloudinary` to upload images from the server to to the cloud

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
  
* Create a folder in path `public/` name it `uploads`, this is used by multer to upload images.

## Wireframes

### Home page

![Home](https://github.com/iAliJ/shopper-review/assets/47180374/f23c3878-3952-4060-89f1-02445d3e10e1)

### Malls directory page

![Malls Directory](https://github.com/iAliJ/shopper-review/assets/47180374/9b7d2700-9b0d-4a37-9724-5cfb25536769)

### Store directory page

![Store Directory](https://github.com/iAliJ/shopper-review/assets/47180374/14595aea-83c5-485d-a3ec-2989d03b4072)

### Mall details

![Mall details](https://github.com/iAliJ/shopper-review/assets/47180374/09572f1e-3c84-4571-9dc1-2a4426ff2e51)

### Shop details

![Shop details](https://github.com/iAliJ/shopper-review/assets/47180374/88c9f18b-e9cb-43ee-bb3b-2cc279bb6043)

### Add mall page

![Add Mall](https://github.com/iAliJ/shopper-review/assets/47180374/81d0533e-0e7a-40f3-be56-bc43eed572ed)

### Add shop page

![Add Shop](https://github.com/iAliJ/shopper-review/assets/47180374/2244a1b4-3337-4686-b11a-e602c3b539df)

![Add Review](https://github.com/iAliJ/shopper-review/assets/47180374/771742c1-ad2f-4708-8b3a-86767b935e87)


