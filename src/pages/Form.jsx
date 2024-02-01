import React from 'react'
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import {
  
    Button,
   
    Input,
    Textarea,

  } from "@material-tailwind/react";
import { PageTitle } from '@/widgets/layout';

const Form = () => {

    const {pathname} = useLocation()
function sendEmail(e){
    e.preventDefault();
   

    emailjs.sendForm('service_gk5tdtt', 'template_38th2lq', e.target, '2u8QrsH1-kiFBnMs2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

}

  return (


    <>
    <div className={`${pathname =='/Contact'?"mt-24":""}`}>
    <PageTitle section="Contact Us" heading="feel free to let me know! " >
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
    <form className="mx-auto w-full mt-12 lg:w-5/12" onSubmit={sendEmail}>
            <div className="mb-8 flex flex-col md:flex-row  gap-8">
              <Input variant="outlined" size="lg" label="Full Name" name='name'/>
              <Input variant="outlined" size="lg" label="Email Address" name='email' />
              
            </div>
            <div className="mb-8 flex flex-col md:flex-row  gap-8">
            <Input variant="outlined" size="lg" label="Mobile" name='contact' />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} name='message'/>
            {/* <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            /> */}
            <Button variant="gradient" size="lg" className="mt-8" fullWidth type='submit value="Send" '>
              Send Message
            </Button>
          </form>
          </div>
          </>
  )
}

export default Form