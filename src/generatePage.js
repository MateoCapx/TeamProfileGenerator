
function generatePage(){
    module.exports = (newEngineer,newManager,newIntern) => {
  return`<!DOCTYPE html>
<html>
    <head>
        <title>Team Member</title>
        <meta name="description" content="This is the description">
        <style>

* {
    box-sizing: border-box;
    font-family: Raleway;
    color: #777;
}

html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
}

.nav ul {
    margin: 0;
}

.nav li {
    display: inline;
}

.nav a {
    display: inline-block;
    padding: .5em;
    color: white;
    text-decoration: none;
}

.main-nav {
    text-align: center;
    font-size: 1.1em;
    font-weight: lighter;
    border-bottom: 1px solid rgba(255, 255, 255, .3)
}

.main-nav li {
    padding: 0 5%;
}

.nav a:hover {
    background-color: rgba(255, 255, 255, .3)
}

.main-header {
    background-color: rgba(0, 0, 0, .6);
    background-image: url("Images/Header Background.jpg");
    background-blend-mode: multiply;
    background-size: cover;
    padding-bottom: 30px;
}

.band-name {
    text-align: center;
    margin: 0;
    font-size: 4em;
    font-family: "Booter - Zero Zero";
    font-weight: normal;
    color: white;
}

.band-name-large {
    font-size: 8em;
}

.content-section {
    margin: 1em;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5em;
}
.section-header {
    font-family: "Metal Mania";
    font-weight: normal;
    color: #333;
    text-align: center;
    font-size: 2.5em;
}


.shop-item {
    margin: 30px;
}

.shop-item-title {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    color: #333;
    margin-bottom: 15px;
}

.shop-item-image {
    height: 250px;
}

.shop-item-details {
    display: flex;
    align-items: center;
    padding: 5px;
}

.shop-item-price {
    flex-grow: 1;
    color: #333;
}

.shop-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.cart-header {
    font-weight: bold;
    font-size: 1.25em;
    color: #333;
}

.cart-column {
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    margin-right: 1.5em;
    padding-bottom: 10px;
    margin-top: 10px;
}

        </style>
    </head>




    
    <body>
        <header class="main-header">
            <h1 class="band-name band-name-large">My Team</h1>
        </header>
        <section class="container content-section">
           
            <div class="shop-items">
                <div class="shop-item">
                    <span class="shop-item-title">${newEngineer.name}</span>
                    <span class="shop-item-title">${newEngineer.role}</span>
                    <div class="shop-item-details">
                        ${  newEngineer.name,
                            newEngineer.employeeId,
                            newEngineer.emailAddress,
                            newEngineer.gitHub
                          } 

                    </div>
                </div>

                <div class="shop-items">
                <div class="shop-item">
                    <span class="shop-item-title">${newManager.name}</span>
                    <span class="shop-item-title">${newManager.role}</span>
                    <div class="shop-item-details">
                        ${ newManager.Name,
                            newManager.id ,
                            newManager.email,
                            newManager.officeNumber,
                            newManager.github
                          } 

                    </div>
                </div>

                <div class="shop-items">
                <div class="shop-item">
                    <span class="shop-item-title">${this.name}</span>
                    <span class="shop-item-title">${this.role}</span>
                    <div class="shop-item-details">
                        ${ this.name,
                            this.id ,
                            this.email,
                            this.officeNumber,
                            this.github
                          } 

                    </div>
                </div>

                <div class="shop-items">
                <div class="shop-item">
                    <span class="shop-item-title">${this.name}</span>
                    <span class="shop-item-title">${this.role}</span>
                    <div class="shop-item-details">
                        ${ this.name,
                            this.id ,
                            this.email,
                            this.officeNumber,
                            this.github
                          } 

                    </div>
                </div>
            </div>
            
        </section>
      
    </body>
</html>`
                        }
}
generatePage();


// // create the manager html
// const generateManager = manager => {
//     return `
//     <div class="card employee-card">
//     <div class="card-header">
//   <h2 class="card-title">${manager.getName()}</h2>
// ...
//  `;
// };
