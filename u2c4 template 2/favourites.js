// write js code here corresponding to favourites.html

var favouriteArr=JSON.parse(localStorage.getItem("favourites"));
displayData(favouriteArr);
function displayData(data){
    document.querySelector("tbody").innerHTML="";

    data.forEach(function(elem,index) {
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.matchNum;
        var td2=document.createElement("td");
        td2.innerText=elem.teamA;
        var td3=document.createElement("td");
        td3.innerText=elem.teamB;

        var td4=document.createElement("td");
        td4.innerText=elem.date;

        var td6=document.createElement("td");
        td6.innerText=elem.venue;

        var td5=document.createElement("td");
        td5.innerText="delete";
        td5.style.color="red";
        td5.style.cursor ="pointer";
        td5.setAttribute("click","deleteText")
        td5.addEventListener("click",function(){
           deletematch(elem,index)
        });
        tr.append(td1,td2,td3,td4,td6,td5)
        document.querySelector("tbody").append(tr)
    });
}
function deletematch(elem,index){
    favouriteArr.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(favouriteArr))
    window.location.reload();
}