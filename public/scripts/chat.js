const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

/**************
 * WIADOMOŚCI *
 **************/

const messages = [
    { content: "🎉 Nowa sesja chatu rozpoczęta!", sender: false, console: true },
    { content: "Wiadomość testowa!", sender: true },
    { content: "Wiadomość testowa?", sender: false }
];

/************************
 * DODAWANIE WIADOMOŚCI *
 ************************/

function addMessage(content, sender, console) {
    const messageDiv = document.createElement("div");
    if(console == true) {
        messageDiv.className = 'console'
    } else {
        messageDiv.className = `message ${sender ? "sender" : "receiver"}`;
    }
    messageDiv.textContent = content;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

/****************************************
 * WYŚWIETLENIE POCZĄTKOWYCH WIADOMOŚCI *
 ****************************************/

messages.forEach((message) => {
    addMessage(message.content, message.sender, message.console);
});

/******************************
 * OBSŁUGA PRZYCISKU "WYŚLIJ" *
 ******************************/

sendBtn.addEventListener("click", () => {
    const content = messageInput.value;
    if (content.trim() !== "") {
        addMessage(content, true, false);
        messageInput.value = "";
    }
});

/******************************
 * OBSŁUGA ENTER W POLU INPUT *
 ******************************/

messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        sendBtn.click();
    }
});
