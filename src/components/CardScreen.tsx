import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchAsyncArticles } from '../features/article/articleSlice'
import '../App.css';
import Nav from './Nav'
import Card from './Card';
import { useParams, useSearchParams } from 'react-router-dom';


const CardScreen = () => {
  const [searchParams , setSearchParams] = useSearchParams();

  // const getSearch = arrayArticle;
  const {article} = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  //  const arrayArticle = article.data?.filter(article=>article.content.toLowerCase().includes(filterParams.toLowerCase()))
 const getSearch = searchParams.get("q") || '';

  useEffect(() => {
    dispatch(fetchAsyncArticles())
  }, [dispatch])
  //@ts-ignore
  const handleSearch=(e)=>{
    setSearchParams({q: e.target.value});
  }

    return (
        <>
        
        <div className="container">
            
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">AppNews</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2"
           type="search" placeholder="Search" 
           value={getSearch}
           onChange={handleSearch}
           aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={handleSearch}>Search</button>
        </form>
      </nav>
        
        <div className="grid">
            {
              
              article.data?.filter(article=>article.content.toLowerCase().includes(getSearch.toLowerCase())).map((article,i)=>(
                //@ts-ignore
               <Card key={i} {...article}/>
                
              ))
            }
          
        </div>
       
    </div>
    </>
      );
}

export default CardScreen