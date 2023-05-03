# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![](./images/Screenshot%202023-05-02%20200655.png)

### Links

- Solution URL: [https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI/hub](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI/hub)
- Live Site URL: [https://tahobbit11.github.io/Interactive-rating-component/](https://tahobbit11.github.io/Interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to use multiple button listeners and give each of them a value that can be used for changing html text.

```html
<section class="thanks-wrapper hide">
      <div class="thanks-selected">
        <img src="./images/illustration-thank-you.svg" alt="thank-you-pic">
        <h4>You selected <span class="number-output">--</span> out of 5</h4>
      </div>
      <div class="thanks-content">
        <h2>Thank you!</h2>
        <p>  
          We appreciate you taking the time to give a rating. 
          If you ever need more support, don’t hesitate to get in touch!
        </p>
      </div>
    </section>
```
```css
     .rating-buttons button:hover {
        background-color: hsl(217, 12%, 63%);
        color: white;
     }

     .rating-buttons button:active {
        background-color: hsl(25, 97%, 53%);
        color: white;
     }
```
```js
const buttonInput = (value) => {
    console.log(value);
    if(value === 1){
        output.innerText = "1";
        return true;
    } else if(value === 2){
        output.innerText = "2";
        return true;
    } else if(value === 3){
        output.innerText = "3";
        return true;
    } else if (value === 4){
        output.innerText = "4";
        return true;
    } else if (value === 5){
        output.innerText = "5";
        return true;
    } else {
        return false;
    }
};
```

### Continued development

I want to add in the futurea function the detects whether or not a rating is given before hitting the submit button. I would also wanna try to use my css a little differently.

## Author

- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)
