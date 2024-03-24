"use client";
import React, { useState, useEffect } from "react";
import CardTeam from "./components/CardTeam";

interface RandomUser {
  login: {
    uuid: string;
  };
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
}

async function getRandomUser(): Promise<RandomUser[]> {
  const response = await fetch("https://randomuser.me/api/?results=8", {
    cache: "no-store",
  });
  const { results } = await response.json();
  return results;
}

const Teampage: React.FC = () => {
  const [randomUsers, setRandomUsers] = useState<RandomUser[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getRandomUser();
      setRandomUsers(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className=" flex h-screen w-full flex-col items-center  justify-center bg-[url('/BGTeam.jpg')] bg-cover text-white  ">
        <div className=" mt-24 grid justify-items-center gap-y-4 pb-10 text-center max-lg:text-2xl lg:tracking-wide ">
          <div className=" text-balance font-bold tracking-wide md:text-7xl ">
            <h1>Core Team</h1>
          </div>
        </div>
      </div>
      <div>
        <section className=" justify-center bg-gray-100  ">
          <h1 className="pt-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Our Journey
          </h1>
          <div className="mx-auto flex  flex-wrap justify-center gap-12 px-4 py-16">
            {randomUsers.map((user: RandomUser, index: number) => (
              <div key={index}>
                <CardTeam
                  image={user.picture.large}
                  name={`${user.name.first} ${user.name.last}`}
                  email={user.email}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Teampage;
