import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProjeKart from "./ProjeKart"
import Loading from "./Loading"

const Projeler = () => {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getRepos(){
    try{
      const response = await axios.get(
        "https://api.github.com/users/cerenoztrk/repos", {
        headers: {
<<<<<<< HEAD
          Authorization: `Token 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`
=======
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
>>>>>>> 8119cd8e677fe2360dd527abf1e2344c15526374
        }
      }
      );
      setRepos(response.data);
      setLoading(false)
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
    <div className="repos-container" id="projeler">
      <h1>PROJELER</h1>
      <ul className="repos">
        {repos.map((repo, idx)=>(
            <li className='repo-cards'><ProjeKart repo={repo} key={idx}/></li>))}
      </ul>
    </div>
  );
};

export default Projeler;
