import { fetchUser, fetchUserRepos, fetchUserWithRepos } from './index';

jest.mock('./index');

describe('fetchUserWithRepos', () => {
  it('returns user', () => {
    const username = 'nersoh';
    return fetchUserWithRepos(username).then(data => {
      expect(data).toBeDefined();
    })
  });

  it('returns user login', () => {
    const username = 'nersoh';
    return fetchUserWithRepos(username).then(data => {
      expect(data.login).toBe(username);
    });
  });

  it('returns user repos', () => {
    const username = 'nersoh';
    return fetchUserWithRepos(username).then(data => {
      expect(data.repositories).toBeDefined();
    });
  });
});

describe('fetchUser', () => {
  it('returns user', () => {
    const username = 'nersoh';
    return fetchUser(username).then(data => {
      expect(data).toBeDefined();
    })
  });

  it('returns user login', () => {
    const username = 'nersoh';
    return fetchUser(username).then(data => {
      expect(data.login).toBe(username);
    });
  });
});

describe('fetchUserRepos', () => {
  it('returns repos', () => {
    const username = 'nersoh';
    return fetchUserRepos(username).then(data => {
      expect(data.length).toBeGreaterThan(0);
    })
  });

});