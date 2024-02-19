

var emailInput=document.querySelector('.emailInput')
var passInput=document.querySelector('.passInput')
var nameInput=document.getElementById('nameInput')
var emailInput2=document.getElementById('emailInput2')
var passInput2=document.getElementById('passInput2')
var loginBtn=document.getElementById('loginBtn')
var logOutBtn=document.getElementById('logOutBtn')
var signupBtn=document.getElementById('signupBtn')
var signinBtn=document.getElementById('signinBtn')
var signupBtn2=document.getElementById('signupBtn2')
var data=[]
var inputs=document.getElementsByClassName('form-control')
var homepage=document.querySelector('.homepage')
var interface2=document.querySelector('.interface2')

loginBtn.onclick=function()
{
    userData()
    clearForm()
homepage.style.display='block'

}
logOutBtn.onclick=function()
{
    homepage.style.display='none'

}

logOutBtn.onclick=function()
{
    homepage.style.display='none'

}
signupBtn.addEventListener('click',function()
{
    interface2.style.display='block'
})

signupBtn2.onclick=function()
{
    alert('signup successful')
    homepage.style.display='block'
    clearForm()

}
signinBtn.onclick=function()
{
    interface2.style.display='none'

}

function userData()
{
    var clientData={
        email:emailInput.value,
        pass:passInput.value,
    }
    data.push(clientData)
    localStorage.setItem('storageData',JSON.stringify (data))

}
function clearForm()
{
for(var i=0;i<inputs.length;i++)
{
    inputs[i].value=''
}
}
emailInput.onkeydown=function() 

{
    var nameRejex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.([a-zA-Z0-9-])+)*$/
if(nameRejex.test(emailInput.value))
{
    emailInput.classList.add('is-valid')
    emailInput.classList.remove('is-invalid')


}
else
{
    emailInput.classList.add('is-invalid')
    emailInput.classList.remove('is-valid')

}
}

passInput.onkeydown=function() 

{
    var nameRejex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(nameRejex.test(passInput.value))
{
    passInput.classList.add('is-valid')
    passInput.classList.remove('is-invalid')
    loginBtn.removeAttribute('disabled')



}
else
{
    passInput.classList.add('is-invalid')
    passInput.classList.remove('is-valid')
    loginBtn.disabled=true

}
}

emailInput2.onkeydown=function() 

{
    var nameRejex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.([a-zA-Z0-9-])+)*$/
if(nameRejex.test(emailInput2.value))
{
    emailInput2.classList.add('is-valid')
    emailInput2.classList.remove('is-invalid')


}
else
{
    emailInput2.classList.add('is-invalid')
    emailInput2.classList.remove('is-valid')

}
}

passInput2.onkeydown=function() 

{
    var nameRejex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(nameRejex.test(passInput2.value))
{
   signupBtn2.removeAttribute('disabled')
    passInput2.classList.add('is-valid')
    passInput2.classList.remove('is-invalid')


}
else
{
    signupBtn2.disabled=true
    passInput2.classList.add('is-invalid')
    passInput2.classList.remove('is-valid')

}
}

nameInput.onkeydown=function() 

{
    var nameRejex=/^[a-z]{3,}$/
if(nameRejex.test(nameInput.value))
{
   nameInput.classList.add('is-valid')
    nameInput.classList.remove('is-invalid')


}
else
{
   nameInput.classList.add('is-invalid')
   nameInput.classList.remove('is-valid')

}
}

