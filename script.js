// ==========================================
// KESHAV INFOTECH - SCRIPT
// ==========================================

// 1. COMPANY DATA
const companyData = {
  name: "Keshav Infotech",
  tagline: "Your Trusted IT Partner in Fort, Mumbai",
  businessType: "IT Hardware, Software & Services Vendor",
  positioning: "Keshav Infotech is an IT Hardware, Software and Services vendor offering products from leading brands available in India.",
  backgroundCopy: "We come with a vast pool of experience in the IT and ITeS industry, having worked with renowned IT hardware, services and software corporations in India.",
  vision: "To be the best place for our clienteles to source their IT Solutions and services.",
  mission: "To ensure our clienteles get the best products with excellence and service.",
  address: {
    building: "91 Mapla House",
    street: "Modi Street",
    area: "Fort",
    city: "Mumbai",
    pincode: "400001",
    full: "91 Mapla House, Modi Street, Fort, Mumbai – 400001"
  },
  contacts: [
    { name: "Ashok Chaudhari", phone: "9820804507", rawPhone: "919820804507" }
  ],
  email: "keshavinfotech20@gmail.com",
  whatsappNumber: "919820804507",
  whatsappDefaultMsg: "Hello Keshav Infotech team, I would like to enquire about IT products/solutions for our company.",
  whyChooseUs: [
    {
      number: "01",
      title: "Broad IT Product Portfolio",
      desc: "A wide range of hardware, peripherals, networking, storage, printing, surveillance and office technology products."
    },
    {
      number: "02",
      title: "Trusted Brands",
      desc: "Direct sourcing access to products from leading brands available in India."
    },
    {
      number: "03",
      title: "Business-Focused Sourcing",
      desc: "Helping organizations identify and procure products precisely suited to their operational requirements."
    },
    {
      number: "04",
      title: "Responsive Service",
      desc: "Professional communication and dependable support throughout the entire buying process."
    },
    {
      number: "05",
      title: "Genuine Products",
      desc: "Strong emphasis on product quality, authentic sourcing, and genuine warranty terms."
    },
    {
      number: "06",
      title: "Long-Term Relationships",
      desc: "Focused on building lasting business relationships rather than transactional one-time sales."
    }
  ]
};

