function ValidateIPaddress(ipaddress)   
02.{  
03. if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(myForm.emailAddr.value))  
04.  {  
05.    return (true)  
06.  }  
07.alert("You have entered an invalid IP address!")  
08.return (false)  
09.}  
