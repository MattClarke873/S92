const questionBank4 = [
{
    id: 401,
    category: 'ATA 22',
    question: 'Where is the AFCS Control Panel located?',
    options: { a: 'Bottom of the left Avionics Rack', b: 'Centre of the lower console', c: 'Bottom of the right Avionics Rack' },
    correct: 'b',
  },
  {
    id: 402,
    category: 'ATA 22',
    question: 'How many Flight Control Computers (FCCs) are there in the S-92 aircraft?',
    options: { a: 'One', b: 'Two', c: 'Three' },
    correct: 'b',
  },
  {
    id: 403,
    category: 'ATA 22',
    question: 'What is the maximum control authority of each SAS Actuator?',
    options: { a: '2%', b: '5%', c: '10%' },
    correct: 'c',
  },
  {
    id: 404,
    category: 'ATA 22',
    question: 'How many Trim Actuators are there in the S-92 aircraft?',
    options: { a: 'Two', b: 'Four', c: 'Six' },
    correct: 'b',
  },
  {
    id: 405,
    category: 'ATA 22',
    question: 'Where are the Rate Gyros located in the S-92 aircraft?',
    options: { a: 'Under the nose of the aircraft', b: 'In the cabin roof', c: 'On the left and right sides of the aircraft' },
    correct: 'c',
  },
  {
    id: 406,
    category: 'ATA 22',
    question: 'What signals do the accelerometers provide to the FCC?',
    options: { a: 'Rate movement signals', b: 'Acceleration and deceleration signals', c: 'Gust alleviation signals' },
    correct: 'b',
  },
  {
    id: 407,
    category: 'ATA 22',
    question: 'Where are the AHRS units located in the S-92 aircraft?',
    options: { a: 'In the cabin roof', b: 'On the left and right walls of the ramp area', c: 'Under the nose of the aircraft' },
    correct: 'b',
  },
  {
    id: 408,
    category: 'ATA 22',
    question: 'What information does the Air Data Computer (ADC) provide to the AFCS?',
    options: { a: 'Pitch and roll attitude', b: 'Altitude and airspeed', c: 'Rate of movement information' },
    correct: 'b',
  },
  {
    id: 409,
    category: 'ATA 22',
    question: 'What function does the Radar Altimeter (RADALT) provide?',
    options: { a: 'RADALT Altitude Hold', b: 'FADEC control', c: 'Rate Gyro calibration' },
    correct: 'a',
  },
  {
    id: 410,
    category: 'ATA 22',
    question: 'How many Rotary Variable Differential Transformers (RVDTs) are there in the S-92 aircraft?',
    options: { a: 'Two', b: 'Four', c: 'Six' },
    correct: 'c',
  },
  {
    id: 411,
    category: 'ATA 22',
    question: 'What is the purpose of the Beep Trim switches?',
    options: { a: 'Activate the autopilot', b: 'Release the magnetic clutch', c: 'Move the trim actuators' },
    correct: 'c',
  },
  {
    id: 412,
    category: 'ATA 22',
    question: 'When can the Reversionary Control Panel (RCP) be used for AHRS reversionary?',
    options: { a: 'Only in single autopilot', b: 'Only in dual autopilot', c: 'In both single and dual autopilot' },
    correct: 'a',
  },
  {
    id: 413,
    category: 'ATA 22',
    question: 'What does the Remote Instrument Controller control?',
    options: { a: 'FADEC', b: 'Trim Actuators', c: 'Navigation sources' },
    correct: 'c',
  },
  {
    id: 414,
    category: 'ATA 22',
    question: 'What does the COURSE 1/2 knob on the Remote Instrument Controller do?',
    options: { a: 'Controls pitch and roll', b: 'Selects navigation source for MFDs 1, 2, and 5', c: 'Sets airspeed points' },
    correct: 'b',
  },
  {
    id: 415,
    category: 'ATA 22',
    question: 'What does the Heading knob on the Remote Instrument Controller control?',
    options: { a: 'Collective movement', b: 'Yaw input', c: 'Sets the heading bug to a new heading' },
    correct: 'c',
  },
  {
    id: 416,
    category: 'ATA 22',
    question: 'What information is sent from the engine FADECs to the FCCs?',
    options: { a: 'Airspeed information', b: 'Torque, Ng, and TGT information', c: 'Pitch and roll attitude' },
    correct: 'b',
  },
  {
    id: 417,
    category: 'ATA 22',
    question: 'What controls are in series with the Boost and SAS actuators in the Flight Controls?',
    options: { a: 'Trim Actuators', b: 'Rate Gyros', c: 'FADEC' },
    correct: 'a',
  },
  {
    id: 418,
    category: 'ATA 22',
    question: 'Where are the Display Control Panels (DCPs) used to select a NAV source located?',
    options: { a: 'Centre of the lower console', b: 'Under the nose of the aircraft', c: 'On the Instrument Panel' },
    correct: 'c',
  },
  {
    id: 419,
    category: 'ATA 22',
    question: 'What is the purpose of the Trim Release switches?',
    options: { a: 'Activate the autopilot', b: 'Release the magnetic clutch', c: 'Select navigation sources' },
    correct: 'b',
  },
  {
    id: 420,
    category: 'ATA 22',
    question: 'What determines if the aircraft movement is an input by the pilot or from external forces?',
    options: { a: 'Rate Gyros', b: 'RVDTs', c: 'Accelerometers' },
    correct: 'b',
  },

  {
    id: 421,
    category: 'ATA 22',
    question: 'What does SAS stand for?',
    options: { a: 'Stability Augmentation System', b: 'System Attitude Sensor', c: 'Secondary Actuator System' },
    correct: 'a',
  },
  {
    id: 422,
    category: 'ATA 22',
    question: 'How many control channels does each SAS system have?',
    options: { a: 'One', b: 'Two', c: 'Three' },
    correct: 'b',
  },
  {
    id: 423,
    category: 'ATA 22',
    question: 'What is the purpose of rate damping in the SAS?',
    options: { a: 'To return the aircraft to its original attitude', b: 'To provide rapid response corrections to unwanted movements', c: 'To engage the autopilot system' },
    correct: 'b',
  },
  {
    id: 424,
    category: 'ATA 22',
    question: 'When SAS 1 or SAS 2 is switched off at the Control Panel, what happens to the system functions?',
    options: { a: 'They continue to operate normally', b: 'They are temporarily disabled', c: 'They switch to SSAS automatically' },
    correct: 'b',
  },
  {
    id: 425,
    category: 'ATA 22',
    question: 'Which hydraulic system supplies SAS 2 when SAS Hydraulics are ON?',
    options: { a: '#1 hydraulic system', b: '#2 hydraulic system', c: 'Both #1 and #2 hydraulic systems' },
    correct: 'b',
  },
  {
    id: 426,
    category: 'ATA 22',
    question: 'What happens if the hydraulic pressure drops below 1100 PSI in the SAS actuators?',
    options: { a: 'The SAS Hyd Cmd On signal is removed, and the actuator is centred and locked', b: 'The SAS actuator increases control authority', c: 'The aircraft enters emergency descent mode' },
    correct: 'a',
  },
  {
    id: 427,
    category: 'ATA 22',
    question: 'In the SAS Collective Hydraulics Schematics, what is the purpose of the second turn-on valve for the Collective actuators?',
    options: { a: 'To control SAS actuator authority', b: 'To provide additional hydraulic pressure', c: 'To enable the Autopilot system' },
    correct: 'a',
  },
  {
    id: 428,
    category: 'ATA 22',
    question: 'When is the SSAS used?',
    options: { a: 'As a primary system', b: 'When PSAS fails', c: 'Only during autopilot engagement' },
    correct: 'b',
  },
  {
    id: 429,
    category: 'ATA 22',
    question: 'What caution is displayed if SSAS fails while selected?',
    options: { a: 'SAS DGRD', b: 'AFCS DGRD', c: 'SAS PRESS' },
    correct: 'b',
  },
  {
    id: 430,
    category: 'ATA 22',
    question: 'What sensors does SSAS use for aircraft attitude rate information?',
    options: { a: 'Rate Gyros only', b: 'Accelerometers only', c: 'Fibre Optic Gyros inside AHRS' },
    correct: 'c',
  },
  {
    id: 431,
    category: 'ATA 22',
    question: 'In SAS Enhancements, what is the maximum control authority available from each SAS actuator?',
    options: { a: '2.5%', b: '5%', c: '10%' },
    correct: 'b',
  },
  {
    id: 432,
    category: 'ATA 22',
    question: 'What mode is engaged when all three Trim switches are ON?',
    options: { a: 'Basic SAS', b: 'Auto-trim', c: 'SAS Enhancements' },
    correct: 'b',
  },
  {
    id: 433,
    category: 'ATA 22',
    question: 'When is Attitude Hold (ATT) engaged?',
    options: { a: 'Only during autopilot engagement', b: 'After takeoff', c: 'Weight off wheels and with AP switch ON' },
    correct: 'c',
  },
  {
    id: 434,
    category: 'ATA 22',
    question: 'In dual Autopilot, what happens if there is a hard-over by one side?',
    options: { a: 'The aircraft enters emergency descent mode', b: 'The other side cancels it out resulting in a slow uncommanded movement', c: 'The autopilot disengages automatically' },
    correct: 'b',
  },
  {
    id: 435,
    category: 'ATA 22',
    question: 'In single Autopilot, what inhibits and locks out the Trim Actuator?',
    options: { a: 'Overspeed in the Trim Actuator', b: 'Autopilot failure', c: 'Loss of hydraulic pressure' },
    correct: 'a',
  },
  {
    id: 436,
    category: 'ATA 22',
    question: 'How does Attitude Hold bring the aircraft back to its attitude prior to an uncommanded movement?',
    options: { a: 'By using the Trim Actuators only', b: 'By adjusting the flight controls in the cockpit', c: 'By using multiple sensors and RVDTs to slowly bring the aircraft back' },
    correct: 'c',
  },
  {
    id: 437,
    category: 'ATA 22',
    question: 'What condition is necessary for ATT to be operational?',
    options: { a: 'AP must be ON', b: 'The aircraft must be in cruise mode', c: 'Weight off wheels' },
    correct: 'c',
  },
  {
    id: 438,
    category: 'ATA 22',
    question: 'How many sensors does each FCC normally receive for Pitch, Roll, and Yaw data in ATT Hold?',
    options: { a: 'Two', b: 'Three', c: 'Four' },
    correct: 'c',
  },
  {
    id: 439,
    category: 'ATA 22',
    question: 'What is the 3 out of 4 concept in ATT Hold?',
    options: { a: 'Three Trim Actuators must be operational', b: 'Three out of four sensors must be available for ATT to engage', c: 'Three autopilot systems must be selected' },
    correct: 'b',
  },
  {
    id: 440,
    category: 'ATA 22',
    question: 'What sensors are used for Longitudinal Stick Stability (LSS) adjustments?',
    options: { a: 'Rate Gyros only', b: 'ADCs only', c: 'Accelerometers and ADCs' },
    correct: 'c',
  },

  {
    id: 441,
    category: 'ATA 22',
    question: 'What indicates the reference settings of the coupled and decoupled modes?',
    options: { a: 'Weight Off Wheels', b: 'Flight Director Bars', c: 'Mode Select Panel' },
    correct: 'b',
  },
  
  {
    id: 442,
    category: 'ATA 22',
    question: 'How is coupling to the Flight Director achieved?',
    options: { a: 'By pressing the ALT key', b: 'By pressing the COUPLE button', c: 'By adjusting the VS setting' },
    correct: 'b',
  },
  
  {
    id: 443,
    category: 'ATA 22',
    question: 'Which button on the Mode Select Panel controls the brightness of the display?',
    options: { a: 'CRUS', b: 'APP', c: 'TEST' },
    correct: 'c',
  },
  
  {
    id: 444,
    category: 'ATA 22',
    question: 'What is displayed at the top of the PFD in green when coupling occurs?',
    options: { a: 'DECOUPLE', b: 'CPL and FD1 or FD2', c: 'MSP Failure' },
    correct: 'b',
  },
  
  {
    id: 445,
    category: 'ATA 22',
    question: 'How can the AFCS be decoupled for an individual axis?',
    options: { a: 'Press STBY key on Mode Selector Panel', b: 'Press the COUPLE button', c: 'Press the cyclic STBY button' },
    correct: 'a',
  },
  
  {
    id: 446,
    category: 'ATA 22',
    question: 'What is announced when any axis fails or is intentionally deselected by the pilot?',
    options: { a: 'DECOUPLE', b: 'MSP Failure', c: 'Uncoupled Manual FD' },
    correct: 'a',
  },
  
  {
    id: 447,
    category: 'ATA 22',
    question: 'Which axis does the Collective lateral beeper have no function in all coupled modes?',
    options: { a: 'Pitch', b: 'Roll', c: 'Yaw' },
    correct: 'b',
  },
  
  {
    id: 448,
    category: 'ATA 22',
    question: 'How is Airspeed Hold coupled?',
    options: { a: 'Press the HDG key', b: 'Press the IAS key', c: 'Press the ALT key' },
    correct: 'b',
  },
  
  {
    id: 449,
    category: 'ATA 22',
    question: 'What is displayed digitally above the IAS indicator when Airspeed Hold is coupled?',
    options: { a: 'Reference Radar height', b: 'Reference airspeed', c: 'Reference altitude' },
    correct: 'b',
  },
  
  {
    id: 450,
    category: 'ATA 22',
    question: 'How is Heading Hold coupled?',
    options: { a: 'Press the HDG key', b: 'Press the IAS key', c: 'Press the ALT key' },
    correct: 'a',
  },
  
  {
    id: 451,
    category: 'ATA 22',
    question: 'What action does the Go Around (GA) mode initiate?',
    options: { a: 'Level the aircraft', b: 'Pitch down', c: 'Yaw left' },
    correct: 'a',
  },
  
  {
    id: 452,
    category: 'ATA 22',
    question: 'Which Flight Control Computers can fly the aircraft using the FMS navigation?',
    options: { a: 'ADCs', b: 'AHRS', c: 'FCCs' },
    correct: 'c',
  },
  
  {
    id: 453,
    category: 'ATA 22',
    question: 'What happens when ALTP is armed?',
    options: { a: 'The aircraft descends rapidly', b: 'VS is coupled', c: 'The bug is displayed in yellow' },
    correct: 'b',
  },
  
  {
    id: 454,
    category: 'ATA 22',
    question: 'How can the reference setting on the Pitch axis be changed?',
    options: { a: 'Rotate the heading control', b: 'Press the VS soft key', c: 'Use the cyclic longitudinal beeper' },
    correct: 'c',
  },
  
  {
    id: 455,
    category: 'ATA 22',
    question: 'When is CAP displayed next to ALTP on the Mode Selector Panel?',
    options: { a: 'When the aircraft is descending', b: 'Within 300ft of the pre-selected altitude', c: 'During Go Around (GA) mode' },
    correct: 'b',
  },
  
  {
    id: 456,
    category: 'ATA 22',
    question: 'What does the Go Around (GA) mode set the Vertical Speed (VS) to on the Collective axis?',
    options: { a: '500 ft/min climb', b: '750 ft/min climb', c: 'Maintains the current VS' },
    correct: 'b',
  },
  
  {
    id: 457,
    category: 'ATA 22',
    question: 'How is RALT Hold coupled?',
    options: { a: 'Press the RALT soft key', b: 'Press the ALT key', c: 'Press the IAS key' },
    correct: 'a',
  },
  
  {
    id: 458,
    category: 'ATA 22',
    question: 'Which navigation source is selected from the Display Control Panel (DCP)?',
    options: { a: 'FMS navigation', b: 'VOR Approach', c: 'Deceleration (DCL)' },
    correct: 'a',
  },
  
  {
    id: 459,
    category: 'ATA 22',
    question: 'What is the function of the collective lateral beeper in all coupled modes?',
    options: { a: 'Yaw control', b: 'Roll control', c: 'Pitch control' },
    correct: 'c',
  },
  
  {
    id: 460,
    category: 'ATA 22',
    question: 'When does the CAP indication disappear during ALTP mode?',
    options: { a: 'When the aircraft is climbing', b: 'At the pre-selected altitude', c: 'During the Go Around (GA) mode' },
    correct: 'b',
  },
  {
    id: 461,
    category: "ATA 22",
    question: "Which source of navigation must be active to couple FMS Navigation Heading Hold?",
    options: { a: "VOR", b: "ILS", c: "FMS" },
    correct: "c"
  },
  {
    id: 462,
    category: "ATA 22",
    question: "What does the white arrow on the PFD indicate during FMS Navigation Heading Hold?",
    options: { a: "Altitude", b: "Demand direction", c: "Glideslope" },
    correct: "b"
  },
  {
    id: 463,
    category: "ATA 22",
    question: "How is the Glideslope captured during ILS Navigation?",
    options: { a: "Pressing G/S on Mode Select Panel", b: "Pressing LOC on Mode Select Panel", c: "Pressing DCL on Mode Select Panel" },
    correct: "a"
  },
  {
    id: 464,
    category: "ATA 22",
    question: "What happens when the Localiser captures signals during ILS Navigation?",
    options: { a: "Displays ALT on Mode Select Panel", b: "Displays CAP on Mode Select Panel", c: "Displays HDG on Mode Select Panel" },
    correct: "b"
  },
  {
    id: 465,
    category: "ATA 22",
    question: "How is the PFLT BIT initiated?",
    options: { a: "Pressing TEST on either MSP", b: "Pressing APP on Mode Selector Panel", c: "Pressing DCL on Mode Select Panel" },
    correct: "a"
  },
  {
    id: 466,
    category: "ATA 22",
    question: "What is the purpose of the MBIT (Maintenance Built-In Test)?",
    options: { a: "Pilot-initiated test", b: "Automatic system reconfiguration", c: "Pre-flight system check" },
    correct: "b"
  },
  {
    id: 467,
    category: "ATA 22",
    question: "How is the Accelerometer null function accessed?",
    options: { a: "Pressing TEST on the MSP", b: "Pressing ALT on Mode Selector Panel", c: "Pressing APP on Mode Select Panel" },
    correct: "a"
  },
  {
    id: 468,
    category: "ATA 22",
    question: "What does PSAS1 FAULT indicate?",
    options: { a: "SAS actuator position disagreement", b: "Hydraulic pressure below 1100 psi", c: "Accelerometer failure" },
    correct: "a"
  },
  {
    id: 469,
    category: "ATA 22",
    question: "When does AFCS DGDR caution appear?",
    options: { a: "During Glideslope capture", b: "During PFLT BIT", c: "When AFCS is degraded with faults" },
    correct: "c"
  },
  {
    id: 470,
    category: "ATA 22",
    question: "What is the procedure for engine failure when flying coupled to the collective axis (3-cue)?",
    options: { a: "Automatic decoupling of the Collective", b: "Resetting reference IAS to minimum power speed", c: "Manually pulling more power" },
    correct: "c"
  },
  {
    id: 471,
    category: "ATA 22",
    question: "What occurs if both engines fail when flying coupled to the collective axis (3-cue)?",
    options: { a: "Automatic de-coupling of all axes", b: "Automatic resetting of reference IAS", c: "Automatic decoupling of the Collective axis" },
    correct: "c"
  },
  {
    id: 472,
    category: "ATA 22",
    question: "How is the Twin Engine Failure handled?",
    options: { a: "Maintaining all axes coupled", b: "Manually controlling the Collective axis", c: "Resetting reference IAS to Vy" },
    correct: "b"
  },
  {
    id: 473,
    category: "ATA 22",
    question: "What is the purpose of the ACCL NULL function?",
    options: { a: "Testing rate sensors", b: "Resetting accelerometer null bias", c: "Resetting reference IAS" },
    correct: "b"
  },
  {
    id: 474,
    category: "ATA 22",
    question: "How is the MAIN BIT sequence initiated?",
    options: { a: "Pressing TEST on either MSP", b: "Pressing MAIN BIT on Mode Select Panel", c: "Pressing ALT on Mode Selector Panel" },
    correct: "b"
  },
  {
    id: 475,
    category: "ATA 22",
    question: "What does SAS 1 PRES or SAS 2 PRES indicate?",
    options: { a: "Accelerometer failure", b: "Hydraulic pressure below 1100 psi", c: "PSAS module fail" },
    correct: "b"
  },
  {
    id: 476,
    category: "ATA 22",
    question: "When does FD DGRD caution appear?",
    options: { a: "During Glideslope capture", b: "During PFLT BIT", c: "When MSP fails" },
    correct: "c"
  },
  {
    id: 477,
    category: "ATA 22",
    question: "What is the purpose of the AP PWR RESET?",
    options: { a: "Resets the FCC circuitry", b: "Removes power from the PSAS", c: "Decouples the Collective axis" },
    correct: "a"
  },
  {
    id: 478,
    category: "ATA 22",
    question: "When is the Control Panel Reset used?",
    options: { a: "During engine failure", b: "To reset faults in FCC", c: "After Twin Engine Failure" },
    correct: "b"
  },
  {
    id: 479,
    category: "ATA 22",
    question: "What is the outcome of Trim Overspeed Test?",
    options: { a: "Trim actuator failure", b: "Acceleration of the aircraft", c: "Trim Actuators drive 100% control authority" },
    correct: "c"
  },
  {
    id: 480,
    category: "ATA 22",
    question: "How is the Level Off achieved during ILS Navigation?",
    options: { a: "Pressing G/S on Mode Select Panel", b: "Pressing LOC on Mode Select Panel", c: "Automatically at 50 ft and 60 KIAS" },
    correct: "c"
  },


/* 
  -----------------------------------

  -----------------------------------

  -----------------------------------

  -----------------------------------

  ----------------------------------- */



  {
    id: 481,
    category: 'ATA 25',
    question: 'What type of equipment and furnishings are included in the flight compartment?',
    options: { a: 'Passenger seats', b: 'Lighted chart holders', c: 'Wire strike protection' },
    correct: 'b',
  },
  {
    id: 482,
    category: 'ATA 25',
    question: 'Which component is NOT part of the crew seat assembly?',
    options: { a: 'Armrests and headrest', b: 'Observer/Jump seat', c: 'Lumbar support adjustment' },
    correct: 'b',
  },
  {
    id: 483,
    category: 'ATA 25',
    question: 'How is the crew seat mounted in the aircraft?',
    options: { a: 'Screws', b: 'Claws on floor-mounted rails', c: 'Velcro straps' },
    correct: 'b',
  },
  {
    id: 484,
    category: 'ATA 25',
    question: 'What is the purpose of the impact attenuation system in the crew seat?',
    options: { a: 'Increase seat height', b: 'Reduce energy during impact', c: 'Enhance seat comfort' },
    correct: 'b',
  },
  {
    id: 485,
    category: 'ATA 25',
    question: 'Where are the lighted chart holders (approach plate holders) located?',
    options: { a: 'Cockpit sidewalls', b: 'Instrument panel', c: 'Cabin roof' },
    correct: 'b',
  },
  {
    id: 486,
    category: 'ATA 25',
    question: 'What is the purpose of the night curtain?',
    options: { a: 'Increase privacy', b: 'Prevent light distraction to pilots', c: 'Serve as a seat cover' },
    correct: 'b',
  },
  {
    id: 487,
    category: 'ATA 25',
    question: 'Which component is part of the S92 crash attenuating passenger seat?',
    options: { a: 'Personal Service Units (PSU)', b: 'First Aid Kit', c: 'Armrest assembly' },
    correct: 'c',
  },
  {
    id: 488,
    category: 'ATA 25',
    question: 'How many different sets of floor mats are there based on floor type?',
    options: { a: 'One', b: 'Two', c: 'Three' },
    correct: 'b',
  },
  {
    id: 489,
    category: 'ATA 25',
    question: 'Where are the RFD heli-rafts located on the S-92 aircraft?',
    options: { a: 'Under the seats', b: 'In the forward section of the sponsons', c: 'On the cabin roof' },
    correct: 'b',
  },
  {
    id: 490,
    category: 'ATA 25',
    question: 'What is the purpose of the life raft electrical connection plug?',
    options: { a: 'Power the life raft\'s lights', b: 'Ensure proper alignment', c: 'Prevent malfunction' },
    correct: 'c',
  },
  {
    id: 491,
    category: 'ATA 25',
    question: 'How is the life-raft connected to the aircraft?',
    options: { a: 'By a blue 1.5 m short line', b: 'By screws', c: 'By a red 12 m long line' },
    correct: 'a',
  },
  {
    id: 492,
    category: 'ATA 25',
    question: 'What is the weight of each life raft?',
    options: { a: '60 lbs', b: '90 lbs', c: '120 lbs' },
    correct: 'b',
  },
  {
    id: 493,
    category: 'ATA 25',
    question: 'Where is the cabin first aid kit located?',
    options: { a: 'Behind the rear bulkhead', b: 'At the front left of the cabin', c: 'Under the pilot\'s seat' },
    correct: 'b',
  },
  {
    id: 494,
    category: 'ATA 25',
    question: 'How many flashlights are located in the cockpit?',
    options: { a: 'One', b: 'Two', c: 'Three' },
    correct: 'b',
  },
  {
    id: 495,
    category: 'ATA 25',
    question: 'Where is the Halon 1211 (BCF) fire extinguisher mounted?',
    options: { a: 'On the cabin forward bulkhead', b: 'Under the pilot\'s seat', c: 'On the cockpit sidewall' },
    correct: 'a',
  },
  {
    id: 496,
    category: 'ATA 25',
    question: 'What is the load capacity of the rescue hoist system?',
    options: { a: '500 lbs', b: '600 lbs', c: '700 lbs' },
    correct: 'b',
  },
  {
    id: 497,
    category: 'ATA 25',
    question: 'What is the purpose of wire strike protection?',
    options: { a: 'Protect against electrical interference', b: 'Prevent wire damage to the aircraft', c: 'Increase fuel efficiency' },
    correct: 'b',
  },
  {
    id: 498,
    category: 'ATA 25',
    question: 'How is the manual jettison cable operated?',
    options: { a: 'By a button on the control panel', b: 'By pulling a handle recessed into the sponson cover', c: 'By voice command' },
    correct: 'b',
  },
  {
    id: 499,
    category: 'ATA 25',
    question: 'What should be done after ditching to deploy the life rafts?',
    options: { a: 'Operate the rotary TEST switch', b: 'Select the arming switch on the overhead Life Raft Panel to ARM', c: 'Swivel the sunvisor' },
    correct: 'b',
  },
  {
    id: 500,
    category: 'ATA 25',
    question: 'What must be confirmed before continuing with the life-raft deployment test?',
    options: { a: 'Illumination of ARM lights and RAFT ARM caution on EICAS', b: 'Rotation of the sunvisor', c: 'Presence of passengers in the cabin' },
    correct: 'a',
  },















  {
    id: 481,
    category: 'ATA 33',
    question: 'What is the purpose of the Standby Battery?',
    options: { a: 'To power the cockpit lights', b: 'To provide power to the Standby Instruments facia', c: 'To control the lighting in the baggage compartment' },
    correct: 'b',
  },
  {
    id: 482,
    category: 'ATA 33',
    question: 'Where is the cockpit lights control panel located?',
    options: { a: 'Above the pilot\'s head', b: 'Below the overhead circuit breaker panel', c: 'Behind the co-pilot\'s seat' },
    correct: 'b',
  },
  {
    id: 483,
    category: 'ATA 33',
    question: 'How many Dimmer Units are there in the aircraft?',
    options: { a: 'Three', b: 'Five', c: 'Seven' },
    correct: 'c',
  },
  {
    id: 484,
    category: 'ATA 33',
    question: 'What is the purpose of the Balance Boxes in the cockpit?',
    options: { a: 'To adjust the pilot\'s balance', b: 'To automatically set the levels of illumination in different areas', c: 'To control the power output of the Dimmer Units' },
    correct: 'b',
  },
  {
    id: 485,
    category: 'ATA 33',
    question: 'What happens when the rotary control on the Dimmer is fully anti-clockwise?',
    options: { a: 'The lights are at full brightness', b: 'The lights are off', c: 'The voltage is reduced from 28v to 5v' },
    correct: 'b',
  },
  {
    id: 486,
    category: 'ATA 33',
    question: 'Which lighting panels are powered directly from the Standby Battery in case of power loss from the #2 DC Primary Bus?',
    options: { a: 'Instrument Panel', b: 'Lower Console', c: 'Backup Indicators' },
    correct: 'c',
  },
  {
    id: 487,
    category: 'ATA 33',
    question: 'What is the purpose of the Backup Indicators?',
    options: { a: 'To provide lighting during landing', b: 'To illuminate the Standby instruments facia', c: 'To control the Flood Light' },
    correct: 'b',
  },
  {
    id: 488,
    category: 'ATA 33',
    question: 'Which lighting panels are controlled by the rotary control in the Side Console?',
    options: { a: 'Audio Controller 1', b: 'AHRS 1 Compass Control Unit', c: 'Audio Controller 2' },
    correct: 'a',
  },
  {
    id: 489,
    category: 'ATA 33',
    question: 'What is the power source for the Flood Light?',
    options: { a: 'Battery Bus (28v)', b: '#1 DC Primary Bus', c: '#2 DC Primary Bus' },
    correct: 'a',
  },
  {
    id: 490,
    category: 'ATA 33',
    question: 'How many Utility Lights are there in the cockpit, and what is their power source?',
    options: { a: 'One, #2 DC Primary Bus', b: 'Two, Battery Bus', c: 'Three, #1 DC Primary Bus' },
    correct: 'b',
  },
  {
    id: 491,
    category: 'ATA 33',
    question: 'What is the purpose of the Approach Chart Holders Lighting?',
    options: { a: 'To provide general illumination', b: 'To store and display charts', c: 'To control the cabin lighting' },
    correct: 'b',
  },
  {
    id: 492,
    category: 'ATA 33',
    question: 'Where is the cabin lighting control panel located?',
    options: { a: 'Pilot\'s side of the overhead panel', b: 'Behind the co-pilot\'s seat', c: 'Above the pilot\'s head' },
    correct: 'a',
  },
  {
    id: 493,
    category: 'ATA 33',
    question: 'What is the power source for the cabin lighting strips down the left side of the cabin?',
    options: { a: '#1 DC Primary Bus', b: '#2 DC Primary Bus', c: 'Battery Bus (28v)' },
    correct: 'a',
  },
  {
    id: 494,
    category: 'ATA 33',
    question: 'How is the cabin overhead lighting controlled when the switch is in the DIM position?',
    options: { a: 'Logic relay is de-energised', b: 'Logic relay energises', c: 'Ballast Units are not powered' },
    correct: 'a',
  },
  {
    id: 495,
    category: 'ATA 33',
    question: 'Which signs are powered from the #1 DC Primary Bus?',
    options: { a: 'No Smoking signs', b: 'Seat Belt signs', c: 'Both a and b' },
    correct: 'c',
  },
  {
    id: 496,
    category: 'ATA 33',
    question: 'How many passenger reading lights are there, and how are they controlled?',
    options: { a: '10, individually by each passenger', b: '19, controlled from the cockpit switch', c: '15, controlled by the Passenger Advisory Signs' },
    correct: 'b',
  },
  {
    id: 497,
    category: 'ATA 33',
    question: 'What is the power source for the Baggage Compartment Light?',
    options: { a: 'Battery Bus', b: '#1 DC Primary Bus', c: '#2 DC Primary Bus' },
    correct: 'a',
  },
  {
    id: 498,
    category: 'ATA 33',
    question: 'How many positions does the Baggage Compartment Light switch have, and what does each position do?',
    options: { a: 'Two; ON and OFF', b: 'Three; CREW, OFF, and ON', c: 'Four; DIM, BRIGHT, ON, and OFF' },
    correct: 'b',
  },
  {
    id: 499,
    category: 'ATA 33',
    question: 'What happens when the P/B LAMP switch is placed in the TEST position?',
    options: { a: 'All lights go off', b: 'All pushbutton/indicator lights go to bright', c: 'The Flood Light is activated' },
    correct: 'b',
  },
  {
    id: 500,
    category: 'ATA 33',
    question: 'What is the intended use of the Flood Light in the cockpit?',
    options: { a: 'General illumination', b: 'Reducing the effect of lightning flashes at night', c: 'Emergency lighting during landing' },
    correct: 'b',
  },
  {
    id: 501,
    category: 'ATA 33',
    question: 'How many Advisory Signs are there in the Passenger Advisory Signs system?',
    options: { a: 'Three', b: 'Two', c: 'Four' },
    correct: 'b',
  },
  {
    id: 502,
    category: 'ATA 33',
    question: 'What activates the NO SMOKE message in the Passenger Briefing System?',
    options: { a: 'Selecting SEAT BELT ON', b: 'Selecting NO SMOKE ON', c: 'Selecting BRIGHT on the cabin overhead lighting switch' },
    correct: 'b',
  },
  {
    id: 503,
    category: 'ATA 33',
    question: 'How is the master ON/OFF control for the Passenger Reading Lights operated?',
    options: { a: 'By each passenger individually', b: 'By the crew in the cockpit', c: 'By the Baggage Compartment Light switch' },
    correct: 'b',
  },
  {
    id: 504,
    category: 'ATA 33',
    question: 'What is the power source for the Baggage Compartment Light?',
    options: { a: '#1 DC Primary Bus', b: '#2 DC Primary Bus', c: 'Battery Bus' },
    correct: 'c',
  },
  {
    id: 505,
    category: 'ATA 33',
    question: 'How is the illumination level of the passenger reading lights adjusted on newer aircraft?',
    options: { a: 'Rotating a dial on each light', b: 'Sweeping your finger around the black surround', c: 'Using a separate dimmer control in the cockpit' },
    correct: 'b',
  },
  {
    id: 506,
    category: "ATA 33",
    question: "What components are part of the External lighting system?",
    options: { a: "Anti-Collision Lights", b: "Position Lights", c: "Searchlight" },
    correct: "a",
  },
  
  {
    id: 507,
    category: "ATA 33",
    question: "Where are the Anti-Collision Lights controlled from?",
    options: { a: "Captain's seat", b: "Pilot's seat", c: "Co-pilot’s side of the overhead panel" },
    correct: "c",
  },
  
  {
    id: 508,
    category: "ATA 33",
    question: "How are the Landing Lights powered on the S-92?",
    options: { a: "Battery Bus", b: "DC Essential Bus", c: "AC Essential Bus" },
    correct: "b",
  },
  
  {
    id: 509,
    category: "ATA 33",
    question: "Where are the Position Lights located?",
    options: { a: "On top of the cockpit", b: "On the side of each sponson", c: "On the tail" },
    correct: "b",
  },
  
  {
    id: 510,
    category: "ATA 33",
    question: "What powers the Cargo Loading Light?",
    options: { a: "AC Essential Bus", b: "Battery Bus", c: "DC Essential Bus" },
    correct: "b",
  },
  
  {
    id: 511,
    category: "ATA 33",
    question: "Where is the Searchlight located?",
    options: { a: "Above the cockpit", b: "Below the Co-pilot’s seat", c: "Below the Pilot’s seat" },
    correct: "c",
  },
  
  {
    id: 512,
    category: "ATA 33",
    question: "What is the function of the STOW position for the Searchlight?",
    options: { a: "Extend the light forward", b: "Turn off the light", c: "Retract the light into the structure" },
    correct: "c",
  },
  
  {
    id: 513,
    category: "ATA 33",
    question: "In which position does the Co-pilot’s switch have no effect on the Searchlight?",
    options: { a: "ON", b: "OFF", c: "STOW" },
    correct: "b",
  },
  
  {
    id: 514,
    category: "ATA 33",
    question: "What happens when both Searchlight Switches are ON?",
    options: { a: "Searchlight retracts", b: "Contactor is energized", c: "Slew switches are disabled" },
    correct: "b",
  },
  
  {
    id: 515,
    category: "ATA 33",
    question: "Where is power applied when the Pilot’s and Co-pilot’s Switches are ON?",
    options: { a: "Only to the Pilot’s switch", b: "Only to the Co-pilot’s switch", c: "Both switches" },
    correct: "c",
  },
  
  {
    id: 516,
    category: "ATA 33",
    question: "What is the primary function of the High Visibility Strobe Lights?",
    options: { a: "Night illumination", b: "Day use only", c: "Fog penetration" },
    correct: "b",
  },
  
  {
    id: 517,
    category: "ATA 33",
    question: "When are the High Visibility Strobe Lights inhibited?",
    options: { a: "During day use", b: "When on the ground", c: "During fog" },
    correct: "b",
  },
  
  {
    id: 518,
    category: "ATA 33",
    question: "How many areas of emergency lighting does the S92 have?",
    options: { a: "Two", b: "Three", c: "Four" },
    correct: "b",
  },
  
  {
    id: 519,
    category: "ATA 33",
    question: "What powers the HEELS from the #2 DC Primary Bus?",
    options: { a: "AC Essential Bus", b: "Battery Bus", c: "#2 DC Primary Bus" },
    correct: "c",
  },
  
  {
    id: 520,
    category: "ATA 33",
    question: "Where are the emergency lighting batteries located?",
    options: { a: "Cockpit floor", b: "Above window 5", c: "Baggage Compartment ceiling" },
    correct: "c",
  },
  
  {
    id: 521,
    category: "ATA 33",
    question: "When are the Emergency Lights Panel switches enabled?",
    options: { a: "In the OFF position", b: "In the ON position", c: "In the ARM position" },
    correct: "c",
  },
  
  {
    id: 522,
    category: "ATA 33",
    question: "Where are the Internal Emergency Cabin Lights located?",
    options: { a: "In the cockpit", b: "Throughout the cabin", c: "On the external sponsons" },
    correct: "b",
  },
  
  {
    id: 523,
    category: "ATA 33",
    question: "How many water immersion detectors are there for the HEELS?",
    options: { a: "One", b: "Two", c: "Three" },
    correct: "b",
  },
  
  {
    id: 524,
    category: "ATA 33",
    question: "What happens if the HEELS switch is in the ARM position during a water entry event?",
    options: { a: "Cabin lights turn off", b: "System illuminates HEELS lights", c: "Batteries are disconnected" },
    correct: "b",
  },
  
  {
    id: 525,
    category: "ATA 33",
    question: "Where are the PSU 1 and PSU 2 located?",
    options: { a: "Above window 10", b: "Below the Co-pilot’s seat", c: "Below the Pilot’s seat" },
    correct: "c",
  },
  
  {
    id: 526,
    category: "ATA 33",
    question: "How many batteries are in the HEELS system?",
    options: { a: "Four", b: "Six", c: "Eight" },
    correct: "b",
  },
  
  {
    id: 527,
    category: "ATA 33",
    question: "Which areas are illuminated by the HEELS system?",
    options: { a: "Cockpit only", b: "Cabin only", c: "Cockpit, cabin, and external exits" },
    correct: "c",
  },
  
  {
    id: 528,
    category: "ATA 33",
    question: "What happens if one PSU fails in the HEELS system?",
    options: { a: "All lights go out", b: "Half of the windows and exits remain illuminated", c: "Emergency exits become disabled" },
    correct: "b",
  }
  
  
  
  
  
  
  

];