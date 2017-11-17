import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure, shallow } from 'enzyme';
import RepositoryList from 'components/RepositoryList';

configure({ adapter: new Adapter() });

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
  test('rendering repository items', () => {
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