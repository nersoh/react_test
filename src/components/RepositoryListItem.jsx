import React from 'react';

const RepositoryListItem = (props) => {
  const { repository } = props;
  return (
    <li className="RepoListItem">
        <div className="Repo-name">
          <a href={repository.html_url}>{repository.name}</a>
        </div>
        <div className="Repo-description">{repository.description}</div>
    </li>  
  )
};

export default RepositoryListItem;