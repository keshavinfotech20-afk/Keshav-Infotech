export const productCategories = [
  { id: "all", name: "All Categories", icon: "Grid" },
  { id: "peripherals", name: "Keyboards & Mice", icon: "Keyboard" },
  { id: "webcams-video", name: "Webcams & Video", icon: "Video" },
  { id: "audio-headsets", name: "Audio & Headsets", icon: "Headphones" },
  { id: "connectivity", name: "Cables & Connectivity", icon: "Cable" },
  { id: "networking", name: "Enterprise Networking", icon: "Network" },
  { id: "storage-memory", name: "Storage & RAM Memory", icon: "HardDrive" },
  { id: "power-ups", name: "Power & UPS Systems", icon: "Zap" },
  { id: "printers-scanners", name: "Printers & Scanners", icon: "Printer" },
  { id: "office-equipment", name: "Office Equipment", icon: "FileText" },
  { id: "cctv-surveillance", name: "CCTV & Surveillance", icon: "Camera" },
  { id: "maintenance", name: "IT Maintenance & Tools", icon: "Wrench" }
];

export const productsData = [
  // Keyboards & Mice
  {
    id: "prod-1",
    name: "Logitech K120 USB Wired Business Keyboard",
    model: "K120 (920-002478)",
    category: "peripherals",
    brand: "Logitech",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    specs: ["Full-size layout with numeric pad", "Spill-resistant design", "Plug-and-play USB connection", "Durable key caps rated for 10M keystrokes"],
    desc: "Reliable wired USB keyboard for corporate workstation deployment featuring low-profile, quiet keys and standard full-size layout.",
    isPopular: true
  },
  {
    id: "prod-2",
    name: "Logitech MK270 Wireless Keyboard & Mouse Combo",
    model: "MK270 (920-004536)",
    category: "peripherals",
    brand: "Logitech",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80",
    specs: ["2.4 GHz wireless connection (10m range)", "8 hot keys for instant media controls", "Long battery life (36m keyboard / 12m mouse)", "Compact Nano USB receiver"],
    desc: "Industry-standard wireless desktop combination designed for modern clutter-free office setups and corporate workstations.",
    isPopular: true
  },
  {
    id: "prod-3",
    name: "Logitech B100 USB Optical Mouse",
    model: "B100 (910-001439)",
    category: "peripherals",
    brand: "Logitech",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    specs: ["800 DPI optical tracking sensor", "Ambidextrous full-size design", "Zero setup plug-and-play USB", "Smooth responsive cursor control"],
    desc: "Essential corporate optical mouse delivering comfortable ambidextrous control for daily office computer usage.",
    isPopular: false
  },
  {
    id: "prod-4",
    name: "Logitech M330 Silent Plus Wireless Mouse",
    model: "M330 Silent",
    category: "peripherals",
    brand: "Logitech",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    specs: ["90% noise reduction click feel", "24-month battery life", "Soft rubber contoured grip", "10-meter reliable wireless range"],
    desc: "Quiet optical wireless mouse engineered for open-plan offices, boardrooms, and noise-sensitive working environments.",
    isPopular: true
  },
  {
    id: "prod-5",
    name: "Redragon K552 RGB Mechanical Keyboard",
    model: "K552-RGB Kumara",
    category: "peripherals",
    brand: "Zebronics",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80",
    specs: ["Custom mechanical dustproof switches", "Aircraft-grade aluminum build", "87 keys compact tenkeyless format", "Gold-plated USB connector"],
    desc: "Heavy-duty mechanical keyboard designed for intensive typing, data entry, and custom engineering workstation tasks.",
    isPopular: false
  },

  // Webcams & Video
  {
    id: "prod-6",
    name: "Logitech C270 HD 720p Business Webcam",
    model: "C270 (960-000694)",
    category: "webcams-video",
    brand: "Logitech",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80",
    specs: ["HD 720p at 30 fps video resolution", "Built-in noise-reducing microphone", "RightLight auto light correction", "Universal clip fits laptops and monitors"],
    desc: "Standard HD webcam for video calls, Microsoft Teams, Zoom conferences, and daily business communication.",
    isPopular: true
  },
  {
    id: "prod-7",
    name: "Logitech C920 Pro HD 1080p Webcam",
    model: "C920 (960-000764)",
    category: "webcams-video",
    brand: "Logitech",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    specs: ["Full HD 1080p video glass lens", "Dual stereo microphones with noise cancellation", "78-degree field of view", "HD autofocus"],
    desc: "Premium Full HD desktop webcam engineered for high-clarity executive conferencing and professional remote presentation.",
    isPopular: true
  },
  {
    id: "prod-8",
    name: "Jabra Speak 510 USB & Bluetooth Speakerphone",
    model: "Speak 510 MS",
    category: "webcams-video",
    brand: "Jabra",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    specs: ["360-degree omni-directional microphone", "USB and Bluetooth connectivity", "15 hours rechargeable battery life", "Optimized for MS Teams & Unified Communications"],
    desc: "Portable B2B conference speakerphone turning any office space into an instant crystal-clear meeting room.",
    isPopular: true
  },

  // Audio & Headsets
  {
    id: "prod-9",
    name: "Logitech H390 USB Stereo Headset",
    model: "H390 (981-000141)",
    category: "audio-headsets",
    brand: "Logitech",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    specs: ["Noise-canceling mic boom", "In-line volume and mute controls", "Padded leatherette headband & ear cups", "USB-A digital audio plug"],
    desc: "Comfortable stereo business headset ideal for call centers, BPO operations, virtual training, and office calls.",
    isPopular: true
  },
  {
    id: "prod-10",
    name: "JBL Tune 510BT On-Ear Wireless Headphones",
    model: "Tune 510BT",
    category: "audio-headsets",
    brand: "JBL",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
    specs: ["JBL Pure Bass sound technology", "Bluetooth 5.0 wireless streaming", "Up to 40 hours battery life with speed charge", "Hands-free calls with voice assistant support"],
    desc: "Wireless headphones for professionals seeking deep acoustics and long battery endurance during mobile working.",
    isPopular: false
  },
  {
    id: "prod-11",
    name: "Creative Stage 2.1 Soundbar with Subwoofer",
    model: "MF8360",
    category: "audio-headsets",
    brand: "Creative",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    specs: ["160W Peak Power output", "Under-monitor soundbar + dedicated subwoofer", "Bluetooth, AUX, Optical, TV (ARC) & USB MP3 inputs", "Wall-mounting kit included"],
    desc: "Under-monitor desktop soundbar speaker system for executive office media display and presentation rooms.",
    isPopular: false
  },
  {
    id: "prod-12",
    name: "boAt Airdopes 141 TWS Earbuds",
    model: "Airdopes 141",
    category: "audio-headsets",
    brand: "boAt",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    specs: ["42 hours total playback", "ENx technology clear voice calls", "Low latency BEAST mode", "IPX4 water and sweat resistance"],
    desc: "Compact true wireless stereo earbuds for mobile professionals requiring quick voice communication on the go.",
    isPopular: false
  },

  // Connectivity & Cables
  {
    id: "prod-13",
    name: "Ugreen 6-in-1 USB-C Multiport Docking Adapter",
    model: "CM195 (70411)",
    category: "connectivity",
    brand: "Ugreen",
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80",
    specs: ["4K 30Hz HDMI output port", "3 x USB 3.0 5Gbps High-Speed ports", "SD & MicroSD card reader slots", "Aluminum space gray enclosure"],
    desc: "Essential Type-C expansion adapter for corporate laptops (MacBook, Dell XPS, HP EliteBook, Lenovo ThinkPad).",
    isPopular: true
  },
  {
    id: "prod-14",
    name: "TP-Link UE300 USB 3.0 to Gigabit Ethernet Adapter",
    model: "UE300",
    category: "connectivity",
    brand: "TP-Link",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    specs: ["10/100/1000 Mbps Gigabit Ethernet RJ45 port", "USB 3.0 high-speed interface", "Foldable lightweight cable design", "Plug and Play on Windows, Mac, Linux"],
    desc: "Compact USB network card giving ultrabooks fast, stable wired Gigabit LAN connectivity for office domain networks.",
    isPopular: true
  },
  {
    id: "prod-15",
    name: "D-Link CAT6 UTP Ethernet Networking Cable Roll (305m)",
    model: "NCB-C6U-BLUR-305",
    category: "connectivity",
    brand: "D-Link",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    specs: ["23 AWG Solid Bare Copper conductors", "305 meters (1000 ft) box roll", "Verified to 250 MHz frequency", "Ideal for structured building LAN wiring"],
    desc: "Premium bulk CAT6 networking cable for commercial office building structured cabling and server room installations.",
    isPopular: true
  },
  {
    id: "prod-16",
    name: "Ugreen 4K 60Hz High Speed HDMI 2.0 Cable (2m)",
    model: "HD104 (10107)",
    category: "connectivity",
    brand: "Ugreen",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    specs: ["Supports 4K UHD @ 60Hz and 1080p 144Hz", "Gold-plated connectors with triple shielding", "18 Gbps bandwidth capacity", "Compatible with monitors, projectors, TVs"],
    desc: "Heavy-duty shielded HDMI cable for connecting office PCs, laptops, conference room displays, and projectors.",
    isPopular: false
  },

  // Enterprise Networking
  {
    id: "prod-17",
    name: "TP-Link TL-SG1024 24-Port Gigabit Rackmount Switch",
    model: "TL-SG1024",
    category: "networking",
    brand: "TP-Link",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    specs: ["24 x 10/100/1000Mbps RJ45 ports", "19-inch steel rackmount chassis", "48Gbps switching capacity", "Green Ethernet power saving technology"],
    desc: "Standard 24-port Gigabit unmanaged switch for expanding corporate office network infrastructure and server racks.",
    isPopular: true
  },
  {
    id: "prod-18",
    name: "TP-Link TL-SF1008P 8-Port Switch with 4-Port PoE",
    model: "TL-SF1008P",
    category: "networking",
    brand: "TP-Link",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    specs: ["8 x RJ45 ports with 4 PoE ports", "67W total PoE power budget", "Priority port function prevents overload", "Plug and play installation"],
    desc: "PoE network switch engineered for powering IP surveillance cameras, access points, and VoIP desktop phones.",
    isPopular: true
  },
  {
    id: "prod-19",
    name: "TP-Link Omada EAP225 AC1200 Ceiling Mount Access Point",
    model: "EAP225",
    category: "networking",
    brand: "TP-Link",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    specs: ["AC1200 Dual Band Wi-Fi speeds (867Mbps + 300Mbps)", "802.3af PoE supported", "Centralized cloud management via Omada app", "Seamless roaming mesh capability"],
    desc: "Enterprise indoor wireless access point designed for high-density business Wi-Fi coverage across office floors.",
    isPopular: true
  },
  {
    id: "prod-20",
    name: "D-Link 24-Port CAT6 Unshielded Patch Panel",
    model: "NPP-5E1BLK241",
    category: "networking",
    brand: "D-Link",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    specs: ["24 port 1U 19-inch rackmount panel", "110/Krone dual IDC termination blocks", "TIA/EIA 568A and 568B wiring schemes", "Heavy-duty cold-rolled steel construction"],
    desc: "Professional rack patch panel for organized structured cable termination in corporate IT server rooms.",
    isPopular: false
  },

  // Storage & RAM Memory
  {
    id: "prod-21",
    name: "SanDisk Ultra Dual Drive Go 128GB Type-C OTG Flash Drive",
    model: "SDDDC3-128G-G46",
    category: "storage-memory",
    brand: "SanDisk",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    specs: ["Dual USB Type-C and Type-A connectors", "Up to 150MB/s read speed", "Swivel design protects connectors", "Keyring hole for portability"],
    desc: "2-in-1 flash drive for seamlessly moving files between USB-C smartphones, tablets, and USB-A computers.",
    isPopular: true
  },
  {
    id: "prod-22",
    name: "Seagate Expansion 2TB External Portable Hard Drive",
    model: "STKM2000400",
    category: "storage-memory",
    brand: "Seagate",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=600&q=80",
    specs: ["2TB storage capacity", "USB 3.0 fast data transfer", "Drag-and-drop file saving", "Rescue Data Recovery Services included"],
    desc: "Compact portable external hard drive for scheduled computer backups, large dataset archiving, and file transfer.",
    isPopular: true
  },
  {
    id: "prod-23",
    name: "Samsung T7 Portable SSD 1TB USB 3.2 Gen 2",
    model: "MU-PC1T0R/WW",
    category: "storage-memory",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    specs: ["Up to 1,050 MB/s read speed", "Shock-resistant solid aluminum body (2m drop test)", "Dynamic Thermal Guard heat control", "AES 256-bit hardware encryption"],
    desc: "High-speed external solid state drive for software developers, video editors, and executives requiring fast data access.",
    isPopular: true
  },
  {
    id: "prod-24",
    name: "WD Blue SN580 1TB NVMe PCIe Gen4 M.2 Internal SSD",
    model: "WDS100T3B0E",
    category: "storage-memory",
    brand: "WD",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    specs: ["Read speeds up to 4,150 MB/s", "PCIe Gen4 x4 NVMe M.2 2280 form factor", "Low power consumption design", "5-year limited manufacturer warranty"],
    desc: "High-performance internal M.2 SSD for upgrading corporate desktop PCs, workstations, and business laptops.",
    isPopular: true
  },
  {
    id: "prod-25",
    name: "Crucial 16GB DDR4 3200MHz SODIMM Laptop RAM",
    model: "CT16G4SFRA32A",
    category: "storage-memory",
    brand: "Crucial",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80",
    specs: ["16GB capacity module", "DDR4-3200 PC4-25600 spec", "1.2V low voltage operation", "Unbuffered SODIMM 260-pin"],
    desc: "System memory upgrade module to boost multitasking performance across commercial office notebook PCs.",
    isPopular: false
  },
  {
    id: "prod-26",
    name: "Crucial 32GB DDR5 4800MHz UDIMM Workstation RAM",
    model: "CT32G48C40U5",
    category: "storage-memory",
    brand: "Crucial",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80",
    specs: ["32GB high-density DDR5 module", "4800MHz data transfer rate", "On-module PMIC power management", "On-die ECC error correction"],
    desc: "Next-generation high-capacity RAM for enterprise engineering workstations, CAD design, and data servers.",
    isPopular: false
  },

  // Power & UPS Systems
  {
    id: "prod-27",
    name: "APC Back-UPS 1100VA / 660W 230V UPS",
    model: "BX1100C-IN",
    category: "power-ups",
    brand: "APC",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    specs: ["1100VA / 660 Watt output power capacity", "Automatic Voltage Regulation (AVR)", "5 battery-backed outlets with surge protection", "Audible alarms and LED indicator display"],
    desc: "Essential power protection and battery backup for desktop computers, Wi-Fi routers, and NAS storage during power cuts.",
    isPopular: true
  },
  {
    id: "prod-28",
    name: "Belkin Essential 6-Socket Surge Protector (2m)",
    model: "F9E600zb2M-GRY",
    category: "power-ups",
    brand: "Belkin",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    specs: ["6 surge-protected AC sockets", "650 Joules energy rating", "Heavy-duty 2-meter power cord", "Complete 3-line AC surge protection"],
    desc: "Professional multi-socket surge suppressor safeguarding sensitive office monitors, laptops, and peripheral electronics.",
    isPopular: true
  },
  {
    id: "prod-29",
    name: "Cooler Master MWE 550W 80 PLUS Bronze SMPS",
    model: "MPE-5501-ACABW-BIN",
    category: "power-ups",
    brand: "Cooler Master",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    specs: ["80 PLUS Bronze efficiency rating", "120mm HDB quiet fan", "DC-to-DC circuit design", "Flat black flexible cabling"],
    desc: "Reliable computer power supply unit for custom enterprise desktop builds and CAD workstation assemblies.",
    isPopular: false
  },
  {
    id: "prod-30",
    name: "HP 65W Smart AC Laptop Power Adapter",
    model: "710412-001 / H6Y89AA",
    category: "power-ups",
    brand: "HP",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    specs: ["65W 19.5V 3.33A output rating", "4.5mm smart blue-pin connector", "Built-in surge protection", "Compatible with HP ProBook & EliteBook"],
    desc: "Original replacement laptop AC power adapter for HP business notebooks and commercial workstation devices.",
    isPopular: false
  },

  // Printers & Scanners
  {
    id: "prod-31",
    name: "HP LaserJet Pro M126a Multifunction Monochrome Printer",
    model: "M126a (CZ174A)",
    category: "printers-scanners",
    brand: "HP",
    image: "https://images.unsplash.com/photo-1612815150548-99483ce92850?auto=format&fit=crop&w=600&q=80",
    specs: ["Print, Copy, Scan functionality", "Up to 20 ppm print speed", "Monochrome crisp text output", "High-yield 88A toner cartridge support"],
    desc: "Workhorse laser printer for corporate offices needing fast, crisp monochrome document printing and copying.",
    isPopular: true
  },
  {
    id: "prod-32",
    name: "Epson EcoTank L3250 Wi-Fi All-in-One Ink Tank Printer",
    model: "EcoTank L3250",
    category: "printers-scanners",
    brand: "Epson",
    image: "https://images.unsplash.com/photo-1612815150548-99483ce92850?auto=format&fit=crop&w=600&q=80",
    specs: ["Ultra-low-cost printing (4500 black / 7500 color pages)", "Wi-Fi & Wi-Fi Direct wireless printing", "Epson Smart Panel app control", "Spill-free bottle refilling system"],
    desc: "High-volume wireless ink tank printer delivering ultra-low per-page cost for SME document printing.",
    isPopular: true
  },
  {
    id: "prod-33",
    name: "Canon imageFORMULA DR-C225 II Office Document Scanner",
    model: "DR-C225 II",
    category: "printers-scanners",
    brand: "Canon",
    image: "https://images.unsplash.com/photo-1612815150548-99483ce92850?auto=format&fit=crop&w=600&q=80",
    specs: ["25 ppm / 50 ipm duplex scan speed", "30-sheet Automatic Document Feeder (ADF)", "Compact vertical upright design", "Scans ID cards, passports, thick paper"],
    desc: "Space-saving high-speed document scanner for banking, law firms, CA offices, and record digitization.",
    isPopular: true
  },
  {
    id: "prod-34",
    name: "Honeywell Voyager 1250g Single-Line Laser Barcode Scanner",
    model: "Voyager 1250g",
    category: "printers-scanners",
    brand: "Honeywell",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    specs: ["Extends scan reach up to 23 inches", "Automatic in-stand detection", "Reads poor-quality or damaged barcodes", "USB interface cable included"],
    desc: "Industrial laser barcode scanner built for retail billing counters, inventory auditing, and warehouse operations.",
    isPopular: false
  },
  {
    id: "prod-35",
    name: "Epson TM-T82III POS Thermal Receipt Printer",
    model: "C31CH51012",
    category: "printers-scanners",
    brand: "Epson",
    image: "https://images.unsplash.com/photo-1612815150548-99483ce92850?auto=format&fit=crop&w=600&q=80",
    specs: ["250 mm/sec fast printing speed", "USB + Serial dual interface", "Auto-cutter mechanism rated for 1.5M cuts", "Drop-in paper loading system"],
    desc: "Heavy-duty thermal receipt printer designed for retail stores, hospitality billing desks, and POS terminals.",
    isPopular: false
  },

  // Office Equipment
  {
    id: "prod-36",
    name: "Fellowes Powershred 60Cs Cross-Cut Paper Shredder",
    model: "60Cs (4606101)",
    category: "office-equipment",
    brand: "Fellowes",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
    specs: ["Shreds 10 sheets per pass into cross-cut particles (P-4)", "SafeSense safety technology stops shredding when touched", "Shreds staples, paper clips, and credit cards", "22-liter pull-out waste bin"],
    desc: "Security paper shredder for confidential document destruction in executive suites, legal, and financial offices.",
    isPopular: true
  },
  {
    id: "prod-37",
    name: "GBC Fusion 1100L A3 Thermal Laminator Machine",
    model: "Fusion 1100L",
    category: "office-equipment",
    brand: "GBC",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
    specs: ["Laminates documents up to A3 size", "Warm-up time of just 3 minutes", "Green light and audible ready alert", "Auto shut-off energy saver"],
    desc: "Professional desktop laminator for protecting certificates, ID passes, notice signs, and office documentation.",
    isPopular: false
  },

  // CCTV & Surveillance
  {
    id: "prod-38",
    name: "Hikvision 2MP Outdoor IR Fixed Bullet IP Camera",
    model: "DS-2CD1023G0-I",
    category: "cctv-surveillance",
    brand: "Hikvision",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    specs: ["2 megapixel 1080p full HD resolution", "30 meter EXIR 2.0 night vision range", "IP67 weather resistant rating", "PoE (802.3af) power over ethernet"],
    desc: "Outdoor weatherproof security IP camera for office building perimeters, parking lots, and entry gates.",
    isPopular: true
  },
  {
    id: "prod-39",
    name: "Hikvision 4MP Indoor Fixed Dome IP Camera",
    model: "DS-2CD1143G0-I",
    category: "cctv-surveillance",
    brand: "Hikvision",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    specs: ["4 megapixel ultra HD image quality", "IK10 vandal-proof dome design", "Digital WDR backlight adjustment", "3D Digital Noise Reduction"],
    desc: "Discreet indoor vandal-resistant dome camera for office corridors, reception areas, and server room surveillance.",
    isPopular: true
  },
  {
    id: "prod-40",
    name: "WD Purple 4TB Surveillance 3.5\" Internal HDD",
    model: "WD43PURZ",
    category: "cctv-surveillance",
    brand: "WD",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=600&q=80",
    specs: ["Engineered specifically for 24/7 NVR/DVR security systems", "AllFrame technology reduces video frame loss", "Supports up to 64 HD cameras", "180 TB/year workload rating"],
    desc: "Specialized high-endurance surveillance hard drive designed for continuous multi-channel video recording.",
    isPopular: true
  },
  {
    id: "prod-41",
    name: "Hikvision 8-Channel 4K Network Video Recorder (NVR)",
    model: "DS-7608NI-K1/8P",
    category: "cctv-surveillance",
    brand: "Hikvision",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    specs: ["Supports up to 8 channel IP camera inputs", "Built-in 8 PoE network interfaces", "4K HDMI video output display", "H.265+ video decoding compression"],
    desc: "Centralized network video recorder box managing recording, playback, and remote phone monitoring for security camera setups.",
    isPopular: false
  },

  // IT Maintenance & Tools
  {
    id: "prod-42",
    name: "Arctic MX-4 High Performance Thermal Compound (4g)",
    model: "ACTCP00002B",
    category: "maintenance",
    brand: "Arctic",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    specs: ["Carbon micro-particle thermal conductivity", "Non-electrical conductive & non-capacitive", "Easy 4g syringe application", "Long durability up to 8 years"],
    desc: "Premium thermal interface paste for CPU/GPU heat dissipation during computer servicing and system maintenance.",
    isPopular: true
  },
  {
    id: "prod-43",
    name: "iFixit Essential Electronics Precision Screwdriver Toolkit",
    model: "EU145348",
    category: "maintenance",
    brand: "iFixit",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    specs: ["48 precision driver bits (Torx, Phillips, Pentalobe)", "Magnetized aluminum screwdriver handle", "Suction handle, spudger & opening picks included", "Durable magnetic case"],
    desc: "Professional electronics repair toolkit used by IT administrators to service laptops, desktops, and office hardware.",
    isPopular: true
  },
  {
    id: "prod-44",
    name: "Electric High Power Cordless Air Duster Blower",
    model: "AD-500W",
    category: "maintenance",
    brand: "Portronics",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    specs: ["51,000 RPM high-speed motor blow force", "Eco-friendly reusable alternative to canned air", "LED work light built-in", "Multiple nozzle attachments for keyboard & server cleaning"],
    desc: "Electric blower tool for removing dust from computer heatsinks, server fans, keyboards, and office electronics.",
    isPopular: false
  },
  {
    id: "prod-45",
    name: "ORICO 2.5\" SATA to USB 3.0 External HDD Enclosure",
    model: "2588US3-BK",
    category: "maintenance",
    brand: "ORICO",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    specs: ["Tool-free installation design", "Supports 2.5\" SATA SSD / HDD up to 4TB", "USB 3.0 UASP 5Gbps speed protocol", "Shockproof foam pad inside"],
    desc: "Drive enclosure to convert internal 2.5\" hard drives and SSDs into portable external drives for data recovery.",
    isPopular: false
  }
];
