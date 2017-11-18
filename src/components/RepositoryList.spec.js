import React from 'react';
import RepositoryList from 'components/RepositoryList';

const setup = (myProps) => {
  const props = Object.assign({
    repositories: [{id: 1, name: 'repo-name', stargazers_count: 1}],
  }, myProps);

  const wrapper = shallow(<RepositoryList repositories={props.repositories} />);

  return {
    props,
    wrapper,
  };
}

describe('RepositoryList', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
  });

  it('renders repository items', () => {
    const items = [
      { id: 1, name: 'repo-name1' },
      { id: 2, name: 'repo-name1' },
    ];
    const { wrapper } = setup({
      repositories: items,
    });

    expect(wrapper.find('.RepoList').children()).toHaveLength(items.length);
  })
});