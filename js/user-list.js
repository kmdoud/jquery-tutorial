var url = "http://localhost:63201/api/"


$().ready(()=> 
{
    console.log("ready!");

    $.getJSON(url+"users")
        .done((resp)=>
        {
            console.log(resp);
            buildTable(resp);
        });
});


 function buildTable(users)
{
    $("tbody").html("");
    for(var user of users)
    {
    var row = "<tr>";
    row += `<td> ${user.id}</td>`;
    row += `<td> ${user.username}</td>`;
    row += `<td> ${user.password}`;
    row += `<td> ${user.firstname}  ${user.lastname}</td>`;
    row += `<td> ${user.email}</td>`;
    row += `<td> ${user.phone}</td>`;
    row += `<td> ${user.isActive}</td>`;
    row += `<td> ${user.isReviewer} /${user.isAdmin}</td>`;
    row += `</tr>`;
    $("tbody").append(row);
    }
}