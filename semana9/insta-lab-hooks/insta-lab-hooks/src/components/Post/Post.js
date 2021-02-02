import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  /*o valor inicial do estado está guardado pela variável curtido, primeiro elemento do array. O seu valor inicial
  é o booleano false, que está sendo passado como parâmetro dentro do useState.*/
  /**Para mudarmos esse valor, devemos usar a funcao setCurtido, que equivale a funcao
   * this.setState para a propriedade curtido do estado
   */
  const [curtido,setCurtido] = useState(false)
  const [numeroCurtidas,setNumeroCurtidas] = useState(0)
  const [comentando,setComentando] = useState(false)
  const [numeroComentarios,setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])
  
  /**Esse método é usado para criar a lógica de mudar a cor do ícone de curtida
  para preto ou branco, de acordo com a curtida ou descurtida do usuário. */
  const onClickCurtida = () => {
    if(curtido){
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  };
  
  /**responsável por mudar a caixa de comentário 
  entre input/botão de enviar e os comentários do post. */
  const onClickComentario = () => {
    setComentando(!comentando)
  };
  
  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]
    
    setComentarios(listaDeComentarios)
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }
  
  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  //responsável por mudar a caixa de comentário entre input/botão de enviar e os comentários do post.
  const caixaDeComentario = comentando ? (<SecaoComentario enviarComentario={enviarComentario}/>) : (
    comentarios.map((comentario) => {

      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post