import React from 'react'

const Newsitems = (props) => {

  let { Title, Description, Imageurl, Newsurl, author, date, source } = props;
  return (
    <div>
      <div className="card" style={{  height: '505px',
}}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
          }}>

          <span className="badge rounded-pill bg-danger" > {source} </span>
        </div>

        <img src={!Imageurl ? "https://montech.ruralinstitute.umt.edu/www/wp-content/uploads/no-image.png" : Imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Title}...</h5>
          <p className="card-text">{Description}...</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={Newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}


export default Newsitems
