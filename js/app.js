// function to display images on  Gallery page

const images = [
  { src: "/resources/galleryImage1.jpeg", width: 29 },
  { src: "/resources/galleryImage2.jpeg", width: 25.5 },
  { src: "/resources/galleryImage3.jpeg", width: 44 },

  { src: "/resources/galleryImage4.jpeg", width: 25.5 },
  { src: "/resources/galleryImage5.jpeg", width: 44 },
  { src: "/resources/galleryImage6.jpeg", width: 29 },

  { src: "/resources/galleryImage7.jpeg", width: 44 },
  { src: "/resources/galleryImage8.jpeg", width: 29 },
  { src: "/resources/galleryImage9.jpeg", width: 25.5 },
  

  { src: "/resources/galleryImage10.jpeg", width: 29 },
  { src: "/resources/galleryImage11.jpeg", width: 25.5 },
  { src: "/resources/galleryImage12.jpeg", width: 44 },

  { src: "/resources/galleryImage13.jpeg", width: 25.5 },
  { src: "/resources/galleryImage14.jpeg", width: 44 },
  { src: "/resources/galleryImage15.jpeg", width: 29 },

  { src: "/resources/galleryImage16.jpeg", width: 44 },
  { src: "/resources/galleryImage17.jpeg", width: 29 },
  { src: "/resources/galleryImage18.jpeg", width: 25.5 },

  { src: "/resources/galleryImage19.jpeg", width: 29 },
  { src: "/resources/galleryImage20.jpeg", width: 25.5 },
  { src: "/resources/galleryImage22.jpeg", width: 44 },

  { src: "/resources/galleryImage21.jpeg", width: 25.5 },
  { src: "/resources/galleryImage23.jpeg", width: 44 },
  { src: "/resources/galleryImage24.jpeg", width: 29 },
];

const gallery = document.querySelector(".gallery");

let currentRowWidth = 0;
let row = document.createElement("div");
row.className = "row";


images.forEach((image, index) => {
  const img = document.createElement("img");
  img.src = image.src;
  
  if (window.innerWidth <= 600) { 
    img.style.width = "100%"; 
  } else {
    img.style.width = `${image.width}%`; 
  }

  img.alt = `Image ${index + 1}`;

  row.appendChild(img);
  currentRowWidth += image.width;
});

// Append the last row if there are remaining images
if (row.children.length > 0) {
  gallery.appendChild(row);
}
