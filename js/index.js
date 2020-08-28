
// add photos to gallery
const galleryItems = ['item-1', 'item-2', 'item-3', 'flex-4','item-5' ,'item-6', 'item-7'];

const addGalleryItem = (index, photo) => {
    const d = document.createElement('div');
    d.className = `item-${index}`;
    d.innerHTML = `<img src="./css/images/${photo}.jpg" alt="Фото из Галереи" class="item">`

    document.querySelector('.gallery-container').appendChild(d);
};

for (let i = 0; i < galleryItems.length; i++) {
    addGalleryItem(i+1, galleryItems[i]);
}


// create gallery
var pswpElement = document.querySelectorAll('.pswp')[0];

var items = [
    {
        src: '/images/1.jpeg',
        w: 1200,
        h: 900
    },
    {
        src: 'https://placekitten.com/600/400',
        w: 600,
        h: 400
    },
    {
        src: '/images/2.jpeg',
        w: 1200,
        h: 900
    },
    {
        src: '/images/3.jpg',
        w: 1200,
        h: 900
    }
];

var thumbnails = document.querySelectorAll('.item');


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