import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const { randomBytes } = require("crypto");

import IntroText from "./components/introText";

export default function Home() {
  const [roomID, setRoomID] = useState("");

  const genRoomID = randomBytes(4).toString("hex");

  function handleChange(event) {
    const newRoomID = event.target.value;
    setRoomID(newRoomID);
  }

  return (
    <div>
      <Head>
        <title>Retrotime</title>
        <meta name="description" content="Scrum teams retrospective" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-br from-purple-900 to-orange-600 px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-4xl text-orange-300 font-bold">Ceremoney</h1>
            <ul className="flex">
              <li>
                <Link
                  href={{
                    pathname: "/room",
                    query: { roomID: genRoomID, type: "CreateRoom" },
                  }}
                >
                  <div className=" w-28 cursor-pointer bg-gradient-to-bl from-purple-200 to-orange-600 px-4 py-2 rounded-lg">
                    <a>
                      <h3>Get Started</h3>
                    </a>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-between">
            <div className=" text-yellow-100">
              <IntroText />
              <div className="px-5">
                <Link
                  href={{
                    pathname: "/room",
                    query: { roomID: genRoomID, type: "CreateRoom" },
                  }}
                >
                  <div className=" w-28 cursor-pointer bg-gradient-to-bl from-purple-200 to-orange-600 px-4 py-2 rounded-lg">
                    <a>
                      <h3 className="text-purple-900">Get Started</h3>
                    </a>
                  </div>
                </Link>
              </div>
              <p className="py-5">
                Or, If your scrum master has provided you the room ID to join,
                you can use it join below
              </p>
              <div className="px-5">
                <form action="/room">
                  <div className="flex space-x-3">
                    <input
                      placeholder=" Enter room ID"
                      name="roomID"
                      value={roomID}
                      onChange={handleChange}
                      required
                      className="rounded-lg text-purple-900 pl-3"
                    />
                    <button
                      type="Submit"
                      className=" cursor-pointer bg-gradient-to-bl from-purple-200 to-teal-600 px-4 py-2 rounded-lg"
                    >
                      <h3 className="text-purple-900">Join room</h3>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <Image src="/images/meeting.png" height={450} width={700} />
          </div>
        </section>
      </main>
    </div>
  );
}
