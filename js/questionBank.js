const questionBank = [

  {
    id: 1,
    category: "ATA 00-12",
    question: "Where can Aircraft manuals be accessed in PDF format?",
    options: {
      a: "Sikorsky 360 Website",
      b: "PDF CDs",
      c: "IETM DVDs"
    },
    correct: "b"
  },
  {
    id: 2,
    category: "ATA 00-12",
    question: "What is the URL for Sikorsky 360 website?",
    options: {
      a: "https://www.sikorsky360.com",
      b: "https://www.sikorsky.com",
      c: "https://360.sikorsky.com"
    },
    correct: "a"
  },
  {
    id: 3,
    category: "ATA 00-12",
    question: "How can Sikorsky 360 be accessed? ",
    options: {
      a: "Only as a mobile application",
      b: "Only as a desktop application",
      c: "Both as a mobile and desktop application"
    },
    correct: "c"
  },
  {
    id: 4,
    category: "ATA 00-12",
    question: "Which of the following is not a type of E-Notification according to the Sikorsky 360 website?",
    options: {
      a: "AOL - All Operator Letters",
      b: "ATL Modifications",
      c: "SRN - Software Release Note"
    },
    correct: "b"
  },
  {
    id: 5,
    category: "ATA 00-12",
    question: "What does IETM stand for?",
    options: {
      a: "In-Flight Entertainment System",
      b: "Integrated Electronic Technical Manual",
      c: "Interactive Electrical Test Module"
    },
    correct: "b"
  },
  {
    id: 6,
    category: "ATA 00-12",
    question: "What type of manuals are available on CDs in PDF format but are not updated daily?",
    options: {
      a: "RFM Manuals",
      b: "IETM Manuals",
      c: "Maintenance Manuals"
    },
    correct: "c"
  },
  {
    id: 7,
    category: "ATA 00-12",
    question: "What is the purpose of Specific ICAs?",
    options: {
      a: "Routine inspections",
      b: "Customer specific modifications",
      c: "Aircraft configurations"
    },
    correct: "b"
  },
  {
    id: 8,
    category: "ATA 00-12",
    question: "What is included in RFM Supplements?",
    options: {
      a: "Routine maintenance procedures",
      b: "Modifications and software upgrades",
      c: "Aircraft configurations"
    },
    correct: "b"
  },
  {
    id: 9,
    category: "ATA 00-12",
    question: "What does AMP stand for?",
    options: {
      a: "Aircraft Maintenance Programme",
      b: "Aircraft Manufacturing Process",
      c: "Aircraft Management Protocol"
    },
    correct: "a"
  },
  {
    id: 10,
    category: "ATA 00-12",
    question: "According to ATA Specification No. 2200, how is subject matter arranged?",
    options: {
      a: "By alphabetical order",
      b: "By five levels of division",
      c: "By page numbering system"
    },
    correct: "b"
  },
  {
    id: 11,
    category: "ATA 00-12",
    question: "What does CAGE stand for in the context of Sikorsky Part Numbers?",
    options: {
      a: "Chapter and Group Equipment",
      b: "Commercial and Government Entity",
      c: "Configuration and Group Equipment"
    },
    correct: "b"
  },
  {
    id: 12,
    category: "ATA 00-12",
    question: "What is the purpose of a Temporary Revision (T-Rev)?",
    options: {
      a: "To replace permanent revisions",
      b: "To provide a rapid means of amending manuals",
      c: "To update the page numbering system"
    },
    correct: "b"
  },
  {
    id: 13,
    category: "ATA 00-12",
    question: "Where can operators find Active Temporary Revisions?",
    options: {
      a: "In the maintenance manual appendix",
      b: "On the Sikorsky 360 website",
      c: "In the Numeric Index"
    },
    correct: "b"
  },
  {
    id: 14,
    category: "ATA 00-12",
    question: "What does SM&R Code stand for?",
    options: {
      a: "Standard Maintenance and Repair Code",
      b: "Source Maintenance & Recoverability Code",
      c: "Sikorsky Maintenance & Reliability Code"
    },
    correct: "b"
  },
  {
    id: 15,
    category: "ATA 00-12",
    question: "What is the purpose of Hazardous Material Warning Icons?",
    options: {
      a: "To indicate critical parts",
      b: "To provide additional information",
      c: "To warn personnel of hazards"
    },
    correct: "c"
  },
  {
    id: 16,
    category: "ATA 00-12",
    question: "What is the primary method for submitting Requests for Revisions using Sikorsky Publications SoundOff?",
    options: {
      a: "Faxing",
      b: "Web Form",
      c: "MS Word Document"
    },
    correct: "b"
  },
  {
    id: 17,
    category: "ATA 00-12",
    question: "Where can SoundOff reports be e-mailed?",
    options: {
      a: "soundoff@sikorsky.com",
      b: "support@sikorsky.com",
      c: "feedback@sikorsky.com"
    },
    correct: "a"
  },
  {
    id: 18,
    category: "ATA 00-12",
    question: "What information does the List of Active Temporary Revisions provide?",
    options: {
      a: "Temporary revision numbers",
      b: "Temporary revision status",
      c: "List of non-active revisions"
    },
    correct: "b"
  },
  {
    id: 19,
    category: "ATA 00-12",
    question: "What is the purpose of the Highlights section in the Manual Front Matter?",
    options: {
      a: "Introduction to the manual",
      b: "Overview of significant changes",
      c: "Warnings related to maintenance tasks"
    },
    correct: "b"
  },
  {
    id: 20,
    category: "ATA 00-12",
    question: "Which chapter of the AMM provides maintenance ground and flight check procedures for the S-92A?",
    options: {
      a: "Chapter 4",
      b: "Chapter 5",
      c: "Chapter 10"
    },
    correct: "c"
  },
  {
    id: 21,
    category: "ATA 00-12",
    question: "What does ASB stand for in Sikorsky's publications?",
    options: {
      a: "Alert Service Bulletin",
      b: "Aircraft Service Bulletin",
      c: "Advanced Service Bulletin"
    },
    correct: "a"
  },
  {
    id: 22,
    category: "ATA 00-12",
    question: "Which document contains ATA Chapters 4 & 5 for maintenance limitations and inspection requirements?",
    options: {
      a: "AWL",
      b: "FCP",
      c: "AMM"
    },
    correct: "a"
  },
  {
    id: 23,
    category: "ATA 00-12",
    question: "What is the primary purpose of the List of Effective Pages (LOEP) in each chapter?",
    options: {
      a: "Record temporary revisions",
      b: "Identify revision dates",
      c: "List individual pages and their revisions"
    },
    correct: "c"
  },
  {
    id: 24,
    category: "ATA 00-12",
    question: "How many maintenance zones is the S-92A aircraft subdivided into?",
    options: {
      a: "3",
      b: "5",
      c: "7"
    },
    correct: "b"
  },
  {
    id: 25,
    category: "ATA 00-12",
    question: "What is the primary purpose of fuselage jack pads on the S-92A?",
    options: {
      a: "To measure aircraft weight",
      b: "To raise the entire aircraft",
      c: "To secure the landing gear"
    },
    correct: "b"
  },
  {
    id: 26,
    category: "ATA 00-12",
    question: "How many types of jacking methods are used for the S-92A?",
    options: {
      a: "1",
      b: "2",
      c: "3"
    },
    correct: "b"
  },
  {
    id: 27,
    category: "ATA 00-12",
    question: "What caution is mentioned regarding jacking the helicopter outdoors?",
    options: {
      a: "Avoid jacking in windy conditions",
      b: "Use extreme caution while entering and leaving",
      c: "Jack only on level surfaces"
    },
    correct: "a"
  },
  {
    id: 28,
    category: "ATA 00-12",
    question: "What procedure is used to tow the S-92A aircraft?",
    options: {
      a: "Whole Aircraft Towing",
      b: "Single Point Towing",
      c: "Dockside Lifting"
    },
    correct: "a"
  },
  {
    id: 29,
    category: "ATA 00-12",
    question: "When is it suggested to release parking brakes to prevent freezing?",
    options: {
      a: "During short term parking",
      b: "In cold weather with snow",
      c: "During towing"
    },
    correct: "b"
  },
  {
    id: 30,
    category: "ATA 00-12",
    question: "What should be done if the helicopter will be exposed to tornado or winds above 65 knots?",
    options: {
      a: "Move it to a hangar",
      b: "Apply parking brakes",
      c: "Tow it to a safer location"
    },
    correct: "a"
  },
  {
    id: 31,
    category: "ATA 00-12",
    question: "What is the primary method for mooring the S-92A aircraft?",
    options: {
      a: "Tying it down with ropes",
      b: "Attaching it to a crane",
      c: "Securing it to a hangar"
    },
    correct: "a"
  },
  {
    id: 32,
    category: "ATA 00-12",
    question: "Which document provides storage procedures for S-92A engines?",
    options: {
      a: "AMM",
      b: "FCP",
      c: "GE CT7-8 Turboshaft Engine Maintenance Manual"
    },
    correct: "c"
  },
  {
    id: 33,
    category: "ATA 00-12",
    question: "What is the primary purpose of Placards and Markings in the helicopter?",
    options: {
      a: "Decoration",
      b: "Identification and safety",
      c: "Indicating fuel levels"
    },
    correct: "b"
  },
  {
    id: 34,
    category: "ATA 00-12",
    question: "What is the purpose of the Replenishing Table in the AMM Servicing Overview?",
    options: {
      a: "List of effective chapters",
      b: "Fuel system adjustments",
      c: "System and component replenishment details"
    },
    correct: "c"
  },
  {
    id: 35,
    category: "ATA 00-12",
    question: "What caution is given regarding the removal of ice from antennas, lights, and covers?",
    options: {
      a: "Use high-pressure tools",
      b: "Use hand tools cautiously",
      c: "Do not remove ice from these components"
    },
    correct: "c"
  },
  {
    id: 36,
    category: "ATA 00-12",
    question: "What type of de-icing/anti-icing fluid is cautioned against spraying on the main rotor hub?",
    options: {
      a: "SAE AMS 1424",
      b: "SAE AMS 1428, Type II",
      c: "SAE AMS 1428, Type IV"
    },
    correct: "c"
  },
  {
    id: 37,
    category: "ATA 00-12",
    question: "What is the recommended preventive measure when temperatures below 0\u00b0C are expected?",
    options: {
      a: "Scrape ice from the windshield",
      b: "Apply de-icing/anti-icing fluid",
      c: "Use a soft bristle brush"
    },
    correct: "b"
  },
  {
    id: 38,
    category: "ATA 00-12",
    question: "Where are Engine Fuel Drain Collector Tanks located on the aircraft?",
    options: {
      a: "Upper side of the fuselage",
      b: "Wingtips",
      c: "Lower side of the fuselage (STA 366)"
    },
    correct: "c"
  },
  {
    id: 39,
    category: "ATA 00-12",
    question: "What is the draining procedure for the Engine Fuel Drain Collector Tank?",
    options: {
      a: "Open fuel drain valve first",
      b: "Secure cap on valve first",
      c: "Remove cap from fuel drain valve first"
    },
    correct: "c"
  },
  {
    id: 40,
    category: "ATA 00-12",
    question: "During post-flight fuel draining, what should be done if no fuel is collected on two consecutive attempts?",
    options: {
      a: "Continue draining attempts",
      b: "Inspect and clean the drain valve",
      c: "Ignore the issue"
    },
    correct: "b"
  },
  {
    id: 41,
    category: "ATA 00-12",
    question: "Where is the information about external electrical power application found?",
    options: {
      a: "ATA 24 Electrical Power",
      b: "ATA 12 Fuselage / Blades",
      c: "ATA 00 General"
    },
    correct: "a"
  },
  {
    id: 42,
    category: "ATA 00-12",
    question: "What is the recommended method for removing ice from the fuselage?",
    options: {
      a: "Use hand tools cautiously",
      b: "Scrape and pry ice",
      c: "Assist with a soft bristle brush"
    },
    correct: "c"
  },
  {
    id: 43,
    category: "ATA 00-12",
    question: "What is the caution regarding the use of de-icing/anti-icing fluid on the swashplate?",
    options: {
      a: "Direct spray at high pressure",
      b: "Avoid spraying in or around swashplate",
      c: "Spray liberally on swashplate"
    },
    correct: "b"
  },
  {
    id: 44,
    category: "ATA 00-12",
    question: "Where can references for draining procedures be found in the aircraft documentation?",
    options: {
      a: "ATA 00 General",
      b: "ATA 24 Electrical Power",
      c: "ATA 12 Fuselage / Blades"
    },
    correct: "c"
  },
  {
    id: 45,
    category: "ATA 00-12",
    question: "Where can Aircraft manuals be accessed in PDF format?",
    options: {
      a: "Sikorsky 360 Website",
      b: "PDF CDs",
      c: "IETM DVDs"
    },
    correct: "b"
  },
  {
    id: 46,
    category: "ATA 00-12",
    question: "What is the URL for Sikorsky 360 website?",
    options: {
      a: "https://www.sikorsky360.com",
      b: "https://www.sikorsky.com",
      c: "https://360.sikorsky.com"
    },
    correct: "a"
  },
  {
    id: 47,
    category: "ATA 00-12",
    question: "How can Sikorsky 360 be accessed? ",
    options: {
      a: "Only as a mobile application",
      b: "Only as a desktop application",
      c: "Both as a mobile and desktop application"
    },
    correct: "c"
  },
  {
    id: 48,
    category: "ATA 00-12",
    question: "Which of the following is not a type of E-Notification according to the Sikorsky 360 website?",
    options: {
      a: "AOL - All Operator Letters",
      b: "ATL Modifications",
      c: "SRN - Software Release Note"
    },
    correct: "b"
  },
  {
    id: 49,
    category: "ATA 00-12",
    question: "What does IETM stand for?",
    options: {
      a: "In-Flight Entertainment System",
      b: "Integrated Electronic Technical Manual",
      c: "Interactive Electrical Test Module"
    },
    correct: "b"
  },
  {
    id: 50,
    category: "ATA 00-12",
    question: "What type of manuals are available on CDs in PDF format but are not updated daily?",
    options: {
      a: "RFM Manuals",
      b: "IETM Manuals",
      c: "Maintenance Manuals"
    },
    correct: "c"
  },
  {
    id: 51,
    category: "ATA 00-12",
    question: "What is the purpose of Specific ICAs?",
    options: {
      a: "Routine inspections",
      b: "Customer specific modifications",
      c: "Aircraft configurations"
    },
    correct: "b"
  },
  {
    id: 52,
    category: "ATA 00-12",
    question: "What is included in RFM Supplements?",
    options: {
      a: "Routine maintenance procedures",
      b: "Modifications and software upgrades",
      c: "Aircraft configurations"
    },
    correct: "b"
  },
  {
    id: 53,
    category: "ATA 00-12",
    question: "What does AMP stand for?",
    options: {
      a: "Aircraft Maintenance Programme",
      b: "Aircraft Manufacturing Process",
      c: "Aircraft Management Protocol"
    },
    correct: "a"
  },
  {
    id: 54,
    category: "ATA 00-12",
    question: "According to ATA Specification No. 2200, how is subject matter arranged?",
    options: {
      a: "By alphabetical order",
      b: "By five levels of division",
      c: "By page numbering system"
    },
    correct: "b"
  },
  {
    id: 55,
    category: "ATA 00-12",
    question: "What does CAGE stand for in the context of Sikorsky Part Numbers?",
    options: {
      a: "Chapter and Group Equipment",
      b: "Commercial and Government Entity",
      c: "Configuration and Group Equipment"
    },
    correct: "b"
  },
  {
    id: 56,
    category: "ATA 00-12",
    question: "What is the purpose of a Temporary Revision (T-Rev)?",
    options: {
      a: "To replace permanent revisions",
      b: "To provide a rapid means of amending manuals",
      c: "To update the page numbering system"
    },
    correct: "b"
  },
  {
    id: 57,
    category: "ATA 00-12",
    question: "Where can operators find Active Temporary Revisions?",
    options: {
      a: "In the maintenance manual appendix",
      b: "On the Sikorsky 360 website",
      c: "In the Numeric Index"
    },
    correct: "b"
  },
  {
    id: 58,
    category: "ATA 00-12",
    question: "What does SM&R Code stand for?",
    options: {
      a: "Standard Maintenance and Repair Code",
      b: "Source Maintenance & Recoverability Code",
      c: "Sikorsky Maintenance & Reliability Code"
    },
    correct: "b"
  },
  {
    id: 59,
    category: "ATA 00-12",
    question: "What is the purpose of Hazardous Material Warning Icons?",
    options: {
      a: "To indicate critical parts",
      b: "To provide additional information",
      c: "To warn personnel of hazards"
    },
    correct: "c"
  },
  {
    id: 60,
    category: "ATA 00-12",
    question: "What is the primary method for submitting Requests for Revisions using Sikorsky Publications SoundOff?",
    options: {
      a: "Faxing",
      b: "Web Form",
      c: "MS Word Document"
    },
    correct: "b"
  },
  {
    id: 61,
    category: "ATA 00-12",
    question: "Where can SoundOff reports be e-mailed?",
    options: {
      a: "soundoff@sikorsky.com",
      b: "support@sikorsky.com",
      c: "feedback@sikorsky.com"
    },
    correct: "a"
  },
  {
    id: 62,
    category: "ATA 00-12",
    question: "What information does the List of Active Temporary Revisions provide?",
    options: {
      a: "Temporary revision numbers",
      b: "Temporary revision status",
      c: "List of non-active revisions"
    },
    correct: "b"
  },
  {
    id: 63,
    category: "ATA 00-12",
    question: "What is the purpose of the Highlights section in the Manual Front Matter?",
    options: {
      a: "Introduction to the manual",
      b: "Overview of significant changes",
      c: "Warnings related to maintenance tasks"
    },
    correct: "b"
  },
  {
    id: 64,
    category: "ATA 00-12",
    question: "Which chapter of the AMM provides maintenance ground and flight check procedures for the S-92A?",
    options: {
      a: "Chapter 4",
      b: "Chapter 5",
      c: "Chapter 10"
    },
    correct: "c"
  },
  {
    id: 65,
    category: "ATA 00-12",
    question: "What does ASB stand for in Sikorsky's publications?",
    options: {
      a: "Alert Service Bulletin",
      b: "Aircraft Service Bulletin",
      c: "Advanced Service Bulletin"
    },
    correct: "a"
  },
  {
    id: 66,
    category: "ATA 00-12",
    question: "Which document contains ATA Chapters 4 & 5 for maintenance limitations and inspection requirements?",
    options: {
      a: "AWL",
      b: "FCP",
      c: "AMM"
    },
    correct: "a"
  },
  {
    id: 67,
    category: "ATA 00-12",
    question: "What is the primary purpose of the List of Effective Pages (LOEP) in each chapter?",
    options: {
      a: "Record temporary revisions",
      b: "Identify revision dates",
      c: "List individual pages and their revisions"
    },
    correct: "c"
  },
  {
    id: 68,
    category: "ATA 00-12",
    question: "How many maintenance zones is the S-92A aircraft subdivided into?",
    options: {
      a: "3",
      b: "5",
      c: "7"
    },
    correct: "b"
  },
  {
    id: 69,
    category: "ATA 00-12",
    question: "What is the primary purpose of fuselage jack pads on the S-92A?",
    options: {
      a: "To measure aircraft weight",
      b: "To raise the entire aircraft",
      c: "To secure the landing gear"
    },
    correct: "b"
  },
  {
    id: 70,
    category: "ATA 00-12",
    question: "How many types of jacking methods are used for the S-92A?",
    options: {
      a: "1",
      b: "2",
      c: "3"
    },
    correct: "b"
  },
  {
    id: 71,
    category: "ATA 00-12",
    question: "What caution is mentioned regarding jacking the helicopter outdoors?",
    options: {
      a: "Avoid jacking in windy conditions",
      b: "Use extreme caution while entering and leaving",
      c: "Jack only on level surfaces"
    },
    correct: "a"
  },
  {
    id: 72,
    category: "ATA 00-12",
    question: "What procedure is used to tow the S-92A aircraft?",
    options: {
      a: "Whole Aircraft Towing",
      b: "Single Point Towing",
      c: "Dockside Lifting"
    },
    correct: "a"
  },
  {
    id: 73,
    category: "ATA 00-12",
    question: "When is it suggested to release parking brakes to prevent freezing?",
    options: {
      a: "During short term parking",
      b: "In cold weather with snow",
      c: "During towing"
    },
    correct: "b"
  },
  {
    id: 74,
    category: "ATA 00-12",
    question: "What should be done if the helicopter will be exposed to tornado or winds above 65 knots?",
    options: {
      a: "Move it to a hangar",
      b: "Apply parking brakes",
      c: "Tow it to a safer location"
    },
    correct: "a"
  },
  {
    id: 75,
    category: "ATA 00-12",
    question: "What is the primary method for mooring the S-92A aircraft?",
    options: {
      a: "Tying it down with ropes",
      b: "Attaching it to a crane",
      c: "Securing it to a hangar"
    },
    correct: "a"
  },
  {
    id: 76,
    category: "ATA 00-12",
    question: "Which document provides storage procedures for S-92A engines?",
    options: {
      a: "AMM",
      b: "FCP",
      c: "GE CT7-8 Turboshaft Engine Maintenance Manual"
    },
    correct: "c"
  },
  {
    id: 77,
    category: "ATA 00-12",
    question: "What is the primary purpose of Placards and Markings in the helicopter?",
    options: {
      a: "Decoration",
      b: "Identification and safety",
      c: "Indicating fuel levels"
    },
    correct: "b"
  },
  {
    id: 78,
    category: "ATA 00-12",
    question: "What is the purpose of the Replenishing Table in the AMM Servicing Overview?",
    options: {
      a: "List of effective chapters",
      b: "Fuel system adjustments",
      c: "System and component replenishment details"
    },
    correct: "c"
  },
  {
    id: 79,
    category: "ATA 00-12",
    question: "What caution is given regarding the removal of ice from antennas, lights, and covers?",
    options: {
      a: "Use high-pressure tools",
      b: "Use hand tools cautiously",
      c: "Do not remove ice from these components"
    },
    correct: "c"
  },
  {
    id: 80,
    category: "ATA 00-12",
    question: "What type of de-icing/anti-icing fluid is cautioned against spraying on the main rotor hub?",
    options: {
      a: "SAE AMS 1424",
      b: "SAE AMS 1428, Type II",
      c: "SAE AMS 1428, Type IV"
    },
    correct: "c"
  },
  {
    id: 81,
    category: "ATA 00-12",
    question: "What is the recommended preventive measure when temperatures below 0\u00b0C are expected?",
    options: {
      a: "Scrape ice from the windshield",
      b: "Apply de-icing/anti-icing fluid",
      c: "Use a soft bristle brush"
    },
    correct: "b"
  },
  {
    id: 82,
    category: "ATA 00-12",
    question: "Where are Engine Fuel Drain Collector Tanks located on the aircraft?",
    options: {
      a: "Upper side of the fuselage",
      b: "Wingtips",
      c: "Lower side of the fuselage (STA 366)"
    },
    correct: "c"
  },
  {
    id: 83,
    category: "ATA 00-12",
    question: "What is the draining procedure for the Engine Fuel Drain Collector Tank?",
    options: {
      a: "Open fuel drain valve first",
      b: "Secure cap on valve first",
      c: "Remove cap from fuel drain valve first"
    },
    correct: "c"
  },
  {
    id: 84,
    category: "ATA 00-12",
    question: "During post-flight fuel draining, what should be done if no fuel is collected on two consecutive attempts?",
    options: {
      a: "Continue draining attempts",
      b: "Inspect and clean the drain valve",
      c: "Ignore the issue"
    },
    correct: "b"
  },
  {
    id: 85,
    category: "ATA 00-12",
    question: "Where is the information about external electrical power application found?",
    options: {
      a: "ATA 24 Electrical Power",
      b: "ATA 12 Fuselage / Blades",
      c: "ATA 00 General"
    },
    correct: "a"
  },
  {
    id: 86,
    category: "ATA 00-12",
    question: "What is the recommended method for removing ice from the fuselage?",
    options: {
      a: "Use hand tools cautiously",
      b: "Scrape and pry ice",
      c: "Assist with a soft bristle brush"
    },
    correct: "c"
  },
  {
    id: 87,
    category: "ATA 00-12",
    question: "What is the caution regarding the use of de-icing/anti-icing fluid on the swashplate?",
    options: {
      a: "Direct spray at high pressure",
      b: "Avoid spraying in or around swashplate",
      c: "Spray liberally on swashplate"
    },
    correct: "b"
  },
  {
    id: 88,
    category: "ATA 00-12",
    question: "Where can references for draining procedures be found in the aircraft documentation?",
    options: {
      a: "ATA 00 General",
      b: "ATA 24 Electrical Power",
      c: "ATA 12 Fuselage / Blades"
    },
    correct: "c"
  },


/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */





  {
    id: 89,
    category: "ATA 18",
    question: "Which type of balancing ensures that components are balanced around their center of gravity when not moving?",
    options: {
      a: "Dynamic Balancing",
      b: "Static Balancing",
      c: "Passive Vibration Control"
    },
    correct: "b"
  },
  {
    id: 90,
    category: "ATA 18",
    question: "What is the role of the Active Vibration Control (AVC) system in the S-92 helicopter?",
    options: {
      a: "Reducing rotor track imbalance",
      b: "Mitigating airframe vibrations",
      c: "Adjusting blade track and balance"
    },
    correct: "b"
  },
  {
    id: 91,
    category: "ATA 18",
    question: "What is the most likely cause of rotor vibration in the S-92 related to the blades?",
    options: {
      a: "Static imbalance",
      b: "Dynamic imbalance",
      c: "Faulty AVC components"
    },
    correct: "b"
  },
  {
    id: 92,
    category: "ATA 18",
    question: "How is dynamic balancing of the main rotor blades in the S-92 achieved?",
    options: {
      a: "Adjusting pitch change rods",
      b: "Using balance weights at the hub",
      c: "Applying vibration sensors"
    },
    correct: "b"
  },
  {
    id: 93,
    category: "ATA 18",
    question: "What is the purpose of the blade tracker in the HUMS system?",
    options: {
      a: "Monitoring tail rotor balance",
      b: "Providing blade track and lead/lag data",
      c: "Adjusting main rotor pitch"
    },
    correct: "b"
  },
  {
    id: 94,
    category: "ATA 18",
    question: "How is dynamic balancing of the tail rotor achieved in the S-92?",
    options: {
      a: "Adjusting weights in the leading edge",
      b: "Using balance weights at the hub",
      c: "Applying reflective tape on blades"
    },
    correct: "b"
  },
  {
    id: 95,
    category: "ATA 18",
    question: "What is the purpose of the HUMS Main Processing Unit (MPU)?",
    options: {
      a: "Balancing main rotor blades",
      b: "Collecting and analyzing sensor data",
      c: "Controlling airframe vibrations"
    },
    correct: "b"
  },
  {
    id: 96,
    category: "ATA 18",
    question: "Which material is used for screws for balancing the High-Speed Shaft flange?",
    options: {
      a: "Steel, Aluminum, Titanium",
      b: "Steel, Brass, Titanium",
      c: "Steel, Aluminum, Nickle"
    },
    correct: "a"
  },
  {
    id: 97,
    category: "ATA 18",
    question: "When is the active mode of the Blade Tracker used?",
    options: {
      a: "During daylight",
      b: "In low light levels or at night",
      c: "During static balancing"
    },
    correct: "b"
  },
  {
    id: 98,
    category: "ATA 18",
    question: "Where is the AVCC located in the aircraft?",
    options: {
      a: "Nose wheel well",
      b: "RH avionics cabinet",
      c: "Forward cabin floor"
    },
    correct: "b"
  },
  {
    id: 99,
    category: "ATA 18",
    question: "How is EU #1 powered?",
    options: {
      a: "DC power supply",
      b: "AC power from 1 AC bus",
      c: "AC power from 2 AC bus"
    },
    correct: "c"
  },
  {
    id: 100,
    category: "ATA 18",
    question: "How many airframe accelerometers are used in the AVCC system?",
    options: {
      a: "3",
      b: "6",
      c: "10"
    },
    correct: "c"
  },
  {
    id: 101,
    category: "ATA 18",
    question: "What caution will be displayed if one or more Force Generators or four accelerometers fail?",
    options: {
      a: "AVC DEGRADED",
      b: "AVC FAIL",
      c: "IBIT FAIL"
    },
    correct: "a"
  },
  {
    id: 102,
    category: "ATA 18",
    question: "According to the MEL, is the AVC system essential for flight?",
    options: {
      a: "Yes",
      b: "No",
      c: "Only in certain conditions"
    },
    correct: "b"
  },
  {
    id: 103,
    category: "ATA 18",
    question: "Where should personnel be during the AVCC IBIT test?",
    options: {
      a: "In the cockpit",
      b: "Passenger compartment",
      c: "Top Deck"
    },
    correct: "a"
  },
  {
    id: 104,
    category: "ATA 18",
    question: "How is the AVC IBIT test initiated?",
    options: {
      a: "By turning off the VIB CTRL switch",
      b: "By pressing the IBIT soft-key on the MFD screen",
      c: "By disconnecting the force generators"
    },
    correct: "b"
  },
  {
    id: 105,
    category: "ATA 18",
    question: "What caution is displayed if both AC generators fail or if the NR signal is lost?",
    options: {
      a: "AVC DEGRADED",
      b: "AVC FAIL",
      c: "IBIT FAIL"
    },
    correct: "b"
  },
  {
    id: 106,
    category: "ATA 18",
    question: "What happens if the IBIT test fails?",
    options: {
      a: "The AVC system resets automatically",
      b: "MAINTENANCE status will be displayed",
      c: "The airframe vibration level becomes noticeably smoother"
    },
    correct: "b"
  },
  {
    id: 107,
    category: "ATA 18",
    question: "When will AVC FAIL Caution display be suppressed ",
    options: {
      a: "less than 95% NR and WOW",
      b: "In Flight",
      c: "During power up"
    },
    correct: "a"
  },



/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */

  {
    id: 108,
    category: "ATA 20",
    question: "What does the Standard Practices chapter cover?",
    options: {
      a: "Scheduled inspection job set-up",
      b: "Lockwiring - Maintenance Practices",
      c: "Electrical Connectors - Maintenance Practices"
    },
    correct: "a"
  },
  {
    id: 109,
    category: "ATA 20",
    question: "Which category of inspection involves the actual operation of equipment to verify proper operating condition?",
    options: {
      a: "Visual",
      b: "Dimensional",
      c: "Operational"
    },
    correct: "c"
  },
  {
    id: 110,
    category: "ATA 20",
    question: "What is included in the Scheduled Inspection Job Set-Up section?",
    options: {
      a: "Description of Torque Striping",
      b: "Checklist of preparation tasks for the 1500-hour inspection",
      c: "Lockwiring - Description"
    },
    correct: "b"
  },
  {
    id: 111,
    category: "ATA 20",
    question: "How is Safe-T-CableTM different from standard lockwire?",
    options: {
      a: "More expensive",
      b: "Less flexible",
      c: "More flexible and lighter weight"
    },
    correct: "c"
  },
  {
    id: 112,
    category: "ATA 20",
    question: "What is described in the Self-Retaining Bolt Installation section?",
    options: {
      a: "Use of Safety Cable",
      b: "Torque Striping Hardware",
      c: "Installation and torque tightening procedures of self-retaining bolts"
    },
    correct: "c"
  },
  {
    id: 113,
    category: "ATA 20",
    question: "When is torque striping applied to fasteners?",
    options: {
      a: "When specified",
      b: "If the part is caulked, sealed, or painted",
      c: "Both a and b"
    },
    correct: "c"
  },
  {
    id: 114,
    category: "ATA 20",
    question: "What does the Leakage Inspection Criteria section contain information about?",
    options: {
      a: "Lockwiring procedures",
      b: "Leakage accept/reject criteria for oil-wetted/hydraulic components",
      c: "Torque wrenches/other types"
    },
    correct: "b"
  },
  {
    id: 115,
    category: "ATA 20",
    question: "How is the repair of flight control hydraulic tubes achieved?",
    options: {
      a: "Using standard lockwire",
      b: "Axial swaging with PermaLite connections",
      c: "Using Torque Striping Hardware"
    },
    correct: "b"
  },
  {
    id: 116,
    category: "ATA 20",
    question: "What is the purpose of the Deutsch Axial swage Tool (DAT) toolkit?",
    options: {
      a: "To apply Torque Stripes",
      b: "To repair flight control hydraulic tubes",
      c: "To install Safety Cable"
    },
    correct: "b"
  },
  {
    id: 117,
    category: "ATA 20",
    question: "Which component is a product of the Permaswage Company?",
    options: {
      a: "PermaLite connection",
      b: "Safety Cable ferrule cartridges",
      c: "Turnbuckles"
    },
    correct: "a"
  },
  {
    id: 118,
    category: "ATA 20",
    question: "What is the purpose of Safe-T-CableTM kits?",
    options: {
      a: "To facilitate easy access to maintenance",
      b: "To eliminate the need for inspections",
      c: "To install Safety Cable where secondary hardware retention is required"
    },
    correct: "c"
  },
  {
    id: 119,
    category: "ATA 20",
    question: "In the Torque Striping Hardware section, when is the head striped if the fastener end is not designated?",
    options: {
      a: "Never",
      b: "Regardless of safety requirements",
      c: "When specified"
    },
    correct: "b"
  },
  {
    id: 120,
    category: "ATA 20",
    question: "What does the Standard Lockwiring section describe?",
    options: {
      a: "Use of standard industry practices",
      b: "Use of standard single and double-twist methods of wire locking",
      c: "Application of Polyurethane Sealant"
    },
    correct: "b"
  },
  {
    id: 121,
    category: "ATA 20",
    question: "What is the purpose of the Safety Cable (Safe-T-CableTM) in some procedures?",
    options: {
      a: "To replace standard lockwire",
      b: "To add weight to components",
      c: "To facilitate easy access to maintenance"
    },
    correct: "a"
  },
  {
    id: 122,
    category: "ATA 20",
    question: "What is included in the Inspection Practices section?",
    options: {
      a: "Types of inspections required for maintenance and repair",
      b: "Description of Teflon Coating",
      c: "Repair of Flight Control Hydraulic Lines"
    },
    correct: "a"
  },
  {
    id: 123,
    category: "ATA 20",
    question: "What does the Standard Practices chapter cover?",
    options: {
      a: "Scheduled inspection job set-up",
      b: "Lockwiring - Maintenance Practices",
      c: "Electrical Connectors - Maintenance Practices"
    },
    correct: "a"
  },
  {
    id: 124,
    category: "ATA 20",
    question: "Which category of inspection involves the actual operation of equipment to verify proper operating condition?",
    options: {
      a: "Visual",
      b: "Dimensional",
      c: "Operational"
    },
    correct: "c"
  },
  {
    id: 125,
    category: "ATA 20",
    question: "What is included in the Scheduled Inspection Job Set-Up section?",
    options: {
      a: "Description of Torque Striping",
      b: "Checklist of preparation tasks for the 1500-hour inspection",
      c: "Lockwiring - Description"
    },
    correct: "b"
  },
  {
    id: 126,
    category: "ATA 20",
    question: "How is Safe-T-CableTM different from standard lockwire?",
    options: {
      a: "More expensive",
      b: "Less flexible",
      c: "More flexible and lighter weight"
    },
    correct: "c"
  },
  {
    id: 127,
    category: "ATA 20",
    question: "What is described in the Self-Retaining Bolt Installation section?",
    options: {
      a: "Use of Safety Cable",
      b: "Torque Striping Hardware",
      c: "Installation and torque tightening procedures of self-retaining bolts"
    },
    correct: "c"
  },
  {
    id: 128,
    category: "ATA 20",
    question: "When is torque striping applied to fasteners?",
    options: {
      a: "When specified",
      b: "If the part is caulked, sealed, or painted",
      c: "Both a and b"
    },
    correct: "c"
  },
  {
    id: 129,
    category: "ATA 20",
    question: "What does the Leakage Inspection Criteria section contain information about?",
    options: {
      a: "Lockwiring procedures",
      b: "Leakage accept/reject criteria for oil-wetted/hydraulic components",
      c: "Torque wrenches/other types"
    },
    correct: "b"
  },
  {
    id: 130,
    category: "ATA 20",
    question: "How is the repair of flight control hydraulic tubes achieved?",
    options: {
      a: "Using standard lockwire",
      b: "Axial swaging with PermaLite connections",
      c: "Using Torque Striping Hardware"
    },
    correct: "b"
  },
  {
    id: 131,
    category: "ATA 20",
    question: "What is the purpose of the Deutsch Axial swage Tool (DAT) toolkit?",
    options: {
      a: "To apply Torque Stripes",
      b: "To repair flight control hydraulic tubes",
      c: "To install Safety Cable"
    },
    correct: "b"
  },
  {
    id: 132,
    category: "ATA 20",
    question: "Which component is a product of the Permaswage Company?",
    options: {
      a: "PermaLite connection",
      b: "Safety Cable ferrule cartridges",
      c: "Turnbuckles"
    },
    correct: "a"
  },
  {
    id: 133,
    category: "ATA 20",
    question: "What is the purpose of Safe-T-CableTM kits?",
    options: {
      a: "To facilitate easy access to maintenance",
      b: "To eliminate the need for inspections",
      c: "To install Safety Cable where secondary hardware retention is required"
    },
    correct: "c"
  },
  {
    id: 134,
    category: "ATA 20",
    question: "In the Torque Striping Hardware section, when is the head striped if the fastener end is not designated?",
    options: {
      a: "Never",
      b: "Regardless of safety requirements",
      c: "When specified"
    },
    correct: "b"
  },
  {
    id: 135,
    category: "ATA 20",
    question: "What does the Standard Lockwiring section describe?",
    options: {
      a: "Use of standard industry practices",
      b: "Use of standard single and double-twist methods of wire locking",
      c: "Application of Polyurethane Sealant"
    },
    correct: "b"
  },
  {
    id: 136,
    category: "ATA 20",
    question: "What is the purpose of the Safety Cable (Safe-T-CableTM) in some procedures?",
    options: {
      a: "To replace standard lockwire",
      b: "To add weight to components",
      c: "To facilitate easy access to maintenance"
    },
    correct: "a"
  },
  {
    id: 137,
    category: "ATA 20",
    question: "What is included in the Inspection Practices section?",
    options: {
      a: "Types of inspections required for maintenance and repair",
      b: "Description of Teflon Coating",
      c: "Repair of Flight Control Hydraulic Lines"
    },
    correct: "a"
  },






/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */



  {
    id: 138,
    category: "ATA 22",
    question: "Where is the AFCS Control Panel located?",
    options: {
      a: "Bottom of the left Avionics Rack",
      b: "Centre of the lower console",
      c: "Bottom of the right Avionics Rack"
    },
    correct: "b"
  },
  {
    id: 139,
    category: "ATA 22",
    question: "How many Flight Control Computers (FCCs) are there in the S-92 aircraft?",
    options: {
      a: "One",
      b: "Two",
      c: "Three"
    },
    correct: "b"
  },
  {
    id: 140,
    category: "ATA 22",
    question: "What is the maximum control authority of each SAS Actuator?",
    options: {
      a: "2%",
      b: "5%",
      c: "10%"
    },
    correct: "c"
  },
  {
    id: 141,
    category: "ATA 22",
    question: "How many Trim Actuators are there in the S-92 aircraft?",
    options: {
      a: "Two",
      b: "Four",
      c: "Six"
    },
    correct: "b"
  },
  {
    id: 142,
    category: "ATA 22",
    question: "Where are the Rate Gyros located in the S-92 aircraft?",
    options: {
      a: "Under the nose of the aircraft",
      b: "In the cabin roof",
      c: "On the left and right sides of the aircraft"
    },
    correct: "c"
  },
  {
    id: 143,
    category: "ATA 22",
    question: "What signals do the accelerometers provide to the FCC?",
    options: {
      a: "Rate movement signals",
      b: "Acceleration and deceleration signals",
      c: "Gust alleviation signals"
    },
    correct: "b"
  },
  {
    id: 144,
    category: "ATA 22",
    question: "Where are the AHRS units located in the S-92 aircraft?",
    options: {
      a: "In the cabin roof",
      b: "On the left and right walls of the ramp area",
      c: "Under the nose of the aircraft"
    },
    correct: "b"
  },
  {
    id: 145,
    category: "ATA 22",
    question: "What information does the Air Data Computer (ADC) provide to the AFCS?",
    options: {
      a: "Pitch and roll attitude",
      b: "Altitude and airspeed",
      c: "Rate of movement information"
    },
    correct: "b"
  },
  {
    id: 146,
    category: "ATA 22",
    question: "What function does the Radar Altimeter (RADALT) provide?",
    options: {
      a: "RADALT Altitude Hold",
      b: "FADEC control",
      c: "Rate Gyro calibration"
    },
    correct: "a"
  },
  {
    id: 147,
    category: "ATA 22",
    question: "How many Rotary Variable Differential Transformers (RVDTs) are there in the S-92 aircraft?",
    options: {
      a: "Two",
      b: "Four",
      c: "Six"
    },
    correct: "c"
  },
  {
    id: 148,
    category: "ATA 22",
    question: "What is the purpose of the Beep Trim switches?",
    options: {
      a: "Activate the autopilot",
      b: "Release the magnetic clutch",
      c: "Move the trim actuators"
    },
    correct: "c"
  },
  {
    id: 149,
    category: "ATA 22",
    question: "When can the Reversionary Control Panel (RCP) be used for AHRS reversionary?",
    options: {
      a: "Only in single autopilot",
      b: "Only in dual autopilot",
      c: "In both single and dual autopilot"
    },
    correct: "a"
  },
  {
    id: 150,
    category: "ATA 22",
    question: "What does the Remote Instrument Controller control?",
    options: {
      a: "FADEC",
      b: "Trim Actuators",
      c: "Navigation sources"
    },
    correct: "c"
  },
  {
    id: 151,
    category: "ATA 22",
    question: "What does the COURSE 1/2 knob on the Remote Instrument Controller do?",
    options: {
      a: "Controls pitch and roll",
      b: "Selects navigation source for MFDs 1, 2, and 5",
      c: "Sets airspeed points"
    },
    correct: "b"
  },
  {
    id: 152,
    category: "ATA 22",
    question: "What does the Heading knob on the Remote Instrument Controller control?",
    options: {
      a: "Collective movement",
      b: "Yaw input",
      c: "Sets the heading bug to a new heading"
    },
    correct: "c"
  },
  {
    id: 153,
    category: "ATA 22",
    question: "What information is sent from the engine FADECs to the FCCs?",
    options: {
      a: "Airspeed information",
      b: "Torque, Ng, and TGT information",
      c: "Pitch and roll attitude"
    },
    correct: "b"
  },
  {
    id: 154,
    category: "ATA 22",
    question: "What controls are in series with the Boost and SAS actuators in the Flight Controls?",
    options: {
      a: "Trim Actuators",
      b: "Rate Gyros",
      c: "FADEC"
    },
    correct: "a"
  },
  {
    id: 155,
    category: "ATA 22",
    question: "Where are the Display Control Panels (DCPs) used to select a NAV source located?",
    options: {
      a: "Centre of the lower console",
      b: "Under the nose of the aircraft",
      c: "On the Instrument Panel"
    },
    correct: "c"
  },
  {
    id: 156,
    category: "ATA 22",
    question: "What is the purpose of the Trim Release switches?",
    options: {
      a: "Activate the autopilot",
      b: "Release the magnetic clutch",
      c: "Select navigation sources"
    },
    correct: "b"
  },
  {
    id: 157,
    category: "ATA 22",
    question: "What determines if the aircraft movement is an input by the pilot or from external forces?",
    options: {
      a: "Rate Gyros",
      b: "RVDTs",
      c: "Accelerometers"
    },
    correct: "b"
  },
  {
    id: 158,
    category: "ATA 22",
    question: "What does SAS stand for?",
    options: {
      a: "Stability Augmentation System",
      b: "System Attitude Sensor",
      c: "Secondary Actuator System"
    },
    correct: "a"
  },
  {
    id: 159,
    category: "ATA 22",
    question: "How many control channels does each SAS system have?",
    options: {
      a: "One",
      b: "Two",
      c: "Three"
    },
    correct: "b"
  },
  {
    id: 160,
    category: "ATA 22",
    question: "What is the purpose of rate damping in the SAS?",
    options: {
      a: "To return the aircraft to its original attitude",
      b: "To provide rapid response corrections to unwanted movements",
      c: "To engage the autopilot system"
    },
    correct: "b"
  },
  {
    id: 161,
    category: "ATA 22",
    question: "When SAS 1 or SAS 2 is switched off at the Control Panel, what happens to the system functions?",
    options: {
      a: "They continue to operate normally",
      b: "They are temporarily disabled",
      c: "They switch to SSAS automatically"
    },
    correct: "b"
  },
  {
    id: 162,
    category: "ATA 22",
    question: "Which hydraulic system supplies SAS 2 when SAS Hydraulics are ON?",
    options: {
      a: "#1 hydraulic system",
      b: "#2 hydraulic system",
      c: "Both #1 and #2 hydraulic systems"
    },
    correct: "b"
  },
  {
    id: 163,
    category: "ATA 22",
    question: "What happens if the hydraulic pressure drops below 1100 PSI in the SAS actuators?",
    options: {
      a: "The SAS Hyd Cmd On signal is removed, and the actuator is centred and locked",
      b: "The SAS actuator increases control authority",
      c: "The aircraft enters emergency descent mode"
    },
    correct: "a"
  },
  {
    id: 164,
    category: "ATA 22",
    question: "In the SAS Collective Hydraulics Schematics, what is the purpose of the second turn-on valve for the Collective actuators?",
    options: {
      a: "To control SAS actuator authority",
      b: "To provide additional hydraulic pressure",
      c: "To enable the Autopilot system"
    },
    correct: "a"
  },
  {
    id: 165,
    category: "ATA 22",
    question: "When is the SSAS used?",
    options: {
      a: "As a primary system",
      b: "When PSAS fails",
      c: "Only during autopilot engagement"
    },
    correct: "b"
  },
  {
    id: 166,
    category: "ATA 22",
    question: "What caution is displayed if SSAS fails while selected?",
    options: {
      a: "SAS DGRD",
      b: "AFCS DGRD",
      c: "SAS PRESS"
    },
    correct: "b"
  },
  {
    id: 167,
    category: "ATA 22",
    question: "What sensors does SSAS use for aircraft attitude rate information?",
    options: {
      a: "Rate Gyros only",
      b: "Accelerometers only",
      c: "Fibre Optic Gyros inside AHRS"
    },
    correct: "c"
  },
  {
    id: 168,
    category: "ATA 22",
    question: "In SAS Enhancements, what is the maximum control authority available from each SAS actuator?",
    options: {
      a: "2.5%",
      b: "5%",
      c: "10%"
    },
    correct: "b"
  },
  {
    id: 169,
    category: "ATA 22",
    question: "What mode is engaged when all three Trim switches are ON?",
    options: {
      a: "Basic SAS",
      b: "Auto-trim",
      c: "SAS Enhancements"
    },
    correct: "b"
  },
  {
    id: 170,
    category: "ATA 22",
    question: "When is Attitude Hold (ATT) engaged?",
    options: {
      a: "Only during autopilot engagement",
      b: "After takeoff",
      c: "Weight off wheels and with AP switch ON"
    },
    correct: "c"
  },
  {
    id: 171,
    category: "ATA 22",
    question: "In dual Autopilot, what happens if there is a hard-over by one side?",
    options: {
      a: "The aircraft enters emergency descent mode",
      b: "The other side cancels it out resulting in a slow uncommanded movement",
      c: "The autopilot disengages automatically"
    },
    correct: "b"
  },
  {
    id: 172,
    category: "ATA 22",
    question: "In single Autopilot, what inhibits and locks out the Trim Actuator?",
    options: {
      a: "Overspeed in the Trim Actuator",
      b: "Autopilot failure",
      c: "Loss of hydraulic pressure"
    },
    correct: "a"
  },
  {
    id: 173,
    category: "ATA 22",
    question: "How does Attitude Hold bring the aircraft back to its attitude prior to an uncommanded movement?",
    options: {
      a: "By using the Trim Actuators only",
      b: "By adjusting the flight controls in the cockpit",
      c: "By using multiple sensors and RVDTs to slowly bring the aircraft back"
    },
    correct: "c"
  },
  {
    id: 174,
    category: "ATA 22",
    question: "What condition is necessary for ATT to be operational?",
    options: {
      a: "AP must be ON",
      b: "The aircraft must be in cruise mode",
      c: "Weight off wheels"
    },
    correct: "c"
  },
  {
    id: 175,
    category: "ATA 22",
    question: "How many sensors does each FCC normally receive for Pitch, Roll, and Yaw data in ATT Hold?",
    options: {
      a: "Two",
      b: "Three",
      c: "Four"
    },
    correct: "c"
  },
  {
    id: 176,
    category: "ATA 22",
    question: "What is the 3 out of 4 concept in ATT Hold?",
    options: {
      a: "Three Trim Actuators must be operational",
      b: "Three out of four sensors must be available for ATT to engage",
      c: "Three autopilot systems must be selected"
    },
    correct: "b"
  },
  {
    id: 177,
    category: "ATA 22",
    question: "What sensors are used for Longitudinal Stick Stability (LSS) adjustments?",
    options: {
      a: "Rate Gyros only",
      b: "ADCs only",
      c: "Accelerometers and ADCs"
    },
    correct: "c"
  },
  {
    id: 178,
    category: "ATA 22",
    question: "What indicates the reference settings of the coupled and decoupled modes?",
    options: {
      a: "Weight Off Wheels",
      b: "Flight Director Bars",
      c: "Mode Select Panel"
    },
    correct: "b"
  },
  {
    id: 179,
    category: "ATA 22",
    question: "How is coupling to the Flight Director achieved?",
    options: {
      a: "By pressing the ALT key",
      b: "By pressing the COUPLE button",
      c: "By adjusting the VS setting"
    },
    correct: "b"
  },
  {
    id: 180,
    category: "ATA 22",
    question: "Which button on the Mode Select Panel controls the brightness of the display?",
    options: {
      a: "CRUS",
      b: "APP",
      c: "TEST"
    },
    correct: "c"
  },
  {
    id: 181,
    category: "ATA 22",
    question: "What is displayed at the top of the PFD in green when coupling occurs?",
    options: {
      a: "DECOUPLE",
      b: "CPL and FD1 or FD2",
      c: "MSP Failure"
    },
    correct: "b"
  },
  {
    id: 182,
    category: "ATA 22",
    question: "How can the AFCS be decoupled for an individual axis?",
    options: {
      a: "Press STBY key on Mode Selector Panel",
      b: "Press the COUPLE button",
      c: "Press the cyclic STBY button"
    },
    correct: "a"
  },
  {
    id: 183,
    category: "ATA 22",
    question: "What is announced when any axis fails or is intentionally deselected by the pilot?",
    options: {
      a: "DECOUPLE",
      b: "MSP Failure",
      c: "Uncoupled Manual FD"
    },
    correct: "a"
  },
  {
    id: 184,
    category: "ATA 22",
    question: "Which axis does the Collective lateral beeper have no function in all coupled modes?",
    options: {
      a: "Pitch",
      b: "Roll",
      c: "Yaw"
    },
    correct: "b"
  },
  {
    id: 185,
    category: "ATA 22",
    question: "How is Airspeed Hold coupled?",
    options: {
      a: "Press the HDG key",
      b: "Press the IAS key",
      c: "Press the ALT key"
    },
    correct: "b"
  },
  {
    id: 186,
    category: "ATA 22",
    question: "What is displayed digitally above the IAS indicator when Airspeed Hold is coupled?",
    options: {
      a: "Reference Radar height",
      b: "Reference airspeed",
      c: "Reference altitude"
    },
    correct: "b"
  },
  {
    id: 187,
    category: "ATA 22",
    question: "How is Heading Hold coupled?",
    options: {
      a: "Press the HDG key",
      b: "Press the IAS key",
      c: "Press the ALT key"
    },
    correct: "a"
  },
  {
    id: 188,
    category: "ATA 22",
    question: "What action does the Go Around (GA) mode initiate?",
    options: {
      a: "Level the aircraft",
      b: "Pitch down",
      c: "Yaw left"
    },
    correct: "a"
  },
  {
    id: 189,
    category: "ATA 22",
    question: "Which Flight Control Computers can fly the aircraft using the FMS navigation?",
    options: {
      a: "ADCs",
      b: "AHRS",
      c: "FCCs"
    },
    correct: "c"
  },
  {
    id: 190,
    category: "ATA 22",
    question: "What happens when ALTP is armed?",
    options: {
      a: "The aircraft descends rapidly",
      b: "VS is coupled",
      c: "The bug is displayed in yellow"
    },
    correct: "b"
  },
  {
    id: 191,
    category: "ATA 22",
    question: "How can the reference setting on the Pitch axis be changed?",
    options: {
      a: "Rotate the heading control",
      b: "Press the VS soft key",
      c: "Use the cyclic longitudinal beeper"
    },
    correct: "c"
  },
  {
    id: 192,
    category: "ATA 22",
    question: "When is CAP displayed next to ALTP on the Mode Selector Panel?",
    options: {
      a: "When the aircraft is descending",
      b: "Within 300ft of the pre-selected altitude",
      c: "During Go Around (GA) mode"
    },
    correct: "b"
  },
  {
    id: 193,
    category: "ATA 22",
    question: "What does the Go Around (GA) mode set the Vertical Speed (VS) to on the Collective axis?",
    options: {
      a: "500 ft/min climb",
      b: "750 ft/min climb",
      c: "Maintains the current VS"
    },
    correct: "b"
  },
  {
    id: 194,
    category: "ATA 22",
    question: "How is RALT Hold coupled?",
    options: {
      a: "Press the RALT soft key",
      b: "Press the ALT key",
      c: "Press the IAS key"
    },
    correct: "a"
  },
  {
    id: 195,
    category: "ATA 22",
    question: "Which navigation source is selected from the Display Control Panel (DCP)?",
    options: {
      a: "FMS navigation",
      b: "VOR Approach",
      c: "Deceleration (DCL)"
    },
    correct: "a"
  },
  {
    id: 196,
    category: "ATA 22",
    question: "What is the function of the collective lateral beeper in all coupled modes?",
    options: {
      a: "Yaw control",
      b: "Roll control",
      c: "Pitch control"
    },
    correct: "c"
  },
  {
    id: 197,
    category: "ATA 22",
    question: "When does the CAP indication disappear during ALTP mode?",
    options: {
      a: "When the aircraft is climbing",
      b: "At the pre-selected altitude",
      c: "During the Go Around (GA) mode"
    },
    correct: "b"
  },
  {
    id: 198,
    category: "ATA 22",
    question: "Which source of navigation must be active to couple FMS Navigation Heading Hold?",
    options: {
      a: "VOR",
      b: "ILS",
      c: "FMS"
    },
    correct: "c"
  },
  {
    id: 199,
    category: "ATA 22",
    question: "What does the white arrow on the PFD indicate during FMS Navigation Heading Hold?",
    options: {
      a: "Altitude",
      b: "Demand direction",
      c: "Glideslope"
    },
    correct: "b"
  },
  {
    id: 200,
    category: "ATA 22",
    question: "How is the Glideslope captured during ILS Navigation?",
    options: {
      a: "Pressing G/S on Mode Select Panel",
      b: "Pressing LOC on Mode Select Panel",
      c: "Pressing DCL on Mode Select Panel"
    },
    correct: "a"
  },
  {
    id: 201,
    category: "ATA 22",
    question: "What happens when the Localiser captures signals during ILS Navigation?",
    options: {
      a: "Displays ALT on Mode Select Panel",
      b: "Displays CAP on Mode Select Panel",
      c: "Displays HDG on Mode Select Panel"
    },
    correct: "b"
  },
  {
    id: 202,
    category: "ATA 22",
    question: "How is the PFLT BIT initiated?",
    options: {
      a: "Pressing TEST on either MSP",
      b: "Pressing APP on Mode Selector Panel",
      c: "Pressing DCL on Mode Select Panel"
    },
    correct: "a"
  },
  {
    id: 203,
    category: "ATA 22",
    question: "What is the purpose of the MBIT (Maintenance Built-In Test)?",
    options: {
      a: "Pilot-initiated test",
      b: "Automatic system reconfiguration",
      c: "Pre-flight system check"
    },
    correct: "b"
  },
  {
    id: 204,
    category: "ATA 22",
    question: "How is the Accelerometer null function accessed?",
    options: {
      a: "Pressing TEST on the MSP",
      b: "Pressing ALT on Mode Selector Panel",
      c: "Pressing APP on Mode Select Panel"
    },
    correct: "a"
  },
  {
    id: 205,
    category: "ATA 22",
    question: "What does PSAS1 FAULT indicate?",
    options: {
      a: "SAS actuator position disagreement",
      b: "Hydraulic pressure below 1100 psi",
      c: "Accelerometer failure"
    },
    correct: "a"
  },
  {
    id: 206,
    category: "ATA 22",
    question: "When does AFCS DGDR caution appear?",
    options: {
      a: "During Glideslope capture",
      b: "During PFLT BIT",
      c: "When AFCS is degraded with faults"
    },
    correct: "c"
  },
  {
    id: 207,
    category: "ATA 22",
    question: "What is the procedure for engine failure when flying coupled to the collective axis (3-cue)?",
    options: {
      a: "Automatic decoupling of the Collective",
      b: "Resetting reference IAS to minimum power speed",
      c: "Manually pulling more power"
    },
    correct: "c"
  },
  {
    id: 208,
    category: "ATA 22",
    question: "What occurs if both engines fail when flying coupled to the collective axis (3-cue)?",
    options: {
      a: "Automatic de-coupling of all axes",
      b: "Automatic resetting of reference IAS",
      c: "Automatic decoupling of the Collective axis"
    },
    correct: "c"
  },
  {
    id: 209,
    category: "ATA 22",
    question: "How is the Twin Engine Failure handled?",
    options: {
      a: "Maintaining all axes coupled",
      b: "Manually controlling the Collective axis",
      c: "Resetting reference IAS to Vy"
    },
    correct: "b"
  },
  {
    id: 210,
    category: "ATA 22",
    question: "What is the purpose of the ACCL NULL function?",
    options: {
      a: "Testing rate sensors",
      b: "Resetting accelerometer null bias",
      c: "Resetting reference IAS"
    },
    correct: "b"
  },
  {
    id: 211,
    category: "ATA 22",
    question: "How is the MAIN BIT sequence initiated?",
    options: {
      a: "Pressing TEST on either MSP",
      b: "Pressing MAIN BIT on Mode Select Panel",
      c: "Pressing ALT on Mode Selector Panel"
    },
    correct: "b"
  },
  {
    id: 212,
    category: "ATA 22",
    question: "What does SAS 1 PRES or SAS 2 PRES indicate?",
    options: {
      a: "Accelerometer failure",
      b: "Hydraulic pressure below 1100 psi",
      c: "PSAS module fail"
    },
    correct: "b"
  },
  {
    id: 213,
    category: "ATA 22",
    question: "When does FD DGRD caution appear?",
    options: {
      a: "During Glideslope capture",
      b: "During PFLT BIT",
      c: "When MSP fails"
    },
    correct: "c"
  },
  {
    id: 214,
    category: "ATA 22",
    question: "What is the purpose of the AP PWR RESET?",
    options: {
      a: "Resets the FCC circuitry",
      b: "Removes power from the PSAS",
      c: "Decouples the Collective axis"
    },
    correct: "a"
  },
  {
    id: 215,
    category: "ATA 22",
    question: "When is the Control Panel Reset used?",
    options: {
      a: "During engine failure",
      b: "To reset faults in FCC",
      c: "After Twin Engine Failure"
    },
    correct: "b"
  },
  {
    id: 216,
    category: "ATA 22",
    question: "What is the outcome of Trim Overspeed Test?",
    options: {
      a: "Trim actuator failure",
      b: "Acceleration of the aircraft",
      c: "Trim Actuators drive 100% control authority"
    },
    correct: "c"
  },
  {
    id: 217,
    category: "ATA 22",
    question: "How is the Level Off achieved during ILS Navigation?",
    options: {
      a: "Pressing G/S on Mode Select Panel",
      b: "Pressing LOC on Mode Select Panel",
      c: "Automatically at 50 ft and 60 KIAS"
    },
    correct: "c"
  },



/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */



  {
    id: 218,
    category: "ATA 25",
    question: "What type of equipment and furnishings are included in the flight compartment?",
    options: {
      a: "Passenger seats",
      b: "Lighted chart holders",
      c: "Wire strike protection"
    },
    correct: "b"
  },
  {
    id: 219,
    category: "ATA 25",
    question: "Which component is NOT part of the crew seat assembly?",
    options: {
      a: "Armrests and headrest",
      b: "Adjustable headrest",
      c: "Lumbar support adjustment"
    },
    correct: "b"
  },
  {
    id: 220,
    category: "ATA 25",
    question: "How is the crew seat mounted in the aircraft?",
    options: {
      a: "Screws",
      b: "Claws on floor-mounted rails",
      c: "Velcro straps"
    },
    correct: "b"
  },
  {
    id: 221,
    category: "ATA 25",
    question: "What is the purpose of the impact attenuation system in the crew seat?",
    options: {
      a: "Increase seat height",
      b: "Reduce energy during impact",
      c: "Enhance seat comfort"
    },
    correct: "b"
  },
  {
    id: 222,
    category: "ATA 25",
    question: "Where are the lighted chart holders (approach plate holders) located?",
    options: {
      a: "Cockpit sidewalls",
      b: "Instrument panel",
      c: "Cabin roof"
    },
    correct: "b"
  },
  {
    id: 223,
    category: "ATA 25",
    question: "What is the purpose of the night curtain?",
    options: {
      a: "Increase privacy",
      b: "Prevent light distraction to pilots",
      c: "Serve as a seat cover"
    },
    correct: "b"
  },
  {
    id: 224,
    category: "ATA 25",
    question: "Which component is part of the S92 crash attenuating passenger seat?",
    options: {
      a: "Personal Service Units (PSU)",
      b: "First Aid Kit",
      c: "Armrest assembly"
    },
    correct: "c"
  },
  {
    id: 225,
    category: "ATA 25",
    question: "How many different sets of floor mats are there based on floor type?",
    options: {
      a: "One",
      b: "Two",
      c: "Three"
    },
    correct: "b"
  },
  {
    id: 226,
    category: "ATA 25",
    question: "Where are the RFD heli-rafts located on the S-92 aircraft?",
    options: {
      a: "Under the seats",
      b: "In the forward section of the sponsons",
      c: "On the cabin roof"
    },
    correct: "b"
  },
  {
    id: 227,
    category: "ATA 25",
    question: "What is the purpose of the red dot on the life raft electrical connection plug?",
    options: {
      a: "Provide visual conformation of correct plug fitting",
      b: "Any tamper device",
      c: "Provide visual conformation of system arming "
    },
    correct: "a"
  },
  {
    id: 228,
    category: "ATA 25",
    question: "How is the life-raft connected to the aircraft?",
    options: {
      a: "By a blue 1.5 m short line",
      b: "Both",
      c: "By a red 12 m long line"
    },
    correct: "b"
  },
  {
    id: 229,
    category: "ATA 25",
    question: "What is the weight of each life raft?",
    options: {
      a: "60 lbs",
      b: "90 lbs",
      c: "120 lbs"
    },
    correct: "b"
  },
  {
    id: 230,
    category: "ATA 25",
    question: "Where is the cabin first aid kit located?",
    options: {
      a: "Behind the rear bulkhead",
      b: "At the front left of the cabin",
      c: "Under the pilot's seat"
    },
    correct: "b"
  },
  {
    id: 231,
    category: "ATA 25",
    question: "How many flashlights are located in the cockpit?",
    options: {
      a: "One",
      b: "Two",
      c: "Three"
    },
    correct: "b"
  },
  {
    id: 232,
    category: "ATA 25",
    question: "Where is the Halon 1211 (BCF) fire extinguisher mounted?",
    options: {
      a: "On the cabin forward bulkhead",
      b: "Under the pilot's seat",
      c: "On the cockpit sidewall"
    },
    correct: "a"
  },
  {
    id: 233,
    category: "ATA 25",
    question: "What is the load capacity of the rescue hoist system?",
    options: {
      a: "500 lbs",
      b: "600 lbs",
      c: "700 lbs"
    },
    correct: "b"
  },
  {
    id: 234,
    category: "ATA 25",
    question: "What is the purpose of wire strike protection?",
    options: {
      a: "Protect against electrical interference",
      b: "Prevent wire damage to the aircraft",
      c: "Increase fuel efficiency"
    },
    correct: "b"
  },
  {
    id: 235,
    category: "ATA 25",
    question: "How is the manual jettison cable operated?",
    options: {
      a: "By a button on the control panel",
      b: "By pulling a handle recessed into the sponson cover",
      c: "By voice command"
    },
    correct: "b"
  },
  {
    id: 236,
    category: "ATA 25",
    question: "What should be done after ditching to deploy the life rafts?",
    options: {
      a: "Operate the rotary TEST switch",
      b: "Select the arming switch on the overhead Life Raft Panel to ARM",
      c: "Swivel the sunvisor"
    },
    correct: "b"
  },
  {
    id: 237,
    category: "ATA 25",
    question: "What must be confirmed before continuing with the life-raft deployment test?",
    options: {
      a: "Illumination of ARM lights and RAFT ARM caution on EICAS",
      b: "Rotation of the sunvisor",
      c: "Presence of passengers in the cabin"
    },
    correct: "a"
  },
  {
    id: 238,
    category: "ATA 25",
    question: "Where would you find maintenance instructions for the cockpit sunvisor?",
    options: {
      a: "AMM Chapter 25",
      b: "Standard practices",
      c: "IC00696"
    },
    correct: "c"
  },
  {
    id: 239,
    category: "ATA 25",
    question: "When fitting passenger seats what should be taken in to consideration?",
    options: {
      a: "Ensuring the locations of the 3\u00b1 reclined seats",
      b: "Seat colour",
      c: "adjustable lumbar support"
    },
    correct: "a"
  },
  {
    id: 240,
    category: "ATA 25",
    question: "What selection of flooring is provided with the S-92?",
    options: {
      a: "75 PSF & 200 PSF",
      b: "150 PSF & 200 PSF",
      c: "1000 PSF & 200 PSF"
    },
    correct: "a"
  },





/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */



  {
    id: 241,
    category: "ATA 26",
    question: "What is the primary purpose of the five infrared flame detectors in the S-92A?",
    options: {
      a: "To detect smoke in the baggage compartment",
      b: "To extinguish engine fires",
      c: "To provide warning of flames and hot gas leaks"
    },
    correct: "c"
  },
  {
    id: 242,
    category: "ATA 26",
    question: "Where is the APU compartment flame detector located?",
    options: {
      a: "#1 ENG Forward",
      b: "#2 ENG Aft (OUTBOARD system)",
      c: "APU Compartment (INBOARD system)"
    },
    correct: "c"
  },
  {
    id: 243,
    category: "ATA 26",
    question: "Which infrared band does the flame detector utilize to sense fires?",
    options: {
      a: "2.7-micrometer (\u03bc)",
      b: "4.3-micrometer (\u03bc)",
      c: "5.8-micrometer (\u03bc)"
    },
    correct: "b"
  },
  {
    id: 244,
    category: "ATA 26",
    question: "How is the built-in-test (BIT) functionality initiated in the flame detectors?",
    options: {
      a: "By pressing the FIRE/ARM pushbutton",
      b: "By applying a 28 VDC signal to the test input",
      c: "Automatically during each flight"
    },
    correct: "b"
  },
  {
    id: 245,
    category: "ATA 26",
    question: "Which bus supplies power to the flame detectors in the event of a complete loss of electrical power?",
    options: {
      a: "DC BATTERY bus",
      b: "DC PRIMARY bus",
      c: "AC MAIN bus"
    },
    correct: "a"
  },
  {
    id: 246,
    category: "ATA 26",
    question: "What is the function of the baggage compartment smoke detector?",
    options: {
      a: "Detecting flames in the baggage compartment",
      b: "Monitoring the baggage compartment temperature",
      c: "Detecting smoke in the baggage compartment"
    },
    correct: "c"
  },
  {
    id: 247,
    category: "ATA 26",
    question: "How often is the baggage compartment smoke detector inspected?",
    options: {
      a: "6 months",
      b: "12 months",
      c: "24 months"
    },
    correct: "b"
  },
  {
    id: 248,
    category: "ATA 26",
    question: "What is the purpose of the two master warning panels?",
    options: {
      a: "To display engine parameters",
      b: "To provide visual warning of detected fires",
      c: "To control the fire extinguishing system"
    },
    correct: "b"
  },
  {
    id: 249,
    category: "ATA 26",
    question: "Where is the fire control panel located?",
    options: {
      a: "Under the cabin floor",
      b: "On the glare shield under the instrument panel",
      c: "In the APU compartment"
    },
    correct: "b"
  },
  {
    id: 250,
    category: "ATA 26",
    question: "How is the fire extinguisher circuit armed on the fire control panel?",
    options: {
      a: "By pressing the FIRE EXTG switch",
      b: "By lifting the protective cover and pressing the push-button switch",
      c: "Automatically when a fire is detected"
    },
    correct: "b"
  },
  {
    id: 251,
    category: "ATA 26",
    question: "What does the SMOKE IN BAGGAGE warning on the MFD indicate?",
    options: {
      a: "Engine fire",
      b: "Smoke in the baggage compartment",
      c: "Faulty smoke detector"
    },
    correct: "b"
  },
  {
    id: 252,
    category: "ATA 26",
    question: "Which position on the fire detector test panel tests the baggage compartment smoke detector?",
    options: {
      a: "INBD",
      b: "OUTBD",
      c: "SMOKE"
    },
    correct: "c"
  },
  {
    id: 253,
    category: "ATA 26",
    question: "What modification did CSN 92-060A make to the Fire Detector BIT wiring?",
    options: {
      a: "Added more flame detectors",
      b: "Grounded the test switch in all positions",
      c: "Increased the sensitivity of flame detectors"
    },
    correct: "b"
  },
  {
    id: 254,
    category: "ATA 26",
    question: "How is the fire extinguisher system controlled in the cockpit?",
    options: {
      a: "Via the MFDs",
      b: "Through the fire control panel and extinguisher switch",
      c: "Automatically when a fire is detected"
    },
    correct: "b"
  },
  {
    id: 255,
    category: "ATA 26",
    question: "Where are the two fire extinguisher bottles located?",
    options: {
      a: "In the baggage compartment",
      b: "Behind the APU compartment",
      c: "In the cockpit"
    },
    correct: "b"
  },
  {
    id: 256,
    category: "ATA 26",
    question: "What is the purpose of the pressure relief valve in each fire extinguisher bottle?",
    options: {
      a: "To release the extinguishing agent",
      b: "To check the nitrogen charge",
      c: "To release pressure in case of over pressurization"
    },
    correct: "c"
  },
  {
    id: 257,
    category: "ATA 26",
    question: "How are the extinguishant pipelines conveyed to the engine and APU bays?",
    options: {
      a: "Through the cabin floor",
      b: "Via a dedicated panel in the top surface of the strongback",
      c: "Through the main fuel lines"
    },
    correct: "b"
  },
  {
    id: 258,
    category: "ATA 26",
    question: "What is the purpose of the fire extinguisher inertia switches?",
    options: {
      a: "To arm the extinguisher system",
      b: "To release both main bottles' contents in a crash",
      c: "To test the fire detection circuits"
    },
    correct: "b"
  },
  {
    id: 259,
    category: "ATA 26",
    question: "Where are the handheld Halon 1211 fire extinguishers located?",
    options: {
      a: "One in the Cabin, one in the cockpit",
      b: "In the baggage compartment",
      c: "One on each side of the cockpit"
    },
    correct: "a"
  },
  {
    id: 260,
    category: "ATA 26",
    question: "What is the purpose of the Kevlar fuel vapour barriers in the cabin sidewall?",
    options: {
      a: "To protect against fire in the engine compartment",
      b: "To prevent fuel leaks/vapour from entering the cabin",
      c: "To reduce cabin noise"
    },
    correct: "b"
  },
  {
    id: 261,
    category: "ATA 26",
    question: "Where is the fire control panel?",
    options: {
      a: "Overhead Panel",
      b: "Center pedestal",
      c: "Central glare shield"
    },
    correct: "c"
  },
  {
    id: 262,
    category: "ATA 26",
    question: "What type of flame detectors are used?",
    options: {
      a: "Ion detectors",
      b: "Fire Wire",
      c: "Optical infrared sensors"
    },
    correct: "c"
  },
  {
    id: 263,
    category: "ATA 26",
    question: "During a crash how are the fire bottles initiated?",
    options: {
      a: "Pilot operation",
      b: "Inertia switch",
      c: "The fire bottles are not operated during a crash event"
    },
    correct: "b"
  },
  {
    id: 264,
    category: "ATA 26",
    question: "What type of smoke detector is fitted in the baggage bay?",
    options: {
      a: "Light Sensing",
      b: "Ion detector",
      c: "Heat detector"
    },
    correct: "a"
  },
  {
    id: 265,
    category: "ATA 26",
    question: "How many flame detectors are fitted to the S-92?",
    options: {
      a: "3",
      b: "5",
      c: "6"
    },
    correct: "b"
  },
  {
    id: 266,
    category: "ATA 26",
    question: "When the flame detector knob is turned to inboard, what sensors are tested?",
    options: {
      a: "Engine 1 Inboard, Engine 2 inboard and APU",
      b: "Engine 1 Inboard, Engine 2 inboard",
      c: "APU"
    },
    correct: "a"
  },
  {
    id: 267,
    category: "ATA 26",
    question: "When the flame detector test knob is turned to outboard, what sensors are tested?",
    options: {
      a: "Engine 1 Inboard, Engine 2 inboard and APU",
      b: "Engine 1 Inboard, Engine 2 inboard",
      c: "APU"
    },
    correct: "b"
  },





/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */


  {
    id: 268,
    category: "ATA 28",
    question: "Where are the fuel tanks located in the aircraft?",
    options: {
      a: "Sponsons",
      b: "Fuselage",
      c: "Tail"
    },
    correct: "a"
  },
  {
    id: 269,
    category: "ATA 28",
    question: "What material are the fuel tank bladders made of?",
    options: {
      a: "Aluminum",
      b: "Nylon reinforced rubber",
      c: "Carbon composite"
    },
    correct: "b"
  },
  {
    id: 270,
    category: "ATA 28",
    question: "When Will PRIME PUMP FAIL Caution illuminate ?",
    options: {
      a: "< 5 psi",
      b: "< 55psi",
      c: "Tank booster pump fail"
    },
    correct: "a"
  },
  {
    id: 271,
    category: "ATA 28",
    question: "What triggers the FUEL 1/2 LOW CAUTION?",
    options: {
      a: "440 nautical miles",
      b: "215 lbs \u00b1 45 lbs",
      c: "Low-level fuel sensors"
    },
    correct: "b"
  },
  {
    id: 272,
    category: "ATA 28",
    question: "What components can be accessed through the tank maintenance access panel?",
    options: {
      a: "Engine mounts",
      b: "Landing gear",
      c: "Quantity probe, low-level fuel sensor, refuel/defuel valve"
    },
    correct: "c"
  },
  {
    id: 273,
    category: "ATA 28",
    question: "What is the maximum pressure allowed during pressure defuel?",
    options: {
      a: "55 psig",
      b: "-3 psig",
      c: "20 gpm"
    },
    correct: "b"
  },
  {
    id: 274,
    category: "ATA 28",
    question: "Where is the aircraft pressure refuelled / defuelled from?",
    options: {
      a: "RH sponson",
      b: "LH sponson",
      c: "Gravity fill port"
    },
    correct: "b"
  },
  {
    id: 275,
    category: "ATA 28",
    question: "What does the Pressure Refuel Control Panel control?",
    options: {
      a: "Engine thrust",
      b: "Fuel tank temperature",
      c: "Left and right sponsons primary high-level shutoff valves"
    },
    correct: "c"
  },
  {
    id: 276,
    category: "ATA 28",
    question: "What is the purpose of the high-level shutoff valve in the fuel cell?",
    options: {
      a: "Prevent fuel spills",
      b: "Increase fuel flow",
      c: "Maintain atmospheric pressure"
    },
    correct: "a"
  },
  {
    id: 277,
    category: "ATA 28",
    question: "How much usable fuel does each Internal Auxiliary Fuel System (IAFS) tank hold?",
    options: {
      a: "1384 lbs",
      b: "382 gallons",
      c: "440 nautical miles"
    },
    correct: "a"
  },
  {
    id: 278,
    category: "ATA 28",
    question: "What pressure if fuel delivered during pressure refuel?",
    options: {
      a: "55 psi",
      b: "-3 psi",
      c: "20 gpm"
    },
    correct: "a"
  },
  {
    id: 279,
    category: "ATA 28",
    question: "Where is the Pressure Refuel Control Panel (PRCP) located?",
    options: {
      a: "Pressure refuel point",
      b: "Cockpit central pedestal",
      c: "Fuel bowser"
    },
    correct: "b"
  },
  {
    id: 280,
    category: "ATA 28",
    question: "What is the function of the Pressure Refuel Control switches during refuelling?",
    options: {
      a: "control of left and right sponson fuel delivery",
      b: "Increase fuel flow",
      c: "Manage cockpit pressure"
    },
    correct: "a"
  },
  {
    id: 281,
    category: "ATA 28",
    question: "What does the Internal Auxiliary Fuel System (IAFS) MODE SELECT switch control?",
    options: {
      a: "Engine mode",
      b: "Fuel transfer mode",
      c: "Aircraft speed"
    },
    correct: "b"
  },
  {
    id: 282,
    category: "ATA 28",
    question: "What is the purpose of the gravity refuel adapter?",
    options: {
      a: "Stop fuel flow",
      b: "Provide tank access for gravity filling",
      c: "Connect to the APU"
    },
    correct: "b"
  },
  {
    id: 283,
    category: "ATA 28",
    question: "What should be checked before attempting gravity refuelling?",
    options: {
      a: "Fuel temperature",
      b: "Fuel level through sight glass",
      c: "Engine oil level"
    },
    correct: "b"
  },
  {
    id: 284,
    category: "ATA 28",
    question: "Where are the sump drains located?",
    options: {
      a: "Top of the fuel tank",
      b: "Pressure refuel point",
      c: "Centrally in the bottom of each tank"
    },
    correct: "c"
  },
  {
    id: 285,
    category: "ATA 28",
    question: "What is the total fuel capacity (pressure Refuel)",
    options: {
      a: "5175 lbs",
      b: "3086 lbs",
      c: "7700 lbs"
    },
    correct: "a"
  },
  {
    id: 286,
    category: "ATA 28",
    question: "What are the three positions of the fuel select valve switches?",
    options: {
      a: "DIR, XFD, OFF",
      b: "AUTO, PUMP 1, PUMP 2",
      c: "ON, OFF, AUTO"
    },
    correct: "a"
  },
  {
    id: 287,
    category: "ATA 28",
    question: "How is the fuel valve selection displayed on the EICAS when in the CROSSFEED position?",
    options: {
      a: "Fuel line connected directly to engine pod",
      b: "Fuel line cross-connected to engine pod",
      c: "Fuel line disconnected from the engine pod"
    },
    correct: "b"
  },
  {
    id: 288,
    category: "ATA 28",
    question: "Where are the fuel prime pumps located?",
    options: {
      a: "Left and right sponsons",
      b: "Left side mid-cabin section",
      c: "Engine Bay"
    },
    correct: "b"
  },
  {
    id: 289,
    category: "ATA 28",
    question: "What is the normal pressure provided by the fuel prime pumps?",
    options: {
      a: "<5 psi",
      b: "11-16.5 psi",
      c: "3 psi"
    },
    correct: "b"
  },
  {
    id: 290,
    category: "ATA 28",
    question: "When does the MDC automatically control the operation of the prime pumps in AUTO position?",
    options: {
      a: "During maintenance",
      b: "After PBIT",
      c: "During a normal start"
    },
    correct: "c"
  },
  {
    id: 291,
    category: "ATA 28",
    question: "What happens if the MDC fails during prime pump operation?",
    options: {
      a: "Pump No.1 operates by default",
      b: "Pump No.2 operates by default",
      c: "Both pumps stop"
    },
    correct: "a"
  },
  {
    id: 292,
    category: "ATA 28",
    question: "Where is the prime pump pressure low pressure switch located?",
    options: {
      a: "Engine pod",
      b: "Mid-cabin section",
      c: "Throttle quadrant"
    },
    correct: "b"
  },
  {
    id: 293,
    category: "ATA 28",
    question: "What does the prime pump pressure switch detect?",
    options: {
      a: "High pressure (>55psi)",
      b: "Low pressure (<5 psi)",
      c: "Temperature"
    },
    correct: "b"
  },
  {
    id: 294,
    category: "ATA 28",
    question: "What caution is initiated if the prime pump pressure switch detects low pressure?",
    options: {
      a: "APU FAIL",
      b: "PRIME PUMP FAIL",
      c: "FUEL LEAK"
    },
    correct: "b"
  },
  {
    id: 295,
    category: "ATA 28",
    question: "What is the maximum fuel imbalance between LH & RH tanks?",
    options: {
      a: "500 lbs",
      b: "700 lbs",
      c: "1000 lbs"
    },
    correct: "b"
  },
  {
    id: 296,
    category: "ATA 28",
    question: "What is the Fuel Cell Sump Drain Valve Wrench used for?",
    options: {
      a: "Fuel pressure test",
      b: "Fuel cell installation",
      c: "Fuel tank drain valve"
    },
    correct: "c"
  },
  {
    id: 297,
    category: "ATA 28",
    question: "What does the SK2000FIT Fuel Integrity Tester detect?",
    options: {
      a: "Fuel temperature",
      b: "Fuel leaks",
      c: "Fuel pressure"
    },
    correct: "b"
  },
  {
    id: 298,
    category: "ATA 28",
    question: "What critical maintenance function does the SK2000FIT perform?",
    options: {
      a: "Engine start",
      b: "Fuel leakage testing",
      c: "Fuel cell installation"
    },
    correct: "b"
  },
  {
    id: 299,
    category: "ATA 28",
    question: "What is the purpose of the Fuel Feed System Vacuum Test?",
    options: {
      a: "Check fuel temperature",
      b: "Check fuel pressure",
      c: "Check fuel system integrity"
    },
    correct: "c"
  },
  {
    id: 300,
    category: "ATA 28",
    question: "What does the Fuel Quantity Gauging System monitor?",
    options: {
      a: "Engine temperature",
      b: "Fuel quantity",
      c: "Aircraft speed"
    },
    correct: "b"
  },
  {
    id: 301,
    category: "ATA 28",
    question: "How many fuel quantity probes does each fuel tank have?",
    options: {
      a: "One",
      b: "Two",
      c: "Three"
    },
    correct: "b"
  },
  {
    id: 302,
    category: "ATA 28",
    question: "Where are the fuel probes attached in each main sponson tank?",
    options: {
      a: "The rear",
      b: "On the sides",
      c: "Between the bridge and to fittings in the top of the tank"
    },
    correct: "c"
  },
  {
    id: 303,
    category: "ATA 28",
    question: "How many low-level sensors are included in the low level/temperature compensating system?",
    options: {
      a: "Two",
      b: "Four",
      c: "Six"
    },
    correct: "b"
  },
  {
    id: 304,
    category: "ATA 28",
    question: "Where is the Fuel Conditioning Unit (FCU) located?",
    options: {
      a: "Cockpit",
      b: "Lower Left mid-cabin bulkhead",
      c: "LH Avionic cabinet"
    },
    correct: "b"
  },
  {
    id: 305,
    category: "ATA 28",
    question: "How many microcomputer-based channels does the FCU contain?",
    options: {
      a: "One",
      b: "Two",
      c: "Three"
    },
    correct: "b"
  },
  {
    id: 306,
    category: "ATA 28",
    question: "What does the FCU use the fuel temperature data for?",
    options: {
      a: "Low-level compensation",
      b: "Voltage measurements",
      c: "Fuel mass correction"
    },
    correct: "c"
  },
  {
    id: 307,
    category: "ATA 28",
    question: "How is the FQGS self-test (CBIT) routine triggered?",
    options: {
      a: "Manually by the crew",
      b: "Automatically",
      c: "Through radio signals"
    },
    correct: "b"
  },
  {
    id: 308,
    category: "ATA 28",
    question: "What is the duration of the FQGS IBIT test?",
    options: {
      a: "5 seconds",
      b: "10 seconds",
      c: "15 seconds"
    },
    correct: "b"
  },
  {
    id: 309,
    category: "ATA 28",
    question: "What will the total fuel quantity display on the EICAS show during the IBIT test?",
    options: {
      a: "3086 lbs",
      b: "500 kg",
      c: "2000 lbs"
    },
    correct: "a"
  },
  {
    id: 310,
    category: "ATA 28",
    question: "How is the active or last active Prime Pump indicated on the HEALTH page?",
    options: {
      a: "Red legend",
      b: "Green legend",
      c: "Yellow legend"
    },
    correct: "b"
  },
  {
    id: 311,
    category: "ATA 28",
    question: "What does the Engine Instrument and Crew Alerting System (EICAS) display for low fuel conditions?",
    options: {
      a: "Blue tape",
      b: "Yellow tapes",
      c: "Green tapes"
    },
    correct: "b"
  },
  {
    id: 312,
    category: "ATA 28",
    question: "At what fuel quantity does the low fuel condition turn the tapes and numbers yellow?",
    options: {
      a: "100 lbs",
      b: "215 \u00b1 45 lbs",
      c: "500 kg"
    },
    correct: "b"
  },
  {
    id: 313,
    category: "ATA 28",
    question: "What does the yellow/green coloured barber pole on the fuel quantity symbology indicate?",
    options: {
      a: "Full tank",
      b: "1 hour of fuel remaining",
      c: "Empty tank"
    },
    correct: "b"
  },
  {
    id: 314,
    category: "ATA 28",
    question: "Where are the breakaway valves located?",
    options: {
      a: "Sponson to aircraft racetrack",
      b: "transfer point to the upper deck for both engine and APU supply",
      c: "Both"
    },
    correct: "c"
  },
  {
    id: 315,
    category: "ATA 28",
    question: "What does the SOV1 WRNG POSN or SOV2 WRNG POSN indication mean?",
    options: {
      a: "Fuel tank full",
      b: "Valve in wrong position depending on demanded position",
      c: "Normal operation"
    },
    correct: "b"
  },
  {
    id: 316,
    category: "ATA 28",
    question: "What happens if no data is being received from the FCU?",
    options: {
      a: "Green tapes",
      b: "Yellow tapes",
      c: "Red dashes and black text"
    },
    correct: "c"
  },
  {
    id: 317,
    category: "ATA 28",
    question: "Where are the fuel quantity probes and low-level sensors inputs sent?",
    options: {
      a: "Fuel Conditioning Unit onto the DCU",
      b: "Fuel Control Unit onto the DCU",
      c: "Directly to the Data Concentrator Units"
    },
    correct: "a"
  },
  {
    id: 318,
    category: "ATA 28",
    question: "If PUMP 1 is shown in green on the Aircraft Status page?",
    options: {
      a: "Pump 1 was the last prime pump to be used or is in use",
      b: "Prime pump 1 BIT test passed",
      c: "Prime pump 1 is faulty"
    },
    correct: "a"
  },
  {
    id: 319,
    category: "ATA 28",
    question: "Where does the APU take its supply?",
    options: {
      a: "APU Supply Tank",
      b: "Right Hand Sponson Tank",
      c: "Left Hand Sponson Tank"
    },
    correct: "c"
  },
  {
    id: 320,
    category: "ATA 28",
    question: "What are the three positions of the prime pump select valve switches?",
    options: {
      a: "DIR, XFD, OFF",
      b: "AUTO, PUMP 1, PUMP 2",
      c: "ON, OFF, AUTO"
    },
    correct: "b"
  },
  {
    id: 321,
    category: "ATA 28",
    question: "In normal operation what component decides which prime pump is used?",
    options: {
      a: "Maintenance Data Computer ",
      b: "Fuel conditioning unit",
      c: "Data concentrators unit"
    },
    correct: "a"
  },
  {
    id: 322,
    category: "ATA 28",
    question: "How are the bag tanks attached to the sponson?",
    options: {
      a: "Nuts and Bolts",
      b: "Velcro and Cord",
      c: "Interference fit"
    },
    correct: "b"
  },
  {
    id: 323,
    category: "ATA 28",
    question: "What position can the gravity fuel filler cap be fitted?",
    options: {
      a: "Any position",
      b: "Arrow pointing up",
      c: "View window at top"
    },
    correct: "b"
  },
  {
    id: 324,
    category: "ATA 28",
    question: "How are the breakaway valves operated?",
    options: {
      a: "Electrically",
      b: "Actuate when side loading causes a low shear frangible fitting in the valve to break.",
      c: "aircraft integrated inertia switches"
    },
    correct: "b"
  },
  {
    id: 325,
    category: "ATA 28",
    question: "When is the prime pump needed?",
    options: {
      a: "engine fuel boost pumps for start, and to the APU continuously, while the APU is running",
      b: "Normal engine operation",
      c: "APU start ONLY"
    },
    correct: "a"
  },
  {
    id: 326,
    category: "ATA 28",
    question: "Where are the prime pumps located?",
    options: {
      a: "Engine bay",
      b: "within the fuel tank",
      c: "Left hand mid-cabin wall"
    },
    correct: "c"
  },
  {
    id: 327,
    category: "ATA 28",
    question: "How are the fuel tank high level switches tested?",
    options: {
      a: "BIT during power up",
      b: "high level pre-check switch",
      c: "IBIT on STATUS PAGE"
    },
    correct: "b"
  },
  {
    id: 328,
    category: "ATA 28",
    question: "Where is the pressure refuel/defuel valves located",
    options: {
      a: "LH mid-cabin",
      b: "Fuel Tank bridge support",
      c: "Top deck"
    },
    correct: "b"
  },
  {
    id: 329,
    category: "ATA 28",
    question: "How many fuel quantity sensor are located in each tank?",
    options: {
      a: "1",
      b: "3",
      c: "2"
    },
    correct: "c"
  },
  {
    id: 330,
    category: "ATA 28",
    question: "What components can be found on the fuel sensor probe",
    options: {
      a: "fuel sensor only",
      b: "Fuel sensor, Low level sensor and High Level sensor ",
      c: "Fuel sensor, Low Level sensor and temperature compensating"
    },
    correct: "c"
  },
  {
    id: 331,
    category: "ATA 28",
    question: "How many channels does the FCU have?",
    options: {
      a: "1",
      b: "2",
      c: "3"
    },
    correct: "b"
  },
  {
    id: 332,
    category: "ATA 28",
    question: "Where is the fuel prime low pressure switch located?",
    options: {
      a: "LH mid-cabin ",
      b: "LH Sponson tank",
      c: "LH avionic rack"
    },
    correct: "a"
  },
  {
    id: 333,
    category: "ATA 28",
    question: "Where do the fuel selector valves get their power?",
    options: {
      a: "Battery Utility bus",
      b: "AC 2 Bus",
      c: "DC Gen converter"
    },
    correct: "a"
  },
  {
    id: 334,
    category: "ATA 28",
    question: "Where are fuel flow indications derived from?",
    options: {
      a: "EICAS page",
      b: "Fuel Metering Unit",
      c: "Low-level sensors"
    },
    correct: "b"
  },
  {
    id: 335,
    category: "ATA 28",
    question: "At what level will Fuel 1/2 LOW caution display?",
    options: {
      a: "215 \u00b1 45 lbs",
      b: "32 lbs",
      c: "1 hours fuel remaining"
    },
    correct: "a"
  },




/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */



  {
    id: 336,
    category: "ATA 33",
    question: "What is the purpose of the Standby Battery?",
    options: {
      a: "To power the cockpit lights",
      b: "To provide power to the Standby Instruments facia",
      c: "To control the lighting in the baggage compartment"
    },
    correct: "b"
  },
  {
    id: 337,
    category: "ATA 33",
    question: "Where is the cockpit lights control panel located?",
    options: {
      a: "Above the pilot's head",
      b: "Below the overhead circuit breaker panel",
      c: "Behind the co-pilot's seat"
    },
    correct: "b"
  },
  {
    id: 338,
    category: "ATA 33",
    question: "How many Dimmer Units are there in the aircraft?",
    options: {
      a: "Three",
      b: "Five",
      c: "Seven"
    },
    correct: "c"
  },
  {
    id: 339,
    category: "ATA 33",
    question: "What is the purpose of the Balance Boxes in the cockpit?",
    options: {
      a: "To adjust the pilot's balance",
      b: "To automatically set the levels of illumination in different areas",
      c: "To control the power output of the Dimmer Units"
    },
    correct: "b"
  },
  {
    id: 340,
    category: "ATA 33",
    question: "What happens when the rotary control on the Dimmer is fully anti-clockwise?",
    options: {
      a: "The lights are at full brightness",
      b: "The lights are off",
      c: "The voltage is reduced from 28v to 5v"
    },
    correct: "b"
  },
  {
    id: 341,
    category: "ATA 33",
    question: "Which lighting panels are powered directly from the Standby Battery in case of power loss from the #2 DC Primary Bus?",
    options: {
      a: "Instrument Panel",
      b: "Lower Console",
      c: "Backup Indicators"
    },
    correct: "c"
  },
  {
    id: 342,
    category: "ATA 33",
    question: "What is the purpose of the Backup Indicators?",
    options: {
      a: "To provide lighting during landing",
      b: "To illuminate the Standby instruments facia",
      c: "To control the Flood Light"
    },
    correct: "b"
  },
  {
    id: 343,
    category: "ATA 33",
    question: "Which lighting panels are controlled by the rotary control in the Side Console?",
    options: {
      a: "Audio Controller 1",
      b: "AHRS 1 Compass Control Unit",
      c: "Audio Controller 2"
    },
    correct: "a"
  },
  {
    id: 344,
    category: "ATA 33",
    question: "What is the power source for the Flood Light?",
    options: {
      a: "Battery Bus (28v)",
      b: "#1 DC Primary Bus",
      c: "#2 DC Primary Bus"
    },
    correct: "a"
  },
  {
    id: 345,
    category: "ATA 33",
    question: "How many Utility Lights are there in the cockpit, and what is their power source?",
    options: {
      a: "One, #2 DC Primary Bus",
      b: "Two, Battery Bus",
      c: "Three, #1 DC Primary Bus"
    },
    correct: "b"
  },
  {
    id: 346,
    category: "ATA 33",
    question: "What is the purpose of the Approach Chart Holders Lighting?",
    options: {
      a: "To provide general illumination",
      b: "To store and display charts",
      c: "To control the cabin lighting"
    },
    correct: "b"
  },
  {
    id: 347,
    category: "ATA 33",
    question: "Where is the cabin lighting control panel located?",
    options: {
      a: "Pilot's side of the overhead panel",
      b: "Behind the co-pilot's seat",
      c: "Above the pilot's head"
    },
    correct: "a"
  },
  {
    id: 348,
    category: "ATA 33",
    question: "What is the power source for the cabin lighting strips down the left side of the cabin?",
    options: {
      a: "#1 DC Primary Bus",
      b: "#2 DC Primary Bus",
      c: "Battery Bus (28v)"
    },
    correct: "a"
  },
  {
    id: 349,
    category: "ATA 33",
    question: "How is the cabin overhead lighting controlled when the switch is in the DIM position?",
    options: {
      a: "Logic relay is de-energised",
      b: "Logic relay energises",
      c: "Ballast Units are not powered"
    },
    correct: "a"
  },
  {
    id: 350,
    category: "ATA 33",
    question: "Which signs are powered from the #1 DC Primary Bus?",
    options: {
      a: "No Smoking signs",
      b: "Seat Belt signs",
      c: "Both a and b"
    },
    correct: "c"
  },
  {
    id: 351,
    category: "ATA 33",
    question: "How many passenger reading lights are there, and how are they controlled?",
    options: {
      a: "10, individually by each passenger",
      b: "19, controlled from the cockpit switch",
      c: "15, controlled by the Passenger Advisory Signs"
    },
    correct: "b"
  },
  {
    id: 352,
    category: "ATA 33",
    question: "What is the power source for the Baggage Compartment Light?",
    options: {
      a: "Battery Bus",
      b: "#1 DC Primary Bus",
      c: "#2 DC Primary Bus"
    },
    correct: "a"
  },
  {
    id: 353,
    category: "ATA 33",
    question: "How many positions does the Baggage Compartment Light switch have, and what does each position do?",
    options: {
      a: "Two; ON and OFF",
      b: "Three; CREW, OFF, and ON",
      c: "Four; DIM, BRIGHT, ON, and OFF"
    },
    correct: "b"
  },
  {
    id: 354,
    category: "ATA 33",
    question: "What happens when the P/B LAMP switch is placed in the TEST position?",
    options: {
      a: "All lights go off",
      b: "All pushbutton/indicator lights go to bright",
      c: "The Flood Light is activated"
    },
    correct: "b"
  },
  {
    id: 355,
    category: "ATA 33",
    question: "What is the intended use of the Flood Light in the cockpit?",
    options: {
      a: "General illumination",
      b: "Reducing the effect of lightning flashes at night",
      c: "Emergency lighting during landing"
    },
    correct: "b"
  },
  {
    id: 356,
    category: "ATA 33",
    question: "How many Advisory Signs are there in the Passenger Advisory Signs system?",
    options: {
      a: "Three",
      b: "Two",
      c: "Four"
    },
    correct: "b"
  },
  {
    id: 357,
    category: "ATA 33",
    question: "What activates the NO SMOKE message in the Passenger Briefing System?",
    options: {
      a: "Selecting SEAT BELT ON",
      b: "Selecting NO SMOKE ON",
      c: "Selecting BRIGHT on the cabin overhead lighting switch"
    },
    correct: "b"
  },
  {
    id: 358,
    category: "ATA 33",
    question: "How is the master ON/OFF control for the Passenger Reading Lights operated?",
    options: {
      a: "By each passenger individually",
      b: "By the crew in the cockpit",
      c: "By the Baggage Compartment Light switch"
    },
    correct: "b"
  },
  {
    id: 359,
    category: "ATA 33",
    question: "What is the power source for the Baggage Compartment Light?",
    options: {
      a: "#1 DC Primary Bus",
      b: "#2 DC Primary Bus",
      c: "Battery Bus"
    },
    correct: "c"
  },
  {
    id: 360,
    category: "ATA 33",
    question: "How is the illumination level of the passenger reading lights adjusted on newer aircraft?",
    options: {
      a: "Rotating a dial on each light",
      b: "Sweeping your finger around the black surround",
      c: "Using a separate dimmer control in the cockpit"
    },
    correct: "b"
  },
  {
    id: 361,
    category: "ATA 33",
    question: "What components are part of the External lighting system?",
    options: {
      a: "Anti-Collision Lights",
      b: "Position Lights",
      c: "Searchlight"
    },
    correct: "a"
  },
  {
    id: 362,
    category: "ATA 33",
    question: "Where are the Anti-Collision Lights controlled from?",
    options: {
      a: "Captain's seat",
      b: "Pilot's seat",
      c: "Co-pilot\u2019s side of the overhead panel"
    },
    correct: "c"
  },
  {
    id: 363,
    category: "ATA 33",
    question: "How are the Landing Lights powered on the S-92?",
    options: {
      a: "Battery Bus",
      b: "DC Essential Bus",
      c: "AC Essential Bus"
    },
    correct: "b"
  },
  {
    id: 364,
    category: "ATA 33",
    question: "Where are the Position Lights located?",
    options: {
      a: "On top of the cockpit",
      b: "On the side of each sponson",
      c: "On the tail"
    },
    correct: "b"
  },
  {
    id: 365,
    category: "ATA 33",
    question: "What powers the Cargo Loading Light?",
    options: {
      a: "AC Essential Bus",
      b: "Battery Bus",
      c: "DC Essential Bus"
    },
    correct: "b"
  },
  {
    id: 366,
    category: "ATA 33",
    question: "Where is the Searchlight located?",
    options: {
      a: "Above the cockpit",
      b: "Below the Co-pilot\u2019s seat",
      c: "Below the Pilot\u2019s seat"
    },
    correct: "c"
  },
  {
    id: 367,
    category: "ATA 33",
    question: "What is the function of the STOW position for the Searchlight?",
    options: {
      a: "Extend the light forward",
      b: "Turn off the light",
      c: "Retract the light into the structure"
    },
    correct: "c"
  },
  {
    id: 368,
    category: "ATA 33",
    question: "In which position does the Co-pilot\u2019s switch have no effect on the Searchlight?",
    options: {
      a: "ON",
      b: "OFF",
      c: "STOW"
    },
    correct: "b"
  },
  {
    id: 369,
    category: "ATA 33",
    question: "What happens when both Searchlight Switches are ON?",
    options: {
      a: "Searchlight retracts",
      b: "Contactor is energized",
      c: "Slew switches are disabled"
    },
    correct: "b"
  },
  {
    id: 370,
    category: "ATA 33",
    question: "Where is power applied when the Pilot\u2019s and Co-pilot\u2019s Switches are ON?",
    options: {
      a: "Only to the Pilot\u2019s switch",
      b: "Only to the Co-pilot\u2019s switch",
      c: "Both switches"
    },
    correct: "c"
  },
  {
    id: 371,
    category: "ATA 33",
    question: "What is the primary function of the High Visibility Strobe Lights?",
    options: {
      a: "Night illumination",
      b: "Day use only",
      c: "Fog penetration"
    },
    correct: "b"
  },
  {
    id: 372,
    category: "ATA 33",
    question: "When are the High Visibility Strobe Lights inhibited?",
    options: {
      a: "During day use",
      b: "When on the ground",
      c: "During fog"
    },
    correct: "b"
  },
  {
    id: 373,
    category: "ATA 33",
    question: "How many areas of emergency lighting does the S92 have?",
    options: {
      a: "Two",
      b: "Three",
      c: "Four"
    },
    correct: "b"
  },
  {
    id: 374,
    category: "ATA 33",
    question: "What powers the HEELS from the #2 DC Primary Bus?",
    options: {
      a: "AC Essential Bus",
      b: "Battery Bus",
      c: "#2 DC Primary Bus"
    },
    correct: "c"
  },
  {
    id: 375,
    category: "ATA 33",
    question: "Where are the emergency lighting batteries located?",
    options: {
      a: "Cockpit floor",
      b: "Above window 5",
      c: "Baggage Compartment ceiling"
    },
    correct: "c"
  },
  {
    id: 376,
    category: "ATA 33",
    question: "When are the Emergency Lights Panel switches enabled?",
    options: {
      a: "In the OFF position",
      b: "In the ON position",
      c: "In the ARM position"
    },
    correct: "c"
  },
  {
    id: 377,
    category: "ATA 33",
    question: "Where are the Internal Emergency Cabin Lights located?",
    options: {
      a: "In the cockpit",
      b: "Throughout the cabin",
      c: "On the external sponsons"
    },
    correct: "b"
  },
  {
    id: 378,
    category: "ATA 33",
    question: "How many water immersion detectors are there for the HEELS?",
    options: {
      a: "One",
      b: "Two",
      c: "Three"
    },
    correct: "b"
  },
  {
    id: 379,
    category: "ATA 33",
    question: "What happens if the HEELS switch is in the ARM position during a water entry event?",
    options: {
      a: "Cabin lights turn off",
      b: "System illuminates HEELS lights",
      c: "Batteries are disconnected"
    },
    correct: "b"
  },
  {
    id: 380,
    category: "ATA 33",
    question: "Where are the PSU 1 and PSU 2 located?",
    options: {
      a: "Above window 10",
      b: "Below the Co-pilot\u2019s seat",
      c: "Below the Pilot\u2019s seat"
    },
    correct: "c"
  },
  {
    id: 381,
    category: "ATA 33",
    question: "How many batteries are in the HEELS system?",
    options: {
      a: "Four",
      b: "Six",
      c: "Eight"
    },
    correct: "b"
  },
  {
    id: 382,
    category: "ATA 33",
    question: "Which areas are illuminated by the HEELS system?",
    options: {
      a: "Cockpit only",
      b: "Cabin only",
      c: "Cockpit, cabin, and external exits"
    },
    correct: "c"
  },
  {
    id: 383,
    category: "ATA 33",
    question: "What happens if one PSU fails in the HEELS system?",
    options: {
      a: "All lights go out",
      b: "Half of the windows and exits remain illuminated",
      c: "Emergency exits become disabled"
    },
    correct: "b"
  },




/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */



  {
    id: 384,
    category: "ATA 34",
    question: "What is the frequency range for VOR/ILS tuning?",
    options: {
      a: "108.00 to 112.00 MHz",
      b: "112.00 to 117.95 MHz",
      c: "108.00 to 117.95 MHz"
    },
    correct: "a"
  },
  {
    id: 385,
    category: "ATA 34",
    question: "How are VOR frequencies selected within the range of 108.00 to 112.00 MHz?",
    options: {
      a: "When the digit to the right of the decimal is an even number",
      b: "When the digit to the right of the decimal is an odd number",
      c: "All frequencies in this range are VOR frequencies"
    },
    correct: "a"
  },
  {
    id: 386,
    category: "ATA 34",
    question: "Where is the Marker Beacon antenna located?",
    options: {
      a: "Under the fuselage, level with the main entrance door",
      b: "Under the fuselage, below the co-pilot\u2019s seat",
      c: "In the nose compartment"
    },
    correct: "b"
  },
  {
    id: 387,
    category: "ATA 34",
    question: "How are VOR/LOC and VHF 2 antennas connected?",
    options: {
      a: "Through a coupler in the seat well under the co-pilot\u2019s seat",
      b: "Through a coupler below the floor of the forward Cabin area",
      c: "They are not connected"
    },
    correct: "b"
  },
  {
    id: 388,
    category: "ATA 34",
    question: "What does the white arrow controlled by the RIC represent?",
    options: {
      a: "Glideslope indication",
      b: "Marker Beacon indication",
      c: "VOR radial selection"
    },
    correct: "c"
  },
  {
    id: 389,
    category: "ATA 34",
    question: "In VOR Deviations, how is the lateral deviation bar oriented when the beacon is to the left of the selected radial?",
    options: {
      a: "To the right",
      b: "Centered",
      c: "To the left"
    },
    correct: "c"
  },
  {
    id: 390,
    category: "ATA 34",
    question: "What color is used to signify VOR or FMS deviation in the Lateral Deviation Bar?",
    options: {
      a: "Magenta",
      b: "Blue",
      c: "Yellow"
    },
    correct: "a"
  },
  {
    id: 391,
    category: "ATA 34",
    question: "What does a yellow text label indicate when the off-side VOR is selected as the active source of navigation?",
    options: {
      a: "Signal weakness",
      b: "System failure",
      c: "Offside selection"
    },
    correct: "c"
  },
  {
    id: 392,
    category: "ATA 34",
    question: "How is a failure of a VOR or ILS system displayed on the MFD?",
    options: {
      a: "In green",
      b: "In yellow",
      c: "In red"
    },
    correct: "c"
  },
  {
    id: 393,
    category: "ATA 34",
    question: "During an ILS approach, what does a full-scale lateral indication result in?",
    options: {
      a: "Yellow diamond",
      b: "Magenta diamond",
      c: "White arrow"
    },
    correct: "a"
  },
  {
    id: 394,
    category: "ATA 34",
    question: "Where is the DME Receiver/Transmitter located?",
    options: {
      a: "Under the fuselage",
      b: "In the left Avionics Rack",
      c: "In the nose compartment"
    },
    correct: "b"
  },
  {
    id: 395,
    category: "ATA 34",
    question: "How many channels does the scanning DME receiver have in one unit?",
    options: {
      a: "1",
      b: "2",
      c: "3"
    },
    correct: "c"
  },
  {
    id: 396,
    category: "ATA 34",
    question: "Where is the DME antenna located?",
    options: {
      a: "Under the co-pilot\u2019s seat",
      b: "Under the aircraft on the left",
      c: "In the nose compartment"
    },
    correct: "b"
  },
  {
    id: 397,
    category: "ATA 34",
    question: "In normal operation how is the DME frequency tuned?",
    options: {
      a: "Independently on the DME Main Page",
      b: "Paired with the VOR or ILS frequencies",
      c: "Through the Display Control Panel (DCP)"
    },
    correct: "b"
  },
  {
    id: 398,
    category: "ATA 34",
    question: "What does a yellow H next to the VOR frequency on the MFDs indicate?",
    options: {
      a: "High signal strength",
      b: "DME Hold function activated",
      c: "Health issue with avionics"
    },
    correct: "b"
  },
  {
    id: 399,
    category: "ATA 34",
    question: "How is DME Hold selected?",
    options: {
      a: "Automatically",
      b: "Through the Remote Instrument Controller (RIC)",
      c: "From the RTU"
    },
    correct: "c"
  },
  {
    id: 400,
    category: "ATA 34",
    question: "Where can you find the status of the DME system?",
    options: {
      a: "NAV Main Page",
      b: "HLTH >> AVIONICS Page 1",
      c: "RTU Diagnostic Menu"
    },
    correct: "b"
  },
  {
    id: 401,
    category: "ATA 34",
    question: "When testing the DME from RTU 1, what indicates a serviceable system?",
    options: {
      a: "A yellow H on the MFDs",
      b: "100 NM displayed under the VOR/ILS indication",
      c: "A green marker on the PFD"
    },
    correct: "b"
  },
  {
    id: 402,
    category: "ATA 34",
    question: "How are VOR 1 and ILS 1 diagnostics accessed?",
    options: {
      a: "From the NAV Main Page",
      b: "RTU 1 Diagnostic Menu",
      c: "HLTH >> AVIONICS Page 2"
    },
    correct: "b"
  },
  {
    id: 403,
    category: "ATA 34",
    question: "What bus does VOR/ILS 1 use for power supply?",
    options: {
      a: "No 1 DC Primary Bus",
      b: "DC Essential Bus",
      c: "AC Bus"
    },
    correct: "a"
  },
  {
    id: 404,
    category: "ATA 34",
    question: "What does the ADF system consist of?",
    options: {
      a: "Receiver and Antenna.",
      b: "Receiver / Transceiver module",
      c: "integrated in to the DCU"
    },
    correct: "a"
  },
  {
    id: 405,
    category: "ATA 34",
    question: "Where is the ADF receiver located?",
    options: {
      a: "Right avionics rack",
      b: "Top of the left avionics rack",
      c: "Bottom of the left avionics rack"
    },
    correct: "b"
  },
  {
    id: 406,
    category: "ATA 34",
    question: "How many loop antennae does the ADF antenna have for direction finding?",
    options: {
      a: "1",
      b: "2",
      c: "3"
    },
    correct: "b"
  },
  {
    id: 407,
    category: "ATA 34",
    question: "Which button on the Audio Controller selects the sense antenna for listening to the beacon IDENT?",
    options: {
      a: "L2",
      b: "R2",
      c: "L3"
    },
    correct: "a"
  },
  {
    id: 408,
    category: "ATA 34",
    question: "How is the ADF Main Page accessed?",
    options: {
      a: "Pressing R3 once",
      b: "Pressing L4 twice",
      c: "Pressing R3 twice from the Top Level Page"
    },
    correct: "c"
  },
  {
    id: 409,
    category: "ATA 34",
    question: "What does the ADF Test on the Main Page display if the system is serviceable?",
    options: {
      a: "A code of 00",
      b: "A code of 01",
      c: "No code"
    },
    correct: "a"
  },
  {
    id: 410,
    category: "ATA 34",
    question: "Where is the status of the ADF displayed?",
    options: {
      a: "HLTH >> AVIONICS Page 2",
      b: "HLTH >> AVIONICS Page 1",
      c: "Top Level Page"
    },
    correct: "b"
  },
  {
    id: 411,
    category: "ATA 34",
    question: "How many RADALT systems does the aircraft have?",
    options: {
      a: "Two",
      b: "Three",
      c: "One"
    },
    correct: "c"
  },
  {
    id: 412,
    category: "ATA 34",
    question: "What is the altitude range of the RADALT system?",
    options: {
      a: "0 to 1000 feet",
      b: "0 to 2500 feet",
      c: "0 to 5000 feet"
    },
    correct: "b"
  },
  {
    id: 413,
    category: "ATA 34",
    question: "Where is the RAD ALT Receiver/Transmitter located?",
    options: {
      a: "Bottom of the left avionics rack",
      b: "Top of the left avionics rack",
      c: "Right avionics rack"
    },
    correct: "b"
  },
  {
    id: 414,
    category: "ATA 34",
    question: "How many Decision Height Bugs can be set?",
    options: {
      a: "One",
      b: "Two",
      c: "Three"
    },
    correct: "b"
  },
  {
    id: 415,
    category: "ATA 34",
    question: "When does the digital RADALT AGL indication and pointer change to yellow?",
    options: {
      a: "Above the RA setting",
      b: "Below the RA setting",
      c: "At the RA setting"
    },
    correct: "b"
  },
  {
    id: 416,
    category: "ATA 34",
    question: "What does the CAT A RADALT indicator show above the TDP setting?",
    options: {
      a: "Digital Text in white, arc in green",
      b: "Digital Text in yellow, arc in yellow",
      c: "Digital Text in yellow, arc in green"
    },
    correct: "a"
  },
  {
    id: 417,
    category: "ATA 34",
    question: "What does the red AGL fails flag indicate?",
    options: {
      a: "System under test",
      b: "RADALT failure",
      c: "Normal operation"
    },
    correct: "b"
  },
  {
    id: 418,
    category: "ATA 34",
    question: "How is the RADALT system tested for serviceability?",
    options: {
      a: "Using a test set",
      b: "Pressing RAD ALT 2 on HLTH >> AVIONICS Page 2",
      c: "Pressing IBIT on RAD ALT 1 on HLTH >> AVIONICS Page 2"
    },
    correct: "c"
  },
  {
    id: 419,
    category: "ATA 34",
    question: "When should the RADALT system be zeroed?",
    options: {
      a: "Every flight",
      b: "If IBIT reading is more than 5 ft above or below 100 ft",
      c: "During pre-flight inspection"
    },
    correct: "b"
  },
  {
    id: 420,
    category: "ATA 34",
    question: "How can the RADALT AGL be displayed in 0.1 foot increments on the MFDs?",
    options: {
      a: "Pressing IBIT",
      b: "Pressing + and \u2013 together on the CONT buttons",
      c: "Selecting TDP on the PFD"
    },
    correct: "b"
  },
  {
    id: 421,
    category: "ATA 34",
    question: "What does the Air Data Systems (ADS) consist of?",
    options: {
      a: "Two ADC systems and a Standby system",
      b: "Three ADC systems",
      c: "Two Standby systems"
    },
    correct: "a"
  },
  {
    id: 422,
    category: "ATA 34",
    question: "How many ADC systems are there in the Air Data Systems?",
    options: {
      a: "One",
      b: "Two",
      c: "Three"
    },
    correct: "b"
  },
  {
    id: 423,
    category: "ATA 34",
    question: "What is the purpose of the Standby System?",
    options: {
      a: "To calculate Vne",
      b: "To provide indications only",
      c: "To send data to the MFDs"
    },
    correct: "b"
  },
  {
    id: 424,
    category: "ATA 34",
    question: "Where are the ADCs located?",
    options: {
      a: "Left hand avionics rack",
      b: "Under the nose of the aircraft",
      c: "On the tail"
    },
    correct: "b"
  },
  {
    id: 425,
    category: "ATA 34",
    question: "What information do the ADCs use for their calculations?",
    options: {
      a: "Weight and engine status",
      b: "Pitot pressure, static pressure, and outside air temperature",
      c: "Barometric setting and AFCS data"
    },
    correct: "b"
  },
  {
    id: 426,
    category: "ATA 34",
    question: "Where are the Outside Air Temperature (OAT) Probes located?",
    options: {
      a: "Engine inlets",
      b: "Under the nose Landing Bay",
      c: "Within the Pitot head"
    },
    correct: "b"
  },
  {
    id: 427,
    category: "ATA 34",
    question: "From which Pitot Static Probe does ADC 1 receive pitot pressure?",
    options: {
      a: "Lower Left Pitot Probe",
      b: "Right Pitot Probe",
      c: "Upper left Pitot Probe"
    },
    correct: "a"
  },
  {
    id: 428,
    category: "ATA 34",
    question: "How many screw cap drain points are used to release water build-up in the pitot and static lines?",
    options: {
      a: "5",
      b: "10",
      c: "15"
    },
    correct: "b"
  },
  {
    id: 429,
    category: "ATA 34",
    question: "What does the BARALT Bug MIN setting control?",
    options: {
      a: "Vne calculation",
      b: "BARALT Decision Height",
      c: "AFCS Reference Altitude"
    },
    correct: "b"
  },
  {
    id: 430,
    category: "ATA 34",
    question: "What does the white ALTP bug setting control?",
    options: {
      a: "BARALT Decision Height",
      b: "Altitude Pre-select",
      c: "AFCS Reference Altitude"
    },
    correct: "b"
  },
  {
    id: 431,
    category: "ATA 34",
    question: "How does the system indicate a miscompare in IAS?",
    options: {
      a: "Audible alert",
      b: "Flashing lights",
      c: "IAS miscompare flag"
    },
    correct: "c"
  },
  {
    id: 432,
    category: "ATA 34",
    question: "At what IAS will a miscompare display?",
    options: {
      a: "70 KIAS",
      b: "7 KIAS",
      c: "70 feet"
    },
    correct: "b"
  },
  {
    id: 433,
    category: "ATA 34",
    question: "At what altitude will a miscompare display?",
    options: {
      a: "7 feet",
      b: "70 feet",
      c: "7 KIAS"
    },
    correct: "b"
  },
  {
    id: 434,
    category: "ATA 34",
    question: "What does ADC to AFCS data use for its calculations?",
    options: {
      a: "Only offside ADC",
      b: "Average of both ADCs",
      c: "AHRS data"
    },
    correct: "b"
  },
  {
    id: 435,
    category: "ATA 34",
    question: "What happens if a pitot probe becomes blocked during coupled pitch movement?",
    options: {
      a: "Uncommanded pitch movement",
      b: "No effect",
      c: "AFCS disengagement"
    },
    correct: "a"
  },
  {
    id: 436,
    category: "ATA 34",
    question: "How is the Pitot Static leak check and accuracy checks carried out?",
    options: {
      a: "Using the ADC Test Set",
      b: "Manually",
      c: "Using the Air Data System Test Set 405F"
    },
    correct: "c"
  },
  {
    id: 437,
    category: "ATA 34",
    question: "Is there an interrupted test of the ADC system?",
    options: {
      a: "Yes",
      b: "No",
      c: "Only during flight"
    },
    correct: "b"
  },
  {
    id: 438,
    category: "ATA 34",
    question: "Which system uses an average of both ADCs for its calculations?",
    options: {
      a: "AFCS",
      b: "ADC",
      c: "Standby System"
    },
    correct: "a"
  },
  {
    id: 439,
    category: "ATA 34",
    question: "What is the purpose of the Attitude Heading and Reference Systems (AHRS)?",
    options: {
      a: "Provide weather information",
      b: "Detect turbulence",
      c: "Determine aircraft attitude and heading"
    },
    correct: "c"
  },
  {
    id: 440,
    category: "ATA 34",
    question: "What is the pitch accuracy provided by the LITEF Model LCR-100 AHRS?",
    options: {
      a: "\u00b1 1 degree",
      b: "\u00b1 0.5 degrees",
      c: "\u00b1 2 degrees"
    },
    correct: "b"
  },
  {
    id: 441,
    category: "ATA 34",
    question: "How many Fibre Optic Gyros (FOGs) sensors are there in each AHRS Unit?",
    options: {
      a: "Two",
      b: "Three",
      c: "Four"
    },
    correct: "b"
  },
  {
    id: 442,
    category: "ATA 34",
    question: "Which bus is used to power the Co-Pilots AHRS PRI on AHRS 1?",
    options: {
      a: "DC Essential Bus",
      b: "No 1 DC Primary Bus",
      c: "No 2 DC Primary Bus"
    },
    correct: "b"
  },
  {
    id: 443,
    category: "ATA 34",
    question: "What does the Slew Controller's SET HDG switch allow the pilot to do?",
    options: {
      a: "Adjust the vertical speed",
      b: "Manually slew the AHRS heading output",
      c: "Activate turbulence detection"
    },
    correct: "b"
  },
  {
    id: 444,
    category: "ATA 34",
    question: "Which AHRS communicates with MFDs 3 and 4 under normal conditions?",
    options: {
      a: "AHRS 1",
      b: "AHRS 2",
      c: "Both AHRS 1 and AHRS 2"
    },
    correct: "b"
  },
  {
    id: 445,
    category: "ATA 34",
    question: "Where is the Magnetic Sensor Unit (Flux Valve) located?",
    options: {
      a: "Behind the MFDs",
      b: "In the tail of the aircraft",
      c: "Under the cockpit floor"
    },
    correct: "b"
  },
  {
    id: 446,
    category: "ATA 34",
    question: "What is the commanded slew rate for the first 3 seconds on the Slew Controller?",
    options: {
      a: "4\u00b0 per second",
      b: "2\u00b0 per second",
      c: "8\u00b0 per second"
    },
    correct: "b"
  },
  {
    id: 447,
    category: "ATA 34",
    question: "What is the purpose of the GPS data in the AHRS system?",
    options: {
      a: "Adjust the vertical speed",
      b: "Eliminate drift",
      c: "Control the standby compass"
    },
    correct: "b"
  },
  {
    id: 448,
    category: "ATA 34",
    question: "Under normal conditions Which displays show the Vertical Speed Indication (VSI) from AHRS 2?",
    options: {
      a: "MFDs 1, 2, and 5",
      b: "MFDs 3 and 4",
      c: "PFD ARC and NAV Full"
    },
    correct: "b"
  },
  {
    id: 449,
    category: "ATA 34",
    question: "What causes an AHRS Mis-compare?",
    options: {
      a: "Different temperature settings",
      b: "Roll differs by 6 degrees or more",
      c: "Rolling of the aircraft"
    },
    correct: "b"
  },
  {
    id: 450,
    category: "ATA 34",
    question: "How long does normal alignment on the ground take for the AHRS system?",
    options: {
      a: "15 seconds",
      b: "30 seconds",
      c: "55 seconds"
    },
    correct: "b"
  },
  {
    id: 451,
    category: "ATA 34",
    question: "Which MFDs does AHRS 1 communicate with under normal conditions?",
    options: {
      a: "MFDs 1, 2, and 5",
      b: "MFDs 3 and 4",
      c: "MFDs 1, 2, 3, 4, and 5"
    },
    correct: "a"
  },
  {
    id: 452,
    category: "ATA 34",
    question: "What controls the pitch scale and the sky/ground color on the Primary Flight Displays?",
    options: {
      a: "Compass Control Unit",
      b: "AHRS pitch",
      c: "Slew Controller"
    },
    correct: "b"
  },
  {
    id: 453,
    category: "ATA 34",
    question: "How is the Standby Attitude Indicator powered if the #1 DC Primary Bus fails?",
    options: {
      a: "Emergency Battery",
      b: "#2 DC Primary Bus",
      c: "Standby Compass"
    },
    correct: "a"
  },
  {
    id: 454,
    category: "ATA 34",
    question: "What happens if the Emergency Battery Test displays 'EMER PWR and GOOD'?",
    options: {
      a: "The emergency battery is discharged",
      b: "Emergency power is available and >50%",
      c: "Emergency power is unavailable"
    },
    correct: "b"
  },
  {
    id: 455,
    category: "ATA 34",
    question: "How is the Standby Attitude Indicator power switched on?",
    options: {
      a: "OFF/ARM push button",
      b: "Emergency Battery Test",
      c: "Cage knob"
    },
    correct: "a"
  },
  {
    id: 456,
    category: "ATA 34",
    question: "What is the hazard area for a helicopter within a 270-degree forward sector of the nose?",
    options: {
      a: "50 feet",
      b: "100 feet",
      c: "200 feet"
    },
    correct: "b"
  },
  {
    id: 457,
    category: "ATA 34",
    question: "Which button on the P700 WXR Controller initiates the turbulence detection function?",
    options: {
      a: "CR",
      b: "TRB",
      c: "TGT"
    },
    correct: "b"
  },
  {
    id: 458,
    category: "ATA 34",
    question: "In ground mapping mode, what color represents the highest returns on the P700 WXR?",
    options: {
      a: "Blue",
      b: "Yellow",
      c: "Red"
    },
    correct: "c"
  },
  {
    id: 459,
    category: "ATA 34",
    question: "When an intruder transponder transmission is detected, what does the TCAS in the aircraft compute?",
    options: {
      a: "Range between your aircraft and the intruder",
      b: "Closing rate between your aircraft and the intruder",
      c: "Both"
    },
    correct: "c"
  },
  {
    id: 460,
    category: "ATA 34",
    question: "Where is the TCAS Processor located?",
    options: {
      a: "On the upper antenna",
      b: "On the lower antenna",
      c: "In the transition area behind the ramp"
    },
    correct: "c"
  },
  {
    id: 461,
    category: "ATA 34",
    question: "Where is the TCAS Configuration Module located?",
    options: {
      a: "On the upper antenna",
      b: "On the lower antenna",
      c: "In the transition area near the TCAS Processor"
    },
    correct: "c"
  },
  {
    id: 462,
    category: "ATA 34",
    question: "How is the TCAS information displayed on MFDs?",
    options: {
      a: "By default",
      b: "By selecting OVLY >> TCAS",
      c: "By pressing CTL >> BAND"
    },
    correct: "b"
  },
  {
    id: 463,
    category: "ATA 34",
    question: "How is a THREAT indicated in TCAS I symbology?",
    options: {
      a: "An open blue diamond",
      b: "A filled blue diamond",
      c: "A filled yellow circle"
    },
    correct: "c"
  },
  {
    id: 464,
    category: "ATA 34",
    question: "What happens following a Resolution Alert (RA) in TCAS II?",
    options: {
      a: "Immediate descent",
      b: "Clear of conflict announced",
      c: "Climb performance increased"
    },
    correct: "b"
  },
  {
    id: 465,
    category: "ATA 34",
    question: "When are Climb RAs inhibited in TCAS II?",
    options: {
      a: "Airspeed is less than 100 KIAS",
      b: "Altitude is greater than 5000 feet MSL",
      c: "During One Engine Inoperative (OEI)"
    },
    correct: "a"
  },
  {
    id: 466,
    category: "ATA 34",
    question: "What is the primary purpose of the Honeywell Mk XXII EGPWS in the S92?",
    options: {
      a: "To control the autopilot system",
      b: "To prevent Controlled Flight Into Terrain (CFIT)",
      c: "To manage radio communication"
    },
    correct: "b"
  },
  {
    id: 467,
    category: "ATA 34",
    question: "Which altitude reference does the EGPWS use to calculate the height above the ground?",
    options: {
      a: "Barometric altitude",
      b: "Geometric altitude",
      c: "Radar altitude"
    },
    correct: "b"
  },
  {
    id: 468,
    category: "ATA 34",
    question: "What happens if GPS data is not available for the EGPWS Terrain system?",
    options: {
      a: "Terrain system becomes inactive",
      b: "A warning is issued",
      c: "No impact on the system"
    },
    correct: "a"
  },
  {
    id: 469,
    category: "ATA 34",
    question: "Which sensor is NOT used by the EGPWS to determine the active mode?",
    options: {
      a: "RADALT",
      b: "AFCS",
      c: "TCAS"
    },
    correct: "c"
  },
  {
    id: 470,
    category: "ATA 34",
    question: "In the EGPWS mapping, what color is used to represent terrain 0 - 500 feet from the aircraft?",
    options: {
      a: "Light green",
      b: "Dark yellow",
      c: "Red"
    },
    correct: "b"
  },
  {
    id: 471,
    category: "ATA 34",
    question: "Which mode in the EGPWS is used for alerts related to excessive terrain closure rate after take-off?",
    options: {
      a: "Mode 2",
      b: "Mode 4",
      c: "Mode 6"
    },
    correct: "a"
  },
  {
    id: 472,
    category: "ATA 34",
    question: "What does the Look Ahead function in the EGPWS system compare?",
    options: {
      a: "Aircraft altitude with terrain altitude",
      b: "Aircraft flight path with known runways",
      c: "Time from take-off with the current time"
    },
    correct: "b"
  },
  {
    id: 473,
    category: "ATA 34",
    question: "When does the EGPWS display TERRAIN in red on the PFD?",
    options: {
      a: "20 seconds from hitting the hazard",
      b: "30 seconds from hitting the hazard",
      c: "40 seconds from hitting the hazard"
    },
    correct: "a"
  },
  {
    id: 474,
    category: "ATA 34",
    question: "In the EGPWS, what does the TOO LOW GEAR alert indicate?",
    options: {
      a: "Insufficient terrain clearance",
      b: "Landing gear not selected down",
      c: "Excessive closure rate with terrain"
    },
    correct: "b"
  },
  {
    id: 475,
    category: "ATA 34",
    question: "When does the Mode 3 in EGPWS provide alerts?",
    options: {
      a: "During normal approach",
      b: "During take-off",
      c: "During cruise"
    },
    correct: "b"
  },
  {
    id: 476,
    category: "ATA 34",
    question: "What is the primary source of navigation for the FMS?",
    options: {
      a: "DME",
      b: "VOR",
      c: "GPS"
    },
    correct: "c"
  },
  {
    id: 477,
    category: "ATA 34",
    question: "Where are the GPS antennas mounted on the helicopter?",
    options: {
      a: "On the wings",
      b: "On the nose",
      c: "Mid-way along the tail section"
    },
    correct: "c"
  },
  {
    id: 478,
    category: "ATA 34",
    question: "What is the purpose of the Configuration Module?",
    options: {
      a: "Fuel management",
      b: "Navigation data transfer",
      c: "Aircraft-specific configuration parameters"
    },
    correct: "c"
  },
  {
    id: 479,
    category: "ATA 34",
    question: "Which database is responsible for providing IFR Approach information?",
    options: {
      a: "Company Database",
      b: "Navigation Database",
      c: "Pilot Data Storage"
    },
    correct: "b"
  },
  {
    id: 480,
    category: "ATA 34",
    question: "What is the purpose of the Wide Area Augmentation System (WAAS)?",
    options: {
      a: "Fuel management",
      b: "Improved GPS accuracy",
      c: "Memory card transfer"
    },
    correct: "b"
  },
  {
    id: 481,
    category: "ATA 34",
    question: "What does RAIM stand for?",
    options: {
      a: "Receiver Autonomous Integrity Monitoring",
      b: "Radio and Instrument Monitoring",
      c: "Range Adjustment and Inclusion Monitoring"
    },
    correct: "a"
  },
  {
    id: 482,
    category: "ATA 34",
    question: "How many satellites are required for the GPS to determine position and enter NAV mode?",
    options: {
      a: "Three",
      b: "Four",
      c: "Five"
    },
    correct: "b"
  },
  {
    id: 483,
    category: "ATA 34",
    question: "What does the Best Computed Position (BCP) represent?",
    options: {
      a: "The most accurate GPS satellite",
      b: "The predicted flight path",
      c: "The calculated aircraft position"
    },
    correct: "c"
  },
  {
    id: 484,
    category: "ATA 34",
    question: "What is the purpose of the Circle of Position?",
    options: {
      a: "GPS satellite alignment",
      b: "Navigation sensor accuracy",
      c: "Weather monitoring"
    },
    correct: "b"
  },
  {
    id: 485,
    category: "ATA 34",
    question: "What is the purpose of the Power On Self-Test (POST)?",
    options: {
      a: "Check weather conditions",
      b: "Check FMS hardware and software components",
      c: "Initiate navigation"
    },
    correct: "b"
  },
  {
    id: 486,
    category: "ATA 34",
    question: "How can a temporary waypoint be set using the Slew Controllers?",
    options: {
      a: "Pressing ENTER key",
      b: "Pressing any of the 3 red HOOK buttons",
      c: "Pressing the ON/OFF DIM key"
    },
    correct: "b"
  },
  {
    id: 487,
    category: "ATA 34",
    question: "What type of tests are included in the Dynamic Tests on Maintenance Pages?",
    options: {
      a: "Navigation tests",
      b: "Fuel system tests",
      c: "Dynamic Approach Tests"
    },
    correct: "c"
  },
  {
    id: 488,
    category: "ATA 34",
    question: "How is a temporary waypoint identified on the FMS?",
    options: {
      a: "Designator R01, R02, etc.",
      b: "Latitude/Longitude display",
      c: "Weather display"
    },
    correct: "a"
  },
  {
    id: 489,
    category: "ATA 34",
    question: "If the heating element of the left hand pitot system fails what notification will be displayed?",
    options: {
      a: "ADC 1 Fail",
      b: "Pitot heat 1",
      c: "Pitot heat 3"
    },
    correct: "b"
  },
  {
    id: 490,
    category: "ATA 34",
    question: "If the heating element of the standby pitot system fails what notification will be displayed?",
    options: {
      a: "Pitot heat 1",
      b: "Standby heat fail",
      c: "Pitot heat 3"
    },
    correct: "c"
  },
  {
    id: 491,
    category: "ATA 34",
    question: "ADF bearing arrow 1 is shown in what colour?",
    options: {
      a: "Blue",
      b: "Green",
      c: "White"
    },
    correct: "a"
  },
  {
    id: 492,
    category: "ATA 34",
    question: "ADF bearing arrow 2 is shown in what colour?",
    options: {
      a: "Blue",
      b: "Green",
      c: "White"
    },
    correct: "b"
  },
  {
    id: 493,
    category: "ATA 34",
    question: "Vertical and Lateral deviations of the ILS indication is display with?",
    options: {
      a: "Magenta Diamond",
      b: "Magenta Cross",
      c: "White Cross"
    },
    correct: "a"
  },
  {
    id: 494,
    category: "ATA 34",
    question: "At what Frequency does the ILS system operate?",
    options: {
      a: "100 - 107 MHz",
      b: "108 - 112 MHz",
      c: "112 - 117 MHz"
    },
    correct: "b"
  },
  {
    id: 495,
    category: "ATA 34",
    question: "VOR 1 beacon information is displayed in what colour?",
    options: {
      a: "Blue",
      b: "Green",
      c: "White"
    },
    correct: "a"
  },
  {
    id: 496,
    category: "ATA 34",
    question: "VOR 1 Beacon is displayed on the Co-pilots MFD with what selection?",
    options: {
      a: "NAV on DCP 1",
      b: "NAV on DCP 2",
      c: "VOR on DCP 1"
    },
    correct: "a"
  },
  {
    id: 497,
    category: "ATA 34",
    question: "Glideslope frequency is paired with?",
    options: {
      a: "Comm 1",
      b: "VOR",
      c: "FMS"
    },
    correct: "b"
  },
  {
    id: 498,
    category: "ATA 34",
    question: "How is full functioning of the FMS displayed?",
    options: {
      a: "BIT pass displayed on MFD STATUS page",
      b: "Blue Honeywell Copyright dissapears ",
      c: "S92A and 6 sub systems PASSED statements"
    },
    correct: "c"
  },
  {
    id: 499,
    category: "ATA 34",
    question: "The slew cursor will display on Right Side MFD's?",
    options: {
      a: "When the Pilot uses slew control thumb switch",
      b: "When the Co-pilot uses slow control thumb switch",
      c: "either pilot or co-pilot use slew control thumb switch"
    },
    correct: "a"
  },
  {
    id: 500,
    category: "ATA 34",
    question: "Test of the DME system are initated from?",
    options: {
      a: "RTU 1",
      b: "RTU 2",
      c: "DCP 1"
    },
    correct: "a"
  },
  {
    id: 501,
    category: "ATA 34",
    question: "Which pitot system feeds ADC 1?",
    options: {
      a: "RH Pitot",
      b: "LH Pitot and standby Pitot",
      c: "LH Pitot"
    },
    correct: "c"
  },
  {
    id: 502,
    category: "ATA 34",
    question: "AHRS two will normally displays Vertical speed on which MFDs?",
    options: {
      a: "Co-Pilots MFDs",
      b: "Pilots MFDs",
      c: "All MFDS"
    },
    correct: "b"
  },
  {
    id: 503,
    category: "ATA 34",
    question: "Where are the results of a compass swing stored? ",
    options: {
      a: "Removeable programable module attached to the AHRS",
      b: "Programmed into the MFD",
      c: "Within the MDC"
    },
    correct: "a"
  },
  {
    id: 504,
    category: "ATA 34",
    question: "What are the minimum points required for a compass swing ? ",
    options: {
      a: "4",
      b: "8",
      c: "12"
    },
    correct: "b"
  },
  {
    id: 505,
    category: "ATA 34",
    question: "The TCAS system can be tested from?",
    options: {
      a: "RTU 1 ",
      b: "TCAS control panel",
      c: "The Avionics health page"
    },
    correct: "c"
  },
  {
    id: 506,
    category: "ATA 34",
    question: "How can the EPWG databasae be updated",
    options: {
      a: "No update is required",
      b: "Via a smart cable fitted the EPWG computer",
      c: "System update Via MFD 3"
    },
    correct: "b"
  },




/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */



  {
    id: 507,
    category: "ATA 49",
    question: "What is the primary function of the Honeywell Model 150 APU?",
    options: {
      a: "Provide hydraulic power",
      b: "Supply cabin heat and Electrical power",
      c: "Drive the main rotor"
    },
    correct: "b"
  },
  {
    id: 508,
    category: "ATA 49",
    question: "Where does the APU draw air for combustion?",
    options: {
      a: "Bottom of the aircraft",
      b: "From the left sponson fuel tank",
      c: "Top of the aircraft"
    },
    correct: "c"
  },
  {
    id: 509,
    category: "ATA 49",
    question: "What component provides backup AC power to the aircraft electrical system?",
    options: {
      a: "APU AC Generator",
      b: "Hydraulic Starter Motor",
      c: "Electronic Sequencing Unit"
    },
    correct: "a"
  },
  {
    id: 510,
    category: "ATA 49",
    question: "How is the APU oil system lubrication achieved?",
    options: {
      a: "Splash lubrication",
      b: "Pressure lubrication",
      c: "Gravity lubrication"
    },
    correct: "b"
  },
  {
    id: 511,
    category: "ATA 49",
    question: "What is the function of the hydraulic accumulator in the APU?",
    options: {
      a: "Cool the turbine stage combustion chamber",
      b: "Supply starting pressure to the starter motor",
      c: "Drive the APU AC Generator"
    },
    correct: "b"
  },
  {
    id: 512,
    category: "ATA 49",
    question: "Where is the APU air inlet located?",
    options: {
      a: "Bottom of the main rotor pylon",
      b: "On the right side of the aircraft",
      c: "Top of the main rotor pylon"
    },
    correct: "c"
  },
  {
    id: 513,
    category: "ATA 49",
    question: "What is the purpose of the Heat Shield in the APU?",
    options: {
      a: "Cool the APU exhaust gases",
      b: "Contain a fire",
      c: "Filter the air entering the APU"
    },
    correct: "b"
  },
  {
    id: 514,
    category: "ATA 49",
    question: "What happens if the oil pressure is too low in the APU on the ground?",
    options: {
      a: "ESU initiates APU shutdown",
      b: "Oil filter is bypassed",
      c: "High oil temperature switch closes"
    },
    correct: "a"
  },
  {
    id: 515,
    category: "ATA 49",
    question: "Where is the APU AC Generator mounted?",
    options: {
      a: "On the compressor housing",
      b: "On the accessory gearbox",
      c: "On the APU integral oil system"
    },
    correct: "b"
  },
  {
    id: 516,
    category: "ATA 49",
    question: "What provides lubrication for all gears, shafts, and bearings in the APU?",
    options: {
      a: "Splash lubrication",
      b: "Oil filter",
      c: "Rotary oil pump"
    },
    correct: "c"
  },
  {
    id: 517,
    category: "ATA 49",
    question: "What does the APU Air Inlet protect against?",
    options: {
      a: "Fuel contamination",
      b: "FOD (Foreign Object Debris)",
      c: "Oil foaming"
    },
    correct: "b"
  },
  {
    id: 518,
    category: "ATA 49",
    question: "What is the purpose of the accessory drive section in the APU?",
    options: {
      a: "Cool the APU exhaust gases",
      b: "Drive the main rotor",
      c: "Provide mounting and drive link to various components"
    },
    correct: "c"
  },
  {
    id: 519,
    category: "ATA 49",
    question: "Where is the oil filter element located in the APU?",
    options: {
      a: "Inside the combustion chamber",
      b: "At the front of the gearbox",
      c: "In the oil manifold"
    },
    correct: "b"
  },
  {
    id: 520,
    category: "ATA 49",
    question: "What is the function of the differential pressure regulator in the APU Fuel Control Unit?",
    options: {
      a: "Control the APU speed",
      b: "Provide constant fuel pressure",
      c: "Regulate oil pressure"
    },
    correct: "b"
  },
  {
    id: 521,
    category: "ATA 49",
    question: "How is the APU air inlet protected from FOD?",
    options: {
      a: "By a coarse screen with rectangular apertures",
      b: "By the APU exhaust",
      c: "By a fire detector"
    },
    correct: "a"
  },
  {
    id: 522,
    category: "ATA 49",
    question: "What does the magnetic drain plug in the APU do?",
    options: {
      a: "Provide backup AC power",
      b: "Gather ferrous metal particles",
      c: "Control the APU speed"
    },
    correct: "b"
  },
  {
    id: 523,
    category: "ATA 49",
    question: "From where is engine bleed air extracted from the APU?",
    options: {
      a: "Turbine housing",
      b: "Compressor discharge",
      c: "Accessory section"
    },
    correct: "b"
  },
  {
    id: 524,
    category: "ATA 49",
    question: "What diverts bleed air when it is not required by the APU?",
    options: {
      a: "DCU",
      b: "Hydraulic starter motor",
      c: "ESU"
    },
    correct: "c"
  },
  {
    id: 525,
    category: "ATA 49",
    question: "Which system provides hydraulic pressure for normal accumulator recharging?",
    options: {
      a: "Accessory section",
      b: "Hydraulic starter motor",
      c: "No.3 hydraulic system"
    },
    correct: "c"
  },
  {
    id: 526,
    category: "ATA 49",
    question: "What is the purpose of the accumulator in the APU system?",
    options: {
      a: "Cooling the engine",
      b: "Providing hydraulic pre-charge for start",
      c: "Fuel regulation"
    },
    correct: "b"
  },
  {
    id: 527,
    category: "ATA 49",
    question: "Where is the accumulator pressure gauge mounted?",
    options: {
      a: "Cabin roof",
      b: "Accessory section",
      c: "Turbine housing"
    },
    correct: "a"
  },
  {
    id: 528,
    category: "ATA 49",
    question: "What does the APU start valve control?",
    options: {
      a: "Oil flow",
      b: "Hydraulic pressure to starter motor",
      c: "Fuel shut-off"
    },
    correct: "b"
  },
  {
    id: 529,
    category: "ATA 49",
    question: "What are the APU ignition components?",
    options: {
      a: "Oil pump, FCU",
      b: "Igniter unit, ignition lead",
      c: "Start valve, starter motor"
    },
    correct: "b"
  },
  {
    id: 530,
    category: "ATA 49",
    question: "At what Ng percentage does the APU start valve close?",
    options: {
      a: "10%",
      b: "50%",
      c: "94.5%"
    },
    correct: "b"
  },
  {
    id: 531,
    category: "ATA 49",
    question: "What does the APU control system manage?",
    options: {
      a: "Electrical buses",
      b: "Engine speed",
      c: "APU operations"
    },
    correct: "c"
  },
  {
    id: 532,
    category: "ATA 49",
    question: "Where is the ESU located?",
    options: {
      a: "Cockpit overhead console",
      b: "Rear avionics compartment",
      c: "Accessory section"
    },
    correct: "b"
  },
  {
    id: 533,
    category: "ATA 49",
    question: "What completes a power-on self-test when power is applied?",
    options: {
      a: "APU accumulator",
      b: "ESU",
      c: "APU start valve"
    },
    correct: "b"
  },
  {
    id: 534,
    category: "ATA 49",
    question: "Where is the motional speed sensor located?",
    options: {
      a: "Turbine housing",
      b: "Accessory section",
      c: "Inboard / right-hand side of the APU"
    },
    correct: "c"
  },
  {
    id: 535,
    category: "ATA 49",
    question: "How is the APU shut down in case of a high oil temperature while in flight?",
    options: {
      a: "Automatic shutdown",
      b: "Pilot command",
      c: "Fuel control unit"
    },
    correct: "b"
  },
  {
    id: 536,
    category: "ATA 49",
    question: "What is recorded by the hour meter assembly?",
    options: {
      a: "APU flight hours",
      b: "Total operating hours",
      c: "Oil temperature"
    },
    correct: "b"
  },
  {
    id: 537,
    category: "ATA 49",
    question: "What occurs when the FIRE APU/ARM pushbutton is pushed?",
    options: {
      a: "Apu starts",
      b: "Fire extinguisher system arms",
      c: "Low oil pressure"
    },
    correct: "b"
  },
  {
    id: 538,
    category: "ATA 49",
    question: "Which caution will be displayed if an automatic shutdown occurs in flight?",
    options: {
      a: "APU ACCUM LOW",
      b: "APU FAIL",
      c: "APU FAULT"
    },
    correct: "b"
  },
  {
    id: 539,
    category: "ATA 49",
    question: "Where can additional APU system feedback be displayed?",
    options: {
      a: "EICAS page",
      b: "Maintenance pages",
      c: "ANALOG PARAMETERS (2 OF 2)"
    },
    correct: "b"
  },
  {
    id: 540,
    category: "ATA 49",
    question: "What does the FIRE APU/ARM warning light/pushbutton provide a visual warning of?",
    options: {
      a: "Low oil pressure",
      b: "A fire in the APU compartment",
      c: "Hydraulic pressure"
    },
    correct: "b"
  },
  {
    id: 541,
    category: "ATA 49",
    question: "What happens when the FIRE APU/ARM pushbutton is pushed?",
    options: {
      a: "APU shuts down",
      b: "ESU shuts down",
      c: "Hydraulic pressure increases"
    },
    correct: "a"
  },
  {
    id: 542,
    category: "ATA 49",
    question: "What component controls the APU?",
    options: {
      a: "Fuel conditioning unit",
      b: "Electronic sequencing unit",
      c: "DCU"
    },
    correct: "b"
  },
  {
    id: 543,
    category: "ATA 49",
    question: "Where is the Electronic sequencing unit?",
    options: {
      a: "LH Avionic bay",
      b: "APU bay",
      c: "Tail Transition"
    },
    correct: "c"
  },
  {
    id: 544,
    category: "ATA 49",
    question: "How many fuel nozzles are there are fitted to the APU?",
    options: {
      a: "3 Primary and 3 Secondary",
      b: "3",
      c: "1 Starting and 5 Main"
    },
    correct: "a"
  },
  {
    id: 545,
    category: "ATA 49",
    question: "How is the APU starter Power?",
    options: {
      a: "Air Starter",
      b: "Hydraulic Starter",
      c: "Electrical Starter"
    },
    correct: "b"
  },
  {
    id: 546,
    category: "ATA 49",
    question: "During normal operation how is the APU accumulator charged on the ground with rotors stationary?",
    options: {
      a: "Hand pump",
      b: "Ground check out pump",
      c: "Secondary accumulator"
    },
    correct: "b"
  },
  {
    id: 547,
    category: "ATA 49",
    question: "During normal operation how is the APU accumulator charged in flight?",
    options: {
      a: "N\u00b03 Mechanical Hydraulic pump",
      b: "Hand Pump",
      c: "Secondary accumulator"
    },
    correct: "a"
  },
  {
    id: 548,
    category: "ATA 49",
    question: "How can we ensure complete discharge of the APU accumulator?",
    options: {
      a: "Piston visible in accumulator sight glass",
      b: "Pressure gauge ",
      c: "MFD Status page"
    },
    correct: "a"
  },
  {
    id: 549,
    category: "ATA 49",
    question: "Where is the APU start valve located?",
    options: {
      a: "In the APU bay",
      b: "LH Engine bay",
      c: "Piggy backed on the APU accumulator"
    },
    correct: "c"
  },
  {
    id: 550,
    category: "ATA 49",
    question: "What is the fully charge pressure of the APU accumulator?",
    options: {
      a: "4000 psi",
      b: "2000 psi",
      c: "400 psi"
    },
    correct: "a"
  },
  {
    id: 551,
    category: "ATA 49",
    question: "What is the nitrogen base charge of the APU accumulator?",
    options: {
      a: "2000 psi",
      b: "4000 psi",
      c: "400 psi"
    },
    correct: "a"
  },
  {
    id: 552,
    category: "ATA 49",
    question: "At what pressure will the APU accumulator charge be initiated?",
    options: {
      a: "3450 psi",
      b: "3000 psi",
      c: "0 psi"
    },
    correct: "a"
  },
  {
    id: 553,
    category: "ATA 49",
    question: "What fault categories are associated with the APU?",
    options: {
      a: "Critical",
      b: "Primary and Secondary",
      c: "Safety and Protective"
    },
    correct: "c"
  },
  {
    id: 554,
    category: "ATA 49",
    question: "How many temperature probes are fitted in the APU exhaust?",
    options: {
      a: "One",
      b: "Two",
      c: "Three"
    },
    correct: "a"
  },
  {
    id: 555,
    category: "ATA 49",
    question: "How many ignitors are fitted to the APU?",
    options: {
      a: "1 Starter and 1 Main",
      b: "One",
      c: "Two"
    },
    correct: "b"
  },
  {
    id: 556,
    category: "ATA 49",
    question: "What services are provided to the aircraft by the APU?",
    options: {
      a: "Electrical",
      b: "Air",
      c: "Both"
    },
    correct: "c"
  },
  {
    id: 557,
    category: "ATA 49",
    question: "How is the APU mounted to the airframe?",
    options: {
      a: "Racetrack fitting",
      b: "Two forward struts and a sliding rear fitting",
      c: "Dog bones links"
    },
    correct: "b"
  },
  {
    id: 558,
    category: "ATA 49",
    question: "Where does the APU get its fuel supply?",
    options: {
      a: "LH Sponson only",
      b: "RH Sponson only",
      c: "Both"
    },
    correct: "a"
  },
  {
    id: 559,
    category: "ATA 49",
    question: "How is the APU oil level checked?",
    options: {
      a: "MFD Status page",
      b: "Sight Glass",
      c: "Dip Stick"
    },
    correct: "c"
  },





/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */



  {
    id: 560,
    category: "ATA 70",
    question: "What does the EPAC page provide the means to perform?",
    options: {
      a: "Weight on wheel checks",
      b: "Power assurance checks",
      c: "Flight data calculations"
    },
    correct: "b"
  },
  {
    id: 561,
    category: "ATA 70",
    question: "How often is the Engine Power Assurance Check required?",
    options: {
      a: "Once a week",
      b: "Once a month",
      c: "At least once a day"
    },
    correct: "c"
  },
  {
    id: 562,
    category: "ATA 70",
    question: "Which system is needed to execute power assurance checks performed by the DCUs?",
    options: {
      a: "FADEC",
      b: "MDC",
      c: "AVCC"
    },
    correct: "a"
  },
  {
    id: 563,
    category: "ATA 70",
    question: "Where are the EPAC values displayed for engine 1?",
    options: {
      a: "Co-pilots MFDs",
      b: "Pilots MFDs",
      c: "All MFDs"
    },
    correct: "a"
  },
  {
    id: 564,
    category: "ATA 70",
    question: "When does the EPAC target airspeed readout display '120'?",
    options: {
      a: "On ground",
      b: "In the air",
      c: "During a power failure"
    },
    correct: "b"
  },
  {
    id: 565,
    category: "ATA 70",
    question: "What does the XFILL command do?",
    options: {
      a: "Initiates engine test",
      b: "Performs a cross fill of stored data",
      c: "Resets engine parameters"
    },
    correct: "b"
  },
  {
    id: 566,
    category: "ATA 70",
    question: "How are EPAC data failures indicated?",
    options: {
      a: "In a yellow warning annunciation",
      b: "In a red warning annunciation",
      c: "As pop-up alerts"
    },
    correct: "b"
  },
  {
    id: 567,
    category: "ATA 70",
    question: "What does the STATUS line on the power assurance display indicate?",
    options: {
      a: "Current aircraft conditions",
      b: "Results of the EPAC check",
      c: "The state of the EPAC process"
    },
    correct: "c"
  },
  {
    id: 568,
    category: "ATA 70",
    question: "What does the first box on the power assurance display show?",
    options: {
      a: "Error messages",
      b: "Current aircraft conditions for each engine",
      c: "TGT margin values"
    },
    correct: "b"
  },
  {
    id: 569,
    category: "ATA 70",
    question: "How many air and ground checks are stored in the EPAC data?",
    options: {
      a: "5",
      b: "10",
      c: "15"
    },
    correct: "b"
  },
  {
    id: 570,
    category: "ATA 70",
    question: "What does the TAS WINDOW error message on the EPAC indicate?",
    options: {
      a: "Unstable true airspeed",
      b: "Unstable torque",
      c: "Unstable attitude"
    },
    correct: "a"
  },
  {
    id: 571,
    category: "ATA 70",
    question: "When is the EPAC Cross Fill (XFILL) command available?",
    options: {
      a: "In-flight only",
      b: "On the ground using APU or external power",
      c: "Both a and b"
    },
    correct: "b"
  },
  {
    id: 572,
    category: "ATA 70",
    question: "Where are EPAC's calculated?",
    options: {
      a: "EECU",
      b: "Data Concentrator Unit",
      c: "FADEC"
    },
    correct: "b"
  },
  {
    id: 573,
    category: "ATA 70",
    question: "Where can the EPAC pages be displayed?",
    options: {
      a: "RTU 1",
      b: "MFD Utility Page",
      c: "FADEC Display"
    },
    correct: "b"
  },
  {
    id: 574,
    category: "ATA 70",
    question: "Where can the EPAC pages be displayed?",
    options: {
      a: "RTU 1",
      b: "MFD Utility Page",
      c: "FADEC Display"
    },
    correct: "b"
  },




/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */



  {
    id: 575,
    category: "ATA 71",
    question: "What is the purpose of the Demountable Power Package (DPP) for the GE CT7-8A engine?",
    options: {
      a: "Provide engine cooling",
      b: "Facilitate engine installation on the aircraft",
      c: "Enhance fuel efficiency"
    },
    correct: "b"
  },
  {
    id: 576,
    category: "ATA 71",
    question: "What provides rear engine lateral and vertical alignment in the GE CT7-8A engine?",
    options: {
      a: "Expandable bolt",
      b: "Struts and links",
      c: "Air intakes"
    },
    correct: "b"
  },
  {
    id: 577,
    category: "ATA 71",
    question: "What is the function of the Inlet Particle Separator (IPS) in the GE CT7-8A engine?",
    options: {
      a: "Reduce engine vibrations",
      b: "Prevent FOD damage to the engine",
      c: "Cool the engine compartments"
    },
    correct: "b"
  },
  {
    id: 578,
    category: "ATA 71",
    question: "Where are the compressor bleed ports located on the GE CT7-8A engine?",
    options: {
      a: "Near the front of the engine",
      b: "At the 03:00 and 09:00 positions",
      c: "At the exhaust bulkhead"
    },
    correct: "b"
  },
  {
    id: 579,
    category: "ATA 71",
    question: "What do the five combined drains in the CT7-8 engine feed into?",
    options: {
      a: "Fuel tank",
      b: "Environmental drain tank",
      c: "Oil lubrication system"
    },
    correct: "b"
  },
  {
    id: 580,
    category: "ATA 71",
    question: "What provides rotation to the engine compressor and accessories during the start cycle?",
    options: {
      a: "Pneumatic starter",
      b: "Electric starter",
      c: "Manual crankshaft"
    },
    correct: "a"
  },
  {
    id: 581,
    category: "ATA 71",
    question: "How are engine vibrations detected in the GE CT7-8A engine?",
    options: {
      a: "By accelerometers",
      b: "By strain gauges",
      c: "By pressure sensors"
    },
    correct: "a"
  },
  {
    id: 582,
    category: "ATA 71",
    question: "What separates the engine enclosure from surrounding areas in the airframe of the GE CT7-8A engine?",
    options: {
      a: "Expandable bolt",
      b: "Titanium firewalls",
      c: "Struts and links"
    },
    correct: "b"
  },
  {
    id: 583,
    category: "ATA 71",
    question: "What is the primary function of the Full Authority Digital Engine Control (FADEC) system in the GE CT7-8A engine?",
    options: {
      a: "Provide lighting control",
      b: "Control engine operation automatically",
      c: "Monitor fuel levels"
    },
    correct: "b"
  },
  {
    id: 584,
    category: "ATA 71",
    question: "How are the electrical harnesses color-coded in the GE CT7-8A engine?",
    options: {
      a: "Red, blue, green",
      b: "Green, yellow, blue",
      c: "Red, yellow, green"
    },
    correct: "b"
  },
  {
    id: 585,
    category: "ATA 71",
    question: "What is the purpose of the engine cleaning configuration known as 'single point'?",
    options: {
      a: "Increase fuel efficiency",
      b: "Reduce engine vibrations",
      c: "Introduce cleaning fluid to both engines from an external rig"
    },
    correct: "c"
  },
  {
    id: 586,
    category: "ATA 71",
    question: "When should the daily post-flight water rinse be performed for the GE CT7-8A engine?",
    options: {
      a: "Every 50 hours",
      b: "After 150 hours of operation",
      c: "In addition to scheduled cleaning"
    },
    correct: "c"
  },
  {
    id: 587,
    category: "ATA 71",
    question: "What must be pulled out before commencing the daily water rinse procedure in the GE CT7-8A engine?",
    options: {
      a: "Fuel Metering Unit",
      b: "RIPS CTRL circuit breakers",
      c: "FADEC components"
    },
    correct: "b"
  },
  {
    id: 588,
    category: "ATA 71",
    question: "What is the maximum lift capacity of the GE 2C9005001 sling for the CT7-8A engine?",
    options: {
      a: "500 lbs",
      b: "800 lbs",
      c: "1000 lbs"
    },
    correct: "b"
  },
  {
    id: 589,
    category: "ATA 71",
    question: "Why must the engine oil be removed if the GE CT7-8A engine is turned to a vertical position?",
    options: {
      a: "To prevent corrosion",
      b: "To prevent compressor rotor imbalance",
      c: "To reduce engine weight"
    },
    correct: "b"
  },
  {
    id: 590,
    category: "ATA 71",
    question: "Where is compressor wash fluid introduced to the aircraft",
    options: {
      a: "Via lance to engine intake",
      b: "single input point to engine compressor",
      c: "N\u00b01 via left hand attachment N\u00b02 via righnt hand attachment"
    },
    correct: "b"
  },
  {
    id: 591,
    category: "ATA 71",
    question: "Where does the cumbustion chamber drain exit the aircraft",
    options: {
      a: "into the engine exhaust",
      b: "Combined enviromental drain",
      c: "seperate drain"
    },
    correct: "c"
  },
  {
    id: 592,
    category: "ATA 71",
    question: "How are engine vibrations monitored",
    options: {
      a: "accelerometers front left and rear right of the engine",
      b: "Engine Mounts",
      c: "Expanding bolts"
    },
    correct: "a"
  },
  {
    id: 593,
    category: "ATA 71",
    question: "How is the engine supported",
    options: {
      a: "linked to internal firewall",
      b: "4 links to 3 struts and support tube at the front.",
      c: "2 forward dog bones links and 2 rear dog bone links"
    },
    correct: "b"
  },



/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */



  {
    id: 594,
    category: "ATA 78",
    question: "What component is responsible for stopping the swirling of exhaust gases and directing them into an exhaust tube?",
    options: {
      a: "de-swirl duct",
      b: "centre tailpipe body",
      c: "exhaust tailpipe"
    },
    correct: "a"
  },
  {
    id: 595,
    category: "ATA 78",
    question: "What effect does the air gap between the de-swirl duct and the airframe exhaust tailpipe tube create?",
    options: {
      a: "low-pressure venturi effect",
      b: "high-pressure venturi effect",
      c: "no effect"
    },
    correct: "a"
  },
  {
    id: 596,
    category: "ATA 78",
    question: "What purpose does the airflow through the engine compartment serve?",
    options: {
      a: "increase engine temperature",
      b: "cool the compartment",
      c: "create turbulence"
    },
    correct: "b"
  },
  {
    id: 597,
    category: "ATA 78",
    question: "Is the hardware interchangeable between the No. 1 engine and the No. 2 engine configuration?",
    options: {
      a: "yes",
      b: "no",
      c: "depends on torque"
    },
    correct: "a"
  },
  {
    id: 598,
    category: "ATA 78",
    question: "What precaution is mentioned regarding the drainage hole of the Centre Tailpipe Body?",
    options: {
      a: "position it at 12 o'clock",
      b: "position it at 3 o'clock",
      c: "position it at 6 o'clock"
    },
    correct: "c"
  },
  {
    id: 599,
    category: "ATA 78",
    question: "Where should the De-swirl Duct 'V' Clamp joints be positioned to avoid interference with Fire Detectors?",
    options: {
      a: "towards Fire Detectors",
      b: "away from Fire Detectors",
      c: "does not matter"
    },
    correct: "b"
  },
  {
    id: 600,
    category: "ATA 78",
    question: "What is the recommended procedure after fitting the hardware that requires a torque check?",
    options: {
      a: "run engine for 5min",
      b: "run engine for 10min",
      c: "run engine for 15min"
    },
    correct: "b"
  },
  {
    id: 601,
    category: "ATA 78",
    question: "What caution is advised when working around an operating engine due to the temperature of the exhaust gases?",
    options: {
      a: "use protective clothing",
      b: "no caution needed",
      c: "be cautious to avoid severe burns"
    },
    correct: "c"
  },



/* 
---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

---------------------------------------------------------------

--------------------------------------------------------------- */



  {
    id: 602,
    category: "Engine Manuals",
    question: "How are Temporary Revisions (TR) identified within GEK 112212 IETP?",
    options: {
      a: "Colored yellow",
      b: "Colored pink",
      c: "Colored blue"
    },
    correct: "a"
  },
  {
    id: 603,
    category: "Engine Manuals",
    question: "What identifies Incremental Changes in the IETP?",
    options: {
      a: "Sequential number",
      b: "Color coding",
      c: "Model statement"
    },
    correct: "a"
  },
  {
    id: 604,
    category: "Engine Manuals",
    question: "How are Service Bulletins grouped within the IETP?",
    options: {
      a: "Sequential number",
      b: "Color coding",
      c: "ATA sections"
    },
    correct: "c"
  },
  {
    id: 605,
    category: "Engine Manuals",
    question: "What color are Alert Service Bulletins within the IETP?",
    options: {
      a: "Yellow",
      b: "Pink",
      c: "Blue"
    },
    correct: "c"
  },
  {
    id: 606,
    category: "Engine Manuals",
    question: "What information is found in the Front Matter of GEK 112212 IETP?",
    options: {
      a: "Cleaning Practices",
      b: "Service Bulletin List",
      c: "Engine Directional References"
    },
    correct: "b"
  },
  {
    id: 607,
    category: "Engine Manuals",
    question: "How is the Effectivity of Data organized in GEK 112212 IETP?",
    options: {
      a: "By alphabetical order",
      b: "By ATA number",
      c: "By engine model"
    },
    correct: "c"
  },
  {
    id: 608,
    category: "Engine Manuals",
    question: "What does 'For ALL CT7-8' label indicate in the Effectivity of Data section?",
    options: {
      a: "Data for specific engine models",
      b: "Data for all CT7-8 engine models",
      c: "Data for CT7-8A model only"
    },
    correct: "b"
  },
  {
    id: 609,
    category: "Engine Manuals",
    question: "What does the Engine Maintenance Program consist of?",
    options: {
      a: "Service Bulletins compliance",
      b: "Performance trend monitoring",
      c: "Illustrated Parts Catalogue"
    },
    correct: "b"
  },
  {
    id: 610,
    category: "Engine Manuals",
    question: "What does MM 05 cover in the CT7-8 Engine Maintenance Program?",
    options: {
      a: "Fuel System",
      b: "Airworthiness Limitations",
      c: "Illustrated Parts Catalogue"
    },
    correct: "b"
  },
  {
    id: 611,
    category: "Engine Manuals",
    question: "What is the additional full cycle count added for each OEI event?",
    options: {
      a: "Two cycles",
      b: "Four cycles",
      c: "Six cycles"
    },
    correct: "b"
  },
  {
    id: 612,
    category: "Engine Manuals",
    question: "How are Service Intervals stipulated for GE CT7 engines?",
    options: {
      a: "Daily, 500 hrs, 1500 hrs",
      b: "Weekly, 1000 hrs, 2000 hrs",
      c: "Monthly, 750 hrs, 1800 hrs"
    },
    correct: "a"
  },
  {
    id: 613,
    category: "Engine Manuals",
    question: "What is the obligation regarding Exposed Hardware Inspection Requirements?",
    options: {
      a: "Optional for technicians",
      b: "Dependent on the weather",
      c: "Mandatory for technicians"
    },
    correct: "c"
  },
  {
    id: 614,
    category: "Engine Manuals",
    question: "When is a part listed as NO NUMBER in the Detailed Parts List?",
    options: {
      a: "When it's a spare part",
      b: "When it has not procurable",
      c: "When it's not illustrated"
    },
    correct: "b"
  },
  {
    id: 615,
    category: "Engine Manuals",
    question: "What does a pointing hand on an illustration signify?",
    options: {
      a: "A nontechnical change",
      b: "A significant technical change",
      c: "A system fault"
    },
    correct: "b"
  },
  {
    id: 616,
    category: "Engine Manuals",
    question: "What do the codes 8, 8A, 8A1, A5, A6, A7, B, B5, E, E5, F and F5 represent in Engine Model Coding?",
    options: {
      a: "Part numbers",
      b: "Usage codes",
      c: "Engine models"
    },
    correct: "c"
  },
  {
    id: 617,
    category: "Engine Manuals",
    question: "What does a Torque Motor Loop Fault indicate in the FADEC system?",
    options: {
      a: "Loss of Power Control",
      b: "Fault in torque motor drive circuit",
      c: "Dispatchable Fault"
    },
    correct: "b"
  },
  {
    id: 618,
    category: "Engine Manuals",
    question: "In which section of GEK 112212 IETP would you find procedures for Engine Overtemperature?",
    options: {
      a: "MM 05 Service Life Limits",
      b: "MM 72-00-00 Special Procedures",
      c: "TLD Summary"
    },
    correct: "b"
  },
  {
    id: 619,
    category: "Engine Manuals",
    question: "What is the purpose of the Illustrated Parts Catalogue GEK105158?",
    options: {
      a: "To provide fault isolation procedures",
      b: "To list engine assembly procedures",
      c: "To provide detailed parts information"
    },
    correct: "c"
  },
  {
    id: 620,
    category: "Engine Manuals",
    question: "How is the Numerical Index divided in the Illustrated Parts Catalogue?",
    options: {
      a: "By color coding",
      b: "By ATA number",
      c: "By alphanumeric order"
    },
    correct: "c"
  },
  {
    id: 621,
    category: "Engine Manuals",
    question: "What does the code SPAD indicate in the Nomenclature column?",
    options: {
      a: "Standard Parts",
      b: "Spare Part Drawing",
      c: "Special Procedures"
    },
    correct: "b"
  },
  {
    id: 622,
    category: "Engine Manuals",
    question: "Which ATA will display engine electrics",
    options: {
      a: "74",
      b: "24",
      c: "70"
    },
    correct: "a"
  },
  {
    id: 623,
    category: "Engine Manuals",
    question: "Where can engine service life limits be found?",
    options: {
      a: "Aircraft Chapter 05",
      b: "Engine Chapter 05",
      c: "Engine Chapter 00"
    },
    correct: "b"
  },
  {
    id: 624,
    category: "Engine Manuals",
    question: "When using the engine manual what indication will annotate matched components?",
    options: {
      a: "Three astric ***",
      b: "Mathcing Part numbers",
      c: "Matched Part, Order NHA"
    },
    correct: "c"
  },
  {
    id: 625,
    category: "Engine Manuals",
    question: "What material is contains within the standard practice?",
    options: {
      a: "Details specific to CT7-8A only",
      b: "All Engine types",
      c: "CT7-8B / -8B5"
    },
    correct: "b"
  }
];

