var dt = new Date();
        var options = { weekday: 'long'};
        var options2 = {  month: 'long', day: 'numeric'};
        var formattedDate = dt.toLocaleDateString('en-US', options);
        var formattedDate2 = dt.toLocaleDateString('en-US', options2);

        document.getElementById("datetime").innerHTML = formattedDate+ ', '+formattedDate2;
       