
/*window.addEventListener('click', function(event)
{
  fetch('http://127.0.0.1:4000/MovieSearch')
    .then(function(response)
    {
      if (response.ok)
      {
        return response.text();
      }
      else
      {
        return "oops"
      }
    })
    .then(body => document.getElementById("MovieValue").innerHTML = body)
      .catch(err => alert(err))
}); */

var $Form = $('form'), $Container = $('#container');
$Container.hide();
$Form.on('submit', function(p_oEvent){
    var sUrl, sMovie, plot, oData;
    p_oEvent.preventDefault();
sMovie = $Form.find('input').val();
    plot = "&plot=" + document.getElementById("pick").value
    sUrl = 'https://www.omdbapi.com/?t=' + sMovie + plot + '&apikey=7326ccc4'
    $.ajax(sUrl, {
        complete: function(p_oXHR, p_sStatus){
            oData = $.parseJSON(p_oXHR.responseText);
            console.log(oData);

			if (oData.Response === "False") {
				$Container.hide();
			} else {
				$Container.find('.title').text(oData.Title);
				$Container.find('.plot').text("Plot: " + oData.Plot);
				document.getElementById("poster").src = oData.Poster;
				$Container.find('.released').text("Released: " + oData.Released);
        $Container.find('.metascore').text("Metascore: " + oData.Metascore);
        $Container.find('.runtime').text("Runtime: " + oData.Runtime);
        $Container.find('.language').text("Language: " + oData.Language);
        $Container.find('.actors').text("Actors: " + oData.Actors);
        $Container.find('.genre').text("Genre: " + oData.Genre);
				$Container.show();
			}
        }
    });
});





/*<script>
$(document).ready(function(){
  $("button").click(function(){
    alert("Value: " + $("#Movievalue").val());
  });
});
</script>*/

/*$("#submitButton").click(function() {
    var start = "http://www.omdbapi.com/?t=";
    var movie = $("#Movievalue").val()
    var api = "&apikey=7326ccc4";
    var url = start.concat(movie,api)
    alert(url)
    $.getJSON(url,
    function (json) {
      var tr;
      tr = $('<tr/>');
      tr.append("<td>" + json.Title + "</td>");
      tr.append("<td>" + json.Year + "</td>");
      tr.append("<td>" + json.Rated + "</td>");
      tr.append("<td>" + json.Runtime + "</td>");
      tr.append("<td>" + json.Genre + "</td>");
      tr.append("<td>" + json.Director + "</td>");
      tr.append("<td>" + json.Actors + "</td>");
      tr.append("<td>" + json.Plot + "</td>");
      $('#imdb').append(tr);
    });
}; */
