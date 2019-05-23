const button = document.getElementById('botao');

button.addEventListener('click', ()=>{
    event.preventDefault();

    let imputNome = document.getElementById('nomeCad').value
    let imputImagem = document.getElementById('imagemCad').value

fetch('http://localhost:5001/maravilhosas',{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        'title': imputNome,
        'image': imputImagem
    })
})
.then((response)=>{
    return response.json();
})
.then((data)=>{
    alert('Cadastrada')
    
})
.catch((erro)=>{
    console.log(erro)
})
})


let box = document.querySelector('.maravilhosas__box');

fetch('http://localhost:5001/maravilhosas')

.then((response)=>{
    return response.json()
})

.then((data)=>{

    data.content.forEach(mulher => {
        let perfil = document.createElement('div');
        perfil.setAttribute('class', 'maravilhosas__perfil');
        box.appendChild(perfil);

        let link = document.createElement('a');
        link.href = '#!';
        perfil.appendChild(link);

        let imagem = document.createElement('img');
        imagem.setAttribute('class','img-responsive');
        link.appendChild(imagem);
    
    
        let nome = document.createElement('p');
        nome.innerHTML = mulher.title;
        link.appendChild(nome);
        if(mulher.image){
            imagem.setAttribute('src', mulher.image)
        }else{
            if(mulher.metadata){
                if (mulher.metadata.image){
                    if (mulher.metadata.image.url){
                        return imagem.src = mulher.metadata.image.url
                    }
                }else{
                    return imagem.setAttribute('src','./img/img-mulher.png')
                }
            }else{
                return imagem.setAttribute('src','./img/img-mulher.png')
            };

        }
    })
})

.catch((erro)=>{
    console.log(erro)
})

