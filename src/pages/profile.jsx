import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  PhoneIcon
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="-mt-20 w-40">
                  <Avatar
                    src="/img/Round-Logo.png"
                    alt="Profile picture"
                    variant="circular"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <Typography variant="h4" color="blue-gray">
                    Paymi
                  </Typography>
                  <Typography variant="paragraph" color="gray" className="!mt-0 font-normal">vinopaymi@gmail.com</Typography>
                </div>
              </div>

              <div className="mt-10 mb-10 flex lg:flex-col justify-between items-center lg:justify-end lg:mb-0 lg:px-4 flex-wrap lg:-mt-5">
                <Link to={"/Contact"}>
                <Button className="bg-gray-900 w-fit lg:ml-auto">Contact</Button>
                </Link>
                <div className="flex justify-start py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      78+
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-800"
                    >
                      customer
                    </Typography>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      10+
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-800"
                    >
                      Experience
                    </Typography>
                  </div>
                  <div className="p-3 text-center lg:mr-4">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      24/7
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-800"
                    >
                     Support
                    </Typography>
                  </div>
                </div>

              </div>
            </div>
            <div className="-mt-4 container space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="-mt-px h-4 w-4 text-gray-800" />
                <Typography className="font-medium text-gray-800">
                 London
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="-mt-px h-4 w-4 text-gray-800" />
                <Typography className="font-medium text-gray-800">
                  07534 333494
                </Typography>
              </div>
              {/* <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  University of Computer Science
                </Typography>
              </div> */}
            </div>
            <div className="mb-10 py-6">
              <div className="flex w-full flex-col items-start lg:w-1/2">
                <Typography className="mb-6 font-normal text-gray-800">
               <span className="text-xl text-gray-600 font-extrabold" > Welcome to Paymi</span> <br></br> Your Trusted Payment Partner.

At Paymi, we extend a warm welcome to businesses seeking a reliable and innovative payment partner. With a legacy spanning over 15 years in the industry, Paymi has emerged as a beacon of trust and excellence. We understand that the heart of every successful business lies in seamless and secure transactions, and that's precisely what we promise to deliver.<br></br><br/>

<span className="font-bold"> With over 15 years of industry expertise, Paymi is committed to delivering cutting-edge payment solutions tailored to your business needs.</span> <br/> <br/>

Our journey is a testament to years of dedicated service and continuous innovation. Paymi is not just a payment solution provider; we are your strategic ally in navigating the evolving landscape of financial transactions. We take pride in our extensive industry knowledge, which enables us to anticipate and meet the unique needs of businesses across various sectors. <br/><br/>

Our commitment goes beyond offering mere transaction tools. We are dedicated to crafting cutting-edge payment solutions that align with the specific requirements of your business. Whether you are a startup, a retail giant, or an on-the-go service, Paymi is here to empower your financial operations with efficiency and security.<br/><br/>

At Paymi, we believe in the power of partnerships. Our success is intertwined with the success of every business that chooses us as their payment partner. Join hands with Paymi, where experience meets innovation, and embark on a journey towards unparalleled financial success.<br/>
                </Typography>
                {/* <Button variant="text">Show more</Button> */}
              </div>
            </div>
          </div>


        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default Profile;
