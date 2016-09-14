import ajax from './utils.js'
export default {

    async login(formData) {
            var json = JSON.stringify(formData);
            return await ajax.ajax({
                                       type: "POST",
                                       url: "/api/login",
                                       data: json,
                                       success: function(data) {
                                           localStorage.setItem("token", data.token);
                                           localStorage.setItem("username", formData.username);
                                           let arr = data.token.split(".")
                                           let decoded = atob(arr[1])
                                           let json = JSON.parse(decoded);
                                           localStorage.setItem("uid", json.userId);

                                           console.log(localStorage.getItem('uid'));
                                           console.log(localStorage.getItem('token'));
                                           console.log(localStorage.getItem('username'));

                                       },
                                       dataType: "json",
                                       contentType : "application/json"
                                   });
    },



    logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('uid');
    },

    checkAuth() {
            var token = localStorage.getItem('token')
            return token;
    },

    username() {
            var username = localStorage.getItem('username')
            return username;
    },

    uid() {
            let uid = localStorage.getItem('uid')
            return uid;
    },


    authHeader() {
            return {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
    },

    test() {
            var arr11 = $("#create-form");
            var arr = $("#create-form").serializeArray();
            var len = arr.length, arr2 = {};
            for ( var i=0; i < len; i+=1 ) {
                arr2[arr[i].name] = arr[i].value;
             }
            var formData = JSON.stringify(arr2);

            $.ajax({
                type: "POST",
                url: "/api/users",
                data: formData,
                success: function(data){
                    localStorage.setItem("token", data.token);
                },
                dataType: "json",
                contentType : "application/json",
                headers: {
                    'Authorization':'Bearer ' + localStorage.getItem("token")
                }
            });
    }

}