// 2. BRANDS DATA
const brandsData = [
  { name: "Logitech", category: "Keyboards, Mice, Webcams & Headsets", tag: "Peripherals & Video" },
  { name: "HP", category: "Commercial Laptops, Desktops, Power Adapters & Printers", tag: "Computing & Printing" },
  { name: "Dell", category: "Enterprise Workstations, Laptops & Accessories", tag: "Enterprise Computing" },
  { name: "Lenovo", category: "ThinkPad Laptops, Desktops & Power Adapters", tag: "Corporate Computing" },
  { name: "TP-Link", category: "Switches, Routers, Access Points, Wi-Fi Adapters & PoE", tag: "Networking Infrastructure" },
  { name: "Ugreen", category: "USB-C Hubs, Docking Stations, Display Cables & Adapters", tag: "Connectivity" },
  { name: "D-Link", category: "CAT6 Cables, Patch Panels, Patch Cords & Fibre Patch", tag: "Structured Cabling" },
  { name: "SanDisk", category: "Flash Drives, Type-C OTG Drives, SD & MicroSD Cards", tag: "Flash Storage" },
  { name: "Seagate", category: "External Hard Disk Drives & Desktop Storage", tag: "Data Storage" },
  { name: "Samsung", category: "Portable External SSDs, Internal NVMe & Monitors", tag: "High-Speed SSDs" },
  { name: "Crucial", category: "DDR4 & DDR5 RAM Memory, SATA & NVMe SSDs", tag: "Memory & Storage" },
  { name: "WD", category: "NVMe SSDs & WD Purple Surveillance Hard Drives", tag: "Storage & Surveillance" },
  { name: "APC", category: "Smart-UPS, Back-UPS Systems & Power Protection", tag: "UPS & Power" },
  { name: "Belkin", category: "Surge Protectors & High-Speed Charging Accessories", tag: "Power Protection" },
  { name: "Epson", category: "EcoTank Printers, Thermal POS Receipt Printers & Dot Matrix", tag: "Business Printing" },
  { name: "Brother", category: "High-Speed Thermal Label Printers & Multifunction Units", tag: "Labeling & Printing" },
  { name: "Canon", category: "High-Speed Document Scanners & Office Printers", tag: "Document Digitization" },
  { name: "Honeywell", category: "Laser Barcode Scanners, CCTV Power Supplies & Racks", tag: "Scanning & CCTV Power" },
  { name: "Hikvision", category: "IP Cameras, Dome, Bullet, PTZ, DVRs & NVR Systems", tag: "CCTV & Security" },
  { name: "Jabra", category: "Executive Conference Speakerphones & Business Headsets", tag: "Conferencing Audio" },
  { name: "JBL", category: "Commercial Bluetooth Headsets & Portable Speakers", tag: "Professional Audio" },
  { name: "Creative", category: "Desktop Soundbars & Audio Systems", tag: "Audio Solutions" },
  { name: "Fellowes", category: "Cross-Cut Security Paper Shredders", tag: "Office Shredding" },
  { name: "GBC", category: "A3 & A4 Thermal Laminating Machines", tag: "Office Equipment" },
  { name: "Finolex", category: "Shielded Coaxial CCTV Cables & Network Wires", tag: "Cabling & Security" },
  { name: "Cooler Master", category: "80 PLUS SMPS Power Supplies & Cooling Accessories", tag: "Hardware Components" },
  { name: "Corsair", category: "High-Efficiency Computer Power Supplies & Memory", tag: "Hardware Components" },
  { name: "Arctic", category: "High-Performance CPU Thermal Paste Compounds", tag: "IT Servicing" },
  { name: "Noctua", category: "Industrial Grade Cooling Fans & Thermal Paste", tag: "Hardware Servicing" },
  { name: "iFixit", category: "Precision Electronics Toolkit & Hardware Repair", tag: "Maintenance Tools" },
  { name: "ORICO", category: "SATA Hard Drive Enclosures & USB 3.0 Adapters", tag: "Enclosures & Tools" },
  { name: "TVS", category: "Thermal Transfer Barcode & Ticket Printers", tag: "POS Equipment" },
  { name: "GM", category: "Heavy Duty Master Switch Extension Power Strips", tag: "Power Accessories" },
  { name: "Portronics", category: "Electric High Power Air Dusters & Laptop Accessories", tag: "IT Accessories" },
  { name: "Zebronics", category: "Budget Mechanical Keyboards & Computer Peripherals", tag: "Input Peripherals" },
  { name: "Redragon", category: "Mechanical Keyboards & Heavy Duty Typing Input", tag: "Mechanical Keyboards" }
];

// 3. SOLUTIONS DATA
const solutionsData = [
  {
    id: "sol-1",
    title: "Corporate IT Procurement",
    icon: "briefcase",
    desc: "Streamlined B2B technology product sourcing for companies, SMEs, and administrative teams across Mumbai and India.",
    features: [
      "Bulk order management with single point of contact",
      "Access to leading genuine brands in India",
      "Curated product recommendations based on requirements",
      "Transparent commercial quotation structure"
    ]
  },
  {
    id: "sol-2",
    title: "Workplace IT Infrastructure Setup",
    icon: "monitor",
    desc: "Complete hardware supply for new office fit-outs, workstation expansions, and staff hardware upgrades.",
    features: [
      "Monitors, business keyboards, wireless mice combos",
      "USB-C docking adapters & high-speed display cables",
      "Commercial headsets & conferencing speakerphones",
      "Original laptop power adapters and accessories"
    ]
  },
  {
    id: "sol-3",
    title: "Enterprise Networking & Connectivity",
    icon: "network",
    desc: "Reliable networking hardware supply for structured office cabling, server racks, and wireless coverage.",
    features: [
      "Gigabit switches, PoE switches & business routers",
      "Indoor ceiling-mount Wi-Fi access points",
      "D-Link CAT6 UTP cable rolls, patch panels & patch cords",
      "PoE injectors, SFP optical modules & keystones"
    ]
  },
  {
    id: "sol-4",
    title: "Printing & Document Digitization",
    icon: "printer",
    desc: "Commercial printing, scanning, and document workflow hardware tailored to office volume requirements.",
    features: [
      "Multifunction laser printers & high-volume ink tank units",
      "Canon high-speed duplex document scanners",
      "Thermal receipt printers & TVS barcode printers",
      "Brother thermal label printers & consumables"
    ]
  },
  {
    id: "sol-5",
    title: "Storage & Data Infrastructure Sourcing",
    icon: "hard-drive",
    desc: "High-endurance data storage solutions for enterprise server backups, workstation SSD upgrades, and archiving.",
    features: [
      "Samsung external portable SSDs & Seagate HDDs",
      "WD Blue & Black NVMe Gen4 PCIe SSDs",
      "Crucial DDR4 & DDR5 RAM for desktops & laptops",
      "SanDisk OTG dual drives & microSD high-speed storage"
    ]
  },
  {
    id: "sol-6",
    title: "Power Protection & Business UPS",
    icon: "zap",
    desc: "Dependable power backup and surge protection hardware ensuring zero downtime for critical business operations.",
    features: [
      "APC Smart-UPS & Back-UPS systems",
      "Belkin multi-socket surge protectors & power strips",
      "GM heavy duty extension boards",
      "Cooler Master & Corsair high-efficiency SMPS units"
    ]
  },
  {
    id: "sol-7",
    title: "CCTV & Office Surveillance Supply",
    icon: "camera",
    desc: "Comprehensive surveillance hardware supply for office security, entry gates, server rooms, and warehouses.",
    features: [
      "Hikvision 2MP & 4MP IP cameras, domes & bullets",
      "Hikvision 8-channel & 16-channel NVR/DVR systems",
      "WD Purple 24/7 continuous surveillance hard drives",
      "Honeywell CCTV power supplies, racks & Finolex cables"
    ]
  },
  {
    id: "sol-8",
    title: "IT Servicing & Hardware Maintenance",
    icon: "wrench",
    desc: "Essential maintenance tools, thermal compounds, dusters, and diagnostic adapters for internal IT maintenance.",
    features: [
      "Arctic MX-4 thermal paste compounds",
      "iFixit precision screwdriver toolkits & ESD mats",
      "Electric cordless high-power air dusters",
      "Drive enclosures & SATA-to-USB adapters"
    ]
  }
];

