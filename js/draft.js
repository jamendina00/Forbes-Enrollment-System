// Style Sheet start

// Color
let isred = false
function ColorMode()
{
    let color = document.getElementById("color_mode")

    if(isred)
    {
        color.style.background = "blue"
        isred = false
    }else
    {
        color.style.background = "red"
        isred = true
    }
}

// Position
let Vertical = 0
let Horizontal = 0
let reset = 0

function move_up()
{
 let model = document.getElementById("Model")
 Vertical-=20
 model.style.marginTop = Vertical + 'px'
 model.style.transition = 'all 0.2s ease-in-out'
}

function move_down()
{
    let model = document.getElementById("Model")
    Vertical+=20
    model.style.marginTop = Vertical + 'px'
    model.style.transition = 'all 0.2s ease-in-out'
}

function move_left()
{
    let model = document.getElementById("Model")
    Horizontal-=20
    model.style.marginLeft = Horizontal + 'px'
    model.style.transition = 'all 0.2s ease-in-out'
}

function move_right()
{
    let model = document.getElementById("Model")
    Horizontal+=20
    model.style.marginLeft = Horizontal + 'px'
    model.style.transition = 'all 0.2s ease-in-out'
}

function resetbttn()
{
    let model = document.getElementById("Model")
    model.style.marginTop = reset + 'px'
    model.style.marginLeft = reset + 'px'
    Vertical = 0
    Horizontal = 0
}

// Hide & Show
function ShowModel()
{
    let show = document.getElementById("HSmodel")
    show.style.display = 'block'
}
function HideModel()
{
    let hide = document.getElementById("HSmodel")
    hide.style.display = 'none'
}

// Random Number Generator
function Generator()
{
    let number = document.getElementById("Number")
    number.innerHTML = Math.floor(Math.random()*100)+1;
}

// Style Sheet end


// Event Listener start

// Mouse and Key Event start
// Click event
let clickedEvents = document.getElementById("click");
let clickedResult = document.getElementById("clickedresult");
    clickedEvents.addEventListener("click", function() {
        clickedResult.textContent = "Clicked";
    });
// Double click event
let doubleclickedEvents = document.getElementById("doubleclick");
let doubleclickedResult = document.getElementById("doubleclickresult");
    doubleclickedEvents.addEventListener("dblclick", function() {
        doubleclickedResult.textContent = "Double Clicked";
    });
// mouse over and out event
let mouseoverEvents = document.getElementById('mouseover');
let mouseoverResult = document.getElementById('mouseoverresult');
    // mouse over event
    mouseoverEvents.addEventListener('mouseover', function() {
        mouseoverResult.textContent = "Mouse over";
    });
    // mouse out event
    mouseoverEvents.addEventListener('mouseout', function() {
        mouseoverResult.textContent = "Mouse Out";
    });
// Keypress event
let keypressEvent = document.getElementById("keypress");
let keypressResult = document.getElementById("keypressresult");
    keypressEvent.addEventListener('keypress', function (e) {
        keypressResult.textContent = "Keypressed: " + e.key;
    })
// Mouse and key Event end

// Form Event start
let form = document.getElementById("register_form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let ername = document.getElementById("er_name");
    let ermail = document.getElementById("er_mail");
    let erpass = document.getElementById("er_pass");


    function validateEmail(email) 
    {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    if(name === '')
    {
        ername.style.display = "block";
    }else if (!validateEmail(email))
    {
        ermail.style.display = "block";
    }else if(password.length < 8)
    {
        erpass.style.display = "block"
    }else
    {
        ername.style.display = "none";
        ermail.style.display = "none";
        erpass.style.display = "none";
        alert(`Thank you for registering, ${name}!`);
    }
});
