function myFunction() {

    try{
        var name=document.getElementById("myFile").files[0].path
        console.log(name)
        window.location.href = "result.html?file="+name;
    }
    catch(err)
    {
        console.log("HELLO")
        alert("Folder Path not selected.")
    }

    
// Use python shell
    // const {PythonShell} = require("python-shell");

    // var options = {
    //     mode: 'text',
    //     pythonPath: '/usr/bin/python2',
    //     scriptPath : '/home/lancelot/workspace/cenergy-gui/engine/',
    //     args: ['value1', 'value2', 'value3']
    // }

    // var pyshell = new PythonShell('predict.py',options);

    // console.log("HELLO")
    // pyshell.on('message', function (message) {
    //     console.log(message);
        
    // });

    

}