// 4. INDUSTRIES DATA
const industriesData = [
  {
    title: "Corporate Offices",
    desc: "Standardized hardware procurement for corporate workstations, meeting rooms, and IT admin inventories.",
    items: ["Workstation Peripherals", "Dual Monitor Setups", "Conferencing Audio", "Rackmount Switches"]
  },
  {
    title: "SMEs & Emerging Businesses",
    desc: "Cost-effective, dependable IT products helping growing companies set up robust IT infrastructure.",
    items: ["EcoTank Printing", "Wireless Office Combos", "APC UPS Backup", "High-Speed Wi-Fi APs"]
  },
  {
    title: "Startups & Tech Workspaces",
    desc: "High-speed NVMe storage, DDR5 RAM, and USB-C multiport docks for fast-paced agile development teams.",
    items: ["NVMe High-Speed SSDs", "Type-C Docking Stations", "Mechanical Keyboards", "Portable SSDs"]
  },
  {
    title: "Professional Services (CA & Law Firms)",
    desc: "Document digitization scanners, high-yield monochrome laser printers, and security paper shredders.",
    items: ["Canon Duplex Scanners", "Fellowes Shredders", "HP LaserJet Printers", "Encrypted Storage"]
  },
  {
    title: "Institutions & Training Centers",
    desc: "Bulk supply of durable mice, keyboards, surge protectors, and network distribution cabling.",
    items: ["Logitech K120 / B100 Combos", "Belkin Surge Strips", "D-Link CAT6 Cabling", "Thermal Laminators"]
  },
  {
    title: "Retail & Hospitality POS",
    desc: "Barcode scanners, thermal receipt printers, label printers, and compact POS networking equipment.",
    items: ["Epson POS Receipt Printers", "Honeywell Laser Scanners", "TVS Barcode Printers", "PoE Switches"]
  },
  {
    title: "Warehouses & Logistics",
    desc: "Rugged barcode scanners, long-range IP surveillance cameras, and high-capacity wireless coverage.",
    items: ["Honeywell Barcode Readers", "Hikvision Outdoor Cameras", "WD Purple Surveillance Drives", "Access Points"]
  },
  {
    title: "Security & Surveillance Setups",
    desc: "Complete camera, NVR, power supply, and coaxial cable supply for commercial facility monitoring.",
    items: ["Hikvision IP Domes/Bullets", "Honeywell CCTV Power Units", "Finolex 3+1 Coaxial Cables", "Wall Racks"]
  }
];

// 5. PRODUCT CATEGORIES
const productCategories = [
  { id: "all", name: "All Categories" },
  { id: "peripherals", name: "Keyboards & Mice" },
  { id: "webcams-video", name: "Webcams & Video" },
  { id: "audio-headsets", name: "Audio & Headsets" },
  { id: "connectivity", name: "Cables & Connectivity" },
  { id: "networking", name: "Enterprise Networking" },
  { id: "storage-memory", name: "Storage & RAM Memory" },
  { id: "power-ups", name: "Power & UPS Systems" },
  { id: "printers-scanners", name: "Printers & Scanners" },
  { id: "office-equipment", name: "Office Equipment" },
  { id: "cctv-surveillance", name: "CCTV & Surveillance" },
  { id: "maintenance", name: "IT Maintenance & Tools" }
];

