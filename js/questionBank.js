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
      {
        id: 159,
        category: 'ATA 49',
        question: 'What is the primary function of the Honeywell Model 150 APU?',
        options: { a: 'Provide hydraulic power', b: 'Supply cabin heat and Electrical power', c: 'Drive the main rotor' },
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
        id: 168,
        category: 'ATA 49',
        question: 'What happens if the oil pressure is too low in the APU on the ground?',
        options: { a: 'ESU initiates APU shutdown', b: 'Oil filter is bypassed', c: 'High oil temperature switch closes' },
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
          options: { a: "DCU", b: "Hydraulic starter motor", c: "ESU" },
          correct: "c"
        },
        {
          id: 181,
          category: "ATA 49",
          question: "Which system provides hydraulic pressure for normal accumulator recharging?",
          options: { a: "Accessory section", b: "Hydraulic starter motor", c: "No.3 hydraulic system" },
          correct: "c"
        },

        {
          id: 183,
          category: "ATA 49",
          question: "What is the purpose of the accumulator in the APU system?",
          options: { a: "Cooling the engine", b: "Providing hydraulic pre-charge for start", c: "Fuel regulation" },
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
          id: 188,
          category: "ATA 49",
          question: "What are the APU ignition components?",
          options: { a: "Oil pump, FCU", b: "Igniter unit, ignition lead", c: "Start valve, starter motor" },
          correct: "b"
        },

        {
          id: 190,
          category: "ATA 49",
          question: "At what Ng percentage does the APU start valve close?",
          options: { a: "10%", b: "50%", c: "94.5%" },
          correct: "b"
        },
        {
          id: 191,
          category: "ATA 49",
          question: "What does the APU control system manage?",
          options: { a: "Electrical buses", b: "Engine speed", c: "APU operations" },
          correct: "c"
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
          options: { a: "APU ACCUM LOW", b: "APU FAIL", c: "APU FAULT" },
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
          options: { "a": "APU shuts down", "b": "ESU shuts down", "c": "Hydraulic pressure increases" },
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
          question: "Which bus is used to power the Co-Pilots AHRS PRI on AHRS 1?",
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
          question: "Under normal conditions Which displays show the Vertical Speed Indication (VSI) from AHRS 2?",
          options: { a: "MFDs 1, 2, and 5", b: "MFDs 3 and 4", c: "PFD ARC and NAV Full" },
          correct: "b"
        },
        
        {
          id: 215,
          category: "ATA 34",
          question: "What causes an AHRS Mis-compare?",
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
          options: { a: "The emergency battery is discharged", b: "Emergency power is available and >50%", c: "Emergency power is unavailable" },
          correct: "b"
        },

        {
          id: 221,
          category: "ATA 34",
          question: "How is the Standby Attitude Indicator power switched on?",
          options: { a: "OFF/ARM push button", b: "Emergency Battery Test", c: "Cage knob" },
          correct: "a"
        },

        {
          id: 222,
          category: "ATA 34",
          question: "What is the hazard area for a helicopter within a 270-degree forward sector of the nose?",
          options: { a: "50 feet", b: "100 feet", c: "200 feet" },
          correct: "b"
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
        
        /*         -------------------------
        -------------------------
        -------------------------- */
        
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
          options: { a: "Under the cabin floor", b: "On the glare shield under the instrument panel", c: "In the APU compartment" },
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
          options: { a: "One in the Cabin, one in the cockpit", b: "In the baggage compartment", c: "One on each side of the cockpit" },
          correct: "a",
        },
        {
          id: 244,
          category: "ATA 26",
          question: "What is the purpose of the Kevlar fuel vapour barriers in the cabin sidewall?",
          options: { a: "To protect against fire in the engine compartment", b: "To prevent fuel leaks/vapour from entering the cabin", c: "To reduce cabin noise" },
          correct: "b",
        },


        // --------------- from 245 to 290 checked OK-----------

        // --------------- from 245 to 290 checked OK-----------

        // --------------- from 245 to 290 checked OK-----------

        // --------------- from 245 to 290 checked OK-----------

        // --------------- from 245 to 290 checked OK-----------

        // --------------- from 245 to 290 checked OK-----------

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
          options: { a: "Electrical", b: "Air", c: "Both" },
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
          options: { a: "Overhead Panel", b: "Center pedestal", c: "Central glare shield" },
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
          options: { a: 'MM 05 Service Life Limits', b: 'MM 72-00-00 Special Procedures', c: 'TLD Summary' },
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
        },
        /* 
        ---------------
        --------------- check below
        ---------------
        ---------------
        --------------- */ 


        {
          id: 291,
          category: "ATA 34",
          question: "When an intruder transponder transmission is detected, what does the TCAS in the aircraft compute?",
          options: { a: "Range between your aircraft and the intruder", b: "Closing rate between your aircraft and the intruder", c: "Altitude difference between your aircraft and the intruder" },
          correct: "b"
        },
        
        {
          id: 292,
          category: "ATA 34",
          question: "Where is the TCAS Processor located?",
          options: { a: "On the upper antenna", b: "On the lower antenna", c: "In the transition area behind the ramp" },
          correct: "c"
        },
        
        {
          id: 293,
          category: "ATA 34",
          question: "What does the TCAS Processor receive inputs from to determine the bearings of the intruder aircraft?",
          options: { a: "EGPWS", b: "DME", c: "RADALT" },
          correct: "b"
        },
        
        {
          id: 294,
          category: "ATA 34",
          question: "Where is the TCAS Configuration Module located?",
          options: { a: "On the upper antenna", b: "On the lower antenna", c: "In the transition area near the TCAS Processor" },
          correct: "c"
        },
        
        {
          id: 295,
          category: "ATA 34",
          question: "How is the TCAS information displayed on MFDs?",
          options: { a: "By default", b: "By selecting OVLY >> TCAS", c: "By pressing CTL >> BAND" },
          correct: "b"
        },
        
        {
          id: 296,
          category: "ATA 34",
          question: "What triggers a Traffic Advisory (TA) in TCAS I?",
          options: { a: "Altitude difference above 2000 AGL", b: "Horizontal distance below 2000 AGL", c: "Time to Closest Point of Approach (CPA)" },
          correct: "c"
        },
        
        {
          id: 297,
          category: "ATA 34",
          question: "How is a THREAT indicated in TCAS I symbology?",
          options: { a: "An open blue diamond", b: "A filled blue diamond", c: "A filled yellow circle" },
          correct: "c"
        },
        
        {
          id: 298,
          category: "ATA 34",
          question: "When does the TCAS II produce Resolution Alerts (RA) for vertical avoidance maneuvers?",
          options: { a: "In level flight", b: "During a Traffic Advisory (TA)", c: "When the threat is imminent" },
          correct: "c"
        },
        
        {
          id: 299,
          category: "ATA 34",
          question: "What happens following a Resolution Alert (RA) in TCAS II?",
          options: { a: "Immediate descent", b: "Clear of conflict announced", c: "Climb performance increased" },
          correct: "b"
        },
        
        {
          id: 300,
          category: "ATA 34",
          question: "When are Climb RAs inhibited in TCAS II?",
          options: { a: "Airspeed is less than 100 KIAS", b: "Altitude is greater than 5000 feet MSL", c: "During One Engine Inoperative (OEI)" },
          correct: "a"
        },
        {
          id: 301,
          category: "ATA 34",
          question: "What is the primary purpose of the Honeywell Mk XXII EGPWS in the S92?",
          options: { a: "To control the autopilot system", b: "To prevent Controlled Flight Into Terrain (CFIT)", c: "To manage radio communication" },
          correct: "b"
        },
        
        {
          id: 302,
          category: "ATA 34",
          question: "Which altitude reference does the EGPWS use to calculate the height above the ground?",
          options: { a: "Barometric altitude", b: "Geometric altitude", c: "Radar altitude" },
          correct: "b"
        },
        
        {
          id: 303,
          category: "ATA 34",
          question: "What happens if GPS data is not available for the EGPWS Terrain system?",
          options: { a: "Terrain system becomes inactive", b: "A warning is issued", c: "No impact on the system" },
          correct: "a"
        },
        
        {
          id: 304,
          category: "ATA 34",
          question: "Which sensor is NOT used by the EGPWS to determine the active mode?",
          options: { a: "RADALT", b: "AFCS", c: "TCAS" },
          correct: "c"
        },
        
        {
          id: 305,
          category: "ATA 34",
          question: "In the EGPWS mapping, what color is used to represent terrain below 500 feet from the aircraft?",
          options: { a: "Light green", b: "Dark yellow", c: "Red" },
          correct: "b"
        },
        
        {
          id: 306,
          category: "ATA 34",
          question: "Which mode in the EGPWS is used for alerts related to excessive terrain closure rate after take-off?",
          options: { a: "Mode 2", b: "Mode 4", c: "Mode 6" },
          correct: "a"
        },
        
        {
          id: 307,
          category: "ATA 34",
          question: "What does the Look Ahead function in the EGPWS system compare?",
          options: { a: "Aircraft altitude with terrain altitude", b: "Aircraft flight path with known runways", c: "Time from take-off with the current time" },
          correct: "b"
        },
        
        {
          id: 308,
          category: "ATA 34",
          question: "When does the EGPWS display TERRAIN in red on the PFD?",
          options: { a: "20 seconds from hitting the hazard", b: "30 seconds from hitting the hazard", c: "40 seconds from hitting the hazard" },
          correct: "a"
        },
        
        {
          id: 309,
          category: "ATA 34",
          question: "In the EGPWS, what does the TOO LOW GEAR alert indicate?",
          options: { a: "Insufficient terrain clearance", b: "Landing gear not selected down", c: "Excessive closure rate with terrain" },
          correct: "b"
        },
        
        {
          id: 310,
          category: "ATA 34",
          question: "When does the Mode 3 in EGPWS provide alerts?",
          options: { a: "During normal approach", b: "During take-off", c: "During cruise" },
          correct: "b"
        },
        {
          id: 311,
          category: 'ATA 34',
          question: 'What is the primary source of navigation for the FMS?',
          options: { a: 'DME', b: 'VOR', c: 'GPS' },
          correct: 'c',
        },
        {
          id: 312,
          category: 'ATA 34',
          question: 'Which component provides real-time and predictive RAIM for the FMS?',
          options: { a: 'Control Display Unit', b: 'Data Transfer Unit', c: 'Configuration Module' },
          correct: 'b',
        },
        {
          id: 313,
          category: 'ATA 34',
          question: 'Where are the GPS antennas mounted on the helicopter?',
          options: { a: 'On the wings', b: 'On the nose', c: 'Mid-way along the tail section' },
          correct: 'c',
        },
        {
          id: 314,
          category: 'ATA 34',
          question: 'What is the purpose of the Configuration Module?',
          options: { a: 'Fuel management', b: 'Navigation data transfer', c: 'Aircraft-specific configuration parameters' },
          correct: 'c',
        },
        {
          id: 315,
          category: 'ATA 34',
          question: 'How is flight plan information transferred to the FMS?',
          options: { a: 'Wireless connection', b: 'Memory card connection', c: 'USB connection' },
          correct: 'b',
        },
        {
          id: 316,
          category: 'ATA 34',
          question: 'What is the function of the Control Display Unit keys?',
          options: { a: 'Adjust screen brightness', b: 'Position the cursor', c: 'Enter data' },
          correct: 'b',
        },
        {
          id: 317,
          category: 'ATA 34',
          question: 'Which database is responsible for providing IFR Approach information?',
          options: { a: 'Company Database', b: 'Navigation Database', c: 'Pilot Data Storage' },
          correct: 'b',
        },
        {
          id: 318,
          category: 'ATA 34',
          question: 'What is the purpose of the Wide Area Augmentation System (WAAS)?',
          options: { a: 'Fuel management', b: 'Improved GPS accuracy', c: 'Memory card transfer' },
          correct: 'b',
        },
        {
          id: 319,
          category: 'ATA 34',
          question: 'What does RAIM stand for?',
          options: { a: 'Receiver Autonomous Integrity Monitoring', b: 'Radio and Instrument Monitoring', c: 'Range Adjustment and Inclusion Monitoring' },
          correct: 'a',
        },
        {
          id: 320,
          category: 'ATA 34',
          question: 'How many satellites are required for the GPS to determine position and enter NAV mode?',
          options: { a: 'Three', b: 'Four', c: 'Five' },
          correct: 'c',
        },
        {
          id: 321,
          category: 'ATA 34',
          question: 'What does the Best Computed Position (BCP) represent?',
          options: { a: 'The most accurate GPS satellite', b: 'The predicted flight path', c: 'The calculated aircraft position' },
          correct: 'c',
        },
        {
          id: 322,
          category: 'ATA 34',
          question: 'What is the purpose of the Circle of Position?',
          options: { a: 'GPS satellite alignment', b: 'Navigation sensor accuracy', c: 'Weather monitoring' },
          correct: 'b',
        },
        {
          id: 323,
          category: 'ATA 34',
          question: 'What does ANP stand for in Actual Navigation Performance?',
          options: { a: 'Altimeter Navigation Precision', b: 'Actual Navigation Position', c: 'Actual Navigation Performance' },
          correct: 'c',
        },
        {
          id: 324,
          category: 'ATA 34',
          question: 'What is the purpose of the Power On Self-Test (POST)?',
          options: { a: 'Check weather conditions', b: 'Check FMS hardware and software components', c: 'Initiate navigation' },
          correct: 'b',
        },
        {
          id: 325,
          category: 'ATA 34',
          question: 'What does the SYNC IN PROGRESS message indicate?',
          options: { a: 'Fault in the synchronization process', b: 'Successful synchronization between dual FMS', c: 'Data transfer failure' },
          correct: 'b',
        },
        {
          id: 326,
          category: 'ATA 34',
          question: 'How can a temporary waypoint be set using the Slew Controllers?',
          options: { a: 'Pressing ENTER key', b: 'Pressing any of the 3 red HOOK buttons', c: 'Pressing the ON/OFF DIM key' },
          correct: 'b',
        },
        {
          id: 327,
          category: 'ATA 34',
          question: 'What is the purpose of the Maintenance Pages?',
          options: { a: 'Fuel system diagnostics', b: 'Weather monitoring', c: 'FMS testing and diagnostics' },
          correct: 'c',
        },
        {
          id: 328,
          category: 'ATA 34',
          question: 'What type of tests are included in the Dynamic Tests on Maintenance Pages?',
          options: { a: 'Navigation tests', b: 'Fuel system tests', c: 'Dynamic Approach Tests' },
          correct: 'c',
        },
        {
          id: 329,
          category: 'ATA 34',
          question: 'What is the purpose of the FLAG VERT indication during Dynamic Approach Tests?',
          options: { a: 'Vertical deviation correction', b: 'Horizontal deviation correction', c: 'Fault indication' },
          correct: 'a',
        },
        {
          id: 330,
          category: 'ATA 34',
          question: 'How is a temporary waypoint identified on the FMS?',
          options: { a: 'Designator R01, R02, etc.', b: 'Latitude/Longitude display', c: 'Weather display' },
          correct: 'a',
        },

