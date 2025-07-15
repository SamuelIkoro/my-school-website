const button = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const sideBar = document.getElementsByClassName("side")[0];

function showSideBar() {
    sideBar.style.display = 'flex';
};
function hideSideBar() {
    sideBar.style.display = 'none';
};

button.addEventListener('click', showSideBar);
closeButton.addEventListener('click', hideSideBar);

const cancelButton = document.getElementsByClassName("cancelButton")[0];
const marqueeContainer = document.getElementsByClassName("marqueeContainer")[0];

const closeMarqueeContainer = () => {
    marqueeContainer.style.display = 'none';
};
cancelButton.addEventListener('click', closeMarqueeContainer);


const diplomaBtn = document.getElementById('diploma');
const coursesBtn = document.getElementById('courses');
// card one
const cardOneImg = document.getElementById('cardOneImg');
const cardOneTitle = document.getElementById('cardOneTitle');
const cardOnePara = document.getElementById('cardOnePara');
const cardOneButtonLink = document.getElementById('cardOneButtonLink');
// card two
const cardTwoImg = document.getElementById('cardTwoImg');
const cardTwoTitle = document.getElementById('cardTwoTitle');
const cardTwoPara = document.getElementById('cardTwoPara');
const cardTwoButtonLink = document.getElementById('cardTwoButtonLink');
// card three
const cardThreeImg = document.getElementById('cardThreeImg');
const cardThreeTitle = document.getElementById('cardThreeTitle');
const cardThreePara = document.getElementById('cardThreePara');
const cardThreeButtonLink = document.getElementById('cardThreeButtonLink');


coursesBtn.addEventListener('click', () => {
    // changing color of courses button and diploma button
    coursesBtn.style.color = 'white';
    coursesBtn.style.backgroundColor = '#0367f2';
    diplomaBtn.style.backgroundColor = 'transparent';
    diplomaBtn.style.color = 'black';

    //changing the content

    //card one
    cardOneImg.src = 'https://res.cloudinary.com/talentql-inc/image/upload/v1705919241/launchpad_xu6rqr.png';
    cardOneTitle.textContent = 'Launchpad';
    cardOnePara.textContent = 'The Launchpad program is riddled with in-depth insights and knowledge into the many career paths available to you within the tech landscape.';

    // card two
    cardTwoImg.src = 'https://res.cloudinary.com/talentql-inc/image/upload/v1695572014/website/content_trend_eatcjh.png';
    cardTwoTitle.textContent = 'Content Mastery for African Creators (6 weeks)';
    cardTwoPara.textContent = 'The program is designed to teach you how to start and boost your content creation career regardless of your niche interest.';

    // card three
    cardThreeImg.src = 'https://res.cloudinary.com/talentql-inc/image/upload/v1695572014/website/sales_trend_vcmcij.png';
    cardThreeTitle.textContent = 'High-Impact Selling: From Prospecting to Closing (6 Weeks)';
    cardThreePara.textContent = 'Invest in your professional growth and equip yourself with the essential skills and strategies to excel in the competitive sales landscape.';
});

diplomaBtn.addEventListener('click', () => {
    // changing color of courses button and diploma button
    diplomaBtn.style.color = 'white';
    diplomaBtn.style.backgroundColor = '#0367f2';
    coursesBtn.style.backgroundColor = 'transparent';
    coursesBtn.style.color = 'black';

    //changing the content

    // card one
    cardOneImg.src = 'https://res.cloudinary.com/talentql-inc/image/upload/v1693385551/data_analysis_card_x97yi0.png';
    cardOneTitle.textContent = 'Data Analysis';
    cardOnePara.textContent = 'Upon completion of the Data Analysis course, you will be equipped with a comprehensive skill set to analyze and present data effectively, transforming raw data into actionable insights.';

    // card two
    cardTwoImg.src = 'https://res.cloudinary.com/talentql-inc/image/upload/v1693385554/product_design_card_bnah48.png';
    cardTwoTitle.textContent = 'Product Design';
    cardTwoPara.textContent = 'This course will take you through the basic principles of designing products that address user needs and align with business goals.';

    // card three
    cardThreeImg.src = 'https://res.cloudinary.com/talentql-inc/image/upload/v1720544835/hero_lh3bls.png';
    cardThreeTitle.textContent = 'Cyber Security';
    cardThreePara.textContent = 'Become well-equipped to enter the workforce with a solid foundation in both theoretical and practical aspects of cybersecurity, with no degree or prior experience required';
});


const lagosBtn = document.getElementById('lagosBtn');
const kigaliBtn = document.getElementById('kigaliBtn');

const CardsHolder = document.querySelector('.forthSectionCards');
// card one
const forthCardOneTop = document.getElementById('forthCardOneTop');
const forthCardOneMiddle = document.getElementById('forthCardOneMiddle');
const forthCardOneBottom = document.getElementById('forthCardOneBottom');
// card two
const forthCardTwoTop = document.getElementById('forthCardTwoTop');
const forthCardTwoMiddle = document.getElementById('forthCardTwoMiddle');
const forthCardTwoBottom = document.getElementById('forthCardTwoBottom');
// card three
const forthCardThreeTop = document.getElementById('forthCardThreeTop');
const forthCardThreeMiddle = document.getElementById('forthCardThreeMiddle');
const forthCardThreeBottom = document.getElementById('forthCardThreeBottom');

const uselessBtn = document.getElementById('uselessBtn');
const payForClassBtn = document.getElementById('payForClassBtn');
const dropdownIcon = document.getElementById('dropdownIcon');


kigaliBtn.addEventListener('click', () => {
    kigaliBtn.style.backgroundColor = '#0367f2';
    kigaliBtn.style.color = 'white';
    lagosBtn.style.backgroundColor = 'transparent';
    lagosBtn.style.color = 'black';

    forthCardOneTop.style.display = 'none';

    forthCardTwoTop.style.display = 'flex';
    forthCardTwoTop.classList.add('fade-in');

    forthCardThreeTop.style.display = 'flex';
    forthCardThreeTop.classList.add('fade-in');
});
lagosBtn.addEventListener('click', () => {
    lagosBtn.style.backgroundColor = '#0367f2';
    lagosBtn.style.color = 'white';
    kigaliBtn.style.backgroundColor = 'transparent';
    kigaliBtn.style.color = 'black';

    forthCardOneTop.style.display = 'flex';
    forthCardTwoTop.style.display = 'none';
});

forthCardOneTop.addEventListener('click', () => {
    dropdownIcon.classList.toggle('rotate');
    payForClassBtn.style.display =
        payForClassBtn.style.display === 'inline-block' ? 'none' : 'inline-block';
    uselessBtn.style.display =
        uselessBtn.style.display === 'none' ? 'inline-block' : 'none';
    forthCardOneMiddle.style.display =
        forthCardOneMiddle.style.display === 'flex' ? 'none' : 'flex';
    forthCardOneBottom.style.display =
        forthCardOneBottom.style.display === 'flex' ? 'none' : 'flex';
});
forthCardTwoTop.addEventListener('click', () => {
    dropdownIcon.classList.toggle('rotate');
    payForClassBtn.style.display =
        payForClassBtn.style.display === 'inline-block' ? 'none' : 'inline-block';
    uselessBtn.style.display =
        uselessBtn.style.display === 'none' ? 'inline-block' : 'none';
    forthCardTwoMiddle.style.display =
        forthCardTwoMiddle.style.display === 'flex' ? 'none' : 'flex';
    forthCardTwoBottom.style.display =
        forthCardTwoBottom.style.display === 'flex' ? 'none' : 'flex';
});

