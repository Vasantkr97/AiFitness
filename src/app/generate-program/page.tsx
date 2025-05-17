"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";



const GenerateProgramPage  = () => {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setSpeaking] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [callEnded, setCallEnded] = useState(false);

  const { user } = useUser();
  const router = useRouter();

  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalError = console.error;
    //Override console.error to ignore "Meeting has ended" errors
    console.error = function (msg, ...args) {
      if ( msg && msg.includes("Meeting has ended") || (args[0] && args[0].toString().includes("Meeting has ended"))) {
        console.log("Ignoring know error: Meeting has ended");
        return; 
      }

      //pass all other errors to the original handler
      return originalError.call(console, msg, ...args);
    }

    //restore original handler on Unmount
    return () => {
      console.error = originalError;
    }
    
  }, []);


  //auto-Scroll messages
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  },[messages]);

  //navigate user to profile page after the call ends
  useEffect(() => {
    if (callEnded) {
      const redirectTimer = setTimeout(() => {
        router.push("/profile");
      }, 1500); 
    }
  })

 
  return (
    <div>GenerateProgramPage </div>
  )
}

export default GenerateProgramPage 