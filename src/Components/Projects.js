import axios from "axios";
import { useEffect, useState } from "react";
import RepoCards  from "./RepoCards ";
import Loading from "./Loading";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function getRepos() {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("https://api.github.com/users/cerenoztrk/repos");
      setRepos(response.data);
    } catch (error) {
      console.log(error);
      setError("Encountered error while trying to get repositories");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getRepos();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>{error}</div>;
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
