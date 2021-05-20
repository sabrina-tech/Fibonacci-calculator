
function main()
{
 var num = parseInt(document.getElementById("num").value);
serverFibonacci(num);
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
  .then(data =>result.innerHTML= data.result? data.result:data)


}
