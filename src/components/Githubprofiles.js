import React,{useState} from 'react'
import Navbar from './Navbar'
import './Githubprofiles.css'
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
            // console.log(res.data.items);
        })

    }
  return (
    <> 
     <Navbar/>
    <div className='one'>
        <h1>GitHub Profile</h1>
        <input type='text' onChange={getData} placeholder='enter the Github username'/>
        <input type='button' value='search' onClick={search1}/><br/>
        {
            search&&(
            search.map((finaldata)=>(
                <>
                        <div className='gitdata'>
                                <img src={finaldata.avatar_url} alt="User avatar"  height={150} width={150}/>
                                <h1>id:{finaldata.id}</h1>
                                <a href={finaldata.html_url} target="_blank" rel="noopener noreferrer">{finaldata.login}</a><br/><br/>
                                <a href={finaldata.followers_url} target="_blank" rel="noopener noreferrer">followers</a><br/><br/>
                                <a href={finaldata.following_url} target="_blank" rel="noopener noreferrer">following</a><br/><br/>
                                <a href={finaldata.subscriptions_url} target="_blank" rel="noopener noreferrer">Subscriptions</a><br/><br/>
                                <a href={finaldata.events_url} target="_blank" rel="noopener noreferrer">Events</a>
                        </div>
                 </>   
            )
            )
             )
        } 
    </div>
    </>
  )
}

export default Githubprofiles
