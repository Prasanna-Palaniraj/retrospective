import useSWR from "swr";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function RenderThings({ type, uID }) {

  async function handleDelete(itemID){
    
    await fetch("api/deleteRetro", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        itemID: itemID
      })
    });    
  }

  const { data: retroItems, error } = useSWR("api/read", fetcher, {
    refreshInterval: 1000,
  });
  if (error) {
    return <div>{error}</div>;
  }
  if (!retroItems) {
    return <div>Loading...</div>;
  } else {
    return retroItems
      .filter((item) => item.type == type)
      .map((thing) => {
        return (
          <div key={thing._id} className="bg-orange-100 p-2 rounded-lg text-center space-y-3 m-3 relative">
            <p>{thing.description}</p>
            
            {(uID === "1") &&
            <button onClick={() => handleDelete(thing._id)} className="absolute bottom-0 right-2 hover:bg-red-400 p-1 hover:rounded-2xl">
              <Image  src="/images/delete.png" height={20} width={20} alt="Delete"/>
            </button>
            }
          </div>
        );
      });
  }
}


/*
<p>
              Posted by: <i>{thing.postedBy}</i>
            </p>
            */