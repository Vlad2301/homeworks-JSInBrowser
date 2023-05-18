(() => {
    const chatWidget = document.querySelector('.chat-widget');
    chatWidget.addEventListener('click', function () {
        this.classList.add('chat-widget_active');
    });

    const chatInput = document.getElementById('chat-widget__input');

    chatInput.addEventListener('keydown', search);
})()



function search(e) {
    if (e.key === 'Enter' && this.value !== '') {
        const messagesFromBot = [
            'Добрый день1',
            'Добрый день2',
            'Добрый день3',
            'Добрый день4',
            'Добрый день5',
            'Добрый день6',
        ];

        const messages = document.querySelector('.chat-widget__messages');
        const userMessage = createElementFromHTML(this.value, true);
        messages.insertAdjacentElement('beforeend', userMessage);
        this.value = '';

        const randomIndex = getRandomArbitrary(0, messagesFromBot.length - 1);
        const botMessage = createElementFromHTML(messagesFromBot[randomIndex], false);
        messages.insertAdjacentElement('beforeend', botMessage);
    }
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function createElementFromHTML(message, isUser) {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    const htmlString = `
    <div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">${message}</div>
    </div>`;
    const div = document.createElement('div');

    if (isUser) {
        div.className = 'message message_client';
    } else {
        div.className = 'message';
    }
    div.innerHTML = htmlString.trim();

    return div;
}