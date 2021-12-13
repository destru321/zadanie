const classicWishes = 
[
    'Have yourself a Merry little Christmas, let your heart be light.',
    'May this Christmas season bring you closer to all those that you treasure in your heart. Have a Merry Christmas and a Happy New year!',
    'I  hope Santa is good to you this year because you only deserve the best. Merry Christmas from our family to yours.',
    'Take nothing for granted and be thankful that you have such great family and friends to spend this joyous season with. Wishing you a delightful Christmas.',
    'Wishing you and your family health, happiness, peace and prosperity this Christmas and in the coming New Year.'
];

const friendsWishes = 
[
    'I hope your Christmas is as wonderful as you are.',
    `Your friendship and your love is the best Christmas gift that I've ever received.`,
    'This is the message of Christmas: We are never alone.'
];

const loverWishes = 
[
    `I wouldn't want to spend Christmas with anyone else.`,

    `Our life together just keeps getting better. I'm so grateful that I can share my Christmas with you.`,

    `I'd eat brussel sprouts for you.`,

    `There's only one thing better than Christmas and that's Christmas with you.`,

    `You're the partridge to my pear tree.`
];

const familyWishes =
[
    `Christmas is a time to share and give, it is a time to forgive and show love to those who are dear to your life. You are so important in my life in every way. Merry Christmas to my family!`,

    `I can't wait to be at home for Christmas, it will be a beautiful day with my family. I love you so much and wish you a day full of joy and laughter. Merry Christmas!`,

    `Christmas is one of my best days of the year; it is a time that I get to spend with my whole family without disturbance from work life. I am wishing every day could be like this. Merry Christmas!`,

    `This is my favorite time of the year, not because I am free but because I get the time to spend it with you. Merry Christmas!`,

    `I know this day will be the best Christmas ever, for we will all be together as a family. Merry Christmas to you!`
];

const funnyWishes = 
[
    `Yay! It's Christmas! Let's buy loads of stuff no one needs!`,

    `Whoever said 'all is calm' has never been to our house around Christmas. Some might say we're not very bright, either.`,

    `I only got you a card in case you got me one...`,

    `You can tell a lot about a person by the way they handle three things: a rainy day, lost luggage and tangled Christmas tree lights.`,

    `I hope you like the present you told me to buy for you.`
];


const text = document.querySelector('.text');
const textDate = document.querySelector('.date');
const author = document.querySelector('.author');

document.querySelector('.form__button').addEventListener('click', () => {

    const firstName = document.querySelector('.form__firstname').value;
    const lastName = document.querySelector('.form__lastname').value;
    const wishTypeClassic = document.getElementById('classic').checked;
    const wishTypeFriends = document.getElementById('friend').checked;
    const wishTypeLover = document.getElementById('lover').checked;
    const wishTypeFamily = document.getElementById('family').checked;
    const wishTypeFunny = document.getElementById('funny').checked;

    let date = new Date();

    let wishDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    let randomNumber = parseInt(Math.random() * 5);


    if (firstName == "" || lastName == "" || firstName == "" && lastName == "") {
        text.innerText = 'Input your name!!!';
        text.classList.add('err');

    } else if (wishTypeClassic || wishTypeFamily || wishTypeFriends || wishTypeFunny || wishTypeLover){
        text.classList.remove('err')
        if (wishTypeClassic) {
            author.innerText = `${firstName} ${lastName}`;
            const wish = classicWishes[randomNumber];
            text.innerText = wish;
            textDate.innerText = wishDate;
    
        } else if (wishTypeFriends) {
            author.innerText = `${firstName} ${lastName}`;
            randomNumber = parseInt(Math.random() * 3);
            const wish = friendsWishes[randomNumber];
            text.innerText = wish;
            textDate.innerText = wishDate;
    
        } else if (wishTypeLover) {
            author.innerText = `${firstName} ${lastName}`;
            const wish = loverWishes[randomNumber];
            text.innerText = wish;
            textDate.innerText = wishDate;
    
        } else if (wishTypeFamily) {
            author.innerText = `${firstName} ${lastName}`;
            const wish = familyWishes[randomNumber];
            text.innerText = wish;
            textDate.innerText = wishDate;
    
        } else if (wishTypeFunny) {
            author.innerText = `${firstName} ${lastName}`;
            const wish = funnyWishes[randomNumber];
            text.innerText = wish;
            textDate.innerText = wishDate;
        }
    } else {
        text.innerText = 'Selcet wishes type!!!';
        text.classList.add('err');
    }


}); 
