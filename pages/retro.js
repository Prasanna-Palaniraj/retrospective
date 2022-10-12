// things went well section
// things did not go well section
// enhancements section
// sections to display real time update from users -- pending
// users will be able to add their input -- done
//, edit their input -- pending

import Head from "next/head";
import AddItem from "./components/additem";
import RenderThings from "./components/things";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Retro() {
  const router = useRouter();
  const { uID, rID } = router.query;

  async function addToThings(thing) {
    const { description, postedBy, type, session } = thing;

    const putRes = await fetch("api/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        description: description,
        postedBy: postedBy,
        type: type,
        session: session,
      }),
    });
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
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-yellow-100">Retro room</h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-slate-200 rounded-lg text-center p-2 m-5 w-1/3">
              <h2 className="text-xl font-semibold pt-2">Things that went well</h2>
              {uID !== "2" && (
                <AddItem onAdd={addToThings} type="Good" roomID={rID} />
              )}
              <RenderThings type="Good" uID={uID} rID={rID}/>
            </div>
            <div className="bg-slate-200 rounded-lg  text-center p-2 m-5 w-1/3">
            <h2 className="text-xl font-semibold pt-2">Things that did not go well</h2>
              {(uID === "2" || uID === "1") && (
                <AddItem onAdd={addToThings} type="Bad" roomID={rID} />
              )}
              <RenderThings type="Bad" uID={uID} rID={rID}/>
            </div>
            <div className="bg-slate-200 rounded-lg  text-center p-2 m-5 w-1/3">
            <h2 className="text-xl font-semibold pt-2">Enhancements</h2>
              {uID !== "2" && (
                <AddItem onAdd={addToThings} type="Enhancement" roomID={rID} />
              )}
              <RenderThings type="Enhancement" uID={uID} rID={rID}/>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          {uID === "2" && (
            <button>
              <a href="javascript:window.print()">Download as a PDF</a>{" "}
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
