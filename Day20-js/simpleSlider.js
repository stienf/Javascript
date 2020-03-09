let images = [
    'https://i.picsum.photos/id/237/536/354.jpg',
    'https://i.picsum.photos/id/1084/536/354.jpg?grayscale',
    'wallpaper.jpg'
]

// document.getElementById('slider').style.backgroundImage="url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"

var i = 0;
var timer = 100;

function changeImage() {

    var random = Math.floor(Math.random() * 3);
    document.getElementById('slider').style.backgroundImage = `url('${images[random]}')`
    i++;
    if (i < timer) {
        setTimeout(changeImage, 1000) // change background image every second
    }
}

changeImage();