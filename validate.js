

  let nameInput = document.querySelector ("#nome");
   console.log (nameInput.value);
   if(nameInput.value === ""){
    nameInput.classList.add("red_border")
   } else { 
    nameInput.classList.remove("red_border")
   }
   
   let emailInput = document.querySelector ("#email");
   if(emailInput.value === ""){
    emailInput.classList.add("red_border")
   } else {
    emailInput.classList.remove("red_border")
   }

   let assuntoInput = document.querySelector ("#assunto");
   if(assuntoInput.value === ""){
    assuntoInput.classList.add("red_border")
   } else {
    assuntoInput.classList.remove("red_border")
   }

   let mensagemInput = document.querySelector ("#mensagem");
   if(mensagemInput.value === ""){
    mensagemInput.classList.add("red_border")
   } else {
    mensagemInput.classList.remove("red_border")
   }
