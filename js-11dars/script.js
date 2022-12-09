
function UUID(lenght) {
    let pasword = ``
    let chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjkfwmrniwefr0123456789"
    let splited =chars.split('')
    console.log(splited);

    function genAgain(){
        for (let i = 0; i <= lenght; i++){
            let rnd =Math.floor(Math.random()* splited.length)
            console.log(rnd);
            pasword += splited[rnd]
        }
    }

    pasword += "--"
    genAgain()
    pasword += "--"
    genAgain()
    pasword += "--"
    pasword += "--"
    genAgain()
    pasword += "--"
    genAgain()
    pasword += "--"
    return console.log(pasword);

}

UUID(5)
