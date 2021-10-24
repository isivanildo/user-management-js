var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

function addLine(userData) {

    document.getElementById("table-user").innerHTML = `
        <tr>
            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${userData.name}</td>
            <td>${userData.email}</td>
            <td>${userData.admin}</td>
            <td>${userData.birth}</td>
            <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>`
}

document.getElementById("form-user-create").addEventListener("submit", function(event){
    
    event.preventDefault();

    fields.forEach(function(field, index) {

        if (field.name == "gender") {
            if (field.checked) {
                user[field.name] = field.value;
            }
        } else {
            user[field.name] = field.value;
        }
    
    })

    var objetoUser = new User(
        user.name, 
        user.gender, 
        user.birth, 
        user.country,
        user.email, 
        user.password, 
        user.phoyo, 
        user.admin
        );


    addLine(objetoUser);

})