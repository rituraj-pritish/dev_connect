import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../layout/Loader';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, repos, getGithubRepos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  if (repos === null) {
    return <Loader />;
  }
  return (
    <div
      style={{
        marginTop: '-10px',
        background: '#ebf0f2',
        padding: '20px'
      }}
    >
      <h5 className='teal-text'>Recent Github Repos</h5>
      <div className='row'>
        <div className='collection col s6'>
          {repos
            .filter(repo => repos.indexOf(repo) <= 4)
            .map(repo => (
              <a
                href={repo.html_url}
                target='_blank'
                className='collection-item'
              >
                {repo.name}
              </a>
            ))}
        </div>
        <div className='collection col s6'>
          {repos
            .filter(repo => repos.indexOf(repo) > 4)
            .map(repo => (
              <a
                href={repo.html_url}
                target='_blank'
                className='collection-item'
              >
                {repo.name}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(
  mapStateToProps,
  { getGithubRepos }
)(ProfileGithub);
