// section Number
let sectionNumber = 0;
//declartion of variables and constans
const mainContainer = document.querySelector("main");
const navContainer = document.getElementById("navContainer");
const upBtn = document.getElementById("upBtn");
const addBtn = document.getElementById("addBtn");
const mainHeader = document.getElementById("mainHeader");
const mainFooter = document.querySelector(".pageFooter");

//create sections
for (let i = 1; i <= 4; i++) createSection();
//create Nav
createNavItems();

//create footer
const footerText = `<p>&copy; Udacity ${new Date().getUTCFullYear()}</p>`;
mainFooter.insertAdjacentHTML("beforeend", footerText);
//buttons eventListener
//nav btn listener
navContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});

//add new section listenter
addBtn.addEventListener("click", () => {
  createSection();
  createNavItems();
});

// to up btn listener
upBtn.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});

//add function to show active section and active link when scroll
window.onscroll = function () {
  const allSections = document.querySelectorAll("section");
  allSections.forEach((currentSection) => {
    let navBtnToSection = navContainer.querySelector(
      `[data-nav=${currentSection.id}]`
    );
    if (
      currentSection.getBoundingClientRect().top >= -400 &&
      currentSection.getBoundingClientRect().top <= 150
    ) {
      currentSection.classList.add("your-active-class");
      navBtnToSection.classList.add("active-link");
    } else {
      currentSection.classList.remove("your-active-class");
      navBtnToSection.classList.remove("active-link");
    }
  });
};

let scrollStart;
document.onscroll = () => {
  mainHeader.style.display = "block";
  clearTimeout(scrollStart);

  scrollStart = setTimeout(() => {
    mainHeader.style.display = "none";
  }, 3000);

  window.scrollY > 800
    ? (upBtn.style.display = "flex")
    : (upBtn.style.display = "none");
};

// function to create section dynamiclly
function createSection() {
  sectionNumber++;
  const htmlContent = `<section id="section${sectionNumber}" data-nav="Section ${sectionNumber}">
    <div class="landing__container">
    <h2>Section ${sectionNumber}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  mainContainer.insertAdjacentHTML("beforeend", htmlContent);
}

//function to create navBar
function createNavItems() {
  navContainer.innerHTML = "";
  const allSections = document.querySelectorAll("section");
  allSections.forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="navBtn">${section.dataset.nav}</a></li>`;
    navContainer.insertAdjacentHTML("beforeend", listItem);
  });
}
