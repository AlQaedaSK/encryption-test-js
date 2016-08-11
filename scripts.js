$(document).ready(function(){
    
    $('#code-send').click(function(){
        var dados = $('#form1').serialize();
        console.log(dados);
        $('#form1').submit();
    })
    
    function storage(){
        var dados = JSON.stringify({
            info1   : $("#info1").val(),
            info2     : $("#info2").val()
        });
        localStorage.setItem(info1+info2, JSON.stringify(dados));
        alert("Registro adicionado.");
        return true;
    }
    
    $("#form1").on("submit",function(){
	   return storage();		
    });
    
    
    $('#code-send').click(function(){
        var code1 = code($("#info1").val());
        var code2 = code($("#info2").val());
        
         document.getElementById("ans").innerHTML = 
             "<label>Info 1 codificada: "+code1+"</label> "+
             "<label>Info 2 codificada: "+code2+"</label> ";
    })
    
    $('#decode').click(function(){
        var decode1 = decode($("#info1").val());
        var decode2 = decode($("#info2").val());
        
         document.getElementById("ans").innerHTML = 
             "<label>Info 1 codificada: "+decode1+"</label> "+
             "<label>Info 2 codificada: "+decode2+"</label> ";
    })
    
    function code(info){
        var mensx="", l, i, j=0, ch;
        ch = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";	
        for (i=0;i<info.length; i++){
            j++;
            l=(Asc(info.substr(i,1))+(Asc(ch.substr(j,1))));
            if (j==50){
                j=1;
            }
            if (l>255){
                l-=256;
            }
            mensx+=(Chr(l));
        }
        return mensx;
    }
    function decode(info){
        var mensx="", l, i, j=0, ch;
        ch = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";	
        for (i=0; i<info.length;i++){
            j++;
            l=(Asc(info.substr(i,1))-(Asc(ch.substr(j,1))));
            if (j==50){
                j=1;
            }
            if (l<0){
                l+=256;
            }
            mensx+=(Chr(l));
        }
        return mensx;
    }
    function Asc(String){
        return String.charCodeAt(0);
    }

    function Chr(AsciiNum){
        return String.fromCharCode(AsciiNum)
    }

       
})