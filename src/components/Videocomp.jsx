import React, { useEffect, useRef } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Videocomp = () => {
  const { roomID } = useParams()


console.log(roomID);

  const containerRef = useRef(null);
  

  useEffect(()=>{



    let myMeeting = async (element) => {

      if (!roomID || !containerRef.current) return;
        
      
      // generate Kit Token
       const appID =497071941;
       const serverSecret = "234ca29a45616d777a5ebfbb1e3c356f";
       const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),"Anonymous",);
 
     
      // Create instance object from Kit Token.
       const zp = ZegoUIKitPrebuilt.create(kitToken);
       // start the call
       zp.joinRoom({
         container: element,
         sharedLinks: [
           {
             name: 'Personal link',
             url:
              window.location.protocol + '//' + 
              window.location.host + window.location.pathname +
               '?roomID=' +
               roomID,
           },
         ],
         scenario: {
           mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
         },
       });
 
     
   };


   myMeeting();
   return ()=>{
    if (containerRef.current) {
      containerRef.current.innerHTML="";
    }
   }

  },[roomID]);
  

  return (
    <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}

export default Videocomp
