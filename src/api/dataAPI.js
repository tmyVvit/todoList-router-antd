import * as fType from '../constant/filterType'

const axios = require('axios')

const url = "http://localhost:8080/api/todos"
const dataAPI = {
    filter: fType.ALL,
    initTodos(filter, successCallback){
        this.filter = filter;
        let search=`/search/statusOfTodos?status=`
        if(filter===fType.ALL){
            search += `completed,active`
        }else{
            search += `${this.filter}`
        }
        axios
            .get(`${url}${search}`)
            .then(response=>{
                successCallback(response.data._embedded.todos)
            })
            .catch()
    },


    getRemoteList(filter, successCallback){
        this.filter = filter;
        let search=`/search/statusOfTodos?status=`
        if(filter===fType.ALL){
            search += `completed,active`
        }else{
            search += `${this.filter}`
        }
        axios
            .get(`${url}${search}`)
            .then(response=>{
                successCallback(response.data._embedded.todos)
            })
            .catch()
    },

    addItemRemote(content, successCallback){
        let item={
            uuid:generateUUID(),
            content,
            complete: false,
            status: fType.ACTIVE
        }
        axios
            .post(`${url}`, item)
            .then(response=>{
                let search=`/search/statusOfTodos?status=`
                        if(this.filter===fType.ALL){
                            search += `completed,active`
                        }else{
                            search += `${this.filter}`
                        }
                axios
                    .get(`${url}${search}`)
                    .then(response=>{
                        console.log(JSON.stringify(response.data._embedded.todos))
                        successCallback(response.data._embedded.todos)
                    })
                    .catch()
            })
            .catch()

    },

    checkItemRemote(id, complete, successCallback){
        axios
            .patch(`${url}/${id}`, {
                status: complete===true?
                            fType.ACTIVE:
                            fType.COMPLETE
            })
            .then(response=>{
                let search=`/search/statusOfTodos?status=`
                if(this.filter===fType.ALL){
                    search += `completed,active`
                }else{
                    search += `${this.filter}`
                }
                axios
                    .get(`${url}${search}`)
                    .then(response=>{
                        console.log("check get-------"+JSON.stringify(response.data._embedded.todos));
                        successCallback(response.data._embedded.todos)
                    })
                    .catch(error=>{
                        console.log("check get error-------");
                    })
            })
            .catch(error=>{
                console.log("check post error---------")
            })
    },

    modifyRemote(id, content, successCallback){
        axios
            .patch(`${url}/${id}`,{
                content,
            })
            .then(response=>{
                axios
                    .get(`${url}`)
                    .then(response=>{
                        console.log("modify get-------");
                        successCallback(response.data._embedded.todos)
                    })
                    .catch(error=>{
                        console.log("modify get error-------");
                    })
            })
            .catch(error=>{
                console.log("modify post error---------")
            })
    },
}

const generateUUID=()=> {
    /*jshint bitwise:false */
    var i,
        random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12
            ? 4
            : (i === 16
                ? (random & 3 | 8)
                : random)).toString(16);
    }
    return uuid;
}

export default dataAPI;