// 6. PRODUCTS DATA (45 Products)
const productsData = [
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

// 7. SVG ICON UTILITY
const SVG_ICONS = {
  'phone': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  'mail': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  'map-pin': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  'arrow-right': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  'message-square': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  'building-2': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  'server': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
  'check-circle-2': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  'shield-check': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
  'send': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  'search': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  'eye': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`,
  'refresh-cw': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
  'check': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  'briefcase': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`,
  'monitor': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
  'network': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>`,
  'printer': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>`,
  'hard-drive': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/></svg>`,
  'zap': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
  'camera': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  'wrench': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  'compass': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  'target': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  'shield': `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  'menu': `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  'x': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
};

function getIcon(name) {
  return SVG_ICONS[name] || '';
}

// 8. GLOBAL APP STATE
let currentRoute = 'home';
let selectedCategory = 'all';
let selectedBrand = 'all';
let searchQuery = '';

// Unique Brands List
const uniqueBrands = Array.from(new Set(productsData.map(p => p.brand))).sort();

function getInitialRoute() {
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
  const hash = window.location.hash.toLowerCase().replace('#', '');

  if (path.endsWith('/products') || path.endsWith('/products.html') || hash === 'products') {
    return 'products';
  }
  if (path.endsWith('/brands') || path.endsWith('/brands.html') || hash === 'brands') {
    return 'brands';
  }
  if (path.endsWith('/about') || path.endsWith('/about.html') || hash === 'about') {
    return 'about';
  }
  if (path.endsWith('/contact') || path.endsWith('/contact.html') || hash === 'contact') {
    return 'contact';
  }
  return 'home';
}

// 9. NAVIGATION & ROUTING
function navigateTo(route, category = null, brand = null, pushHistory = true) {
  currentRoute = route;
  
  if (category !== null) {
    selectedCategory = category;
  }
  if (brand !== null) {
    selectedBrand = brand;
  }

  // Update URL in browser
  if (pushHistory && window.history && window.history.pushState) {
    const targetUrl = route === 'home' ? '/' : (route === 'products' ? '/products' : `/#${route}`);
    if (!window.location.protocol.startsWith('file')) {
      window.history.pushState({ route, category, brand }, '', targetUrl);
    } else {
      window.location.hash = route === 'home' ? '' : route;
    }
  }

  // Update SEO Title
  const titles = {
    home: "Keshav Infotech | IT Hardware, Software & Technology Solutions – Mumbai",
    products: "Product Catalogue | Keshav Infotech – IT Hardware & Peripherals",
    brands: "Leading IT Brands Portfolio | Keshav Infotech Fort Mumbai",
    about: "About Us | Keshav Infotech – IT Partner in Fort, Mumbai",
    contact: "Contact & Request a B2B Quote | Keshav Infotech Fort Mumbai"
  };
  document.title = titles[route] || titles.home;

  // Update Active Link in Desktop Header & Mobile Drawer
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    if (link.dataset.route === route) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Toggle Visibility of View Sections
  const allSections = document.querySelectorAll('.view-section');
  if (route === 'home') {
    // Show all homepage sections in sequential order EXCEPT sec-products (Product Catalogue is located at /products)
    allSections.forEach(sec => {
      if (sec.id === 'sec-products') {
        sec.classList.add('view-hidden');
      } else {
        sec.classList.remove('view-hidden');
      }
    });
  } else {
    // Show only the section corresponding to the route
    allSections.forEach(sec => {
      if (sec.id === `sec-${route}`) {
        sec.classList.remove('view-hidden');
      } else {
        sec.classList.add('view-hidden');
      }
    });
  }

  // Close Mobile Menu if open
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileDrawer) {
    mobileDrawer.classList.remove('open');
  }

  // Re-render catalogue if navigating to products
  if (route === 'products') {
    renderCatalogue();
  }

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 10. RENDER WHY CHOOSE US
function renderWhyChooseUs() {
  const container = document.getElementById('why-us-grid');
  if (!container) return;

  container.innerHTML = companyData.whyChooseUs.map(item => `
    <div class="why-card">
      <div class="why-number">${item.number}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join('');
}

// 11. RENDER BRANDS SLIDER (Animated Sliding Bar)
function renderBrandsGrid() {
  const row1 = document.getElementById('brands-slider-row-1');
  const row2 = document.getElementById('brands-slider-row-2');
  
  if (!row1 || !row2) {
    const staticGrid = document.getElementById('brands-grid');
    if (staticGrid) {
      staticGrid.innerHTML = brandsData.map(createBrandSlideCard).join('');
    }
    return;
  }

  const half = Math.ceil(brandsData.length / 2);
  const row1Brands = brandsData.slice(0, half);
  const row2Brands = brandsData.slice(half);

  const makeRowContent = (brands) => {
    const cardsHtml = brands.map(createBrandSlideCard).join('');
    return `
      <div class="brands-slider-track">${cardsHtml}</div>
      <div class="brands-slider-track" aria-hidden="true">${cardsHtml}</div>
    `;
  };

  row1.innerHTML = makeRowContent(row1Brands);
  row2.innerHTML = makeRowContent(row2Brands);
}

function createBrandSlideCard(brand) {
  return `
    <div class="brand-slide-card" onclick="navigateTo('products', 'all', '${brand.name}')" title="Explore ${brand.name} products in catalogue">
      <div class="brand-slide-top">
        <span class="brand-slide-tag">${brand.tag}</span>
        <span class="brand-slide-arrow">${getIcon('arrow-right')}</span>
      </div>
      <div class="brand-slide-name">${brand.name}</div>
      <div class="brand-slide-cat">${brand.category}</div>
    </div>
  `;
}

// 12. RENDER SOLUTIONS
function renderSolutions() {
  const container = document.getElementById('solutions-grid');
  if (!container) return;

  container.innerHTML = solutionsData.map(sol => `
    <div style="background-color: var(--bg-page); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 2rem; display: flex; flex-direction: column; transition: all 0.25s ease;">
      <div style="width: 50px; height: 50px; border-radius: 10px; background-color: var(--light-sky-bg); color: var(--brand-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
        ${getIcon(sol.icon) || getIcon('briefcase')}
      </div>
      <h3 style="font-size: 1.2rem; margin-bottom: 0.6rem;">${sol.title}</h3>
      <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.25rem; flex-grow: 1;">${sol.desc}</p>
      <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0;">
        ${sol.features.map(feat => `
          <li style="font-size: 0.85rem; color: var(--text-body); margin-bottom: 0.4rem; display: flex; align-items: flex-start; gap: 0.5rem;">
            <span style="color: var(--brand-blue); flex-shrink: 0; margin-top: 2px;">${getIcon('check')}</span>
            <span>${feat}</span>
          </li>
        `).join('')}
      </ul>
      <button class="btn btn-secondary btn-sm" style="width: 100%; justify-content: center;" onclick="openQuoteModal({ category: 'all', name: '${sol.title}' })">
        Discuss Requirement ${getIcon('arrow-right')}
      </button>
    </div>
  `).join('');
}

// 13. RENDER INDUSTRIES
function renderIndustries() {
  const container = document.getElementById('industries-grid');
  if (!container) return;

  container.innerHTML = industriesData.map(ind => `
    <div style="background-color: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.75rem; display: flex; flex-direction: column; transition: all 0.25s ease;">
      <div style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--brand-blue); font-weight: 700; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem;">
        ${getIcon('building-2')} Industry Sector
      </div>
      <h3 style="font-size: 1.15rem; color: var(--primary-navy); margin-bottom: 0.5rem;">${ind.title}</h3>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem; flex-grow: 1;">${ind.desc}</p>
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem; margin-top: auto;">
        <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">
          Recommended Product Sourcing:
        </div>
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${ind.items.map(item => `
            <li style="font-size: 0.82rem; color: var(--text-body); margin-bottom: 0.3rem; display: flex; align-items: center; gap: 0.4rem;">
              <span style="color: var(--accent-blue); flex-shrink: 0;">${getIcon('check-circle-2')}</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// 14. RENDER CATALOGUE
function renderCatalogue() {
  const pillsContainer = document.getElementById('category-filter-pills');
  const brandSelect = document.getElementById('brand-select-filter');
  const searchInput = document.getElementById('catalogue-search-input');
  const gridContainer = document.getElementById('catalogue-grid');
  const countSpan = document.getElementById('catalogue-results-count');
  const resetBtnContainer = document.getElementById('catalogue-reset-btn-container');

  if (!gridContainer) return;

  // Render Filter Pills once or update active class
  if (pillsContainer) {
    pillsContainer.innerHTML = productCategories.map(cat => `
      <button 
        class="filter-pill ${selectedCategory === cat.id ? 'active' : ''}" 
        onclick="setCategoryFilter('${cat.id}')"
      >
        ${cat.name}
      </button>
    `).join('');
  }

  // Populate Brand Select Options once if empty
  if (brandSelect && brandSelect.options.length <= 1) {
    uniqueBrands.forEach(brand => {
      const opt = document.createElement('option');
      opt.value = brand;
      opt.textContent = brand;
      brandSelect.appendChild(opt);
    });
  }
  if (brandSelect) {
    brandSelect.value = selectedBrand;
  }
  if (searchInput && searchInput.value !== searchQuery) {
    searchInput.value = searchQuery;
  }

  // Filter Products
  const query = searchQuery.toLowerCase().trim();
  const filtered = productsData.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'all' || product.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchesSearch = !query || 
      product.name.toLowerCase().includes(query) ||
      product.model.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.specs.some(s => s.toLowerCase().includes(query));

    return matchesCategory && matchesBrand && matchesSearch;
  });

  // Update Result Counter
  if (countSpan) {
    countSpan.innerHTML = `Showing <strong style="color: #0F172A">${filtered.length}</strong> products matching your procurement requirements`;
  }

  // Reset Filters Button
  if (resetBtnContainer) {
    if (selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) {
      resetBtnContainer.innerHTML = `
        <button class="btn btn-secondary btn-sm" onclick="resetCatalogueFilters()">
          ${getIcon('refresh-cw')} Reset Filters
        </button>
      `;
    } else {
      resetBtnContainer.innerHTML = '';
    }
  }

  // Render Grid Cards
  if (filtered.length > 0) {
    gridContainer.innerHTML = filtered.map(product => `
      <div class="product-card">
        <div class="product-card-header">
          <span class="product-brand-tag">${product.brand}</span>
          ${product.isPopular ? `<span class="product-popular-badge">Corporate Favorite</span>` : ''}
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-card-body">
          <div class="product-model">Model: ${product.model}</div>
          <h3>${product.name}</h3>
          <ul class="product-specs-list">
            ${product.specs.slice(0, 3).map(s => `<li>${s}</li>`).join('')}
          </ul>
          <div style="margin-top: auto;">
            <div style="font-size: 0.8rem; color: #0284C7; font-weight: 700; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.35rem;">
              ${getIcon('shield')} Corporate Procurement Rate
            </div>
            <div class="product-card-footer">
              <button class="btn btn-secondary btn-sm" style="flex: 1;" onclick="openProductModalById('${product.id}')">
                ${getIcon('eye')} Quick View
              </button>
              <button class="btn btn-primary btn-sm" style="flex: 1.2;" onclick="openQuoteModalById('${product.id}')">
                ${getIcon('send')} Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  } else {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: #FFFFFF; border-radius: 16px; border: 1px solid #E2E8F0;">
        <h3 style="font-size: 1.3rem; color: #0F172A; marginBottom: 0.5rem;">No products found matching your search</h3>
        <p style="color: #64748B; max-width: 480px; margin: 0 auto 1.5rem;">
          We stock an extensive range of additional IT products from leading brands in India. Please submit your exact requirement to our team.
        </p>
        <button class="btn btn-primary" onclick="navigateTo('contact')">
          Enquire directly for Custom IT Sourcing
        </button>
      </div>
    `;
  }
}

function setCategoryFilter(catId) {
  selectedCategory = catId;
  renderCatalogue();
}

function setBrandFilter(brand) {
  selectedBrand = brand;
  renderCatalogue();
}

function resetCatalogueFilters() {
  selectedCategory = 'all';
  selectedBrand = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('catalogue-search-input');
  if (searchInput) searchInput.value = '';
  renderCatalogue();
}

// 15. MODAL SYSTEM
function openQuoteModal(product = null) {
  const modal = document.getElementById('quote-modal');
  const form = document.getElementById('quote-form');
  const success = document.getElementById('quote-success');

  if (form) form.style.display = 'block';
  if (success) success.style.display = 'none';

  // Fill default values or product info
  if (product) {
    const catSelect = document.getElementById('modal-quote-category');
    const reqInput = document.getElementById('modal-quote-requirement');
    if (catSelect && product.category) catSelect.value = product.category;
    if (reqInput) reqInput.value = `Quote for: ${product.name} (Model: ${product.model || ''})`;
  }

  if (modal) modal.classList.add('open');
}

function openQuoteModalById(productId) {
  const product = productsData.find(p => p.id === productId);
  openQuoteModal(product);
}

function closeQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if (modal) modal.classList.remove('open');
}

function openProductModalById(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-modal');
  const body = document.getElementById('product-modal-content');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="badge badge-brand" style="margin-bottom: 0.4rem;">${product.brand}</span>
        <h3 style="font-size: 1.25rem; color: #0F172A; margin: 0;">${product.name}</h3>
      </div>
      <button class="modal-close-btn" onclick="closeProductModal()" aria-label="Close modal">
        ${getIcon('x')}
      </button>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem; margin-bottom: 2rem;">
        <div style="background: #F8FAFC; border-radius: 12px; padding: 1.25rem; display: flex; align-items: center; justify-content: center;">
          <img src="${product.image}" alt="${product.name}" style="max-height: 220px; max-width: 100%; object-fit: contain;">
        </div>
        <div>
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem;">
            Model: ${product.model}
          </div>
          <p style="font-size: 0.95rem; color: #334155; line-height: 1.6; margin-bottom: 1.25rem;">
            ${product.desc}
          </p>
          <div style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 8px; padding: 0.85rem 1rem; margin-bottom: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; font-size: 0.85rem; color: #0369A1;">
              ${getIcon('shield-check')} Genuine Product Guarantee
            </div>
            <div style="font-size: 0.78rem; color: #0369A1; margin-top: 2px;">
              Sourced from official Indian brand supply channels.
            </div>
          </div>
          <div style="font-size: 0.88rem; font-weight: 700; color: #0F172A; margin-bottom: 0.5rem;">
            Key Technical Specifications:
          </div>
          <ul style="list-style: none; padding: 0; margin: 0;">
            ${product.specs.map(spec => `
              <li style="font-size: 0.85rem; color: #334155; margin-bottom: 0.35rem; display: flex; align-items: flex-start; gap: 0.5rem;">
                <span style="color: #1E40AF; flex-shrink: 0; margin-top: 3px;">${getIcon('check')}</span>
                <span>${spec}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
      <div style="background: #F8FAFC; border-radius: 12px; padding: 1.5rem; border: 1px solid #E2E8F0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <div style="font-size: 0.9rem; font-weight: 700; color: #0F172A;">
            Need Corporate Pricing for ${product.brand}?
          </div>
          <div style="font-size: 0.8rem; color: #64748B;">
            Speak to our team in Fort, Mumbai for bulk quote and specifications.
          </div>
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="closeProductModal(); openQuoteModalById('${product.id}')">
            ${getIcon('send')} Request Quote
          </button>
          <a href="https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(`Hello Keshav Infotech, I would like a corporate quote for model: ${product.name} (${product.model})`)}" target="_blank" rel="noreferrer" class="btn btn-whatsapp">
            ${getIcon('message-square')} WhatsApp Enquiry
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('open');
}

// 16. LEGAL MODALS (Privacy & Terms)
function openLegalModal(type) {
  const modal = document.getElementById('legal-modal');
  const title = document.getElementById('legal-modal-title');
  const body = document.getElementById('legal-modal-body');

  if (!modal || !title || !body) return;

  if (type === 'privacy') {
    title.innerHTML = `${getIcon('shield-check')} Privacy Policy`;
    body.innerHTML = `
      <p><strong>Keshav Infotech Privacy Statement</strong></p>
      <p>At Keshav Infotech, accessible from 91 Mapla House, Modi Street, Fort, Mumbai – 400001, we respect the privacy of our business clients, corporate buyers, and website visitors.</p>
      <h4 style="color: var(--primary-navy); margin-top: 1.25rem; margin-bottom: 0.5rem;">1. Business Information Collection</h4>
      <p>We collect business contact information submitted through our quotation forms, WhatsApp inquiries, or email correspondence (such as Company Name, Contact Name, Business Email, Mobile Number, and Product Procurement Details) solely to evaluate and process commercial IT quotes.</p>
      <h4 style="color: var(--primary-navy); margin-top: 1.25rem; margin-bottom: 0.5rem;">2. Data Usage & Confidentiality</h4>
      <p>Your business contact details will strictly be used to provide requested product pricing, specification guidance, and order support. We do not sell or rent commercial contact data to third-party marketing agencies.</p>
      <h4 style="color: var(--primary-navy); margin-top: 1.25rem; margin-bottom: 0.5rem;">3. Contact & Inquiries</h4>
      <p>For any privacy questions or data updates, please reach out directly to our team at <a href="mailto:${companyData.email}">${companyData.email}</a>.</p>
    `;
  } else {
    title.innerHTML = `${getIcon('file-text')} Terms & Commercial Conditions`;
    body.innerHTML = `
      <p><strong>Keshav Infotech Commercial Terms</strong></p>
      <p>Welcome to Keshav Infotech. By requesting quotes or engaging in B2B procurement with us, you agree to the following business principles:</p>
      <h4 style="color: var(--primary-navy); margin-top: 1.25rem; margin-bottom: 0.5rem;">1. B2B Quotation Basis</h4>
      <p>All quotations issued by Keshav Infotech are custom commercial quotes tailored to product model availability, order quantity, and prevailing brand vendor pricing in India.</p>
      <h4 style="color: var(--primary-navy); margin-top: 1.25rem; margin-bottom: 0.5rem;">2. Genuine Product Warranties</h4>
      <p>All hardware products supplied by Keshav Infotech carry standard manufacturer warranties as provided by the respective brand vendors in India.</p>
      <h4 style="color: var(--primary-navy); margin-top: 1.25rem; margin-bottom: 0.5rem;">3. Procurement Inquiries</h4>
      <p>For formal corporate purchase orders or inquiries, please contact our Fort, Mumbai commercial team at 9820804507.</p>
    `;
  }

  modal.classList.add('open');
}

function closeLegalModal() {
  const modal = document.getElementById('legal-modal');
  if (modal) modal.classList.remove('open');
}

// 17. INITIALIZATION & EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
  // Render Dynamic Sections
  renderWhyChooseUs();
  renderBrandsGrid();
  renderCatalogue();

  // Initialize Route based on current URL path (e.g. /products or /)
  const initialRoute = getInitialRoute();
  navigateTo(initialRoute, null, null, false);

  // Populate Select Category in Quote Modal & Contact Form
  const modalCatSelect = document.getElementById('modal-quote-category');
  const contactCatSelect = document.getElementById('contact-form-category');
  productCategories.forEach(cat => {
    if (modalCatSelect) {
      const opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = cat.name;
      modalCatSelect.appendChild(opt);
    }
    if (contactCatSelect) {
      const opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = cat.name;
      contactCatSelect.appendChild(opt);
    }
  });

  // Search Input Listener
  const searchInput = document.getElementById('catalogue-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCatalogue();
    });
  }

  // Brand Select Listener
  const brandSelect = document.getElementById('brand-select-filter');
  if (brandSelect) {
    brandSelect.addEventListener('change', (e) => {
      selectedBrand = e.target.value;
      renderCatalogue();
    });
  }

  // Mobile Menu Button
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      mobileBtn.innerHTML = mobileDrawer.classList.contains('open') ? getIcon('x') : getIcon('menu');
    });
  }

  // Modal Backdrop Click Closers
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('open');
    }
  });

  // Quote Form Submission
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formEl = document.getElementById('quote-form');
      const successEl = document.getElementById('quote-success');
      const nameVal = document.getElementById('modal-quote-name').value;
      const successName = document.getElementById('quote-success-name');
      if (successName) successName.textContent = nameVal;
      if (formEl) formEl.style.display = 'none';
      if (successEl) successEl.style.display = 'block';
      quoteForm.reset();
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formEl = document.getElementById('contact-form');
      const successEl = document.getElementById('contact-success');
      const nameVal = document.getElementById('contact-name').value;
      const successName = document.getElementById('contact-success-name');
      if (successName) successName.textContent = nameVal;
      if (formEl) formEl.style.display = 'none';
      if (successEl) successEl.style.display = 'block';
      contactForm.reset();
    });
  }

  // Browser Back/Forward navigation listener
  window.addEventListener('popstate', (e) => {
    const route = (e.state && e.state.route) || getInitialRoute();
    navigateTo(route, (e.state && e.state.category) || null, (e.state && e.state.brand) || null, false);
  });
});

// Explicit Global Window Attachments
window.navigateTo = navigateTo;
window.setCategoryFilter = setCategoryFilter;
window.setBrandFilter = setBrandFilter;
window.resetCatalogueFilters = resetCatalogueFilters;
window.openQuoteModal = openQuoteModal;
window.openQuoteModalById = openQuoteModalById;
window.closeQuoteModal = closeQuoteModal;
window.openProductModalById = openProductModalById;
window.closeProductModal = closeProductModal;
window.openLegalModal = openLegalModal;
window.closeLegalModal = closeLegalModal;
