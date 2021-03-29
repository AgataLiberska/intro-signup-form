# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/intro-signup-screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- [View the live site](https://intro-signup-form-two.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

- Instead of adding a separate 'error' class to each element in form control group (input field, icon and error message), I can easily add an error class to the parent element and add custom style rules to each child element like this:

```SCSS
.intro__form__input {
  .not-valid & {
    //styles
  }
}
```
This makes maintaining the stylesheet a lot easier, is more readable, and allows for fewer lines of code in JS.

- You cannot transition from `text-decoration: none` to `text-decoration: $red`, similar to the display property. I wanted the text underline to appear on hover and when link is in focus, so to work around this issue, I set `text-decoration: transparent` initially. This way I don't start displaying the text decoration on hover/focus, I simply change its color, which is animatable.

### Continued development

I would like to practise writing custom functions in Vanilla JS and plan them out beforehand. In this project, I wanted to remove error state when input is correct, and although I achieved the desired result, my initial approach to validating the form made the final result less elegant than I would like it to be. In future projects, I will make it my goal to plan out my approach in more detail to avoid this.

## Author

- Frontend Mentor - [@Agata Liberska](https://www.frontendmentor.io/profile/AgataLiberska)


