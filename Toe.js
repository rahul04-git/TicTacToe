const cells_select=document.querySelectorAll('.cell')
cell=document.getElementsByClassName('cell')
i=0
var audio2=new Audio("O.wav")
var audio1=new Audio("X.wav")
var audio3=new Audio("end.wav")
var audio4=new Audio("draw.wav")
X='<i class="fas fa-times" id="cross" aria-hidden="true"></i>'
O='<i class="far fa-circle" id="circle" aria-hidden="true"></i>'
for (item of cells_select){
    item.addEventListener('click',(e)=>{
        item=e.target
        if (i%2==0){
            item.innerHTML=X
            audio1.play()
        }
        else{
            item.innerHTML=O            
            audio2.play()
        }
        b1=document.getElementById('box-1').innerHTML
        b2=document.getElementById('box-2').innerHTML
        b3=document.getElementById('box-3').innerHTML
        b4=document.getElementById('box-4').innerHTML
        b5=document.getElementById('box-5').innerHTML
        b6=document.getElementById('box-6').innerHTML
        b7=document.getElementById('box-7').innerHTML
        b8=document.getElementById('box-8').innerHTML
        b9=document.getElementById('box-9').innerHTML
        if(i<8){
            result=document.getElementById('result')
            if ((b1==X && b2==X && b3==X) || (b4==X && b5==X && b6==X) || (b7==X && b8==X && b9==X)){
                xIsWin()
                audio3.play()
            }
            else if((b1==X && b4==X && b7==X) || (b2==X && b5==X && b8==X) || (b3==X && b6==X && b9==X)){
                xIsWin()
                audio3.play()
            }
            else if((b1==X && b5==X && b9==X) || (b3==X && b5==X && b7==X)){
                xIsWin()
                audio3.play()
            }
            else if ((b1==O && b2==O && b3==O) || (b4==O && b5==O && b6==O) || (b7==O && b8==O && b9==O)){
                oIsWin()
                audio3.play()
            }
            else if((b1==O && b4==O && b7==O) || (b2==O && b5==O && b8==O) || (b3==O && b6==O && b9==O)){
                oIsWin()
                audio3.play()
            }
            else if((b1==O && b5==O && b9==O) || (b3==O && b5==O && b7==O)){
                oIsWin()
                audio3.play()
            }
        }
        i++
        if ((b1==X && b2==X && b3==X) || (b4==X && b5==X && b6==X) || (b7==X && b8==X && b9==X)){
            xIsWin()
            audio3.play()
        }
        else if((b1==X && b4==X && b7==X) || (b2==X && b5==X && b8==X) || (b3==X && b6==X && b9==X)){
            xIsWin()
            audio3.play()
        }
        else if((b1==X && b5==X && b9==X) || (b3==X && b5==X && b7==X)){
            xIsWin()
            audio3.play()
        }
        else if ((b1==O && b2==O && b3==O) || (b4==O && b5==O && b6==O) || (b7==O && b8==O && b9==O)){
            oIsWin()
            audio3.play()
        }
        else if((b1==O && b4==O && b7==O) || (b2==O && b5==O && b8==O) || (b3==O && b6==O && b9==O)){
            oIsWin()
            audio3.play()
        }
        else if((b1==O && b5==O && b9==O) || (b3==O && b5==O && b7==O)){
            oIsWin()
            audio3.play()
        }
        else if(i==9){
            dRAW()
            audio4.play()
        }
    },{once : true})
}
function xIsWin(){
    newDiv=document.createElement("div")
    content=document.createTextNode("Player X Win")
    newDiv.appendChild(content)
    newDiv.setAttribute('id','resultX')
    newDivId=document.getElementById("board")
    document.body.insertBefore(newDiv,newDivId)
}
function oIsWin(){
    newDiv=document.createElement("div")
    content=document.createTextNode("Player O Win")
    newDiv.appendChild(content)
    newDiv.setAttribute('id','resultO')
    newDivId=document.getElementById("board")
    document.body.insertBefore(newDiv,newDivId)
}
function dRAW(){
    newDiv=document.createElement("div")
    content=document.createTextNode("Your Match is DRAW")
    newDiv.appendChild(content)
    newDiv.setAttribute('id','resultD')
    newDivId=document.getElementById("board")
    document.body.insertBefore(newDiv,newDivId)
}