let join_id = $('#join-id');
let join_pwd = $('#join-pwd');
let join_name = $('#join-name');
let join_email = $('#join-email');
let join_btn = $('#btn-join');

$(join_btn).on('click', function(){
    if($(join_id).val() === ""){
        $(join_id).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if($(join_pwd).val () === ""){
        $(join_pwd).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if($(join_name).val () === ""){
        $(join_name).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if($(join_email).val () === ""){
        $(join_email).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
});