/* 
        --------------
        --------------
        --------------
        -------------- */
        {
          id: 331,
          category: "ATA 70",
          question: "What does the EPAC page provide the means to perform?",
          options: { a: "Weight on wheel checks", b: "Power assurance checks", c: "Flight data calculations" },
          correct: "b"
        },
        
        {
          id: 332,
          category: "ATA 70",
          question: "How often is the Engine Power Assurance Check required?",
          options: { a: "Once a week", b: "Once a month", c: "At least once a day" },
          correct: "c"
        },
        
        {
          id: 333,
          category: "ATA 70",
          question: "Which system is needed to execute power assurance checks performed by the DCUs?",
          options: { a: "FADEC", b: "AMM", c: "EPAC" },
          correct: "a"
        },
        
        {
          id: 334,
          category: "ATA 70",
          question: "Where are the EPAC values displayed for engine 1?",
          options: { a: "Co-pilots MFDs", b: "Pilots MFDs", c: "All MFDs" },
          correct: "a"
        },
        
        {
          id: 335,
          category: "ATA 70",
          question: "When does the target airspeed readout display '120'?",
          options: { a: "On ground", b: "In the air", c: "During a power failure" },
          correct: "b"
        },
        
        {
          id: 336,
          category: "ATA 70",
          question: "What does the XFILL command do?",
          options: { a: "Initiates engine test", b: "Performs a cross fill of stored data", c: "Resets engine parameters" },
          correct: "b"
        },

        {
          id: 339,
          category: "ATA 70",
          question: "When are EPAC data failures indicated?",
          options: { a: "In a yellow warning annunciation", b: "In a red warning annunciation", c: "As pop-up alerts" },
          correct: "b"
        },

        {
          id: 342,
          category: "ATA 70",
          question: "What does the STATUS line on the power assurance display indicate?",
          options: { a: "Current aircraft conditions", b: "Results of the EPAC check", c: "The state of the EPAC process" },
          correct: "c"
        },
        
        {
          id: 343,
          category: "ATA 70",
          question: "What does the first box on the power assurance display show?",
          options: { a: "Error messages", b: "Current aircraft conditions for each engine", c: "TGT margin values" },
          correct: "b"
        },
        
        {
          id: 344,
          category: "ATA 70",
          question: "How many air and ground checks are stored in the EPAC data?",
          options: { a: "5", b: "10", c: "15" },
          correct: "b"
        },
      
        {
          id: 347,
          category: "ATA 70",
          question: "What does the TAS WINDOW error message indicate?",
          options: { a: "Unstable true airspeed", b: "Unstable torque", c: "Unstable attitude" },
          correct: "a"
        },
        

        {
          id: 349,
          category: "ATA 70",
          question: "When is the Cross Fill (XFILL) command available?",
          options: { a: "In-flight only", b: "On the ground using APU or external power", c: "Both a and b" },
          correct: "b"
        },


        {
          id: 350,
          category: 'ATA 34',
          question: 'If the heating element of the left hand pitot system fails what warning will be displayed?',
          options: { a: 'ADC 1 Fail', b: 'Pitot heat 1', c: 'Pitot heat 3' },
          correct: 'b',
        },
        {
          id: 351,
          category: 'ATA 34',
          question: 'If the heating element of the standby pitot system fails what warning will be displayed?',
          options: { a: 'Pitot heat 1', b: 'Standby heat fail', c: 'Pitot heat 3' },
          correct: 'c',
        },      
          {
          id: 352,
          category: 'ATA 34',
          question: 'ADF bearing arrow 1 is shown in what colour?',
          options: { a: 'Blue', b: 'Green', c: 'White' },
          correct: 'a',
        },      
          {
          id: 353,
          category: 'ATA 34',
          question: 'ADF bearing arrow 2 is shown in what colour?',
          options: { a: 'Blue', b: 'Green', c: 'White' },
          correct: 'b',
        },       
         {
          id: 354,
          category: 'ATA 34',
          question: 'Vertical and Lateral deviations of the ILS indication is display with ?',
          options: { a: 'Magenta Diamond', b: 'Magenta Cross', c: 'White Cross' },
          correct: 'a',
        },       
         {
          id: 355,
          category: 'ATA 34',
          question: 'At what Frequency does the ILS system operate?',
          options: { a: '100 - 107 MHz', b: '108 - 112 MHz', c: '112 - 117 MHz' },
          correct: 'b',
        },      
          {
          id: 356,
          category: 'ATA 34',
          question: 'VOR 1 beacon information is displayed in what colour?',
          options: { a: 'Blue', b: 'Green', c: 'White' },
          correct: 'a',
        },       
         {
          id: 357,
          category: 'ATA 34',
          question: 'VOR 1 Beacon is displayed on the Co-pilots MFD with what selection?',
          options: { a: 'NAV on DCP 1', b: 'NAV on DCP 2', c: 'VOR on DCP 1' },
          correct: 'a',
        },      
          {
          id: 358,
          category: 'ATA 34',
          question: 'Glideslope frequency is paired with ?',
          options: { a: 'Comm 1', b: 'VOR', c: 'FMS' },
          correct: 'b',
        },       
         {
          id: 359,
          category: 'ATA 34',
          question: 'How is full functioning of the FMS displayed?',
          options: { a: 'BIT pass displayed on MFD STATUS page', b: 'Blue Honeywell Copyright dissapears ', c: 'S92A and 6 sub systems PASSED statements' },
          correct: 'c',
        },       
         {
          id: 360,
          category: 'ATA 34',
          question: 'The slew cursor will display on Right Side MFD\'s?',
          options: { a: 'When the pilot uses slew control thumb switch', b: 'When the Co-pilot uses slow control thumb switch', c: 'either pilot or co-pilot use slew control thumb switch' },
          correct: 'a',
        },        
        {
          id: 361,
          category: 'ATA 34',
          question: 'Test of the DME system are initated from?',
          options: { a: 'RTU 1', b: 'RTU 2', c: 'DCP 1' },
          correct: 'a',
        },       
         {
          id: 362,
          category: 'ATA 34',
          question: 'Which pitot system feeds ADC 1?',
          options: { a: 'RH Pitot', b: 'LH Pitot and standby Pitot', c: 'LH Pitot' },
          correct: 'c',
        },
        {
          id: 363,
          category: 'ATA 34',
          question: 'AHRS two will normally displays Vertical speed on PFD?',
          options: { a: 'Co-Pilots MFDs', b: 'Pilots MFDs', c: 'All MFDS' },
          correct: 'b',
        },
        {
          id: 364,
          category: 'ATA 34',
          question: 'Where are the results of a compass swing stored? ',
          options: { a: 'Removeable programable module attached to the AHRS', b: 'Programmed into the MFD', c: 'Within the MDC' },
          correct: 'a',
        },
        {
          id: 365,
          category: 'ATA 34',
          question: 'What are the minimum points required for a compass swing ? ',
          options: { a: '4', b: '8', c: '12' },
          correct: 'b',
        },
        {
          id: 366,
          category: 'ATA 34',
          question: 'The TCAS system can be tested from?',
          options: { a: 'RTU 1 ', b: 'TCAS control panel', c: 'The Avionics health page' },
          correct: 'c',
        },
        {
          id: 367,
          category: 'ATA 34',
          question: 'How can the EPWG databasae be updated',
          options: { a: 'No update is required', b: 'Via a smart cable fitted the EPWG computer', c: 'System update Via MFD 3' },
          correct: 'b',
        },
        {
          id: 368,
          category: 'Engine Manuals',
          question: 'Which ATA will display engine electrics',
          options: { a: '74', b: '24', c: '70' },
          correct: 'a',
        },
        {
          id: 369,
          category: 'Engine Manuals',
          question: 'Where can engine service life limits be found?',
          options: { a: 'Aircraft Chapter 05', b: 'Engine Chapter 05', c: 'Engine Chapter 00' },
          correct: 'b',
        },
        {
          id: 370,
          category: 'Engine Manuals',
          question: 'When using the engine manual what indication will annotate matched components?',
          options: { a: 'Three astric ***', b: 'Mathcing Part numbers', c: 'Matched Part, Order NHA' },
          correct: 'c',
        },
        {
          id: 371,
          category: "ATA 71",
          question: "What is the purpose of the Demountable Power Package (DPP) for the GE CT7-8A engine?",
          options: { a: "Provide engine cooling", b: "Facilitate engine installation on the aircraft", c: "Enhance fuel efficiency" },
          correct: 'b'
        },
        
        {
          id: 373,
          category: "ATA 71",
          question: "What provides rear engine lateral and vertical alignment in the GE CT7-8A engine?",
          options: { a: "Expandable bolt", b: "Struts and links", c: "Air intakes" },
          correct: 'b'
        },
        

        {
          id: 375,
          category: "ATA 71",
          question: "What is the function of the Inlet Particle Separator (IPS) in the GE CT7-8A engine?",
          options: { a: "Reduce engine vibrations", b: "Prevent FOD damage to the engine", c: "Cool the engine compartments" },
          correct: 'b'
        },
        
        {
          id: 376,
          category: "ATA 71",
          question: "Where are the compressor bleed ports located on the GE CT7-8A engine?",
          options: { a: "Near the front of the engine", b: "At the 03:00 and 09:00 positions", c: "At the exhaust bulkhead" },
          correct: 'b'
        },
        
        {
          id: 377,
          category: "ATA 71",
          question: "What do the five combined drains in the CT7-8 engine feed into?",
          options: { a: "Fuel tank", b: "Environmental drain tank", c: "Oil lubrication system" },
          correct: 'b'
        },
        
        {
          id: 378,
          category: "ATA 71",
          question: "Where are the engine bay drains located in the GE CT7-8A engine?",
          options: { a: "Inside the cabin", b: "Behind the vapour barriers", c: "On the upper deck" },
          correct: 'b'
        },
        
        {
          id: 379,
          category: "ATA 71",
          question: "What provides rotation to the engine compressor and accessories during the start cycle?",
          options: { a: "Pneumatic starter", b: "Electric starter", c: "Manual crankshaft" },
          correct: 'a'
        },
        
        {
          id: 380,
          category: "ATA 71",
          question: "How are engine vibrations detected in the GE CT7-8A engine?",
          options: { a: "By accelerometers", b: "By strain gauges", c: "By pressure sensors" },
          correct: 'a'
        },
        
        {
          id: 381,
          category: "ATA 71",
          question: "What separates the engine enclosure from surrounding areas in the airframe of the GE CT7-8A engine?",
          options: { a: "Expandable bolt", b: "Titanium firewalls", c: "Struts and links" },
          correct: 'b'
        },
        
        {
          id: 382,
          category: "ATA 71",
          question: "What is the primary function of the Full Authority Digital Engine Control (FADEC) system in the GE CT7-8A engine?",
          options: { a: "Provide lighting control", b: "Control engine operation automatically", c: "Monitor fuel levels" },
          correct: 'b'
        },
        
        {
          id: 384,
          category: "ATA 71",
          question: "How are the electrical harnesses color-coded in the GE CT7-8A engine?",
          options: { a: "Red, blue, green", b: "Green, yellow, blue", c: "Red, yellow, green" },
          correct: 'b'
        },
        
        {
          id: 385,
          category: "ATA 71",
          question: "What is the purpose of the engine cleaning configuration known as 'single point'?",
          options: { a: "Increase fuel efficiency", b: "Reduce engine vibrations", c: "Introduce cleaning fluid to both engines from an external rig" },
          correct: 'c'
        },
        
        {
          id: 386,
          category: "ATA 71",
          question: "When should the daily post-flight water rinse be performed for the GE CT7-8A engine?",
          options: { a: "Every 50 hours", b: "After 150 hours of operation", c: "In addition to scheduled cleaning" },
          correct: 'c'
        },
        
        {
          id: 387,
          category: "ATA 71",
          question: "What must be pulled out before commencing the daily water rinse procedure in the GE CT7-8A engine?",
          options: { a: "Fuel Metering Unit", b: "RIPS CTRL circuit breakers", c: "FADEC components" },
          correct: 'b'
        },
        
        {
          id: 388,
          category: "ATA 71",
          question: "What is the maximum lift capacity of the GE 2C9005001 sling for the CT7-8A engine?",
          options: { a: "500 lbs", b: "800 lbs", c: "1000 lbs" },
          correct: 'b'
        },
        
        {
          id: 389,
          category: "ATA 71",
          question: "Why must the engine oil be removed if the GE CT7-8A engine is turned to a vertical position?",
          options: { a: "To prevent corrosion", b: "To prevent compressor rotor imbalance", c: "To reduce engine weight" },
          correct: 'b'
        },
        
