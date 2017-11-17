import React from 'react';
import RepositoryListItem from './RepositoryListItem';

const RepositoryList = (props) => {
  const { repositories } = props;
  const items = repositories.map(repo => 
    <RepositoryListItem repository={repo} key={repo.id} />
  );

  return <ul className="RepoList">{items}</ul>;
};

export default RepositoryList;
