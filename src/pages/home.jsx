import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { Link } from "react-router-dom";
import Form from "./Form";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/30     bg-cover bg-center" />
        <div className="max-w-8xl container relative  mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12 ">
              <div className="mx-auto my-10 mt-20" >
               <img src="/img/Logo-1.png"  className=" block w-40 mx-auto"/>
                <img src="/img/Logo-name-iso.png"  className=" block w-40 mx-auto"/>
              </div>
              <Typography
                variant="h1"
                color="white"
                className="mb-9 font-medium text-4xl md:text-5xl "
              > 
              Innovate your transactions with us
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
               We providing seamless, affordable, and secure payment solutions. Explore our range of innovative products available for purchase.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="md:-mt-28 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Robust Security Assurance:
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
               Experience peace of mind with our robust security measures, ensuring the utmost protection for your sensitive payment data.
                <br />
                <br />
                We prioritize cutting-edge encryption technology, ensuring that every transaction adheres to PCI DSS compliance. Your financial data is not just secure it's confidential, providing you with peace of mind for every transaction.
              </Typography>
              {/* <Button variant="filled">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/Security.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Guarding Transactions</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Fortified Security
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  Ensuring Your Security: Our card machines are fully PCI DSS compliant, prioritizing the utmost security for your transactions.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Explore Our Products" heading="Discover Your Perfect Solutions">
          Dive into the features of our cutting-edge products designed to elevate your business. Uncover the potential for seamless transactions and explore the innovation behind each offering.
          </PageTitle>
          {/* <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4 justify-items-center justify-center"> */}
          <div className="mt-22 flex flex-col gap-12 gap-x-24 md:flex-row p-5  justify-between ">
            {teamData.map(({ img, name, position, socials }) => (
            <div className="hover:scale-105">
              <TeamCard 
                key={name}
                img={img}
                name={name}
                position={position}
                // socials={
                //   <div className="flex items-center gap-2 ">
                //     {socials.map(({ color, name }) => (
                //       <a href="/google">
                //       <IconButton key={name} color={color} variant="text">
                //         <i className={`fa-brands text-xl fa-${name}`} />
                //       </IconButton>
                //       </a>
                //     ))}
                //   </div>
                // }
              />
              </div>
            ))}
          </div>
          </div>
        
      </section>
      <section className="relative bg-white py-10 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build Secure Transactions">
          Forge success in your business with our secure payment solutions. Our innovative card machines, including Smart Card and Poynt P61B, create a foundation for efficient and reliable transactions. Elevate your payment experience with us.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          
          <Form/>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
