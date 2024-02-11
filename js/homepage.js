//Hamburg Menu Function
//select variables
const menuOpen = document.querySelector(".openMenu");
const navList = document.querySelector(".navigation");

let hamburgOpen = false;

menuOpen.addEventListener("click", () => {
  hamburgOpen = !hamburgOpen;

  if (hamburgOpen) {
    navList.classList.add("open");
    menuOpen.src = "../img/menu-close.svg";
  } else {
    navList.classList.remove("open");
    menuOpen.src = "../img/menu.svg";
  }
});



// Select the image element

const image = document.querySelector(".counterImage");

// Define image options
const imageOptions = {
  image1: "../resources/galleryImage20.jpeg",
  image2: "../resources/galleryImage5.jpeg",
  image3: "../resources/galleryImage10.jpeg",
};

// Set an initial image
let currentImageIndex = 0;
image.src = imageOptions[`image${currentImageIndex + 1}`];

// Function to update the image every 10 seconds
function updateImage() {
  currentImageIndex =
    (currentImageIndex + 1) % Object.keys(imageOptions).length;
  image.src = imageOptions[`image${currentImageIndex + 1}`];
}

// Set interval to call the updateImage function every 5 seconds
const intervalId = setInterval(updateImage, 5000);

// Function to start the counter on homepage
// function startCounter() {
//   $(".counterWrap .numberWrap .countNum").counterUp({
//     delay: 20,
//     time: 1000,
//   });
// }
// startCounter();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A function to toggle testimonials section
// define objects

const testimonials = {
  person1: {
    name: "Godswill Oguns",
    desc: "Best Graduating Student (2022/23)",
    content:
      "The teaching, in my opinion, is the best that anyone can hope for. Andus D'Great School staff provide an environment in which students are able to reach their full potential. As well as this, I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the person I become is due to my time spent here and that the last six years have been the best of my life.",
  },

  person2: {
    name: "Mr. Abiodun",
    desc: "Best Teacher (2020/21)",
    content:
      "As a teacher at Andus D'Great, I am proud to be part of an institution that prioritizes academic excellence and student well-being. The collaborative and supportive environment among the staff fosters a positive atmosphere for both teaching and learning. I am privileged to contribute to the growth and development of our students at Andus D'Great.",
  },

  person3: {
    name: "Ada Victor",
    desc: "Best Graduating Student (2021/22)",
    content:
      "I owe my success to the exceptional academic support and guidance at Andus D'Great. The dedicated teachers and challenging curriculum pushed me to achieve my fullest potential. I am grateful for the enriching educational experience that has prepared me for future endeavors",
  },

  person4: {
    name: "Mr. Ogbonaya",
    desc: "A Parent",
    content:
      "We are thrilled with our experience at Andus D'Great. The dedicated teachers and staff have created a nurturing environment that encourages both academic and personal growth. The variety of extracurricular activities allows our child to explore interests beyond the classroom",
  },

  person5: {
    name: "Iyinade Great",
    desc: "Senior Prefect (2021/22)",
    content:
      "As a previous Senior Prefect, my time at Andus D'Great was transformative. The leadership opportunities provided not only enhanced my organizational and interpersonal skills but also instilled a sense of responsibility and pride. Andus D'Great truly fosters an environment that nurtures both academic and personal development.",
  },
};

// Select elements with the specified classes
const testiCards = document.querySelectorAll(".testiCards");
const testiTitle = document.querySelectorAll(".testiTitle");
const testiDesc = document.querySelectorAll(".testiDesc");
const testiContent = document.querySelector(".testiContent");

// Function to update content based on the clicked card or a specified index
function updateContent(index = 0) {
  const personKey = `person${index + 1}`;
  const person = testimonials[personKey];

  // Assign the properties to the elements of each card
  testiTitle.forEach((title, i) => {
    title.innerText = testimonials[`person${i + 1}`].name;
  });
  testiDesc.forEach((desc, i) => {
    desc.innerText = testimonials[`person${i + 1}`].desc;
  });

  // Update the content of the active card
  testiContent.innerText = person.content;

  // Reset height for all cards
  testiCards.forEach((card) => {
    card.classList.remove("active");
    card.style.height = "250px"; // Default height for inactive cards
  });

  // Set height for the active card
  testiCards[index].classList.add("active");
  testiCards[index].style.height = "300px"; // Height for the active card
}

// Display all data when the page loads
updateContent(2); // Set index to 2 for the third card

// Loop through the selected elements
testiCards.forEach((testiCard, index) => {
  testiCard.addEventListener("click", () => {
    // Update content based on the clicked card
    updateContent(index);
  });
});

// Debugging: Output the data
// console.log(testimonials, testiName, testiDesc, testiContent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Function to display gallery Images

const galleryImages = {
  image1: {
    image: "./resources/galleryImage1.jpeg",
    title: "Our Graduating Students Excursion to University of Lagos, Akoka.",
  },

  image2: {
    image: "./resources/galleryImage6.jpeg",
    title: "Graduation Ceremony (2022/23)",
  },

  image3: {
    image: "./resources/galleryImage3.jpeg",
    title: "Cowbell Mathematic Competition (2009/2010)",
  },
  image4: {
    image: "./resources/galleryImage7.jpeg",
    title: "Mock Exam For Our Junior Secondary Students",
  },

  image5: {
    image: "./resources/galleryImage2.jpeg",
    title: "Cultural Day 2008",
  },
};

//select variables

const galleryImage = document.querySelectorAll(".galleryImage");
const galleryImageDesc = document.querySelector(".galleryImageDesc");
const galleryImageDisplay = document.querySelector(".galleryImageDisplay");
const showImage = document.querySelector(".showImage");
const closeIcon = document.querySelector(".closeIcon");

// Function to update Image based on the clicked Image or a specified index
function updateGalleryImage(index = 0) {
  const imageKey = `image${index + 1}`;
  const image = galleryImages[imageKey];

  // Assign the properties to the elements of each Image
  galleryImage.forEach((image, i) => {
    image.src = galleryImages[`image${i + 1}`].image;
    image.style.height = "250px";
  });

  // Update the content of the active image
  galleryImageDesc.innerText = image.title;
  showImage.src = image.image;
}

updateGalleryImage();

// display each gallery image with description
galleryImage.forEach((imageItem, index) => {
  imageItem.addEventListener("click", () => {
    galleryImageDisplay.style.display = "block";
    updateGalleryImage(index);
  });
});
// close gallery image with description
closeIcon.addEventListener("click", () => {
  galleryImageDisplay.style.display = "none";
});
