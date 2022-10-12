import { GiPartyPopper } from "react-icons/gi";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { MdSelfImprovement } from "react-icons/md";

export default function IntroText() {
  return (
    <div>
      <h1 className="text-3xl pb-6">
        Welcome to <span className="font-semibold">Retrospective!!!</span>
      </h1>
      <p>Lets take some time to think about the last sprint to ... </p>
      <div className="flex space-x-3 px-5 pt-10 pb-5">
        <p>Appreciate the accomplishments </p>
        <GiPartyPopper className="text-2xl" />
      </div>
      <div className="flex space-x-3 p-5">
        <p>Critically analyse issues </p>
        <AiOutlineIssuesClose className="text-2xl" />
      </div>
      <div className="flex space-x-3 p-5">
        <p>Think about Enhancements </p>
        <MdSelfImprovement className="text-2xl" />
      </div>
    </div>
  );
}
