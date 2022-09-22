import React, { useEffect, useState } from 'react';
import axios from  'axios';


export const AllMentors = () => {
  const [allMentors, setAllMentors] = useState<any>([{}]);
  useEffect(()=>{
    (async()=>{
      const {data} = await axios.get('/api/mentors/get-mentor');
      const {allMentorsDB} = data;
      setAllMentors(allMentorsDB)
    })
  }, [])
  return (
    <div>
      {allMentors.map(()=>{
        return
      })}
    </div>
  )
}

