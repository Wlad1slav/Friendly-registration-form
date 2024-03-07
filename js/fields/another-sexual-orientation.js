// A script that adds a field to select sexual orientation

let orientation = document.getElementById('orientation');

orientation.addEventListener('change', () => {
    if (orientation.value == 'another') {
        document.getElementById('another_orientation').classList.remove('hidden');
        document.getElementById('another_orientation').classList.add('mt6');
        document.getElementById('another_orientation').classList.add('show');
    } else {
        document.getElementById('another_orientation').classList.add('hidden');
        document.getElementById('another_orientation').classList.add('hidde-animation');
        document.getElementById('another_orientation').classList.remove('show');
        document.getElementById('another_orientation').classList.remove('mt6');
    }
})
