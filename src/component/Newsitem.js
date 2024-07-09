import React from 'react'
const Newsitem=(props)=> {
    let {title,description,imageurl,url,author,date,source}=props;
    return (
        <>
        <div className="card my-3">
        <img src={imageurl} className="card-img-top" alt="..."/>
        <h5 style={{position:'absolute',right:'0',top:'-2px'}}><span className=" badge bg-danger"> {source} </span></h5>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-danger">By {author} on {date}</small></p>
          <a href={url} target="-blank"className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      </>
    )
}
export default Newsitem;