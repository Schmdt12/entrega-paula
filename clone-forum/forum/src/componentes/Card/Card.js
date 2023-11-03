import React, { useContext, useEffect, useState } from 'react';
import { ButtonCard, CardPost, CardStyle, ContainerCard, ContainerCardHome, ContainerPerfil, ConteudoCard, EditPost, ImgCard, ImgPost, MensagemCard, NomeCard, PerfilUsuario, TituloCard } from './style';
import { getPostAll } from '../../services/requests';
import Comentar from '../Comentar/Comentar';
import { GlobalStateContect } from '../../GlobalState/GlobalStateContext';

function Card() {

  const[loading, SetLoading] = useState(true)
  const [forumTopics, setForumTopics] =useState=([])

  const {selectedPostID} = useContext(GlobalStateContect)

  useEffect(()=>{getPostAll(setForumTopics  )},[])

  return (
    <>
    <ContainerCardHome>
    {
      loading ?(
        <ContainerCard>
          {forumTopics && forumTopics.map(dado =>{
            return(
              <CardStyle key={dado.post.id}>
                <PerfilUsuario>
                  <ImgCard src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fmetal_gy%2Fstatus%2F1246073257456857092&psig=AOvVaw1Ozl01yrj9c3WJagDXV7lG&ust=1698419596210000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiQvKOAlIIDFQAAAAAdAAAAABAE'}/>
                <ContainerPerfil>
                  <NomeCard>{dado.creator_username}</NomeCard>
                  <MensagemCard>{dado.post_created_at}</MensagemCard>
                </ContainerPerfil>
                </PerfilUsuario>
                <TituloCard>{dado.post_title}</TituloCard>
                <CardPost>
                  <ImgPost src={dado.post_imagem} alt='foto post'/>
                  <ConteudoCard>{dado.post_content}</ConteudoCard>
                </CardPost>
                <EditPost>
                  <Comentar 
                   postID={dado.post_id}
                   comments={dado.comments}
                   autorID={dado.created_id}
                   />
                </EditPost>
              </CardStyle>
            )
          })}
        </ContainerCard>
      ):(<p>Loading</p>)
    }
   
    </ContainerCardHome>
    </>
  )
}

export default Card