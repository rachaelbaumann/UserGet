$().ready(() => {
    $.getJSON("http://localhost:8080/Users/Get/1")
        .then((resp) => {
            console.log(resp);
            render(resp.data);
        })
});

function render(user) {
    $("#ID").val(user.id);
    $("#username").val(user.userName);
    $("#name").val(user.firstName + " " + user.lastName);
    $("#phone").val(user.phoneNumber);
    $("#email").val(user.email);
    $("#reviewer").prop("checked", user.reviewer);
    $("#admin").prop("checked", user.admin);
}