$(document).ready(function(){
   //when search  is clicked run the code 
  $('#search').click(function(){
    //Gets seacj input
    var searchTerm=$('#searchTerm').val();
    //API url with searchTerm
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success:function(data){
        $('#output').html('');
       for(var i=0; i<data[1].length;i++)
        $('#output').prepend("<li><a href="+data[3][0]+">"+data[1][0]+"</a><p>"+data[2][0]+"</p></li?>");
      },
      error:function(errorMessage){
        alert("Error");
      }
    });
  });
     });
