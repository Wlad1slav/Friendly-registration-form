document.addEventListener('DOMContentLoaded', () =>{
    let wallpaperInput = document.getElementById('wallpaper');
    let croppedWallpaper = document.getElementById('cropped_wallpaper');

    wallpaperInput.addEventListener('change',(e) =>{
        let file = event.target.files[0];
        console.log(file)

        let reader = new FileReader();
        reader.onload = (e) => {
            croppedWallpaper.src = e.target.result;

            // loading cropped widget
            let cropper = new Cropper(croppedWallpaper, {
                aspectRatio: 3/1,
                viewMode: 3,
                dragMode: 'move',
                responsive: true,
                minCropBoxHeight: 10
            })


        }

        reader.readAsDataURL(file);

    })
})
