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
  "MIDI Controllers (e.g., Novation Launchpad, Ableton Push)",
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
    <div className="flex flex-col items-center justify-center h-screen">
      {musicEquipment.map((item) => {
        return (
          <Zapper>
            <div>{item}</div>
          </Zapper>
        );
      })}
    </div>
  );
}

export default Equipment;
