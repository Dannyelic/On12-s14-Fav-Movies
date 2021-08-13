<h2 align="center"> Semana 14 - Fav movies 🎞
<img align="left" alt="totoro_png" height="120" width="200" src="https://images.pngnice.com/download/2007/My-Neighbor-Totoro-PNG-Image.png"></br></h2>
<p align="center"> Para você que também ama filmes dos estúdios Pixar, Marvel e Studio Ghibli, este é o lugar certo!<br> E nada melhor que reunir alguns dos maiores sucessos de bilheteria para serem armazenados no banco de dados.<p>
  
> O que temos desses dados?

```
   
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 tituloController.js
   |         |- 📄 estudioController.js
   |
   |    |- 📁 models
   |         |- 📄 titulo.js
   |         |- 📄 estudio.js
   |
   |    |- 📁 routes
   |         |- 📄 titulos.routes.js 
   |         |- 📄 estudios.routes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 estudios.json
   |- 📄 package
   |- 📄 server.js
   |- 📄 titulos.json

```
> O que fazer com estes dados?
  
- [x]  **"/titulos/marvel"** Deverá retornar todos os títulos com o estudio Marvel
- [x]  **"/titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
- [x]  **"/titulos/pixar"** Deverá retornar todos os títulos com o estudio Pixar

- [x]  **"/estudios"** Deverá retornar todos os estudios cadastrados
- [x]  "**/titulos**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

- [x]  "**/estudios**" Deverá criar um estudio 
- [x]  "**/titulos**"  Deverá criar um título 

- [x]  "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável
- [x]  "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

- [x]  "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [x]  "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado
  
> Parâmetros a serem considerados:

- [x]  Não deverá ser possível criar estudio com o mesmo nome
- [x]  Não deverá ser possível criar título com o mesmo nome
- [x]  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição

  ##
  
> Após seguir os passos, foram criados os seguintes ``objetos`` de Estúdios e Títulos:
  
Estúdios:
 ```` json
  [
    {
        "CriadoEm": "2021-08-13T13:45:42.232Z",
        "_id": "611678da7266fe7640a0942d",
        "nome": "Marvel",
        "__v": 0
    },
    {
        "CriadoEm": "2021-08-13T13:45:42.232Z",
        "_id": "611678e57266fe7640a09430",
        "nome": "Pixar",
        "__v": 0
    },
    {
        "CriadoEm": "2021-08-13T13:45:42.232Z",
        "_id": "611678f77266fe7640a09433",
        "nome": "Studio Ghibli",
        "__v": 0
    }
]
  
````
</br>
Títulos:

