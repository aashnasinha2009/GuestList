var name_of_the_guest_array=[];

function submit(){

  var display_guest_array=[];
  for(var j=1;j<=2;j++){

  var name_of_the_student=document.getElementById("name_of_the_guest_"+j).value;
  console.log(name_of_the_guest);
  name_of_the_guest_array.push(name_of_the_guest);

  }
  console.log(name_of_the_guest_array);
  var length_of_name_of_the_guest_array=name_of_the_guest_array.length;
  console.log(name_of_the_guest_array);

  for(var k=0;k<length_of_name_of_the_guest_array;k++){

    display_guest_array.push("<h4>NAME - "+name_of_the_guest_array[k]+"</h4>");
    console.log(display_guest_array);

  }

  
  var remove_commas=display_guest_array.join(" ");
  comsole.log(remove_commas);
  document.getElementById("display_names_without_commas").innerHTML=remove_commas;

  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button").style.display="inline-block";
}

