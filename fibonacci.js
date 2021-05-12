
function main()
{
 var num = parseInt(document.getElementById("num").value);
 document.getElementById("answer").innerHTML = fibonacci(num);
}

function fibonacci(x){

    if(x<=2 && x>0){ return 1; }
    else if (x==0){ return 0; }
  return ( fibonacci(x-1) + fibonacci(x-2) );
}