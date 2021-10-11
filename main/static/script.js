window.onload = () => {pageFunc()};
const pageFunc = () => {
    var navLnk = document.getElementById("nav-link");
        /* The scrollFunc function adjusts the attributes of the header function when the page is scrolled (Take note the header and header1 are distinct variables are responsible for the headers for the home and signup pages respectively!!!!) */
    const scrollFunc = () => {
        const header = document.querySelector(".navigation-bar");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("navigation-bar-backdrop")
        } else {
            header.classList.remove("navigation-bar-backdrop")

        }
    }
    
    
    
    window.onscroll = () => {scrollFunc()};
    
}
 