```` json
[
    {
        "criadoEm": "2021-08-13T13:45:42.241Z",
        "_id": "6116794e7266fe7640a09437",
        "nome": "Soul",
        "genero": "Fantasia",
        "descricao": "Joe é um professor de música do ensino médio apaixonado por jazz, cuja vida não foi como ele esperava. Quando ele viaja a uma outra realidade para ajudar outra pessoa a encontrar sua paixão, ele descobre o verdadeiro sentido da vida.",
        "estudio": {
            "CriadoEm": "2021-08-13T13:45:42.232Z",
            "_id": "611678e57266fe7640a09430",
            "nome": "Pixar",
            "__v": 0
        },
        "__v": 0
    },
    {
        "criadoEm": "2021-08-13T13:45:42.241Z",
        "_id": "611679767266fe7640a0943a",
        "nome": "Viva – A Vida É uma Festa",
        "genero": "Aventura",
        "descricao": "Apesar da proibição da música por gerações de sua família, o jovem Miguel sonha em se tornar um músico talentoso como seu ídolo Ernesto de la Cruz. Desesperado para provar seu talento, Miguel se encontra na deslumbrante e colorida Terra dos Mortos. Depois de conhecer um charmoso malandro chamado Héctor, os dois novos amigos embarcam em uma jornada extraordinária para desvendar a verdadeira história por trás da história da família de Miguel.",
        "estudio": {
            "CriadoEm": "2021-08-13T13:45:42.232Z",
            "_id": "611678e57266fe7640a09430",
            "nome": "Pixar",
            "__v": 0
        },
        "__v": 0
    },
    {
        "criadoEm": "2021-08-13T13:45:42.241Z",
        "_id": "611679947266fe7640a0943d",
        "nome": "Os Incríveis",
        "genero": "Aventura",
        "descricao": "Depois que o governo baniu o uso de superpoderes, o maior herói do planeta, o Sr. Incrível, vive agora uma vida normal e pacata com sua família. Apesar de feliz com a vida doméstica, o Sr. Incrível ainda sente falta dos tempos em que viveu como super-herói, e sua grande chance de entrar em ação novamente surge quando um velho inimigo volta a atacar. Só que agora ele terá que contar com a ajuda de toda a família para vencer o vilão!",
        "estudio": {
            "CriadoEm": "2021-08-13T13:45:42.232Z",
            "_id": "611678e57266fe7640a09430",
            "nome": "Pixar",
            "__v": 0
        },
        "__v": 0
    },
    {
        "criadoEm": "2021-08-13T13:45:42.241Z",
        "_id": "611679da7266fe7640a09444",
        "nome": "Ponyo: Uma Amizade que Veio do Mar",
        "genero": "Fantasia",
        "descricao": "O garoto Sousuke encontra um peixinho dourado preso em uma garrafa e decide libertá-lo, sem saber que se trata da deusa do mar Ponyo. Filha de um poderoso mago, ela se comove com a atitude do menino e usa a magia do pai para se transformar em humana. Dessa forma, acredita poder fortalecer a amizade com Sousuke. Porém, a substância de sua poção mágica pode colocar em risco o vilarejo onde mora o menino.",
        "estudio": {
            "CriadoEm": "2021-08-13T13:45:42.232Z",
            "_id": "611678f77266fe7640a09433",
            "nome": "Studio Ghibli",
            "__v": 0
        },
        "__v": 0
    },
    {
        "criadoEm": "2021-08-13T13:45:42.241Z",
        "_id": "611679fb7266fe7640a09447",
        "nome": "A Viagem de Chihiro",
        "genero": "Fantasia",
        "descricao": "Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los.",
        "estudio": {
            "CriadoEm": "2021-08-13T13:45:42.232Z",
            "_id": "611678f77266fe7640a09433",
            "nome": "Studio Ghibli",
            "__v": 0
        },
        "__v": 0
    },
    {
        "criadoEm": "2021-08-13T13:45:42.241Z",
        "_id": "61167a1e7266fe7640a0944a",
        "nome": "O Castelo Animado",
        "genero": "Fantasia",
        "descricao": "Uma bruxa lança uma terrível maldição sobre a jovem Sophie transformando-a numa velha de 90 anos. Desesperada, ela embarca numa odisseia em busca do Castelo Andante, onde reside um misterioso feiticeiro que poderá ajudá-la a reverter o feitiço.",
        "estudio": {
            "CriadoEm": "2021-08-13T13:45:42.232Z",
            "_id": "611678f77266fe7640a09433",
            "nome": "Studio Ghibli",
            "__v": 0
        },
        "__v": 0
    },
    {
        "criadoEm": "2021-08-13T13:45:42.241Z",
        "_id": "61167a707266fe7640a09451",
        "nome": "Guardiões da Galáxia",
        "genero": "Ação",
        "descricao": "O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia.",
        "estudio": {
            "CriadoEm": "2021-08-13T13:45:42.232Z",
            "_id": "611678da7266fe7640a0942d",
            "nome": "Marvel",
            "__v": 0
        },
        "__v": 0
    },
    {
        "criadoEm": "2021-08-13T13:45:42.241Z",
        "_id": "61167a957266fe7640a09454",
        "nome": "Pantera Negra",
        "genero": "Ação",
        "descricao": "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados.",
        "estudio": {
            "CriadoEm": "2021-08-13T13:45:42.232Z",
            "_id": "611678da7266fe7640a0942d",
            "nome": "Marvel",
            "__v": 0
        },
        "__v": 0
    },
    {
        "criadoEm": "2021-08-13T13:45:42.241Z",
        "_id": "61167aa87266fe7640a09457",
        "nome": "Homem-Formiga",
        "genero": "Ação",
        "descricao": "Dr. Hank Pym transforma um talentoso ladrão no herói Homem-Formiga. Ele quer impedir que seu antigo pupilo consiga replicar a fórmula da roupa que dá o poder do encolhimento, força sobre-humana e a capacidade de controlar um exército de formigas.",
        "estudio": {
            "CriadoEm": "2021-08-13T13:45:42.232Z",
            "_id": "611678da7266fe7640a0942d",
            "nome": "Marvel",
            "__v": 0
        },
        "__v": 0
    }
]
````
##
#### Conecte-se comigo!
  <a href="https://www.linkedin.com/in/dannyeli-silva-47152115b/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> </br>
  <a href="https://www.instagram.com/dannyelic/?hl=pt-br" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
