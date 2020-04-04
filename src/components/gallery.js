import React, { useState } from 'react';


function ImgCard({src,caption}) {
	return(

    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img class="gallery-images" src={src} alt={caption} />
      </div>
    </div>
	)
}
const ImgGroup = (props) => {
	const Imgroup = props.images.map((image)=> {
		return(
			<ImgCard key={image.id} src={image.src} caption={image.name} />
		);
	});
	return(
    <div class="container">
      <div class="row">
		    {Imgroup}
	    </div>
    </div>
	);
}
function Gallery() {
  const [images] = useState([
    {
     "src": "./wtc.jpg",
     "name": "One World Trade Center",
     "id": 1
    },{
      "src": "./liberty.jpg",
      "name": "Statue of liberty",
      "id": 2
    },{
     "src": "./bull.jpg",
     "name": "Bull",
     "id": 3
    },{
      "src": "./horseshoe.jpg",
      "name": "Horse shoe",
      "id": 4
    },{
     "src": "./nature3.jpg",
     "name": "Nature",
     "id": 5
    },{
      "src": "./flowers1.jpg",
      "name": "Nature",
      "id": 6
    },{
      "src": "./beach.jpg",
      "name": "Nature",
      "id": 7
    },{
      "src": "./satue1.jpg",
      "name": "Statue",
      "id": 8
    },{
      "src": "./nature1.jpg",
      "name": "Nature tower",
      "id": 9
    },{
      "src": "./bird1.jpg",
      "name": "Peapock",
      "id": 10
    },{
      "src": "./nature2.jpg",
      "name": "Irish Hunger Memorial",
      "id": 11
    },{
      "src": "./arch1.jpg",
      "name": "Red Cude Newyork",
      "id": 12
    },{
      "src": "./decoration1.jpg",
      "name": "Interior decoration",
      "id": 13
    }
  ]);

		return(
<ImgGroup images={images} />

		);
}

export default Gallery;
