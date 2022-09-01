import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Nav = () => {

  const[searchParams,setSearchParams] = useSearchParams();

   const getSearch = searchParams.get("q") || '';

  const handleSearch=(e:any)=>{
    setSearchParams({q: e.target.value});
  }
  return (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">AppNews</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2"
           type="search" placeholder="Search" 
           value={getSearch}
           onChange={handleSearch}
           aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
  )
}


export default Nav;