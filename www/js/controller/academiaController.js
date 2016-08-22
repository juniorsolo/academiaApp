angular.module("academiaApp").controller('academiaController', function($scope,$cordovaVibration,$cordovaCamera){
   var carregarCategorias = function(){ return ["BICEPS","COSTAS","TRICEPS","PEITORAL","PERNAS","DELTOIDE","TRAPEZIO","GLUTEO"]};
   $scope.categorias = carregarCategorias();
   $scope.categorias.sort();
   $scope.exercicios=[{nome:"Rosca Direta",categoria:"BICEPS"},
	                 {nome:"Rosca Concentrada",categoria:"BICEPS"},
					 {nome:"Rosca Alternada",categoria:"BICEPS"},  
					 {nome:"Pulley",categoria:"TRICEPS"},
					 {nome:"Pulley Supinado",categoria:"TRICEPS"},
					 {nome:"Pulley Corda",categoria:"TRICEPS"},
					 {nome:"Pulley Frontal",categoria:"COSTAS"},
					 {nome:"Remada Fechada",categoria:"COSTAS"},
					 {nome:"Cavalo",categoria:"COSTAS"},
					 {nome:"Pundow",categoria:"COSTAS"},
					 {nome:"Supino Reto",categoria:"PEITORAL"},
					 {nome:"Supino Inclinado",categoria:"PEITORAL"},
					 {nome:"Crucifixo Inclinado",categoria:"PEITORAL"},
					 {nome:"Supino Declinado",categoria:"PEITORAL"},
					 {nome:"Legg Press",categoria:"PERNAS"},
					 {nome:"Avan�o",categoria:"PERNAS"},
					 {nome:"Cadeira Extensora",categoria:"PERNAS"},
					 {nome:"Cadeira Flexora",categoria:"PERNAS"},
					 {nome:"Cadeira Adutora",categoria:"PERNAS"},
					 {nome:"Cadeira Abdutora",categoria:"PERNAS"},
					 {nome:"Desenvol. Frontal",categoria:"DELTOIDE"},
					 {nome:"Arnold Press. + Desenv.",categoria:"DELTOIDE"},
					 {nome:"Eleva��o Frontal",categoria:"DELTOIDE"},
					 {nome:"Eleva��o Lateral",categoria:"DELTOIDE"},
					 {nome:"Eleva��o Posterior",categoria:"DELTOIDE"},
					 {nome:"Remada Alta",categoria:"TRAPEZIO"}	 
					 ];
	$scope.historico = [{data: new Date(2016,07,07), treino:"PEITORAL,BICEPS"},
	                    {data: new Date(2016,07,10), treino:"PERNAS"},
						{data: new Date(2016,07,12), treino:"COSTAS, TRICEPS"},
						{data: new Date(2016,07,13), treino:"DELTOIDE"},
						{data: new Date(2016,07,14), treino:"PEITORAL,BICEPS"},
						{data: new Date(2016,07,15), treino:"PERNAS"},
						{data: new Date(2016,07,17), treino:"COSTAS, TRICEPS"}];				 
	$scope.treinosDoDia=[];
    $scope.dataGravarTreino = new Date();
	$scope.categoriaSelecionada = "";
	
	document.addEventListener("deviceready", function () {
        console.log(navigator.vibrate);
     }, false);
	 
  
	 
	function vibrate() {
        navigator.vibrate(300);
    } 
	
	function onPhotoURISuccess(imageURI) {
		// Uncomment to view the image file URI
		console.log(imageURI);
		// Get image handle
		//
		var galleryImage = document.getElementById('image');
		// Unhide image elements
		//
		galleryImage.style.display = 'block';
		// Show the captured photo
		// The inline CSS rules are used to resize the image
		//
		galleryImage.src = imageURI;
	}
	
	
	function foto(){

			// Take picture using device camera and retrieve image as base64-encoded string
			navigator.camera.getPicture(onPhotoDataSuccess("image/"), onFail, {
			quality: 30,
			targetWidth: 600,
			targetHeight: 600,
			destinationType: destinationType.FILE_URI,
			saveToPhotoAlbum: true
			});
	    
	};
	 
	$scope.addTreino = function(){
		if($scope.categoriaSelecionada != ""){
		  $scope.treinosDoDia.push($scope.categoriaSelecionada);
		  $scope.categorias = removeItemOfArray($scope.categorias, $scope.categoriaSelecionada);
		  $scope.categoriaSelecionada = "";
		  vibrate(); // vibrate();
        } 		
	};
	$scope.removerTreino = function(treino){
		$scope.treinosDoDia = removeItemOfArray($scope.treinosDoDia, treino)
		$scope.categorias.push(treino);
		$scope.categorias.sort();
        vibrate();   		
	};

	$scope.salvarTreino = function(){
		$scope.categoriaSelecionada = "";
		$scope.treinosDoDia=[];
		$scope.categorias = carregarCategorias();
		
	};
    var removeItemOfArray= function(array , itemRemover){	    
			var index = array.indexOf(itemRemover);
			if(index != -1){
				array.splice(index,1);
				return array;
			}	
    };
}); 