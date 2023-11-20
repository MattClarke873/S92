
const questionBank = [
{
    id: 357,
    category: 'ATA 00-12',
    question: 'Where can Aircraft manuals be accessed in PDF format?',
    options: { a: 'Sikorsky 360 Website', b: 'PDF CDs', c: 'IETM DVDs' },
    correct: 'b',
  },
  {
    id: 358,
    category: 'ATA 00-12',
    question: 'What is the URL for Sikorsky 360 website?',
    options: { a: 'https://www.sikorsky360.com', b: 'https://www.sikorsky.com', c: 'https://360.sikorsky.com' },
    correct: 'a',
  },
  {
    id: 359,
    category: 'ATA 00-12',
    question: 'How can Sikorsky 360 be accessed? ',
    options: { a: 'Only as a mobile application', b: 'Only as a desktop application', c: 'Both as a mobile and desktop application' },
    correct: 'c',
  },
  {
    id: 360,
    category: 'ATA 00-12',
    question: 'Which of the following is not a type of E-Notification according to the Sikorsky 360 website?',
    options: { a: 'AOL - All Operator Letters', b: 'ATL Modifications', c: 'SRN - Software Release Note' },
    correct: 'b',
  },
  {
    id: 361,
    category: 'ATA 00-12',
    question: 'What does IETM stand for?',
    options: { a: 'In-Flight Entertainment System', b: 'Integrated Electronic Technical Manual', c: 'Interactive Electrical Test Module' },
    correct: 'b',
  },
  {
    id: 362,
    category: 'ATA 00-12',
    question: 'What type of manuals are available on CDs in PDF format but are not updated daily?',
    options: { a: 'RFM Manuals', b: 'IETM Manuals', c: 'Maintenance Manuals' },
    correct: 'c',
  },
  {
    id: 363,
    category: 'ATA 00-12',
    question: 'What is the purpose of Specific ICAs?',
    options: { a: 'Routine inspections', b: 'Customer specific modifications', c: 'Aircraft configurations' },
    correct: 'b',
  },
  {
    id: 364,
    category: 'ATA 00-12',
    question: 'What is included in RFM Supplements?',
    options: { a: 'Routine maintenance procedures', b: 'Modifications and software upgrades', c: 'Aircraft configurations' },
    correct: 'b',
  },
  {
    id: 365,
    category: 'ATA 00-12',
    question: 'What does AMP stand for?',
    options: { a: 'Aircraft Maintenance Programme', b: 'Aircraft Manufacturing Process', c: 'Aircraft Management Protocol' },
    correct: 'a',
  },
  {
    id: 366,
    category: 'ATA 00-12',
    question: 'According to ATA Specification No. 2200, how is subject matter arranged?',
    options: { a: 'By alphabetical order', b: 'By five levels of division', c: 'By page numbering system' },
    correct: 'b',
  },
  {
    id: 367,
    category: 'ATA 00-12',
    question: 'What does CAGE stand for in the context of Sikorsky Part Numbers?',
    options: { a: 'Chapter and Group Equipment', b: 'Commercial and Government Entity', c: 'Configuration and Group Equipment' },
    correct: 'b',
  },
  {
    id: 368,
    category: 'ATA 00-12',
    question: 'What is the purpose of a Temporary Revision (T-Rev)?',
    options: { a: 'To replace permanent revisions', b: 'To provide a rapid means of amending manuals', c: 'To update the page numbering system' },
    correct: 'b',
  },
  {
    id: 369,
    category: 'ATA 00-12',
    question: 'Where can operators find Active Temporary Revisions?',
    options: { a: 'In the maintenance manual appendix', b: 'On the Sikorsky 360 website', c: 'In the Numeric Index' },
    correct: 'b',
  },
  {
    id: 370,
    category: 'ATA 00-12',
    question: 'What does SM&R Code stand for?',
    options: { a: 'Standard Maintenance and Repair Code', b: 'Source Maintenance & Recoverability Code', c: 'Sikorsky Maintenance & Reliability Code' },
    correct: 'b',
  },
  {
    id: 371,
    category: 'ATA 00-12',
    question: 'What is the purpose of Hazardous Material Warning Icons?',
    options: { a: 'To indicate critical parts', b: 'To provide additional information', c: 'To warn personnel of hazards' },
    correct: 'c',
  },
  {
    id: 372,
    category: "ATA 00-12",
    question: "What is the primary method for submitting Requests for Revisions using Sikorsky Publications SoundOff?",
    options: { a: "Faxing", b: "Web Form", c: "MS Word Document" },
    correct: "b"
  },
  
  {
    id: 373,
    category: "ATA 00-12",
    question: "Where can SoundOff reports be e-mailed?",
    options: { a: "soundoff@sikorsky.com", b: "support@sikorsky.com", c: "feedback@sikorsky.com" },
    correct: "a"
  },
  
  {
    id: 374,
    category: "ATA 00-12",
    question: "What information does the List of Active Temporary Revisions provide?",
    options: { a: "Temporary revision numbers", b: "Temporary revision status", c: "List of non-active revisions" },
    correct: "b"
  },
  
  {
    id: 375,
    category: "ATA 00-12",
    question: "What is the purpose of the Highlights section in the Manual Front Matter?",
    options: { a: "Introduction to the manual", b: "Overview of significant changes", c: "Warnings related to maintenance tasks" },
    correct: "b"
  },
  
  {
    id: 376,
    category: "ATA 00-12",
    question: "Which chapter of the AMM provides maintenance ground and flight check procedures for the S-92A?",
    options: { a: "Chapter 4", b: "Chapter 5", c: "Chapter 10" },
    correct: "c"
  },
  
  {
    id: 377,
    category: "ATA 00-12",
    question: "What does ASB stand for in Sikorsky's publications?",
    options: { a: "Alert Service Bulletin", b: "Aircraft Service Bulletin", c: "Advanced Service Bulletin" },
    correct: "a"
  },
  
  {
    id: 378,
    category: "ATA 00-12",
    question: "Which document contains ATA Chapters 4 & 5 for maintenance limitations and inspection requirements?",
    options: { a: "AWL", b: "FCP", c: "AMM" },
    correct: "a"
  },
  
  {
    id: 379,
    category: "ATA 00-12",
    question: "What is the primary purpose of the List of Effective Pages (LOEP) in each chapter?",
    options: { a: "Record temporary revisions", b: "Identify revision dates", c: "List individual pages and their revisions" },
    correct: "c"
  },
  
  {
    id: 380,
    category: "ATA 00-12",
    question: "How many maintenance zones is the S-92A aircraft subdivided into?",
    options: { a: "3", b: "5", c: "7" },
    correct: "b"
  },
  
  {
    id: 381,
    category: "ATA 00-12",
    question: "What is the primary purpose of fuselage jack pads on the S-92A?",
    options: { a: "To measure aircraft weight", b: "To raise the entire aircraft", c: "To secure the landing gear" },
    correct: "b"
  },
  
  {
    id: 382,
    category: "ATA 00-12",
    question: "How many types of jacking methods are used for the S-92A?",
    options: { a: "1", b: "2", c: "3" },
    correct: "b"
  },
  
  {
    id: 383,
    category: "ATA 00-12",
    question: "What caution is mentioned regarding jacking the helicopter outdoors?",
    options: { a: "Avoid jacking in windy conditions", b: "Use extreme caution while entering and leaving", c: "Jack only on level surfaces" },
    correct: "a"
  },
  
  {
    id: 384,
    category: "ATA 00-12",
    question: "What procedure is used to tow the S-92A aircraft?",
    options: { a: "Whole Aircraft Towing", b: "Single Point Towing", c: "Dockside Lifting" },
    correct: "a"
  },
  
  {
    id: 385,
    category: "ATA 00-12",
    question: "When is it suggested to release parking brakes to prevent freezing?",
    options: { a: "During short term parking", b: "In cold weather with snow", c: "During towing" },
    correct: "b"
  },
  
  {
    id: 386,
    category: "ATA 00-12",
    question: "What should be done if the helicopter will be exposed to tornado or winds above 65 knots?",
    options: { a: "Move it to a hangar", b: "Apply parking brakes", c: "Tow it to a safer location" },
    correct: "a"
  },
  
  {
    id: 387,
    category: "ATA 00-12",
    question: "What is the primary method for mooring the S-92A aircraft?",
    options: { a: "Tying it down with ropes", b: "Attaching it to a crane", c: "Securing it to a hangar" },
    correct: "a"
  },
  
  {
    id: 388,
    category: "ATA 00-12",
    question: "Which document provides storage procedures for S-92A engines?",
    options: { a: "AMM", b: "FCP", c: "GE CT7-8 Turboshaft Engine Maintenance Manual" },
    correct: "c"
  },
  
  {
    id: 389,
    category: "ATA 00-12",
    question: "What is the primary purpose of Placards and Markings in the helicopter?",
    options: { a: "Decoration", b: "Identification and safety", c: "Indicating fuel levels" },
    correct: "b"
  },
  
  {
    id: 390,
    category: "ATA 00-12",
    question: "What is the purpose of the Replenishing Table in the AMM Servicing Overview?",
    options: { a: "List of effective chapters", b: "Fuel system adjustments", c: "System and component replenishment details" },
    correct: "c"
  },
  {
    id: 391,
    category: "ATA 00-12",
    question: "What caution is given regarding the removal of ice from antennas, lights, and covers?",
    options: { a: "Use high-pressure tools", b: "Use hand tools cautiously", c: "Do not remove ice from these components" },
    correct: 'c',
  },
  {
    id: 392,
    category: "ATA 00-12",
    question: "What type of de-icing/anti-icing fluid is cautioned against spraying on the main rotor hub?",
    options: { a: "SAE AMS 1424", b: "SAE AMS 1428, Type II", c: "SAE AMS 1428, Type IV" },
    correct: 'c',
  },
  {
    id: 393,
    category: "ATA 00-12",
    question: "What is the recommended preventive measure when temperatures below 0°C are expected?",
    options: { a: "Scrape ice from the windshield", b: "Apply de-icing/anti-icing fluid", c: "Use a soft bristle brush" },
    correct: 'b',
  },
  {
    id: 394,
    category: "ATA 00-12",
    question: "Where are Engine Fuel Drain Collector Tanks located on the aircraft?",
    options: { a: "Upper side of the fuselage", b: "Wingtips", c: "Lower side of the fuselage (STA 366)" },
    correct: 'c',
  },
  {
    id: 395,
    category: "ATA 00-12",
    question: "What is the draining procedure for the Engine Fuel Drain Collector Tank?",
    options: { a: "Open fuel drain valve first", b: "Secure cap on valve first", c: "Remove cap from fuel drain valve first" },
    correct: 'c',
  },
  {
    id: 396,
    category: "ATA 00-12",
    question: "During post-flight fuel draining, what should be done if no fuel is collected on two consecutive attempts?",
    options: { a: "Continue draining attempts", b: "Inspect and clean the drain valve", c: "Ignore the issue" },
    correct: 'b',
  },
  {
    id: 397,
    category: "ATA 00-12",
    question: "Where is the information about external electrical power application found?",
    options: { a: "ATA 24 Electrical Power", b: "ATA 12 Fuselage / Blades", c: "ATA 00 General" },
    correct: 'a',
  },
  {
    id: 398,
    category: "ATA 00-12",
    question: "What is the recommended method for removing ice from the fuselage?",
    options: { a: "Use hand tools cautiously", b: "Scrape and pry ice", c: "Assist with a soft bristle brush" },
    correct: 'c',
  },
  {
    id: 399,
    category: "ATA 00-12",
    question: "What is the caution regarding the use of de-icing/anti-icing fluid on the swashplate?",
    options: { a: "Direct spray at high pressure", b: "Avoid spraying in or around swashplate", c: "Spray liberally on swashplate" },
    correct: 'b',
  },
  {
    id: 400,
    category: "ATA 00-12",
    question: "Where can references for draining procedures be found in the aircraft documentation?",
    options: { a: "ATA 00 General", b: "ATA 24 Electrical Power", c: "ATA 12 Fuselage / Blades" },
    correct: 'c',
  },
  {
    id: 401,
    category: 'ATA 20',
    question: 'What does the Standard Practices chapter cover?',
    options: { a: 'Scheduled inspection job set-up', b: 'Lockwiring - Maintenance Practices', c: 'Electrical Connectors - Maintenance Practices' },
    correct: 'a',
  },
  
  {
    id: 402,
    category: 'ATA 20',
    question: 'Which category of inspection involves the actual operation of equipment to verify proper operating condition?',
    options: { a: 'Visual', b: 'Dimensional', c: 'Operational' },
    correct: 'c',
  },
  
  {
    id: 403,
    category: 'ATA 20',
    question: 'What is included in the Scheduled Inspection Job Set-Up section?',
    options: { a: 'Description of Torque Striping', b: 'Checklist of preparation tasks for the 1500-hour inspection', c: 'Lockwiring - Description' },
    correct: 'b',
  },
  
  {
    id: 404,
    category: 'ATA 20',
    question: 'How is Safe-T-CableTM different from standard lockwire?',
    options: { a: 'More expensive', b: 'Less flexible', c: 'More flexible and lighter weight' },
    correct: 'c',
  },
  
  {
    id: 405,
    category: 'ATA 20',
    question: 'What is described in the Self-Retaining Bolt Installation section?',
    options: { a: 'Use of Safety Cable', b: 'Torque Striping Hardware', c: 'Installation and torque tightening procedures of self-retaining bolts' },
    correct: 'c',
  },
  
  {
    id: 406,
    category: 'ATA 20',
    question: 'When is torque striping applied to fasteners?',
    options: { a: 'When specified', b: 'If the part is caulked, sealed, or painted', c: 'Both a and b' },
    correct: 'c',
  },
  
  {
    id: 407,
    category: 'ATA 20',
    question: 'What does the Leakage Inspection Criteria section contain information about?',
    options: { a: 'Lockwiring procedures', b: 'Leakage accept/reject criteria for oil-wetted/hydraulic components', c: 'Torque wrenches/other types' },
    correct: 'b',
  },
  
  {
    id: 408,
    category: 'ATA 20',
    question: 'How is the repair of flight control hydraulic tubes achieved?',
    options: { a: 'Using standard lockwire', b: 'Axial swaging with PermaLite connections', c: 'Using Torque Striping Hardware' },
    correct: 'b',
  },
  
  {
    id: 409,
    category: 'ATA 20',
    question: 'What is the purpose of the Deutsch Axial swage Tool (DAT) toolkit?',
    options: { a: 'To apply Torque Stripes', b: 'To repair flight control hydraulic tubes', c: 'To install Safety Cable' },
    correct: 'b',
  },
  
  {
    id: 410,
    category: 'ATA 20',
    question: 'Which component is a product of the Permaswage Company?',
    options: { a: 'PermaLite connection', b: 'Safety Cable ferrule cartridges', c: 'Turnbuckles' },
    correct: 'a',
  },
  
  {
    id: 411,
    category: 'ATA 20',
    question: 'What is the purpose of Safe-T-CableTM kits?',
    options: { a: 'To facilitate easy access to maintenance', b: 'To eliminate the need for inspections', c: 'To install Safety Cable where secondary hardware retention is required' },
    correct: 'c',
  },
  
  {
    id: 412,
    category: 'ATA 20',
    question: 'In the Torque Striping Hardware section, when is the head striped if the fastener end is not designated?',
    options: { a: 'Never', b: 'Regardless of safety requirements', c: 'When specified' },
    correct: 'b',
  },
  
  {
    id: 413,
    category: 'ATA 20',
    question: 'What does the Standard Lockwiring section describe?',
    options: { a: 'Use of standard industry practices', b: 'Use of standard single and double-twist methods of wire locking', c: 'Application of Polyurethane Sealant' },
    correct: 'b',
  },
  
  {
    id: 414,
    category: 'ATA 20',
    question: 'What is the purpose of the Safety Cable (Safe-T-CableTM) in some procedures?',
    options: { a: 'To replace standard lockwire', b: 'To add weight to components', c: 'To facilitate easy access to maintenance' },
    correct: 'a',
  },
  
  {
    id: 415,
    category: 'ATA 20',
    question: 'What is included in the Inspection Practices section?',
    options: { a: 'Types of inspections required for maintenance and repair', b: 'Description of Teflon Coating', c: 'Repair of Flight Control Hydraulic Lines' },
    correct: 'a',
  }
  
  
];