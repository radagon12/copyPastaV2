import { doc, getDoc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Button }  from '@chakra-ui/react';
import Circle from './Circle';
import { debounce } from 'lodash';
// import {doc} from 'firebase/firestore';

const Textbox = ({setProgress}) => {

    let [val,setVal] = useState("");
    const location = useLocation();
    const [docId , setDocId] = useState((location.pathname === '/global') ? import.meta.env.VITE_GLOBAL_DOC : import.meta.env.VITE_PRIVATE_DOC)

    useEffect(() =>{
      setProgress(20)
      setTimeout(()=>{
          setProgress(60)
      },500)
      setTimeout(() => setProgress(100), 700)
    },[])

    const unsub = onSnapshot(doc(db, "text",docId), (doc) =>
    {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      setVal(doc.data().textdata)
    })
    
    const setHandleChange = (s) => {

      setVal(s)

      updateDoc(doc(db, "text", docId), {
        textdata: s,
        timestamp: serverTimestamp(),
      });
    };

  return (
    <>
    <div className='another'>
    <div className='block'>
    {/* <div className='textbox'> */}
        <textarea name="text-field" className=' text-field' onChange={(ev) => setHandleChange(ev.target.value)} value={val}></textarea>
    {/* </div> */}
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Textbox
