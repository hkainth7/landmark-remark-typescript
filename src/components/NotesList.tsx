import React, { useEffect } from 'react';

interface Props{
  notes: any[],
  getNotes: Promise<void>,
  setNotes: React.Dispatch<React.SetStateAction<any[]>>
}

const NotesList = ({notes, getNotes, setNotes}:Props) => {

  useEffect(() => {

    getNotes.then(() => setNotes((notes) => [...notes])).catch((err:string) => console.log(err))
  
  },[]);

  return (
    <div>
      {
        notes &&
          notes.map(({id, remark}) => {
            return (
              <div key={id}>
                {remark}
              </div>
            )
          })
      }
    </div>
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