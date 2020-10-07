const criarPost = () => {

    const tituloAqui = document.getElementById("titulo-post");
    const autorAqui = document.getElementById("autor-post");
    const conteudoAqui = document.getElementById("conteudo-post");

    const post = {
        titulo: tituloAqui.value,
        autor: autorAqui.value,
        conteudo: conteudoAqui.value
    
    }
        
    const arrayObjeto = []
    arrayObjeto.push(post);
    console.log(arrayObjeto);

    const containerPost = document.getElementById("container-de-posts");
            containerPost.innerHTML += `<p>${tituloAqui.value}</p>`
            containerPost.innerHTML += `<p>${autorAqui.value}</p>`
            containerPost.innerHTML += `<p>${conteudoAqui.value}</p>`
        
        
            tituloAqui.value = ""
            autorAqui.value = ""
            conteudoAqui.value = ""
}



    