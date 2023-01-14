function randomnum_generator()
{
    var randomnum = Math.random() * 6;
    randomnum = (Math.floor(randomnum) + 1);
    // console.log(randomnum)
    return randomnum;
};
var dice1 = randomnum_generator();
var dice2 = randomnum_generator();
document.querySelector(".img1").setAttribute("src","images/dice" + dice1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + dice2 + ".png");   

if (dice1 > dice2)
   {
    document.querySelector(".head1").innerHTML = "🚩 Player 1 Wins!!!";
   }
else if (dice2 > dice1)
    {
        document.querySelector(".head1").innerHTML = "Player 2 Wins🚩!!!";
    }
else if (dice1 === dice2)
{
    document.querySelector(".head1").innerHTML = "Draw";
}

