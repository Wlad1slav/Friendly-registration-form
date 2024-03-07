document.addEventListener('DOMContentLoaded', () =>{
    let avatarInput = document.getElementById('avatar');
    let croppedAvatar = document.getElementById('cropped_avatar');

    avatarInput.addEventListener('change',(e) =>{
        let file = event.target.files[0];
        console.log(file)

        let reader = new FileReader();
        reader.onload = (e) => {
            croppedAvatar.src = e.target.result;
            // croppedAvatar.height = 400;

            // loading cropped widget
            let cropper = new Cropper(croppedAvatar, {
                aspectRatio: 1,
                viewMode: 3,
                dragMode: 'move',
                responsive: true,
                minCropBoxHeight: 10
            })


        }

        reader.readAsDataURL(file);

    })
})
