export const fetchUser = jest.fn((username) => {
  return Promise.resolve({
    login: username,
    id: 1930729,
  });
});

export const fetchUserRepos = jest.fn((username) => {
  return Promise.resolve([
    { id: 1, name: 'repo-name', description: 'repo-description'}
  ]);
});

export const fetchUserWithRepos = jest.fn((username) => {
  return Promise.resolve({
    login: username,
    id: 1930729,
    repositories: [],
  });
});