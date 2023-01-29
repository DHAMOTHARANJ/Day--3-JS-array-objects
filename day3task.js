// Own Resume in JSON format and the same JSON iterated in all for loops(for, for in, for of, forEach)
const studentResume = 
{
    "firstName" : "Dhamotharan",
    "lastName" : "Jganathan",
    "summary" : "Mechanical Engineer with more then two years of experience in the field of Automobile Benchmarking, also have experience in handling the team towards the target. I have some knowledge in HTML CSS and also I have good knowledge in CATIA V5 Solid Modelling, Assembly and Surface Modeling. Currently pursuing Full stack Developer course in Guvi",
    "employmentHistory" : ["Caresoft global - June 2021 to present","Cri pumps pvt ltd - April 2019 to June 2020"],
    "role" : "Engineer",
    "skills" : ["HTML CSS", "Javascript", "Creo", "Photoshop"],
    "education" : "B.E",
    "achievements" : ["Special Award for Exceptional team player in the Migration Activity in Q2 2022", "Rising Star of 1st Quarter 2022: Awarded from Caresoft Global for delivering quality output of Exploded on time", "Pat on back award 3rd and 4th Quarter 2021: Awarded from Caresoft Global for delivering quality output of Exploded on time"],
    "language" : ["English", "Tamil"],
    "dateOfBirth" : "04.01.19xx",
    "place" : "Udumalpet",
    "phone" : "8012xxxx20",
    "address" : ["2-54A","AnnaNagar","Elayamuthur"]
}
let studentKeys = Object.keys(studentResume)
// for loop
console.log(".................. for ..................")
for (let i=0; i<studentResume.employmentHistory.length; i++){
  console.log("-",studentResume.employmentHistory[i])
}
// for in loop
console.log("................. for in ................")
for (s in studentResume){
    console.log(s);
  }
// for of loop
console.log("................. for of ................")
for (str of studentResume.skills){
    console.log(str)
  }
// for each loop
console.log("................. for each ................")
  studentKeys.forEach(
    (val, idx)=>{
      console.log(studentResume[val])
    }
  )
  
