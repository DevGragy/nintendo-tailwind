// * Este sitio web no esta basado en componentes *
// Solamente esta creado para el estudio de Tailwind
import { useState } from "react";
import logo from "./img/logo.png";
import hero from "./img/hero.jpg";
import video1 from "./videos/video01.mp4";
import video2 from "./videos/video02.mp4";
import coin from "./img/coin.gif";
import activity from "./img/activity_img3.png";

const App = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleMenu = () => {
		setIsActive(!isActive);
	};

	return (
		<div className="w-[1920px] xsm:w-full mx-auto">
			<nav className="bg-gray-800 flex justify-between lg:justify-start items-center">
				<div className="logo flex-initial p-2 w-1/6">
					<img src={logo} className="" width="100" />
				</div>
				<div className="links lg:block hidden w-1/6 md:w-4/6">
					<ul className="menu flex items-center justify-center gap-5 ">
						<li>
							<a href="#" className="link">
								Home
							</a>
						</li>
						<li>
							<a href="#" className="link">
								Play Together
							</a>
						</li>
						<li>
							<a href="#" className="link">
								Explore
							</a>
						</li>
						<li>
							<a
								href="#"
								className="border-4 border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500"
							>
								Bowser Fury
							</a>
						</li>
						<li>
							<a
								href="#"
								className="rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-500"
							>
								Buy Now
							</a>
						</li>
					</ul>
				</div>

				<div className="block lg:hidden w-1/5 lg:w-4/6">
					<a href="#" className="link texl-lg" onClick={toggleMenu}>
						Menu
					</a>
					<ul
						className={
							isActive
								? "mobile-links w-full absolute z-50 left-0 text-center bg-gray-800"
								: "hidden"
						}
					>
						<li>
							<a href="#" className="link">
								Home
							</a>
						</li>
						<li>
							<a href="#" className="link">
								Play Together
							</a>
						</li>
						<li>
							<a href="#" className="link">
								Explore
							</a>
						</li>
						<li>
							<a
								href="#"
								className="my-4 inline-block border-4 border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500"
							>
								Bowser Fury
							</a>
						</li>
						<li>
							<a
								href="#"
								className="my-4 inline-block rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-500"
							>
								Buy Now
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<section className="header">
				<img src={hero} />
			</section>

			<section>
				<div className="bg-[url('./img/wave-white.png')] h-6 bg-repeat-x relative -top-2"></div>
				<div className="bg-[url('./img/pattern-white-dots.png')] text-center p-4 flex md:flex-row flex-col gap-3 justify-center">
					<a
						href="/"
						className="inline-block py-3 px-16 bg-black text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200"
					>
						Buy Now
					</a>
					<a
						href="/"
						className="inline-block py-3 px-16 bg-red-500 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200"
					>
						Watch the Trailer
					</a>
				</div>
				<div className="bg-[url('./img/wave-white.png')] bg-repeat-x h-6 relative top-2"></div>
			</section>

			<section className="bg-[url('./img/pattern-characters-red.png')] py-28">
				<div className="lg:container 2xl:w-3/5 mx-auto md:flex gap-5 md:w-full p-3">
					<div className="left bg-[url('./img/character-l.png')] bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52 mx-auto">
						<div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-72 rounded-2xl overflow-hidden xl:w-4/5">
							<div className="cover bg-black">
								<video src={video1} autoPlay loop muted />
							</div>
							<div className="content bg-[url('./img/wave-white.png')] bg-repeat-x relative -top-3">
								<h3 className="font-black text-4xl py-10">
									Play Together
								</h3>
								<p className="text-xl">
									Work with (or against) your friends and
									family*
								</p>
								<a href="/" className="boton group">
									Watch the trailer
									<span className="arrow group-hover:border-red-500 xl:group-hover:ml-4"></span>
								</a>
							</div>
							<div className="dots flex justify-between p-4">
								<div className="dot"></div>
								<div className="dot"></div>
							</div>
						</div>
					</div>
					<div className="right w-5/6 md:w-1/2 text-center mx-auto">
						<h2 className="font-black text-white text-6xl py-8">
							Available Now
						</h2>
						<p className="font-bold text-white text-2xl mx-auto py-10 w-4/5">
							Team up for a paws-itively adorable adventure!
						</p>
						<p className="text-white mx-auto w-4/5">
							Bowser is up to his old tricks again and only Mario
							and his friends can save the day! Use power-ups like
							the Super Bell, which grants catlike abilities like
							climbing and scratching, to overcome Bowser and his
							minions.
						</p>

						<div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-16 rounded-2xl overflow-hidden xl:w-4/5">
							<div className="cover bg-black">
								<video src={video2} autoPlay loop muted />
							</div>
							<div className="content bg-[url('./img/wave-white.png')] bg-repeat-x relative -top-3">
								<h3 className="font-black text-4xl py-10">
									Explore
								</h3>
								<p className="text-xl">
									Prowl through some popular places.
								</p>
								<a href="/" className="boton group">
									Take a look!
									<span className="arrow group-hover:border-red-500 xl:group-hover:ml-4"></span>
								</a>
							</div>
							<div className="dots flex justify-between p-4">
								<div className="dot"></div>
								<div className="dot"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer text-center flex justify-center gap-9 pt-10">
					<img src={coin} alt="coin" className="coin" />
					<img src={coin} alt="coin" className="coin" />
					<img src={coin} alt="coin" className="coin" />
					<img
						src={coin}
						alt="coin"
						className="coin hidden sm:block"
					/>
					<img
						src={coin}
						alt="coin"
						className="coin hidden sm:block"
					/>
					<img
						src={coin}
						alt="coin"
						className="coin hidden sm:block"
					/>
				</div>
			</section>

			<section className="bg-[url('./img/pattern-yellow-dots.png')]">
				<div className="bg-[url('./img/wave-pink.png')] bg-repeat-x h-6 relative -top-4"></div>
				<div className="xsm:w-full sm:container w-2/3 mx-auto md:flex justify-center items-center text-center py-6">
					<div className="left xl:w-1/3 lg:w-1/2 p-5">
						<h3 className="text-yellow-900 font-black xsm:text-3xl sm:text-4xl">
							Cat <br /> Transformation <br /> Center
						</h3>
						<p className="py-4 text-xl">
							We're not kitten-transform into a cat-tastic new
							you!
						</p>
						<p>
							<a href="/" className="boton group">
								Meow!{" "}
								<span className="arrow group-hover:border-red-500 xl:group-hover:ml-4"></span>
							</a>
						</p>
					</div>
					<div className="right xl:w-2/3 lg:w-1/2">
						<img src={activity} className="md:w-full" />
					</div>
				</div>
			</section>

			<section className="bg-black">
				<div className="bg-[url('./img/wave-white.png')] h-6 bg-repeat-x relative -top-4"></div>
				<div className="container mx-auto text-center py-10 w-2/3">
					<div className="pb-5">
						<a href="/" className="boton group">
							Costumer Support
							<span className="arrow group-hover:border-red-500 xl:group-hover:ml-4"></span>
						</a>
					</div>
					<div className="text-white">
						<p class="py-2">
							*Additional games, systems and/or accessories may be
							required for multiplayer mode
						</p>
						<p class="py-2">
							** Nintendo Switch Online membership (sold
							separately) and Nintendo Account required for online
							features. Not available in all countries. Internet
							access required for online features. A Nintendo
							Account is required to receive and redeem My
							Nintendo points. Terms apply.
							nintendo.com/switch-online.{" "}
						</p>

						<p class="py-2">
							Game, systems, some accessories and amiibo sold
							separately. Visit amiibo.com for details on amiibo
							functionality.{" "}
						</p>

						<p class="py-2">
							Nintendo Switch Lite plays all games that support
							handheld mode.
						</p>

						<p class="py-2">
							©2013-2021 Nintendo. Super Mario and Nintendo Switch
							are trademarks of Nintendo.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default App;
