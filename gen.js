var a = document.createElement('a');
a.setAttribute('href',desiredLink);
a.innerHTML = desiredText;
// apend the anchor to the body
// of course you can append it almost to any other dom element
document.getElementsByTagName('body')[0].appendChild(a);
document.getElementsByTagName('body')[0].innerHTML += '<a href="'+desiredLink+'">'+desiredText+'</a>';
<script type="text/javascript">
//note that this case can be used only inside the "body" element
document.write('<a href="'+desiredLink+'">'+desiredText+'</a>');
</script>
$('body').append($('<a href="'+desiredLink+'">'+desiredText+'</a>'));
var a = $('<a />');
a.attr('href',desiredLink);
a.text(desiredText);
$('body').append(a);
