import React from 'react';

const NotesList = () => {
  return (
    <div>NotesList</div>
  )
}

export default NotesList;

{/* <
        {notes &&
          notes.map(({id, long, lat, remark, createdBy}) => (
            <Popup key={id} longitude={long} latitude={lat} closeButton={false} closeOnClick={false} >
              <p>{remark}</p>
              <p>Created by: {createdBy.split("@")[0]}</p>
            </Popup>
          ))
        } */}