var api = {
  getBio(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    console.log(url);
    return fetch(url).then((res) => res.json());
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    console.log(url);
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
