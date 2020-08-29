
// add photos to gallery
const galleryItems = ['item-1', 'item-2', 'item-3', 'flex-4','item-5' ,'item-6', 'item-7', 'item-8','item-9', 'item-10', 'item-11', 'item-12', 'item-13', 'item-14', 'item-15', 'item-16' ];

const addGalleryItem = (index, photo) => {
    const d = document.createElement('div');
    d.className = `item-${index}`;
    d.style.position = 'relative';
    d.style.zIndex = 5;
    d.innerHTML = `
    <img src="./css/images/${photo}.jpg" alt="Фото из Галереи" class="item">
    <div class="item-hover"></div>
    `;

    document.querySelector('.gallery-container').appendChild(d);
};

const addHoverListener = (index) => {
    document.querySelector(`.item-${index}`).addEventListener('mouseover', () => {
        let itemHover = document.querySelector(`.item-${index} .item-hover`).style;
        itemHover.opacity = 1;  
    });
    document.querySelector(`.item-${index}`).addEventListener('mouseleave', () => {
        let itemHover = document.querySelector(`.item-${index} .item-hover`).style;
        itemHover.opacity = 0;
    })
}

for (let i = 0; i < galleryItems.length; i++) {
    addGalleryItem(i+1, galleryItems[i]);
    addHoverListener(i+1);
}



// create photoswipe gallery
var pswpElement = document.querySelectorAll('.pswp')[0];

var items = [
    {
        src: '/css/images/item-1.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-2.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-3.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/flex-4.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-5.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-6.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-7.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-8.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-9.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-10.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-11.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-12.jpg',
        h: 600,
        w: 360
    },
    {
        src: './css/images/item-13.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-14.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-15.jpg',
        h: 600,
        w: 360
    },
    {
        src: '/css/images/item-16.jpg',
        h: 600,
        w: 360
    },

];

var thumbnails = document.querySelectorAll('.item-hover');


thumbnails.forEach((el,i) => {
    var options = {
        index: i,
        getThumbBoundsFn: function(i) {

            // find thumbnail element
            var thumbnail = thumbnails[i];
        
            // get window scroll Y
            var pageYScroll = window.pageYOffset || document.documentElement.scrollTop; 
            // optionally get horizontal scroll
        
            // get position of element relative to viewport
            var rect = thumbnail.getBoundingClientRect(); 
        
            // w = width
            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
        
        }
        
    };

    el.addEventListener('click', () => {
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    })
})