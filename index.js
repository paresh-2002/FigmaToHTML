const workingStep = [
    {
        img: './images/location-tick.png',
        title: 'Choose location',
        description: 'Choose your and find your best car'
    },
    {
        img: './images/calendar-blue.png',
        title: 'Pick-up date',
        description: 'Select your pick up date and time to book your car'
    },
    {
        img: './images/car.png',
        title: 'Book your car',
        description: 'Book your car and we will deliver it directly to you'
    },
]

const rentalDeals = [
    {
        img: './images/blue-car.png',
        title: 'Jaguar XE L P250',
        review: '4.8',
        reviewCount: '(2.436 reviews)',
        Passagers: '4 Passagers',
        doorsDec: '2 Doors',
        price: '$1,800'
    },
    {
        img: './images/white-car.png',
        title: 'Audi R8',
        review: '4.6',
        reviewCount: '(1.936 reviews)',
        Passagers: '2 Passagers',
        doorsDec: '2 Doors',
        price: '$12,100'
    },
    {
        img: './images/bmw.png',
        title: 'BMW M3',
        review: '4.5',
        reviewCount: '(2.036 reviews)',
        Passagers: '4 Passagers',
        doorsDec: '4 Doors',
        price: '$1,600'
    },
    {
        img: './images/Lamborghini.png',
        title: 'Lamborghini Huracan',
        review: '4.3',
        reviewCount: '(2.236 reviews)',
        Passagers: '2 Passagers',
        doorsDec: '2 Doors',
        price: '$2,300'
    },
]


let work = document.querySelector('.section-content-bottom')

workingStep.map((item) => (
    work.innerHTML += `
    <div class="content">
        <div class="image">
            <img src=${item.img} alt="location tick">
        </div>
        <div class="img-content">
            <h6>${item.title}</h6>
            <p>${item.description}</p>
        </div>
    </div>`
))
let rental = document.querySelector('.rental-deals')
rentalDeals.map((item) => (
    rental.innerHTML += `
    <div class="rental">
     <img src=${item.img} alt="">
        <div class="rental-deals-content">
            <div class="rental-deals-content-top">
                <h6>${item.title}</h6>
                <p><img src="./images/Star 1.png" alt=""> <span>${item.review}</span> ${item.reviewCount}</p>
                <div class="rental-deals-col">
                    <div class="content-top">
                        <div class="contain">
                            <img src="./images/user.png" alt="user">
                            <p>${item.Passagers}</p>
                        </div>
                        <div class="contain">
                            <img src="./images/Frame-b.png" alt="user">
                            <p>Air Conditioning</p>
                        </div>
                    </div>

                    <div class="content-top">
                        <div class="contain">
                            <img src="./images/Frame.png" alt="user">
                            <p>Auto</p>
                        </div>
                        <div class="contain">
                            <img src="./images/Frame3.png" alt="user">
                            <p>${item.doorsDec}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rental-deals-content-bottom">
                <div class="content">
                    <p>Price</p>
                    <p><span>${item.price}</span>/day</p>
                </div>
                <button>Rent Now &#8594;</button>
            </div>
        </div>
    </div>
     
    `
))

document.querySelector(".navbar-toggler-btn").addEventListener("click", function () {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");

    // Toggle hamburger icon between bars and X
    const hamburgerIcon = this.querySelector("i");
    if (hamburgerIcon.classList.contains("fa-bars")) {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-xmark");
    } else {
      hamburgerIcon.classList.remove("fa-xmark");
      hamburgerIcon.classList.add("fa-bars");
    }
  });

