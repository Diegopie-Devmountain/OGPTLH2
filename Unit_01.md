# Table of Contents

- [Table of Contents](#table-of-contents)
  - [01.01 - Web Development Orientation](#0101---web-development-orientation)
    - [Lab: Intro To Outcomes](#lab-intro-to-outcomes)
  - [01.02 - The Shell](#0102---the-shell)
    - [Add SSH Keys](#add-ssh-keys)
    - [Code Along: Version Control with Git](#code-along-version-control-with-git)
  - [01.03 - Intro To JavaScript](#0103---intro-to-javascript)
    - [Lab: Mars Adventure](#lab-mars-adventure)
  - [01.04 - Arrays and Looping](#0104---arrays-and-looping)
    - [Code Challenge: Max of Two](#code-challenge-max-of-two)
    - [Lab: Arrays and Looping](#lab-arrays-and-looping)
  - [01.05 - Functions, Debugging, and Node.js](#0105---functions-debugging-and-nodejs)
    - [Lab: Calculator](#lab-calculator)

## 01.01 - Web Development Orientation

|  |  |
| :---: | :---: |
| Lecture Recording | [Link](https://strategiced.zoom.us/rec/share/8zHcEfoPLQ8rp8Ahu5-UQ9m6HgP5Q4SpNZzG_54qMgNzpqN_j9wVAlWxQAvaOkQz.OFHVENKt9sBj2jxM) |
| Slides | [Link](https://slides.com/dmweb/lehi-web-immersive-orientation) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-orientation/) |

### Lab: Intro To Outcomes

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/oc-intro/) |

> [Back to Table of Contents](#table-of-contents)

## 01.02 - The Shell

|  |  |
| :---: | :---: |
| Lecture Recording | [Link]() |
| Slides | [Link](https://ed.devmountain.com/materials/ogptlh2/slides/wb-shell/) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-shell/) |
| dmget | `dmget wb-shell --demo` |

### Add SSH Keys

**Check for current keys**

`ls –al ~/.ssh`

**Create SSH Key**

`ssh-keygen –t rsa –b 4096 –C` *YOURGITHUBEMAIL@PLACEHOLDER.NET*

**Mac Users:** try this if the above command is not working `ssh-keygen -t rsa`

*Don't create a pass phrase*

•	Press enter to default to root directory
•	Press enter to not use a passphrase
•	Press enter again to not use a passphrase

**Check that ssh agent is running**

`eval $(ssh-agent –s)`

**Link key to your machine**

`ssh-add ~/.ssh/id_rsa`

**Copy to clipboard**

`clip < ~/.ssh/id_rsa.pub`

**Mac** `pbcopy < ~/.ssh/id_rsa.pub`

### Code Along: Version Control with Git

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-git/) |
| markdown lint | [Link](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) |
| Markdown All in One | [Link](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) |
 
> [Back to Table of Contents](#table-of-contents)

## 01.03 - Intro To JavaScript

|  |  |
| :---: | :---: |
| Lecture Recording | [To Do]() |
| Slides | [Link](https://ed.devmountain.com/materials/ogptlh2/slides/wb-js-intro/) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-js-intro/) |
| dmget | `dmget wb-js-intro --demo` |
| Reserved Keywords | [Link](https://www.techonthenet.com/js/reserved_words.php) |
| Strings | [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |

### Lab: Mars Adventure

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-mars/) |
| dmget | `dmget wb-mars` |

> [Back to Table of Contents](#table-of-contents)

## 01.04 - Arrays and Looping

|  |  |
| :---: | :---: |
| Lecture Recording | [To Do]() |
| Slides | [Link](https://ed.devmountain.com/materials/ogptlh2/slides/wb-arrays-looping/) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-arrays-looping/) |
| dmget | `dmget wb-arrays-looping --demo` |
| Replit Demos | [Link](https://replit.com/@mbodily/JavaScript-1-and-2#index.js) |

### Code Challenge: Max of Two

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/challenge-max-of-two/) |
| dmget | n/a |

### Lab: Arrays and Looping

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-arrays-looping/) |
| dmget | `dmget wb-arrays-looping` |
| Loops | [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement) |

> [Back to Table of Contents](#table-of-contents)

## 01.05 - Functions, Debugging, and Node.js

|  |  |
| :---: | :---: |
| Lecture Recording | [To Do]() |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-functions-debugging/) |
| dmget | `dmget wb-functions-debugging --demo` |
| Convert Numbers to Strings | [Link](https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/) |
| Math Object | [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) |
| Open in Browser | [Link](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser) |
| Live Server | [Link](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) |

### Lab: Calculator

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-calculator/) |
| dmget | `dmget wb-calculator` |

> [Back to Table of Contents](#table-of-contents)
