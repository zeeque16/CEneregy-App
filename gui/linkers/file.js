function myFunction() {

    // if (document.getElementById("myFile").files[0].path==)
    // {
    //     alert("Select File First")
    // }

    // var swal = require('sweetalert')
    // swal.alert("HELLO")
    
    try{
        console.log(document.getElementById("myFile").files[0].path)
    }
    catch(err)
    {
        console.log("HELLO")
        alert("Folder Path not selected.")
    }

    
// Use python shell
    const {PythonShell} = require("python-shell");

    var options = {
        mode: 'text',
        pythonPath: '/usr/bin/python2',
        scriptPath : '/home/lancelot/workspace/cenergy-gui/engine/',
        args: ['value1', 'value2', 'value3']
    }

    var pyshell = new PythonShell('predict.py',options);

    console.log("HELLO")
    pyshell.on('message', function (message) {
        console.log(message);
    });

}