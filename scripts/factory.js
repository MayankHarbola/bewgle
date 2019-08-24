app.factory("factory",($http,$q,PRODUCT_URL)=>{
 return{
       getData(){
        let defer = $q.defer();

        $http.get(PRODUCT_URL).then((data)=>{
            defer.resolve(data);   
        },(error)=>{
            defer.reject(error);
        });

        return defer.promise;
      }
}
})