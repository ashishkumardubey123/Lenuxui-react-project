import React from 'react'
import Linuxwindow from './Linuxwindow'
import githubdata from "../../assets/github.json"
import './github.scss'

const GitCard = ({ data }) => {
  return (
    <div className="div">
      <img src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>

      <div className="tags">
        {data.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      <div className="urls">
        <a href={data.repolink} target="_blank" rel="noreferrer">
          View Repository
        </a>
      </div>
    </div>
  );
};

function Github() {
  return (
    <Linuxwindow title="Github" width={400} height={300}>
      <div className="cards">
        {githubdata.map((project) => (
          <GitCard key={project.id} data={project} />
        ))}
      </div>
    </Linuxwindow>
  );
}

export default Github;
