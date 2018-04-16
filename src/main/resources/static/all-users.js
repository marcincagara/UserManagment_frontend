
 window.onload = getAllUsers();

    function getAllUsers() {
        var url = "http://localhost:8080/user/list";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function() {
               var empname =  document.getElementById("empname");
               var age =  document.getElementById("age");
               if (xmlhttp.readyState == 4) {
                  if ( xmlhttp.status == 200) {
                       var response = JSON.parse(xmlhttp.response);

                       addUsersToTable(response);
                 }
                 else
                       alert("Error ->" + xmlhttp.responseText);
              }
        };
    }


    function addUsersToTable(response){


        var tableRef = document.getElementById('allUsers').getElementsByTagName('tbody')[0];
        for (var i = 0; i < response.length; i++) {




            var row = document.createElement("tr");


            var deleteButton = document.createElement("BUTTON");
            deleteButton.setAttribute("class", "btn btn-danger");
            deleteButton.setAttribute("onclick", "sendDeleteRequest("+response[i].id+")");
            var d = document.createTextNode("Usuń");
            deleteButton.appendChild(d);

            var updateButton = document.createElement("BUTTON");
            updateButton.setAttribute("class", "btn btn-info");
            var user = JSON.stringify(response[i]);
            console.log("user",user);
//            updateButton.setAttribute("onclick", "sendUpdateRequest("+user+")");
            updateButton.setAttribute("onclick", "location.href='http://localhost:8081/update/"+response[i].id+"'");
            var u = document.createTextNode("Edytuj");
            updateButton.appendChild(u);

             var cellName = document.createElement("td");
             var cellPassword = document.createElement("td");
             var cellFirstName = document.createElement("td");
             var cellLastName = document.createElement("td");
             var cellBirthday = document.createElement("td");
             var cellGroupList = document.createElement("td");
             var cellDelete = document.createElement("td");
             var cellUpdate = document.createElement("td");

              var name  = document.createTextNode(response[i].name);
              var password  = document.createTextNode(response[i].password);
              var firstName  = document.createTextNode(response[i].firstName);
              var lastName  = document.createTextNode(response[i].lastName);
              var dateOfBirth  = document.createTextNode(response[i].dateOfBirth);
              var userGroups  = document.createTextNode(response[i].userGroups);

            cellName.appendChild(name);
            cellPassword.appendChild(password);
            cellFirstName.appendChild(firstName);
            cellLastName.appendChild(lastName);
            cellBirthday.appendChild(dateOfBirth);
            cellGroupList.appendChild(userGroups);
            cellDelete.appendChild(deleteButton);
            cellUpdate.appendChild(updateButton);

            row.appendChild(cellName);
            row.appendChild(cellPassword);
            row.appendChild(cellFirstName);
            row.appendChild(cellLastName);
            row.appendChild(cellBirthday);
            row.appendChild(cellGroupList);
            row.appendChild(cellDelete);
            row.appendChild(cellUpdate);

            tableRef.appendChild(row);
        }
    }

    function sendDeleteRequest(id){
        var url = "http://localhost:8080/user/"+id;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('DELETE', url, true);
            xmlhttp.setRequestHeader('Content-Type', 'application/json')
            xmlhttp.send();
            xmlhttp.onreadystatechange = function() {
               if (xmlhttp.readyState == 4) {
               console.log("AA");
               //location.href='http://localhost:8081/users'
                  if ( xmlhttp.status == 204) {
                       var response = JSON.parse(xmlhttp.response);
                       console.log("Pomyślnie usunąłeś użytkownika");
                       alert("Pomyślnie usunąłęś użytkownika");
                 }

              }
        };
    }

    function sendUpdateRequest(user){
    console.log(user);
    console.log(JSON.stringify(user));

        var url = "http://localhost:8081/update";
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('POST', url, true);
            xmlhttp.setRequestHeader('Content-Type', 'application/json')
            xmlhttp.send(JSON.stringify(user));
            xmlhttp.onreadystatechange = function() {
               if (xmlhttp.readyState == 4) {
                  if ( xmlhttp.status == 200) {
                    window.location.href = 'http://localhost:8081/add/';
                       console.log("Pomyślnie usunąłeś użytkownika");
                 }


              }
        };
    }
