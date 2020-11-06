let post = new Post('a','b','c');
console.log(post);

function Post(title,author,body){
    this.title = title;
    this.body = body;
    this.author = author;
    this.comments = [];
    this.isLive = false;
    this.views = 0;
}

