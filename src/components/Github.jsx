import React from 'react'
import MacWindow from '../windows/MacWindow'
import githubData from '../assets/github.json'
import './Github.scss'
const Github = ({windowName,setWindow}) => {
    const GitCard = ({data={
        id: 1,
    image: '',
    title: '',
    description: '',
    tags: [],
    repoLink: '',
    demoLink: '',
    }})=>{
      return <div className="card">
               
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p >{data.description}</p>
        <div className="tags">
            {data.tags.map(tag=><p className='tag'>{tag}</p>)}
        </div>
        <div className="urls">
            <a href={data.repoLink}>Repolink</a>
            {data.demoLink && <a href={data.demoLink}>Demo link</a>}
        </div>
      </div>
    }
  return (
    <MacWindow windowName={windowName} setWindow={setWindow}>
       <div className="cards">
          {githubData.map((project)=>{
            return <GitCard data={project}/>
          })}
       </div>
    </MacWindow>
  )
}

export default Github
