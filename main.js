$(document).ready(function() {
    $('#form-tarefa').on('submit', function(event) {
        event.preventDefault();
        let tarefa = $('#tarefa-input').val();
        if (tarefa) {
            $('#tarefa-lista').append('<li>' + tarefa + '</li>');
            $('#tarefa-input').val('');
        }
    });

    $('#tarefa-lista').on('click', 'li', function() {
        $(this).toggleClass('completado');
    });
});
