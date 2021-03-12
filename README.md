# RA-SWAPI
----
## A React Application prepared to consume SWAPI data
React Application prepared to consume SWAPI data
<div style="width: 50%; margin: 0 auto; border: 1px solid rgba(0,0,0,0.5); border-radius: 0.5rem; background-color: rgba(0,0,0,0.25);color:#fff; display:flex; flex-direction: column; align-items: center">
<img src="./src/common/images/svg/yoda.svg" alt="Yoda" width="200px">
<p>May the front be with you</p>
</div>

### Abstract
RA-SWAPI has been designed from scratch as a SPA based on the following stack:
* **webpack** as module bundler 
* **yarn** as dependency manager
* **React** as a JS library builder for user-interface
* **jest** as a JS test framework
* **enzyme** as a JS testing utility
* **git** as version control system
* **SWAPI** as consuming API for StarWars data [ (SWAPI) ](https://swapi.dev/)

### About React implementation
Components have been implemented using both React approaches:
* **class components** have been defined as stateful components, using lifecycle methods to control own render
* **functional components** have been defined as stateful components taking advantadge of useState and useEffect hooks.

### About styles
BEM (Block__Element--Modifier) has been used as CSS implementation pattern. No framework or library has been used, but CSSModules and corresponding loaders in order to avoid rules collision. 

### About testing
Jest and Enzyme have been used with testing purpose in both sides:
* unit test for business logic
* component test for React components
