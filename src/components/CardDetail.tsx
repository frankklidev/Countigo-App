import React from 'react'
import '../style/style.css'

import {useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import {fetchAsyncArticles} from '../features/article/articleSlice'

const CardDetail = () => {
    const dispatch = useAppDispatch();
    const {article} = useAppSelector((state)=>state);

    const {articleId} = useParams();

    const navigate = useNavigate();
    
  return (
    <div id="article_container">
    <div className="article_container_img"></div>
    <div className="article_container_content">
         <div className="the">
             <div className="line"></div>
             <h4>the</h4>
             <div className="line"></div>
         </div>
         <h1>Great Adventure</h1>
         <div className="divider"></div>
         <p>
             Nam fermentum orci felis, non mattis odio consequat sit amet. Proin fermentum mattis urna a posuere. Donec sed lacus ut ante consectet iaculis. Suspendisse ligula tortor, auctor eu magna sed, pretium ornare mi. Praesent ultrices vitae est ac hendrerit. Duis quis mattis dolor. Cras consectetur velit eros, non dictum purus pellentesque a. 
         </p>
         <div className="btn" onClick={()=>navigate(-1)}>Atras</div>
    </div>
 </div>
  )
}

export default CardDetail;