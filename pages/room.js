import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import SessionModel from "../models/sessionModel";
import connectDB from "../utils/connectdb";
import avatars from "../models/avatars";
import RoomSubSM from "./components/roomComponentSM";
import RoomSubTM from "./components/roomComponentTM";

export default function Room({ sessions }) {
  async function addNewSession(session) {
    await fetch("api/addSession", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sessionID: session,
      }),
    });
  }

  const router = useRouter();
  console.log(router.query.roomID + " " + router.query.type);
  const { roomID, type } = router.query;

  if (type === "CreateRoom") {
    const userAvatar = avatars[0];
    addNewSession(roomID);
    const constPath = "http://localhost:3000/room?roomID=";
    const roomURL = constPath + roomID;
    return (
      <RoomSubSM userAvatar={userAvatar} roomID={roomID} roomURL={roomURL}/>
    );
  } else {
    const sessionExists = sessions.filter((session) => {
      return session.sessionID === roomID;
    });
    
    if (sessionExists) {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      const userAvatar = avatars[randomNumber];
      return (
        <RoomSubTM userAvatar={userAvatar} roomID={roomID}/>
      );
    } else {
      return (
        <div className={styles.container}>
          <h1>
            Session does not exists. Go back, check your room ID and retry!!!
          </h1>
        </div>
      );
    }
  }
}

export async function getServerSideProps() {
  try {
    await connectDB();

    const stuff = await SessionModel.find();

    if (!stuff) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        sessions: JSON.parse(JSON.stringify(stuff)),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
