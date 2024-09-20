import Login from "@/components/Login";
import Register from "@/components/Register";
import Question from "@/components/Question";
import Image from "next/image";
import Scheduler from "@/components/scheduler";
import WarningModel from "@/components/WarningModel";

export default function Home() {
  return (
   <>
    <Login />
    <Register />
    <Question />
    <Scheduler />
    <WarningModel/>
   </>
  );
}
