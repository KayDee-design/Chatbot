// Open the chatbot modal
function openChatbot() {
    document.getElementById("chatbot-modal").style.display = "flex";
}

// Close the chatbot modal
function closeChatbot() {
    document.getElementById("chatbot-modal").style.display = "none";
}

// Close the modal when clicking outside of the content
window.onclick = function(event) {
    var modal = document.getElementById("chatbot-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
