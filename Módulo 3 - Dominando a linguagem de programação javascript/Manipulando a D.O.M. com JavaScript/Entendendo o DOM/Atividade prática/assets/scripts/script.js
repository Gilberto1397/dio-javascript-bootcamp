let botao = document.getElementById("botao");
let texto = document.getElementById("texto");
let caixa1 = document.getElementById("caixa1");

(
    function(){
        botao.addEventListener("click", function(){
            if (!caixa1.classList.contains("caixaPreta")) {
                texto.innerText = "Dark Mode ON";               
                botao.innerText = "Light Mode";
                //console.log(texto.innerHTML);
            }else{
                texto.innerText = "Ligth Mode ON";               
                botao.innerText = "Dark Mode";
            }
            texto.classList.toggle("textoBranco");
            caixa1.classList.toggle("caixaPreta");
            botao.classList.toggle("corBotao1");
            botao.classList.toggle("corBotao2"); 
        })
    }
)();