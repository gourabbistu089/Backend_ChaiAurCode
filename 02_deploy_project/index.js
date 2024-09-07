const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
console.log(port)

const githubData = {
  
    "login": "gourabbistu089",
    "id": 144556159,
    "node_id": "U_kgDOCJ3Afw",
    "avatar_url": "https://avatars.githubusercontent.com/u/144556159?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/gourabbistu089",
    "html_url": "https://github.com/gourabbistu089",
    "followers_url": "https://api.github.com/users/gourabbistu089/followers",
    "following_url": "https://api.github.com/users/gourabbistu089/following{/other_user}",
    "gists_url": "https://api.github.com/users/gourabbistu089/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/gourabbistu089/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/gourabbistu089/subscriptions",
    "organizations_url": "https://api.github.com/users/gourabbistu089/orgs",
    "repos_url": "https://api.github.com/users/gourabbistu089/repos",
    "events_url": "https://api.github.com/users/gourabbistu089/events{/privacy}",
    "received_events_url": "https://api.github.com/users/gourabbistu089/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Gourab Bistu",
    "company": null,
    "blog": "www.linkedin.com/in/gourab-bistu-05a709286",
    "location": "Jamshedpur, NIT",
    "email": null,
    "hireable": null,
    "bio": "MCA@26, NIT JSR Ctrl + Alt + Love Coding ❤️ | Making the world a better place through code 🌍 | Committing to the byte side 🌐",
    "twitter_username": null,
    "public_repos": 33,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-09-09T18:01:34Z",
    "updated_at": "2024-08-24T17:16:11Z"
    };

app.get("/", (req, res) => {
  res.send({ status: "OK" });
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Twitter Page</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>LOGIN PAGE</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
