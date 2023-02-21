import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import RepoCards  from "./RepoCards ";
import Loading from "./Loading";
//require ('dotenv').config();

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getRepos() {
    try {
      const response = await axios.get(
        "https://api.github.com/users/cerenoztrk/repos",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );
      setRepos(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getRepos();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="repos-container" id="projects">
      <h1>PROJECTS</h1>
      <ul className="repos">
        {repos.map((repo, idx) => (
          <li className="repo-cards" key={idx}>
            <RepoCards  repo={repo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
