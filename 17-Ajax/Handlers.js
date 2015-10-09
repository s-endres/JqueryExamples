/*

    Ajax Event Handlers
        -ajaxSend()
        -ajaxStart()
        -ajaxStop()
        -ajaxComplete()
        -ajaxSuccess()
        -ajaxError()

    Helper Functions
        -JQuery.param()
            * $.param({ a: [2, 3, 4]}); // "a[] = 2&a[]=3&a[]=4"
            * $.param({ a: { b: 1, c: 2}, d: [3, 4 {e: 5}]}); // "a[b]=1&a[c]=2&d[]=3&d[]=4&d[2][e]=5"

        -serialize()         
            *$("#myForm").on("submit", function(e){
                console.log($(this).serialize());
                e.preventDefault();
            })
        -seralizeArray()     
            *$("#myForm").on("submit", function(e){
                console.log($(this).serializerArray());
                e.preventDefault();
            })

    Low-Level Interface
        -$.ajax() -> Http request asincrona
        -$.ajaxPrefilter() -> Antes de mandar el request, permite manipular las opciones del ajax.
        -$.ajaxStup() -> Setea valores para futuros Ajax Requests
        -$.ajaxTransport() -> Permite manejar custom data types en transiciones de ajax


    Url Request
        - url?$select=nameInJason
        - POST, GET, DELETE, PUT

    Shothand Methods
        -$.get() -> Carga data del server usando http get
        -$.post() -> Carga data del server usando http post
        -$.getJSON() -> Carga Json Data del servidor usando http get
        -$.getScript() -> Carga archivo javascript usando http get y lo ejecuta
        -load() -> Carga la data html del servidor, y lo asigna a donde sea especificado

    Deferred Object // Puede invocar callbacks queues con exito o fracaso asincrono. Puede ser encadenado pero es un objecto diferente que JQuery
        time > 4:01.
        -$.Deferred()
        -deferred.promise()
        -deferred.then() and .done()
        -deferred.fail() and .always()
        -$.when()
        .promise()



*/