import React, {useState} from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 
import CountUp from 'react-countup';
import {useInView} from  "react-intersection-observer";

const About = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, // Count up only once
    threshold: 0.5,   // Start counting when 50% of the element is in view
  });


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
      };
    


  return (
    <div className="mt-10 md:pt-20">
      <div className="flex flex-col">
        
        {/* Left Section - Introduction */}
        <div>
  <h1 className="text-3xl capitalize font-bold text-gray-600 mb-4 mx-auto w-3/4 mt-5">
  Helping you own property-<br/><br/>anywhere!
  </h1>
  <p className="text-gray-600 leading-relaxed mx-auto w-3/4 mb-6">
  At Amini, we believe in making property ownership and development in 
  Kenya accessible to everyone, especially our Kenyan diaspora community.<br/>
 With years of experience, we've created a reliable and professional 
  platform that offers personalized services to help you buy, build,
  or manage properties in Kenya with ease.<br/><br/>We’ve removed the traditional 
  barriers of relying on friends or family, ensuring a secure and seamless process.
   Whether you’re looking to invest in land, build your dream home, or manage your
    properties, Amini is here to help you every step of the way. Our mission is 
    to bridge the gap and make property ownership a reality for all Kenyans, no matter where you are in the world.
</p>


</div>


        {/* Right Section - Image */}
        <div>
          <img
            className="w-full h-auto md:h-1/3 shadow-lg mt-7"
            src="https://images.unsplash.com/photo-1721149122657-7b5440f39160?w=1200&q=100&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdW50cnklMjBob21lfGVufDB8fDB8fHww"
            alt="Real estate"
          />
        </div>

        {/* Our Agents Section */}
        <div className="w-3/4 mx-auto">
          <h1 className="text-4xl text-green-600 font-bold  mt-7 mb-9">Our agents</h1>
        </div>

        {/* Timothy Section */}
        <div className="md:flex justify-between gap-4 w-3/4 mx-auto">
          <div className="relative group w-64 h-auto mx-auto mb-6">
            <img src="owner timothy.jpeg" className="w-full h-auto rounded-lg shadow-lg" alt="Owner Timothy" />
            <div className="absolute inset-0 bg-green-500 rounded-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-bold text-lg mb-4">Email: timuts30@gmail.com</p>
              <p className="text-black font-bold text-lg">Phone: 0725422850</p>
            </div>
          </div>
          <p className="md:w-1/2 leading-relaxed text-gray-600">
            Meet <span className ="text-green-500 font-bold">Timothy,</span> the visionary behind Amini Realtors.  
            With a passion for connecting people to their dream homes, he founded the company to help Kenyans  
            in the diaspora navigate the complexities of purchasing property back home.
            <br />
            <br />
            Driven by integrity, professionalism, and a commitment to personalized service, Timothy leads a team  
            dedicated to making every real estate transaction seamless and trustworthy. His mission is to build lasting  
            relationships and create opportunities for clients to secure their perfect investment with confidence.
          </p>
        </div>

        
        <div className=" md:flex justify-between gap-4 w-3/4 mx-auto ">

        <div className="  md:hidden relative group w-64 h-auto mx-auto mb-6">
            <img src="owner moracha (1).jpeg" className=" mt-10 w-full h-auto rounded-lg shadow-lg" alt="Owner Joshua" />
            <div className="absolute inset-0 bg-green-500 rounded-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-bold text-lg mb-4">Email: timuts30@.com</p>
              <p className="text-black font-bold text-lg">Phone: 0728875071</p>
            </div>
          </div>

          <p className="md:w-1/2 leading-relaxed text-gray-600 mt-10">
            <span  className ="text-green-500 font-bold">Joshua Moracha</span> serves as the co-director of Amini Realtors, bringing his expertise in strategic planning and property management to the leadership team.  
            With a keen understanding of real estate market dynamics and a passion for delivering exceptional 
            client experiences, he plays a pivotal role in ensuring smooth  
            operations and fostering trusted relationships with clients and partners.<br/> <br/> 
            Joshua’s commitment to excellence and innovation aligns with Amini’s mission to make 
            property ownership a seamless and fulfilling journey.
          </p>
          <div className=" hidden md:block relative group w-64 h-auto mx-auto mb-6">
            <img src="owner moracha (1).jpeg" className=" mt-8 w-full h-auto rounded-lg shadow-lg" alt="Owner Joshua" />
            <div className="absolute inset-0 bg-green-500 rounded-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-bold text-lg mb-4">Email: timuts30@.com</p>
              <p className="text-black font-bold text-lg">Phone: 0728875071</p>
            </div>
          </div>
        </div>

      </div>
      <div className="w-3/4 mx-auto my-10">
  <h1 className="text-3xl text-green-600 font-bold font-roboto mb-6">Our Partners</h1>
  <p className="text-gray-600 mb-4">We collaborate with trusted organizations to provide exceptional service. Here's one of our valued partners:</p>
  <div className="flex justify-center items-center">
    <div className="relative group w-48 h-auto mx-4 mb-6">
      <img
        src="ansa_land-removebg-preview.png" 
        className="w-full bg-gray-500 h-auto rounded-lg shadow-lg transition-transform 
        duration-300 transform hover:scale-105"
        alt="Partner Logo"
      />
      <p className="text-center mt-2 text-gray-500 text-sm">Ansa Land</p>
    </div>
  </div>
</div>
    

<div className="container mx-auto p-12 mt-10 mb-12">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="bg-white p-9 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-4 ">
          <label htmlFor="name" className="block  text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Message"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Send Message
        </button>
      </form>
      
    </div>

    <div className='md:flex justify-center gap-5 mx-auto w-3/4'>
    <p className="text-gray-600 font-bold text-md md:text-lg mb-4">
  <a href="mailto:timuts30@.com" className="flex items-center">
    <FaEnvelope className="mr-2 text-red-300 text-3xl hover:text-red-400" /> Email
  </a>
</p>
<p className="text-gray-600 font-bold text-lg">
  <a href="tel:+254728875071" className="flex items-center">
    <FaPhoneAlt className="mr-2 text-green-300 text-3xl hover:text-green-600" /> Phone
  </a>
</p>
</div>


<div ref={ref} className="stats-section md:flex justify-center gap-7 mx-auto w-3/4 mt-20 mb-20">
  <div className="stat-item text-center">
    <h3 className="text-6xl md:text-8xl text-green-500 font-bold">
      
    {inView && <CountUp start={0} end={150} duration={3} />}

    </h3>
    <p className="text-lg  font-bold mt-2">Happy Clients</p>
  </div>
  <div className="stat-item text-center">
    <h3 className="text-6xl md:text-8xl text-green-500 font-bold">

      
      {inView && <CountUp start={0} end={300} duration={3} />}

    </h3>
    <p className="text-lg font-bold mt-2">Projects Completed</p>
  </div>
  <div className="stat-item text-center">
    <h3 className=" text-6xl md:text-8xl text-green-500 font-bold">

    {inView && <CountUp start={0} end={25} duration={3} />}
      
    </h3>
    <p className="text-lg font-bold mt-2">Years of Experience</p>
  </div>
</div>



    </div>
  )
}

export default About
