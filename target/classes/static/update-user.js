 function sendUpdateRequest() {
        var userId = document.getElementById("id").innerHTML;
        console.log("id=", userId);
        var url = "http://localhost:8080/user/test/"+userId;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('GET', url, true);
            xmlhttp.setRequestHeader('Content-Type', 'application/json')
            xmlhttp.send();
            xmlhttp.onreadystatechange = function() {
               if (xmlhttp.readyState == 4) {
                  if ( xmlhttp.status == 200) {
                    var user = xmlhttp.response;
                    console.log("user", JSON.parse(user));
                    fillForm(JSON.parse(user));
                 }
              }
        };
    }
    function fillForm(user){
            var name = document.getElementById("name");
            if(user.name != undefined){
                name.value = user.name;
            }

            var password = document.getElementById("password");
            if(user.password != undefined){
                password.value = user.password;
            }

            var firstName = document.getElementById("firstName");
            if(user.firstName != undefined){
                firstName.value = user.firstName;
            }

            var lastName = document.getElementById("lastName");
            if(user.lastName != undefined){
                lastName.value = user.lastName;
            }

            var birthday = document.getElementById("birthday");
            if(user.birthday != undefined){
                birthday.value = user.birthday;
            }

            var userGroupList = document.getElementById("userGroupList");
            if(user.userGroupList != undefined){
                userGroupList.value = user.userGroups;
            }
    }