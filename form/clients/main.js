$(document).ready( function(){
    $('form').submit( function(event){
        event.preventDefault();
        const dataForServer = $(this).serialize();
        console.log(dataForServer);
        $.ajax({
            url: '/submit',
            method: 'post',
            data: dataForServer,
            success: function(responseFromServer){
                const htmlTags = `
                    <p>Name: ${responseFromServer.name}</p>
                `
                $('.formCont').html(htmlTags);
            }
        })

    })
})
