let cards=[
    {
        image:"https://p1.pxfuel.com/preview/91/934/509/angry-groot-guardians-of-the-galaxy-action-figure-toy-royalty-free-thumbnail.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://p1.pxfuel.com/preview/91/934/509/angry-groot-guardians-of-the-galaxy-action-figure-toy-royalty-free-thumbnail.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/474x/52/30/5b/52305bd535181dc76f05adb4362abeb9.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/474x/52/30/5b/52305bd535181dc76f05adb4362abeb9.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://static.toiimg.com/thumb/msid-75373083,imgsize-1136745,width-800,height-600,resizemode-75/75373083.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://static.toiimg.com/thumb/msid-75373083,imgsize-1136745,width-800,height-600,resizemode-75/75373083.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://static.toiimg.com/photo/msid-76138807/76138807.jpg?377843",
        value:5,
        status:"closed"
    },
    {
        image:"https://static.toiimg.com/photo/msid-76138807/76138807.jpg?377843",
        value:5,
        status:"closed"
    },
]
//Durnsten algo(used for shuffling array)
let temp;
for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));
     temp=cards[i];
     cards[i]=cards[j];
     cards[j]=temp;
}

console.log(cards);

function displaycards(data){

    let cardsString="";
    data.forEach(function(card,index) {
        cardsString+=`
        
        <div class="card" style="background-image:url('${card.image}')">
         <div  class="overlay ${card.status}" onclick="openCard(${index})">
         </div>
        </div>
        
        `;
        
    });

    document.getElementById('cards').innerHTML=cardsString;

}

let cardCount=1;
let val1=null,val2=null,score=0;
displaycards(cards);

function openCard(index)
{
cards[index].status="opened";
if(cardCount===1){
    val1=cards[index].value;
    cardCount++;
}
else if(cardCount===2){
    val2=cards[index].value;

    if(val1===val2){
        score++;
        document.getElementById('score').innerHTML=score;
        //reset after one
        val1=null;
        val2=null;
        cardCount=1;

    }
    else{
alert("GAME OVER");
location.reload();
    }


}
displaycards(cards);

}