function addUser(form){
    var name = form.name.value;
    var password = form.password.value;
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var dateOfBirth = form.birthday.value;
    var groupList = form.userGroupList.value.split(",");
    var userGroups = [];
    for(var i = 0; i < groupList.length; i++){
        userGroups.push({"name": groupList[i]});
    }

    var userJSON = {"name" : name,
    "password": password,
    "firstName": firstName,
    "lastName": lastName,
    "dateOfBirth": dateOfBirth,
    "userGroups": userGroups}
    console.log("User:", userJSON);
    console.log("User:", JSON.stringify(userJSON));
    var url = "http://localhost:8080/user/";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json')
    xmlhttp.send(JSON.stringify(userJSON));
    xmlhttp.onreadystatechange = function() {
       if (xmlhttp.readyState == 4) {

          if ( xmlhttp.status == 201) {
          location.href='http://localhost:8081/users'
          console.log("DUPA")
              console.log(xmlhttp.response);

               }
               else
               console.log("SRAKA")
         }
      }
    }



