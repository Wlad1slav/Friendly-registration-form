const controversialElements =
    document.getElementsByClassName('controversial');

for (let i = 0; i < controversialElements.length; i++) {
    let element = controversialElements[i];

    element.addEventListener('click', () => {
        element.classList.remove('controversial');
        element.classList.add('controversial--view');

        if (element.dataset['warn']) {
            document.getElementById(element.dataset['warn']).classList.remove('hidden');
            document.getElementById(element.dataset['warn']).classList.add('show');
        }

    })

}
