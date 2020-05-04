'use strict';
class view{
    template;
    container;
    constructor() {
        // Caching template
        this.template = document.getElementById('post-template');
        // Caching container
        this.container = document.getElementById('notes');
    }
         addItem (data) {
            let newTweet = document.importNode(this.template.content, true);

            this.fillItemData(newTweet, data);
             this.container.appendChild(newTweet);
        }
         fillItemData(item, data) {
            let placeholders = item.querySelectorAll('[data-target]');
            [].forEach.call(placeholders || [], (phElement) => {
                let key = phElement.getAttribute('data-target');
                phElement.textContent = String(data[key]);
                if(key==='author'&&data[key]!=currentUser){
                    let el = item.querySelector('.smallerbutton');
                    el.style='display: none;';
                }
            });
        }
        clear(){
            const parent = document.getElementById("notes");
            while (parent.firstChild) {
                parent.firstChild.remove();}


        }
}
        let viewEx=new view();
       pl.getPage().forEach((item) => viewEx.addItem(item));
       pl.add({
           id:23,
           createdAt: new Date('2020-04-17T23:00:04'),
           author: 'User',
           description: 'Wow This is so amazing. I like all cultures',
           PhotoLink: 'null',
           tags:['cultures','i'],
           likes:['user1'],
       });
       viewEx.clear();
       pl.getPage().forEach((item) => viewEx.addItem(item));
       pl.edit(23,{
           description: 'Wow This is so amazing. I like all cultures.tik tok foreva',
       });
       viewEx.clear();
       pl.getPage().forEach((item) => viewEx.addItem(item));
       pl.remove(1);
        viewEx.clear();
        pl.getPage().forEach((item) => viewEx.addItem(item));


