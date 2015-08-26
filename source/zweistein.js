if(document.location.hostname=="futurezone.at" && document.location.pathname!="/") {
	$(document).ready(function() {
		waitForComments(10); // wait 10 x 500msec for comments to load..
	});
};

function waitForComments(n)
{
//	console.log("waiting for comments on " + document.location + "... n="+n);
	window.setTimeout(function() {
		if($(".comments-list").text()!="") {
//			console.log("found comments");
			zweisteinKiller();
		}
		else if(n>0) {
			waitForComments(n-1);
		}
	}, 500);
}

function zweisteinKiller()
{
	var comments=$(".comment-username:contains('Zweistein')").parents(".comment").children(".comment-text");
	comments.each(function(index) {
		var container=$(this);
		var comment=$("<div>"+container.html()+"</div>");
		var note=$("<div>Da ich nur blödsinn schreibe wird es automatisch gefiltert.</div>");
		var button=$('<input type="button" value="Zeig es mir..."/>');
		container.html("");
		container.append(note);
		container.append(comment);
		container.append(button);
		comment.hide();
        button.on('click',function(){
           	comment.toggle();
           	note.toggle();
           	button.val(comment.is(":visible")?"Bitte weg damit!":"Zeig es mir...");
        });
	});
}
