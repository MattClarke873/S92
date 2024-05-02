const questionBank = [
  {
    id: 1,
    category: "H175 ATA 67",
    question:
      "Which type of balancing ensures that components are balanced around their center of gravity when not moving?",
    options: {
      a: "Dynamic Balancing",
      b: "Static Balancing",
      c: "Passive Vibration Control",
    },
    correct: "b",
  },
  {
    id: 2,
    category: "H175 ATA 67",
    question:
      "What controls vary the incidence of the main and tail rotor blades to control the aircraft?",
    options: { a: "Pedal units", b: "Collective sticks", c: "Cyclic sticks" },
    correct: "b",
  },
  {
    id: 3,
    category: "H175 ATA 67",
    question: "Which axis does the collective control mainly govern?",
    options: { a: "Pitch axis", b: "Roll axis", c: "Vertical axis" },
    correct: "c",
  },
  {
    id: 4,
    category: "H175 ATA 67",
    question: "What is the primary function of the rotor flight controls?",
    options: {
      a: "Transmit crew commands to actuators",
      b: "Provide data to other systems",
      c: "Acquire and transmit crew and AFCS commands",
    },
    correct: "c",
  },
  {
    id: 5,
    category: "H175 ATA 67",
    question:
      "Which component transmits crew commands to the main rotor actuator?",
    options: {
      a: "Main servo-controls",
      b: "Cyclic sticks",
      c: "Collective sticks",
    },
    correct: "c",
  },
  {
    id: 6,
    category: "H175 ATA 67",
    question:
      "Which system utilizes Flexball cable control for some of its components?",
    options: {
      a: "Main rotor control",
      b: "Tail rotor control",
      c: "Collective control",
    },
    correct: "b",
  },
  {
    id: 7,
    category: "H175 ATA 67",
    question: "What is the purpose of the mixing unit in the cockpit roof?",
    options: {
      a: "Transmits crew commands to the tail rotor",
      b: "Combines input commands from collective and cyclic channels",
      c: "Controls the cyclic and collective sticks",
    },
    correct: "b",
  },
  {
    id: 8,
    category: "H175 ATA 67",
    question: "What does the yaw control channel mainly transmit?",
    options: {
      a: "Pitch and roll movements",
      b: "Yaw movements",
      c: "Thrust variations",
    },
    correct: "b",
  },
  {
    id: 9,
    category: "H175 ATA 67",
    question: "What component prevents excessive travel of the yaw channel?",
    options: { a: "Yaw trim rod", b: "Yaw SEMA rod", c: "Yaw stop screw" },
    correct: "c",
  },
  {
    id: 10,
    category: "H175 ATA 67",
    question: "What is the function of the main servo-controls?",
    options: {
      a: "Convert mechanical inputs into hydraulic powered inputs",
      b: "Transmit crew commands to the tail rotor",
      c: "Control the cyclic and collective sticks",
    },
    correct: "a",
  },
  {
    id: 11,
    category: "H175 ATA 67",
    question:
      "In degraded mode, how many hydraulic supplies does the tail servo-control require to operate?",
    options: { a: "Only one", b: "Two", c: "Three" },
    correct: "b",
  },
  {
    id: 12,
    category: "H175 ATA 67",
    question:
      "What provides backup in case of main hydraulic pump failure in the tail servo-control system?",
    options: {
      a: "The mixing unit",
      b: "The main servo-controls",
      c: "The Auxiliary Pressure Supply (APS)",
    },
    correct: "c",
  },
  {
    id: 13,
    category: "H175 ATA 67",
    question:
      "What mechanism ensures the main servo-controls operate correctly in case of spool jamming?",
    options: {
      a: "Override mechanism",
      b: "Feedback links",
      c: "Test buttons",
    },
    correct: "a",
  },
  {
    id: 14,
    category: "H175 ATA 67",
    question:
      "What is the purpose of the test buttons on the main servo-control valves?",
    options: {
      a: "To adjust control valves",
      b: "To operate the servo-controls",
      c: "To test the override mechanism",
    },
    correct: "c",
  },
  {
    id: 15,
    category: "H175 ATA 67",
    question: "What is the purpose of the anticipator rod?",
    options: {
      a: "Connects the mixing unit to the collective channel",
      b: "Connects the cyclic sticks to the cyclic control channel",
      c: "Connects the main servo-controls to the main rotor",
    },
    correct: "a",
  },
  {
    id: 16,
    category: "H175 ATA 67",
    question:
      "What provides the interface with many systems via button commands?",
    options: {
      a: "Cyclic sticks",
      b: "Collective grips",
      c: "Main servo-controls",
    },
    correct: "b",
  },
  {
    id: 17,
    category: "H175 ATA 67",
    question: "Which component balances the cyclic control linkages?",
    options: { a: "Cyclic grips", b: "Cyclic sticks", c: "Balancing assembly" },
    correct: "c",
  },
  {
    id: 18,
    category: "H175 ATA 67",
    question: "What is the function of the tail servo-control?",
    options: {
      a: "Transmit crew commands to the main rotor",
      b: "Convert mechanical inputs into hydraulic powered inputs for the tail rotor",
      c: "Provide data to other systems",
    },
    correct: "b",
  },
  {
    id: 19,
    category: "H175 ATA 67",
    question:
      "What component ensures the tail servo-control operates correctly in case of spool jamming?",
    options: {
      a: "Override mechanism",
      b: "Feedback links",
      c: "Test buttons",
    },
    correct: "a",
  },
  {
    id: 20,
    category: "H175 ATA 67",
    question:
      "What does the forward part of the yaw flexible control system connect?",
    options: {
      a: "Rudder pedals to the tail rotor",
      b: "Cockpit to the main rotor",
      c: "Cockpit to the intermediate fuselage",
    },
    correct: "c",
  },

  {
    id: 21,
    category: "H175 ATA 34",
    question:
      "What are the three independent sub-systems of the Air Data System (ADS)?",
    options: {
      a: "Right hand, left hand, and central",
      b: "Right hand, left hand, and emergency",
      c: "Primary, secondary, and tertiary",
    },
    correct: "b",
  },
  {
    id: 22,
    category: "H175 ATA 34",
    question:
      "Which sub-system of the ADS consists of an Integrated Emergency Standby Instrument (IESI)?",
    options: { a: "Right hand", b: "Left hand", c: "Emergency" },
    correct: "c",
  },
  {
    id: 23,
    category: "H175 ATA 34",
    question: "How many external static ports are there in total?",
    options: { a: "4", b: "6", c: "8" },
    correct: "b",
  },
  {
    id: 24,
    category: "H175 ATA 34",
    question: "Where are the pitot and OAT sensors located?",
    options: {
      a: "Underneath the tail boom",
      b: "On arms protruding from the nose of the aircraft",
      c: "On the wings",
    },
    correct: "b",
  },
  {
    id: 25,
    category: "H175 ATA 34",
    question: "What is the purpose of the cockpit static ports?",
    options: {
      a: "To control the aircraft's altitude",
      b: "To switch between external and cockpit pressure",
      c: "To provide data to the airspeed indicators",
    },
    correct: "b",
  },
  {
    id: 26,
    category: "H175 ATA 34",
    question: "Where are the Air Data Units (ADU's) located?",
    options: {
      a: "In the cockpit overhead panel",
      b: "In the nose landing gear compartment",
      c: "Underneath the tail boom",
    },
    correct: "b",
  },
  {
    id: 27,
    category: "H175 ATA 34",
    question:
      "How is the Integrated Emergency Standby Instrument (IESI) powered?",
    options: {
      a: "By the ADU's",
      b: "By EMERG1 and NOSHED2 busbars",
      c: "By the ESS2 and NOSHED1 busbars",
    },
    correct: "b",
  },
  {
    id: 28,
    category: "H175 ATA 34",
    question: "What are the main output parameters of the ADU's?",
    options: {
      a: "True Air Speed (TAS), Outside Air Temperature (OAT), Vertical Speed, Barometric altitude",
      b: "Pressure, Humidity, Wind speed, Direction",
      c: "Fuel level, Engine temperature, Battery voltage, Altitude",
    },
    correct: "a",
  },
  {
    id: 29,
    category: "H175 ATA 34",
    question: "What does the IESI provide to the MFD's via ARINC 429 buses?",
    options: {
      a: "Airspeed and altitude data",
      b: "Radio altimeter data",
      c: "Static pressure data",
    },
    correct: "a",
  },
  {
    id: 30,
    category: "H175 ATA 34",
    question:
      "How many radio altimeter antennas are there, and where are they mounted?",
    options: {
      a: "One, under the nose of the aircraft",
      b: "Two, underneath the tail of the aircraft",
      c: "Three, one on each wing and one on the tail",
    },
    correct: "b",
  },
  {
    id: 31,
    category: "H175 ATA 34",
    question: "Where is the RA toggle switch located?",
    options: {
      a: "On the instrument panel",
      b: "On the cargo subfloor",
      c: "On the common control panel in the cockpit",
    },
    correct: "c",
  },
  {
    id: 32,
    category: "H175 ATA 34",
    question: "What is the function of the DH/HTLIM LSK?",
    options: {
      a: "To adjust the decision height",
      b: "To adjust the height limit",
      c: "To switch between radio altimeter modes",
    },
    correct: "a",
  },
  {
    id: 33,
    category: "H175 ATA 34",
    question:
      "What action does the system take if there is an unresolved air data discrepancy?",
    options: {
      a: "Automatically reconfigures using the IESI data",
      b: "Displays an advisory message but takes no action",
      c: "Displays an amber frame around the air scales and flags the discrepancy",
    },
    correct: "c",
  },
  {
    id: 34,
    category: "H175 ATA 34",
    question: "What does the amber RA rectangle on the FND indicate?",
    options: {
      a: "Radio altimeter failure",
      b: "Airspeed discrepancy",
      c: "Decision Height reached",
    },
    correct: "a",
  },
  {
    id: 35,
    category: "H175 ATA 34",
    question:
      "What is the significance of the amber RA strip on the right of the RA scale?",
    options: {
      a: "It represents the upper barometric altitude limit",
      b: "It indicates the altitude above ground level",
      c: "It represents the decision height",
    },
    correct: "c",
  },
  {
    id: 36,
    category: "H175 ATA 34",
    question: "When is the 100 feet notification audio message heard?",
    options: {
      a: "When the radio altitude is above 100 feet",
      b: "Every time the mission selector is set to Hoist or Sling",
      c: "When the radio altitude falls below 100 feet",
    },
    correct: "c",
  },
  {
    id: 37,
    category: "H175 ATA 34",
    question: 'What does the "Landing gear up" audio message indicate?',
    options: {
      a: "That the landing gear is extended below 300 ft and 60 kts",
      b: "That the landing gear is retracted",
      c: "That the mission selector is set to Hoist or Sling",
    },
    correct: "a",
  },
  {
    id: 38,
    category: "H175 ATA 34",
    question: "Where is the AHV16 transceiver located?",
    options: {
      a: "Underneath the nose of the aircraft",
      b: "Under the tail boom structure",
      c: "On the instrument panel",
    },
    correct: "b",
  },
  {
    id: 39,
    category: "H175 ATA 34",
    question: "What happens when the RA toggle switch is in the TEST position?",
    options: {
      a: "The radio altimeter is turned off",
      b: "The radio altimeter is inoperative",
      c: "The radio altimeter is tested",
    },
    correct: "c",
  },
  {
    id: 40,
    category: "H175 ATA 34",
    question: "What does the amber DH flag indicate?",
    options: {
      a: "Radio altimeter failure",
      b: "Decision Height reached",
      c: "Air data discrepancy",
    },
    correct: "b",
  },

  {
    id: 41,
    category: "H175 ATA 34",
    question:
      "What message will be displayed on the Master list if the radio altimeter fails the pre-flight test?",
    options: { a: "RA FAIL", b: "RA PRE-FAIL", c: "ALT FAIL" },
    correct: "a",
  },
  {
    id: 42,
    category: "H175 ATA 34",
    question:
      "During the manual test of the radio altimeter, what happens when the RA toggle switch is moved to the TEST position?",
    options: {
      a: "Radio altimeter height is displayed at 0 ft",
      b: "Radio altimeter height is displayed at 100 ft",
      c: "Radio altimeter height is displayed at 50 ft",
    },
    correct: "b",
  },
  {
    id: 43,
    category: "H175 ATA 34",
    question: "What is the indication of a radio altimeter data failure?",
    options: {
      a: "RA PASS message on the Master list",
      b: "RA FAIL message on the Master list",
      c: "RA STATUS message on the Master list",
    },
    correct: "b",
  },
  {
    id: 44,
    category: "H175 ATA 34",
    question: "Where is the standby compass located?",
    options: {
      a: "On the nose of the aircraft",
      b: "On the upper part of the central windshield frame",
      c: "On the tail of the aircraft",
    },
    correct: "b",
  },
  {
    id: 45,
    category: "H175 ATA 34",
    question: "What type of adjustments can be made to the standby compass?",
    options: {
      a: "Azimuth adjustments only",
      b: "East/west corrections only",
      c: "Azimuth adjustments, east/west, and north/south corrections",
    },
    correct: "c",
  },
  {
    id: 46,
    category: "H175 ATA 34",
    question: "What is the purpose of the IESI in the HELIONIX system?",
    options: {
      a: "To provide electrical power",
      b: "To provide backup rescue mode for the AFCS",
      c: "To control the transponder system",
    },
    correct: "b",
  },
  {
    id: 47,
    category: "H175 ATA 34",
    question: "Where is the IESI located?",
    options: {
      a: "On the nose of the aircraft",
      b: "On the instrument panel",
      c: "On the tail of the aircraft",
    },
    correct: "b",
  },
  {
    id: 48,
    category: "H175 ATA 34",
    question: "How is the IESI powered?",
    options: {
      a: "By the ADU's",
      b: "By the EMERG2 and NO SHED1 busbars",
      c: "By the ESS2 and NOSHED1 busbars",
    },
    correct: "c",
  },
  {
    id: 49,
    category: "H175 ATA 34",
    question: "What type of data does the IESI compute and send via ARINC 429?",
    options: {
      a: "Radio altimeter data",
      b: "Attitude, air data, and status",
      c: "GPS data",
    },
    correct: "b",
  },
  {
    id: 50,
    category: "H175 ATA 34",
    question: "Where does the IESI receive static and total pressure from?",
    options: {
      a: "From the FMS",
      b: "From the landing gear",
      c: "From the EMERG pitot head and EMERG static pressure ports",
    },
    correct: "c",
  },
  {
    id: 51,
    category: "H175 ATA 34",
    question: "What is the function of the IESI CAGE button?",
    options: {
      a: "To adjust brightness",
      b: "To reset the instrument to the actual attitude CAGE displayed",
      c: "To set the instruments barometric pressure setting",
    },
    correct: "b",
  },
  {
    id: 52,
    category: "H175 ATA 34",
    question: "During initialisation, what does the IESI do?",
    options: {
      a: "Enters alignment mode",
      b: "Performs Power-up Built In Test (PBIT)",
      c: "Sends data via ARINC 429",
    },
    correct: "b",
  },
  {
    id: 53,
    category: "H175 ATA 34",
    question: "What happens after the alignment phase of the IESI?",
    options: {
      a: "The IESI enters fail mode",
      b: "The IESI enters operational mode",
      c: "The IESI enters standby mode",
    },
    correct: "b",
  },
  {
    id: 54,
    category: "H175 ATA 34",
    question:
      "If the IESI has an attitude failure, what message will be displayed?",
    options: { a: "ATT FAIL", b: "BCKUP FAIL", c: "AIR DATA FAIL" },
    correct: "a",
  },
  {
    id: 55,
    category: "H175 ATA 34",
    question:
      "What indicates the status of the IESI equipment on the MFD-VMS page?",
    options: {
      a: "Colour of the IESI label",
      b: "Colour of the altitude scale",
      c: "Colour of the airspeed scale",
    },
    correct: "a",
  },
  {
    id: 56,
    category: "H175 ATA 34",
    question: "How can the crew perform a reconfiguration of the IESI?",
    options: {
      a: "Using the brightness buttons",
      b: "Using the CAGE button",
      c: "Using the RCNF LSK and the rotary knob",
    },
    correct: "c",
  },
  {
    id: 57,
    category: "H175 ATA 34",
    question:
      "What message will be displayed if a fatal error occurs in the IESI?",
    options: { a: "BACKUP SAS FAIL", b: "FAIL", c: "IESI FAIL" },
    correct: "b",
  },
  {
    id: 58,
    category: "H175 ATA 34",
    question: "Where is the transponder system located?",
    options: {
      a: "On the tail of the aircraft",
      b: "On the upper fuselage",
      c: "On the nose of the aircraft",
    },
    correct: "a",
  },
  {
    id: 59,
    category: "H175 ATA 34",
    question:
      "What does the transponder system provide to Air Traffic Control (ATC)?",
    options: {
      a: "Aircraft identification only",
      b: "Aircraft parameters only",
      c: "Aircraft identification and parameters",
    },
    correct: "c",
  },
  {
    id: 60,
    category: "H175 ATA 34",
    question: "How many antennas does the transponder system have?",
    options: { a: "One", b: "Two", c: "Three" },
    correct: "b",
  },

  {
    id: 61,
    category: "H175 ATA 34",
    question: "Where are the navigation receivers located?",
    options: {
      a: "On the upper fuselage",
      b: "In the nose compartment",
      c: "Underneath the aircraft",
    },
    correct: "b",
  },
  {
    id: 62,
    category: "H175 ATA 34",
    question: "Which busbar supplies power to the NAV1 receiver?",
    options: { a: "NO SHED2", b: "SHED1", c: "ESS1" },
    correct: "b",
  },
  {
    id: 63,
    category: "H175 ATA 34",
    question: "Where is the Marker beacon antenna located?",
    options: {
      a: "On the underside of the aircraft",
      b: "In the nose compartment",
      c: "On the tail",
    },
    correct: "a",
  },
  {
    id: 64,
    category: "H175 ATA 34",
    question: "How many couplers are there in the nose of the aircraft?",
    options: { a: "One", b: "Two", c: "Three" },
    correct: "b",
  },
  {
    id: 65,
    category: "H175 ATA 34",
    question:
      "Which area of the COM2/NAV2 Backup Control Panel controls the mode selection?",
    options: { a: "Upper area", b: "Middle area", c: "Lower area" },
    correct: "b",
  },
  {
    id: 66,
    category: "H175 ATA 34",
    question:
      "What does a long push on the left push-button of the CTL-4000 do?",
    options: {
      a: "Selects COM or NAV test",
      b: "Adjusts brightness",
      c: "Switches to CTL STBY",
    },
    correct: "c",
  },
  {
    id: 67,
    category: "H175 ATA 34",
    question: "Where is the CTL-4000 COM2/NAV2 Backup Control Panel located?",
    options: {
      a: "On the nose of the aircraft",
      b: "On the central control panel",
      c: "On the interseat console",
    },
    correct: "c",
  },
  {
    id: 68,
    category: "H175 ATA 34",
    question:
      "How is the status of the navigation receivers displayed on the MFD's?",
    options: { a: "By text messages", b: "By colour coding", c: "By symbols" },
    correct: "b",
  },
  {
    id: 69,
    category: "H175 ATA 34",
    question:
      "Which navigation receiver is powered from the NO SHED2 and ESS1 buses?",
    options: { a: "NAV1", b: "NAV2", c: "Both NAV1 and NAV2" },
    correct: "b",
  },
  {
    id: 70,
    category: "H175 ATA 34",
    question: "What happens if NAV1 loses its power supply?",
    options: {
      a: "Both NAV receivers will fail",
      b: "Only NAV1 will fail",
      c: "Only NAV2 will fail",
    },
    correct: "b",
  },
  {
    id: 71,
    category: "H175 ATA 34",
    question:
      "What does the PASS message indicate after a successful VOR self-test on the FMS?",
    options: {
      a: "The test is ready",
      b: "The test is complete",
      c: "The test has failed",
    },
    correct: "b",
  },
  {
    id: 72,
    category: "H175 ATA 34",
    question:
      "How is the PASS message displayed on the FMS after a successful self-test?",
    options: { a: "READY", b: "CONFIRM?", c: "STARTED" },
    correct: "b",
  },
  {
    id: 73,
    category: "H175 ATA 34",
    question:
      "Where is the frequency selection made using the CTL-4000 Backup Control Panel?",
    options: { a: "Upper area", b: "Middle area", c: "Lower area" },
    correct: "c",
  },
  {
    id: 74,
    category: "H175 ATA 34",
    question:
      "Which control panel synchronizes with both FMS and controls the pilot NAV 2 receiver?",
    options: {
      a: "Central Control Panel",
      b: "Interseat console",
      c: "COM2/NAV2 Backup Control Panel",
    },
    correct: "c",
  },
  {
    id: 75,
    category: "H175 ATA 34",
    question: "What is the function of the dual GPS configuration?",
    options: {
      a: "To provide SBAS navigation and SBAS approach capability",
      b: "To control the COM2/NAV2 Backup Control Panel",
      c: "To power up the navigation receivers",
    },
    correct: "a",
  },

  {
    id: 76,
    category: "H175 ATA 34",
    question:
      "Which system provides information about transponder-equipped intruding aircraft to the crew?",
    options: { a: "FMS", b: "ACAS", c: "GPS" },
    correct: "b",
  },
  {
    id: 77,
    category: "H175 ATA 34",
    question: "Where are the GPS antennas located?",
    options: {
      a: "Under the baggage compartment",
      b: "On the forward upper part of the tail boom",
      c: "In the tail boom, just aft of the baggage compartment",
    },
    correct: "b",
  },
  {
    id: 78,
    category: "H175 ATA 34",
    question: "Which component is used to mute the audio from the ACAS?",
    options: {
      a: "ACAS Toggle Switch",
      b: "Cyclic Grip Switch",
      c: "GPS Antennas",
    },
    correct: "a",
  },
  {
    id: 79,
    category: "H175 ATA 34",
    question: "What is the mode of operation when ACAS is set to TA Only mode?",
    options: {
      a: "Preventative RA",
      b: "Corrective RA",
      c: "Traffic Advisory mode",
    },
    correct: "c",
  },
  {
    id: 80,
    category: "H175 ATA 34",
    question: "What is the primary function of ACAS?",
    options: {
      a: "To provide aircraft position information",
      b: "To augment the accuracy of GPS signals",
      c: "To detect and track intruding aircraft",
    },
    correct: "c",
  },
  {
    id: 81,
    category: "H175 ATA 34",
    question: "How is the ACAS mode changed on the FMS?",
    options: {
      a: "By pressing the ACAS LSK",
      b: "By pressing the VERT MODE LSK",
      c: "By pressing the ACAS MODE LSK",
    },
    correct: "c",
  },
  {
    id: 82,
    category: "H175 ATA 34",
    question: "What does the ACAS MUTE mode do?",
    options: {
      a: "Activates the Traffic Advisory mode",
      b: "Mutes the audio alerts from ACAS",
      c: "Forces ACAS into Standby mode",
    },
    correct: "b",
  },
  {
    id: 83,
    category: "H175 ATA 34",
    question: "When does ACAS automatically revert to TA Only mode?",
    options: {
      a: "When other higher priority alerts are in progress",
      b: "When the aircraft is on the ground",
      c: "When the aircraft is operating at low heights",
    },
    correct: "c",
  },
  {
    id: 84,
    category: "H175 ATA 34",
    question: "How are Resolution Advisories (RA's) issued by the ACAS?",
    options: {
      a: "Automatically when an intruder enters the monitoring aircraft's space",
      b: "Upon manual activation by the crew",
      c: "When the aircraft is at cruising altitude",
    },
    correct: "a",
  },
  {
    id: 85,
    category: "H175 ATA 34",
    question: "Where is the ACAS transceiver located?",
    options: {
      a: "In the tail boom, just aft of the baggage compartment",
      b: "Under the baggage compartment",
      c: "On the forward upper part of the tail boom",
    },
    correct: "a",
  },
  {
    id: 86,
    category: "H175 ATA 34",
    question: "How are ACAS status indications displayed on the NAVD?",
    options: {
      a: "By flashing labels",
      b: "By displaying specific symbols",
      c: "By changing font color",
    },
    correct: "b",
  },
  {
    id: 87,
    category: "H175 ATA 34",
    question:
      "What message will be displayed on the FND if the ACAS transceiver fails?",
    options: { a: "ACAS TEST", b: "ACAS MUTE", c: "ACAS FAIL" },
    correct: "c",
  },
  {
    id: 88,
    category: "H175 ATA 34",
    question: "How is the ACAS test initiated on the FMS?",
    options: {
      a: "By pressing the ACAS LSK",
      b: "By pressing the ACAS TEST LSK",
      c: "By pressing the VERT MODE LSK",
    },
    correct: "b",
  },
  {
    id: 89,
    category: "H175 ATA 34",
    question: "What happens if the ACAS test does not pass?",
    options: {
      a: "The ACAS will revert to TA Only mode",
      b: "The ACAS will be forced into Standby mode",
      c: "The ACAS FAIL message will be displayed",
    },
    correct: "c",
  },

  {
    id: 90,
    category: "H175 ATA 34",
    question: "What is the primary function of the weather radar system?",
    options: {
      a: "Detecting weather that could affect the aircraft",
      b: "Communicating with ground stations",
      c: "Detecting other aircraft",
    },
    correct: "a",
  },
  {
    id: 91,
    category: "H175 ATA 34",
    question: "Where is the 12” flat panel antenna located?",
    options: {
      a: "Behind the control panel",
      b: "Under the pilot’s side of the nose",
      c: "On the inter-seat console",
    },
    correct: "b",
  },
  {
    id: 92,
    category: "H175 ATA 34",
    question:
      "Which component of the weather radar system controls the radar antenna?",
    options: { a: "Antenna", b: "Antenna drive", c: "Wave guide" },
    correct: "b",
  },
  {
    id: 93,
    category: "H175 ATA 34",
    question:
      "What is the minimum safe area around the weather radar antenna when transmitting?",
    options: { a: "5m", b: "10m", c: "7.7m" },
    correct: "c",
  },
  {
    id: 94,
    category: "H175 ATA 34",
    question: "From where does the radar antenna drive receive its power?",
    options: {
      a: "The control panel",
      b: "The SHED2 busbar",
      c: "The AC generator",
    },
    correct: "b",
  },
  {
    id: 95,
    category: "H175 ATA 34",
    question: "Where is the weather radar transceiver located?",
    options: {
      a: "Behind the control panel",
      b: "Under the pilot’s side of the nose",
      c: "On the inter-seat console",
    },
    correct: "b",
  },
  {
    id: 96,
    category: "H175 ATA 34",
    question:
      "Which mode must the weather radar control panel be set to for normal operation with a 120° scan angle?",
    options: { a: "STBY", b: "ON", c: "TEST" },
    correct: "b",
  },
  {
    id: 97,
    category: "H175 ATA 34",
    question:
      "What does the SRCH button on the weather radar control panel activate?",
    options: { a: "Weather mode", b: "Beacon mode", c: "Search modes" },
    correct: "c",
  },
  {
    id: 98,
    category: "H175 ATA 34",
    question: "What is the purpose of the DME on the aircraft?",
    options: {
      a: "Detecting weather",
      b: "Providing distance to VOR/DME beacons",
      c: "Controlling navigation equipment",
    },
    correct: "b",
  },
  {
    id: 99,
    category: "H175 ATA 34",
    question: "Where is the DME transceiver located?",
    options: {
      a: "On the right side of the nose",
      b: "Under the pilot’s side of the nose",
      c: "Behind the control panel",
    },
    correct: "b",
  },
  {
    id: 100,
    category: "H175 ATA 34",
    question:
      "How many DME frequencies can the transceiver track simultaneously?",
    options: { a: "1", b: "2", c: "3" },
    correct: "c",
  },
  {
    id: 101,
    category: "H175 ATA 34",
    question: "Which FMS component communicates with the GPS?",
    options: { a: "MFD1 and MFD2", b: "Collective Grips", c: "AMC's" },
    correct: "c",
  },
  {
    id: 102,
    category: "H175 ATA 34",
    question: "What information does the FMS receive from the MFD's?",
    options: { a: "Fuel flow", b: "True Airspeed", c: "DME frequencies" },
    correct: "b",
  },
  {
    id: 103,
    category: "H175 ATA 34",
    question: "Which component of the FMS controls and uses data from the DME?",
    options: { a: "MFD's", b: "GPS's", c: "AMC's" },
    correct: "c",
  },
  {
    id: 104,
    category: "H175 ATA 34",
    question:
      "What does the HOLD function on the COM2/NAV2 Backup Control Panel allow the operator to do?",
    options: {
      a: "Hold the current DME frequency and retune the VOR/ILS",
      b: "Switch between VOR and ILS frequencies",
      c: "Activate the DME self-test",
    },
    correct: "a",
  },

  {
    id: 105,
    category: "H175 ATA 34",
    question: "Where is the AIR Data Loader (ADL) located?",
    options: {
      a: "At the rear of the inter-seat console on the left side",
      b: "At the front of the inter-seat console on the right side",
      c: "Underneath the pilot's seat",
    },
    correct: "a",
  },
  {
    id: 106,
    category: "H175 ATA 34",
    question: "What is the purpose of the ADL?",
    options: {
      a: "To power the FMS",
      b: "To load the FMS with updated navigation information",
      c: "To control the aircraft's altitude",
    },
    correct: "b",
  },
  {
    id: 107,
    category: "H175 ATA 34",
    question: "Which busbar powers the ADL?",
    options: {
      a: "FLIGHT SHED1",
      b: "NO SHED2",
      c: "ESS1",
    },
    correct: "a",
  },
  {
    id: 108,
    category: "H175 ATA 34",
    question: "How often is the navigation database updated?",
    options: {
      a: "Every 5 years",
      b: "Every 28 days",
      c: "Every 6 months",
    },
    correct: "b",
  },
  {
    id: 109,
    category: "H175 ATA 34",
    question: "Where is the FMS Load Switch located?",
    options: {
      a: "On the Central Control Panel",
      b: "On the Reconfiguration Control Unit (RCU)",
      c: "On the inter-seat console",
    },
    correct: "b",
  },
  {
    id: 110,
    category: "H175 ATA 34",
    question: "What is the function of the FMS Load Switch?",
    options: {
      a: "To select which of the dual FMS's to upload or download",
      b: "To control the power supply to the FMS's",
      c: "To switch between different FMS databases",
    },
    correct: "a",
  },
  {
    id: 111,
    category: "H175 ATA 34",
    question: "Where are the FMS switches located?",
    options: {
      a: "On the Reconfiguration Control Unit (RCU)",
      b: "On the Central Control Panel",
      c: "On the inter-seat console",
    },
    correct: "b",
  },
  {
    id: 112,
    category: "H175 ATA 34",
    question: "Which switch controls the power to FMS1?",
    options: {
      a: "FMS1 switch",
      b: "FMS2 switch",
      c: "ADL switch",
    },
    correct: "a",
  },
  {
    id: 113,
    category: "H175 ATA 34",
    question: "How many power supplies does FMS2 have?",
    options: {
      a: "One",
      b: "Two",
      c: "Three",
    },
    correct: "b",
  },
  {
    id: 114,
    category: "H175 ATA 34",
    question: "Where is the CMA-9000 located?",
    options: {
      a: "On the inter-seat console",
      b: "On the Central Control Panel",
      c: "Underneath the pilot's seat",
    },
    correct: "a",
  },
  {
    id: 115,
    category: "H175 ATA 34",
    question: "How many Line Select Keys (LSK's) does the CMA-9000 have?",
    options: {
      a: "6",
      b: "10",
      c: "12",
    },
    correct: "c",
  },
  {
    id: 116,
    category: "H175 ATA 34",
    question: "What does the MSG annunciator light indicate?",
    options: {
      a: "Failure",
      b: "New alert message on scratchpad",
      c: "Non-precision approach activated",
    },
    correct: "b",
  },
  {
    id: 117,
    category: "H175 ATA 34",
    question: "What is the scratchpad area used for on the CMA-9000?",
    options: {
      a: "To display navigation databases",
      b: "To enter data and display messages",
      c: "To control power supply",
    },
    correct: "b",
  },
  {
    id: 118,
    category: "H175 ATA 34",
    question: "What is the purpose of the Exec key on the CMA-9000?",
    options: {
      a: "To validate modifications to the active route",
      b: "To access radio tuning pages",
      c: "To access the route page",
    },
    correct: "a",
  },
  {
    id: 119,
    category: "H175 ATA 34",
    question: "Which key is used to clear the scratchpad on the CMA-9000?",
    options: {
      a: "Next key",
      b: "Prev key",
      c: "CLR key",
    },
    correct: "c",
  },

  {
    id: 119,
    category: "H175 ATA 34",
    question: "What is the purpose of the DMAP within the MFD?",
    options: {
      a: "To serve as a primary means of navigation",
      b: "To display plan view navigation information",
      c: "To control power supply to the MFD",
    },
    correct: "b",
  },
  {
    id: 120,
    category: "H175 ATA 34",
    question: "How is the DMAP database uploaded into the MFD?",
    options: {
      a: "Via the USB port",
      b: "Through the Data Transfer Device (DTD) Ethernet port",
      c: "Manually input by the operator",
    },
    correct: "b",
  },
  {
    id: 121,
    category: "H175 ATA 34",
    question:
      "Which communication method do the MFDs use to share MSL altitude?",
    options: {
      a: "Ethernet",
      b: "ARINC 429 buses",
      c: "RS-232 serial communication",
    },
    correct: "b",
  },
  {
    id: 122,
    category: "H175 ATA 34",
    question: "What data sources do the MFDs receive information from?",
    options: {
      a: "AMCs, RADAR, and TCAS",
      b: "FMS, GPS, and IESI",
      c: "ACAS, ELT, and DME",
    },
    correct: "b",
  },
  {
    id: 123,
    category: "H175 ATA 34",
    question: "What is the function of the None Map in DMAP?",
    options: {
      a: "It displays topographic information",
      b: "It removes the map background to aid visibility of overlays",
      c: "It shows vector-based geographical features",
    },
    correct: "b",
  },

  {
    id: 124,
    category: "H175 ATA 32",
    question:
      "What is the primary function of the Nose Landing Gear (NLG) system?",
    options: {
      a: "To ensure extension and retraction of NLG",
      b: "To support the aircraft and absorb landing energy",
      c: "To control the hydraulic pressure in the MLG system",
    },
    correct: "b",
  },
  {
    id: 125,
    category: "H175 ATA 32",
    question: "Where is the shock absorber assembly located in the NLG system?",
    options: {
      a: "Underneath the cabin floor",
      b: "At the rear of the aircraft",
      c: "At the front and under the fuselage of the aircraft",
    },
    correct: "c",
  },
  {
    id: 126,
    category: "H175 ATA 32",
    question:
      "What is the purpose of the transfer reservoir in the NLG system?",
    options: {
      a: "To allow gear retraction and maintain hydraulic fluid separation",
      b: "To provide additional shock absorption during landing",
      c: "To store excess hydraulic fluid",
    },
    correct: "a",
  },
  {
    id: 127,
    category: "H175 ATA 32",
    question: "How is the NLG hydraulically locked in the retracted position?",
    options: {
      a: "By a combination of valves (20, 22, 25)",
      b: "By a shock absorber piston",
      c: "By the pilot's manual control",
    },
    correct: "a",
  },
  {
    id: 128,
    category: "H175 ATA 32",
    question: "What is the function of the NLG Locking Wheel in Axis system?",
    options: {
      a: "To control the hydraulic pressure in the NLG system",
      b: "To provide additional support during landing",
      c: "To engage and disengage the castor lock",
    },
    correct: "c",
  },
  {
    id: 129,
    category: "H175 ATA 32",
    question: "Where is the NLG Locking Control Assembly located?",
    options: {
      a: "In the cockpit",
      b: "On the exterior of the aircraft",
      c: "At the rear of the cabin",
    },
    correct: "a",
  },
  {
    id: 130,
    category: "H175 ATA 32",
    question: "How is the NLG hydraulically locked in the extended position?",
    options: {
      a: "By a shock absorber piston",
      b: "By the NLG Locking Wheel in Axis system",
      c: "By a combination of valves (17, 18)",
    },
    correct: "c",
  },
  {
    id: 131,
    category: "H175 ATA 32",
    question: "What is the purpose of the NLG Pressure Transducer?",
    options: {
      a: "To control the flow of hydraulic fluid",
      b: "To monitor the pressure of the shock absorber",
      c: "To engage the NLG Locking system",
    },
    correct: "b",
  },
  {
    id: 132,
    category: "H175 ATA 32",
    question: "What is the function of the NLG Retracted switch?",
    options: {
      a: "To engage the NLG Locking system",
      b: "To indicate the retracted position of the NLG",
      c: "To control the NLG hydraulic pump",
    },
    correct: "b",
  },
  {
    id: 133,
    category: "H175 ATA 32",
    question: "Where is the NLG shock absorber/actuator assembly located?",
    options: {
      a: "Between frame 1B and 'A' Frame assembly",
      b: "Underneath the cockpit floor",
      c: "At the rear of the fuselage",
    },
    correct: "a",
  },
  {
    id: 134,
    category: "H175 ATA 32",
    question: "What is the function of the NLG Swing Arm assembly?",
    options: {
      a: "To extend and retract the NLG",
      b: "To provide additional support during landing",
      c: "To allow swiveling of the nose wheels during taxiing",
    },
    correct: "c",
  },
  {
    id: 135,
    category: "H175 ATA 32",
    question: "How is the NLG Locking Wheel in Axis engaged?",
    options: {
      a: "By turning the handle clockwise",
      b: "By pulling a lever",
      c: "By pushing a button",
    },
    correct: "a",
  },
  {
    id: 136,
    category: "H175 ATA 32",
    question: "What is the purpose of the NLG Locking Wheel in Axis?",
    options: {
      a: "To engage the NLG hydraulic system",
      b: "To engage the castor lock",
      c: "To control the NLG pressure",
    },
    correct: "b",
  },
  {
    id: 137,
    category: "H175 ATA 32",
    question: "Where is the NLG downlock microswitch located?",
    options: {
      a: "In the cockpit",
      b: "On the NLG actuator",
      c: "On the NLG oleo",
    },
    correct: "b",
  },
  {
    id: 138,
    category: "H175 ATA 32",
    question: "What is the function of the NLG actuator?",
    options: {
      a: "To provide structural support",
      b: "To absorb landing energy",
      c: "To extend and retract the NLG",
    },
    correct: "c",
  },

  {
    id: 139,
    category: "H175 ATA 32",
    question:
      "What activates the emergency extension pump (4) in the Landing Gear Emergency Extension system?",
    options: {
      a: "The emergency hydraulic circuit",
      b: "The landing gear control panel",
      c: "The emergency extension switch (L/G CP)",
    },
    correct: "c",
  },
  {
    id: 140,
    category: "H175 ATA 32",
    question:
      "What color does the emergency hydraulic circuit change to when activated?",
    options: { a: "Red", b: "Blue", c: "Green" },
    correct: "c",
  },
  {
    id: 141,
    category: "H175 ATA 32",
    question:
      "What caution message is displayed on the Master List if the emergency pump temperature exceeds 120°C?",
    options: {
      a: "L/G EMER OVHT HYD2",
      b: "OVERHEAT",
      c: "EMERGENCY EXTENSION",
    },
    correct: "a",
  },
  {
    id: 142,
    category: "H175 ATA 32",
    question:
      "At what altitude does the 'L/G UP' alert message appear on the Flight Navigation Display (FND) if the landing gear is retracted?",
    options: { a: "Below 1000 feet", b: "Below 300 feet", c: "Below 15 feet" },
    correct: "b",
  },
  {
    id: 143,
    category: "H175 ATA 32",
    question:
      "What audio message is heard in the headsets when the 'L/G UP' alert message is displayed on the FND?",
    options: { a: "Takeoff", b: "Caution", c: "Landing Gear" },
    correct: "c",
  },
  {
    id: 144,
    category: "H175 ATA 32",
    question:
      "What caution message is displayed on the VMS hydraulic page if the front wheels are not aligned with the aircraft center line during taxiing?",
    options: { a: "NOT IN AXIS", b: "EMERGENCY EXTENSION", c: "L/G UP" },
    correct: "a",
  },
  {
    id: 145,
    category: "H175 ATA 32",
    question:
      "What happens if the wheel in axis micro-switch does not close during takeoff?",
    options: {
      a: "NOT IN AXIS caution message disappears",
      b: "NOSE WHEEL AXIS caution message appears",
      c: "L/G UP alert message appears",
    },
    correct: "b",
  },
  {
    id: 146,
    category: "H175 ATA 32",
    question:
      "What does the NLG pressure transducer detect during landing gear extension if the nose gear is in extended weakness?",
    options: {
      a: "Abnormal pressure (9-12 bar)",
      b: "Normal pressure (12-15 bar)",
      c: "Low pressure (< 9 bar)",
    },
    correct: "a",
  },
  {
    id: 147,
    category: "H175 ATA 32",
    question:
      "What indication is displayed on the VMS hydraulic page if the NLG pressure transducer detects low pressure during landing gear extension?",
    options: {
      a: "An AMBER cross on the failed gear",
      b: "Three green arrows",
      c: "An abnormal pressure warning",
    },
    correct: "a",
  },
  {
    id: 148,
    category: "H175 ATA 32",
    question:
      "What message is displayed on the master list during the Automatic Power-Up Test if the test is successful?",
    options: { a: "PWR-UP TST", b: "PWR-UP TST OK", c: "TEST PASSED" },
    correct: "b",
  },
  {
    id: 149,
    category: "H175 ATA 32",
    question: "Where is the brake accumulator located?",
    options: {
      a: "Under the cockpit floor",
      b: "At the rear of the NLG compartment",
      c: "Under the inter-seat console",
    },
    correct: "c",
  },
  {
    id: 150,
    category: "H175 ATA 32",
    question: "What is the function of the parking brake?",
    options: {
      a: "To hold the aircraft stationary during engine shutdown",
      b: "To assist in takeoff",
      c: "To activate the landing gear emergency extension",
    },
    correct: "a",
  },
  {
    id: 151,
    category: "H175 ATA 32",
    question: "How is the parking brake released?",
    options: {
      a: "By pulling up and turning the control handle clockwise",
      b: "By pushing a button on the landing gear control panel",
      c: "By pulling up and turning the control handle counterclockwise",
    },
    correct: "c",
  },
  {
    id: 152,
    category: "H175 ATA 32",
    question: "What controls the wheel brakes of the aircraft?",
    options: { a: "Throttle control", b: "Brake pedals", c: "Control column" },
    correct: "b",
  },
  {
    id: 153,
    category: "H175 ATA 32",
    question: "Where are the LH brake transmitters located?",
    options: {
      a: "On the brake assembly",
      b: "On the inter-seat console",
      c: "On the tail rotor controls",
    },
    correct: "c",
  },
  {
    id: 154,
    category: "H175 ATA 32",
    question: "What does the 'BRAKE LOW PRESS HYD2' caution message indicate?",
    options: {
      a: "Low hydraulic pressure in the brake accumulator",
      b: "High hydraulic pressure in the brake accumulator",
      c: "Brake failure",
    },
    correct: "a",
  },
  {
    id: 155,
    category: "H175 ATA 32",
    question: "How is the parking brake controlled?",
    options: {
      a: "By pushing a button",
      b: "By pulling up and turning a control handle",
      c: "By rotating a knob",
    },
    correct: "b",
  },
  {
    id: 156,
    category: "H175 ATA 32",
    question:
      "What indication is displayed on the MFDs-FND page if there is low pressure in the brake accumulator?",
    options: {
      a: "Brake failure warning",
      b: "MASTER ALERT",
      c: "BRAKE LOW PRESS HYD2 caution message",
    },
    correct: "c",
  },
  {
    id: 157,
    category: "H175 ATA 32",
    question:
      "What system allows differential braking for maneuvering the aircraft on the ground?",
    options: { a: "Throttle control", b: "Parking brake", c: "Brake pedals" },
    correct: "c",
  },
  {
    id: 158,
    category: "H175 ATA 32",
    question:
      "What controls all wheel brakes of the aircraft at the same time?",
    options: { a: "Throttle control", b: "Brake pedals", c: "Parking brake" },
    correct: "c",
  },
  {
    id: 140,
    category: "H175 ATA 28",
    question: "What is the total capacity (usable) of the fuel system?",
    options: {
      a: "2178 Kg (575.43 litres)",
      b: "2533 Kg (669.22 litres)",
      c: "2067 Kg (2616 litres)",
    },
    correct: "c",
  },
  {
    id: 141,
    category: "H175 ATA 28",
    question: "Where is the Fuel Control Panel located?",
    options: {
      a: "On the cockpit console",
      b: "On the inter-seat console",
      c: "On the central warning panel",
    },
    correct: "b",
  },
  {
    id: 142,
    category: "H175 ATA 28",
    question: "How many tanks does the EC175 basic fuel system comprise?",
    options: { a: "Three", b: "Four", c: "Five" },
    correct: "b",
  },
  {
    id: 143,
    category: "H175 ATA 28",
    question:
      "Which component is used to prevent fuel spillage through vent lines?",
    options: {
      a: "Pressure Relief Valve",
      b: "Air No Fuel Valve",
      c: "Roll Over Valve",
    },
    correct: "c",
  },
  {
    id: 144,
    category: "H175 ATA 28",
    question: "Where is the ground pressure refueling system located?",
    options: {
      a: "Within the engines compartment",
      b: "Beneath the cargo floor",
      c: "Below the cabin floor",
    },
    correct: "c",
  },
  {
    id: 145,
    category: "H175 ATA 28",
    question:
      "Which component ensures automatic refueling stop during ground pressure refueling?",
    options: {
      a: "Float switch",
      b: "Solenoid valve",
      c: "Pressure relief valve",
    },
    correct: "b",
  },
  {
    id: 146,
    category: "H175 ATA 28",
    question: "What is the function of the automatic vent valve?",
    options: {
      a: "To allow pressure refueling",
      b: "To vent the fuel system",
      c: "To control booster pumps",
    },
    correct: "b",
  },
  {
    id: 147,
    category: "H175 ATA 28",
    question: "Where is the booster pump located for the LH feeder tank?",
    options: {
      a: "Inside the forward canister",
      b: "Inside the rear canister",
      c: "Inside the optional tank 6",
    },
    correct: "b",
  },
  {
    id: 148,
    category: "H175 ATA 28",
    question:
      "How many booster pumps are linked to each engine in the feeder tank?",
    options: { a: "One", b: "Two", c: "Three" },
    correct: "b",
  },
  {
    id: 149,
    category: "H175 ATA 28",
    question: "What is the purpose of the jet pumps?",
    options: {
      a: "To transfer fuel to the engines",
      b: "To drain fuel from tanks",
      c: "To prevent fuel spillage",
    },
    correct: "a",
  },
  {
    id: 150,
    category: "H175 ATA 28",
    question: "Where is the jet pump suction point located?",
    options: {
      a: "At the highest point of the tank",
      b: "At the lowest point of the tank",
      c: "At the middle of the tank",
    },
    correct: "b",
  },
  {
    id: 151,
    category: "H175 ATA 28",
    question:
      "How many hinged plugs are located on the upper interconnections inside the feeder tanks?",
    options: { a: "One", b: "Two", c: "Three" },
    correct: "b",
  },
  {
    id: 152,
    category: "H175 ATA 28",
    question: "What is the purpose of the SOVs (Solenoid Operated Valves)?",
    options: {
      a: "To prevent booster pump failure",
      b: "To control fuel supply",
      c: "To monitor pressure",
    },
    correct: "b",
  },
  {
    id: 153,
    category: "H175 ATA 28",
    question: "How is defueling accomplished via the pressure refueling port?",
    options: {
      a: "By opening the shut off valve",
      b: "By activating the booster pumps",
      c: "By using a suction defueling hose",
    },
    correct: "c",
  },
  {
    id: 154,
    category: "H175 ATA 28",
    question: "What component ensures fuel drainage from the tanks?",
    options: {
      a: "Fuel bleeding pipe",
      b: "Fuel pump canister",
      c: "Flexible recess",
    },
    correct: "a",
  },
  {
    id: 155,
    category: "H175 ATA 28",
    question: "Which tank is equipped with a gravity filler port?",
    options: { a: "Tank 1", b: "Tank 2", c: "Tank 4" },
    correct: "c",
  },
  {
    id: 156,
    category: "H175 ATA 28",
    question: "What is the function of the roll-over valve?",
    options: {
      a: "To prevent overpressure",
      b: "To prevent fuel spillage",
      c: "To control fuel drainage",
    },
    correct: "b",
  },
  {
    id: 157,
    category: "H175 ATA 28",
    question: "How many vent boxes are installed in the venting system?",
    options: { a: "Two", b: "Three", c: "Four" },
    correct: "c",
  },
  {
    id: 158,
    category: "H175 ATA 28",
    question: "Where are the air-no-fuel valves installed?",
    options: {
      a: "At the highest point of the air venting lines",
      b: "At the lowest point of the tanks",
      c: "At the end of each air venting line",
    },
    correct: "a",
  },
  {
    id: 159,
    category: "H175 ATA 28",
    question: "What is the purpose of the pressure relief valve?",
    options: {
      a: "To prevent tank blowing",
      b: "To control booster pumps",
      c: "To activate fuel drainage",
    },
    correct: "a",
  },
  {
    id: 160,
    category: "H175 ATA 28",
    question: "Where is the ground pressure refueling system located?",
    options: {
      a: "Within the engines compartment",
      b: "Beneath the cargo floor",
      c: "Below the cabin floor",
    },
    correct: "c",
  },
  {
    id: 161,
    category: "H175 ATA 28",
    question:
      "What component ensures automatic refueling stop during ground pressure refueling?",
    options: {
      a: "Float switch",
      b: "Solenoid valve",
      c: "Pressure relief valve",
    },
    correct: "b",
  },
  {
    id: 162,
    category: "H175 ATA 28",
    question: "What is the function of the automatic vent valve?",
    options: {
      a: "To allow pressure refueling",
      b: "To vent the fuel system",
      c: "To control booster pumps",
    },
    correct: "b",
  },
  {
    id: 163,
    category: "H175 ATA 28",
    question: "Where is the booster pump located for the LH feeder tank?",
    options: {
      a: "Inside the forward canister",
      b: "Inside the rear canister",
      c: "Inside the optional tank 6",
    },
    correct: "b",
  },
  {
    id: 164,
    category: "H175 ATA 28",
    question:
      "How many booster pumps are linked to each engine in the feeder tank?",
    options: { a: "One", b: "Two", c: "Three" },
    correct: "b",
  },
  {
    id: 165,
    category: "H175 ATA 28",
    question: "What is the purpose of the jet pumps?",
    options: {
      a: "To transfer fuel to the engines",
      b: "To drain fuel from tanks",
      c: "To prevent fuel spillage",
    },
    correct: "a",
  },

  {
    id: 139,
    category: "H175 ATA 28",
    question: "What is the primary function of the Fuel Monitoring System?",
    options: {
      a: "Indicate the remaining quantity of fuel",
      b: "Measure the fuel temperature",
      c: "Control the booster pumps",
    },
    correct: "a",
  },
  {
    id: 140,
    category: "H175 ATA 28",
    question: "What does the Fuel Control System primarily control?",
    options: {
      a: "The fuel temperature",
      b: "The booster pumps",
      c: "The pressure refuelling/defuelling",
    },
    correct: "b",
  },
  {
    id: 141,
    category: "H175 ATA 28",
    question:
      "How many fuel probes are included in the Fuel Monitoring System?",
    options: { a: "Two", b: "Three", c: "Four" },
    correct: "c",
  },
  {
    id: 142,
    category: "H175 ATA 28",
    question: "Where are the Low Level Sensors (LLS) installed?",
    options: {
      a: "Only on the fuel probe of the feeder tanks",
      b: "Only on the temperature sensors",
      c: "Only on the fuel probe of the auxiliary tanks",
    },
    correct: "a",
  },
  {
    id: 143,
    category: "H175 ATA 28",
    question: "Where are the temperature sensors installed?",
    options: {
      a: "On the mounting plate of the feeder tanks",
      b: "On the mounting plate of the auxiliary tanks",
      c: "On the mounting plate of the rear tank",
    },
    correct: "a",
  },
  {
    id: 144,
    category: "H175 ATA 28",
    question: "Where are the booster pump switches located?",
    options: {
      a: "On the fuel probe",
      b: "On the engine control panel",
      c: "On the fuel control panel",
    },
    correct: "c",
  },
  {
    id: 145,
    category: "H175 ATA 28",
    question:
      "Where is the float switch and solenoid valve of the pressure refuelling system installed?",
    options: {
      a: "On the mounting plate of the feeder tanks",
      b: "On the additional tank 4",
      c: "On the engine control panel",
    },
    correct: "b",
  },
  {
    id: 146,
    category: "H175 ATA 28",
    question: "Where are the SOV switches located?",
    options: {
      a: "On the fuel probe",
      b: "On the engine control panel",
      c: "On the fuel control panel",
    },
    correct: "b",
  },
  {
    id: 147,
    category: "H175 ATA 28",
    question:
      "What information is displayed on the 'Fuel page' of the Vehicle Monitoring Display (VMD)?",
    options: {
      a: "Fuel temperature",
      b: "Remaining flight time",
      c: "Fuel quantity",
    },
    correct: "c",
  },
  {
    id: 148,
    category: "H175 ATA 28",
    question: "Where are the fuel gauges installed?",
    options: {
      a: "On the fuel probes",
      b: "On the mounting plate of the rear tank",
      c: "On the mounting plate of the feeder tanks",
    },
    correct: "c",
  },
  {
    id: 149,
    category: "H175 ATA 28",
    question: "What is the fuel colour coding indicating?",
    options: {
      a: "Normal conditions",
      b: "Engine fire",
      c: "Low fuel pressure",
    },
    correct: "a",
  },
  {
    id: 150,
    category: "H175 ATA 28",
    question: "What does the FUEL TREND message indicate?",
    options: {
      a: "Low fuel level",
      b: "Normal fuel conditions",
      c: "Fuel gauge failure",
    },
    correct: "b",
  },
  {
    id: 151,
    category: "H175 ATA 28",
    question: "What happens in the event of one booster pump failure?",
    options: {
      a: "Loss of pressurization for engine fuel supply",
      b: "No effect on engine fuel supply",
      c: "Engine stops running",
    },
    correct: "b",
  },
  {
    id: 152,
    category: "H175 ATA 28",
    question:
      "What is the operational consequence of two booster pumps failure?",
    options: {
      a: "Engine fire",
      b: "Loss of motive flow for corresponding jet pumps",
      c: "Engine stops running",
    },
    correct: "b",
  },
  {
    id: 153,
    category: "H175 ATA 28",
    question:
      "How are gauge failures during ground pressure refuelling (GPR) handled?",
    options: {
      a: "Refuelling stops automatically",
      b: "Refuelling continues with estimated values",
      c: "Refuelling continues normally",
    },
    correct: "b",
  },
  {
    id: 154,
    category: "H175 ATA 28",
    question:
      "What happens if the pressure solenoid valve fails during ground pressure refuelling (GPR)?",
    options: {
      a: "Refuelling stops automatically",
      b: "Fuel spills outside of the helicopter",
      c: "Refuelling continues normally",
    },
    correct: "c",
  },
  {
    id: 155,
    category: "H175 ATA 28",
    question:
      "What is the consequence of float switch failure during ground pressure refuelling (GPR)?",
    options: {
      a: "Fuel spills outside of the helicopter",
      b: "Refuelling stops automatically",
      c: "Refuelling continues normally",
    },
    correct: "a",
  },
  {
    id: 156,
    category: "H175 ATA 28",
    question: "What does the 'FUEL GAUGING' message indicate?",
    options: {
      a: "Fuel gauge failure",
      b: "Low fuel pressure",
      c: "Normal fuel conditions",
    },
    correct: "a",
  },
  {
    id: 157,
    category: "H175 ATA 28",
    question: "What is the indication of a fuel leakage from Feeder Tank 3?",
    options: {
      a: "Loss of pressurization",
      b: "Abnormal fuel consumption",
      c: "Fuel temperature increase",
    },
    correct: "b",
  },
  {
    id: 158,
    category: "H175 ATA 28",
    question: "What is the procedure in case of engine No.1 fire?",
    options: {
      a: "Activate the RH fuel SOV",
      b: "Activate the LH fuel SOV",
      c: "Activate both fuel SOVs",
    },
    correct: "b",
  },
  {
    id: 159,
    category: "H175 ATA 28",
    question: "Where is the pressure refuelling port located?",
    options: {
      a: "On the mounting plate of the feeder tanks",
      b: "On the rear tank",
      c: "On the engine control panel",
    },
    correct: "b",
  },
  {
    id: 160,
    category: "H175 ATA 28",
    question:
      "What is the role of the float switch in the pressure refuelling system?",
    options: {
      a: "To control the booster pumps",
      b: "To indicate low fuel level",
      c: "To stop the refuelling sequence",
    },
    correct: "c",
  },
  {
    id: 161,
    category: "H175 ATA 28",
    question: "Where is the pressure relief valve located?",
    options: {
      a: "On the mounting plate of the feeder tanks",
      b: "On the additional tank 4",
      c: "On the engine control panel",
    },
    correct: "b",
  },
  {
    id: 162,
    category: "H175 ATA 28",
    question:
      "What does the 'RFUE ABORTED' message indicate during ground pressure refuelling (GPR)?",
    options: {
      a: "Gauge failure",
      b: "Solenoid valve failure",
      c: "Pressure refuelling aborted",
    },
    correct: "c",
  },
  {
    id: 163,
    category: "H175 ATA 28",
    question:
      "What is the response to the 'RFUE FAILURE' message during ground pressure refuelling (GPR)?",
    options: {
      a: "Refuelling continues normally",
      b: "Refuelling stops automatically",
      c: "Gauge failure",
    },
    correct: "b",
  },
  {
    id: 164,
    category: "H175 ATA 28",
    question:
      "What is the role of the non-return valve in the booster pump system?",
    options: {
      a: "To control fuel pressure",
      b: "To avoid fuel leakage",
      c: "To maintain pressurization",
    },
    correct: "b",
  },
  {
    id: 165,
    category: "H175 ATA 28",
    question: "Where are the jet pumps located?",
    options: {
      a: "On the mounting plate of the feeder tanks",
      b: "On the rear tank",
      c: "On the engine control panel",
    },
    correct: "b",
  },
  {
    id: 167,
    category: "H175 ATA 21",
    question:
      "What is the primary purpose of the Environmental Control System (ECS) and Optional Air Conditioning System (ACS) in the EC175 helicopter?",
    options: {
      a: "To control the aircraft's altitude",
      b: "To regulate the cabin and cockpit temperature and humidity",
      c: "To adjust the helicopter's speed",
    },
    correct: "b",
  },
  {
    id: 168,
    category: "H175 ATA 21",
    question:
      "Which components of the ECS provide cockpit and cabin ventilation, distribution, and heating?",
    options: {
      a: "Cockpit Distribution Box",
      b: "Cabin Compact Set (CaCS)",
      c: "P3 Bleed Air System",
    },
    correct: "b",
  },
  {
    id: 169,
    category: "H175 ATA 21",
    question:
      "What is the function of the Air Conditioning System (ACS) in the EC175?",
    options: {
      a: "To provide cabin and cockpit lighting",
      b: "To provide cooling air for the cabin and cockpit",
      c: "To supply oxygen to the cockpit",
    },
    correct: "b",
  },
  {
    id: 170,
    category: "H175 ATA 21",
    question:
      "How many compressors are used in the Air Conditioning System (ACS) of the EC175, and what are their roles?",
    options: {
      a: "One for the cabin and one for the cockpit",
      b: "Two for the cockpit",
      c: "Three for the cabin",
    },
    correct: "a",
  },
  {
    id: 171,
    category: "H175 ATA 21",
    question:
      "What happens if the MGB oil temperature exceeds 95°C in the EC175?",
    options: {
      a: "The air conditioning system shuts down",
      b: "The cockpit compressor is turned off to prioritize cooling the MGB",
      c: "The cabin ventilation is increased",
    },
    correct: "b",
  },
  {
    id: 172,
    category: "H175 ATA 21",
    question:
      "In the event of a LH Cockpit Fan failure in the EC175, what happens to the cockpit RECIRC command?",
    options: {
      a: "It is automatically activated",
      b: "It is inhibited",
      c: "It remains unchanged",
    },
    correct: "b",
  },
  {
    id: 173,
    category: "H175 ATA 21",
    question:
      "How does the system respond to a refrigerant leak in the cockpit system of the EC175?",
    options: {
      a: "The cockpit cooling is deactivated",
      b: "The cabin cooling is activated",
      c: "The system shuts down completely",
    },
    correct: "a",
  },
  {
    id: 174,
    category: "H175 ATA 21",
    question:
      "What action does the system take if the refrigerant temperature exceeds 120°C in the cockpit of the EC175?",
    options: {
      a: "The system switches to cabin cooling",
      b: "The cockpit compressor is turned off",
      c: "The cabin temperature is increased",
    },
    correct: "b",
  },
  {
    id: 175,
    category: "H175 ATA 21",
    question:
      "What components make up the Environmental Control System (ECS) of the EC175?",
    options: {
      a: "Two Cabin Distribution Boxes",
      b: "Two Cockpit Compact Sets (CoCS)",
      c: "One Cabin Air Conditioning Control Panel (CP)",
    },
    correct: "b",
  },
  {
    id: 176,
    category: "H175 ATA 21",
    question:
      "Where is the Inside Air Temperature (IAT) probe located in the EC175 cockpit?",
    options: {
      a: "On the overhead panel behind the rotor brake handle",
      b: "Under the co-pilot flooring",
      c: "On the passenger forward left window surround",
    },
    correct: "a",
  },
  {
    id: 177,
    category: "H175 ATA 21",
    question:
      "What is the function of the P3 Shut-Off Valves and Cross Check Valve in the ECS of the EC175?",
    options: {
      a: "To control the fuel flow",
      b: "To regulate cabin and cockpit pressure",
      c: "To supply warm P3 air for heating",
    },
    correct: "c",
  },
  {
    id: 178,
    category: "H175 ATA 21",
    question:
      "Where is the Cabin Inside Air Temperature (IAT) probe located in the EC175?",
    options: {
      a: "On the overhead panel behind the rotor brake handle",
      b: "Under the co-pilot flooring",
      c: "On the passenger forward left window surround",
    },
    correct: "c",
  },
  {
    id: 179,
    category: "H175 ATA 21",
    question:
      "What happens when the RECIRC push-button is selected to OFF in the cabin of the EC175?",
    options: {
      a: "External air is directed into the cabin",
      b: "Recirculation of cabin air is activated",
      c: "The system shuts down",
    },
    correct: "a",
  },
  {
    id: 180,
    category: "H175 ATA 21",
    question:
      "How does the system respond to a LH Cabin Fan failure in the EC175?",
    options: {
      a: "The cabin cooling is deactivated",
      b: "The cabin ventilation is increased",
      c: "The system shuts down",
    },
    correct: "b",
  },
  {
    id: 181,
    category: "H175 ATA 21",
    question:
      "In the event of a refrigerant leak in the cabin system of the EC175, what action is taken?",
    options: {
      a: "The cabin cooling is deactivated",
      b: "The system switches to cockpit cooling",
      c: "The system shuts down completely",
    },
    correct: "a",
  },
  {
    id: 182,
    category: "H175 ATA 21",
    question:
      "What happens if the refrigerant temperature exceeds 120°C in the cabin of the EC175?",
    options: {
      a: "The cabin cooling is deactivated",
      b: "The cabin compressor is turned off",
      c: "The system switches to cockpit cooling",
    },
    correct: "b",
  },
  {
    id: 183,
    category: "H175 ATA 21",
    question: "How many recirculation fans are installed in the EC175?",
    options: { a: "Three", b: "One", c: "Two" },
    correct: "c",
  },
  {
    id: 184,
    category: "H175 ATA 21",
    question:
      "What is the function of the Air Conditioning Control Panel (CP) in the EC175?",
    options: {
      a: "To supply warm air for heating",
      b: "To regulate cabin and cockpit temperature",
      c: "To control the oxygen flow",
    },
    correct: "b",
  },
  {
    id: 185,
    category: "H175 ATA 21",
    question:
      "What action is taken to engage the automatic mode in the Environmental Control System (ECS) of the EC175 helicopter?",
    options: {
      a: "Depress the AUTO push-button",
      b: "Depress the RECIRC push-button",
      c: "Depress the FAN SPEED selector",
    },
    correct: "a",
  },
  {
    id: 186,
    category: "H175 ATA 21",
    question:
      "In the EC175, how can the automatic mode in the ECS be deactivated?",
    options: {
      a: "Depress the AUTO push-button again",
      b: "Depress the DESIRED T° push-button",
      c: "Turn the FAN SPEED selector",
    },
    correct: "a",
  },
  {
    id: 187,
    category: "H175 ATA 21",
    question:
      "What is the indication of selecting the Cabin Lo Mode (T°<10°C) on the control panel of the EC175?",
    options: {
      a: "The 'HI' light illuminates",
      b: "The 'LO' light illuminates",
      c: "Three green bars appear on the fan indication",
    },
    correct: "b",
  },
  {
    id: 188,
    category: "H175 ATA 21",
    question:
      "In the EC175, what happens when the Cabin Lo Mode (T°<10°C) is selected?",
    options: {
      a: "The cabin inlet actuators move to the 'RECIRC' position",
      b: "The cabin outlet actuator moves to the direct ventilation position",
      c: "The P3 SOVs open for bleed air supply",
    },
    correct: "a",
  },
  {
    id: 189,
    category: "H175 ATA 21",
    question:
      "What is the procedure to perform an ECS Power-Up Test in the EC175?",
    options: {
      a: "Depress the AUTO push-button",
      b: "Turn the FAN SPEED selector",
      c: "Turn on aircraft power",
    },
    correct: "c",
  },
  {
    id: 190,
    category: "H175 ATA 22",
    question: "What type of actuators are SEMA actuators?",
    options: {
      a: "Series actuators",
      b: "Parallel actuators",
      c: "Smart Electro-Mechanical Actuators",
    },
    correct: "c",
  },
  {
    id: 191,
    category: "H175 ATA 22",
    question: "Where are the trim actuators located on the EC175?",
    options: {
      a: "Under the cockpit floor on the pilot's side",
      b: "In the cockpit ceiling on the pilot's side",
      c: "Behind the pylon deck of the tail boom",
    },
    correct: "a",
  },
  {
    id: 192,
    category: "H175 ATA 22",
    question: "What are the two types of actuators fitted to the aircraft?",
    options: {
      a: "SEMA and AMC",
      b: "Trim Actuators and SEMA",
      c: "AFCSU and APCP",
    },
    correct: "b",
  },
  {
    id: 193,
    category: "H175 ATA 22",
    question:
      "Where is the Auto Flight Control Switching Unit (AFCSU) located?",
    options: {
      a: "Under the cockpit floor on the pilot's side",
      b: "In the cockpit ceiling on the pilot's side",
      c: "In the centre of the inter seat console",
    },
    correct: "a",
  },
  {
    id: 194,
    category: "H175 ATA 22",
    question:
      "Which AFCS partition is the master processing unit under normal conditions?",
    options: { a: "AMC1", b: "AMC2", c: "IESI" },
    correct: "b",
  },
  {
    id: 195,
    category: "H175 ATA 22",
    question: "What is the main function of the AFCS?",
    options: {
      a: "Basic stabilisation only",
      b: "Basic stabilisation and upper modes",
      c: "Basic stabilisation and automatic landing",
    },
    correct: "b",
  },
  {
    id: 196,
    category: "H175 ATA 22",
    question: "What does the AFCS use to provide it with attitude information?",
    options: { a: "GPS", b: "Air Data Units (ADUs)", c: "TCAS" },
    correct: "b",
  },
  {
    id: 197,
    category: "H175 ATA 22",
    question: "Where are the SEMA 1 & 2 ROLL actuators located?",
    options: {
      a: "Under the cockpit floor on the pilot's side",
      b: "In the cockpit ceiling on the pilot's side",
      c: "Behind the pylon deck of the tail boom",
    },
    correct: "b",
  },
  {
    id: 198,
    category: "H175 ATA 22",
    question:
      "What colour code indicates a degraded system or degraded functionality on the AFCS components?",
    options: { a: "Red", b: "Green", c: "Amber" },
    correct: "c",
  },
  {
    id: 199,
    category: "H175 ATA 22",
    question:
      "What happens to the SEMA actuators in the event that both AMC1 and AMC2 fail?",
    options: {
      a: "They are controlled by the back-up SAS",
      b: "They continue normal operation",
      c: "They are frozen",
    },
    correct: "a",
  },
  {
    id: 200,
    category: "H175 ATA 22",
    question: "Where is the Auto Pilot Control Panel (APCP) located?",
    options: {
      a: "Under the cockpit floor on the pilot's side",
      b: "In the cockpit ceiling on the pilot's side",
      c: "In the centre of the inter seat console",
    },
    correct: "c",
  },
  {
    id: 201,
    category: "H175 ATA 22",
    question:
      "What colour code indicates normal or engaged status on the AFCS components?",
    options: { a: "Green", b: "Red", c: "Amber" },
    correct: "a",
  },
  {
    id: 202,
    category: "H175 ATA 22",
    question: "What does the AFCSU relay box do?",
    options: {
      a: "Controls the autopilot",
      b: "Provides attitude information",
      c: "Controls SEMA commands selection",
    },
    correct: "c",
  },
  {
    id: 203,
    category: "H175 ATA 22",
    question:
      "How are the trim actuators connected to the mechanical flight controls?",
    options: {
      a: "Via wireless transducer technology",
      b: "Through digital data buses",
      c: "Via rotating output shafts",
    },
    correct: "c",
  },
  {
    id: 204,
    category: "H175 ATA 22",
    question:
      "What colour code indicates a failed system or functionality lost on the AFCS components?",
    options: { a: "Red", b: "Green", c: "Grey" },
    correct: "a",
  },
  {
    id: 205,
    category: "H175 ATA 22",
    question: "Where are the SEMA 1 & 2 PITCH actuators located?",
    options: {
      a: "Under the cockpit floor on the pilot's side",
      b: "In the cockpit ceiling on the pilot's side",
      c: "Behind the pylon deck of the tail boom",
    },
    correct: "b",
  },
  {
    id: 206,
    category: "H175 ATA 22",
    question:
      "What happens to the SEMA actuators in the event of an impact detected by the shock sensors associated with AMC2?",
    options: {
      a: "Power supply to AMC2 is cut",
      b: "SEMA actuators are frozen",
      c: "Power supply to AMC1 is cut",
    },
    correct: "a",
  },
  {
    id: 207,
    category: "H175 ATA 22",
    question: "Where are the trim actuators located?",
    options: {
      a: "Under the cockpit floor on the pilot's side",
      b: "In the cockpit ceiling on the pilot's side",
      c: "Behind the pylon deck of the tail boom",
    },
    correct: "a",
  },
  {
    id: 208,
    category: "H175 ATA 22",
    question: "What is the function of the IESI in the AFCS?",
    options: {
      a: "Back-up SAS mode",
      b: "Controls SEMA commands selection",
      c: "Provides attitude information",
    },
    correct: "a",
  },
  {
    id: 209,
    category: "H175 ATA 22",
    question:
      "Where is the backup Stabilisation Augmentation System (SAS) located?",
    options: {
      a: "Under the cockpit floor on the pilot's side",
      b: "In the cockpit ceiling on the pilot's side",
      c: "In the centre of the inter seat console",
    },
    correct: "a",
  },
  {
    id: 211,
    category: "Flight Control Systems",
    question: "What is the purpose of the cyclic trim actuators?",
    options: {
      a: "To provide a force feel and anchoring point for the flight controls with AP ON or OFF.",
      b: "To engage the autopilot and stabilize the aircraft.",
      c: "To control the yaw axis during flight.",
    },
    correct: "a",
  },
  {
    id: 212,
    category: "Flight Control Systems",
    question:
      "Which function is performed by the trim release buttons on the cyclic stick grips?",
    options: {
      a: "Disengage the clutch of the cyclic trim actuators.",
      b: "Activate the autopilot.",
      c: "Control the pitch and roll axes manually.",
    },
    correct: "a",
  },
  {
    id: 213,
    category: "Flight Control Systems",
    question:
      "What happens when the beep trim switch is actuated on the cyclic stick grip?",
    options: {
      a: "The autopilot disengages.",
      b: "The yaw trim actuator is engaged.",
      c: "The associated trim actuator rotates, causing the anchor point and flight controls to move.",
    },
    correct: "c",
  },
  {
    id: 214,
    category: "Flight Control Systems",
    question:
      "In which mode are AFCS commands inhibited if either the pilot or co-pilot cyclic stick is moved?",
    options: {
      a: "Auto-Trim function",
      b: "Fly Through mode",
      c: "Override Detected",
    },
    correct: "c",
  },
  {
    id: 215,
    category: "Flight Control Systems",
    question:
      "What distinguishes the collective trim actuator from the cyclic trim actuators?",
    options: {
      a: "It has a manual beep function.",
      b: "It contains a damping device.",
      c: "It can be manually overridden by the pilots.",
    },
    correct: "c",
  },
  {
    id: 216,
    category: "Flight Control Systems",
    question: "What type of actuator is the yaw trim actuator?",
    options: {
      a: "Electromagnetic actuator",
      b: "Friction type actuator",
      c: "Hydraulic actuator",
    },
    correct: "b",
  },
  {
    id: 217,
    category: "Flight Control Systems",
    question: "How is AFCS data sent to the Multi-Functional Displays (MFDs)?",
    options: {
      a: "Via one ARINC 429 line from AFCS Channel A and one ARINC 429 line from AFCS Channel B.",
      b: "Via one ARINC 429 line from AFCS Channel A and two ARINC 429 lines from AFCS Channel B.",
      c: "Via two ARINC 429 lines from AFCS Channel A and one ARINC 429 line from AFCS Channel B.",
    },
    correct: "b",
  },
  {
    id: 218,
    category: "Flight Control Systems",
    question: "What occurs during the AFCS self-test at aircraft power on?",
    options: {
      a: "The AFCS will engage automatically.",
      b: "The SEMAs and AFCS partitions will perform initial internal tests.",
      c: "The actuators and AFCS sensors will be tested, and SEMAs will recentre.",
    },
    correct: "c",
  },
  {
    id: 219,
    category: "Flight Control Systems",
    question: "How is the AFCS engaged?",
    options: {
      a: "By pressing the ALT mode button on the APCP.",
      b: "By pressing the AP1 or AP2 pushbuttons on the APCP or AP Recovery pushbutton on the cyclic stick grip.",
      c: "By pressing the Fast Cut-out switch on either cyclic stick grip.",
    },
    correct: "b",
  },
  {
    id: 220,
    category: "Flight Control Systems",
    question: "What happens if the backup SAS is engaged?",
    options: {
      a: "The AP1 and AP2 OFF lights will illuminate.",
      b: "The IESI will take control of SEMA1 actuators only.",
      c: "The AFCS will disengage automatically.",
    },
    correct: "b",
  },
  {
    id: 221,
    category: "Flight Control Systems",
    question: "What are the prerequisites for engaging an upper mode?",
    options: {
      a: "Basic stabilisation with long-term attitude retention (ATT mode).",
      b: "Completion of the pre-flight test.",
      c: "AFCS disengagement.",
    },
    correct: "a",
  },
  {
    id: 222,
    category: "Flight Control Systems",
    question:
      "What is the default master side for selecting navigation source?",
    options: {
      a: "No. 1",
      b: "No. 2",
      c: "No. 3",
    },
    correct: "b",
  },
  {
    id: 223,
    category: "Flight Control Systems",
    question: "What does the fly-through annunciation indicate?",
    options: {
      a: "A successful autopilot engagement.",
      b: "An inadvertent fly-through of an upper mode.",
      c: "A malfunction in the flight control system.",
    },
    correct: "b",
  },
  {
    id: 224,
    category: "H175 ATA 22",
    question:
      "What mode holds the current barometric altitude at the moment of engagement?",
    options: {
      a: "Altitude Hold Mode (ALT)",
      b: "Vertical Speed Hold Mode (V/S)",
      c: "Altitude Acquisition Mode (ALT.A)",
    },
    correct: "a",
  },
  {
    id: 225,
    category: "H175 ATA 22",
    question:
      "At what airspeed threshold does the ALT mode operate in the pitch axis?",
    options: { a: "Above 65 kts", b: "Below 60 kts", c: "Between 60-65 kts" },
    correct: "a",
  },
  {
    id: 226,
    category: "H175 ATA 22",
    question: "How can the ALT mode be engaged?",
    options: {
      a: "By pressing the V/S rotary switch on the APCP",
      b: "By pressing the ALT pushbutton on the APCP",
      c: "By pressing the Go Around button on the cyclic stick grips",
    },
    correct: "b",
  },
  {
    id: 227,
    category: "H175 ATA 22",
    question: "What action will not change the altitude reference in ALT mode?",
    options: {
      a: "Pressing the ALT pushbutton",
      b: "Adjusting the altitude reference using the beep trim switches",
      c: "Fly through action",
    },
    correct: "c",
  },
  {
    id: 228,
    category: "H175 ATA 22",
    question:
      "Which mode either maintains the current vertical speed or acquires and holds a pre-set vertical speed?",
    options: {
      a: "Altitude Hold Mode (ALT)",
      b: "Vertical Speed Hold Mode (V/S)",
      c: "Altitude Acquisition Mode (ALT.A)",
    },
    correct: "b",
  },
  {
    id: 229,
    category: "H175 ATA 22",
    question:
      "Under what condition does the V/S mode operate on the pitch axis?",
    options: {
      a: "If the airspeed is below 60 kts",
      b: "If the airspeed is above 65 kts",
      c: "If the airspeed is between 60-65 kts",
    },
    correct: "b",
  },
  {
    id: 230,
    category: "H175 ATA 22",
    question: "How can the V/S mode be engaged?",
    options: {
      a: "By pressing the ALT pushbutton on the APCP",
      b: "By pressing the V/S rotary switch on the APCP",
      c: "By pressing the Go Around button on the cyclic stick grips",
    },
    correct: "b",
  },
  {
    id: 231,
    category: "H175 ATA 22",
    question:
      "What action will have no effect on the V/S reference in V/S mode?",
    options: {
      a: "Adjusting the V/S reference using the V/S rotary switch",
      b: "Fly through action",
      c: "Adjusting the vertical speed using the beep trim switches",
    },
    correct: "b",
  },
  {
    id: 232,
    category: "H175 ATA 22",
    question: "Which mode acquires and holds a pre-set altitude?",
    options: {
      a: "Altitude Hold Mode (ALT)",
      b: "Vertical Speed Hold Mode (V/S)",
      c: "Altitude Acquisition Mode (ALT.A)",
    },
    correct: "c",
  },
  {
    id: 233,
    category: "H175 ATA 22",
    question: "What condition must be met for ALT.A mode to engage?",
    options: {
      a: "The pre-set altitude must be within 300 ft of the current altitude",
      b: "The pre-set altitude must be more than 300 ft from the current altitude",
      c: "The pre-set altitude must be the same as the current altitude",
    },
    correct: "b",
  },
  {
    id: 234,
    category: "H175 ATA 22",
    question: "How can the ALT.A mode be engaged?",
    options: {
      a: "By pressing the ALT pushbutton on the APCP",
      b: "By pressing the Go Around button on the cyclic stick grips",
      c: "By pressing the ALTA rotary switch on the APCP",
    },
    correct: "c",
  },
  {
    id: 235,
    category: "H175 ATA 22",
    question: "What does the ALT.A arrival point aid the crew with?",
    options: {
      a: "To estimate the aircraft's position at the end of the altitude transition",
      b: "To indicate the current altitude",
      c: "To adjust the reference altitude",
    },
    correct: "a",
  },
  {
    id: 236,
    category: "H175 ATA 22",
    question: "In ALT.A mode, how is the reference adjusted when below 500 ft?",
    options: {
      a: "By turning the ALT.A rotary knob on the APCP",
      b: "By longitudinal actions on the beep trim switches",
      c: "By pressing the ALTA rotary switch",
    },
    correct: "a",
  },
  {
    id: 237,
    category: "H175 ATA 22",
    question:
      "Which mode acquires and holds the selected glideslope for an approach?",
    options: {
      a: "Flight Path Angle Mode (FPA)",
      b: "Glideslope Mode (G/S)",
      c: "Altitude Acquisition Mode (ALT.A)",
    },
    correct: "b",
  },
  {
    id: 238,
    category: "H175 ATA 22",
    question:
      "At what airspeed threshold does the G/S mode operate in the pitch axis?",
    options: { a: "Above 65 kts", b: "Below 60 kts", c: "Between 60-65 kts" },
    correct: "a",
  },
  {
    id: 239,
    category: "H175 ATA 22",
    question: "How can the G/S mode be armed?",
    options: {
      a: "By pressing the V/S rotary switch on the APCP",
      b: "By pressing the Go Around button on the cyclic stick grips",
      c: "By selecting the ILS as the navigation source and pressing the CPL LSK on the MFD",
    },
    correct: "c",
  },
  {
    id: 240,
    category: "H175 ATA 22",
    question: "What action will disarm or decouple the G/S mode only?",
    options: {
      a: "Pressing the IAS rotary switch on the APCP",
      b: "Pressing the DISARM LSK on the MFD",
      c: "Pressing the ALT pushbutton on the APCP",
    },
    correct: "b",
  },
  {
    id: 241,
    category: "H175 ATA 22",
    question:
      "Which mode maintains the current ground slope reference or acquires and holds a pre-set ground slope reference?",
    options: {
      a: "Flight Path Angle Mode (FPA)",
      b: "Glideslope Mode (G/S)",
      c: "Ground Trajectory Command Mode (GTC)",
    },
    correct: "a",
  },
  {
    id: 242,
    category: "H175 ATA 22",
    question:
      "At what airspeed threshold does the FPA mode operate on the pitch axis?",
    options: { a: "Above 65 kts", b: "Below 60 kts", c: "Between 60-65 kts" },
    correct: "a",
  },
  {
    id: 243,
    category: "H175 ATA 22",
    question: "How can the FPA mode be engaged?",
    options: {
      a: "By pressing the V/S rotary switch on the APCP",
      b: "By selecting the HDG_VS/TRK_FPA switch to TRK_FPA and engaging the Go Around mode",
      c: "By pressing the ALT pushbutton on the APCP",
    },
    correct: "b",
  },
  {
    id: 244,
    category: "H175 ATA 22",
    question:
      "Which navigation format displays the reference as a course indication to the next waypoint?",
    options: { a: "HSI format", b: "HSO format", c: "SCT format" },
    correct: "a",
  },
  {
    id: 245,
    category: "H175 ATA 22",
    question:
      "What color is the course deviation pointer displayed in when the APP mode is captured?",
    options: { a: "Red", b: "Green", c: "Cyan" },
    correct: "b",
  },
  {
    id: 246,
    category: "H175 ATA 22",
    question: "How is the APP mode indicated on the AFCS strip when armed?",
    options: { a: "APP", b: "ROLL", c: "NAV" },
    correct: "a",
  },
  {
    id: 247,
    category: "H175 ATA 22",
    question:
      "Under what circumstances does the V.APP mode operate on the pitch axis?",
    options: {
      a: "When the airspeed is below 60 kts",
      b: "When the IAS or GTC modes are coupled",
      c: "When the airspeed is greater than 65 kts and the IAS and GTC modes are not coupled",
    },
    correct: "c",
  },
  {
    id: 248,
    category: "H175 ATA 22",
    question: "What conditions must be met to engage the V.APP mode?",
    options: {
      a: "Airspeed above 40 kts",
      b: "FMS GPS or SBAS selected as navigation source",
      c: "Armed together with the APP mode",
    },
    correct: "c",
  },
  {
    id: 249,
    category: "H175 ATA 22",
    question: "At what point is the V.APP mode automatically armed?",
    options: {
      a: "Final Approach Fix (FAF)",
      b: "Initial Fix (IF)",
      c: "Intermediate Fix (IF)",
    },
    correct: "c",
  },
  {
    id: 250,
    category: "H175 ATA 22",
    question:
      "What color is the navigation source information displayed in once the mode is coupled?",
    options: { a: "Red", b: "Green", c: "Cyan" },
    correct: "b",
  },
  {
    id: 251,
    category: "H175 ATA 22",
    question:
      "Where is the vertical deviation of the V.APP mode displayed on the FND?",
    options: {
      a: "Right side of the compass rose",
      b: "Left side of the compass rose",
      c: "Center of the compass rose",
    },
    correct: "b",
  },
  {
    id: 252,
    category: "H175 ATA 22",
    question:
      "How is the V.APP mode indicated on the AFCS strip when captured?",
    options: { a: "ROLL", b: "NAV", c: "V.APP" },
    correct: "c",
  },
  {
    id: 253,
    category: "H175 ATA 22",
    question:
      "What mode combines the lateral and vertical approach modes along with airspeed reduction along a computed path?",
    options: {
      a: "Offshore Approach Mode (APP, V.APP)",
      b: "Automatic ACAS Mode (ACAS)",
      c: "Loss Of Re-centring Information",
    },
    correct: "a",
  },
  {
    id: 254,
    category: "H175 ATA 22",
    question: "At what point is the offshore approach mode armed?",
    options: {
      a: "2 minutes prior to reaching the Initial Approach Fix (IAF) point",
      b: "3 minutes prior to reaching the IAF point",
      c: "1 minute prior to reaching the IAF point",
    },
    correct: "b",
  },
  {
    id: 255,
    category: "H175 ATA 22",
    question: "What happens to upper modes when both APs fail?",
    options: {
      a: "They remain operational",
      b: "They are decoupled",
      c: "They are lost along with basic stabilisation",
    },
    correct: "c",
  },
  {
    id: 256,
    category: "H175 ATA 22",
    question: "What message is displayed when both APs fail?",
    options: { a: "AUTOPILOT", b: "AP REDUNDANCY", c: "Loss Of Both APs" },
    correct: "c",
  },
  {
    id: 257,
    category: "H175 ATA 22",
    question:
      "In the event of a single AP failure, what happens to upper modes?",
    options: {
      a: "They are lost along with basic stabilisation",
      b: "They remain operational",
      c: "They are decoupled",
    },
    correct: "b",
  },
  {
    id: 258,
    category: "H175 ATA 22",
    question: "What happens when backup SAS is lost?",
    options: {
      a: "All upper modes are lost",
      b: "Basic stabilisation is lost",
      c: "Backup SAS is available",
    },
    correct: "b",
  },
  {
    id: 259,
    category: "H175 ATA 22",
    question: "What occurs if all SEMAs in a single axis fail?",
    options: {
      a: "The affected axis is automatically disengaged",
      b: "The system automatically reverts to dual-axis operation",
      c: "The system continues to operate normally",
    },
    correct: "a",
  },
  {
    id: 260,
    category: "H175 ATA 22",
    question: "What message is displayed when all SEMAs in a single axis fail?",
    options: { a: "AP ACTUATOR", b: "AUTOPILOT", c: "AP REDUNDANCY" },
    correct: "a",
  },
  {
    id: 261,
    category: "H175 ATA 22",
    question:
      "In the event of a trim actuator failure, what color is the trim actuator displayed in on the VMS-SYST page?",
    options: { a: "Red", b: "Green", c: "Grey" },
    correct: "c",
  },
  {
    id: 262,
    category: "H175 ATA 22",
    question:
      "What happens if the override detection fails on one trim actuator?",
    options: {
      a: "Auto trim function is disabled on the affected axis",
      b: "The system automatically reverts to dual-axis operation",
      c: "The system continues to operate normally",
    },
    correct: "a",
  },
  {
    id: 263,
    category: "H175 ATA 22",
    question:
      "What message is displayed in the event of a position feedback failure from a trim actuator?",
    options: { a: "AP ACTUATOR", b: "AP TRIM OFF", c: "Loss Of Both APs" },
    correct: "b",
  },
  {
    id: 264,
    category: "H175 ATA 22",
    question: "What is the purpose of the AFCS maintenance mode?",
    options: {
      a: "To simulate flight conditions",
      b: "For troubleshooting and testing LRUs",
      c: "To engage autopilot functions",
    },
    correct: "b",
  },
  {
    id: 265,
    category: "H175 ATA 33",
    question: "What is the purpose of the lighting system in the helicopter?",
    options: {
      a: "To provide lighting for passengers during the flight",
      b: "To allow the helicopter operation by day and by night with comfort and safety",
      c: "To indicate the helicopter's position to other aircraft",
    },
    correct: "b",
  },
  {
    id: 266,
    category: "H175 ATA 33",
    question:
      "Which of the following is not a component of the internal lighting system?",
    options: {
      a: "Cockpit lighting",
      b: "Landing lights",
      c: "Cabin lighting",
    },
    correct: "b",
  },
  {
    id: 267,
    category: "H175 ATA 33",
    question:
      "What is the purpose of the Helicopter Emergency Egress Lighting System (HEELS)?",
    options: {
      a: "To illuminate the cockpit during night flights",
      b: "To provide lighting for the passengers in case of emergency evacuation",
      c: "To indicate the helicopter's position during landing",
    },
    correct: "b",
  },
  {
    id: 268,
    category: "H175 ATA 33",
    question:
      "Which of the following is a component of the external lighting system?",
    options: {
      a: "Cabin lighting",
      b: "Position lights",
      c: "Cargo lighting",
    },
    correct: "b",
  },
  {
    id: 269,
    category: "H175 ATA 33",
    question: "What is the function of the storm light?",
    options: {
      a: "To provide ambient lighting in the cockpit",
      b: "To illuminate a specific portion of the instrument panel during stormy weather",
      c: "To signal the helicopter's position to other aircraft",
    },
    correct: "b",
  },
  {
    id: 270,
    category: "H175 ATA 33",
    question: "What is the purpose of the chart holders?",
    options: {
      a: "To store navigation charts",
      b: "To provide ambient lighting in the cabin",
      c: "To illuminate the cockpit during night flights",
    },
    correct: "a",
  },
  {
    id: 271,
    category: "H175 ATA 33",
    question: "How are the flashlights powered?",
    options: {
      a: "By the helicopter's electrical network",
      b: "By internal batteries",
      c: "By solar panels",
    },
    correct: "b",
  },
  {
    id: 272,
    category: "H175 ATA 33",
    question: "Where is the LH dome utility light Control Panel located?",
    options: {
      a: "On the overhead panel",
      b: "On the LH cabin ceiling",
      c: "On the inter-seat console",
    },
    correct: "b",
  },
  {
    id: 273,
    category: "H175 ATA 33",
    question: "What controls the power supply of the LH dome utility light?",
    options: {
      a: "The Lighting Control Panel",
      b: "The LH dome utility light Control Panel",
      c: "The instrument panel",
    },
    correct: "b",
  },
  {
    id: 274,
    category: "H175 ATA 33",
    question: "How is the storm light controlled?",
    options: {
      a: "Via the Lighting Control Panel",
      b: "Via the instrument panel",
      c: "Via the storm light Control Panel",
    },
    correct: "a",
  },
  {
    id: 275,
    category: "H175 ATA 33",
    question: "What is the purpose of the signalization lights?",
    options: {
      a: "To provide illumination for the passengers",
      b: "To indicate various warnings and cautions to the crew",
      c: "To assist in landing the helicopter",
    },
    correct: "b",
  },
  {
    id: 276,
    category: "H175 ATA 33",
    question: "Which bus bars supply power to the signalization lights?",
    options: {
      a: "ESS and NOSHED",
      b: "SHED 1 and SHED 2",
      c: "DBAT1 and DBAT2",
    },
    correct: "a",
  },
  {
    id: 277,
    category: "H175 ATA 33",
    question: "How is the DAY/NIGHT management controlled?",
    options: {
      a: "Via the Lighting Control Panel",
      b: "Via the signalization lights",
      c: "Via the instrument panel",
    },
    correct: "a",
  },
  {
    id: 278,
    category: "H175 ATA 33",
    question: "What happens if there is a loss of SHED 1 power supply?",
    options: {
      a: "Cabin lighting remains operational",
      b: "Cabin lighting is lost",
      c: "Cabin lighting is reduced",
    },
    correct: "b",
  },
  {
    id: 279,
    category: "H175 ATA 33",
    question: "What does the emergency exit toggle switch control?",
    options: {
      a: "The landing lights",
      b: "The cabin emergency lighting system",
      c: "The cockpit lighting",
    },
    correct: "b",
  },
  {
    id: 280,
    category: "H175 ATA 33",
    question: "Where is the Lighting Control Unit (LCU) located?",
    options: {
      a: "On the inter-seat console",
      b: "On the overhead panel",
      c: "On the LH cabin ceiling",
    },
    correct: "c",
  },
  {
    id: 281,
    category: "H175 ATA 33",
    question: "What is the function of the Backup Battery Pack (BBP)?",
    options: {
      a: "To power the cockpit lighting",
      b: "To power the emergency lights in case of loss of main generating system",
      c: "To power the landing lights",
    },
    correct: "b",
  },
  {
    id: 282,
    category: "H175 ATA 33",
    question: "How is the BBP activated?",
    options: {
      a: "By the Lighting Control Panel",
      b: "By the storm light Control Panel",
      c: "By AMC2 or WIS through LCUs",
    },
    correct: "c",
  },
  {
    id: 283,
    category: "H175 ATA 33",
    question:
      "What happens when the 'EMER EXIT' toggle switch is in the 'ON' position?",
    options: {
      a: "The emergency exit lights are illuminated",
      b: "The landing lights are illuminated",
      c: "The cockpit lighting is illuminated",
    },
    correct: "a",
  },
  {
    id: 284,
    category: "H175 ATA 33",
    question: "What is the purpose of the LH and RH LCUs?",
    options: {
      a: "To control the cockpit lighting",
      b: "To control the landing lights",
      c: "To control the cabin lights, passengers signs, and Exterior Emergency Lights (EELs)",
    },
    correct: "c",
  },
  {
    id: 285,
    category: "H175 ATA 33",
    question:
      "What is the purpose of the Helicopter Emergency Egress Lighting System (HEELS)?",
    options: {
      a: "To localize crew and passengers emergency exits in the event of: Loss of the aircraft power supply system, Ditching, and to a depth of 50 feet for 10 minutes.",
      b: "To provide lighting for passengers during the flight",
      c: "To indicate the helicopter's position to other aircraft",
    },
    correct: "a",
  },
  {
    id: 286,
    category: "H175 ATA 33",
    question:
      "Is the Helicopter Emergency Egress Lighting System (HEELS) an optional part of the Emergency Exit Lighting system?",
    options: {
      a: "Yes",
      b: "No",
      c: "It depends on the helicopter model",
    },
    correct: "b",
  },
  {
    id: 287,
    category: "H175 ATA 33",
    question:
      "How many independent systems are there for the Helicopter Emergency Egress Lighting System (HEELS)?",
    options: {
      a: "One",
      b: "Two",
      c: "Three",
    },
    correct: "b",
  },
  {
    id: 288,
    category: "H175 ATA 33",
    question:
      "How are the RH and LH cabin Lighting Control Units (LCU) controlled?",
    options: {
      a: "Via analog signals",
      b: "Via digital signals",
      c: "Via discrete signals",
    },
    correct: "c",
  },
  {
    id: 289,
    category: "H175 ATA 33",
    question:
      "What sends the generators loss status discrete signal to the RH/LH cabin control units?",
    options: {
      a: "AMC1",
      b: "AMC2",
      c: "AMC3",
    },
    correct: "b",
  },
  {
    id: 290,
    category: "H175 ATA 33",
    question:
      "What sends the immersion status discrete signal to the RH/LH Control Units?",
    options: {
      a: "AMC1",
      b: "AMC2",
      c: "Water Immersion Sensor (WIS2)",
    },
    correct: "c",
  },
  {
    id: 291,
    category: "H175 ATA 33",
    question:
      "How are Cabin Helicopter Emergency Egress Lightings (HEEL) and markers powered?",
    options: {
      a: "Single power supplied",
      b: "Double power supplied",
      c: "Triple power supplied",
    },
    correct: "a",
  },
  {
    id: 292,
    category: "H175 ATA 33",
    question: "Where are the LH Cabin HEELs located?",
    options: {
      a: "On the roof",
      b: "Around the LH forward cabin windows, around the LH rear cabin windows, and on the frame of the aircraft",
      c: "Under the floor",
    },
    correct: "b",
  },
  {
    id: 293,
    category: "H175 ATA 33",
    question: "Where are the LH markers located?",
    options: {
      a: "On the roof",
      b: "Around the LH forward cabin windows, around the LH rear cabin windows, and on the frame of the aircraft",
      c: "Under the floor",
    },
    correct: "b",
  },
  {
    id: 294,
    category: "H175 ATA 33",
    question: "Where are the RH Cabin HEELs located?",
    options: {
      a: "On the roof",
      b: "Around the RH forward cabin windows, around the RH rear cabin windows, and on the frame of the aircraft",
      c: "Under the floor",
    },
    correct: "b",
  },
  {
    id: 295,
    category: "H175 ATA 33",
    question: "Where are the RH markers located?",
    options: {
      a: "On the roof",
      b: "Around the RH forward cabin windows, around the RH rear cabin windows, and on the frame of the aircraft",
      c: "Under the floor",
    },
    correct: "b",
  },
  {
    id: 296,
    category: "H175 ATA 33",
    question: "Where is the LH HEEL PSU located?",
    options: {
      a: "On the roof near the pilot's seat",
      b: "On the cabin ceiling near the passenger door",
      c: "Under the floor",
    },
    correct: "b",
  },
  {
    id: 297,
    category: "H175 ATA 33",
    question: "Where is the RH HEEL PSU located?",
    options: {
      a: "On the roof near the pilot's seat",
      b: "On the cabin ceiling near the passenger door",
      c: "Under the floor",
    },
    correct: "a",
  },
  {
    id: 298,
    category: "H175 ATA 33",
    question:
      "What is the function of the Power Supply Unit (PSU) in the HEEL system?",
    options: {
      a: "To provide battery back-up for the system",
      b: "To control the illumination of the lights",
      c: "To provide power to the engines",
    },
    correct: "a",
  },
  {
    id: 299,
    category: "H175 ATA 33",
    question:
      "How many rechargeable cells are in the Battery Pack of the HEEL system?",
    options: {
      a: "4",
      b: "6",
      c: "8",
    },
    correct: "c",
  },
  {
    id: 300,
    category: "H175 ATA 33",
    question: "What does the Battery Pack of the HEEL system convert?",
    options: {
      a: "AC current to DC current",
      b: "DC current to AC current",
      c: "AC current to RF current",
    },
    correct: "b",
  },
  {
    id: 301,
    category: "H175 ATA 33",
    question:
      "How is the Helicopter Egress Emergency Lighting (HEEL) system activated in automatic mode?",
    options: {
      a: "By manually flipping a switch",
      b: "By pulling a lever",
      c: "By setting the 'EMER EXIT' toggle-switch on the Lighting Control Panel (LCP) in 'ARM' position and 'EMERGENCY EXITS LIGHTING' toggle-switch in 'OFF' position",
    },
    correct: "c",
  },
  {
    id: 302,
    category: "H175 ATA 33",
    question:
      "What activates the Helicopter Egress Emergency Lighting (HEEL) system in case of ditching?",
    options: {
      a: "Pulling the 'EMER EXIT' toggle switch",
      b: "Water Immersion Sensor (WIS2) detecting water",
      c: "Pushing the 'EMERGENCY EXITS LIGHTING' toggle-switch",
    },
    correct: "b",
  },
  {
    id: 303,
    category: "H175 ATA 33",
    question:
      "How is the Helicopter Egress Emergency Lighting (HEEL) system activated in manual mode?",
    options: {
      a: "Automatically",
      b: "By pulling the 'EMER EXIT' toggle-switch",
      c: "By setting the 'EMERG EXIT' switch in 'ON' position",
    },
    correct: "c",
  },
  {
    id: 304,
    category: "H175 ATA 33",
    question: "What happens when both generators are lost?",
    options: {
      a: "Nothing, the system continues operating normally",
      b: "The system shuts down",
      c: "The 'EMER EXIT' toggle switch is set to 'ARM' position and 'EMERGENCY EXITS LIGHTING' in 'OFF' position",
    },
    correct: "c",
  },

  {
    id: 305,
    category: "H175 Engine Manuals",
    question: "What does a Full Cycle consist of?",
    options: {
      a: "An engine start followed by one or more flights.",
      b: "An engine start followed by one flight then by a shut-down.",
      c: "An engine start followed by multiple flights and one shut-down.",
    },
    correct: "b",
  },
  {
    id: 306,
    category: "H175 Engine Manuals",
    question:
      "Which of the following components are subject to low-cycle fatigue (LCF) due to cyclic operation of the engine?",
    options: {
      a: "Compressor Turbine Blade",
      b: "Gas-Generator",
      c: "All engine components",
    },
    correct: "c",
  },
  {
    id: 307,
    category: "H175 Engine Manuals",
    question:
      "What action should be taken when one of the engine rotating components subject to LCF counting is replaced by another one?",
    options: {
      a: "Update the flight logbook only.",
      b: "Update the engine logbook and all related documents.",
      c: "Update the flight logbook and update the EECU memory.",
    },
    correct: "b",
  },
  {
    id: 308,
    category: "H175 Engine Manuals",
    question:
      "What is the maximum permissible Maximum Oil Temperature (MOT) when using Type I oils?",
    options: {
      a: "140°C",
      b: "113°C",
      c: "295°F",
    },
    correct: "b",
  },
  {
    id: 309,
    category: "H175 Engine Manuals",
    question: "What is the time limit for starting allowable MOT?",
    options: {
      a: "One minute",
      b: "30 minutes",
      c: "Time unlimited",
    },
    correct: "b",
  },
  {
    id: 310,
    category: "H175 Engine Manuals",
    question:
      "Which category of maintenance actions includes visually inspecting, recording exceedance in the logbook, and establishing the cause of exceedance?",
    options: {
      a: "Level 1",
      b: "Level 2",
      c: "Level 3",
    },
    correct: "a",
  },
  {
    id: 311,
    category: "H175 Engine Manuals",
    question:
      "Which of the following maintenance actions may necessitate greater action when cumulatively exceeded?",
    options: {
      a: "Level 1",
      b: "Level 2",
      c: "Level 3",
    },
    correct: "c",
  },
  {
    id: 312,
    category: "H175 Engine Manuals",
    question:
      "Which type of inspection is made from within touching distance and may require removal or opening of access panels or doors?",
    options: {
      a: "GVI",
      b: "DET",
      c: "SDI",
    },
    correct: "a",
  },
  {
    id: 313,
    category: "H175 Engine Manuals",
    question:
      "Which of the following inspection levels is likely to make extensive use of special inspection techniques and/or equipment?",
    options: {
      a: "GVI",
      b: "DET",
      c: "SDI",
    },
    correct: "c",
  },
  {
    id: 314,
    category: "H175 Engine Manuals",
    question: "What is the purpose of the Numerical Index in the IPC?",
    options: {
      a: "To list all the engine parts and accessories.",
      b: "To provide a guide to the IPC.",
      c: "To show the applicable documentation for each part.",
    },
    correct: "a",
  },
  {
    id: 315,
    category: "H175 Engine Manuals",
    question: "What does the Effectivity Code column in the IPC show?",
    options: {
      a: "The build specification number.",
      b: "The part numbers that are interchangeable.",
      c: "The applicability of parts to an engine model.",
    },
    correct: "c",
  },
  {
    id: 316,
    category: "H175 Engine Manuals",
    question:
      "What does the 'Rwk' term indicate in the Units per Assembly column of the Detailed Parts List?",
    options: {
      a: "The part is restricted from interchangeability.",
      b: "The part can only be obtained through rework.",
      c: "The part is interchangeable as a set.",
    },
    correct: "b",
  },
  {
    id: 317,
    category: "H175 Engine Manuals",
    question:
      "What does the 'Not Interchangeable' (PRC 03) term mean in the Catalogue Terms?",
    options: {
      a: "The old part may be used to replace the new part only.",
      b: "The old part must be replaced with the old part; the new part must be replaced with the new part.",
      c: "All parts can be freely interchanged.",
    },
    correct: "b",
  },
  {
    id: 318,
    category: "H175 Engine Manuals",
    question:
      "What does the abbreviation 'DET' stand for in the inspection levels?",
    options: {
      a: "Detailed Inspection",
      b: "General Visual Inspection",
      c: "Special Detailed Inspection",
    },
    correct: "a",
  },
  {
    id: 319,
    category: "H175 Engine Manuals",
    question:
      "What is the maximum permissible Maximum Oil Temperature (MOT) when using Type II oils?",
    options: {
      a: "145°C",
      b: "140°C",
      c: "113°C",
    },
    correct: "a",
  },
  {
    id: 320,
    category: "H175 Engine Manuals",
    question:
      "What is the purpose of the 'Transferred' term in the Catalogue Terms?",
    options: {
      a: "To advise the latest approved revision level of a supplier part number.",
      b: "To identify and control the interchangeable parts.",
      c: "For the relocation of a part to a different location.",
    },
    correct: "c",
  },
  {
    id: 321,
    category: "H175 Engine Manuals",
    question: "What is the purpose of the Numerical Index in the IPC?",
    options: {
      a: "To list all the engine parts and accessories.",
      b: "To provide a guide to the IPC.",
      c: "To show the applicable documentation for each part.",
    },
    correct: "a",
  },
  {
    id: 322,
    category: "H175 Engine Manuals",
    question: "What does the Effectivity Code column in the IPC show?",
    options: {
      a: "The build specification number.",
      b: "The part numbers that are interchangeable.",
      c: "The applicability of parts to an engine model.",
    },
    correct: "c",
  },
  {
    id: 323,
    category: "H175 Engine Manuals",
    question:
      "What does the 'Rwk' term indicate in the Units per Assembly column of the Detailed Parts List?",
    options: {
      a: "The part is restricted from interchangeability.",
      b: "The part can only be obtained through rework.",
      c: "The part is interchangeable as a set.",
    },
    correct: "b",
  },
  {
    id: 324,
    category: "H175 Engine Manuals",
    question:
      "What does the 'Not Interchangeable' (PRC 03) term mean in the Catalogue Terms?",
    options: {
      a: "The old part may be used to replace the new part only.",
      b: "The old part must be replaced with the old part; the new part must be replaced with the new part.",
      c: "All parts can be freely interchanged.",
    },
    correct: "b",
  },
  {
    id: 325,
    category: "H175 Engine Manuals",
    question:
      "What does the abbreviation 'DET' stand for in the inspection levels?",
    options: {
      a: "Detailed Inspection",
      b: "General Visual Inspection",
      c: "Special Detailed Inspection",
    },
    correct: "a",
  },
  {
    id: 326,
    category: "H175 Engine Manuals",
    question:
      "What is the maximum permissible Maximum Oil Temperature (MOT) when using Type II oils?",
    options: {
      a: "145°C",
      b: "140°C",
      c: "113°C",
    },
    correct: "a",
  },
  {
    id: 327,
    category: "H175 Engine Manuals",
    question:
      "What is the purpose of the 'Transferred' term in the Catalogue Terms?",
    options: {
      a: "To advise the latest approved revision level of a supplier part number.",
      b: "To identify and control the interchangeable parts.",
      c: "For the relocation of a part to a different location.",
    },
    correct: "c",
  },
  {
    id: 328,
    category: "H175 Engine Manuals",
    question:
      "Which type of inspection is made from within touching distance and may require removal or opening of access panels or doors?",
    options: {
      a: "GVI",
      b: "DET",
      c: "SDI",
    },
    correct: "a",
  },
  {
    id: 329,
    category: "H175 Engine Manuals",
    question:
      "Which of the following inspection levels is likely to make extensive use of special inspection techniques and/or equipment?",
    options: {
      a: "GVI",
      b: "DET",
      c: "SDI",
    },
    correct: "c",
  },
  {
    id: 330,
    category: "H175 Engine Manuals",
    question:
      "What does the abbreviation 'SDI' stand for in the inspection levels?",
    options: {
      a: "Detailed Inspection",
      b: "General Visual Inspection",
      c: "Special Detailed Inspection",
    },
    correct: "c",
  },
  {
    id: 331,
    category: "H175 Engine Manuals",
    question:
      "What is the maximum permissible Maximum Oil Temperature (MOT) when using Type I oils?",
    options: {
      a: "140°C",
      b: "113°C",
      c: "295°F",
    },
    correct: "b",
  },
  {
    id: 332,
    category: "H175 Engine Manuals",
    question: "What is the time limit for starting allowable MOT?",
    options: {
      a: "One minute",
      b: "30 minutes",
      c: "Time unlimited",
    },
    correct: "b",
  },
  {
    id: 333,
    category: "H175 Engine Manuals",
    question: "Which of the following maintenance actions is the most severe?",
    options: {
      a: "Hot section inspection",
      b: "Reject engine and send to an approved overhaul facility",
      c: "Visually inspect and record exceedance in logbook",
    },
    correct: "b",
  },
  {
    id: 334,
    category: "H175 Engine Manuals",
    question:
      "Which type of inspection is made under normally available lighting conditions such as daylight, hanger lighting, flashlight or drop light?",
    options: {
      a: "GVI",
      b: "DET",
      c: "SDI",
    },
    correct: "a",
  },
  {
    id: 335,
    category: "H175 Engine Manuals",
    question: "What does the 'OPC' term indicate in the Catalogue Terms?",
    options: {
      a: "A failure finding task.",
      b: "A task to determine that an item is fulfilling its intended purpose.",
      c: "An intensive examination of a specific item.",
    },
    correct: "b",
  },
  {
    id: 336,
    category: "H175 Engine Manuals",
    question:
      "What is the purpose of the 'Latest Parts List No.' term in the Catalogue Terms?",
    options: {
      a: "To advise the latest approved revision level of a supplier part number.",
      b: "To identify and control the interchangeable parts.",
      c: "To control the interchangeable parts which are approved for use on the engine.",
    },
    correct: "a",
  },
  {
    id: 337,
    category: "H175 Engine Manuals",
    question:
      "What is the maximum permissible steady state MOT limit applicable to Type II oils?",
    options: {
      a: "113°C",
      b: "140°C",
      c: "145°C",
    },
    correct: "b",
  },
  {
    id: 338,
    category: "H175 Engine Manuals",
    question:
      "What is the maximum permissible steady state MOT limit applicable to Type I oils?",
    options: {
      a: "140°C",
      b: "113°C",
      c: "295°F",
    },
    correct: "a",
  },
  {
    id: 339,
    category: "H175 Engine Manuals",
    question:
      "What does the 'Restricted Interchangeability With' (PRC 07) term mean in the Catalogue Terms?",
    options: {
      a: "All the old parts must be replaced by all the new parts as an assembly.",
      b: "The old part must be replaced with the old part; the new part must be replaced with the new part.",
      c: "The old part may be used to replace the new part only.",
    },
    correct: "a",
  },
  {
    id: 340,
    category: "H175 ATA 70",
    question:
      "What is the purpose of the 'Engine Standard Practices' outlined in Chapter 70-00-00 of the P&WC PT6-67E EMM?",
    options: {
      a: "To provide guidelines for engine maintenance only.",
      b: "To outline the standard procedures for engine removal and installation.",
      c: "To establish standardized practices for engine maintenance, removal/installation, inspection, cleaning, and repair.",
    },
    correct: "c",
  },
  {
    id: 341,
    category: "H175 ATA 70",
    question:
      "Which of the following items should never be reused according to the Engine Standard Practices?",
    options: {
      a: "Lockwire (safety wire)",
      b: "Stainless steel bolts",
      c: "Cupwashers",
    },
    correct: "a",
  },
  {
    id: 342,
    category: "H175 ATA 70",
    question:
      "How should cotterpins be installed according to the Engine Standard Practices?",
    options: {
      a: "Bend one end of the pin back over stud or bolt and leave the other end straight.",
      b: "Bend both ends of the pin back over the nut.",
      c: "Bend one end of the pin back over stud or bolt and the other end flat against flat on nut.",
    },
    correct: "c",
  },
  {
    id: 343,
    category: "H175 ATA 70",
    question:
      "What is the recommended diameter of lockwire according to the Engine Standard Practices?",
    options: {
      a: "0.025 inch",
      b: "0.050 inch",
      c: "0.100 inch",
    },
    correct: "a",
  },
  {
    id: 344,
    category: "H175 ATA 70",
    question:
      "What is the recommended method for cleaning electrical connectors according to the Engine Standard Practices?",
    options: {
      a: "Use a brush to apply solvent to the electrical contacts.",
      b: "Apply lubricant directly to the connector contacts.",
      c: "Use a spray or brush to apply cleaner (degreaser) or isopropyl alcohol to the electrical contacts and connector faces.",
    },
    correct: "c",
  },
  {
    id: 345,
    category: "H175 ATA 70",
    question:
      "What should be used to apply a small amount of electrical contact enhancer into the contact socket according to the Engine Standard Practices?",
    options: {
      a: "Finger",
      b: "Metal tweezers",
      c: "Kit supplied lint-free swab applicator",
    },
    correct: "c",
  },
  {
    id: 346,
    category: "H175 ATA 70",
    question:
      "What should be done after the EPC stabilisation phase according to the Engine Standard Practices?",
    options: {
      a: "Start the engine.",
      b: "Wait for at least 7 seconds before re-engaging any mode.",
      c: "Disconnect the DCU adapter cable.",
    },
    correct: "b",
  },
  {
    id: 347,
    category: "H175 ATA 70",
    question: "What is the purpose of the Engine Power Assurance Check (EPAC)?",
    options: {
      a: "To determine the power output of the engine.",
      b: "To detect any signs of engine deterioration.",
      c: "To verify the torque of the engine.",
    },
    correct: "b",
  },
  {
    id: 348,
    category: "H175 ATA 70",
    question: "When should the EPAC be carried out?",
    options: {
      a: "Weekly",
      b: "After every flight",
      c: "As called for in the EMM and normally on a daily basis iaw the company AMP.",
    },
    correct: "c",
  },
  {
    id: 349,
    category: "H175 ATA 70",
    question:
      "What is the purpose of P&WC's Diagnostics, Prognostics & Health Management (DPHM) system?",
    options: {
      a: "To monitor the engine's key performance data and make proactive maintenance decisions.",
      b: "To analyze the weather conditions for flight planning.",
      c: "To calculate the fuel consumption of the engine.",
    },
    correct: "a",
  },
  {
    id: 350,
    category: "H175 ATA 70",
    question: "What does the DPHM system enable operators to do?",
    options: {
      a: "It allows operators to manually adjust engine parameters.",
      b: "It enables operators to analyze engine performance data and make proactive maintenance decisions.",
      c: "It allows operators to modify the engine's hardware.",
    },
    correct: "b",
  },
  {
    id: 351,
    category: "H175 ATA 70",
    question:
      "What is included in P&WC's Diagnostics, Prognostics & Health Management (DPHM) system?",
    options: {
      a: "GBS Transfer Module and GBS Lite",
      b: "Aircraft performance data and weather forecasting tools",
      c: "Flight operation manuals and maintenance records",
    },
    correct: "a",
  },
  {
    id: 352,
    category: "H175 ATA 70",
    question:
      "How is data transferred from the DCU to a laptop computer using GBSLite?",
    options: {
      a: "By pressing a button on the DCU.",
      b: "By manually inputting the data into the computer.",
      c: "By selecting 'Download DCU' in the GBSLite software.",
    },
    correct: "c",
  },
  {
    id: 353,
    category: "H175 ATA 70",
    question: "What type of data does the DCU store?",
    options: {
      a: "Engine usage data and exceedance data",
      b: "Aircraft maintenance records",
      c: "Fuel consumption data",
    },
    correct: "a",
  },
  {
    id: 354,
    category: "H175 ATA 70",
    question:
      "What should operators do after making changes to the DCU data using GBSLite?",
    options: {
      a: "No action is required.",
      b: "Document the modifications in the engine logbook.",
      c: "Immediately start the engine.",
    },
    correct: "b",
  },
  {
    id: 355,
    category: "H175 ATA 70",
    question:
      "What is the purpose of the Flight Line Troubleshooting Cumulative Exceedances?",
    options: {
      a: "To display cumulative exceedance times on a histogram chart for each power rating.",
      b: "To calculate the total flight time of the aircraft.",
      c: "To record engine maintenance actions.",
    },
    correct: "a",
  },
  {
    id: 356,
    category: "H175 ATA 70",
    question:
      "When should the EECU automatically close the P3 SOV during the EPC procedure?",
    options: {
      a: "When the engine is started.",
      b: "During stabilisation phase to avoid variation of P3 bleed.",
      c: "After the EPC results are displayed.",
    },
    correct: "b",
  },
  {
    id: 357,
    category: "H175 ATA 70",
    question: "What is the purpose of the Web-based ECTM?",
    options: {
      a: "To provide in-flight entertainment for passengers.",
      b: "To analyze changes in engine performance parameters on a regular basis.",
      c: "To calculate aircraft weight and balance.",
    },
    correct: "b",
  },
  {
    id: 358,
    category: "H175 ATA 70",
    question:
      "How is data uploaded in a remote location using the Web-based ECTM?",
    options: {
      a: "By manually entering the data into the system.",
      b: "By downloading the data to a laptop computer and physically transporting it to the remote location.",
      c: "Via the internet using the Web-based ECTM program.",
    },
    correct: "c",
  },
  {
    id: 359,
    category: "H175 ATA 71",
    question: "What is the purpose of the engine upper firewall?",
    options: {
      a: "To attach the engine to the airframe",
      b: "To isolate each engine compartment from non-fire zones",
      c: "To drain engine fuel in case of aborted engine start",
    },
    correct: "b",
  },
  {
    id: 360,
    category: "H175 ATA 71",
    question: "What is the material composition of the engine lower firewall?",
    options: {
      a: "Titanium sheets reinforced with titanium and/or stainless-steel angles",
      b: "Impregnated glass fiber structure reinforced with honeycomb",
      c: "Aluminium",
    },
    correct: "a",
  },
  {
    id: 361,
    category: "H175 ATA 71",
    question: "What is the function of the engine support bolts?",
    options: {
      a: "To drain engine fuel in case of aborted engine start",
      b: "To transmit flight and ground loads from the engines to the airframe",
      c: "To protect the electrical system from mechanical and environmental impacts",
    },
    correct: "b",
  },
  {
    id: 362,
    category: "H175 ATA 71",
    question: "What is the main function of the airframe fittings?",
    options: {
      a: "To attach the engine to the airframe",
      b: "To transmit flight and ground loads from the engines to the airframe",
      c: "To reduce the transmission of vibration to the airframe",
    },
    correct: "c",
  },
  {
    id: 363,
    category: "H175 ATA 71",
    question:
      "What is the purpose of the winter mask kit installed on each grid of the front sliding cowling?",
    options: {
      a: "To reduce the risk from Foreign Object Damage",
      b: "To protect the engine from snow and icing ingestion during flight in freezing conditions",
      c: "To drain engine fuel in case of aborted engine start",
    },
    correct: "b",
  },
  {
    id: 364,
    category: "H175 ATA 71",
    question:
      "What does the winter plenum kit installed in each plenum in the engine’s compartments consist of?",
    options: {
      a: "Horizontal deflector and vertical barrier",
      b: "Plenum Shim and top plenum",
      c: "Plenum grid and engine support bolts",
    },
    correct: "b",
  },
  {
    id: 365,
    category: "H175 ATA 71",
    question: "What is the function of the air inlet rods?",
    options: {
      a: "To reduce the transmission of vibration to the airframe",
      b: "To hold the air inlet plenum in position",
      c: "To transmit flight and ground loads from the engines to the airframe",
    },
    correct: "b",
  },
  {
    id: 366,
    category: "H175 ATA 71",
    question: "What is the purpose of the engine drains?",
    options: {
      a: "To evacuate hot air from the engine in case of jamming of the engine combustion chamber valve",
      b: "To drain engine fuel in case of aborted engine start",
      c: "To limit the risk of fire in the engine compartment",
    },
    correct: "b",
  },
  {
    id: 367,
    category: "H175 ATA 71",
    question: "Where are the engine drains located?",
    options: {
      a: "Between the upper deck and the engine in the engine compartment",
      b: "Inside the plenum using titanium or steel fasteners",
      c: "On the outer skin of each cowling",
    },
    correct: "a",
  },
  {
    id: 368,
    category: "H175 ATA 71",
    question: "What is the purpose of the engine/MGB couplings?",
    options: {
      a: "To support the engine while ensuring functional hinges",
      b: "To attach the engine to the airframe",
      c: "To reduce the transmission of vibration to the airframe",
    },
    correct: "a",
  },
  {
    id: 369,
    category: "H175 ATA 71",
    question: "What is the main purpose of the fixed cowlings?",
    options: {
      a: "To provide the MGB oil cooler air path",
      b: "To protect the engines from the ingestion of foreign objects",
      c: "To transmit flight and ground loads from the engines to the airframe",
    },
    correct: "b",
  },
  {
    id: 370,
    category: "H175 ATA 71",
    question: "What is the composition of the rear sliding cowling skin?",
    options: {
      a: "Impregnated glass fiber structure reinforced with honeycomb",
      b: "Titanium sheets reinforced with titanium and/or stainless-steel angles",
      c: "Carbon fiber",
    },
    correct: "a",
  },
  {
    id: 371,
    category: "H175 ATA 71",
    question: "What is the function of the top sliding firewall?",
    options: {
      a: "To transmit flight and ground loads from the engines to the airframe",
      b: "To participate in fire containment and extinguishing agent containment",
      c: "To attach the engine to the airframe",
    },
    correct: "b",
  },
  {
    id: 372,
    category: "H175 ATA 71",
    question: "What is the purpose of the rear sliding cowling?",
    options: {
      a: "To provide the MGB oil cooler air path",
      b: "To protect the engines from the ingestion of foreign objects",
      c: "To transmit flight and ground loads from the engines to the airframe",
    },
    correct: "b",
  },
  {
    id: 373,
    category: "H175 ATA 71",
    question: "What is the function of the wings on the rear sliding cowling?",
    options: {
      a: "To transmit flight and ground loads from the engines to the airframe",
      b: "To improve the aerodynamic performance of the aircraft",
      c: "To attach the engine to the airframe",
    },
    correct: "b",
  },
  {
    id: 374,
    category: "H175 ATA 71",
    question:
      "What is the purpose of the rear chimney on the rear sliding cowling?",
    options: {
      a: "To provide the MGB oil cooler air path",
      b: "To protect the engines from the ingestion of foreign objects",
      c: "To participate in fire containment and extinguishing agent containment",
    },
    correct: "c",
  },
  {
    id: 375,
    category: "H175 ATA 71",
    question: "What is the function of the frames on the rear sliding cowling?",
    options: {
      a: "To provide the MGB oil cooler air path",
      b: "To protect the engines from the ingestion of foreign objects",
      c: "To support the fixed cowling and engine secondary exhaust nozzles",
    },
    correct: "c",
  },
  {
    id: 376,
    category: "H175 ATA 71",
    question: "What is the function of the rear sliding firewall?",
    options: {
      a: "To provide the MGB oil cooler air path",
      b: "To participate in fire containment and extinguishing agent containment",
      c: "To transmit flight and ground loads from the engines to the airframe",
    },
    correct: "b",
  },
  {
    id: 377,
    category: "H175 ATA 71",
    question: "What is the purpose of the rear cowling?",
    options: {
      a: "To provide the MGB oil cooler air path",
      b: "To protect the engines from the ingestion of foreign objects",
      c: "To transmit flight and ground loads from the engines to the airframe",
    },
    correct: "b",
  },
  {
    id: 378,
    category: "H175 ATA 71",
    question: "What is the function of the rear sliding firewall?",
    options: {
      a: "To provide the MGB oil cooler air path",
      b: "To participate in fire containment and extinguishing agent containment",
      c: "To transmit flight and ground loads from the engines to the airframe",
    },
    correct: "b",
  }
];
