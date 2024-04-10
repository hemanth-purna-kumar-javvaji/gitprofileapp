import React,{useState} from 'react'
import axios from 'axios'
function Githubprofiles() {
    const[search,setSearch]=useState('')
    const[user,setUser]=useState('')

    
    function getData(e){
        setUser(e.target.value)
    }
    function search1(){ 
        const url = `https://api.github.com/search/users?q=${user}`;
        axios.get(url)
        .then((res)=>{
            setSearch(res.data.items)   

        })

    }
  return (
    <div className='one'>
        <h1>GitLogo</h1>
        <input type='text' onChange={getData} placeholder='enter the Github username'/>
        <input type='button' value='search' onClick={search1}/><br/>
        {
            search&&(
            search.map((finaldata)=>(
                <>
                        <img src={finaldata.avatar_url} alt="User avatar"  height={150} width={150}/>
                        <h1>id:{finaldata.id}</h1>
                        <a href={finaldata.html_url} target="_blank" rel="noopener noreferrer">{finaldata.login}</a>
                 </>   
            )
            )
             )
        } 
    </div>
  )
}

export default Githubprofiles
