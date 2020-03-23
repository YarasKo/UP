let posts=[{
    id:1,
    createdAt: new Date('2020-04-17T23:00:00'),
    author: 'Иванов Иван',
    description: 'Post text 1',
    PhotoLink: 'null'
},
    {
        id:2,
        createdAt: new Date('2020-04-17T23:00:02'),
        author: 'Иванов Иван2',
        description: 'Post text 2',
        PhotoLink: 'null'
    },
    {
        id:3,
        createdAt: new Date('2020-04-17T23:00:03'),
        author: 'Иванов Иван3',
        description: 'Post text 3',
        PhotoLink: 'null'
    },
    {
        id:4,
        createdAt: new Date('2020-03-17T23:00:04'),
        author: 'Иванов Иван4',
        description: 'Post text 4',
        PhotoLink: 'null'
    },
    {
        id:5,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ,
    {
        id:6,
        createdAt: new Date('2020-03-17T23:00:06'),
        author: 'Иванов Иван5',
        description: 'Post text 6',
        PhotoLink: 'null'
    }
    ,
    {
        id:7,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ,
    {
        id:8,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ,
    {
        id:9,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ,
    {
        id:10,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ,
    {
        id:11,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ,
    {
        id:12,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ,
    {
        id:13,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ,
    {
        id:14,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ,
    {
        id:15,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ,
    {
        id:16,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    },
    {
        id:17,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ,
    {
        id:18,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    },
    {
        id:19,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    },
    {
        id:20,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    },
    {
        id:21,
        createdAt: new Date('2020-03-17T23:00:05'),
        author: 'Иванов Иван5',
        description: 'Post text 4',
        PhotoLink: 'null'
    }
    ];


//part 2
(function() {
function getPosts(start,top,filt){
    let st=start||0;
    let to=top||10;
    let newArray = [...posts];
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

    }
    newArray=newArray.slice(st,st+to);
    newArray.sort(function (post1,post2) {
        return post2.createdAt-post1.createdAt;
    })
    return newArray;
}
function getPost(id){
    return posts.find(item => item.id === id);
}
function validatePost(post) {
if (typeof post.id!="undefined"&&typeof post.description!="undefined"&&typeof post.author!="undefined"&&typeof post.createdAt!="undefined"){
    if(post.author.length!=0&& post.description.length<200){
        let unique = posts.findIndex(item => item.id === post.id);
        if(unique===-1){
            return true;
        }

    }
}
return false;
}
function addPost(post){
    if (validatePost(post)){
        posts.push(post);
        return true;
    }
    else return false;
}
function editPost(id,edit){
    let unchanged=getPost(id);
    let original={...unchanged};
    original.description=edit.description||original.description;
    original.photoLink=edit.photoLink||original.photoLink;
    removePost(id);
    if(validatePost(original)){
        addPost(original);
        return true;
    }
    else {
        addPost(unchanged);
        return false;}

}
function  removePost(id) {
return posts.splice(posts.findIndex(item => item.id === id),1);
}

console.log(getPosts(0,10));
console.log(getPosts((10,10)));
console.log(getPosts(0,10,{author:"Иванов Иван5"}));
console.log(getPosts(0,10,{createdAt:new Date('2020-03-17T23:00:00')}));
console.log(getPost((3)));
console.log(addPost( {
    id:22,
    createdAt: new Date('2020-03-17T23:00:18'),
    author: 'Иванов Иван22',
    description: 'Post text 22',
}));
    console.log(getPost((22)));
    console.log(editPost(22,{ description: 'NEW Post text 22',}))
    console.log(getPost(22));
    console.log(removePost(22))
    console.log(getPosts(20,10));
}());