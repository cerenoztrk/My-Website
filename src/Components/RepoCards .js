import React from 'react'

const RepoCards  = ({repo}) => {
  return (
    <div className='repo-info'>
        <div className='description'>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <span>{repo.language}</span>
        
        </div>
        <div className='view-btn'>
            <a target='_blank' rel='noreferrer' href={repo.html_url}>View repo</a>
        </div>
    </div>
  )
}

export default RepoCards ;