$(document).ready(function() {
    $('#hello-User').hide();

    $('#actionlogin').click(function(e) {
        e.preventDefault();
        let user = $('#userlogin').val();
        let password = $('#passwordlogin').val();
        console.log(user);
        console.log(password);
        if (user == 'abc' && password == 'xyz') {
            alert("Đăng nhập thành công.");
            $('#login').hide();
            $('.form-login').hide(400);
            $('#signup').hide();
            $('.modal-backdrop').remove('.modal-backdrop');
            $('#body').removeClass('modal-open');
            $('#hello-User').show();
        } else {
            alert("user hoặc password không đúng.");
        }
    });

    $('#actionsignup').click(function(e) {
        e.preventDefault();
        alert("Đăng ký thành công.");
        $('.form-signup').hide(400);
        $('#signup').hide();
        $('.modal-backdrop').remove('.modal-backdrop');
    });
});