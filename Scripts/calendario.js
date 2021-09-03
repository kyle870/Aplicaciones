$(document).ready(function() {


    var today = new Date();

    var events = [{
        id: "1",
        name: "Apple Macbook Pro",
        description: "Ningun interesado en el anuncio todavia...",
        date: today.getMonth() + 1 + "/1/" + today.getFullYear(),
        type: "event"
    }, {
        id: "2",
        name: "Licuadora Power Max Full Yes",
        description: "A tres usuarios les interesa este anuncio...",
        date: today.getMonth() + 1 + "/2/" + today.getFullYear(),
        type: "event"
    }, {
        id: "3",
        name: "Casa La Gran Sultana",
        description: "El usuario Alice notifico interes en tu anuncio...",
        date: [today.getMonth() + 1 + "/3/" + today.getFullYear()],
        type: "event",
        everyYear: !0
    }, {
        id: "4",
        name: "Vacantes de empleo",
        description: "El anuncio esta proximo a vencerse...",
        date: today.getMonth() + 1 + "/5/" + today.getFullYear(),
        type: "event"
    }];


    $('#calendar').evoCalendar({
        theme: 'Midnight Blue',
        language: 'es',
        todayHighlight: true,
        sidebarDisplayDefault: false,
        // eventDisplayDefault: false,
        format: 'dd MM, yyyy',
        eventHeaderFormat: 'dd MM, yyyy',
        calendarEvents: events
    })



})