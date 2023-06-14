gapi.load('client:auth2', function() {
  gapi.client.init({
    clientId: '532266076903-1pf8189dnao39fvsgi26kvplpmq1far1.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/drive',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function() {
    return gapi.auth2.getAuthInstance().signIn();
  }).then(function() {
    var accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
    // Authentication successful, proceed with authorized API calls using the access token
    // You can use the accessToken variable in your API requests
  }).catch(function(error) {
    // Handle error
  });
});

var fileContent = 'Sample file content';
var fileMetadata = {
  'name': 'sample.txt'
};
var media = {
  mimeType: 'text/plain',
  body: fileContent
};

gapi.client.request({
  path: 'https://www.googleapis.com/upload/drive/v3/files',
  method: 'POST',
  params: {
    uploadType: 'media'
  },
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accessToken
  },
  body: JSON.stringify(fileMetadata)
}).then(function(response) {
  console.log('File uploaded successfully:', response.result);
}).catch(function(error) {
  console.error('Error uploading file:', error);
});

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
