import React from 'react';
import RepositoryListItem from './RepositoryListItem';

const RepositoryList = (props) => {
  const { repositories } = props;
  const items = repositories.map(repo => 
    <RepositoryListItem repository={repo} key={repo.id} />
  );

  return (
    <div>
      <center><h2>Repositories</h2></center>
      <div className="Repo-header"><strong>Name</strong></div>
      <div className="Repo-header"><strong>Description</strong></div>
      <ul className="RepoList">{items}</ul>
    </div>
  );
};

export default RepositoryList;
