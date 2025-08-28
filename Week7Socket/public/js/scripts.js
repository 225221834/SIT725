
const socket = io();

//Grabs the <form> element from the HTML using its id="form"
const form = document.getElementById('form');

//Grabs the <input> element from the HTML using its id="input"
const input = document.getElementById('input');

//Grabs the <ul> element from the HTML using its id="messages"
const messages = document.getElementById('messages');

//Adds an event listener to the form that listens for the 'submit' event (e.g., when the user clicks "Send")
form.addEventListener('submit', function(e) {
    
    //Prevents the default form submission behavior (which would refresh the page)
    e.preventDefault();
        //Checks if the input field is not empty
    if (input.value) {
        //Emits a 'chat message' event to the server with the value of the input field
        socket.emit('chat message', input.value);
        //Clears the input field after sending the message
        input.value = '';
    }
    });
//Listens for 'chat message' events from the server 
socket.on('chat message', function(msg) {

    //Creates a new <li> element, sets its text content to the received message, and appends it to the messages list
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);

    //Scrolls the window to the bottom of the page to show the latest message
    window.scrollTo(0, document.body.scrollHeight);
});
