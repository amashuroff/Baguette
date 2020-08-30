
// add photos to gallery
const galleryItems = ['item-1', 'item-2', 'item-3', 'flex-4','item-5' ,'item-6', 'item-7', 'item-8','item-9', 'item-10', 'item-11', 'item-12', 'item-13', 'item-14', 'item-15', 'item-16' ];
const galleryArr = [];
const addGalleryItem = (photo) => {
    const d = document.createElement('div');
    d.className = `item`;
    d.style.position = 'relative';
    d.style.zIndex = 5;
    d.style.height = '285px';

    d.innerHTML = `
    <div class="item-hover"></div>
    `;

    d.style.backgroundImage = `url('./css/images/${photo}.jpg')`;
    d.style.backgroundSize = 'cover';
    d.style.backgroundPositionY = '50%';

    galleryArr.push(d);
};

const addHoverListener = () => {
    document.querySelectorAll('.item').forEach(el => {
        el.addEventListener('mouseover', () => {
            el.firstElementChild.style.opacity = 1;
        });
        el.addEventListener('mouseout', () => {
            el.firstElementChild.style.opacity = 0;
        })
    })
}

for (let i = 0; i < galleryItems.length; i++) {
    addGalleryItem(galleryItems[i]);
    document.querySelector('.gallery-container').appendChild(galleryArr[i]);
}

addHoverListener();

// create photoswipe gallery
var pswpElement = document.querySelectorAll('.pswp')[0];

var items = [
    {
        src: 'css/images/item-1.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-2.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-3.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/flex-4.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-5.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-6.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-7.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-8.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-9.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-10.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-11.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-12.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-13.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-14.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-15.jpg',
        h: 1920,
        w: 2880
    },
    {
        src: 'css/images/item-16.jpg',
        h: 1920,
        w: 2880
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
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    })
})