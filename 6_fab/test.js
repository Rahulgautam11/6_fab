/*var all_posts=[
    {
        'title':"india",
        'date':"06-02-2022",
        'content':"this is my contant"

    },
    {
        'title':"india",
        'date':"06-02-2022",
        'content':"this is my contant"

    },
    {
        'title':"india",
        'date':"06-02-2022",
        'content':"this is my contant"

    },
    {
        'title':"india",
        'date':"06-02-2022",
        'content':"this is my contant"

    }

]*/
for(let i=0;i<all_posts.length;i++){
    var container = document.getElementById("container");
    
    var post=document.createElement("div");
    post.classList.add("post");
    var title=document.createElement("h3");
    
    var date=document.createElement("p");
    var postbtns=document.createElement("div");
    var delbtn=document.createElement("button");
    var updatebtn=document.createElement("button");
    var previewbtn=document.createElement("button");

    title.innerText=all_posts[i].title;
    date.innerText=all_posts[i].date;

    postbtns.appendChild(delbtn,updatebtn,previewbtn);
    container.append(postbtns,title,date);
}