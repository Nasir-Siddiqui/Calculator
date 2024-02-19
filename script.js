let string = ""
        let buttons = document.querySelectorAll(".key");
        Array.from(buttons).forEach((key) => {
            key.addEventListener('click', (inp) => {
                
                if (inp.target.innerHTML == '=') {
                    string = eval(string);
                    document.querySelector('input').value = string;
                }

                else if (inp.target.innerHTML == 'Del') {
                    string = string.slice(0,-1)
                    document.querySelector('input').value = string;
                }
                else if (inp.target.innerHTML == 'AC' || inp.target.innerHTML == 'C') {
                    string = ""
                    document.querySelector('input').value = string;
                }
                else {
                    console.log(inp.target)
                    string = string + inp.target.innerHTML;
                    document.querySelector('input').value = string;
                }
            })
        })