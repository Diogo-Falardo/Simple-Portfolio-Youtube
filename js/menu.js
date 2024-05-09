const menu = document.querySelectorAll(".menu li");
const container = document.querySelector(".main-container");

const textcontainer = {
    me: "<div class='red'></div>",
    projects: "<div class='green'></div>"
};

menu.forEach(item => {
    item.addEventListener('click', function(){
        const itemID = this.getAttribute('id');

        container.innerHTML = textcontainer[itemID];

        menu.forEach(item => item.classList.remove('active'));

        this.classList.add('active');
    })
})

container.innerHTML = textcontainer['me'];
document.getElementById('me').classList.add('active');