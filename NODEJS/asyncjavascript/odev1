// Post Sıralama ve Post Ekleme
// Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, 
// sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

const POSTS = [
    {title: "Post1" , text: "lorem ipsum dolor" , sign: "Author1"},
    {title: "Post2" , text: "lorem ipsum dolor" , sign: "Author2"},
    {title: "Post3" , text: "lorem ipsum dolor" , sign: "Author3"}
]

const listPosts = () => {
    POSTS.forEach(value => {
        console.log("title:" , value.title , " text:" , value.text , " Sign:" , value.sign)
    })
};

function newPost(post) {
    return new Promise((resolve, reject) => {
      if (post) {
        POSTS.push(post);
        resolve("**** Yeni Post Eklendi *****");
      } else {
        reject("HATA ALINDI!");
      }
    });
}

async function addAndListPost(value) {
    try{
        listPosts();
        let info = await newPost(value);
        console.log(info);
        listPosts();
    } catch (error) {
        console.log(error)
    }
}

addAndListPost({title: "Post4" , text: "lorem ipsum dolor" , sign: "Author4"});