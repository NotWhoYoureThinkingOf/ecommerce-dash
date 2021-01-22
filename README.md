This project is to test out making an Ecommerce page with an admin dashboard where things can be changed

- React
- Redux
- Firebase (for at least authorization, maybe more)
- Framer Motion
- Material UI

Potentially:

- GraphQL
- Node
- Express
- MongoDB

Goals:

<!-- Start with firebase to get it working and then think about converting to MERN -->

- Authorization with Firebase
- Add/Remove items from cart
- Make data.js with array of items (collection on mongoDB or Firebase)
- Make item sticky on product page
- Responsive
- Utilize animations (maybe parallax)
- Allow someone to add/remove/edit data. js on a backend. Use dashboard.png and dashboard2.PNG for design
- Use GraphQL to get information from an API
- Make full stack with Express and MongoDB

To-do list:

- add login/logout functionality
- change search to "" after selecting a search product
- make keyboards page
- make mice page
- edit headsets page to be customized based on selected headset
- add cart functionality (adding/removing from cart)
- make orders page
- add stripe
- make all links on website go somewhere ("still under construction" if no actual page)
- add links to pages in hamburger menu on header
- check into adding more dropdown menues in header
- style the "Shop" drowpdown
- add a confirmation to the enter email in footer
- add page transitions
- make responsive
- add any animations that might improve the UX

Notes

MainPage.js:

- might apply to everywhere but try to leave product that is selected visible while page changes around it.
- might involve animateSharedLayout from Framer. Example on https://codesandbox.io/s/framer-motion-layout-animation-svg-viewbox-qjx0j?file=/src/App.js that uses layout prop but not animateSharedLayout
- another example on https://codesandbox.io/s/framer-motion-2-animatesharedlayout-animate-between-different-components-dy0bv?file=/src/App.js that does use animateSharedLayout
- call products from firestore here and add to redux so they can be accessed everywhere

AllProducts.js:

- move firebase api call from AllProducts to MainPage and add to redux from there so products can be accessed right away

Info.js:

- main-products-highlight.mp4: idea for products shown on main page maybe

App.js:

- try to incorporate something from after effects using the youtube tutorials (FLIMLION channel)

Products.js:

- add a page for keyboards
- add a page for mice
- change the pictures/details headsets page to call in selected item stuff
