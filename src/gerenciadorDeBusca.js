var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
var ListaDeObjetos = [];

//Função que executa pesquisa dentro de toda a estrutura do projeto pedagógico.
function busca(){
	//Limpa a lista de objetos
	ListaDeObjetos = [];
	
	var diretorioApresentacao = 'src/data/apresentacao.json';
	carregaJson(diretorioApresentacao);
	
	var diretorioVisaoGeral = 'src/data/visaoGeral.json';
	carregaJson(diretorioVisaoGeral);
	
	//O arquivo ocurso.json está incompleto e inconsistente.
	//Assim que corrigir deve descomentar esse trecho.
	//var diretorioCurso = 'data/ocurso.json';
	//carregaJson(diretorioCurso);
	
	//Assim que definir um campo de busca na tela deve identificá-lo
	//com o id "campoBusca" e descomentar esse trecho.
	//var campoDeBusca = document.getElementById("campoBusca");
	//var chaveDeBusca = campoBusca.innerText;
	
	var chaveDeBusca = "Ciências Exatas e da Terra";
	
	searchJson(ListaDeObjetos, chaveDeBusca);
}

///Função que carrega um Objeto JSON de dentro da pasta de "dados" do projeto.
function carregaJson(diretorioArquivo){
	reader.open('get', diretorioArquivo, false); 
	reader.onreadystatechange = insereJsonNaLista();
    reader.send(null);
}

//Função que insere um objeto JSON carregando dentro da Lista de Objetos que será utilizada como parâmetro
//de busca do Fuse JS.
function insereJsonNaLista() {
    return function() {
        if(reader.readyState==4) {
		var texto = reader.responseText;
		var objetoJson = JSON.parse(texto); 
		
		for(var i = 0; i < objetoJson.length; i++){
			ListaDeObjetos.push(objetoJson[i]);
		}
    }
    };
}

//Função que usa do Fuse JS para pesquisar uma sequência de caracteres dentro da lista de objetos JSON
//passada como parâmetro.
function searchJson(listaDeObjetoJson, chaveDeBusca){

	var options = {
	  shouldSort: true,
	  threshold: 0.6,
	  location: 0,
	  distance: 100,
	  maxPatternLength: 32,
	  minMatchCharLength: 1,
	  keys: [
		"titulo",
		"descricao",
		"topicos.tipo",
		"topicos.titulo",
		"topicos.conteudo"
	]
	};
		
	var fuse = new Fuse(listaDeObjetoJson, options); 
	var resultado = fuse.search(chaveDeBusca);	
	
	if(resultado.length > 0){
		for (i = 0; i < resultado.length; i++) {
			criaElementoConteudoParaBusca(resultado[i])
		}	
	}
}

//Função que, com base em um objeto JSON, cria os elementos que irão servir para renderizar
//o objeto na tela.
//IMPORTANTE: Hoje está compatível apenas com os objetos em estrutura compatível os 3 primeiros itens do menu.
function criaElementoConteudoParaBusca(objetoJson){
	
	//Obtém a DIV onde as divs filha com conteúdo serão inseridas
	var divPai = document.getElementById("target");
	
	var divRow = document.createElement("div");
	divRow.className = "row";
	divPai.appendChild(divRow);
	
	var divCol = document.createElement("div");
	divCol.className = "col s12 m12";
	divRow.appendChild(divCol);
	
	var divCard = document.createElement("div");
	divCard.className = "card-panel";
	divCol.appendChild(divCard);
	
	//Inserindo DIV do elemento
	var divConteudo = document.createElement("div");
	divConteudo.className = "card-content grey-text text-darken-3";
	divConteudo.setAttribute("id","conteudo")
				
	//Inserindo o título
	var titulo = document.createElement("h4");
	titulo.innerHTML = objetoJson.titulo;
	divConteudo.appendChild(titulo);
		
	//Inserindo a descrição
	var textoInterno = document.createElement("p");
	textoInterno.innerHTML = objetoJson.descricao;
	divConteudo.appendChild(textoInterno);
	
	//Inserindo tópicos, se houver
	var topicos = objetoJson.topicos;
	if(topicos.length > 0){
		for (j = 0; j < topicos.length; j++) {
			objetoTopico = topicos[j];
			
			//Insere título do subtópico
			var subTitulo = document.createElement("h5");
			subTitulo.innerHTML = objetoTopico.titulo;
			divConteudo.appendChild(subTitulo);
			
			//Insere descrição do subtópico
			var textoSubtopico = document.createElement("p");
			textoSubtopico.innerHTML = objetoTopico.conteudo;
			divConteudo.appendChild(textoSubtopico);
		} 
	}
	
	divCard.appendChild(divConteudo);
}