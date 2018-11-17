

$(document).ready(function() {
var socket = io();
var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("text"), {
	value: "def foo():\n\tprint Hello World",
	mode:  "python",
	theme: "monokai"
});

	socket.on('textEdit', function(data){
		setTitle(data);
		setLineNumber(data);
		setContent(data, false);
	});
	
	$('#text').bind('keyup', function() {
		var content = $(this).val();
		setTitle(content);
		setLineNumber(content);
		setContent(content, true);
	});
	
//	$('#text').bind('focus click', function() {
//		var content = $(this).val();
//		setLineNumber(content);
//	});
//	
	function setTitle(content) {

		
		var lines = content.split('\n');
		for (i = 0; i < lines.length; i++) {
			if (lines[i].trim().length > 0) {
				document.title = lines[i];
				return 0;
			}
		}
		document.title = "Notepad";
	}
	function setLineNumber(content) {
		var lineNumber = content.substr(0, $('#text').prop('selectionStart')).split("\n").length;
		$('#lineNumber').html(lineNumber);
	}
	
	function setContent(content, emit) {
		document.getElementById("text").value = content
		if (emit) {
			socket.emit('textEdit', content);	
		}
		//$('textarea').value = "HERTYUI";
	}
});

//'use strict';
//
//(function() {
//
//
//
//
//
//
//
//})();
