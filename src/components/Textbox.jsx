import { doc, getDoc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
// import {doc} from 'firebase/firestore';

const Textbox = () => {

    let [val,setVal] = useState("");

    // useEffect(() => {
      
    //   const Effect = async() =>
    //   {
    //     const docRef = doc(db, "text","5WtJbwk4e5p5899Z9PzK");
    //     const docSnap = await getDoc(docRef);

    //     if(docSnap.exists())
    //     {
    //       setVal(docSnap.data().textdata)

    //     }else
    //     {
    //       console.log("Bruh!!");
    //     }
    //   }

    //   return () =>
    //   {
    //     Effect()
    //   }
    // },[]);

    const unsub = onSnapshot(doc(db, "text","5WtJbwk4e5p5899Z9PzK"), (doc) =>
    {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      setVal(doc.data().textdata)
    })

    const setHandleChange = async(s) =>
    {
      setVal(s);

      await updateDoc(doc(db,"text","5WtJbwk4e5p5899Z9PzK"),{
        textdata: s,
        timestamp: serverTimestamp()
      })
    }

  return (
    <div className='textbox'>
        <textarea name="text-field" className='text-field' onChange={(ev) => setHandleChange(ev.target.value)} value={val}></textarea>
    </div>
  )
}

export default Textbox
