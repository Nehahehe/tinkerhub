let count = 0;
            let count2 = 2;
             count+=count2
            function myFun(param1){
                count+=count2;
                console.log('count is: ${param1}. you are welcome')
            }
            
                function changeButton(){
                    if(document.getElementById('subBut').innerText ==="subscribe"){
                        document.getElementById('subBut').innerText ="subscribed";
                        document.querySelector('.subBut').classList.remove('subBut');
                        document.querySelector('.subBut').classList.add('subButJS');
                    }
                    else{
                        document.getElementById('subBut').innerText = 'subscribe';
                        document.querySelector('.subButJS').classList.add('subBut');
                    
                    }
                
            }
            }
            // myFunc()