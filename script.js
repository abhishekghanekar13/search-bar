let  peopleArray = [
    {
        name: "Anil",
        degree: "B-Tech",
        profession: "SDE"
    },
    {
        name: "John",
        degree: "MBA",
        profession: "Marketing Manager"
    },
    {
        name: "Lisa",
        degree: "B.Sc",
        profession: "Data Scientist"
    },
    {
        name: "Emily",
        degree: "Ph.D",
        profession: "Research Scientist"
    },
    {
        name: "Michael",
        degree: "B.A",
        profession: "Teacher"
    },
    {
        name: "Sara",
        degree: "M.Sc",
        profession: "Biologist"
    },
    {
        name: "David",
        degree: "B.E",
        profession: "Software Engineer"
    },
    {
        name: "Jessica",
        degree: "M.A",
        profession: "Writer"
    },
    {
        name: "Brian",
        degree: "B.Com",
        profession: "Accountant"
    },
    {
        name: "Sophie",
        degree: "Pharmacy",
        profession: "Pharmacist"
    },
    {
        name: "Alex",
        degree: "B.Sc",
        profession: "Chemist"
    },
    {
        name: "Chris",
        degree: "B.A",
        profession: "Graphic Designer"
    },
    {
        name: "Eva",
        degree: "B-Tech",
        profession: "Web Developer"
    },
    {
        name: "Daniel",
        degree: "M.Sc",
        profession: "Environmental Scientist"
    },
    {
        name: "Olivia",
        degree: "MBA",
        profession: "Financial Analyst"
    },
    {
        name: "Jason",
        degree: "B.E",
        profession: "Electrical Engineer"
    },
    {
        name: "Mia",
        degree: "Ph.D",
        profession: "Physicist"
    },
    {
        name: "Andrew",
        degree: "B.A",
        profession: "Journalist"
    },
    {
        name: "Hannah",
        degree: "B.Com",
        profession: "HR Manager"
    },
    {
        name: "Ryan",
        degree: "B.Sc",
        profession: "Software Tester"
    }
];


searchData()
function searchData()
{
     debugger
    let tempArray = [];
console.log(peopleArray);
let tabref = document.getElementById("persontable")
    let searchval = document.getElementById("box").value.toLowerCase();
    tempArray = peopleArray;// sabse  pehle aapn original array ko temarry me dal diya.jab koi search value /ya box me nhi likha 

if(searchval!='')// jab search value me value rhe tab uske andar jake data filter hoga jo data mach hoga
{// jo data match ho gaya he vo data temp array me stor ho jaye ga.
tempArray = peopleArray.filter(data=>{

    return (searchval==data.name.toLowerCase()||searchval==data.degree.toLowerCase()||searchval==data.profession.toLowerCase())
})
}
  
console.log("result data ",tempArray)
let str = ''
for(let person of tempArray)
{
 console.log(person)
str = str +`<tr>
<td>${person.name}</td>
<td>${person.degree}</td>
<td>${person.profession}</td>
</tr>`
}
// console.log(str)
tabref.innerHTML=str;
}

