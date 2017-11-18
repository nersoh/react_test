export const fetchUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  return response.json();
};


export const fetchUserRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);

  return response.json();
};

export const fetchUserWithRepos = (username) => {
  return Promise.all([
    fetchUser(username),
    fetchUserRepos(username),    
  ]).then(results => {
    const user = {
      ...results[0],
      repositories: results[1],
    };
    
    return Promise.resolve(user);
  });
};
