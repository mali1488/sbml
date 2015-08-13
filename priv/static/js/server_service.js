$(document).ready(function(e){

	$.getJSON("http://localhost:8001/index/get_subjects", function( data ) {
        //console.log(data);
        var subjects = data.music;
        console.log(subjects);
        for(var i = 0; i < subjects.length; i++) {
            $( "#musicSubjects" ).append("<li><a>" + subjects[i] + "</a></li>");
        }
        subjects = data.programming;
        console.log(subjects);
        for(var i = 0; i < subjects.length; i++) {
            $( "#programmingSubjects" ).append("<li><a>" + subjects[i] + "</a></li>");
        }
        
        subjects = data.lifestyle;
        console.log(subjects);
        for(var i = 0; i < subjects.length; i++) {
            $( "#lifestyleSubject" ).append("<li><a>" + subjects[i] + "</a></li>");
        }
    });

    $.getJSON("http://localhost:8001/index/get_latest", function( data ) {
        console.log(data.music);

        $( "#latestSubject" ).append( "<b>" + data.music[0] + "</b> by <i>" + data.music[2] + "</i>");
        $( "#latestReply" ).append( data.music[1] );
    })

	$( "#submitButton" ).click(function(){
		$.post("http://localhost:8001", function( data ) {
    		  $( "#id1" ).replaceWith( data );
    		});
	});

	$.getJSON("http://localhost:8001/index/get_data_test", function( data ) {
		console.log(data);
		var beers = data.beer;
		var items = [];
		$.each(data.beer, function(index, b) {
			items.push( "<li>" + b + "</li>" );
		});
		
		for(var i = 0; i < items.length; i++) {
			$("#beerList").append(items[i]);
		}
	});
});