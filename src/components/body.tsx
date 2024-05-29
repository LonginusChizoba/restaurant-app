'use client';
import React from 'react';
import Image from 'next/image';
import Button from './button';
import FoodMenu from './foodMenu';
import Blog from './blog';

const Body = () => {
  return (
    <div>
     
	<section className="home" id="home">
		<div className="home-text">
			<h3>Welcome</h3>
			<h1>Enjoy the Organic Food</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br /> tempor incididunt ut</p>
            <Button className='btn' text='About Us'/>
		</div>

		<div className="home-img">
			<Image src="/hero.png" alt="" layout="responsive" width={569} height={612} />
		</div>
	</section>
	<section className="about" id="about">
		<div className="about-img">
			<Image src="/about.png" alt="" layout="responsive" width={658} height={678} />
		</div>

		<div className="about-text">
			<h3>About Us</h3>
			<h2>Food Ex Restaurant</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
			<a href="#" className="btn">About Us</a>
		</div>
	</section>

	
	<FoodMenu />

	<section className="team" id="team">
		<div className="center-text">
			<h3>Team</h3>
			<h2>Our Experience Chefs</h2>
		</div>

		<div className="team-content">
			<div className="row">
				<div className="team-img">
					<Image src="/team1.jpg" alt="" className="team-img-img" width={120} height={120} />
				</div>
				<h4>Mark Anthony</h4>
				<p>Executive Chef</p>
				<div className="team-icon">
					<a href="#"><i className='bx bxl-facebook' ></i></a>
					<a href="#"><i className='bx bxl-twitter' ></i></a>
					<a href="#"><i className='bx bxl-instagram-alt' ></i></a>
				</div>
			</div>

			<div className="row">
				<div className="team-img">
					<Image src="/team2.jpg" alt="" className="team-img-img" width={120} height={120} />
				</div>
				<h4>Mark Anthony</h4>
				<p>Executive Chef</p>
				<div className="team-icon">
					<a href="#"><i className='bx bxl-facebook' ></i></a>
					<a href="#"><i className='bx bxl-twitter' ></i></a>
					<a href="#"><i className='bx bxl-instagram-alt' ></i></a>
				</div>
			</div>

			<div className="row">
				<div className="team-img">
					<Image src="/team1.jpg" alt="" className="team-img-img" width={120} height={120} />
				</div>
				<h4>Mark Anthony</h4>
				<p>Executive Chef</p>
				<div className="team-icon">
					<a href="#"><i className='bx bxl-facebook' ></i></a>
					<a href="#"><i className='bx bxl-twitter' ></i></a>
					<a href="#"><i className='bx bxl-instagram-alt' ></i></a>
				</div>
			</div>


			<div className="row">
				<div className="team-img">
					<Image src="/team2.jpg" alt="" className="team-img-img" width={120} height={120} />
				</div>
				<h4>Mark Anthony</h4>
				<p>Executive Chef</p>
				<div className="team-icon">
					<a href="#"><i className='bx bxl-facebook' ></i></a>
					<a href="#"><i className='bx bxl-twitter' ></i></a>
					<a href="#"><i className='bx bxl-instagram-alt' ></i></a>
				</div>
			</div>

		</div>
	</section>


	<section>
		<div className="container">
			<div className="newsletter-content">
				<div className="news-img">
					<Image src="/discount.svg" alt='' width={100} height={100} />
				</div>

				<div className="news-text">
					<h3>Subscribe To Our</h3>
					<h2>Newsletter</h2>
					<p>Subscribe to our newsletter and receive 15% <br /> discount from your order.</p>
				</div>

				<div className="letter">
					<form>
						<input type="email" name="email" placeholder="Your Email" required />
						<input type="submit" value="Subscribe" required />
					</form>
				</div>
			</div>
		</div>
	</section>

	<Blog />

    <section className="contact" id="contact">
        <div className="contact-box">
            <h3>FoodEx</h3>
            <h5>Connect With Us</h5>
            <div className="social">
                <a href="#"><i className='bx bxl-facebook' ></i></a>
                <a href="#"><i className='bx bxl-twitter' ></i></a>
                <a href="#"><i className='bx bxl-instagram-alt' ></i></a>
            </div>
        </div>

        <div className="contact-box">
            <h3>Menu Links</h3>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
        </div>

        <div className="contact-box">
            <h3>Our Foods</h3>
            <li><a href="#">Pizza</a></li>
            <li><a href="#">Indian Burger</a></li>
            <li><a href="#">Beef Burger</a></li>
            <li><a href="#">Toa Heftiba</a></li>
            <li><a href="#">Shevtsova</a></li>
        </div>

        <div className="contact-box address">
            <h3>Contact</h3>
            <i className='bx bxs-map' ><span>1294 Mockingbird Hill, NYC</span></i>
            <i className='bx bxs-envelope' ><span>hello@yourmail.com</span></i>
			<i className='bx bxs-phone' ><span>(00) 123 456 789</span></i>
        </div>
    </section>

    <div className="end-text">
        <p>© latest 2024 Longinus Chizoba . All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Body;