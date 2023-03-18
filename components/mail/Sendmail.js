
import emailjs from '@emailjs/browser';

export default function Sendmail(user) {
    var templateParams = {
       to_name:user.to_name,
       from_name:'Vrashank',
       message:'Your Verification Code is '+user.code,
       to_email:user.to_email,
    };
    
    emailjs.send(process.env.SERVICE_ID,process.env.TEMPLATE_ID, templateParams,process.env.PUBLIC_ID)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}
