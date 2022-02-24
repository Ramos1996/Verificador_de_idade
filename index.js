function verificar (){
    var ns = document.getElementById ('nasc');
    var an = Number(ns.value)
    var mg= document.getElementById ('msg')
    var ano = new Date ()
    var dt = ano.getFullYear()
    var v3 = dt - an
    var sex = document.getElementsByName ('radsex')
    var gen = ''
    var img = document.getElementById ('imagem')

    if (an == 0 || an > 2022){
        window.alert ('[ERRO] Digite um campo válido!!')
        
    }
    else if (sex[0].checked){

        gen='feminino'
        img.src = 'mulher.jpg'
        mg.innerHTML = `Sua idade é ${v3} anos e seu sexo é ${gen}`
        
    } else{
        gen='masculino'
        img.src = 'homem.webp'
        mg.innerHTML = `Sua idade é ${v3} anos e seu sexo é ${gen}`
    }

   
}