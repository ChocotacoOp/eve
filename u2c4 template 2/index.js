// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",member);
  
function member(){
  event.preventDefault();

var memberArr=JSON.parse(localStorage.getItem("schedule"))||[];

var memberObj={
  matchNum: masaiForm.matchNum.value,
  teamA:masaiForm.teamA.value,
  teamB:masaiForm.teamB.value,
  date:masaiForm.date.value,
  venue:masaiForm.venue.value,
};
memberArr.push(memberObj);
localStorage.setItem("schedule",JSON.stringify(memberArr));


}
