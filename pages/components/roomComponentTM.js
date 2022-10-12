import Link from "next/link";
import AvatarCard from "./userAvatar";
import Head from "next/head";
import IntroText from "./introText";

export default function RoomSubTM({ userAvatar, roomID }) {
  const { image, description, id } = userAvatar;
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
                <Link href="#">
                  <div className="mx-auto w-22 cursor-pointer bg-gradient-to-bl from-purple-200 to-orange-600 px-4 py-2 rounded-lg">
                    <a>
                      <h3 className="mx-auto">About us</h3>
                    </a>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-between text-yellow-100">
            <div className="flex flex-col space-y-10">
              <IntroText />
            </div>
            <AvatarCard
              image={image}
              description={description}
              rID={roomID}
              uID={id}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
