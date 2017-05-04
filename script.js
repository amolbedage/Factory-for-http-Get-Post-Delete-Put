(function () {
    'use strict';

    
angular.module('app')
.controller('albumsController',  function albumsController($scope, albumService,myConfig) {

   console.log(myConfig);
            var vm = this;
          vm.albums = [];
            vm.simpleMode = true;

            vm.getAlbums = function () {
                albumService.getAlbums()
                    .then(function (albums) {                        
                        
                        vm.albums = albums;
                        console.log('albums (promises) returned to controller.', albums);
                    },
                    function () {
                        console.log('albums retrieval failed.');
                    });
            };

            vm.getAlbumsSimple = function () {
                albumService.getAlbumsSimple()
                    .success(function (albums) {                        
                       
                        vm.albums = albums;
                        console.log('albums returned to controller.', vm.albums);
                    })
                    .error(function (http, status, fnc, httpObj) {
                        console.log('albums retrieval failed.', http, status, httpObj);
                    });
            };

            vm.toggleSimpleMode = function(mode) {                
                vm.simpleMode = mode;
                if (vm.simpleMode)
                    vm.getAlbumsSimple();
                else
                    vm.getAlbums();
            }
        console.log(vm.simpleMode);
            if (vm.simpleMode)
                vm.getAlbumsSimple();
            else
                vm.getAlbums();
            
            
            $scope.saveinfo=function(info){
                     albumService.save()
                    .then(function (res) {                        
                        
                        vm.albums1 = res.data;
                        console.log('Post (promise).', res);
                         vm.getAlbums();
                    },
                    function () {
                        console.log('Post retrieval failed.');
                    });
            }
        }
    );
})();