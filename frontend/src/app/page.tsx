import React from "react";
import Image from "next/image";
import coupleImage from "../../public/rose/rose4.jpg";
import createProfile from "../../public/how_it_work/1.png";
import discoverCouple from "../../public/how_it_work/discover_image.png";
import chatingCouple from "../../public/how_it_work/couples_chating_image.png";
import { arvo, exo2 } from "@/font";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ArrowRight,
  Heart,
  MapPin,
  MessageCircle,
  Search,
  Shield,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans gap-16">
      <section className="relative min-h-screen w-full" id="hero">
        <Image src={coupleImage} alt="couples"
          fill
          priority
          className="object-cover h-lvw w-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute top-10 gap-4 mt-12 text-black">
          <div className="gap-5 h-auto w-auto pl-10 top-12">
            <h1 className="text-7xl md:text-7xl font-bold top-12 leading-tight">
              <span className="inline-block bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-8">
                Because you deserve <br />
                better!
              </span>
            </h1>
          </div>
          <h3 className="absolute pl-1 text-white text-center text-5xl leading-tight drop-shadow-xl">
            <span className="pl-10"> Get noticed for </span>  <span className=" text-rose-300"> who </span> <br />
            you are, <span className="text-rose-300"> not what </span>  <br />
            <span className="pr-18">you look like.</span>
          </h3>
          <div />

          <div className="ml-10 flex justify-center text-center mt-50 w-[600px] h-[150px] bg-black/20 rounded-lg p-4
         text-gray-200  leading-tight  text-xl">
            <p className="text-lg drop-shadow-md bg-black/20 p-4 rounded-lg backdrop-blur-sm font-Bitcount leading-relaxed">
              Discover meaningful connections based on who you really are.
              <span className="pr-6" >Our personality-driven matching helps you find your perfect match.</span>
            </p>
          </div>
          <button 
            className="ml-10 mt-8 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 
                text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 
                shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>


      {/* Call to Action Button */}
      {/* Features */}
      <section className="h-screen w-full  bg-gradient-to-b from-white to-rose-50" id="feature">
        <div className="flex justify-center mt-12">
          <div>
            <div className="flex justify-center mb-6">
              <h1 className={`${arvo.className} text-5xl font-bold text-rose-400 relative pb-2`}>
                Features
                <span className="absolute left-1 bottom-0 w-40 h-[4px] bg-gradient-to-r from-rose-400 via-pink-500 to-orange-200 rounded-l-2xl">
                </span>
              </h1>
            </div>
            <p className={`{text-center  text-gray-700 text-[20px] leading-relaxed  ${exo2.className}`}>
              Our platform uses advanced personality assessments to match you with compatible partners.
              <span className="flex justify-center pr-15">Say goodbye to superficial swipes and hello to meaningful connections.</span>
            </p>
          </div>
        </div>

        {/* features cards */}
        <div className="w-200 max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 place-items-center">  
          <Card className="group flex flex-col items-center justify-center hover:shadow-black/40 text-center w-[250px] h-[250px] bg-white/70 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center h-15 w-15 mt-2 group-hover:rotate-6 transition-transform duration-300">
              <Users className="w-15 h-15 p-2 bg-rose-200 group-hover:rotate-6 transition-transform duration-300 rounded-2xl text-rose-400 mb-3 " />
            </div>
            <CardTitle className="flex justify-center text-center text-2xl text-rose-400 font-bold">
              Intelligent Matching
            </CardTitle>
            <CardContent className="px-4">
              <p className={`{text-center ${exo2.className} text-gray-500`}>
                We connect you with profiles based on location, mutual interests, and real compatibility.
              </p>
            </CardContent>
          </Card>

          {/* f 2 */}
          <Card className="group flex flex-col items-center justify-center hover:shadow-black/40 text-center w-[250px] h-[250px] bg-white/70 backdrop-blur-sm shadow-lg p-4 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center h-15 w-15 mt-2 group-hover:rotate-6 transition-transform duration-300">
              <MessageCircle className="w-15 h-15 p-2 bg-rose-200 rounded-2xl text-rose-400 mb-3" />
            </div>
            <CardTitle className="flex justify-center text-center text-2xl text-rose-400 font-bold">
              Instant Chat
            </CardTitle>
            <CardContent className="px-4">
              <p className={`{text-center ${exo2.className} text-gray-500`}>
                Stay connected with your matches through smooth, real-time conversations.
              </p>
            </CardContent>
          </Card>

          {/* f 3 */}
          <Card className="group flex flex-col items-center justify-center hover:shadow-black/40 text-center w-[250px] h-[250px] bg-white/70 backdrop-blur-sm shadow-lg p-4 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center h-15 w-15 mt-2">
              <MapPin className="w-15 h-15 p-2 bg-rose-200 rounded-2xl text-rose-400 mb-3 group-hover:rotate-6 transition-transform duration-300" />
            </div>
            <CardTitle className="flex justify-center text-center text-2xl text-rose-400 font-bold">
              Nearby Matches
            </CardTitle>
            <CardContent className="px-4">
              <p className={`{text-center ${exo2.className} text-gray-500`}>
                Discover people close to you with accurate, location-based suggestions.
              </p>
            </CardContent>
          </Card>

          {/* f 4 */}
          <Card className="group flex flex-col items-center justify-center hover:shadow-black/40 text-center w-[250px] h-[250px] bg-white/70 backdrop-blur-sm shadow-lg p-4 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center h-15 w-15 mt-2">
              <Search className="w-15 h-15 p-2 bg-rose-200 rounded-2xl text-rose-400 mb-3 group-hover:rotate-6 transition-transform duration-300" />
            </div>
            <CardTitle className="flex justify-center text-center text-2xl text-rose-400 font-bold">
              Smart Filters
            </CardTitle>
            <CardContent className="px-4">
              <p className={`{text-center ${exo2.className} text-gray-500`}>
                Easily refine your search by age, interests, location, and more to find the right match.
              </p>
            </CardContent>
          </Card>

          {/* f 5 */}
          <Card className="group flex flex-col items-center justify-center hover:shadow-black/40 text-center w-[250px] h-[250px] bg-white/70 backdrop-blur-sm shadow-lg p-4 hover:scale-105 transition-transform duration-300">
            <div className="group-hover:rotate-6 transition-transform duration-300 flex justify-center h-15 w-15 mt-2">
              <Heart className="w-15 h-15 p-2 bg-rose-200 rounded-2xl text-rose-400 mb-3" />
            </div>
            <CardTitle className="flex justify-center text-center text-2xl text-rose-400 font-bold">
              Passion Tags
            </CardTitle>
            <CardContent className="px-4">
              <p className={`{text-center ${exo2.className} text-gray-500`}>
                Meet people who share your hobbies and passions using our tag system.
              </p>
            </CardContent>
          </Card>

          {/* f 6 */}
          <Card className="group flex flex-col items-center justify-center hover:shadow-black/40 text-center w-[250px] h-[280px] bg-white/70 backdrop-blur-sm shadow-lg p-4 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center h-15 w-15 mt-2 group-hover:rotate-6 transition-transform duration-300">
              <Shield className="w-15 h-15 p-2 bg-rose-200 rounded-4xl text-rose-400 mb-3" />
            </div>
            <CardTitle className="flex justify-center text-center text-2xl text-rose-400 font-bold">
              Protected & Private
            </CardTitle>
            <CardContent className="px-2">
              <p className={`{text-center ${exo2.className} text-gray-500 `}>
                Enjoy peace of mind with strong security and privacy features that safeguard your data.
              </p>
            </CardContent>
          </Card>
        </div>
        {/* How It's Works  */}
      </section>
      <section className="relative flex-col justify-center mt-10 h-full w-full" id="how-it-works">
        <div className="flex flex-col justify-center items-center mb-6">
          <h1 className={`text-5xl ${arvo.className} font-bold text-rose-400 relative pb-2`}>
            How It Works
            <span className="absolute left-1 bottom-0 w-60 h-[4px] bg-gradient-to-r from-rose-400 via-pink-500 to-orange-200 rounded-l-2xl">
            </span>
          </h1>
          <p className={`text-center  text-gray-700 text-[20px] leading-relaxed w-[700px] mt-4 ${exo2.className}`}>
            Finding your perfect match is easy with our simple process
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-10 mb-20">
          <div className="group flex flex-col justify-center items-center gap-10">
            <div className="group-hover:scale-110 transition-transform duration-300 shadow-lg w-16 h-16 text-3xl font-bold text-gray-300 bg-rose-500 rounded-full flex items-center justify-center">
              1
            </div>
            <Image src={createProfile} className={`h-70 w-70 rounded-3xl`} alt="step 1" />
            <div className="flex flex-col text-center px-4 gap-2">
              <h1 className={`font-bold text-2xl ${exo2.className}`}>Create Your Profile</h1>
              <p className="text-[12px] text-gray-600 font-bold w-50"> Sign up and complete your profile with photos, interests, and preferences.</p>
            </div>
          </div>
          <div className="group flex flex-col justify-center items-center gap-10">
            <div className="group-hover:scale-110 transition-transform duration-300 w-16 h-16 text-3xl font-bold text-gray-300 bg-rose-500 rounded-full flex items-center justify-center">
              2
            </div>
            <Image src={discoverCouple} className="h-70 w-70 rounded-3xl" alt="step 2" />
            <div className="flex flex-col text-center px-4">
              <h1 className={`font-bold text-2xl ${exo2.className}`}>Discover Matches</h1>
              <p className="text-[12px] text-gray-600 font-bold w-50">Browse suggested profiles or use our advanced search to find potential matches.</p>
            </div>
          </div>
          <div className="group flex flex-col justify-center items-center gap-10">
            <div className="group-hover:scale-110 transition-transform duration-300 shadow-black/1 w-16 h-16 text-3xl font-bold text-gray-300 bg-rose-500 rounded-full flex items-center justify-center">
              3
            </div>
            <Image src={chatingCouple} className="h-70 w-70 rounded-3xl" alt="step 3" />
            <div className="flex flex-col text-center px-4">
              <h1 className={`font-bold text-2xl ${exo2.className}`}>Connect & Chat</h1>
              <p className="text-[12px] text-gray-600 font-bold w-50">Like profiles and start chatting when you match with someone.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex-col justify-center mt-20 h-full w-full bg-gradient-to-b from-white to-rose-50" id="opinons">
        <div className="flex flex-col justify-center items-center">
          <h1 className={`text-5xl ${arvo.className} font-bold text-rose-400 relative pb-2`}>
            Success Stories
            <span className="absolute left-1 bottom-0 w-80 h-[4px] bg-gradient-to-r from-rose-400 via-pink-500 to-orange-200 rounded-l-2xl">
            </span>
          </h1>
          <p className={`text-center  text-gray-700  text-[20px] leading-relaxed w-[700px] mt-4 ${exo2.className}`}>
            Hear from couples who found love on our platform
          </p>
          <div className="flex flex-row justify-center items-center gap-10 mb-20 mt-10">
            <Card className="w-80 bg-white/70 backdrop-blur-sm shadow-lg p-4 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-rose-400">Emily & Jake</CardTitle>
                <CardDescription className="text-gray-500">"We met on this platform and instantly connected over our shared love for hiking and photography. Our first date was a scenic hike, and we've been inseparable ever since!"</CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`text-gray-600 ${exo2.className}`}>
                  - Emily, 28 & Jake, 30
                </p>
              </CardContent>
            </Card>

            <Card className="w-80 bg-white/70 backdrop-blur-sm shadow-lg p-4 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-rose-400">maroune & fms</CardTitle>
                <CardDescription className="text-gray-500">
                  "We matched based on our shared love for hiking and photography. After chatting for a week, we met for coffee and instantly connected. Now we're engaged!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`text-gray-600 ${exo2.className}`}>
                  - maoune, 28 & Jake, 30
                </p>
              </CardContent>
            </Card>

            <Card className="w-80 bg-white/70 backdrop-blur-sm shadow-lg p-4 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-rose-400">ayylaaba & nada</CardTitle>
                <CardDescription className="text-gray-500">
                  "The location-based matching was perfect for us. We lived just 10 minutes apart but had never met. Thanks to Matcha,
                  _ we are not anymore with each other_ ."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`text-gray-600 ${exo2.className}`}>
                  - ayylaaba, 28 & nada, 30
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
