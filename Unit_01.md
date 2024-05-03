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
  - [01.06 - Objects](#0106---objects)
    - [Code Along: Objects](#code-along-objects)
    - [Lab: Objects](#lab-objects)
  - [01.07 - Arrow Functions, Callbacks, and Array Iteration Methods](#0107---arrow-functions-callbacks-and-array-iteration-methods)
    - [Code Along: Arrow Functions](#code-along-arrow-functions)
    - [Lab: Callbacks and Higher Order Functions](#lab-callbacks-and-higher-order-functions)
  - [01.08 - Intro to HTML and CSS](#0108---intro-to-html-and-css)
    - [Lab: Marking Up and Styling a Webpage](#lab-marking-up-and-styling-a-webpage)
    - [Lab: Clone a Layout](#lab-clone-a-layout)

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
| Lecture Recording | [Link](https://strategiced.zoom.us/rec/share/uP_UdgxzwkI3Q0XMRMuDK2hZCvI8eNLKbFhTqmGzPW1PFfd_Y0iey5I6R0Lda5A.wZ5DSelMyRBtsC-w?startTime=1713485077000) |
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
| Lecture Recording (Diego) | [To Do](https://strategiced.zoom.us/rec/share/uP_UdgxzwkI3Q0XMRMuDK2hZCvI8eNLKbFhTqmGzPW1PFfd_Y0iey5I6R0Lda5A.wZ5DSelMyRBtsC-w?startTime=1713494217000) |
| Lecture Recording (Matt) | [To Do](https://strategiced.zoom.us/rec/play/M_MZ2b0ZKCgU6urondlpkhGwy3xKtQcuXfoDDCZSaGvA7Yj6rLWoYngFyfdpRcH6g-UjGwCf6x4C0bBS.dDj5-nivjfLOadZE?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fstrategiced.zoom.us%2Frec%2Fshare%2FADUP7ylXRokSl6Vp5pD5_0GZ2ULiAmWveDhX2PhLx6kokay-oqbVMv1k87nbfrxg.ZTlZaLVlxs7ihzYK&autoplay=true&startTime=1713625763000) |
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
| Lecture Recording | [Link](https://strategiced.zoom.us/rec/play/M_MZ2b0ZKCgU6urondlpkhGwy3xKtQcuXfoDDCZSaGvA7Yj6rLWoYngFyfdpRcH6g-UjGwCf6x4C0bBS.dDj5-nivjfLOadZE?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fstrategiced.zoom.us%2Frec%2Fshare%2FADUP7ylXRokSl6Vp5pD5_0GZ2ULiAmWveDhX2PhLx6kokay-oqbVMv1k87nbfrxg.ZTlZaLVlxs7ihzYK&autoplay=true&startTime=1713635249000) |
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
| Lecture Recording | [To Do](https://strategiced.zoom.us/rec/share/fya8gIgk59yZOPSYe3AUZL_bvB_Pm7-hh4tRf_2ob0njH4LvlWUbxGrPjpPOx4m3.ouQnrcE-9RPT_Qik?startTime=1713920129000) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-functions-debugging/) |
| dmget | `dmget wb-functions-debugging --demo` |
| Convert Numbers to Strings | [Link](https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/) |
| Math Object | [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) |
| Open in Browser | [Link](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser) |

### Lab: Calculator

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-calculator/) |
| dmget | `dmget wb-calculator` |

> [Back to Table of Contents](#table-of-contents)

## 01.06 - Objects

|  |  |
| :---: | :---: |
| Lecture Recording | [Link](https://strategiced.zoom.us/rec/share/LPueaReu52dd6quDC9zTNyXXT0TgqVgYO423XVLSgoI0Qb0jDJkFvO_rTuNp9lls.Q9DCHyWPcD2eod4J?startTime=1714091366000) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-objects/) |
| dmget | `dmget wb-objects --demo` |

### Code Along: Objects

|  |  |
| :---: | :---: |
| Recording | [Link](https://strategiced.zoom.us/rec/share/JM3OohbQHgWA765OCMoRpF_vvrVJfUUNmWZxAsdsUhBThomovGKVuXp_kMpz09J0.bCE74japbjkWh58F?startTime=1714097804000) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-objects-code-along/) |
| dmget | `dmget wb-objects-code-along` |

### Lab: Objects

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-objects-lab/) |
| dmget | `dmget wb-objects-lab` |

> [Back to Table of Contents](#table-of-contents)

## 01.07 - Arrow Functions, Callbacks, and Array Iteration Methods

|  |  |
| :---: | :---: |
| Lecture Recording | [Link](https://strategiced.zoom.us/rec/share/TyJy-OSBawxqYGM-rn7fLw1UmOLUIvYWzOgStm-u1UYCXP_WndTKsWaCKK2Bsl_D.9s_hiqYA2ORjdqww?startTime=1714522880000) |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-arrows-callbacks/) |
| dmget | `dmget wb-arrows-callbacks --demo` |
| Live Server | [Link](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) |
| Reduce MDN | [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) |
| Visualize Reduce | [Link](https://www.youtube.com/watch?v=VjPtvqHxV94&t=213s&ab_channel=CodingMadeClear) |
| Slice MDN | [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) |
| How Modulo Works| [Link](https://www.freecodecamp.org/news/javascript-modulo-operator-how-to-use-the-modulus-in-js/) |
| Sort MDN| [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) |

### Code Along: Arrow Functions

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-arrow-fns/#code-along-arrow-functions) |
| dmget | `dmget wb-arrow-fns` |

### Lab: Callbacks and Higher Order Functions

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-callbacks/) |
| dmget | `dmget wb-callbacks` |

> [Back to Table of Contents](#table-of-contents)

## 01.08 - Intro to HTML and CSS

|  |  |
| :---: | :---: |
| Lecture Recording | To do |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/lectures/wb-html-css/) |
| dmget | `dmget wb-html-css --demo` |

### Lab: Marking Up and Styling a Webpage

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-html-css-basics/) |
| dmget | `dmget wb-html-css-basics` |

### Lab: Clone a Layout

|  |  |
| :---: | :---: |
| Handout | [Link](https://ed.devmountain.com/materials/ogptlh2/exercises/wb-layout/) |

> [Back to Table of Contents](#table-of-contents)
