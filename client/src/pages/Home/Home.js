import React from 'react';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import TimeSection from '../../components/TimeSection/TimeSection';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import Button from '../../components/Buttons/Button';
const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <SocialIcons />
      <TimeSection />

      <div className="flex flex-col md:flex-row items-center md:items-start section-1">
        <div className="w-1/2 p-4">
          <h1 className="title text-3xl font-bold mb-20">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          </p>
        </div>
        <div className="w-1/2 p-4 img-container">
          <img src="/img/section1.png" alt="A drink with orange slices and a bottle in the background" className="img rounded-lg shadow-lg"></img>
        </div>
      </div>

      <div className="bg-gray-100 p-8 section-2">
        <div className="text-center mb-8 title">
          <h1 className="text-4xl font-bold mb-4">Lorem ipsum</h1>
          <p className="text-lg text-black">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
        <div className="flex card-content mb-8">
          <div className="relative">
            <img src="/img/1.png" alt="" className="img-card" />
            <div className="absolute bottom-0 left-0 right-0 bg-green-400 text-white text-center py-2">LOREM IPSUM</div>
          </div>
          <div className="relative">
            <img src="/img/2.png" alt="" className="img-card" />
            <div className="absolute bottom-0 left-0 right-0 bg-green-400 text-white text-center py-2">LOREM IPSUM</div>
          </div>
          <div className="relative">
            <img src="/img/3.png" alt="" className="img-card" />
            <div className="absolute bottom-0 left-0 right-0 bg-green-400 text-white text-center py-2">LOREM IPSUM</div>
          </div>
        </div>
        <div className="text-center">
          <Button buttonClass="btn-black bg-gray-200 text-black border border-black py-2 px-4 rounded" text="LEARN MORE" />
        </div>
      </div>

      <div className="bg-green-500 text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16 section-3">
        <div className="md:w-1/3">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text">Lorem ipsum dolor sit amet, consetetur</h1>
          <div className="flex flex-col space-y-4">
            <button className="bg-white text-black font-bold py-3 px-6 rounded-lg">LOREM IPSUM DOLOR SIT</button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg">LOREM IPSUM DOLOR SIT AMET</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 img-container">
          <img src="/img/4.png" alt="" className="img" />
        </div>
      </div>

      <div className="bg-background text-foreground p-8 section-4">
        <h2 className="text-4xl font-bold text-center mb-8">Latest videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src="/img/5.png" alt="" className="img" />
              <img src="/img/play2.webp" alt="" className="absolute play inset-0 m-auto" />
            </div>
            <p className="mt-4 text-center">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src="/img/5.png" alt="Video thumbnail" className="img" />
              <img src="/img/play2.webp" alt="" className="absolute play inset-0 m-auto" />
            </div>
            <p className="mt-4 text-center">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src="/img/5.png" alt="Video thumbnail" className="img" />
              <img src="/img/play2.webp" alt="" className="absolute play inset-0 m-auto" />
            </div>
            <p className="mt-4 text-center">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src="/img/5.png" alt="Video thumbnail" className="img" />
              <img src="/img/play2.webp" alt="" className="absolute play inset-0 m-auto" />
            </div>
            <p className="mt-4 text-center">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src="/img/5.png" alt="Video thumbnail" className="img" />
              <img src="/img/play2.webp" alt="" className="absolute play inset-0 m-auto" />
            </div>
            <p className="mt-4 text-center">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src="/img/5.png" alt="Video thumbnail" className="img" />
              <img src="/img/play2.webp" alt="" className="absolute play inset-0 m-auto" />
            </div>
            <p className="mt-4 text-center">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Button buttonClass="btn-green w-40 h-10" text="VIEW ALL" />
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-zinc-800 to-black text-white p-6 section-5" style={{ backgroundImage: "url('/img/6.png')" }}>
        <div className="md:w-1/2 flex justify-center"></div>
        <div className="md:w-1/2 p-6">
          <h1 className="text-4xl font-bold mb-4">JOIN US.</h1>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur sadipscing elitr,</p>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input type="text" placeholder="Name" className="w-1/2 p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Surname" className="w-1/2 p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="flex space-x-4">
              <input type="text" placeholder="Phone" className="w-1/2 p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" placeholder="Email" className="w-1/2 p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <input type="text" placeholder="Department" className="w-full p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
            <textarea placeholder="Mensaje" className="w-full p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"></textarea>
            <Button buttonClass="w-full btn-success bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500" text="I'M IN" />
          </form>
          <p className="mt-6 text-sm">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
      </div>

      <div className="flex items-left justify-left section-6">
        <img src="/img/7.png" alt="backgroun" className='fondo' />
        <div className="w-1/4 text text-left p-6">
          <h1 className="text-4xl font-bold text-foreground mb-4">Lorem ipsum dolor sit</h1>
          <p className="text-muted-foreground mb-6">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <Button buttonClass="btn-primary bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-lg" text="VIEW ALL" />
        </div>
      </div>

      <div className="bg-green-500 bg-cover bg-center p-8 text-center section-7">
        <h1 className="text-4xl font-bold text-white mb-8">Lorem ipsum dolor sit amet</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <img src="/img/Pic7.png" alt="" className="img object-cover rounded-lg shadow-lg" />
          <img src="/img/Pic8.png" alt="" className="img object-cover rounded-lg shadow-lg" />
          <img src="/img/Pic9.png" alt="" className="img object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex justify-center space-x-2 mb-8">
          <i class="text-white fa-solid fa-circle"></i>
          <i class="text-white fa-regular fa-circle"></i>
          <i class="text-white fa-regular fa-circle"></i>
        </div>
        <Button buttonClass="bg-white text-black py-2 px-4 rounded-lg shadow-lg hover:bg-zinc-200" text="VIEW ALL" />
      </div>

      <div className="bg-card text-card-foreground py-4 section-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-left">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/img/grab.png" alt="grab" class="logo"></img>
          </div>
          <div className="text-right font-bold">
            <p className="text-muted-foreground">
              All rights reserved to <br /> Lorem Ipsum © 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
