        const rangeValue = document.getElementById('rangeValue');
        const value = document.getElementById('value');

        lengthValue = rangeValue.value;
        value.innerText = 'Length: ' + rangeValue.value;

        rangeValue.addEventListener('input', function(){
            lengthValue = rangeValue.value;
            value.innerText = 'Length: ' + rangeValue.value;
        });

        const RanmodText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonopqrstuvwxyz';
        const symbol = "`!@#$%^&*_|-+=?</>'~";
        const number = '0123456789';
        const all = RanmodText + number + symbol;

        const PassGenBtn = document.getElementById('PassGenBtn');
        PassGenBtn.addEventListener('click', function(){

            function genPass(){
                let passwordValue = '';
                for(let i = 0; i <= lengthValue; i++){
                    let random = Math.floor(Math.random() * all.length);
                    passwordValue += all.substring(random, random + 1);
                };
                const password = document.getElementById('password');
                const copy = document.getElementById('copy');

                password.value = passwordValue;
                copy.addEventListener('click', function(){
                    password.select();
                    document.execCommand('copy');
                });
                password.addEventListener('click', function(){
                    password.select();
                    document.execCommand('copy');
                });
            };
            genPass();
        });