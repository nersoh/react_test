import React from 'react';

const RepositoryListItem = (props) => {
  const { repository } = props;
  return (
    <li className="RepoListItem">
      <div className="Repo-name">{repository.name}</div>
      <div className="Repo-starscount">{repository.stargazers_count}</div>
      <div className="Repo-forkscount">{repository.forks}</div>
    </li>  
  )
};

export default RepositoryListItem;