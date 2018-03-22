$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    // Make Request to Github
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+username,
      data:{
        key:'AIzaSyB6APhpvK4amaMjT8b6VwWkwyqZFBw43js',
      }
    }).done(function(result){
      $('#profile').html(`
        ${result.snippet.title}
        `)
    })
  });
})


//$('#profile').html(`${result.snippet.title}`)
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dogs&key=AIzaSyArp60-L7MqJOzwbh3mlO8_NtL-Fsh6iys
