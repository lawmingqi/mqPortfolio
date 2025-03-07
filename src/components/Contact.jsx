import { useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../style'
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn} from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name:"Ming Qi",
        from_email: form.email,
        to_email: "lawmingqi1818@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you for your message. I'll get back to you soon!");
        setForm({
          name:'',
          email:'',
          message:'',
        });
      },
      (error) => {
        setLoading(false);
        alert("Oh no, something went wrong. Please try again.");
        console.error(error);
      }
    )
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
        className="flex-[0.75] bg-[#eee1ca] p-8 rounded-2xl w-full max-w-[600px] mx-auto"
        variants={slideIn('left', "tween", 0.2, 1)}
      >
      <p className={`${styles.sectionSubText} sm:text-[22px] text-[18px] md:text-[25px] lg:text-[28px]`}>
        Get in touch
      </p>
      <h2 className={`text-[#7A2A3D] font-black md:text-[60px] sm:text-[50px] xs:text-[45px] text-[35px] lg:text-[70px]`}>
        Contact.
      </h2>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-[#945353] font-medium mb-4">Your Name</span>
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              placeholder="What's your name?"
              className="bg-[#F7F2E7] py-4 px-6 
              placeholder:text-[#C2B280]
              text-[#7A2A3D] rounded-lg outline-none border-none font-medium w-full"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#945353] font-medium mb-4">Your email</span>
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="What's your email?"
              className="bg-[#F7F2E7] py-4 px-6 
              placeholder:text-[#C2B280]
              text-[#7A2A3D] rounded-lg outline-none border-none font-medium w-full"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#945353] font-medium mb-4">Your Message</span>
            <textarea 
              rows="7" 
              name="message"
              value={form.message}
              onChange={handleChange} 
              placeholder="What do you want to tell me?"
              className="bg-[#F7F2E7] py-4 px-6 
              placeholder:text-[#C2B280]
              text-[#7A2A3D] rounded-lg outline-none border-none font-medium w-full"
            />
          </label>

          <button 
            type="submit"
            className="bg-[#7A2A3D] py-3 px-8 text-white outline-none w-fit font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div 
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
