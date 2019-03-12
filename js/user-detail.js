var url = "http://localhost:63201/api/users/1";


$().ready(()=>
{
    console.log("ready!")

    $.getJSON(url)
        .done((resp)=>
        {
            console.log(resp);
            buildTable(resp);

        });
})

function buildTable(user)
{
    $("userbody").html("");
    {
        
        $("userbody").append(row);
    }
}