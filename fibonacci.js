
function main()
{
 var num = parseInt(document.getElementById("num").value);
 if (num>50){
   alert("erro")
 }
  else if (document.getElementById("check").checked)
    {serverFibonacci(num);
  
  generateList()
  }
  else { document.getElementById("answer").innerHTML=fibonacci(num);}
}

function fibonacci(x){

    if(x<=2 && x>0){ return 1; }
    else if (x==0){ return 0; }
  return ( fibonacci(x-1) + fibonacci(x-2) );
} 
function serverFibonacci(x){
let result= document.getElementById("answer");
const header = {method:"GET"}
const url="http://localhost:5050/fibonacci/"+x;
fetch (url, header)
  .then((response)=>{
    if (response.ok) return response.json()
    else return response.text()
      })
  .then((data) =>{
    result.innerHTML= data.result? data.result:data
  })


}



function generateList(){
  const header = {method:"GET"}
  const url="http://localhost:5050/getFibonacciResults"
  let list;
  fetch (url, header)
    .then((response)=>{
      if (response.ok) return response.json()
      else return response.text()
        })
    .then((data) =>{
      list=data.results;
      document.getElementById("container").innerHTML="<li>itens da lista</li>"

    for(let i=0;i<list.length;i++){
    let newElement=document.createElement("li")
    newElement.innerHTML=`the fibonacci of ${list[i].number} is ${list[i].result} at ${Date(list[i].createdDate)}`
    document.getElementById("container").appendChild(newElement)
    }
    })
  



} 

generateList();






