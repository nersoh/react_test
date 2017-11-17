import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure, shallow } from 'enzyme';
import RepositoryListItem from './RepositoryListItem';

configure({ adapter: new Adapter() });

const setup = (myProps) => {
  const props = Object.assign({
    name: 'repo-name',
    forks: 1,
    html_url: 'repo-name.com',
    stargazers_count: 1,
    watchers_count: 1,
  }, myProps);

  const wrapper = shallow(<RepositoryListItem repository={props}/>);

  return {
    props,
    wrapper,
  }
}

describe('RepositoryListItem', () => {
  test('rendering element', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.RepoListItem')).toHaveLength(1);
  });

  test('rendering repository name', () => {
    const { wrapper } = setup({ name: 'lovely-stay' });
    
    expect(wrapper.find('.Repo-name').text()).toBe('lovely-stay');
  });

  test('rendering repository stars count', () => {
    const { wrapper } = setup({ stargazers_count: 10 });
    
    expect(wrapper.find('.Repo-starscount').text()).toBe('10');
  });

  test('rendering repository forks count', () => {
    const { wrapper } = setup({ forks: 5 });
    
    expect(wrapper.find('.Repo-forkscount').text()).toBe('5');
  });
});