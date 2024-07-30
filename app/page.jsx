"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import hero from "@/public/hero.jpg";
import founder from "@/public/founder.JPG";
import cater from "@/public/cater.png";
import { Instagram, Quote } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-pink ">
      <div className="hero bg-[#fbfaff]">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="hero p-5 md:p-24 pt-4 md:pt-56">
            <p className="text-5xl md:text-9xl font-extrabold text-pink-700">
              FYI
            </p>
            <p className="text-xl md:text-3xl  font-medium text-pink-400 tracking-wide">
              In <span className="text-pink-700"> Finding You & I</span> we find
              strength
              {/* Your Voice, Your Story, Our community */}
            </p>
            <p className="w-full md:w-3/3 md:mt-10 mt-5 text-pink-600 md:text-lg text-base ">
              Finding You and I (FYI) is a teen-led organization focused on
              raising mental health awareness and addressing youth issues. Our
              mission is to create a supportive environment where young people
              can freely express their feelings and share their experiences.
              <span className="md:inline hidden">
                At FYI, we provide a safe space for emotional support,
                understanding the critical role it plays in overall well-being.
                We strive to be a comforting presence for our peers, offering
                empathetic listening and fostering a nurturing community for
                everyone.
              </span>
            </p>
            <Button
              className="bg-pink-700 hover:bg-white hover:text-pink-700 border-2 rounded-3xl p-6 border-pink-700 cursor-pointer mt-12"
              asChild
            >
              <Link href={"/emosphere"}>Emosphere Out Now!</Link>
            </Button>
          </div>
          <Image
            className="rounded-t-none rounded-b-full md:rounded-full  w-screen md:h-[110vh] md:w-[60vw] object-cover relative md:-right-36 md:-top-20"
            src={hero}
            data-aos="fade-up"
          />
        </div>
        {/*  */}
        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-between py-12 bg-[#ed6ba7] shadow-lg relative ">
            <div className="w-4/4 md:w-2/4">
              <Image src={founder} className=" z-20" />
            </div>
            <div className="w-4/4 md:w-2/4 px-4">
              <p className="text-xl md:text-4xl font-extrabold text-white ">
                Personal note from the founder
              </p>
              <Quote
                style={{ transform: "scaleX(-1)" }}
                className="text-white mt-12 "
                size={40}
              />
              <p className="text-md md:text-lg font-medium text-white my-8 pr-8">
                Growing up as a chubby kid, I faced early experiences with body
                shaming that left deep scars on my self-esteem. These encounters
                sparked countless questions about my worth and appearance, yet I
                struggled to find someone understanding enough to confide in.
                The fear of being judged by those closest to me only compounded
                my feelings of isolation, pushing me to bury my emotions deeper.
                <br />
                <br />
                As I navigated my teenage years, I sought answers and solace
                from various sources, but what I truly yearned for was a safe
                haven—a place where I could freely express my emotions without
                fear or reservation. It was this longing that led me to create
                FYIorg at the age of 16, a sanctuary for youth like me who
                needed to be heard and understood.
                <br />
                <br />
                Within FYIorg, I also introduced EMOSPHERE, an anonymous
                platform designed to provide accessible emotional support. This
                initiative stems from my own journey of self-discovery and the
                understanding that sometimes, the most profound healing comes
                from connecting with others who share similar experiences.
                <br />
                <br />
                Today, with FYIorg, I am committed to fostering a community
                where every emotion is valued and where we can embark on a
                collective journey of self-discovery and mental well-being. Join
                us at FYIorg, where together, we can find solace, understanding,
                and the strength to navigate life&apos;s challenges as we
                discover and embrace our true selves.
                <br />
                <br />
                ~ Sanya Ahuja
                <br />
                Founder of FYIorg
              </p>
              <Quote className="text-white" size={40} />
            </div>
            <div className="bg-white/20 rounded-full w-48 aspect-square absolute top-0 left-24 z-0"></div>
            <div className="bg-white/20 rounded-full w-[50vh] aspect-square absolute md:top-[25%] top-[50%] right-0 z-0"></div>
          </div>
        </div>

        <div className="md:px-48 px-4 md:py-24 py-10 flex flex-col md:flex-row items-center">
          <div className="w-4/4 md:w-3/5">
            <p className="text-xl md:text-4xl font-extrabold text-pink-600 py-4 ">
              Our Vision
            </p>
            <p className="text-pink-600 md:text-lg text-base">
              At Finding You and I (FYI), we are dedicated to supporting
              teenagers facing personal challenges. We believe that every
              concern, no matter how small, deserves attention, as mental health
              is a crucial component of overall well-being. In today&apos;s
              digital age, the world can feel increasingly isolating, especially
              during our lowest moments when we desperately need someone to talk
              to.
              <br />
              In a fast-paced world dominated by social media, it&apos;s easy to
              compare our real lives to the curated reel lives of others,
              fueling insecurities and exacerbating mental health issues. FYI
              provides a safe space for anyone struggling with these feelings,
              offering emotional support and understanding. While our primary
              focus is on today&apos;s youth, our mission is to be a supportive
              presence for anyone in need, fostering a community where mental
              health is prioritized and every voice is heard.
            </p>
          </div>
          <div className="md:w-2/5 w-4/4">
            <Image src={cater} />
          </div>
        </div>

        <div className=" bg-[#ed6ba7] shadow-lg py-10">
          <p className="text-3xl md:text-4xl font-extrabold text-white py-2 md:py-4 text-center ">
            Emoshpere
          </p>
          <div className="flex flex-col items-center">
            <p className="text-white font-medium py-5 md:py-12 text-center md:w-2/3 w-3/3 px-5">
              We understand that therapy can be expensive and inaccessible for
              many due to financial and personal reasons. Yet, the need for
              emotional support remains critical. At FYI, we recognize the fear
              of judgment and concerns about privacy that often prevent people
              from sharing their struggles. That&apos;s why we&apos;ve created
              the EMOSPHERE—a safe, anonymous space where your emotions are
              valued and respected.
              <br />
              <br />
              In the EMOSPHERE, you can share your experiences and receive
              responses from psychologists, all while maintaining your
              anonymity. This allows you to open up without fear of judgment.
              While EMOSPHERE is not a replacement for professional therapy, it
              aims to bridge the gap between those seeking mental health support
              and those who can provide it in an accessible, compassionate way.{" "}
            </p>

            <Link
              href={"/emosphere"}
              className="bg-white hover:bg-white text-pink-700 border-2 rounded-full border-pink-700 cursor-pointer p-5 mx-auto no-underline"
            >
              Try Emoshpere Now!
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
