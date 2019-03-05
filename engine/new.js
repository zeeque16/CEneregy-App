
 

// Use python shell
const {PythonShell} = require("python-shell");

var options = {
    mode: 'text',
    pythonPath: '/usr/bin/python2',
    scriptPath : '/home/lancelot/workspace/cenergy-gui/engine/'
}

var pyshell = new PythonShell('predict.py',options);


console.log("HELLO")
    pyshell.on('message', function (message) {
        // swal("Hello world!");
        console.log(message)
    });

    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )