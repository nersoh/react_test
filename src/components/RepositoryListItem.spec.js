import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure, shallow } from 'enzyme';
import RepositoryListItem from 'components/RepositoryListItem';

configure({ adapter: new Adapter() });

const setup = (myProps) => {
  const props = Object.assign({
    name: 'repo-name',
    description: 'repo-description',
    html_url: 'repo-name.com',
  }, myProps);

  const wrapper = shallow(<RepositoryListItem repository={props}/>);

  return {
    props,
    wrapper,
  }
}

describe('RepositoryListItem', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
  });

  it('renders repository name', () => {
    const { wrapper } = setup({ name: 'lovely-stay' });
    
    expect(wrapper.find('.Repo-name').text()).toBe('lovely-stay');
  });

  it('renders repository url', () => {
    const { wrapper } = setup({ html_url: 'lovely-stay.com' });
    
    expect(wrapper.find('.Repo-name a').prop('href')).toBe('lovely-stay.com');
  });

  it('renders repository description', () => {
    const { wrapper } = setup({ description: 'myDescription' });
    
    expect(wrapper.find('.Repo-description').text()).toBe('myDescription');
  });
});