{
  id: 390,
  category: "ATA 78",
  question: "What component is responsible for stopping the swirling of exhaust gases and directing them into an exhaust tube?",
  options: { a: "de-swirl duct", b: "centre tailpipe body", c: "exhaust tailpipe" },
  correct: "a",
},


{
  id: 391,
  category: "ATA 78",
  question: "What effect does the air gap between the de-swirl duct and the airframe exhaust tailpipe tube create?",
  options: { a: "low-pressure venturi effect", b: "high-pressure venturi effect", c: "no effect" },
  correct: "a",
},


{
  id: 392,
  category: "ATA 78",
  question: "What purpose does the airflow through the engine compartment serve?",
  options: { a: "increase engine temperature", b: "cool the compartment", c: "create turbulence" },
  correct: "b",
},


{
  id: 395,
  category: "ATA 78",
  question: "Is the hardware interchangeable between the No. 1 engine and the No. 2 engine configuration?",
  options: { a: "yes", b: "no", c: "depends on torque" },
  correct: "a",
},


{
  id: 396,
  category: "ATA 78",
  question: "What precaution is mentioned regarding the drainage hole of the Centre Tailpipe Body?",
  options: { a: "position it at 12 o'clock", b: "position it at 3 o'clock", c: "position it at 6 o'clock" },
  correct: "c",
},


{
  id: 397,
  category: "ATA 78",
  question: "Where should the De-swirl Duct 'V' Clamp joints be positioned to avoid interference with Fire Detectors?",
  options: { a: "towards Fire Detectors", b: "away from Fire Detectors", c: "does not matter" },
  correct: "b",
},


{
  id: 398,
  category: "ATA 78",
  question: "What is the recommended procedure after fitting the hardware that requires a torque check?",
  options: { a: "run engine for 5min", b: "run engine for 10min", c: "run engine for 15min" },
  correct: "b",
},


{
  id: 399,
  category: "ATA 78",
  question: "What caution is advised when working around an operating engine due to the temperature of the exhaust gases?",
  options: { a: "use protective clothing", b: "no caution needed", c: "be cautious to avoid severe burns" },
  correct: "c",
}

        
    


    // Add more questions as needed
  ];
  