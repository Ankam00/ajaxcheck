window.onload=function(){
	var btn=document.getElementById('btn');
	btn.onclick=function(){
		var xhr=null;
		var username=document.getElementById('userName').value;
		var pass=document.getElementById('password').value;
		
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			xhr=new ActiveXObject('Microsoft.XMLHTTP')
		}
		
		xhr.open('get','./check.php?userName='+userName+"&password="+pass,true);
		xhr.onreadystatechange=function(){
			
			if(xhr.readyState==4){
				if(xhr.status==200){
					var data=xhr.responseText;
				    if(data==1){
					    document.getElementById('showInfo').innerHTML='用户名或密码不正确';
				    }else if(data==2){
					    document.getElementById('showInfo').innerHTML='登陆成功';
				    }
				}
			};
		}
		xhr.send(null);
	}
}
