const questionBank = [
    {
      id: 1,
      category: 'ATA 18',
      question: 'Which type of balancing ensures that components are balanced around their center of gravity when not moving?',
      options: { a: 'Dynamic Balancing', b: 'Static Balancing', c: 'Passive Vibration Control' },
      correct: 'b',
    },
    {
      id: 2,
      category: 'ATA 18',
      question: 'What is the role of the Active Vibration Control (AVC) system in the S-92 helicopter?',
      options: { a: 'Reducing rotor track imbalance', b: 'Mitigating airframe vibrations', c: 'Adjusting blade track and balance' },
      correct: 'b',
    },
    {
      id: 3,
      category: 'ATA 18',
      question: 'What is the most likely cause of rotor vibration in the S-92 related to the blades?',
      options: { a: 'Static imbalance', b: 'Dynamic imbalance', c: 'Faulty AVC components' },
      correct: 'b',
    },
    {
      id: 4,
      category: 'ATA 18',
      question: 'How is dynamic balancing of the main rotor blades in the S-92 achieved?',
      options: { a: 'Adjusting pitch change rods', b: 'Using balance weights at the hub', c: 'Applying vibration sensors' },
      correct: 'b',
    },
    {
      id: 5,
      category: 'ATA 18',
      question: 'What is the purpose of the blade tracker in the HUMS system?',
      options: { a: 'Monitoring tail rotor balance', b: 'Providing blade track and lead/lag data', c: 'Adjusting main rotor pitch' },
      correct: 'b',
    },
    {
        id: 6,
        category: 'ATA 18',
        question: 'How is dynamic balancing of the tail rotor achieved in the S-92?',
        options: { a: 'Adjusting weights in the leading edge', b: 'Using balance weights at the hub', c: 'Applying reflective tape on blades' },
        correct: 'b',
    },
    {
        id: 7,
        category: 'ATA 18',
        question: 'What is the purpose of the HUMS Main Processing Unit (MPU)?',
        options: { a: 'Balancing main rotor blades', b: 'Collecting and analyzing sensor data', c: 'Controlling airframe vibrations' },
        correct: 'b',
    },
    {
        id: 8,
        category: 'ATA 18',
        question: 'Which material is used for screws for balancing the High-Speed Shaft flange?',
        options: { a: 'Steel, Aluminum, Titanium', b: 'Steel, Brass, Titanium', c: 'Steel, Aluminum, Nickle' },
        correct: 'a',
    },
    {
        id: 9,
        category: 'ATA 18',
        question: 'When is the active mode of the Blade Tracker used?',
        options: { a: 'During daylight', b: 'In low light levels or at night', c: 'During static balancing' },
        correct: 'b',
    },


    {
        id: 10,
        category: 'ATA 18',
        question: 'How many force generators are typically installed in newer aircraft configurations?',
        options: { a: '3', b: '6', c: '10' },
        correct: 'b',
    },
    {
        id: 11,
        category: 'ATA 18',
        question: 'Where is the AVCC located in the aircraft?',
        options: { a: 'Nose wheel well', b: 'RH avionics cabinet', c: 'Forward cabin floor' },
        correct: 'b',
    },
    {
        id: 12,
        category: 'ATA 18',
        question: 'How is EU #1 powered?',
        options: { a: 'DC power supply', b: 'AC power from 1 AC bus', c: 'AC power from 2 AC bus' },
        correct: 'c',
    },
    {
        id: 13,
        category: 'ATA 18',
        question: 'How many airframe accelerometers are used in the AVC system?',
        options: { a: '3', b: '6', c: '10' },
        correct: 'c',
    },
    {
        id: 14,
        category: 'ATA 18',
        question: 'What caution will be displayed if one or more Force Generators or four accelerometers fail?',
        options: { a: 'AVC DEGRADED', b: 'AVC FAIL', c: 'IBIT FAIL' },
        correct: 'a',
    },
    {
        id: 15,
        category: 'ATA 18',
        question: 'According to the MEL, is the AVC system essential for flight?',
        options: { a: 'Yes', b: 'No', c: 'Only in certain conditions' },
        correct: 'b',
    },
    {
        id: 16,
        category: 'ATA 18',
        question: 'Where should personnel be during the IBIT test?',
        options: { a: 'In the cockpit', b: 'Passenger compartment', c: 'Top Deck' },
        correct: 'a',
    },
    {
        id: 17,
        category: 'ATA 18',
        question: 'How is the AVC IBIT test initiated?',
        options: { a: 'By turning off the VIB CTRL switch', b: 'By pressing the IBIT soft-key on the MFD screen', c: 'By disconnecting the force generators' },
        correct: 'b',
    },
    {
        id: 18,
        category: 'ATA 18',
        question: 'What caution is displayed if both AC generators fail or if the NR signal is lost?',
        options: { a: 'AVC DEGRADED', b: 'AVC FAIL', c: 'IBIT FAIL' },
        correct: 'b',
    },
    {
        id: 19,
        category: 'ATA 18',
        question: 'What happens if the IBIT test fails?',
        options: { a: 'The AVC system resets automatically', b: 'MAINTENANCE status will be displayed', c: 'The airframe vibration level becomes noticeably smoother' },
        correct: 'b',
    },
    {
        id: 20,
        category: 'ATA 18',
        question: 'When will AVC FAIL Caution display be suppressed ',
        options: { a: 'less than 95% NR and WOW', b: 'In Flight', c: 'During power up' },
        correct: 'a',
    },
    {
        id: 21,
        category: 'ATA 34',
        question: 'What is the frequency range for VOR/ILS tuning?',
        options: { a: '108.00 to 112.00 MHz', b: '112.00 to 117.95 MHz', c: '108.00 to 117.95 MHz' },
        correct: 'c',
      },
      {
        id: 22,
        category: 'ATA 34',
        question: 'How are VOR frequencies selected within the range of 108.00 to 112.00 MHz?',
        options: { a: 'When the digit to the right of the decimal is an even number', b: 'When the digit to the right of the decimal is an odd number', c: 'All frequencies in this range are VOR frequencies' },
        correct: 'a',
      },
/*       {
        id: 23,
        category: 'ATA 34',
        question: 'What is the default frequency for ILS within the range of 108.00 to 112.00 MHz?',
        options: { a: '108.65', b: '109.50', c: '110.15' },
        correct: 'c',
      }, */
      {
        id: 24,
        category: 'ATA 34',
        question: 'Where is the Marker Beacon antenna located?',
        options: { a: 'Under the fuselage, level with the main entrance door', b: 'Under the fuselage, below the co-pilot’s seat', c: 'In the nose compartment' },
        correct: 'b',
      },
      {
        id: 25,
        category: 'ATA 34',
        question: 'How are VOR/LOC and VHF 2 antennas connected?',
        options: { a: 'Through a coupler in the seat well under the co-pilot’s seat', b: 'Through a coupler below the floor of the forward Cabin area', c: 'They are not connected' },
        correct: 'b',
      },
/*       {
        id: 26,
        category: 'ATA 34',
        question: 'How is VOR information displayed on the MFDs controlled?',
        options: { a: 'Through the Display Control Panel (DCP)', b: 'Via the Remote Instrument Controller (RIC)', c: 'Automatically on the NAV display' },
        correct: 'a',
      }, */
      {
        id: 27,
        category: 'ATA 34',
        question: 'What does the white arrow controlled by the RIC represent?',
        options: { a: 'Glideslope indication', b: 'Marker Beacon indication', c: 'VOR radial selection' },
        correct: 'c',
      },
      {
        id: 28,
        category: 'ATA 34',
        question: 'In VOR Deviations, how is the lateral deviation bar oriented when the beacon is to the left of the selected radial?',
        options: { a: 'To the right', b: 'Centered', c: 'To the left' },
        correct: 'c',
      },
      {
        id: 29,
        category: 'ATA 34',
        question: 'What color is used to signify VOR or FMS deviation in the Lateral Deviation Bar?',
        options: { a: 'Magenta', b: 'Blue', c: 'Yellow' },
        correct: 'a',
      },
      {
        id: 30,
        category: 'ATA 34',
        question: 'What does a yellow text label indicate when the off-side VOR is selected as the active source of navigation?',
        options: { a: 'Signal weakness', b: 'System failure', c: 'Offside selection' },
        correct: 'c',
      },
      {
        id: 31,
        category: 'ATA 34',
        question: 'How is a failure of a VOR or ILS system displayed on the MFD?',
        options: { a: 'In green', b: 'In yellow', c: 'In red' },
        correct: 'c',
      },
      {
        id: 32,
        category: 'ATA 34',
        question: 'During an ILS approach, what does a full-scale lateral indication result in?',
        options: { a: 'Yellow diamond', b: 'Magenta diamond', c: 'White arrow' },
        correct: 'a',
      },
      {
        id: 33,
        category: 'ATA 34',
        question: 'Where is the DME Receiver/Transmitter located?',
        options: { a: 'Under the fuselage', b: 'In the left Avionics Rack', c: 'In the nose compartment' },
        correct: 'b',
      },
      {
        id: 34,
        category: 'ATA 34',
        question: 'How many channels does the scanning DME receiver have in one unit?',
        options: { a: '1', b: '2', c: '3' },
        correct: 'c',
      },
/*       {
        id: 35,
        category: 'ATA 34',
        question: 'What is Channel 3 used for in the scanning DME receiver?',
        options: { a: 'Auto-tune from FMS', b: 'Range calculation for VOR 2', c: 'Range calculation for ILS 2' },
        correct: 'a',
      }, */
      {
        id: 36,
        category: 'ATA 34',
        question: 'Where is the DME antenna located?',
        options: { a: 'Under the co-pilot’s seat', b: 'Under the aircraft on the left', c: 'In the nose compartment' },
        correct: 'b',
      },
      {
        id: 37,
        category: 'ATA 34',
        question: 'In normal operation how is the DME frequency tuned?',
        options: { a: 'Independently on the DME Main Page', b: 'Paired with the NAV frequencies', c: 'Through the Display Control Panel (DCP)' },
        correct: 'b',
      },
      {
        id: 38,
        category: 'ATA 34',
        question: 'What does a yellow H next to the VOR frequency on the MFDs indicate?',
        options: { a: 'High signal strength', b: 'DME Hold function activated', c: 'Health issue with avionics' },
        correct: 'b',
      },
      {
        id: 39,
        category: 'ATA 34',
        question: 'How is DME Hold selected?',
        options: { a: 'Automatically', b: 'Through the Remote Instrument Controller (RIC)', c: 'From the RTU' },
        correct: 'c',
      },
      {
        id: 40,
        category: 'ATA 34',
        question: 'Where can you find the status of the DME system?',
        options: { a: 'NAV Main Page', b: 'HLTH >> AVIONICS Page 1', c: 'RTU Diagnostic Menu' },
        correct: 'b',
      },
      {
        id: 41,
        category: 'ATA 34',
        question: 'When testing the DME from RTU 1, what indicates a serviceable system?',
        options: { a: 'A yellow H on the MFDs', b: '100 NM displayed under the VOR/ILS  indication', c: 'A green marker on the PFD' },
        correct: 'b',
      },
      {
        id: 42,
        category: 'ATA 34',
        question: 'How are VOR 1 and ILS 1 diagnostics accessed?',
        options: { a: 'From the NAV Main Page', b: 'RTU 1 Diagnostic Menu', c: 'HLTH >> AVIONICS Page 2' },
        correct: 'b',
      },
      {
        id: 43,
        category: 'ATA 34',
        question: 'What bus does VOR/ILS 1 use for power supply?',
        options: { a: 'No 1 DC Primary Bus', b: 'DC Essential Bus', c: 'AC Bus' },
        correct: 'a',
      },
      {
        id: 44,
        category: 'ATA 28',
        question: 'Where are the fuel tanks located in the aircraft?',
        options: { a: 'Sponsons', b: 'Fuselage', c: 'Tail' },
        correct: 'a',
      },
      {
        id: 45,
        category: 'ATA 28',
        question: 'What material are the fuel tank bladders made of?',
        options: { a: 'Aluminum', b: 'Nylon reinforced rubber', c: 'Carbon composite' },
        correct: 'b',
      },
     {
        id: 46,
        category: 'ATA 28',
        question: 'When Will PRIME PUMP FAIL Caution illuminate ?',
        options: { a: '< 5 psi', b: '< 55psi', c: 'Tank booster pump fail' },
        correct: 'a',
      },
      {
        id: 47,
        category: 'ATA 28',
        question: 'What triggers the FUEL 1/2 LOW CAUTION?',
        options: { a: '440 nautical miles', b: '215 lbs ± 45 lbs', c: 'Low-level fuel sensors' },
        correct: 'b',
      },
      {
        id: 48,
        category: 'ATA 28',
        question: 'What components can be accessed through the tank maintenance access panel?',
        options: { a: 'Engine mounts', b: 'Landing gear', c: 'Quantity probe, low-level fuel sensor, refuel/defuel valve' },
        correct: 'c',
      },
/*       {
        id: 49,
        category: 'ATA 28',
        question: 'What color is the main body of breakaway valves?',
        options: { a: 'Blue', b: 'Red', c: 'Yellow' },
        correct: 'b',
      }, */
      {
        id: 50,
        category: 'ATA 28',
        question: 'What is the maximum pressure allowed during pressure defuel?',
        options: { a: '55 psig', b: '-3 psig', c: '20 gpm' },
        correct: 'b',
      },
      {
        id: 51,
        category: 'ATA 28',
        question: 'Where is the aircraft pressure refuelled / defuelled from?',
        options: { a: 'RH sponson', b: 'LH sponson', c: 'Gravity fill port' },
        correct: 'b',
      },
      {
        id: 52,
        category: 'ATA 28',
        question: 'What does the Pressure Refuel Control Panel control?',
        options: { a: 'Engine thrust', b: 'Fuel tank temperature', c: 'Left and right sponson fuel delivery' },
        correct: 'c',
      },
      {
        id: 53,
        category: 'ATA 28',
        question: 'What is the purpose of the high-level shutoff valve in the fuel cell?',
        options: { a: 'Prevent fuel spills', b: 'Increase fuel flow', c: 'Maintain atmospheric pressure' },
        correct: 'a',
      },
/*       {
        id: 54,
        category: 'ATA 28',
        question: 'What is the purpose of the Auxiliary Tank - Fuel Management Panel?',
        options: { a: 'Engine control', b: 'Fuel quantity measurement', c: 'Aircraft navigation' },
        correct: 'b',
      }, */
      {
        id: 55,
        category: 'ATA 28',
        question: 'How much usable fuel does each Internal Auxiliary Fuel System (IAFS) tank hold?',
        options: { a: '1384 lbs', b: '382 gallons', c: '440 nautical miles' },
        correct: 'a',
      },
      {
        id: 56,
        category: 'ATA 28',
        question: 'What pressure if fuel delivered during pressure refuel?',
        options: { a: '55 psi', b: '-3 psi', c: '20 gpm' },
        correct: 'a',
      },
      {
        id: 57,
        category: 'ATA 28',
        question: 'Where is the Pressure Refuel Control Panel (PRCP) located?',
        options: { a: 'Pressure refuel point', b: 'Cockpit central pedestal', c: 'Fuel bowser' },
        correct: 'b',
      },
      {
        id: 58,
        category: 'ATA 28',
        question: 'What is the function of the Pressure Refuel Control switches during refuelling?',
        options: { a: 'control of left and right sponson fuel delivery', b: 'Increase fuel flow', c: 'Manage cockpit pressure' },
        correct: 'a',
      },
/*       {
        id: 59,
        category: 'ATA 28',
        question: 'How are the aux tanks refuelled during pressure refuel operations?',
        options: { a: 'Simultaneously with main tanks', b: 'After main tanks are full', c: 'Independently of main tanks' },
        correct: 'a',
      }, */
      {
        id: 60,
        category: 'ATA 28',
        question: 'What does the Internal Auxiliary Fuel System (IAFS) MODE SELECT switch control?',
        options: { a: 'Engine mode', b: 'Fuel transfer mode', c: 'Aircraft speed' },
        correct: 'b',
      },
      {
        id: 61,
        category: 'ATA 28',
        question: 'What is the purpose of the gravity refuel adapter?',
        options: { a: 'Stop fuel flow', b: 'Provide tank access for gravity filling', c: 'Connect to the APU' },
        correct: 'b',
      },
      {
        id: 62,
        category: 'ATA 28',
        question: 'What should be checked before attempting gravity refuelling?',
        options: { a: 'Fuel temperature', b: 'Fuel level through sight glass', c: 'Engine oil level' },
        correct: 'b',
      },
      {
        id: 63,
        category: 'ATA 28',
        question: 'Where are the sump drains located?',
        options: { a: 'Top of the fuel tank', b: 'Pressure refuel point', c: 'Centrally in the bottom of each tank' },
        correct: 'c',
      },
      {
        id: 64,
        category: 'ATA 28',
        question: 'What is the total fuel capacity (pressure Refuel)',
        options: { a: '5175lbs', b: '3086lbs', c: '7700lbs' },
        correct: 'a',
      },
/*       {
        id: 65,
        category: 'ATA 28',
        question: 'Where are the fuel select valve switches located?',
        options: { a: 'Throttle quadrant', b: 'Overhead switch panel', c: 'Engine Control Quadrant' },
        correct: 'a',
      }, */
      {
        id: 66,
        category: 'ATA 28',
        question: 'What are the three positions of the fuel select valve switches?',
        options: { a: 'DIR, XFD, OFF', b: 'AUTO, PUMP 1, PUMP 2', c: 'ON, OFF, AUTO' },
        correct: 'a',
      },
      {
        id: 67,
        category: 'ATA 28',
        question: 'How is the fuel valve selection displayed on the EICAS when in the CROSSFEED position?',
        options: { a: 'Fuel line connected directly to engine pod', b: 'Fuel line cross-connected to engine pod', c: 'Fuel line disconnected from the engine pod' },
        correct: 'b',
      },
/*       {
        id: 68,
        category: 'ATA 28',
        question: 'Where is the fuel prime switch located?',
        options: { a: 'Throttle quadrant', b: 'Central overhead switch panel', c: 'Engine Control Quadrant' },
        correct: 'b',
      }, */
/*       {
        id: 69,
        category: 'ATA 28',
        question: 'In which position will the prime pumps alternate their use when in AUTO?',
        options: { a: 'PUMP 1', b: 'PUMP 2', c: 'AUTO' },
        correct: 'c',
      }, */
/*       {
        id: 70,
        category: 'ATA 28',
        question: 'How are the engine fuel selector valves powered?',
        options: { a: 'Aircraft power', b: 'Battery Utility bus', c: 'APU power' },
        correct: 'b',
      }, */
/*      {
         id: 71,
        category: 'ATA 28',
        question: 'What controls the OFF selection of the engine fuel selector valves?',
        options: { a: 'Fire Control Panel', b: 'Maintenance Data Computer', c: 'Cockpit engine Control Quadrant' },
        correct: 'a',
      }, */
      {
        id: 72,
        category: 'ATA 28',
        question: 'Where are the fuel prime pumps located?',
        options: { a: 'Left and right sponsons', b: 'Left side mid-cabin section', c: 'Engine Bay' },
        correct: 'b',
      },
      {
        id: 73,
        category: 'ATA 28',
        question: 'What is the normal pressure provided by the fuel prime pumps?',
        options: { a: '<5 psi', b: '11-16.5 psi', c: '3 psi' },
        correct: 'b',
      },
      {
        id: 74,
        category: 'ATA 28',
        question: 'When does the MDC automatically control the operation of the prime pumps in AUTO position?',
        options: { a: 'During maintenance', b: 'After PBIT', c: 'During a normal start' },
        correct: 'c',
      },
      {
        id: 75,
        category: 'ATA 28',
        question: 'What happens if the MDC fails during prime pump operation?',
        options: { a: 'Pump No.1 operates by default', b: 'Pump No.2 operates by default', c: 'Both pumps stop' },
        correct: 'a',
      },
/*       {
        id: 76,
        category: 'ATA 28',
        question: 'When can manual fuel prime be selected?',
        options: { a: 'During flight', b: 'During APU operation', c: 'After maintenance on the fuel system' },
        correct: 'c',
      }, */
      {
        id: 77,
        category: 'ATA 28',
        question: 'Where is the prime pump pressure low pressure switch located?',
        options: { a: 'Engine pod', b: 'Mid-cabin section', c: 'Throttle quadrant' },
        correct: 'b',
      },
      {
        id: 78,
        category: 'ATA 28',
        question: 'What does the prime pump pressure switch detect?',
        options: { a: 'High pressure', b: 'Low pressure (<5 psi)', c: 'Temperature' },
        correct: 'b',
      },
      {
        id: 79,
        category: 'ATA 28',
        question: 'What caution is initiated if the prime pump pressure switch detects low pressure?',
        options: { a: 'APU FAIL', b: 'PRIME PUMP FAIL', c: 'FUEL LEAK' },
        correct: 'b',
      },
      {
        id: 80,
        category: 'ATA 28',
        question: 'What is the maximum fuel imbalance between LH & RH tanks?',
        options: { a: '500 lbs', b: '700 lbs', c: '1000 lbs' },
        correct: 'b',
      },
      {
        id: 81,
        category: 'ATA 28',
        question: 'What is the Fuel Cell Sump Drain Valve Wrench used for?',
        options: { a: 'Fuel pressure test', b: 'Fuel cell installation', c: 'Fuel tank drain valve' },
        correct: 'c',
      },
      {
        id: 82,
        category: 'ATA 28',
        question: 'What does the SK2000FIT Fuel Integrity Tester detect?',
        options: { a: 'Fuel temperature', b: 'Fuel leaks', c: 'Fuel pressure' },
        correct: 'b',
      },
      {
        id: 83,
        category: 'ATA 28',
        question: 'What critical maintenance function does the SK2000FIT perform?',
        options: { a: 'Engine start', b: 'Fuel leakage testing', c: 'Fuel cell installation' },
        correct: 'b',
      },
      {
        id: 84,
        category: 'ATA 28',
        question: 'What is the purpose of the Fuel Feed System Vacuum Test?',
        options: { a: 'Check fuel temperature', b: 'Check fuel pressure', c: 'Check fuel system integrity' },
        correct: 'c',
      },
      {
        id: 85,
        category: 'ATA 28',
        question: 'What does the Fuel Quantity Gauging System monitor?',
        options: { a: 'Engine temperature', b: 'Fuel quantity', c: 'Aircraft speed' },
        correct: 'b',
      },
      {
        id: 86,
        category: 'ATA 28',
        question: 'How many fuel quantity probes does each fuel tank have?',
        options: { a: 'One', b: 'Two', c: 'Three' },
        correct: 'b',
      },
      {
        id: 87,
        category: 'ATA 28',
        question: 'Where are the fuel probes attached in each main sponson tank?',
        options: { a: 'The rear', b: 'On the sides', c: 'Between the bridge and to fittings in the top of the tank' },
        correct: 'c',
      },
      {
        id: 88,
        category: 'ATA 28',
        question: 'How many low-level sensors are included in the low level/temperature compensating system?',
        options: { a: 'Two', b: 'Four', c: 'Six' },
        correct: 'b',
      },
/*       {
        id: 89,
        category: 'ATA 28',
        question: 'What type of data interlink is used for fuel quantity information?',
        options: { a: 'SPI bus', b: 'I2C bus', c: 'USB connection' },
        correct: 'a',
      }, */
      {
        id: 90,
        category: 'ATA 28',
        question: 'Where is the Fuel Conditioning Unit (FCU) located?',
        options: { a: 'Cockpit', b: 'Lower Left mid-cabin bulkhead', c: 'LH Avionic cabinet' },
        correct: 'b',
      },
      {
        id: 91,
        category: 'ATA 28',
        question: 'How many microcomputer-based channels does the FCU contain?',
        options: { a: 'One', b: 'Two', c: 'Three' },
        correct: 'b',
      },
      {
        id: 92,
        category: 'ATA 28',
        question: 'What does the FCU use the fuel temperature data for?',
        options: { a: 'Low-level compensation', b: 'Voltage measurements', c: 'Fuel mass correction' },
        correct: 'c',
      },
      {
        id: 93,
        category: 'ATA 28',
        question: 'How is the FQGS self-test (CBIT) routine triggered?',
        options: { a: 'Manually by the crew', b: 'Automatically', c: 'Through radio signals' },
        correct: 'b',
      },
      {
        id: 94,
        category: 'ATA 28',
        question: 'What is the duration of the FQGS IBIT test?',
        options: { a: '5 seconds', b: '10 seconds', c: '15 seconds' },
        correct: 'b',
      },
      {
        id: 95,
        category: 'ATA 28',
        question: 'What will the total fuel quantity display on the EICAS show during the IBIT test?',
        options: { a: '3086 lbs', b: '500 kg', c: '2000 lbs' },
        correct: 'a',
      },
      {
        id: 96,
        category: 'ATA 28',
        question: 'How is the active or last active Prime Pump indicated on the HEALTH page?',
        options: { a: 'Red legend', b: 'Green legend', c: 'Yellow legend' },
        correct: 'b',
      },
      {
        id: 97,
        category: 'ATA 28',
        question: 'What does the Engine Instrument and Crew Alerting System (EICAS) display for low fuel conditions?',
        options: { a: 'Blue tape', b: 'Yellow tapes', c: 'Green tapes' },
        correct: 'b',
      },
      {
        id: 98,
        category: 'ATA 28',
        question: 'At what fuel quantity does the low fuel condition turn the tapes and numbers yellow?',
        options: { a: '100 lbs', b: '215 ± 45 lbs', c: '500 kg' },
        correct: 'b',
      },
      {
        id: 99,
        category: 'ATA 28',
        question: 'What does the yellow/green coloured barber pole on the fuel quantity symbology indicate?',
        options: { a: 'Full tank', b: '1 hour of fuel remaining', c: 'Empty tank' },
        correct: 'b',
      },
       {
        id: 100,
        category: 'ATA 28',
        question: 'Where are the breakaway valves located?',
        options: { a: 'Sponson to aircraft racetrack', b: 'transfer point to the upper deck for both engine and APU supply', c: 'Both' },
        correct: 'c',
      }, 
      {
        id: 101,
        category: 'ATA 28',
        question: 'What does the SOV1 WRNG POSN or SOV2 WRNG POSN indication mean?',
        options: { a: 'Fuel tank full', b: 'Valve in wrong position depending on demanded position', c: 'Normal operation' },
        correct: 'b',
      },
      {
        id: 102,
        category: 'ATA 28',
        question: 'What happens if no data is being received from the FCU?',
        options: { a: 'Green tapes', b: 'Yellow tapes', c: 'Red dashes and black text' },
        correct: 'c',
      },
      {
        id: 103,
        category: 'ATA 28',
        question: 'Where are the fuel quantity probes and low-level sensors inputs sent?',
        options: { a: 'Fuel Conditioning Unit onto the DCU', b: 'Fuel Control Unit onto the DCU', c: ' Directly to the Data Concentrator Units' },
        correct: 'a',
        },
      {
        id: 104,
        category: 'ATA 28',
        question: 'If PUMP 1 is shown in green on the Aircraft Status page? ',
        options: { a: 'Pump 1 was the last prime pump to be used or is in use', b: 'Prime pump 1 BIT test passed', c: 'Prime pump 1 is faulty' },
        correct: 'a',
      },
      {
        id: 105,
        category: 'ATA 28',
        question: 'Where does the APU take its supply?  ',
        options: { a: 'Supply Tank  ', b: 'Right Hand Sponson Tank', c: 'Left Hand Sponson Tank' },
        correct: 'c',
      },
      ,
      {
        id: 106,
        category: 'ATA 28',
        question: 'What are the three positions of the prime pump select valve switches?',
        options: { a: 'DIR, XFD, OFF', b: 'AUTO, PUMP 1, PUMP 2', c: 'ON, OFF, AUTO' },
        correct: 'c',
      },
      {
        id: 107,
        category: 'ATA 28',
        question: 'In normal operation what component decides which prime pump is used?',
        options: { a: 'Maintenance Data Computer ', b: 'Fuel conditioning unit', c: 'Data concentrators unit' },
        correct: 'a',
      },
      {
        id: 108,
        category: 'ATA 28',
        question: 'How are the bag tanks attached to the sponson?',
        options: { a: 'Nuts and Bolts', b: 'Velcro and Cord', c: 'Interference fit' },
        correct: 'b',
      },
      {
        id: 109,
        category: 'ATA 28',
        question: 'What position can the gravity fuel filler cap be fitted?',
        options: { a: 'Any position', b: 'Arrow pointing up', c: 'View window at top' },
        correct: 'b',
      },
      {
        id: 110,
        category: 'ATA 28',
        question: 'How are the breakaway valves operated?',
        options: { a: 'Electrically', b: 'Actuate when side loading causes a low shear frangible fitting in the valve to break.', c: 'aircraft integrated inertia switches' },
        correct: 'b',
      }, 
      {
        id: 111,
        category: 'ATA 28',
        question: 'When is the prime pump needed?',
        options: { a: 'engine fuel boost pumps for start, and to the APU continuously, while the APU is running', b: 'Normal engine operation', c: 'APU start ONLY' },
        correct: 'a',
      },
      {
        id: 112,
        category: 'ATA 28',
        question: 'Where are the prime pumps located?',
        options: { a: 'Engine bay', b: 'within the fuel tank', c: 'Left hand mid-cabin wall' },
        correct: 'c',
      },
      {
        id: 113,
        category: 'ATA 28',
        question: 'How are the fuel tank high level switches tested?',
        options: { a: 'BIT during power up', b: 'high level pre check switch', c: 'IBIT on STATUS PAGE' },
        correct: 'b',
      },
      {
        id: 114,
        category: 'ATA 28',
        question: 'Where is the pressure refuel/defuel valves located',
        options: { a: 'LH mid-cabin', b: 'Fuel Tank bridge support', c: 'Top deck' },
        correct: 'b',
      },
      {
        id: 115,
        category: 'ATA 28',
        question: 'How many fuel quantity sensor are located in each tank?',
        options: { a: '1', b: '3', c: '2' },
        correct: 'c',
      },
      {
        id: 116,
        category: 'ATA 28',
        question: 'What components can be found on the fuel sensor probe',
        options: { a: 'fuel sensor only', b: 'Fuel sensor, Low level sensor and High Level sensor ', c: 'Fuel sensor, Low Level sensor and temperature compensating' },
        correct: 'c',
      },
      {
        id: 117,
        category: 'ATA 28',
        question: 'How many channels does the FCU have?',
        options: { a: '1', b: '2', c: '3' },
        correct: 'b',
      },
      {
        id: 118,
        category: 'ATA 28',
        question: 'Where is the fuel prime low pressure switch located?',
        options: { a: 'LH mid-cabin ', b: 'LH Sponson tank', c: 'LH avionic rack' },
        correct: 'a',
      },
      {
        id: 119,
        category: 'ATA 28',
        question: 'Where do the fuel selector valves get their power?',
        options: { a: 'Battery Utility bus', b: 'AC 2 Bus', c: 'DC Gen converter' },
        correct: 'a',
      },
      {
        id: 120,
        category: 'ATA 28',
        question: 'Where are fuel flow indications derived from?',
        options: { a: 'EICAS page', b: 'Fuel Metering Unit', c: 'Low-level sensors' },
        correct: 'b',
      },
      {
        id: 121,
        category: 'ATA 28',
        question: 'At what level will Fuel 1/2 LOW caution display?',
        options: { a: '215 ± 45 lbs', b: '32 lbs', c: '1 hours fuel remaining' },
        correct: 'a',
      },
      {
        id: 122,
        category: 'ATA 34',
        question: 'What does the ADF system consist of?',
        options: { a: 'Receiver and Antenna.', b: 'Receiver / Transceiver module', c: 'integrated in to the DCU' },
        correct: 'a',
      }, 
      
      {
        id: 123,
        category: 'ATA 34',
        question: 'Where is the ADF receiver located?',
        options: { a: 'Right avionics rack', b: 'Top of the left avionics rack', c: 'Bottom of the left avionics rack' },
        correct: 'b',
      },
      
      {
        id: 124,
        category: 'ATA 34',
        question: 'How many loop antennae does the ADF antenna have for direction finding?',
        options: { a: '1', b: '2', c: '3' },
        correct: 'b',
      },
      
      {
        id: 125,
        category: 'ATA 34',
        question: 'Which button on the Audio Controller selects the sense antenna for listening to the beacon IDENT?',
        options: { a: 'L2', b: 'R2', c: 'L3' },
        correct: 'a',
      },
      
      {
        id: 126,
        category: 'ATA 34',
        question: 'How is the ADF Main Page accessed?',
        options: { a: 'Pressing R3 once', b: 'Pressing L4 twice', c: 'Pressing R3 twice from the Top Level Page' },
        correct: 'c',
      },
      
      {
        id: 127,
        category: 'ATA 34',
        question: 'What does the ADF Test on the Main Page display if the system is serviceable?',
        options: { a: 'A code of 00', b: 'A code of 01', c: 'No code' },
        correct: 'a',
      },
      
      {
        id: 128,
        category: 'ATA 34',
        question: 'Where is the status of the ADF displayed?',
        options: { a: 'HLTH >> AVIONICS Page 2', b: 'HLTH >> AVIONICS Page 1', c: 'Top Level Page' },
        correct: 'b',
      },
      
      {
        id: 129,
        category: 'ATA 34',
        question: 'How many RADALT systems does the aircraft have?',
        options: { a: 'Two', b: 'Three', c: 'One' },
        correct: 'c',
      },
      
      {
        id: 130,
        category: 'ATA 34',
        question: 'What is the altitude range of the RADALT system?',
        options: { a: '0 to 1000 feet', b: '0 to 2500 feet', c: '0 to 5000 feet' },
        correct: 'b',
      },
      
      {
        id: 131,
        category: 'ATA 34',
        question: 'Where is the RAD ALT Receiver/Transmitter located?',
        options: { a: 'Bottom of the left avionics rack', b: 'Top of the left avionics rack', c: 'Right avionics rack' },
        correct: 'b',
      },
      
      {
        id: 132,
        category: 'ATA 34',
        question: 'How many Decision Height Bugs can be set?',
        options: { a: 'One', b: 'Two', c: 'Three' },
        correct: 'b',
      },
      
      {
        id: 133,
        category: 'ATA 34',
        question: 'When does the digital RADALT AGL indication and pointer change to yellow?',
        options: { a: 'Above the RA setting', b: 'Below the RA setting', c: 'At the RA setting' },
        correct: 'b',
      },
      
      {
        id: 134,
        category: 'ATA 34',
        question: 'What does the CAT A RADALT indicator show above the TDP setting?',
        options: { a: 'Digital Text in white, arc in green', b: 'Digital Text in yellow, arc in yellow', c: 'Digital Text in yellow, arc in green' },
        correct: 'a',
      },
      
      {
        id: 135,
        category: 'ATA 34',
        question: 'What does the red AGL fails flag indicate?',
        options: { a: 'System under test', b: 'RADALT failure', c: 'Normal operation' },
        correct: 'b',
      },
      
      {
        id: 136,
        category: 'ATA 34',
        question: 'How is the RADALT system tested for serviceability?',
        options: { a: 'Using a test set', b: 'Pressing RAD ALT 2 on HLTH >> AVIONICS Page 2', c: 'Pressing IBIT on RAD ALT 1 on HLTH >> AVIONICS Page 2' },
        correct: 'c',
      },
      
      {
        id: 137,
        category: 'ATA 34',
        question: 'When should the RADALT system be zeroed?',
        options: { a: 'Every flight', b: 'If IBIT reading is more than 5 ft above or below 100 ft', c: 'During pre-flight inspection' },
        correct: 'b',
      },
      
      {
        id: 138,
        category: 'ATA 34',
        question: 'How can the RADALT AGL be displayed in 0.1 foot increments on the MFDs?',
        options: { a: 'Pressing IBIT', b: 'Pressing + and – together on the CONT buttons', c: 'Selecting TDP on the PFD' },
        correct: 'b',
      },
      {
        id: 139,
        category: 'ATA 34',
        question: 'What does the Air Data Systems (ADS) consist of?',
        options: { a: 'Two ADC systems and a Standby system', b: 'Three ADC systems', c: 'Two Standby systems' },
        correct: 'a',
      },
      
      {
        id: 140,
        category: 'ATA 34',
        question: 'How many ADC systems are there in the Air Data Systems?',
        options: { a: 'One', b: 'Two', c: 'Three' },
        correct: 'b',
      },
      
/*       {
        id: 141,
        category: 'ATA 34',
        question: 'Which components make up the ADC System?',
        options: { a: 'Air Data Computer 1, Outside Air Temperature Probe 1', b: 'Air Data Computer 1, Air Data Computer 2', c: 'Air Data Computer 1, Left Pitot Static Probe' },
        correct: 'b',
      }, */
      
      {
        id: 142,
        category: 'ATA 34',
        question: 'What is the purpose of the Standby System?',
        options: { a: 'To calculate Vne', b: 'To provide indications only', c: 'To send data to the MFDs' },
        correct: 'b',
      },
      
      {
        id: 143,
        category: 'ATA 34',
        question: 'Where are the ADCs located?',
        options: { a: 'Left hand avionics rack', b: 'Under the nose of the aircraft', c: 'On the tail' },
        correct: 'b',
      },
      
      {
        id: 144,
        category: 'ATA 34',
        question: 'What information do the ADCs use for their calculations?',
        options: { a: 'Weight and engine status', b: 'Pitot pressure, static pressure, and outside air temperature', c: 'Barometric setting and AFCS data' },
        correct: 'b',
      },
      
      {
        id: 145,
        category: 'ATA 34',
        question: 'Where are the Outside Air Temperature (OAT) Probes located?',
        options: { a: 'Engine inlets', b: 'Under the nose Landing Bay', c: 'Within the Pitot head' },
        correct: 'b',
      },
      
      {
        id: 146,
        category: 'ATA 34',
        question: 'From which Pitot Static Probe does ADC 1 receive pitot pressure?',
        options: { a: 'Lower Left Pitot Probe', b: 'Right Pitot Probe', c: 'Upper left Pitot Probe' },
        correct: 'a',
      },
      
      {
        id: 147,
        category: 'ATA 34',
        question: 'How many screw cap drain points are used to release water build-up in the pitot and static lines?',
        options: { a: '5', b: '10', c: '15' },
        correct: 'b',
      },
      
      {
        id: 148,
        category: 'ATA 34',
        question: 'What does the BARALT Bug MIN setting control?',
        options: { a: 'Vne calculation', b: 'BARALT Decision Height', c: 'AFCS Reference Altitude' },
        correct: 'b',
      },
      
      {
        id: 149,
        category: 'ATA 34',
        question: 'What does the white ALTP bug setting control?',
        options: { a: 'BARALT Decision Height', b: 'Altitude Pre-select', c: 'AFCS Reference Altitude' },
        correct: 'b',
      },
      
      {
        id: 150,
        category: 'ATA 34',
        question: 'How does the system indicate a miscompare in IAS?',
        options: { a: 'Audible alert', b: 'Flashing lights', c: 'IAS miscompare flag' },
        correct: 'c',
      },
      
      {
        id: 151,
        category: 'ATA 34',
        question: 'At what IAS will a miscompare display?',
        options: { a: '70 KIAS', b: '7 KIAS', c: '70 feet' },
        correct: 'b',
      },
      
      {
        id: 152,
        category: 'ATA 34',
        question: 'At what altitude will a miscompare display?',
        options: { a: '7 feet', b: '70 feet', c: '7 KIAS' },
        correct: 'b',
      },
      
      {
        id: 153,
        category: 'ATA 34',
        question: 'What does ADC to AFCS data use for its calculations?',
        options: { a: 'Only offside ADC', b: 'Average of both ADCs', c: 'AHRS data' },
        correct: 'b',
      },
      
      {
        id: 154,
        category: 'ATA 34',
        question: 'What happens if a pitot probe becomes blocked during coupled pitch movement?',
        options: { a: 'Uncommanded pitch movement', b: 'No effect', c: 'AFCS disengagement' },
        correct: 'a',
      },
      
      {
        id: 155,
        category: 'ATA 34',
        question: 'How is the Pitot Static leak check and accuracy checks carried out?',
        options: { a: 'Using the ADC Test Set', b: 'Manually', c: 'Using the Air Data System Test Set 405F' },
        correct: 'c',
      },
      
/*       {
        id: 156,
        category: 'ATA 34',
        question: 'Where is the remote control panel located for the ADC Test Set?',
        options: { a: 'In the cockpit', b: 'In the nose Landing Bay', c: 'Under the aircraft' },
        correct: 'a',
      }, */
      
      {
        id: 157,
        category: 'ATA 34',
        question: 'Is there an interrupted test of the ADC system?',
        options: { a: 'Yes', b: 'No', c: 'Only during flight' },
        correct: 'b',
      },
      
      {
        id: 158,
        category: 'ATA 34',
        question: 'Which system uses an average of both ADCs for its calculations?',
        options: { a: 'AFCS', b: 'ADC', c: 'Standby System' },
        correct: 'a',
        
      },


/* 
      --------------------------------------------------

      --------------------------------------------------

      --------------------------------------------------

      --------------------------------------------------

      --------------------------------------------------

      -------------------------------------------------- */
      

      {
        id: 159,
        category: 'ATA 49',
        question: 'What is the primary function of the Honeywell Model 150 APU?',
        options: { a: 'Provide hydraulic power', b: 'Supply cabin heat', c: 'Drive the main rotor' },
        correct: 'b',
      },
      {
        id: 160,
        category: 'ATA 49',
        question: 'Where does the APU draw air for combustion?',
        options: { a: 'Bottom of the aircraft', b: 'From the left sponson fuel tank', c: 'Top of the aircraft' },
        correct: 'c',
      },
      {
        id: 161,
        category: 'ATA 49',
        question: 'What is the purpose of the Electronic Sequencing Unit (ESU) in the APU?',
        options: { a: 'Control the aircraft\'s electrical system', b: 'Initiate prime pump operation', c: 'Drive the APU AC generator' },
        correct: 'b',
      },
      {
        id: 162,
        category: 'ATA 49',
        question: 'What component provides backup AC power to the aircraft electrical system?',
        options: { a: 'APU AC Generator', b: 'Hydraulic Starter Motor', c: 'Electronic Sequencing Unit' },
        correct: 'a',
      },
      {
        id: 163,
        category: 'ATA 49',
        question: 'How is the APU oil system lubrication achieved?',
        options: { a: 'Splash lubrication', b: 'Pressure lubrication', c: 'Gravity lubrication' },
        correct: 'b',
      },
      {
        id: 164,
        category: 'ATA 49',
        question: 'What is the function of the hydraulic accumulator in the APU?',
        options: { a: 'Cool the turbine stage combustion chamber', b: 'Supply starting pressure to the starter motor', c: 'Drive the APU AC Generator' },
        correct: 'b',
      },
      {
        id: 165,
        category: 'ATA 49',
        question: 'Where is the APU air inlet located?',
        options: { a: 'Bottom of the main rotor pylon', b: 'On the right side of the aircraft', c: 'Top of the main rotor pylon' },
        correct: 'c',
      },
      {
        id: 166,
        category: 'ATA 49',
        question: 'What is the purpose of the Heat Shield in the APU?',
        options: { a: 'Cool the APU exhaust gases', b: 'Contain a fire', c: 'Filter the air entering the APU' },
        correct: 'b',
      },
      {
        id: 167,
        category: 'ATA 49',
        question: 'How is fuel supplied to the APU Fuel Control Unit (FCU)?',
        options: { a: 'From the main engine fuel tank', b: 'From the left sponson fuel tank', c: 'Via the aircraft fuel prime pumps' },
        correct: 'c',
      },
      {
        id: 168,
        category: 'ATA 49',
        question: 'What happens if the oil pressure is too low in the APU?',
        options: { a: 'ESU initiates prime pump operation', b: 'Oil filter is bypassed', c: 'High oil temperature switch closes' },
        correct: 'a',
      },
      {
        id: 169,
        category: 'ATA 49',
        question: 'Where is the APU AC Generator mounted?',
        options: { a: 'On the compressor housing', b: 'On the accessory gearbox', c: 'On the APU integral oil system' },
        correct: 'b',
      },
      {
        id: 170,
        category: 'ATA 49',
        question: 'What provides lubrication for all gears, shafts, and bearings in the APU?',
        options: { a: 'Splash lubrication', b: 'Oil filter', c: 'Rotary oil pump' },
        correct: 'c',
      },
      {
        id: 171,
        category: 'ATA 49',
        question: 'What does the APU Air Inlet protect against?',
        options: { a: 'Fuel contamination', b: 'FOD (Foreign Object Debris)', c: 'Oil foaming' },
        correct: 'b',
      },
      {
        id: 172,
        category: 'ATA 49',
        question: 'How is the APU started on the ground or inflight?',
        options: { a: 'Speeds up to 150 Kts', b: 'By the aircraft\'s main engines', c: 'By the Electronic Sequencing Unit (ESU)' },
        correct: 'a',
      },
      {
        id: 173,
        category: 'ATA 49',
        question: 'What is the purpose of the accessory drive section in the APU?',
        options: { a: 'Cool the APU exhaust gases', b: 'Drive the main rotor', c: 'Provide mounting and drive link to various components' },
        correct: 'c',
      },
      {
        id: 174,
        category: 'ATA 49',
        question: 'Where is the oil filter element located in the APU?',
        options: { a: 'Inside the combustion chamber', b: 'At the front of the gearbox', c: 'In the oil manifold' },
        correct: 'b',
      },
      {
        id: 175,
        category: 'ATA 49',
        question: 'What is the function of the differential pressure regulator in the APU Fuel Control Unit (FCU)?',
        options: { a: 'Control the APU speed', b: 'Provide constant fuel pressure', c: 'Regulate oil pressure' },
        correct: 'b',
      },
      {
        id: 176,
        category: 'ATA 49',
        question: 'How is the APU air inlet protected from FOD?',
        options: { a: 'By a coarse screen with rectangular apertures', b: 'By the APU exhaust', c: 'By a fire detector' },
        correct: 'a',
      },
      {
        id: 177,
        category: 'ATA 49',
        question: 'What does the magnetic drain plug in the APU do?',
        options: { a: 'Provide backup AC power', b: 'Gather ferrous metal particles', c: 'Control the APU speed' },
        correct: 'b',
      },
      {
        id: 178,
        category: 'ATA 49',
        question: 'How is the APU fuel shutoff valve controlled during normal operations?',
        options: { a: 'Manually by the pilot', b: 'By the differential pressure regulator', c: 'Energised open by the Electronic Sequencing Unit (ESU)' },
        correct: 'c',
      },
        {
          id: 179,
          category: "ATA 49",
          question: "From where is engine bleed air extracted for the APU?",
          options: { a: "Turbine housing", b: "Compressor discharge", c: "Accessory section" },
          correct: "b"
        },
        {
          id: 180,
          category: "ATA 49",
          question: "What diverts bleed air when it is not required by the APU?",
          options: { a: "Bleed air check valve", b: "Hydraulic starter motor", c: "ESU" },
          correct: "c"
        },
        {
          id: 181,
          category: "ATA 49",
          question: "Which section of the APU provides hydraulic pressure for normal accumulator recharging?",
          options: { a: "Accessory section", b: "Hydraulic starter motor", c: "No.3 hydraulic system" },
          correct: "c"
        },
        {
          id: 182,
          category: "ATA 49",
          question: "What powers the hydraulic starter motor for APU starting?",
          options: { a: "Nitrogen pressure", b: "Engine oil", c: "Electricity" },
          correct: "a"
        },
        {
          id: 183,
          category: "ATA 49",
          question: "What is the purpose of the accumulator in the APU system?",
          options: { a: "Cooling the engine", b: "Providing hydraulic pre-charge", c: "Fuel regulation" },
          correct: "b"
        },
        {
          id: 184,
          category: "ATA 49",
          question: "What pressure is considered necessary for a successful APU start?",
          options: { a: "2,000 PSI", b: "3,450 PSI", c: "5,200 PSI" },
          correct: "b"
        },
        {
          id: 185,
          category: "ATA 49",
          question: "Where is the accumulator pressure gauge mounted?",
          options: { a: "Cabin roof", b: "Accessory section", c: "Turbine housing" },
          correct: "a"
        },
        {
          id: 186,
          category: "ATA 49",
          question: "What does the APU start valve control?",
          options: { a: "Oil flow", b: "Hydraulic pressure to starter motor", c: "Fuel shut-off" },
          correct: "b"
        },
        {
          id: 187,
          category: "ATA 49",
          question: "When is the accumulator hand pump used?",
          options: { a: "Normal operation", b: "Ground checkout", c: "In flight" },
          correct: "c"
        },
        {
          id: 188,
          category: "ATA 49",
          question: "What are the APU ignition components?",
          options: { a: "Oil pump, FCU", b: "Igniter unit, ignition lead", c: "Start valve, starter motor" },
          correct: "b"
        },
        {
          id: 189,
          category: "ATA 49",
          question: "What initiates the APU start sequence?",
          options: { a: "ESU, ignition unit", b: "APU CTRL switch", c: "Low oil pressure" },
          correct: "b"
        },
        {
          id: 190,
          category: "ATA 49",
          question: "At what Ng percentage does the APU start valve close?",
          options: { a: "10%", b: "50%", c: "94.5%" },
          correct: "c"
        },
        {
          id: 191,
          category: "ATA 49",
          question: "What does the APU control system manage?",
          options: { a: "Electrical buses", b: "Engine speed", c: "APU operations" },
          correct: "c"
        },
        {
          id: 192,
          category: "ATA 49",
          question: "What controls the APU CTRL switch in the cockpit?",
          options: { a: "Motional speed sensor", b: "Low oil pressure switch", c: "ESU" },
          correct: "c"
        },
        {
          id: 193,
          category: "ATA 49",
          question: "What does the APU CTRL switch OFF position do?",
          options: { a: "Turns on the APU", b: "Shuts down the APU", c: "Arms the fire extinguisher" },
          correct: "b"
        },
        {
          id: 194,
          category: "ATA 49",
          question: "Where is the ESU located?",
          options: { a: "Cockpit overhead console", b: "Rear avionics compartment", c: "Accessory section" },
          correct: "b"
        },
        {
          id: 195,
          category: "ATA 49",
          question: "What completes a power-on self-test when power is applied?",
          options: { a: "APU accumulator", b: "ESU", c: "APU start valve" },
          correct: "b"
        },
        {
          id: 196,
          category: "ATA 49",
          question: "Where is the motional speed sensor located?",
          options: { a: "Turbine housing", b: "Accessory section", c: "Inboard / right-hand side of the APU" },
          correct: "c"
        },
/*         {
          id: 197,
          category: "ATA 49",
          question: "What does the low oil pressure switch indicate to the ESU?",
          options: { a: "Shutdown command", b: "Oil pressure status", c: "Engine speed" },
          correct: "b"
        }, */
        {
          id: 198,
          category: "ATA 49",
          question: "How is the APU shut down in case of a high oil temperature while in flight?",
          options: { a: "Automatic shutdown", b: "Pilot command", c: "Fuel control unit" },
          correct: "b"
        },
        {
          id: 199,
          category: "ATA 49",
          question: "What is recorded by the hour meter assembly?",
          options: { a: "Fuel consumption", b: "Total operating hours", c: "Oil temperature" },
          correct: "b"
        },
        {
          id: 200,
          category: "ATA 49",
          question: "What occurs when the FIRE APU/ARM pushbutton is pushed?",
          options: { a: "Apu starts", b: "Fire extinguisher system arms", c: "Low oil pressure" },
          correct: "b"
        },
        {
          id: 201,
          category: "ATA 49",
          question: "Which caution will be displayed if an automatic shutdown occurs in flight?",
          options: { a: "APU ACCUM LOW", b: "APU FAIL", c: "APU ON" },
          correct: "b"
        },
        {
          id: 201,
          category: "ATA 49",
          question: "Which caution will be displayed if an automatic shutdown occurs in flight?",
          options: { "a": "APU ACCUM LOW", "b": "APU FAIL", "c": "APU ON" },
          correct: "b"
        },
        {
          id: 202,
          category: "ATA 49",
          question: "Where can additional APU system feedback be displayed?",
          options: { "a": "EICAS page", "b": "Maintenance pages", "c": "ANALOG PARAMETERS (2 OF 2)" },
          correct: "b"
        },
        {
          id: 203,
          category: "ATA 49",
          question: "What does the FIRE APU/ARM warning light/pushbutton provide a visual warning of?",
          options: { "a": "Low oil pressure", "b": "A fire in the APU compartment", "c": "Hydraulic pressure" },
          correct: "b"
        },
        {
          id: 204,
          category: "ATA 49",
          question: "What happens when the FIRE APU/ARM pushbutton is pushed?",
          options: { "a": "Apu shuts down", "b": "ESU shuts down", "c": "Hydraulic pressure increases" },
          correct: "a"
        },
        {
          id: 205,
          category: "ATA 34",
          question: "What is the purpose of the Attitude Heading and Reference Systems (AHRS)?",
          options: { a: "Provide weather information", b: "Detect turbulence", c: "Determine aircraft attitude and heading" },
          correct: "c"
        },
        
        {
          id: 206,
          category: "ATA 34",
          question: "What is the pitch accuracy provided by the LITEF Model LCR-100 AHRS?",
          options: { a: "± 1 degree", b: "± 0.5 degrees", c: "± 2 degrees" },
          correct: "b"
        },
        
        {
          id: 207,
          category: "ATA 34",
          question: "How many Fibre Optic Gyros (FOGs) sensors are there in each AHRS Unit?",
          options: { a: "Two", b: "Three", c: "Four" },
          correct: "b"
        },
        
        {
          id: 208,
          category: "ATA 34",
          question: "Which bus is used to power the C/P AHRS PRI on AHRS 1?",
          options: { a: "DC Essential Bus", b: "No 1 DC Primary Bus", c: "No 2 DC Primary Bus" },
          correct: "b"
        },
        
        {
          id: 209,
          category: "ATA 34",
          question: "What does the Slew Controller's SET HDG switch allow the pilot to do?",
          options: { a: "Adjust the vertical speed", b: "Manually slew the AHRS heading output", c: "Activate turbulence detection" },
          correct: "b"
        },
        
        {
          id: 210,
          category: "ATA 34",
          question: "Which AHRS communicates with MFDs 3 and 4 under normal conditions?",
          options: { a: "AHRS 1", b: "AHRS 2", c: "Both AHRS 1 and AHRS 2" },
          correct: "b"
        },
        
        {
          id: 211,
          category: "ATA 34",
          question: "Where is the Magnetic Sensor Unit (Flux Valve) located?",
          options: { a: "Behind the MFDs", b: "In the tail of the aircraft", c: "Under the cockpit floor" },
          correct: "b"
        },
        
        {
          id: 212,
          category: "ATA 34",
          question: "What is the commanded slew rate for the first 3 seconds on the Slew Controller?",
          options: { a: "4o per second", b: "2o per second", c: "8o per second" },
          correct: "b"
        },
        
        {
          id: 213,
          category: "ATA 34",
          question: "What is the purpose of the GPS data in the AHRS system?",
          options: { a: "Adjust the vertical speed", b: "Eliminate drift", c: "Control the standby compass" },
          correct: "b"
        },
        
        {
          id: 214,
          category: "ATA 34",
          question: "Which displays show the Vertical Speed Indication (VSI) from AHRS 2?",
          options: { a: "MFDs 1, 2, and 5", b: "MFDs 3 and 4", c: "PFD ARC and NAV Full" },
          correct: "b"
        },
        
        {
          id: 215,
          category: "ATA 34",
          question: "What causes an AHRS Miscompare?",
          options: { a: "Different temperature settings", b: "Roll differs by 6 degrees or more", c: "Rolling of the aircraft" },
          correct: "b"
        },
        
        {
          id: 216,
          category: "ATA 34",
          question: "How long does normal alignment on the ground take for the AHRS system?",
          options: { a: "15 seconds", b: "30 seconds", c: "55 seconds" },
          correct: "b"
        },
        
        {
          id: 217,
          category: "ATA 34",
          question: "Which MFDs does AHRS 2 communicate with under normal conditions?",
          options: { a: "MFDs 1, 2, and 5", b: "MFDs 3 and 4", c: "MFDs 1, 2, 3, 4, and 5" },
          correct: "b"
        },
        
        {
          id: 218,
          category: "ATA 34",
          question: "What controls the pitch scale and the sky/ground color on the Primary Flight Displays?",
          options: { a: "Compass Control Unit", b: "AHRS pitch", c: "Slew Controller" },
          correct: "b"
        },
        
        {
          id: 219,
          category: "ATA 34",
          question: "How is the Standby Attitude Indicator powered if the #1 DC Primary Bus fails?",
          options: { a: "Emergency Battery", b: "#2 DC Primary Bus", c: "Standby Compass" },
          correct: "a"
        },
        
        {
          id: 220,
          category: "ATA 34",
          question: "What happens if the Emergency Battery Test displays 'EMER PWR and GOOD'?",
          options: { a: "The emergency battery is discharged", b: "Emergency power is available", c: "Emergency power is unavailable" },
          correct: "b"
        },
        
        {
          id: 221,
          category: "ATA 34",
          question: "How is the Standby AI power switched on?",
          options: { a: "OFF/ARM push button", b: "Emergency Battery Test", c: "Cage knob" },
          correct: "a"
        },
        
        {
          id: 222,
          category: "ATA 34",
          question: "What is the purpose of the Honeywell P660 WXR?",
          options: { a: "Detect storms within 60° of the helicopter’s flight path", b: "Provide weather information", c: "Enhance ground mapping" },
          correct: "c"
        },
        
        {
          id: 223,
          category: "ATA 34",
          question: "Which button on the P700 WXR Controller initiates the turbulence detection function?",
          options: { a: "CR", b: "TRB", c: "TGT" },
          correct: "b"
        },
        
        {
          id: 224,
          category: "ATA 34",
          question: "In ground mapping mode, what color represents the highest returns on the P700 WXR?",
          options: { a: "Blue", b: "Yellow", c: "Red" },
          correct: "c"
        },
        {
          id: 225,
          category: "ATA 26",
          question: "What is the primary purpose of the five infrared flame detectors in the S-92A?",
          options: { a: "To detect smoke in the baggage compartment", b: "To extinguish engine fires", c: "To provide warning of flames and hot gas leaks" },
          correct: "c",
        },
        
        {
          id: 226,
          category: "ATA 26",
          question: "Where is the APU compartment flame detector located?",
          options: { a: "#1 ENG Forward", b: "#2 ENG Aft (OUTBOARD system)", c: "APU Compartment (INBOARD system)" },
          correct: "c",
        },
        
        {
          id: 227,
          category: "ATA 26",
          question: "Which infrared band does the flame detector utilize to sense fires?",
          options: { a: "2.7-micrometer (μ)", b: "4.3-micrometer (μ)", c: "5.8-micrometer (μ)" },
          correct: "b",
        },
        
        {
          id: 228,
          category: "ATA 26",
          question: "How is the built-in-test (BIT) functionality initiated in the flame detectors?",
          options: { a: "By pressing the FIRE/ARM pushbutton", b: "By applying a 28 VDC signal to the test input", c: "Automatically during each flight" },
          correct: "b",
        },
        
        {
          id: 229,
          category: "ATA 26",
          question: "Which bus supplies power to the flame detectors in the event of a complete loss of electrical power?",
          options: { a: "DC BATTERY bus", b: "DC PRIMARY bus", c: "AC MAIN bus" },
          correct: "a",
        },
        
        {
          id: 230,
          category: "ATA 26",
          question: "What is the function of the baggage compartment smoke detector?",
          options: { a: "Detecting flames in the baggage compartment", b: "Monitoring the baggage compartment temperature", c: "Detecting smoke in the baggage compartment" },
          correct: "c",
        },
        
        {
          id: 231,
          category: "ATA 26",
          question: "How often is the baggage compartment smoke detector inspected?",
          options: { a: "6 months", b: "12 months", c: "24 months" },
          correct: "b",
        },
        
        {
          id: 232,
          category: "ATA 26",
          question: "What is the purpose of the two master warning panels?",
          options: { a: "To display engine parameters", b: "To provide visual warning of detected fires", c: "To control the fire extinguishing system" },
          correct: "b",
        },
        
        {
          id: 233,
          category: "ATA 26",
          question: "Where is the fire control panel located?",
          options: { a: "Under the cabin floor", b: "On the glareshield under the instrument panel", c: "In the APU compartment" },
          correct: "b",
        },
        
        {
          id: 234,
          category: "ATA 26",
          question: "How is the fire extinguisher circuit armed on the fire control panel?",
          options: { a: "By pressing the FIRE EXTG switch", b: "By lifting the protective cover and pressing the push-button switch", c: "Automatically when a fire is detected" },
          correct: "b",
        },
        
        {
          id: 235,
          category: "ATA 26",
          question: "What does the SMOKE IN BAGGAGE warning on the MFD indicate?",
          options: { a: "Engine fire", b: "Smoke in the baggage compartment", c: "Faulty smoke detector" },
          correct: "b",
        },
        
        {
          id: 236,
          category: "ATA 26",
          question: "Which position on the fire detector test panel tests the baggage compartment smoke detector?",
          options: { a: "INBD", b: "OUTBD", c: "SMOKE" },
          correct: "c",
        },
        
        {
          id: 237,
          category: "ATA 26",
          question: "What modification did CSN 92-060A make to the Fire Detector BIT wiring?",
          options: { a: "Added more flame detectors", b: "Grounded the test switch in all positions", c: "Increased the sensitivity of flame detectors" },
          correct: "b",
        },
        
        {
          id: 238,
          category: "ATA 26",
          question: "How is the fire extinguisher system controlled in the cockpit?",
          options: { a: "Via the MFDs", b: "Through the fire control panel and extinguisher switch", c: "Automatically when a fire is detected" },
          correct: "b",
        },
        
        {
          id: 239,
          category: "ATA 26",
          question: "Where are the two fire extinguisher bottles located?",
          options: { a: "In the baggage compartment", b: "Behind the APU compartment", c: "In the cockpit" },
          correct: "b",
        },
        
        {
          id: 240,
          category: "ATA 26",
          question: "What is the purpose of the pressure relief valve in each fire extinguisher bottle?",
          options: { a: "To release the extinguishing agent", b: "To check the nitrogen charge", c: "To release pressure in case of over pressurization" },
          correct: "c",
        },
        
        {
          id: 241,
          category: "ATA 26",
          question: "How are the extinguishant pipelines conveyed to the engine and APU bays?",
          options: { a: "Through the cabin floor", b: "Via a dedicated panel in the top surface of the strongback", c: "Through the main fuel lines" },
          correct: "b",
        },
        
        {
          id: 242,
          category: "ATA 26",
          question: "What is the purpose of the fire extinguisher inertia switches?",
          options: { a: "To arm the extinguisher system", b: "To release both main bottles' contents in a crash", c: "To test the fire detection circuits" },
          correct: "b",
        },
        
        {
          id: 243,
          category: "ATA 26",
          question: "Where are the handheld Halon 1211 fire extinguishers located?",
          options: { a: "One is the Cabin, one in the cockpit", b: "In the baggage compartment", c: "One on each side of the cockpit" },
          correct: "a",
        },
        {
          id: 244,
          category: "ATA 26",
          question: "What is the purpose of the Kevlar fuel vapour barriers in the cabin sidewall?",
          options: { a: "To protect against fire in the engine compartment", b: "To prevent fuel leaks/vapour from entering the cabin", c: "To reduce cabin noise" },
          correct: "b",
        },
        {
          id: 245,
          category: "ATA 49",
          question: "What component controls the APU?",
          options: { a: "Fuel conditioning unit", b: "Electronic sequencing unit", c: "DCU" },
          correct: "b",
        },
        {
          id: 246,
          category: "ATA 49",
          question: "Where is the Electronic sequencing unit?",
          options: { a: "LH Avionic bay", b: "APU bay", c: "Tail Transition" },
          correct: "c",
        },
        {
          id: 247,
          category: "ATA 49",
          question: "How many fuel nozzles are there?",
          options: { a: "3 Primary and 3 Secondary", b: "3", c: "1 Starting and 5 Main" },
          correct: "a",
        },
        {
          id: 248,
          category: "ATA 49",
          question: "How is the APU starter Power?",
          options: { a: "Air Starter", b: "Hydraulic Starter", c: "Electrical Starter" },
          correct: "b",
        },
        {
          id: 249,
          category: "ATA 49",
          question: "During normal operation how is the APU accumulator charged on the ground?",
          options: { a: "Hand pump", b: "Ground check out pump", c: "Secondary accumulator" },
          correct: "b",
        },
        {
          id: 250,
          category: "ATA 49",
          question: "During normal operation how is the APU accumulator charged in flight?",
          options: { a: "#3 Mechanical Hydraulic pump", b: "Hand Pump", c: "Secondary accumulator" },
          correct: "a",
        },
        {
          id: 251,
          category: "ATA 49",
          question: "How can we ensure complete discharge of the APU accumulator?",
          options: { a: "Piston visible in accumulator sight glass", b: "Pressure gauge ", c: "MFD Status page" },
          correct: "a",
        },
        {
          id: 252,
          category: "ATA 49",
          question: "Where is the APU start valve located?",
          options: { a: "in the APU bay", b: "LH Engine bay", c: "Piggy backed on the APU accumulator" },
          correct: "c",
        },
        {
          id: 253,
          category: "ATA 49",
          question: "What is the fully charge pressure of the APU accumulator?",
          options: { a: "4000 psi", b: "2000 psi", c: "400 psi" },
          correct: "a",
        },
        {
          id: 254,
          category: "ATA 49",
          question: "What is the nitrogen base charge of the APU accumulator?",
          options: { a: "2000 psi", b: "4000 psi", c: "400 psi" },
          correct: "a",
        },
        {
          id: 255,
          category: "ATA 49",
          question: "At what pressure will the APU accumulator charge be initiated?",
          options: { a: "3450 psi", b: "3000 psi", c: "0 psi" },
          correct: "a",
        },
        {
          id: 256,
          category: "ATA 49",
          question: "What fault categories are associated with the APU?",
          options: { a: "Critical", b: "Primary and Secondary", c: "Safety and Protective" },
          correct: "c",
        },
        {
          id: 257,
          category: "ATA 49",
          question: "How many temperature probes are fitted in the APU exhaust?",
          options: { a: "One", b: "Two", c: "Three" },
          correct: "a",
        },
        {
          id: 258,
          category: "ATA 49",
          question: "How many ignitors are fitted to the APU?",
          options: { a: "1 Starter and 1 Main", b: "One", c: "Two" },
          correct: "b",
        },
        {
          id: 259,
          category: "ATA 49",
          question: "What services are provided to the aircraft by the APU?",
          options: { a: "Electical", b: "Air", c: "Both" },
          correct: "c",
        },
        {
          id: 260,
          category: "ATA 49",
          question: "How is the APU mounted to the airframe?",
          options: { a: "Racetrack fitting", b: "Two forward struts and a sliding rear fitting", c: "Dog bones links" },
          correct: "b",
        },
        {
          id: 261,
          category: "ATA 49",
          question: "Where does the APU get its fuel supply?",
          options: { a: "LH Sponson only", b: "RH Sponson only", c: "Both" },
          correct: "a",
        },
        {
          id: 262,
          category: "ATA 49",
          question: "How is the APU oil level checked?",
          options: { a: "MFD Status page", b: "Sight Glass", c: "Dip Stick" },
          correct: "c",
        },
        {
          id: 263,
          category: "ATA 26",
          question: "Where is the fire control panel?",
          options: { a: "Overhead Panel", b: "Center pedestal", c: "Central glareshield" },
          correct: "c",
        },
        {
          id: 264,
          category: "ATA 26",
          question: "What type of flame detectors are used?",
          options: { a: "Ion detectors", b: "Fire Wire", c: "Optical infrared sensors" },
          correct: "c",
        },
        {
          id: 265,
          category: "ATA 26",
          question: "During a crash how are the fire bottles initiated?",
          options: { a: "Pilot operation", b: "Inertia switch", c: "The fire bottles are not operated during a crash event" },
          correct: "b",
        },
        {
          id: 266,
          category: "ATA 26",
          question: "What type of smoke detector is fitted in the baggage bay?",
          options: { a: "Light Sensing", b: "Ion detector", c: "Heat detector" },
          correct: "",
        },
        {
          id: 267,
          category: "ATA 26",
          question: "How many flame detectors are fitted to the S-92?",
          options: { a: "3", b: "5", c: "6" },
          correct: "b",
        },
        {
          id: 268,
          category: "ATA 26",
          question: "When the flame detector knob is turned to inboard, what sensors are tested?",
          options: { a: "Engine 1 Inboard, Engine 2 inboard and APU", b: "Engine 1 Inboard, Engine 2 inboard", c: "APU" },
          correct: "a",
        },
        {
          id: 269,
          category: "ATA 26",
          question: "When the flame detector knob is turned to outboard, what sensors are tested?",
          options: { a: "Engine 1 Inboard, Engine 2 inboard and APU", b: "Engine 1 Inboard, Engine 2 inboard", c: "APU" },
          correct: "b",
        },
        {
          id: 270,
          category: 'Engine Manuals',
          question: 'What is the purpose of GEK 112212 IETP?',
          options: { a: 'Provide overhaul instructions', b: 'Cover service bulletins', c: 'Offer fault isolation procedures' },
          correct: 'b'
        },
        {
          id: 271,
          category: 'Engine Manuals',
          question: 'How are Temporary Revisions (TR) identified within GEK 112212 IETP?',
          options: { a: 'Colored yellow', b: 'Colored pink', c: 'Colored blue' },
          correct: 'a'
        },
        {
          id: 272,
          category: 'Engine Manuals',
          question: 'What identifies Incremental Changes in the IETP?',
          options: { a: 'Sequential number', b: 'Color coding', c: 'Model statement' },
          correct: 'a'
        },
        {
          id: 273,
          category: 'Engine Manuals',
          question: 'How are Service Bulletins grouped within the IETP?',
          options: { a: 'Sequential number', b: 'Color coding', c: 'ATA sections' },
          correct: 'c'
        },
        {
          id: 274,
          category: 'Engine Manuals',
          question: 'What color are Alert Service Bulletins within the IETP?',
          options: { a: 'Yellow', b: 'Pink', c: 'Blue' },
          correct: 'c'
        },
        {
          id: 275,
          category: 'Engine Manuals',
          question: 'What information is found in the Front Matter of GEK 112212 IETP?',
          options: { a: 'Cleaning Practices', b: 'Service Bulletin List', c: 'Engine Directional References' },
          correct: 'b'
        },
        {
          id: 276,
          category: 'Engine Manuals',
          question: 'How is the Effectivity of Data organized in GEK 112212 IETP?',
          options: { a: 'By alphabetical order', b: 'By ATA number', c: 'By engine model' },
          correct: 'c'
        },
        {
          id: 277,
          category: 'Engine Manuals',
          question: 'What does \'For ALL CT7-8\' label indicate in the Effectivity of Data section?',
          options: { a: 'Data for specific engine models', b: 'Data for all CT7-8 engine models', c: 'Data for CT7-8A model only' },
          correct: 'b'
        },
        {
          id: 278,
          category: 'Engine Manuals',
          question: 'What does the Engine Maintenance Program consist of?',
          options: { a: 'Service Bulletins compliance', b: 'Performance trend monitoring', c: 'Illustrated Parts Catalogue' },
          correct: 'b'
        },
        {
          id: 279,
          category: 'Engine Manuals',
          question: 'What does MM 05 cover in the CT7-8 Engine Maintenance Program?',
          options: { a: 'Fuel System', b: 'Airworthiness Limitations', c: 'Illustrated Parts Catalogue' },
          correct: 'b'
        },
        {
          id: 280,
          category: 'Engine Manuals',
          question: 'What is the additional full cycle count added for each OEI event?',
          options: { a: 'Two cycles', b: 'Four cycles', c: 'Six cycles' },
          correct: 'b'
        },
        {
          id: 281,
          category: 'Engine Manuals',
          question: 'How are Service Intervals stipulated for GE CT7 engines?',
          options: { a: 'Daily, 500 hrs, 1500 hrs', b: 'Weekly, 1000 hrs, 2000 hrs', c: 'Monthly, 750 hrs, 1800 hrs' },
          correct: 'a'
        },
        {
          id: 282,
          category: 'Engine Manuals',
          question: 'What is the obligation regarding Exposed Hardware Inspection Requirements?',
          options: { a: 'Optional for technicians', b: 'Dependent on the weather', c: 'Mandatory for technicians' },
          correct: 'c'
        },
        {
          id: 283,
          category: 'Engine Manuals',
          question: 'When is a part listed as NO NUMBER in the Detailed Parts List?',
          options: { a: 'When it\'s a spare part', b: 'When it has not procurable', c: 'When it\'s not illustrated' },
          correct: 'b'
        },
        {
          id: 284,
          category: 'Engine Manuals',
          question: 'What does a pointing hand on an illustration signify?',
          options: { a: 'A nontechnical change', b: 'A significant technical change', c: 'A system fault' },
          correct: 'b'
        },
        {
          id: 285,
          category: 'Engine Manuals',
          question: 'What do the codes 8, 8A, 8A1, A5, A6, A7, B, B5, E, E5, F and F5 represent in Engine Model Coding?',
          options: { a: 'Part numbers', b: 'Usage codes', c: 'Engine models' },
          correct: 'c'
        },
        {
          id: 286,
          category: 'Engine Manuals',
          question: 'What does a Torque Motor Loop Fault indicate in the FADEC system?',
          options: { a: 'Loss of Power Control', b: 'Fault in torque motor drive circuit', c: 'Dispatchable Fault' },
          correct: 'b'
        },
        {
          id: 287,
          category: 'Engine Manuals',
          question: 'In which section of GEK 112212 IETP would you find procedures for Engine Overtemperature?',
          options: { a: 'MM 05 Service Life Limits', b: 'MM 72-00-00', c: 'TLD Summary' },
          correct: 'b'
        },
        {
          id: 288,
          category: 'Engine Manuals',
          question: 'What is the purpose of the Illustrated Parts Catalogue GEK105158?',
          options: { a: 'To provide fault isolation procedures', b: 'To list engine assembly procedures', c: 'To provide detailed parts information' },
          correct: 'c'
        },
        {
          id: 289,
          category: 'Engine Manuals',
          question: 'How is the Numerical Index divided in the Illustrated Parts Catalogue?',
          options: { a: 'By color coding', b: 'By ATA number', c: 'By alphanumeric order' },
          correct: 'c'
        },
        {
          id: 290,
          category: 'Engine Manuals',
          question: 'What does the code SPAD indicate in the Nomenclature column?',
          options: { a: 'Standard Parts', b: 'Spare Part Drawing', c: 'Special Procedures' },
          correct: 'b'
        }
        
        
      
     
    
    // Add more questions as needed
  ];
  