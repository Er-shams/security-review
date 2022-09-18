const express = require('express');
const { WorkOS } = require('@workos-inc/node');


const app = express();


const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientID = process.env.WORKOS_CLIENT_ID;


app.get('/auth', (_req, res) => {
  const connection = 'connection_123'; // The Connection's ID
  const redirectURI = 'https://dashboard.my-app.com'; // The callback URI WorkOS should redirect to post-authentication


  const authorizationURL = workos.sso.getAuthorizationURL({
    connection,
    clientID,
    redirectURI,
  });


  res.redirect(authorizationURL);
});
 