import { useEffect, useState } from "react";
import { createComment } from "../../services/requests";
import { AutorComentario, BotaoCondicional, ComentarioContainer, ComentarioDoAutor, ContainerCurtir, ContainerItem, InputComentar } from "./style";
import Curtir from "../Curtir/Curtir";


const Comentar = ({postID, comments, autorID}) => {

   const{novoComentario, setNovoComentario} =useState('')
   const{Comentario, setComentario} =useState([])
   const{mostrarComentario, setMostrarComentario} =useState(false)

   const adicionarComentario =()=>{
    if(novoComentario.trim() !== ''){
        createComment(postID,novoComentario)
        setNovoComentario(...comments, novoComentario)
        setNovoComentario('')

    }
   }


   useEffect(() =>{adicionarComentario()},[])

   const novosComentarios = comments.map((Comentario)=>{
    return(
        <ComentarioContainer key={Comentario.comments_id}>
            <AutorComentario>{Comentario.creator_name}</AutorComentario>
            <ComentarioDoAutor>{Comentario.comments}</ComentarioDoAutor>
        </ComentarioContainer>
    )
   })
    return (

        <>
            <ContainerItem>
                <BotaoCondicional onClick={()=>setMostrarComentario(
                    !mostrarComentario)}>{mostrarComentario ?('Fechar'):
                ('Comentar')}

                </BotaoCondicional>
                {mostrarComentario &&(
                    <ContainerCurtir>
                        <div>
                            <InputComentar 
                            placeholder="comentario"
                            value={novosComentarios}
                            onChange={(e)=> setNovoComentario(e.target.value)}
                            />
                        </div>
                        {novosComentarios}
                    </ContainerCurtir>
                )}
                <Curtir autorID={autorID}/>
            </ContainerItem>
         
             

            
        </>
    )
}

export default Comentar