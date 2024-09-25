var tablinks = document.getElementsByClassName("tablinks")
var tabcontents = document.getElementsByClassName("tabcontent")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activelink");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbw11xiJ_HEHzOAzH6jsbqZPLVaCm7wwlNKvsQLvo-7UHJCYXBcw9ovwk72KnrmKmyCF/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


