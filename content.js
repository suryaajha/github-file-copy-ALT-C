const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('File has been copied!')
};

function github_copy(request) {
    // https://github.com/justdjango/django-ecommerce/master/templates/base.html
    // https://raw.githubusercontent.com/justdjango/django-ecommerce/master/templates/base.html

    let gitFileLocation = window.location.href
        .replace('https://github.com', 'https://raw.githubusercontent.com')
        .replace('/blob', '')
    fetch(gitFileLocation)
        .then(response => response.text())
        .then(data => copyToClipboard(data))

}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "COPY") {
            github_copy(request)
        }
    }
);

