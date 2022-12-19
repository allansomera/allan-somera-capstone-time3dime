<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">TimeTripleDime</h3>

  <p align="center">
  Final Project Capstone for BrainStation
    <br />

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#show-case">Show Case</a>
      <ul>
        <li><a href="#functionality">Functionality</a></li>
        <li><a href="#diving-deeper">Diving Deeper</a></li>
      </ul>
    </li>
    <li>
      <a href="#site-structure">Site Structure</a>
      <ul>
        <li><a href="#component-containers">Component Containers</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is my Capstone Project for the BrainStation web development sep-dec
2022 cohort.

Please look into the <a href="#show-case">Show Case</a> section for more
explanations on what I implemented on this sprint.

NOTE (to the TAs)
I've written a section for how I used component containers for my <a
href="#site-structure">Site Structure</a>, please quickly read this section to
understand how I setup my components.

NOTE (to the TAs):
I've tried to follow the style guide, but some parts seemed to be
impossible to replicate without deviating from the style guide. I did try
to get the website to be as close to the mockup to the best of my abilities
without compromising the functionality of the site.

I've also use git command line to merge to main with the command below:

```sh
git checkout main
```

```sh
git merge dev --no-ff

```

```sh
git push origin main

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

FRONTEND

- [![HTML][index.html]][html-url]
- [![CSS][main.css]][css-url]
- [![SASS][sass.scss]][sass-url]
- [![JS][javascript]][js-url]
- [![JS][react.jsx]][reactjs-url]

BACKEND

- [![NODE][node.js]][nodejs-url]
- [![EXPRESSJS][express.js]][expressjs-url]
- [![MYSQL][mysql]][mysql-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

#### Setting up the BACKEND server

1. Clone the repo

   ```sh
   git clone git@github.com:allansomera/allan-somera-capstone-time3dime.git
   ```

2. Enter the directory

   ```sh
   cd allan-somera-capstone-time3dime
   ```

     <p align="right">(<a href="#readme-top">back to top</a>)</p>

3. go into the 'server' directory
   ```sh
   cd server
   ```
4. rename '.env.sample' to '.env'
   ```sh
   mv ./.env.sample .env
   ```
5. install all the packages
   ```sh
   npm i
   ```
6. Run all migrations and seeds
   ```sh
   npm run setup
   ```

 <p align="right">(<a href="#readme-top">back to top</a>)</p>
  <!-- LICENSE -->

## Site Structure

```sh
The will explain how I used containers to hold each component,
main reason I did this is basically only for styling.
```

### Component Containers

```sh
App -- this will hold the routes for the site
```

```sh
TopCon -- this will hold the header component
    - <Header />
```

```sh
Mid1Con -- this will hold the Hero (main) video component
    - <Hero />
        - <HeroVideo />
```

```sh
Mid2Con -- this will hold the Main component which will hold the details of the video
    - <Main />
```

```sh
Mid3Con -- this will hold the CommentForm component
    - <CommentForm />
```

```sh
Mid4Con -- this will hold the CommentData component which hold the CommentList
    - <CommentData />
        - <CommentList />
```

```sh
BottomCon -- this will hold the next video list, components are VideoData, which holds the VideoList component
    - <VideoData />
        - <VideoList />
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Show Case

### Functionality

#### Upload Form Validation

```sh
Will have toastify notifications for form validation, will pop up for any
input/textarea field that is empty
```

![](./extra/upload_validation.gif)

#### Upload Form Validation SUCCESS

```sh
When both input and textarea field is not empty, it will go to Success page.

In the Success page, after a few seconds, you will be redirected to the
homepage
```

![](./extra/upload_success.gif)

#### 404 Page Not Found

```sh
If the url has an invalid route, it will re-route to the 404 page not found,
and after a few seconds it will re-direct to the homepage
```

![](./extra/404pagenotfound.gif)

### Diving Deeper

```sh
This section is for the Diving Deeper implemented functionality
```

#### Comment posting validation

```sh
Will show a notification if the comment input field is empty
```

![](./extra/comment_validation.gif)

#### Comment posting

```sh
Will post the comment in place, with the updated API and re-render the comment
list
```

![](./extra/comment.gif)

#### Comment deletion

```sh
Clicking on the trash icon will have a sub-menu popping up, when 'DELETE' is
pressed, it will make the delete request on the API

You will have a green notification that the comment has been successfuly deleted
```

![](./extra/comment_delete.gif)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link:
[https://github.com/allansomera/allan-somera-bandsite](https://github.com/allansomera/allan-somera-bandsite)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/allansomera/allan-somera-bandstie.svg?style=for-the-badge
[contributors-url]: https://github.com/allansomera/allan-somera-bandsite/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/allansomera/allan-somera-bandsite.svg?style=for-the-badge
[forks-url]: https://github.com/allansomera/allan-somera-bandsite/network/members
[stars-shield]: https://img.shields.io/github/stars/allansomera/allan-somera-bandsite.svg?style=for-the-badge
[stars-url]: https://github.com/allansomera/allan-somera-bandsite/stargazers
[issues-shield]: https://img.shields.io/github/issues/allansomera/allan-somera-bandsite.svg?style=for-the-badge
[issues-url]: https://github.com/allansomera/allan-somera-bandsite/issues
[license-shield]: https://img.shields.io/github/license/allansomera/allan-somera-bandsite.svg?style=for-the-badge
[license-url]: https://github.com/allansomera/allan-somera-bandsite/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/allansomera
[index.html]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[main.css]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/en-US/docs/Learn/CSS
[sass.scss]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[sass-url]: https://sass-lang.com/
[javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[js-url]: https://javascript.com/
[express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[expressjs-url]: https://expressjs.com/
[react.jsx]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[reactjs-url]: https://reactjs.org/
[node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/
[mysql]: https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white
[mysql-url]: https://nodejs.org/

$$


$$

$$
$$
