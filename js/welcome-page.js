function switchContainer(num) {

    let currentContainer = document.getElementsByClassName('show')[0];
    currentContainer.classList.remove('show');
    currentContainer.classList.add('hidden');

    let containerToShow = document.getElementsByClassName(`welcome-container__${num}`)[0];
    containerToShow.classList.remove('hidden');
    containerToShow.classList.add('show');
    containerToShow.classList.add('yo-yo-sideways');
}

function turnOnSetting(id) {
    document.getElementById(`yes_${id}`).checked = true;
    document.getElementById(`no_${id}`).checked = false;
}

function turnOffSetting(id) {
    document.getElementById(`yes_${id}`).checked = false;
    document.getElementById(`no_${id}`).checked = true;
}

// Setting the settings according to the selected blog mode
// pluralism mode selector
let pluralismModeSelector = document.getElementById('control_01');
pluralismModeSelector.addEventListener('click', () => {
    turnOnSetting('views_show'); // Views
    turnOnSetting('likes_show'); // Likes
    turnOnSetting('dislikes_add'); // Dislikes add
    turnOnSetting('dislikes_show'); // Dislikes show
    turnOnSetting('comments_add'); // Comments add
    turnOnSetting('comments_show'); // Comments show
})

// echo chamber selector
let echoChamberSelector = document.getElementById('control_02');
echoChamberSelector.addEventListener('click', () => {
    turnOffSetting('views_show'); // Views
    turnOffSetting('likes_show'); // Likes
    turnOffSetting('dislikes_add'); // Dislikes add
    turnOffSetting('dislikes_show'); // Dislikes show
    turnOffSetting('comments_add'); // Comments add
    turnOffSetting('comments_show'); // Comments show
});

