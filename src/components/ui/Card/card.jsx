/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import placeholderImg from "../../../assets/placeholder.webp"
import style from "./card.module.css"

import { useState } from 'react'

export default function Card({ deletePost=()=>{}, changePostTitle=()=>{}, setPostTitle=()=>{}, title ="", image, content="",tags="", postTitle="", id}){


    const [isForm, setIsForm] = useState(false)

    function showForm(){
        setIsForm(!isForm)
    }

    return(
        <div className={style.card}>
            <div className={style.col12}>
                <img className={style.thumb} src={image || placeholderImg}/>
            </div>
            <div className={style.col12}>
                <div className={style.cardBody}>
                    <div className={style.titleSection}>
                        {!isForm ? <h3>{title}</h3> : <form onSubmit={(e) => {e.preventDefault(); changePostTitle(id); showForm();}} action="">
                            <input onChange={(e)=>setPostTitle(e.target.value)} type="text" placeholder="Nuovo titolo del post" value={postTitle}/>
                            <input className={style.submit} type="submit" value="Invia"/>
                        </form>}
                        <button onClick={showForm}><FontAwesomeIcon icon={faPen} className={style.faPen}/></button>
                    </div>  
                    <p>{content}</p>
                    {tags.map((tag,index) => <p className={`tag ${tag}Tag`} key={index}>{tag}</p>)}
                    <div className={style.btnSection}>
                        <button><a href="#">Leggi di più</a></button>
                        <button onClick={()=>deletePost()}><FontAwesomeIcon icon={faTrash} className={style.faTrash}/></button>
                    </div> 
                </div>
            </div>
        </div>
    )
}