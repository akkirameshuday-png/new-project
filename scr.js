function submitform(){
    var name=document.getElementById("name").value;
    var rollno=document.getElementById("rollno").value;
    var dept=document.getElementById("dept").value;
    if(name && rollno && dept){
        document.getElementById("confirmation").innerText="operation success"+name+" "+rollno+" "+dept+" ";
    }
    else{
        alert("anni nimpu ra puka");
    }
}