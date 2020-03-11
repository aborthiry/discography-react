import React from 'react'

const Album = ({ albums }) => {
  return (
    <div>
      <center><h1>Discography</h1></center>
      {albums.map((contact, key) => (
        <div class="card" key={key}>
          <div class="card-body">
            <h5 class="card-title">{contact.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{contact.released}</h6>
            <p class="card-text">{contact.tracks} Tracks</p>
            <img 
              src={contact.cover.url}
              alt="new"
              style={divStyle}
            />
          </div>
        </div>
      ))}
    </div>
  )
};

const divStyle = {
  width: '25%', 
  height: 'auto',
  border: '5px solid pink'
};

export default Album