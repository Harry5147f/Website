function validate(){
    if(document.myForm.name.value==""){
        alert("Please provide your name! ");
        document.myForm.name.focus();
        return false;
    }
    if(document.myForm.email.value==""){
        alert("Please provide your email!");
        document.myForm.email.focus();
        return false;
    }
    if((document.myForm.zip.value=="")||(document.myForm.zip.value==Nan)||(!(document.myForm.zip.value.length==5))){
        alert("Enter zip in the format #####");
        document.myForm.zip.focus();
        return false;
    }
    if(document.myForm.continent.value=="-1"){
        alert("Please provide your continent! ");
        document.myForm.continent.focus();
        return false;
    }
    alert("successful");
    return true;
}
