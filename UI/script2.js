class PostList{
    constructor(posts) {
        this._posts=posts;
    }
    getPage(start,top,filt){
        let st=start||0;
        let to=top||10;
        let newArray = [...this._posts];
        if(typeof filt!=='undefined'){
            if(typeof filt.author!='undefined'){
                newArray=newArray.filter(function (val) {
                    return val.author===filt.author;

                })
            }
            if(typeof filt.createdAt!='undefined'){
                newArray=newArray.filter(function (val) {
                    return val.createdAt.getDate()===filt.createdAt.getDate()&&val.createdAt.getMonth()===filt.createdAt.getMonth()&&val.createdAt.getFullYear()===filt.createdAt.getFullYear();

                })
            }
            if(typeof filt.tags!='undefined'){
                newArray=newArray.filter(function (val) {
                    let flag=false;
                    val.tags.forEach(value =>{
                        if(filt.tags.includes(value)){
                            flag=true;
                        }
                    } );

                    return flag;

                })
            }

        }
        newArray=newArray.slice(st,st+to);
        newArray.sort(function (post1,post2) {
            return post2.createdAt-post1.createdAt;
        });
        return newArray;
    }
    get(id){
        return this._posts.find(item => item.id === id);
    }
     validatePost(post) {
        let flag=false;
        if (typeof post.id!="undefined"&&typeof post.description!="undefined"&&typeof post.author!="undefined"&&typeof post.createdAt!="undefined"&&typeof post.tags!="undefined"&&typeof post.likes!="undefined"){
            if(post.author.length!==0&& post.description.length<200){
                let unique = this._posts.findIndex(item => item.id === post.id);
                if(unique===-1){
                    flag= true;
                }

            }
        }
        return flag;
    }
    add(post){
        if (this.validatePost(post)){
            this._posts.push(post);
            return true;
        }
        else return false;
    }
    edit(id,edit){
        let unchanged=this.get(id);
        let original={...unchanged};
        original.description=edit.description||original.description;
        original.photoLink=edit.photoLink||original.photoLink;
        original.tags=edit.tags||original.tags;
        this.remove(id);
        if(this.validatePost(original)){
            this.add(original);
            return true;
        }
        else {
            this.add(unchanged);
            return false;}

    }
     remove(id) {
        return this._posts.splice(this._posts.findIndex(item => item.id === id),1);
    }
    addAll(array){
        array.forEach(item=> this.add(item));
    }
}

let postsA=[{
    id:1,
    createdAt: new Date('2020-04-17T23:00:00'),
    author: 'Иванов Иван',
    description: 'Post text 1',
    PhotoLink: 'null',
    tags:['tag0','tag0'],
    likes:['user1'],
},
    {
        id:2,
        createdAt: new Date('2020-04-17T23:00:02'),
        author: 'Иванов Иван2',
        description: 'Post text 2',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    },
    {
        id:3,
        createdAt: new Date('2020-04-17T23:00:03'),
        author: 'Иванов Иван3',
        description: 'Post text 3',
        PhotoLink: 'null',
        tags:['tag3','tag2'],
        likes:['user1'],
    },
    {
        id:4,
        createdAt: new Date('2020-03-17T23:00:04'),
        author: 'Иванов Иван4',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag4','tag5'],
        likes:['user1'],
    },
    {
        id:5,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag3','tag4'],
        likes:['user1'],
    }
    ,
    {
        id:6,
        createdAt: new Date('2020-03-17T23:00:06'),
        author: 'Иванов Иван5',
        description: 'Post text 6',
        PhotoLink: 'null',
        tags:['tag5','tag6'],
        likes:['user1'],
    }
    ,
    {
        id:7,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag7','tag2'],
        likes:['user1'],
    }
    ,
    {
        id:8,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag7','tag1'],
        likes:['user1'],
    }
    ,
    {
        id:9,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag7'],
        likes:['user1'],
    }
    ,
    {
        id:10,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    }
    ,
    {
        id:11,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    }
    ,
    {
        id:12,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    }
    ,
    {
        id:13,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    }
    ,
    {
        id:14,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    }
    ,
    {
        id:15,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:[],
        likes:[],
    }
    ,
    {
        id:16,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    },
    {
        id:17,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    }
    ,
    {
        id:18,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    },
    {
        id:19,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    },
    {
        id:20,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    },
    {
        id:21,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null',
        tags:['tag1','tag2'],
        likes:['user1'],
    }
];
let pl=new PostList(postsA);
console.log(pl.getPage(0,10));
console.log(pl.getPage(10,10));
console.log(pl.getPage(0,10,{author:"Иванов Иван5"}));
console.log(pl.getPage(0,10,{tags:['tag1','tag2']}));
console.log(pl.getPage(0,10,{createdAt:new Date('2020-03-17T23:00:00')}));
console.log(pl.get(3));
console.log(pl.add( {
    id:22,
    createdAt: new Date('2020-03-17T23:00:18'),
    author: 'Иванов Иван22',
    description: 'Post text 22',
    tags:[],
    likes:[],
}));
console.log(pl.get(22));
console.log(pl.edit(22,{ description: 'NEW Post text 22',}));
console.log(pl.get(22));
console.log(pl.remove(22));
console.log(pl.getPage(20,10));

