// fill in javascript code here

document.querySelector("form").addEventListener("submit",myFunction);
   function myFunction(event){
    event.preventDefault();


   

   

    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=document.querySelector("#name").value;

    var td2=document.createElement("td")
    td2.innerText=document.querySelector("#employeeID").value;

    var td3=document.createElement("td")
    td3.innerText=document.querySelector("#department").value;

    var td4=document.createElement("td")
    td4.innerText=document.querySelector("#exp").value;

    var td5=document.createElement("td")
    td5.innerText=document.querySelector("#email").value;

    var td6=document.createElement("td")
    td6.innerText=document.querySelector("#mbl").value;

     var td7=document.createElement("td");
     var role;
       if (Number(td4.innerText)>5){
         role="Seniour"

        }else if(Number(td4.innerText)>=2 && Number(td4.innerText)<=5){
         role="Junior"
        }else if(Number(td4.innerText)<=1){
         role="Fresher"
        }

     var td8 =document.createElement("td");
     td8.innerText="Delete"
     td8.addEventListener("click",deleatRow);




    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(tr);

    }


    function deleatRow(event){
        event.target.parentNode.remove();
    }




   

