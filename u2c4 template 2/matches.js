// write js code here corresponding to matches.html

var matcharr = JSON.parse(localStorage.getItem("schedule"));
favouriteArr=JSON.parse(localStorage.getItem("favourites"))||[];

displayData(matcharr);
function displayData(data){
    document.querySelector("tbody").innerHTML="";

    data.forEach(function(elem) {
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.matchNum;

        var td2=document.createElement("td");
        td2.innerText=elem.teamA;

        var td3=document.createElement("td");
        td3.innerText=elem.teamB;

        var td6=document.createElement("td");
        td6.innerText=elem.venue;

        var td4=document.createElement("td");
        td4.innerText=elem.venue;

        var td5=document.createElement("td");
        td5.innerText="Add as Favourites";
        td5.style.color="green";
        td5.style.cursor ="pointer";
        td5.addEventListener("click",function(){
            Favouritesfun(elem);
        });
        tr.append(td1,td2,td3,td6,td4,td5);
        document.querySelector("tbody").append(tr);
    });

function  Favouritesfun(elem){
    favouriteArr.push(elem);
    // console.log();
    localStorage.setItem("favourites",JSON.stringify(favouriteArr));
}
}