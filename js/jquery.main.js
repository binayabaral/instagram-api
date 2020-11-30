const baseUrl = 'https://graph.instagram.com/me/media/';
// const accessToken = 'IGQVJVMUZAvLW83V042cVNZAUTdYQWcxUlJ6SHNPRExST1c2VmxGalRkczdxWE1JTkNhY3FLSFdzVGEtMGFRX0w3amJsa25zVUZAuUEZAad093OWFaUE45dE8ybFBUVVdvOFEwdDhlU2pNNkhSeXgwZAVI3TGQyQTBjQzVGdTJr';
const accessToken = 'IGQVJVNGRxTW1rTzBSMEhFbVZAWYWtEUG9RekdrZAmNjNjB3QjE5NGhTR29VNGJ4VzAxZAWVNclRNd1gwa1p3UDBvNFZAVZAlpTZAk5ZAdTFUWXBiaTZAoNlcwbFhqQUg5OGgtdGlPM1ZAHd0FfbVVJMUFtc2lCMgZDZD';
const userID = '17841406967992094';
const requiredFields = ['id', 'caption', 'media_type', 'media_url'];

let requestUrl = `${baseUrl}?fields=${requiredFields.join()}&access_token=${accessToken}`;

const getPhotos = () => {
	let photos = [];
	axios.get(requestUrl).then(res => {
		for (let i = 0; i < res.data.data.length; i++) {
			if (res.data.data[i].media_type !== 'VIDEO') {
				photos.push(res.data.data[i].media_url);
			}
		}
		setPhotos(photos);
	});
};

getPhotos();

const setPhotos = photos => {
	const imagesContainer = document.querySelector('.instagram-photos');

	for (let i = 0; i < photos.length; i++) {
		let imageWrapper = document.createElement('div');
		imageWrapper.classList.add('photo');

		let image = document.createElement('div');
		image.classList.add('image');
		image.style.backgroundImage = `url(${photos[i]})`;

		imageWrapper.appendChild(image);
		imagesContainer.appendChild(imageWrapper);
	}
};
