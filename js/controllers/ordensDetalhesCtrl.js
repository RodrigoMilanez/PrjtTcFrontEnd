angular.module("projetoTecnico").controller("ordensDetalheController", function ($scope, ordensService, $location, $routeParams){
    
    ordensService.getFuncId($routeParams.id).then(function (response) {
        $scope.ordens = response.data;
        console.log(response)
});
/*
$scope.deleteFuncionario = function (id) {
    funcionarioService.delete($routeParams.id).then(function (response) {
        $location.path("/funcionarios");
    }).catch(function (error) {
        alert("Você não tem permissão para deletar o cliente");
    });
};

$scope.alteraSenha = function (x, id) {
    // var senha = {
    //     senha:x,
    //     id:id
    // }
    funcionarioService.postSenha(x, id).then(function (response) {
        $location.path("/funcionarioPerfil/{{id}}" );
    }).catch(function (error) {
        alert("Falha na atualização de senha");
    });
};*/
})