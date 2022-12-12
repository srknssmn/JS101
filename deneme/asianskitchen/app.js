const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

/*
let categoryAr = []

function KOMPLE() {

  for (let i = 0 ; i < menu.length ; i++) {
    if (!(categoryAr.includes(menu[i].category))) {
          categoryAr.push(menu[i].category)
    }
  
    let rowMain = document.querySelector("#rowMain")
    let newCol = document.createElement("div")
    newCol.classList.add("col-6" , "section-center")
    rowMain.appendChild(newCol)
    let newCont = document.createElement("div")
    newCont.classList.add("container")
    newCol.appendChild(newCont)
    let newRow = document.createElement("div")
    newRow.classList.add("row")
    newCont.appendChild(newRow)
    let newColLeft = document.createElement("div")
    newColLeft.classList.add("col-3")
    let newColRight = document.createElement("div")
    newColRight.classList.add("col-9")
    newRow.appendChild(newColLeft)
    newRow.appendChild(newColRight)
    let pDom = document.createElement("p")
    let imgDom = document.createElement("p")
    newColRight.appendChild(pDom)
    imgDom.innerHTML = `<img src=${menu[i].img} class="card-img-top" alt="...">`
    newColLeft.appendChild(imgDom)
    pDom.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${menu[i].title}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Region: ${menu[i].category}</li>
      <li class="list-group-item">Price: ${menu[i].price}</li>
      <li class="list-group-item">${menu[i].desc}</li>
    </ul>
  </div>`
  }

  let btncontainer = document.querySelector(".btn-container")

  for (let i = 0 ; i < categoryAr.length ; i++) {
    menu.filter(myFunc)
    function myFunc(value) {
      return value.category === categoryAr[i]
    }
    console.log(menu.filter(myFunc)[0].category)
  
    let btn = document.createElement("button")
    btn.innerHTML = categoryAr[i]
    btn.classList.add("btn" , "btn-outline-dark")
    btncontainer.appendChild(btn)
  
    btn.addEventListener("click" , btnFunc)
    function btnFunc() {
    btn.innerHTML = menu.filter(myFunc)
    }
  }
}

KOMPLE();
*/
/*
let categoryAr = []

  for (let i = 0 ; i < menu.length ; i++) {
    if (!(categoryAr.includes(menu[i].category))) {
          categoryAr.push(menu[i].category)
    }
  }

categoryAr.push("All")

  function KOMPLE() {

  let btncontainer = document.querySelector(".btn-container")

  for (let i = 0 ; i < categoryAr.length ; i++) {
    menu.filter(myFunc)
    function myFunc(value) {
      return value.category === categoryAr[i]
    }
    console.log(menu.filter(myFunc)[i].img)
    for (let j = 0 ; j < menu.length ; j++) {
    
      let rowMain = document.querySelector("#rowMain")
      let newCol = document.createElement("div")
      newCol.classList.add("col-6" , "section-center")
      rowMain.appendChild(newCol)
      let newCont = document.createElement("div")
      newCont.classList.add("container")
      newCol.appendChild(newCont)
      let newRow = document.createElement("div")
      newRow.classList.add("row")
      newCont.appendChild(newRow)
      let newColLeft = document.createElement("div")
      newColLeft.classList.add("col-3")
      let newColRight = document.createElement("div")
      newColRight.classList.add("col-9")
      newRow.appendChild(newColLeft)
      newRow.appendChild(newColRight)
      let pDom = document.createElement("p")
      let imgDom = document.createElement("p")
      newColRight.appendChild(pDom)
      imgDom.innerHTML = `<img src=${menu.filter(myFunc)[i].img} class="card-img-top" alt="...">`
      newColLeft.appendChild(imgDom)
      pDom.innerHTML = `<div class="card" style="width: 18rem;">
      <div class="card-header">
      ${menu.filter(myFunc)[i].title}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Region: ${menu.filter(myFunc)[i].category}</li>
        <li class="list-group-item">Price: ${menu.filter(myFunc)[i].price}</li>
        <li class="list-group-item">${menu.filter(myFunc)[i].desc}</li>
      </ul>
    </div>`
    }
  
    let btn = document.createElement("button")
    btn.innerHTML = categoryAr[i]
    btn.classList.add("btn" , "btn-outline-dark")
    btncontainer.appendChild(btn)
  
    btn.addEventListener("click" , btnFunc)
    function btnFunc() {
    btn.innerHTML = menu.filter(myFunc)
    }
  }
}

KOMPLE();

*/

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]         // Array'e All adında bir eleman daha ekliyor.
);

const categoryList = () => {
  // array.map ile categories Array'ini categoryBtns olarak tekrar düzeltiyor.
  const categoryBtns = categories.map((category) => {
    // Yeni yaratılan buton'a data ile dataset bilgisi ekleniyor. https://www.educba.com/dataset-javascript  
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    }).join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // current target ile gerçekleşen EVENT'te söz konusu elemente ulaşılıyor.
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
      const category = e.currentTarget.dataset.id;
      console.log("BİLGİ:" , e.currentTarget.dataset.id)
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();