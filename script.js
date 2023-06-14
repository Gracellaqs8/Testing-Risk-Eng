const videos = [
    {
        title: 'Video 1',
        thumbnail: 'video1.jpg',
        url:''
    },
    {
        title: 'Video 2',
        thumbnail: 'video2.jpg',
        url:''
    }
];

const videoContainer = document.getElementById('video-container');
videos.forEach(video => {
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.classList.add('video-thumbnail');

    const thumbnailImg = document.createElement('img');
    thumbnailImg.src = video.thumbnail;

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('video-title');
    titleDiv.textContent = video.title;

    thumbnailDiv.appendChild(thumbnailImg);
    thumbnailDiv.appendChild(titleDiv);
    videoContainer.appendChild(thumbnailDiv);

    thumbnailDiv.addEventListener('click', () => {
        window.open(video.url, '_blank');
    });
});