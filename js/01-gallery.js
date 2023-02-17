import { galleryItems } from './gallery-items.js';
// Change code below this line

// . по класу
const gallery = document.querySelector('.gallery');

const items = [];

galleryItems.forEach((element) => {

    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__items');


    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');

    galleryLink.href = element.original;

    // створення елемента з імям img повертає ссилку 
    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image'); // додавання класа до тега

    galleryImg.src = element.preview;

    galleryImg.setAttribute("data-source", element.original);

    galleryImg.alt = element.description;

    galleryItem.append(galleryLink);
    galleryLink.append(galleryImg);
    items.push(galleryItem);
});
    // додавання створених елементів в галерею через розпилення
gallery.append(...items);

document.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    }


    const imgSelected = e.target.getAttribute('data-source');

    const template = basicLightbox.create (
        `<img src = "${imgSelected}" width = "800" height = "600">`,
    
        // обьект налаштування бібліотеки
    {
    onShow: () => {         // показати
        document.addEventListener("keydown", closeModal);
    },
        // заррити      
    onClose: () => {
        document.removeEventListener("keydown", closeModal);
    },
    }
);

template.show();

function closeModal(e) {
    if (e.key === "Escape") {
        template.close();
    }
}
});


// console.log(galleryItems);
