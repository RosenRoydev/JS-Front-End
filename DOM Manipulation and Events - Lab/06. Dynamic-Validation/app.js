function validate() {
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/;
    const mailInput = document.getElementById('email');
    console.log(mailInput)
    mailInput.addEventListener("change", (e)=>{
   
       if(!pattern.test(e.currentTarget.value)){
          mailInput.classList.add('error');
       }else{
        mailInput.classList.remove('error');
       }
    })
}