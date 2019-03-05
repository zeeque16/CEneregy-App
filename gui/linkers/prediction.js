function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}





function shell(){

    var tdp=document.getElementById('tdp').value
    var size=document.getElementById('size').value
    var folder = findGetParameter('file');
    
    console.log(folder)
    console.log(tdp)
    console.log(size)
    // console.log(document.getElementById("proceed").value)


    document.getElementById("proceed").textContent = "Predicting...";
    const {PythonShell} = require("python-shell");
    var path = require("path")

    var options = {
        mode: 'text',
        pythonPath: '/usr/bin/python2',
        scriptPath : path.join(__dirname, '/../engine/'),
        // scriptPath : '/home/lancelot/workspace/cenergy-gui/engine/',
        args: [tdp, size, folder]
    }

    var pyshell = new PythonShell('predict.py',options);
    // var msg=null

    pyshell.on('message', function (message) {
        // msg=message
        var split=message.split(" ")
        console.log(message)
        document.getElementById("proceed").textContent = "Predict";
        
        // console.log(split[1]);        
        document.getElementById('energy').style.display = "block";
        document.getElementById('energy').innerHTML = "The predicted Energy is: "+split[1]+" Joules";
        // document.getElementById('energy').textContent = split[1];
        // 
    });

}





// <script type="text/javascript">
//   function findGetParameter(parameterName) {
//     var result = null,
//         tmp = [];
//     location.search
//         .substr(1)
//         .split("&")
//         .forEach(function (item) {
//           tmp = item.split("=");
//           if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
//         });
//     return result;
// }
  
//   var file = findGetParameter('file');
//   console.log(file)

// </script>