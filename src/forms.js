

const handleFillCountry = _.debounce((ev) => {
    // only show matched events
    const node = ev.target.parentNode.getElementsByClassName('search-box')[0]
    node.style.display = 'initial'
    node.innerHTML = ''

    let inputText = ev.target.value.toLowerCase()
    console.log(`search for ${inputText}`);

    for (let country of countryList) {
        let row = document.createElement('div')
        row.innerText = country
        handleFillCountry.display
        row.onclick = selectCountry

        node.appendChild(row)
    }
  }, 300);

//
function validateName(event) {
    const name = event.target.value
    console.log('validate name: ' + name);

    if(name.length <8 && name.length> 0 ){
        hideElementWithClassName(event.target, "invalid-feedback")
        showElementWithClassName(event.target, "valid-feedback");
    }
    else{
        hideElementWithClassName(event.target, "valid-feedback");
        showElementWithClassName(event.target, "invalid-feedback");
    }

    

    return false
}

function validatePassword(event) {
    // password should be at least 8 of length
    // should contains at least one lower letter
    // should contains at least one capital letter
    // should contains at least one number
    // otherwise, password is invalid
    
    const password = event.target.value;
    const Mayus= "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    let mayusok= false;
    let minusok= false;
    let especok= false;
    const Minus= "qwertyuiopasdfghjklñzxcvbnm";
    const Espec= "!$%&/()=?¿";
    console.log('validate password: ' + password);

    for(let i=0; i<password.length; i++){

        for(let i2=0; i2<Mayus.length; i2++){

        if (password[i] == Mayus[i2]){
            mayusok=true;
        
        }
        if(password[i]== Minus[i2]){
            minusok=true;
        }
        }
        for ( let i3 = 0; i3<Espec.length; i3++){
            if(password[i] == Espec[i3]){
            especok=true;

            }
        }
        
    }

    
    

    if(password.length >=8 && mayusok==true && minusok==true && especok==true){

        hideElementWithClassName(event.target, "invalid-feedback");
        showElementWithClassName(event.target, "valid-feedback");
    }
    else{
        hideElementWithClassName(event.target, "valid-feedback");
        showElementWithClassName(event.target, "invalid-feedback");
    }


    return false
}

function validateEmail(event) {
    const email = event.target.value
    arrobaok=false;
    console.log('validate email: ' + email);
    
    for(let i=0; i<email.length-2; i++){
        if(email[i+1]=="@"){
            arrobaok=true;
        }

    }

    if(email.length > 0 && arrobaok==true){
        hideElementWithClassName(event.target, "invalid-feedback");
        showElementWithClassName(event.target, "valid-feedback");
    }
    else{
        hideElementWithClassName(event.target, "valid-feedback");
        showElementWithClassName(event.target, "invalid-feedback");

    }

    return false
}


// general register
function register(event) {
    // check if name is fullfiled
    // check if email is fullfiled
    // check if password is fullfiled
    // check if gender is selected
    // check if checkbox with "I confirm that all data are correct" is checked


    if(!name || !email || !password){
        alert("algomal");
    }


    // then, send a POST to localhost:3000/register with all the data in the body as a JSON
    fetch('http://localhost:3000/', {
        method: 'POST',
        body: JSON.stringify({
            'name': 'sample'
        }),
        headers: {
            'Content-type': 'application/json'
        },
    })
    event.preventDefault();
    return false;
}

// utility functions
function showElementWithClassName(node, className) {
    node.parentNode.getElementsByClassName(className)[0].style.display = 'initial'
}
function hideElementWithClassName(node, className) {
    node.parentNode.getElementsByClassName(className)[0].style.display = 'none'
}
function selectCountry(event) {
    console.log(event);
    document.forms[0].country.value = event.target.innerText

    const node = document.getElementsByClassName('search-box')[0]
    node.style.display = 'none'
    node.innerHTML = ''
}

function init() {
    let items = document.getElementsByClassName('valid-feedback')
    for (const item of items) {
        item.style.display = 'none'
    }
    items = document.getElementsByClassName('invalid-feedback')
    for (const item of items) {
        item.style.display = 'none'
    }

    document.getElementsByClassName('search-box')[0].style.display = 'none'
}



init()