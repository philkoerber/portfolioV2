import React from "react";
import Zapper from "../utils/Zapper";

const musicEquipment = [
  "Akai MPC",
  "MOOG",
  "Max/MSP",
  "NI Reactor",
  "Ableton",
  "Native Instruments Maschine",
  "Korg Kronos",
  "Roland TR-808 and TR-909",
  "Moog Subsequent 37 or Mother-32",
  "Pro Tools",
  "Logic Pro X",
  "Bitwig Studio",
  "Elektron Analog Four",
  "Spectrasonics Omnisphere",
  "Serato DJ Pro",
  "Aphex Twin's 'Syro' Patch Configurations",
  "Modular Synthesizer",
  "Arturia V Collection",
  "Field Recording Equipment",
  "Native Instruments Komplete",
  "Dave Smith Instruments Prophet",
  "Teenage Engineering OP-1",
  "Arturia Buchla Easel V",
  "Yamaha DX7",
  "UAD-2 (Universal Audio DSP)",
  "Haken Continuum Fingerboard",
];

function Equipment(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 py-20">
      {musicEquipment.map((item) => {
        return (
          <Zapper>
            <div className="text-center">{item}</div>
          </Zapper>
        );
      })}
    </div>
  );
}

export default Equipment;
