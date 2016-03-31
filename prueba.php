<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Color Datalist</title>
    <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" type="text/css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
</head>
<body>
    <input type="text" name="color" id="color" value="" list="colorlist" />
    <datalist id="colorlist">
        <select style="display: none;">
            <option value="Black" />
            <option value="Blue" />
            <option value="Dark Green" />
            <option value="Grey" />
            <option value="Green" />
            <option value="Red" />
            <option value="White" />
            <option value="Yellow" />
        </select>
    </datalist>
    <script>
    $(document).ready(function () {
        var availableTags = $('#colorlist').find('option').map(function () {
            return this.value;
        }).get();
        $('#color').autocomplete({ source: availableTags });
    });
    </script>
</body>
</html>