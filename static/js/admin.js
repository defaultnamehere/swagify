function negateAmounts(form) {
    form = $(form);
    if ($("#remove").hasClass("active")) {
        $.each(form.find("input[name*='karma']"), function(i) {
            var v = $(this).val();
            console.log(v);
            $(this).val(-v);
        });
    }
    return true;
}

$(function() {


    function valform($form) {
        $form.validate({
            rules: {
                "name": {required:true},
                "reason": {required:true},
                "commit-hash": {required:true},
            }   
        });
    }
    $addform = $("form#add-karma");
    $removeform= $("form#remove-karma");
    //valform($addform);
    //valform($removeform);






    var $addbtn = $('button#add-person');
    var $delbtn = $('button#del-person');
    var $add_person_form = $('form#add-person');
    var $del_person_form = $('form#del-person');
    var $modify_form = $('div#modify-karma');
    var $karmabtn = $('button#modify-karma');

    var $toggle_add = $('button#add');
    var $toggle_remove = $('button#remove');
    var $removemode = true;
    var $removekarma_div = $('.remove-karma');
    var $addkarma_div = $('.add-karma');


$karmabtn.on('click', function() {

    $(".plinkitytab").hide();
    $modify_form.show();

});


    $addbtn.on('click', function()
        {
            $(".plinkitytab").hide();
                $add_person_form.show();
        });

    $delbtn.on('click', function() {
        $(".plinkitytab").hide();
        $del_person_form.show();
    });


    $toggle_remove.on('click', function() {

       $removekarma_div.show();
       $addkarma_div.hide();

    });
    $toggle_add.on('click', function() {

       $removekarma_div.hide();
       $addkarma_div.show();

    });

    //really get this from the DB
    $.ajax({
        url: "/getnames",
        dataType: 'json',
    })
    .done(function(data) {
        $('input.typeahead').typeahead(
            {source: data}
        );
    });

});
