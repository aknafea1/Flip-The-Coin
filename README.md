<!-- Please update value in the {}  -->

<h1 align="center"> Flip The Coin | devChallenges</h1>

<div align="center">
   Solution for a challenge <a href="https://devchallenges.io/challenge/flip-the-coin" target="_blank">Flip The Coin</a> from <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://aknafea1.github.io/Flip-The-Coin/">
      Demo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/solution/50338">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenge/flip-the-coin">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)
- [Built with](#built-with)
- [Features](#features)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://github.com/aknafea1/Flip-The-Coin/blob/88ad2dd6c3a8f2b104d7159468e2eb60c59206ea/Screenshot%202025-05-14%20125405.png)

### What I learned

I’ve learned a new concept called reflow, and it really caught me off guard. I tried to re-trigger an animation by removing and then re-adding the class—but nothing changed. So what was the problem?

Well, the browser is kinda lazy 'in a good way'. Just adding the class again doesn’t change the visuals. So why should dude bother doing the work again?

But nah, we can wake him up—just tell it, “Hey, something changed here!”
How, you ask? Hmm, it’s actually quite simple: make a change to the DOM, or just re-measure something—like I did by asking it for .offsetWidth.

Yeah, it’s sneaky—but I honestly love how the browser behaves under the hood.

### Useful resources

Chatgpt was the mentor infact i take the bug and tell him why it doesn't work to learn a new concept
he doesn't always be accurate but here come our research bugs are the best thing in our field unless
you didn't sleep well XD

### Built with

- HTML markup
- CSS custom properties
- Flexbox

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges-dashboard) challenge.

## Author

- GitHub [Ahmed Nafea](https://github.com/aknafea1)
