// if method invoked by object, this refers to the object
const video = {
  title: 'LOTR',
  tags: ['PG', 'PG-13', 'R'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(tag, this.title);
    }, this); // As 2nd arg of forEach function, still in invocation context of showTags method
  },
  play() {
    console.log(this);
  }
};

video.stop = function () {
  console.log(this);
};

// references object
video.stop(); // {title: 'a', tags: Array(3), showTags: ƒ, play: ƒ, stop: ƒ}
video.showTags(); // each tag in video.tags


// if regular function, this refers to global value (window or global)
function playVideo() {
  console.log(this);
}

// playVideo(); // Logs window object

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video('Star Wars'); // {title: 'Star Wars'}