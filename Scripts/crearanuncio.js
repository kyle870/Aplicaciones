var titlePost = document.getElementById("title-post");
var categoryPost = document.getElementById("category-post");
var precioPost = document.getElementById("precio-post");
var disponible = document.getElementById("disponible");
var condition = document.getElementById("condition");
var descript = document.getElementById("descript");
var nameComplet = document.getElementById("name-complet");
var direccion = document.getElementById("direccion");
var telCelular = document.getElementById("tel-celular");
var email = document.getElementById("email");
var deparment = document.getElementById("deparment");
var telConvencional = document.getElementById("tel-convencional");

document.getElementById("btn-postear").addEventListener("click", function () {

    if (!titlePost.value == "") {
        if (!categoryPost.value == "") {
            if (!precioPost.value == "") {
                if (!disponible.value == "") {
                    if (!condition.value == "") {
                        if (!descript.value == "") {
                            if (!nameComplet.value == "") {
                                if (!direccion.value == "") {
                                    if (!telCelular.value == "") {
                                        if (!email.value == "") {
                                            if (!deparment.value == "") {
                                                if (!telConvencional.value == "") {
                                                    var r = confirm("Todos sus datos son correctos. ¿Desea publicar su anuncio?");
                                                    if (r == true) {
                                                        location.reload();
                                                    } else {

                                                    }
                                                } else {
                                                    alert("Para continuar debera agregar el telefono convencional");
                                                }
                                            } else {
                                                alert("Para continuar debera agregar el departamento");
                                            }
                                        } else {
                                            alert("Para continuar debera agregar su correo electronico");
                                        }
                                    } else {
                                        alert("Para continuar debe agregar el telefono celular");
                                    }
                                } else {
                                    alert("Para continuar debe agregar la direccion");
                                }
                            } else {
                                alert("Para continuar debe agregar el nombre completo");
                            }
                        } else {
                            alert("Para continuar debe agregar la descripcion del anuncio");
                        }
                    } else {
                        alert("Para continuar debe seleccionar la condicion del anuncio");
                    }
                } else {
                    alert("Para continuar debe seleccionar la disponibilidad del anuncio");
                }

            } else {
                alert("Para continuar debe ingresar el precio del anuncio");
            }
        } else {
            alert("Para continuar debe seleccionar una categoria de anuncio");
        }
    } else {
        alert("Para poder continual ingrese un valor en el titulo del anuncio");
    }
});

categoryPost.addEventListener("change", function () {
    if (categoryPost.value == "5") {
        precioPost.value = "0";
        disponible.value = "";
        precioPost.disabled = true;
        disponible.disabled = false;
    } else {
        precioPost.value = "";
        disponible.value = "0";
        precioPost.disabled = false;
        disponible.disabled = true;
    }
});
