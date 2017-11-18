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
        <div className="User-name">{user.name}</div>
        <div className="User-bio">{user.bio}</div>
        <div className="User-location">{user.location}</div>
      </div>
      <RepositoryList repositories={user.repositories} />
    </div>
  )
};

export default UserInformation;
