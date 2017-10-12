<head>
    <script type="text/javascript">
        function OnSearch (input) {
            alert ("The current value of the search field is\n" + input.value);
        }
    </script>
</head>
<body>
    Please specify the text you want to find and press ENTER!
    <input type="search" name="search" autosave="www.elitemchosting.tk" results="10" onsearch="OnSearch (this)"/>
</body>
