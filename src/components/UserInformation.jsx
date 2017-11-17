import React from 'react';
import RepositoryList from './RepositoryList';
import '../App.css';

const UserInformation = props => {
  const { user } = props;

  return (
    <div className="User-container">
      <h3>{user.login}</h3>
      <img className="User-avatar" src={user.avatar_url} alt={user.login} />
      <div className="User-info">
        <div>{user.name}</div>
        <div>{user.bio}</div>
        <div>{user.location}</div>
      </div>
      <RepositoryList repositories={[]} />
    </div>
  )
};

export default UserInformation;
