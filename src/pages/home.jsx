import React, { useEffect } from "react";
import { UserAuth } from "#context/AuthContext";
import { realTimeDB } from "#config/firebase";
import { onValue, ref, set } from "firebase/database";
const Home = () => {
  const { user } = UserAuth();
  const uid = user?.uid;

  const SwitchOn = (device, switchInfo) => {
    set(ref(realTimeDB, uid + "/" + device + "/" + switchInfo), {
      state: true,
    });
  };
  const SwitchOff = (device, switchInfo) => {
    set(ref(realTimeDB, uid + "/" + device + "/" + switchInfo), {
      state: false,
    });
  };

  useEffect(() => {
    const starCountRef = ref(realTimeDB, uid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h1>{user?.displayName}</h1>
      <button onClick={() => SwitchOn("device1", "switch1")}>SwitchOn</button>
      <button onClick={() => SwitchOff("device1", "switch1")}>SwitchOff</button>
    </div>
  );
};

export default Home;
