import "./style.css";
import Chance from "chance";

// Instantiate Chance so it can be used
const chance = new Chance();

// Use Chance here.

const randomFirstName = chance.first();
const randomMiddleName = chance.first();
const randomLastName = chance.last();
const randomMail = chance.email();
const randomPhoneNumber = chance.phone();
const randomProfession = chance.profession();
const randomYear = chance.year({ min: 1900, max: 2000 });
const randomCity = chance.city();
const randomAnimal = chance.animal();
const randomNumber = chance.integer({ min: -1900, max: 2000 });
const randomAvatar = chance.avatar();

document.querySelector("#app").innerHTML = `
<h1><img src="${randomAvatar}"/></h1>
  <article class="card">
    <h2 class="card__content">${randomFirstName} ${randomMiddleName} ${randomLastName}!</h2>
    <section class="card__content card">
      <p class="no-margin"><img src="data:image/png;base64,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" class="img"/> ${randomMail}</p>
      <p class="no-margin"><img src="http://simpleicon.com/wp-content/uploads/phone-1.svg" class="img"/> ${randomPhoneNumber}</p>
    </section>
    <p class="card__content">Hey, my name is ${randomFirstName} and I am a ${randomProfession}. 
    I was born in the year of ${randomYear} in the city of ${randomCity}.
    My favorite animal is the ${randomAnimal}. But I also love numbers! 
    My favorite one is ${randomNumber}.
  </article>
`;
