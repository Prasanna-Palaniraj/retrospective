import Link from "next/link";
import Image from "next/image";

export default function AvatarCard(props) {
  const { image, description, rID, uID } = props;
  return (
    <Link href={{ pathname: "/retro", query: { rID: rID, uID: uID } }}>
      <div className="w-1/2 bg-teal-700  flex shadow-md rounded-md p-5 space-x-4 break-all  hover:border-blue-500 hover:border-2">
        <Image
          src={image}
          height={300}
          width={300}
          alt="user avatar"
          className="rounded-lg"
        />
        <div className="flex flex-col justify-center space-y-10">
          <p className="break-normal">{description}</p>
          <p className="break-normal">Click here to proceed</p>
        </div>
      </div>
    </Link>
  );
}

/*
<FcNext className="text-3xl self-center"/>

*/
