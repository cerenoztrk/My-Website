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
          Authorization: `Token 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`
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
