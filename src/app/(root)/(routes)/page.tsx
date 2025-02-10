import NavbarComponent from "@/components/customComponents/NavbarComponent";
import { Button } from "@/components/ui/button";
import TitleCard from "@/components/customComponents/TitleCard";
import Image from "next/image";
import Lapboard from "@/components/customComponents/Lapboard";
import RankCard from "@/components/customComponents/RankCard";
import WeeklyRaffles from "@/components/customComponents/WeeklyRaffles";
import CampaignPerformance from "@/components/customComponents/CampaignPerformance";
import SpinWheel from "@/components/customComponents/SpinWheel";


export default function Home() {
  return (
    <>
      <NavbarComponent />
      <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 w-full max-w-7xl mx-auto">
        <section className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div className="flex flex-col justify-start max-w-lg text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              Join <span className="text-[#DBC166] font-bold">The Menu</span> <br /> Today!
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
              Unlock exclusive discounts, compete for exciting prizes, and earn rewards through referrals—join The Menu Portal today!
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="w-full sm:w-56 bg-[#DBC166] text-black px-6 py-4 sm:py-5 text-base sm:text-lg rounded-full font-medium transition-all duration-300 ease-in-out hover:bg-[#C0B060] hover:shadow-md">
                Sign Up Now for R50
              </Button>
              <Button className="w-full sm:w-56 bg-transparent border border-black text-black px-6 py-4 sm:py-5 text-base sm:text-lg rounded-full font-medium transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-md">
                Register Now
              </Button>

            </div>
          </div>

          <div className="mt-10 md:mt-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/LaptopCart.png"
              alt="Shopping Cart on Laptop"
              width={500}
              height={350}
              className="rounded-xl shadow-lg w-full h-auto"
              priority
            />
          </div>
        </section>

        <section className="mt-12 w-full text-center">
          <TitleCard title="Vendor Onboarding Tools" />
          <div className="flex flex-col items-center justify-center gap-12 mt-12">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-8 md:px-16 lg:px-24">
              Register your business with The Menu Portal to reach more customers, showcase your offerings, and access exclusive tools like a personalized dashboard and automated contracts. Join today and grow with us!
            </p>
            <Button className="w-56 bg-[#DBC166] text-black px-6 py-4 sm:py-5 text-base sm:text-lg rounded-full font-medium transition-all duration-300 ease-in-out hover:bg-[#C0B060] hover:shadow-md">
              Register as Vendor
            </Button>
          </div>
        </section>

        <section className="mt-12 w-full text-center">
          <TitleCard title="Affiliate Marketing System" />
          <div className="flex flex-col items-center justify-center gap-12 mt-12 w-full">
            <p className="text-base sm:text-base md:text-lg lg:text-xl px-4 sm:px-8 md:px-16 lg:px-24">
              Empower affiliates to grow and earn with ease through advanced tools and insights.
            </p>

            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-7xl">

              <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 flex-grow">
                <h2 className="text-lg font-semibold">Automatic Referral Code Generation</h2>
                <Image
                  src="/referral.png"
                  alt="Referral"
                  width={200}
                  height={200}
                  className="rounded-xl bg-transparent mt-6"
                />
                <p className="text-base mt-6">
                  Each affiliate receives a unique referral code upon registration, enabling them to track their performance and maximize conversions.
                </p>
              </div>

              <div className="hidden md:block h-32 w-[2px] bg-black"></div>


              <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 flex-grow">
                <h2 className="text-lg font-semibold">Affiliate Dashboard</h2>
                <Image
                  src="/clock.png"
                  alt="Affiliate Dashboard"
                  width={200}
                  height={200}
                  className="rounded-xl bg-transparent mt-6"
                />
                <p className="text-base mt-6">
                  A user-friendly dashboard designed for affiliates to monitor and manage their performance.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="mt-12 w-full text-center">
          <TitleCard title="User Referral System" />
          <div className="mt-12 w-full space-y-12">

            <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold">Referral link generation</h3>
                <p className="text-xl text-gray-600">
                  Users can share personalized links for referrals
                </p>
              </div>
              <Image
                src="/RefLink.png"
                alt="Referral Link"
                width={400}
                height={340}
                className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[400px] rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full flex flex-col md:flex-row-reverse items-center md:justify-between gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold">Milestone tracking</h3>
                <p className="text-xl text-gray-600">
                  Progress indicators show referral achievements
                </p>
              </div>
              <Image
                src="/milestone.png"
                alt="Milestone Tracking"
                width={400}
                height={340}
                className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[400px] rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold">Dynamic leaderboards</h3>
                <p className="text-xl text-gray-600">
                  Display top referrers to foster competition
                </p>
              </div>
              <Image
                src="/dynamicLead.png"
                alt="Dynamic Leaderboards"
                width={400}
                height={340}
                className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[400px] rounded-xl shadow-lg"
              />
            </div>
          </div>


        </section>


        <section className="mt-12 w-full text-center">
          <TitleCard title="Gamified Elements" />
          <div className="flex flex-col items-center justify-center gap-12 mt-12 w-full">
            <p className="text-base sm:text-base md:text-lg lg:text-xl px-4 sm:px-8 md:px-16 lg:px-24">
              Users earn points and rewards by achieving milestones
            </p>
          </div>
          <div>
            <h1 className="font-bold text-start text-2xl">
              Leaderboards
            </h1>
            <Lapboard />
          </div>
        </section>

        <section className="mt-20 mb-20 w-full flex items-start">
          <SpinWheel />
        </section>


        <section className="mt-12 w-full">
          <RankCard />

        </section>



        <section className="mt-12 w-full">
          <WeeklyRaffles />

        </section>
        <section className="mt-12 w-full ">
          <TitleCard title="Dynamic Advertising Banners" />
          <div className="mt-6">
            <CampaignPerformance />
          </div>
        </section>


        <section className="mt-12 w-full">
          <section className="flex flex-col md:flex-row justify-center gap-6 py-10">
            <div className="border border-black rounded-lg p-6 w-52 text-center shadow-md">
              <h2 className="text-3xl font-bold">7k+</h2>
              <p className="text-lg text-gray-700">User Registered</p>
            </div>
            <div className="border border-black rounded-lg p-6 w-52 text-center shadow-md">
              <h2 className="text-3xl font-bold">10k+</h2>
              <p className="text-lg text-gray-700">Referrals</p>
            </div>
            <div className="border border-black rounded-lg p-6 w-52 text-center shadow-md">
              <h2 className="text-3xl font-bold">50k+</h2>
              <p className="text-lg text-gray-700">Happy Clients</p>
            </div>
          </section>

        </section>

        <section className="mt-12 w-full ">
          <TitleCard title="Additional Update" />
          <div className="mt-10">
            <div className="flex flex-col md:flex-row justify-center gap-10 py-12">
              <div className="border border-gray-300 rounded-2xl p-8 w-96 shadow-xl bg-white">
                <img src="/trophy.png" alt="Competition Icon" className="w-20 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-center">Competition Entries</h2>
                <ul className="mt-4 text-gray-700 text-lg space-y-3">
                  <li>▪️ <strong>Subscriptions:</strong> Entries per competition are based on the tier (e.g., Lion Plan = 10 entries/competition).</li>
                  <li>▪️ <strong>Day Passes:</strong> Allocate entries according to the once-off pass type and entries allocated per type.</li>
                  <li>▪️ User dashboards must display competition names, earned entries, and usage history.</li>
                </ul>
              </div>
              <div className="border border-gray-300 rounded-2xl p-8 w-96 shadow-xl bg-white">
                <img src="/exclusive.png" alt="Membership Icon" className="w-20 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-center">Free Membership Offer</h2>
                <p className="mt-4 text-gray-700 text-lg">
                  Users who pay the R50 access fee during the Waiting Page period will automatically receive one free month of the Lion Plan when the full platform launches. This process will be automated, with clear communication to users.
                </p>
              </div>

            </div>
          </div>

        </section>

      </main>
      <footer className="bg-black text-white py-10 px-6 md:px-20 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="The Menu Logo" className="w-10" />
              <div>
                <h2 className="text-lg font-semibold text-[#d4a373]">THE MENU</h2>
                <p className="text-xs uppercase tracking-wide text-gray-400">YOUR WORLD, YOUR WAY</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-light">Email:</p>
              <p className="text-sm">xyz@gmail.com</p>
            </div>

            <div>
              <p className="text-sm">Sign up for the newsletter</p>
              <div className="border-b border-gray-500 flex items-center space-x-2 w-64">
                <input type="email" placeholder="Email" className="bg-transparent text-sm py-2 outline-none flex-1" />
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-20 gap-y-3 text-sm mt-10 md:mt-0">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline flex items-center">↗ <span className="ml-1 underline">Instagram</span></a>
            <a href="#" className="hover:underline">Meet the founder</a>
            <a href="#" className="hover:underline flex items-center">↗ <span className="ml-1 underline">Linkedin</span></a>
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact us</a>
            <a href="#" className="hover:underline">TOS</a>
          </div>

        </div>
      </footer>
    </>
  );
}