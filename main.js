
document.addEventListener('DOMContentLoaded', function () {

    const domain_url = 'https://karbonlabs.in';
    // const domain_url = 'http://localhost:3000';
    let first_time_load = true;

    const chatIcon = document.createElement('div');
    chatIcon.style.position = 'fixed';
    chatIcon.style.bottom = '20px';
    chatIcon.style.right = '20px';
    chatIcon.style.width = '60px';
    chatIcon.style.height = '60px';
    chatIcon.style.background = '#2962ff';
    chatIcon.style.borderRadius = '50%';
    chatIcon.style.cursor = 'pointer';
    chatIcon.style.zIndex = '9998';

    const chatIconImg = document.createElement('img');
    chatIconImg.src = `${domain_url}/static/chat.svg`;
    chatIconImg.width = 25;
    chatIconImg.height = 25;
    chatIconImg.style.paddingLeft = '17px';
    chatIconImg.style.paddingTop = '17px';
    chatIconImg.style.zIndex = '9999';
    chatIcon.appendChild(chatIconImg);
    document.body.appendChild(chatIcon);

    const chatWidget = document.createElement('div');
    chatWidget.style.position = 'fixed';
    chatWidget.style.bottom = '85px';
    chatWidget.style.right = '20px';
    chatWidget.style.width = '400px';
    chatWidget.style.height = '600px';
    chatWidget.style.border = '1px solid #ccc';
    chatWidget.style.borderTopLeftRadius = '10px';
    chatWidget.style.borderTopRightRadius = '10px';
    chatWidget.style.borderBottomLeftRadius = '10px';
    chatWidget.style.borderBottomRightRadius = '10px';
    chatWidget.style.display = 'none';
    chatWidget.style.overflow = 'hidden';
    chatWidget.style.zIndex = '9997';
    document.body.appendChild(chatWidget);

    chatIcon.addEventListener('click', function () {

        if (chatWidget.style.display === 'none') {
            // show chatwidget
            chatWidget.style.display = 'block';
            chatIconImg.src = `${domain_url}/static/close-chat.svg`;

            // resize chatwidget
            const parentWindow = window.parent;
            const parentWidth = parentWindow.innerWidth;
            if (parentWidth < 600) {
                chatWidget.style.width = `${parentWidth - 40}px`
            }

            if (first_time_load) {
                const chatIframe = document.createElement('iframe');
                chatIframe.src = `${domain_url}/embed/karbongpt`;
                chatIframe.style.position = 'absolute'
                chatIframe.style.width = `100 % !important`;
                chatIframe.style.height = `100 % !important`;
                chatWidget.appendChild(chatIframe);
            }

        } else {
            chatIconImg.src = `${domain_url}/static/chat.svg`;
            chatWidget.style.display = 'none';
        }

        first_time_load = false
    });
});
