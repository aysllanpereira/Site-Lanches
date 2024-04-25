
// função para mostrar o menu lanches e ocultar o sobre nos
function mostrarMenuLanches() {
    document.getElementById("content").style.display = "block";
    document.getElementById("sobreNos").style.display = "none";
}

// função para exibir sobre nos e ocultar o menu lanches
function exibirSobreNos() {
    const sobreNos = document.getElementById("sobreNos");
    if(sobreNos.style.display === "none"){
        sobreNos.style.display = "block";
    } else {
        sobreNos.style.display = "none";
    }
    
}

// função para rolar a página
function rolarPagina(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#menuAtual").addEventListener("click", function(event) {
        event.preventDefault();
        rolarPagina("#rolarPagina");
    });

    document.querySelector("#localizacao").addEventListener("click", function(event) {
        event.preventDefault();
        rolarPagina("#loc");
    });

    document.querySelector("#sobreNos").addEventListener("click", function(event) {
        event.preventDefault();
        rolarPagina("#sobreNos");
    })
});

// função para rolar o menu de volta ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Função para mostrar/ocultar o botão "Retornar ao Menu" conforme a rolagem
window.onscroll = function () {
    const button = document.getElementById("back-to-top");
    const rodape = 200;
    if(document.body.scrollTop > rodape || document.documentElement.scrollTop > rodape) {
        button.style.bottom = (rodape + 20) + "px";
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// função para exibir o menu
function clickMenu() {
    const menu = document.getElementById("itens");
    const closeMenu = document.getElementById("closeMenu");
    const burguerIcon = document.getElementById("burguer");

    if (!menu.classList.contains("open")) {
        menu.classList.add('open');
        closeMenu.style.display = "block";
        burguerIcon.style.display = "none";
    } else {
        menu.classList.remove("open");
        closeMenu.style.display = "none";
        burguerIcon.style.display = "block";
    }
}

// função para fechar o menu
function fecharMenu() {
    const menu = document.getElementById("itens");
    const closeMenu = document.getElementById("closeMenu");
    const burguerIcon = document.getElementById("burguer");

    menu.classList.remove("open");
    closeMenu.style.display = "none";
    burguerIcon.style.display = "block";
}

// função para mostrar o carrinho de compra 
/* window.addEventListener("scroll", () => {

    let entrega = document.getElementById("entrega");
    console.log(entrega);

    if(window.scrollY > 200) {
        entrega.classList.add("show");
    } else {
        entrega.classList.remove("show");
    }

}); */