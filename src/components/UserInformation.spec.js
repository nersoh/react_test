import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure, shallow } from 'enzyme';
import RepositoryListItem from 'components/RepositoryListItem';
import UserInformation from './userInformation';

configure({ adapter: new Adapter() });

const setup = (myProps) => {
  const props = Object.assign({
    user: {
      name: 'user-name',
      bio: 'user-bio',
      location: 'user-location',
    }
  }, myProps);

  const wrapper = shallow(<UserInformation user={props.user} />);

  return {
    props,
    wrapper,
  };
}

describe('UserInformation', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();
  });

  it('renders user name', () => {
    const { wrapper } = setup({ user: { name: 'myName' } });

    expect(wrapper.find('.User-name').text()).toBe('myName');
  });

  it('renders user bio', () => {
    const { wrapper } = setup({ user: { bio: 'myBio' } });

    expect(wrapper.find('.User-bio').text()).toBe('myBio');
  });

  it('renders user location', () => {
    const { wrapper } = setup({ user: { location: 'myLocation' } });

    expect(wrapper.find('.User-location').text()).toBe('myLocation');
  });
});