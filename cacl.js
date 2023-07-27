function C(){
  document.getElementById("input").value="";
}

function dele() {
  document.getElementById('input').value = document.getElementById('input').value.slice(0, -1)
}
function display(num){
  document.getElementById("input").value+=num;
}
function sqrt(){
  document.getElementById('input').value = Math.sqrt(parseFloat(document.getElementById('input').value));
}
function square(){
  document.getElementById('input').value = Math.pow(document.getElementById('input').value , 2);
}
function arthimatic(){
 var output = eval(document.getElementById("input").value);
 document.getElementById("input").value=output;
}