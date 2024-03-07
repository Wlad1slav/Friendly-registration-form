// A script that adds a field to select sexual gender

let gender = document.getElementById('gender');

gender.addEventListener('change', () => {
    if (gender.value == 'another') {
        document.getElementById('another_gender').classList.remove('hidden');
        document.getElementById('another_gender').classList.add('show');
        document.getElementById('another_gender').classList.add('mt6');
    } else {
        document.getElementById('another_gender').classList.add('hidden');
        document.getElementById('another_gender').classList.remove('show');
        document.getElementById('another_gender').classList.add('hidde-animation');
        document.getElementById('another_gender').classList.remove('mt6');
    }
})
