function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email :document.getElementById('contactEmail').value,
        phone : document.getElementById('phone').value

    }

    emailjs.send('service_ch3kwpd',"template_8m6tjcv",parms).then(alert("Email sent!!!"))
}

