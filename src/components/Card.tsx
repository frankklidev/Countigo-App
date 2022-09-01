import React from 'react'
import Article from '../models/article';
import {Link} from 'react-router-dom'

const Card = ({author,title,content,urlToImage}:Article) => {
  return (
    <div className="card">
            <div className="card_img">
                <img src={urlToImage} alt={author}/>
            </div>
            <div className="card_body">
                <h2 className="card_title">{title}</h2>
                <p>{content}</p>
                <p className="card_author">by <a href="#" className="author_link">{author}</a></p>
              <Link to={`/article/${author}`} className="read_more">Read article</Link>
            </div>
        </div>
  )
}

export default Card