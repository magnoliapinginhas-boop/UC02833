async function perguntarIA() {
    let mensagem = document.getElementById("mensagem").value;
    let chat = document.getElementById("chat");
 
    let resposta = await fetch("http://localhost:3000/api/perguntar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ mensagem })
    });
 
    let dados = await resposta.json();
 
    chat.innerHTML += "<p><b>Tu:</b> " + mensagem + "</p>";
    chat.innerHTML += "<p><b>IA:</b> " + dados.resposta + "</p>";
}