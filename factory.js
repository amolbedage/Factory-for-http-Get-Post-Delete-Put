(function () {
    'use strict';
angular.module('app')
   .factory('albumService', ['$http', '$q',
        function albumService($http, $q) {
            console.log('album service fired');

            // interface
            var service = {
                albums: [],                   
                albums1: [],                   
                getAlbums: getAlbums,
                getAlbumsSimple: getAlbumsSimple,
                save:save
            };
            return service;


            // implementation
            function getAlbums() {
                var def = $q.defer();

                $http.get("http://localhost/factory/data.php")
                    .success(function (data) {
                        service.albums = data;
                            
                        def.resolve(data);
                        console.log('albums (simple) returned to controller.', data);
                    })
                    .error(function () {
                       def.reject("Failed to get albums");
                    });
                return def.promise;
            }

            // implementation
            function getAlbumsSimple() {
                return $http.get("http://localhost/factory/data.php")
                    .success(function (albums) {
                        service.albums = albums;
                    });
            }
            
           /* //inolementation
              function save(info){
                           var def1=$q.defer();
                   $http.get('http://192.168.100.9/an/pl/save.php?info='+info)
                      .success(function(data) {
                        def1.resolve(data);
                           service.albums=data;
                       console.log(data);
                       console.log('amol');
                  }) .error(function () {
                       def.reject("Failed to get albums");
                    });
                return def1.promise;
                   
              }*/
            
            
              //inolementation
              function save(){
                           var def1=$q.defer();
                  var data =$.param({
                            name: 'sumit',
                            age: '25',
                            ss:'ss',
                            adress:'nashik'
                            });

                         var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}}
                        //Call the services

                        $http.post('http://localhost/factory/data.php', data,config).then(function (response) {
                        console.log(response);
                            def1.resolve(response);
                           service.albums=response;
                           console.log('amol');

                        }, function error(response) {

                        });
                return def1.promise;
                  // getAlbums();
              }
  
        }
    ]);


})();