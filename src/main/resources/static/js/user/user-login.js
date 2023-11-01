let login_id = $('#login-id');
let login_pwd = $('#login-pwd');
let login_btn = $('#btn-login');

$(login_btn).on('click', function(){
    if($(login_id).val() === ""){
        $(login_id).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if($(login_pwd).val () === ""){
        $(login_pwd).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
});