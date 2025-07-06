"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Globe,
  Calendar,
  MapPin,
  Users,
  Award,
  Phone,
  Mail,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

// Language content
const content = {
  en: {
   paperSubmission: {
  title: "Paper Submission Guidelines",
  instructions: [
   //  "Authors must present their paper in Tamil at the conference",
   //  "Papers must be submitted in both Tamil and English versions",
   //  "The English version should be a direct translation of the Tamil paper",
   //  "Both versions must follow the same formatting guidelines",
   //  "Submit through our online portal (link will be provided)"
   "The authors need to present their paper in Tamil",
   "The paper need to submitted in both Tamil and English version"
  ],
  formatting: {
    title: "Formatting Guidelines",
    items: [
      "Maximum 6 pages including references",
      "A4 size paper with 1-inch margins",
      "12pt font size, Times New Roman",
      "PDF format only"
    ]
  }
},
    nav: {
      home: "Home",
      about: "About",
      tracks: "Tracks",
      instructions: "Instructions",
      speakers: "Speakers",
      committee: "Committee",
      registration: "Registration",
    },
    hero: {
      title: "MedNext 2025:",
      subtitle: "Shaping the future of Healthcare with AI, Imaging, Devices & Diagnostics",
      dates: "9 & 10 October 2025",
      cta: "Register Now",
      scrolling:
        "No Registration Fee • Limited to 50 Participants • AICTE Sponsored Conference",
    },
    about: {
      title: "About Conference",
      conference: {
        title: "About the Conference",
        content:
          "The AICTE has launched the VAANI scheme with a vision to bridge the linguistic divide in technical education by promoting the use of Indian languages alongside English. This initiative seeks to make quality technical education more inclusive, accessible, and relatable to students across diverse linguistic backgrounds, thereby fostering a deeper understanding and engagement in core Engineering concepts. In alignment with this transformative vision, the Department of Electronics and Communication Engineering, Sri Venkateswara College of Engineering, is proud to organize a Two-Day Bilingual Conference on Healthcare and MedTech, to be conducted in Tamil and English. This pioneering initiative aims to foster a culture of knowledge democratization, technological innovation, and regional inclusivity.The conference will serve as a dynamic platform for academicians, researchers, industry professionals, and students to engage in meaningful dialogues, share research insights, and showcase innovations in the field of Healthcare and Medical Technologies. It will spotlight the pivotal contributions of Electronics, Signal Processing, Internet of Things (IoT), Artificial Intelligence (AI), and Embedded Systems in revolutionizing healthcare delivery, diagnostics, patient monitoring, and personalized medicine. This initiative also resonates with the National Education Policy (NEP) 2020, which emphasizes the use of regional languages in higher education to improve learning outcomes.",
      },
      institute: {
        title: "About SVCE Department",
        content:
          "Sri Venkateswara College of Engineering (SVCE) (a unit of the Sri Venkateswara Educational and Health Trust) is one of Tamil Nadu's premier technical institutions. The college spans a sprawling 95-acre lush green campus and has architecturally designed buildings and state-of-the-art infrastructure. The National Assessment and Accreditation Council (NAAC) accredited the institution with an A+ grade. All eligible programmes are also accredited by the National Board of Accreditation (NBA), reflecting SVCE’s dedication to quality education and global standards. SVCE envisions becoming a \"Centre of Excellence\" by providing top-notch engineering education and fostering innovation, research, and holistic development. The institution is committed to nurturing ethical values, leadership qualities, and lifelong learning while addressing societal and industrial challenges. By integrating state-of-the-art teaching methodologies, industry collaboration, and real-world problem-solving approaches, SVCE aims to produce responsible, skilled engineers who contribute effectively to societal and national progress. SVCE is home to 11 research centers that foster innovation, interdisciplinary collaboration, and advanced problem-solving. These centers focus on cutting-edge areas such as Artificial Intelligence, Robotics, Renewable Energy, Biotechnology, Cybersecurity, and more.",
      },
      department: {
        title: "About ECE Department",
        content:
          "The Department of Electronics and Communication Engineering was established in 1985 and is currently accredited by the National Board of Accreditation (NBA). The department expanded its academic offerings with the introduction of M.E. Communication Systems in 2002. Our department is an Anna University recognised research centre that drives innovation, fosters interdisciplinary collaboration, and promotes research in the fields of Signal Processing, Embedded and IoT, VLSI, RF & Microwave, Robotics, AI & ML, and more. By encouraging active participation from both students and faculty, the department supports impactful research and development aligned with global advancements and societal needs. The department is well-equipped with advanced laboratory facilities and a wide range of software tools such as IE3D, ADS, CST Studio, LabVIEW, Tanner Tools, Cadence, MATLAB campus-wide license and a PCB Prototype Machine, supporting both academic learning and research activities. The department plays a pivotal role in connecting theoretical concepts with practical Engineering applications, aiming to cultivate scientific curiosity and contribute to technological advancements through dedicated research and education.",
      },
      quote:
        "Examine the disease, find its cause, analyze the cure, and then begin the right treatment - Thirukkural (couplet 948)",
    },
    tracks: {
      title: "Conference Themes",
      items: [
        {
          title: "Track 1: Robotics, Automation, and Surgical AI ",
          description:
                  [
            "• Robotics & Automation in Surgery",
            "• Rehabilitation Engineering & Assistive Technologies"
         ].join('\n')
        },
        {
          title: "Track 2: Medical Imaging and Diagnostics",
          description:
            [
              "• Medical Imaging & Signal Processing",
              "• AI in Disease Diagnosis",
              "• Big Data Analytics for Public Health",
              "• Chatbots & AI Assistants in Patient Care",
              "• Image-guided therapy",
              "• Real-time data processing in diagnostics",
              "• Multimodal Imaging Fusion"
            ].join('\n')
        },
        {
          title: "Track 3: Wearables, IoT, and Remote Healthcare",
          description:
            [
              "• Wearable Health Devices & Remote Monitoring",
              "• Smart Hospitals & IoT-Based Healthcare Systems",
              "• Remote patient management and chronic disease monitoring"
            ].join('\n')
        },
        {
          title: "Track 4: 3D Printing and Regenerative Medicine",
          description:
            [
              "• 3D Printing in Medicine (Prosthetics, Implants)",
              "• Customized prosthetics and implants"
            ].join('\n')
        },
        {
          title: "Track 5: Bioelectronics, Smart Biomaterials, andNeural Tech",
          description:
            [
              "• Biotechnology-driven Drug Delivery Systems",
              "• Biosensors and Bioelectronics for Diagnostics",
              "• Biohybrid Systems and Neural Interfaces",
              "• Sensor-integrated smart biomaterials (e.g., pH-responsive implants)"
            ].join('\n')
        },
        {
          title: "Track 6: Healthcare Security, and Emerging Tech",
          description:
            [
              "• Blockchain for Secure Medical Records and Pharmaceutical Supply Chain",
              "• Virtual Reality (VR) & Augmented Reality (AR) in Medical Training & Surgical Simulation",
              "• Digital Twins in Healthcare",
              "• 5G/6G Networks for Remote Patient Monitoring",
              "• Telemedicine & Remote Diagnostics"
            ].join('\n')
        },

      ],
    },
    speakers: {
      title: "Resource Persons",
      list: [
        {
          name: "Dr. Ilankumaran Kaliamoorthy",
          designation: "Chief Executive Officer, Consultant Liver Intensivist & Anaesthetist",
          organization: "Apollo Hospitals, Chennai Region, Chennai. ",
          image: "/Dr Ilankumaran kaliamoorthy.jpeg.jpg?height=200&width=200",
        },
        {
          name: "Mr.Sriram Bhakthan",
          designation: "Sr. Technical Support Manager",
          organization: "Wipro GE Healthcare",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Dr.Jagdish.A.K",
          designation: "Head-R&D",
          organization: "Adiuvo Diagnostics Pvt. Ltd.",
          image: "/Dr. Jagdish A.K.jpeg.jpg?height=200&width=200",
        },
        {
          name: "Dr. Mohan Narasimhan",
          designation: "Chief Coordinator,Mental Health care & De-Addiction Programme",
          organization: "Chennai De-Addiction Centre",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Dr. N. Ramakrishnan",
          designation: "Director, Critical Care Services",
          organization: "Apollo Hospitals and Managing Director & CEO - Chennai Critical Care Consultants",
          image: "/Dr. N. Ramakrishnan.png?height=200&width=200",
        },
        {
          name: "Dr. S. Poonguzhali",
          designation: "Professor, Department of Biomedical Engineering",
          organization: "Anna University, Chennai.",
          image: "/Dr. S. Poonguzhali.jpeg.jpg?height=200&width=200",
        },
        {
          name: "Dr.N.Arunachalam",
          designation: "Professor, Department of Mechanical Engineering",
          organization: "IIT Madras",
          image: "/Dr.N.Arunachalam.png?height=200&width=200",
        },
        {
          name: "Dr. P. Vijayalakshmi",
          designation: "Professor & Head, Department of Electronics and Communication Engineering",
          organization: "SSN College of Engineering, Chennai",
          image: "/Dr. P. Vijayalakshmi.jpg?height=200&width=200",
        },
        {
          name: "Mr.Nitin Balajee Ravi",
          designation: "Head, R&D",
          organization: "Tera Lumen Solutions Pvt. Ltd., Chennai",
          image: "/Mr.Nitin Balaji Ravi.webp?height=200&width=200",
        },
        {
          name: "Dr.Arulalan Rajan",
          designation: "Founder and Director, Vidyakosha Pvt. Ltd.,Bangalore.",
          organization: "(Formerly Faculty, Proficiency Programme, CCE, IISc, Bangalore)",
          image: "/Dr.Arulalan Rajan.webp?height=200&width=200",
        },
        {
          name: "Mr.Madhusudhan Krishnan",
          designation: "Head-Data Science",
          organization: "AI and BI Solutions, Bristol-Myers Squibb, Hyderabad.",
          image: "/placeholder.svg?height=200&width=200",
        },
       
      ],
    },
    committee: {
      title: "Organizing Committee",
      chiefpatron: "Chief Patron",
      patron: "Patron",
      copatron: "Co-Patron",
      chairperson: "Chairperson",
      conveners: "Conveners",
      coconveners: "Co-Conveners",
      members: {
        chiefpatron: "Dr. A.C. Muthiah, Chairman, SVCE",
         patron: "Dr.M.Sivanandham, Secretary,  SVCE",
         copatron: "Dr.S.Ganesh Vaidyanathan, Principal, SVCE",
        chairperson: "Dr. N. Kumaratharan, Professor and Head, ECE Department",
        conveners: [
          "Dr.D.Menaka, Associate Professor , Department of Electronics and Communication Engineering, SVCE",
          "Ms. L. Anju, Assistant Professor, Department of Electronics and Communication Engineering, SVCE",
        ],
        coconveners: [
          "Ms.K.Srividhya, Assistant Professor, Department of Electronics and Communication Engineering, SVCE",
          "Ms.K.S.Subhashini, Assistant Professor, Department of Electronics and Communication Engineering, SVCE",
          "Ms.S.Kalyani, Assistant Professor, Department of Electronics and Communication Engineering, SVCE",
          "Mr.M.K.Varadarajan, Assistant Professor, Department of Electronics and Communication Engineering, SVCE",
        ],
      },
    },
    registration: {
      title: "Registration",
      fee: "No Registration Fee",
      limited: "Limited to 50 Participants",
      deadline: "Last Date: September 10, 2025",
      form: "Registration Form",
      whatsapp: "WhatsApp Group",
    },
    footer: {
      title: "Getting Here",
      copyright: "© 2025 MedNext Conference. All rights reserved.",
      dev: "Developed by Bawadharani Sree R",
    },
  },
  ta: {
   paperSubmission: {
  title: "கட்டுரை சமர்ப்பிப்பு வழிகாட்டுதல்கள்",
  instructions: [
   //  "ஆசிரியர்கள் தங்கள் கட்டுரையைத் தமிழில் மாநாட்டில் வழங்க வேண்டும்",
   //  "கட்டுரைகள் தமிழ் மற்றும் ஆங்கிலம் இரண்டு மொழிகளிலும் சமர்ப்பிக்கப்பட வேண்டும்",
   //  "ஆங்கில பதிப்பு தமிழ் கட்டுரையின் நேரடி மொழிபெயர்ப்பாக இருக்க வேண்டும்",
   //  "இரண்டு பதிப்புகளும் ஒரே வடிவமைப்பு வழிகாட்டுதல்களைப் பின்பற்ற வேண்டும்",
   //  "ஆன்லைன் போர்ட்டல் மூலம் சமர்ப்பிக்கவும் (இணைப்பு வழங்கப்படும்)"
   "ஆசிரியர்கள் தங்கள் ஆய்வுக் கட்டுரையை தமிழில் சமர்ப்பிக்க வேண்டும்.",
"இந்த ஆய்வுக் கட்டுரை தமிழ் மற்றும் ஆங்கிலம் ஆகிய இரு பதிப்புகளிலும் சமர்ப்பிக்கப்பட வேண்டும்."
  ],
  formatting: {
    title: "வடிவமைப்பு வழிகாட்டுதல்கள்",
    items: [
      "குறிப்புகள் உட்பட அதிகபட்சம் 6 பக்கங்கள்",
      "1-இன்ச் விளிம்புகளுடன் A4 அளவு காகிதம்",
      "12pt எழுத்துரு அளவு, டைம்ஸ் நியூ ரோமன்",
      "PDF வடிவம் மட்டும்"
    ]
  }
},
    nav: {
      home: "முகப்பு",
      about: "பற்றி",
      tracks: "தலைப்புகள்",
      instructions: "வழிமுறைகள்",
      speakers: "பேச்சாளர்கள்",
      committee: "குழு",
      registration: "பதிவு",
    },
    hero: {
      title: "மெட் நெக்ஸ்ட் 2025:",
      subtitle:
        "செயற்கை நுண்ணறிவு, உருவபதிப்பு, சாதனங்கள் மற்றும் நோயறிதல் மூலம் உடல்நலத்தின் எதிர்காலத்தை வடிவமைத்தல்",
      dates: "அக்டோபர் 9 மற்றும் 10ஆம் தேதி 2025",
      cta: "பதிவு செய்யுங்கள்",
      scrolling:
        "பதிவு கட்டணம் இல்லை • 50 பேர் மட்டும் • AICTE நிதியுதவி மாநாடு",
    },
    about: {
      title: "கருத்தரங்கம் பற்றி",
      conference: {
        title: "கருத்தரங்கம் பற்றி",
        content:
"அகில இந்திய தொழில்நுட்பக் கல்வி மன்றம், தொழில்நுட்பக் கல்வியை இந்திய மொழிகளிலும் வழங்கும் நோக்குடன், வாணி (VAANI) என்ற திட்டத்தை அறிமுகப்படுத்தியுள்ளது. இந்தத் திட்டத்தின் மூலம், மாணவர்கள் தங்கள் தாய்மொழியில் தொழில்நுட்பக் கல்வி பயிலும் வாய்ப்பு ஏற்படுகிறது. இதன் மூலம் கல்வி மேலும் விளக்கமாகவும், அணுகக்கூடியதாகவும் மாறுகிறது. இத்தகைய முயற்சி, மாணவர்கள் பொறியியல் பாடங்களை ஆழமாகப் புரிந்து கொள்ளும் திறனை வளர்க்கும்.இந்த உயர்ந்த நோக்கத்தை ஆதரித்து, ஸ்ரீ வெங்கடேஸ்வரா பொறியியல் கல்லூரியின் மின்னணு மற்றும் தொடர்பியல் துறை, \"மருத்துவத்துறையும் மருத்துவத் தொழில்நுட்பங்களும்\" என்ற தலைப்பில் இரு நாள் இருமொழி (தமிழ் மற்றும் ஆங்கிலம்) கருத்தரங்கத்தை நடத்த உள்ளது. இந்த கருத்தரங்கு, அறிவை மக்கள் அனைவருக்கும் எளிதில் எடுத்துச் செல்லும் பணியில் ஒரு முன்னோடியான படியாக அமையும். இது தொழில்நுட்ப வளர்ச்சியையும், பிராந்திய பங்களிப்பையும் ஊக்குவிக்கும். கருத்தரங்கத்தில் கல்வியாளர்கள், ஆராய்ச்சியாளர்கள், தொழில் நிபுணர்கள் மற்றும் மாணவர்கள் கலந்து கொண்டு, மருத்துவம் மற்றும் மருத்துவத் தொழில்நுட்பத்தில் மேற்கொண்ட ஆய்வுகள், கண்டுபிடிப்புகள், புதிய புரிதல்களை பகிர்ந்து கொள்வதற்கான அரிய வாய்ப்பு கிடைக்கும். குறிப்பாக, மின்னணு, சிக்னல் செயலாக்கம், பொருட்களின் இணையம் (IoT), செயற்கை நுண்ணறிவு (AI), மற்றும் உட்பொதிந்த அமைப்புகள் ஆகியவை மருத்துவ சேவைகள், நோயறிதல் முறைகள், நோயாளிக் கண்காணிப்பு மற்றும் தனிப்பயன் மருத்துவத்திற்கும் மிகப்பெரிய மாற்றங்களை ஏற்படுத்துகின்றன என்பதையும் இந்த கருத்தரங்கு முன்வைக்கும். மேலும், இந்த கருத்தரங்கு தேசியக் கல்விக் கொள்கை 2020-இன் சிறப்பு அம்சமான, உயர்கல்வியில் தாய்மொழியின் பயன்பாட்டை வலியுறுத்தும் எண்ணத்துடன் இணைந்துள்ளது. இது மாணவர்களின் கற்றல் திறனை மேம்படுத்தும் ஒரு சிறந்த முயற்சியாகும்."      },
      institute: {
        title: "SVCE பற்றி",
        content:
        "ஸ்ரீ வெங்கடேஸ்வரா பொறியியல் கல்லூரி (ஸ்ரீ வெங்கடேஸ்வரா கல்வி மற்றும் சுகாதார அறக்கட்டளையின் ஒரு பிரிவு), தமிழ்நாட்டின் முதன்மையான தொழில்நுட்ப நிறுவனங்களில் ஒன்றாகும். இக்கல்லூரியானது பரந்து விரிந்த 95 ஏக்கர் பசுமையான வளாகத்தையும் அதிநவீன உள்கட்டமைப்புகளையும் கொண்டுள்ளது. இந்த நிறுவனம் தேசிய மதிப்பீடு மற்றும் அங்கீகாரக் கழகத்தால் (NAAC) A+ தர அடையாளத்துடன் அங்கீகரிக்கப்பட்டுள்ளது. மேலும், தகுதியுடைய அனைத்து பாடநெறிகளும் தேசிய ஒழுங்குமுறை அங்கீகார வாரியத்தால் (NBA) அங்கீகரிக்கப்பட்டுள்ளன.இந்தக் கல்வி நிறுவனம், \"சிறப்புமிக்க மையமாக\” மாறுவதை நோக்கமாகக் கொண்டு, உயர்தர பொறியியல் கல்வி வழங்குவதில் முன்னிலை வகிக்கிறது. நவீன கற்பித்தல் முறைகள், தொழில் ஒத்துழைப்பு மற்றும் நிஜ உலக பிரச்சனைகளை தீர்க்கும் அணுகுமுறைகளை ஒருங்கிணைத்து, சமூக மற்றும் தேசிய முன்னேற்றத்திற்கு திறம்பட பங்களிக்கும் பொறுப்புள்ள மற்றும் திறமையான பொறியாளர்களை உருவாக்குவதை கல்லூரி நோக்கமாகக் கொண்டுள்ளது. இந்தக் கல்லூரியில் 11 ஆராய்ச்சி மையங்கள் இயங்கி வருகின்றன.  இது புதுமை, இடைநிலை ஒத்துழைப்பு மற்றும் மேம்பட்ட சிக்கல்களைத் தீர்ப்பதில் கவனம் செலுத்துகிறது. இந்த மையங்கள் செயற்கை நுண்ணறிவு, ரோபாட்டிக்ஸ், புதுப்பிக்கத்தக்க எரிசக்தி, உயிரி தொழில்நுட்பம், சைபர் பாதுகாப்பு போன்ற அதிநவீன துறைகளில் கவனம் செலுத்துகின்றன. உலகளாவிய பரிமாணங்களுக்கும் சமூக தேவைகளுக்கும் ஏற்ப, மாணவர்களும் பேராசிரியர்களும் முக்கியமான ஆராய்ச்சி மற்றும் மேம்பாட்டு செயல்களில் ஈடுபட வேண்டும் என்பதே கல்லூரியின் ஊக்குவிப்பு நோக்கமாகும்."
      },
      department: {
        title: "ECE துறை பற்றி",
        content:
"மின்னணுவியல் மற்றும் தொடர்பியல் பொறியியல் துறை 1985 ஆம் ஆண்டு நிறுவப்பட்டது மற்றும் தற்போது தேசிய அங்கீகார வாரியத்தால் (NBA) அங்கீகாரம் பெற்றுள்ளது. 2002 ஆம் ஆண்டு M.E. தொடர்பியல் அமைப்பை அறிமுகப்படுத்தியது. எங்கள் துறை அண்ணா பல்கலைக்கழகத்தால் அங்கீகரிக்கப்பட்ட ஆராய்ச்சி மையமாகும், இது புதுமைகளை இயக்குகிறது, துறைகளுக்கு இடையேயான ஒத்துழைப்பை வளர்க்கிறது மற்றும் சிக்னல் செயலாக்கம், உட்பொதிக்கப்பட்ட மற்றும் IoT, VLSI, RF & மைக்ரோவேவ், ரோபாட்டிக்ஸ், AI & ML மற்றும் பல துறைகளில் ஆராய்ச்சியை ஊக்குவிக்கிறது. மாணவர்கள் மற்றும் ஆசிரியர்களிடமிருந்து செயலில் பங்கேற்பதை ஊக்குவிப்பதன் மூலம், உலகளாவிய முன்னேற்றங்கள் மற்றும் சமூகத் தேவைகளுடன் இணைந்த தாக்கத்தை ஏற்படுத்தும் ஆராய்ச்சி மற்றும் மேம்பாட்டை இந்தத் துறை ஆதரிக்கிறது. இந்தத் துறை மேம்பட்ட ஆய்வக வசதிகள் மற்றும் IE3D, ADS, CST ஸ்டுடியோ, லேப்வியூ, டேனர் கருவிகள், கேடென்ஸ், MATLAB வளாக அளவிலான உரிமம் மற்றும் PCB முன்மாதிரி இயந்திரம் போன்ற பரந்த அளவிலான மென்பொருள் கருவிகளுடன் நன்கு பொருத்தப்பட்டுள்ளது, இது கல்வி கற்றல் மற்றும் ஆராய்ச்சி நடவடிக்கைகள் இரண்டையும் ஆதரிக்கிறது. தத்துவார்த்த கருத்துக்களை நடைமுறை பொறியியல் பயன்பாடுகளுடன் இணைப்பதில் துறை முக்கிய பங்கு வகிக்கிறது, அறிவியல் ஆர்வத்தை வளர்ப்பதையும், அர்ப்பணிப்புள்ள ஆராய்ச்சி மற்றும் கல்வி மூலம் தொழில்நுட்ப முன்னேற்றங்களுக்கு பங்களிப்பதையும் நோக்கமாகக் கொண்டுள்ளது."
      },
      quote:
        "நோய்நாடி நோய்முதல் நாடி அதுதணிக்கும் \nவாய்நாடி வாய்ப்பச் செயல். \n\t\t\t\t\t\t- திருக்குறள் (குறள் 948)",
    },
    tracks: {
      title: "கருத்தரங்கத் தலைப்புகள்",
      items: [
        {
          title: "தொகுப்பு 1: ரோபாட்டிக்ஸ், தானியங்கி கட்டுப்பாடு மற்றும் அறுவை சிகிச்சை செயற்கை நுண்ணறிவு (AI)",
          description: [
        "• அறுவை சிகிச்சையில் ரோபாட்டிக்ஸ் மற்றும் தானியங்கி கட்டுப்பாடு",
        "• மீளமைப்புப் பொறியியல் மற்றும் உதவித் தொழில்நுட்பங்கள்"
      ].join('\n')
    },
    {
      title: "தொகுப்பு 2: மருத்துவ உருவப்படம் மற்றும் நோய் கண்டறிதல்",
      description: [
        "• மருத்துவ உருவப்படம் மற்றும் சிக்னல் செயலாக்கம்",
        "• நோயறிதலில் செயற்கை நுண்ணறிவு (AI)",
        "• பொதுச் சுகாதாரத்திற்கான பெரிய தரவுப் பகுப்பாய்வு",
        "• நோயாளி பராமரிப்பில் செயற்கை நுண்ணறிவு சாட்பாட்கள் மற்றும் உதவியாளர்கள்",
        "• படத்தின் வழிகாட்டலுடன் சிகிச்சை",
        "• நோயறிதலில் நேரடி தரவுப் செயலாக்கம்",
        "• பன்முக உருவப்பட இணைப்பு (Multimodal Imaging Fusion)"
      ].join('\n')
    },
    {
      title: "தொகுப்பு 3: அணிகலன்கள், இணையதளப் பொருட்கள் (IoT), மற்றும் தொலைநிலை சுகாதாரம்",
      description: [
        "• அணிகலன் மருத்துவ சாதனங்கள் மற்றும் தொலைவிலிருந்து கண்காணித்தல்",
        "• புத்திசாலி மருத்துவமனைகள் மற்றும் IoT அடிப்படையிலான சுகாதார அமைப்புகள்",
        "• தொலைநிலை நோயாளி மேலாண்மை மற்றும் நீடித்த நோய் கண்காணிப்பு"
      ].join('\n')
    },
    {
      title: "தொகுப்பு 4: 3D அச்சுப்பதிப்பகம் மற்றும் மீள்உருவாக்க மருத்துவம்",
      description: [
        "• மருத்துவத்தில் 3D அச்சுப்பதிப்பு (புரோஸ்தடிக்ஸ், இமPlantகள்)",
        "• தனிப்பயனாக்கப்பட்ட புரோஸ்தடிக்ஸ் மற்றும் இமPlantகள்"
      ].join('\n')
    },
    {
      title: "தொகுப்பு 5: உயிர் எலெக்ட்ரானிக்ஸ், புத்திசாலி உயிர் பொருட்கள் மற்றும் நரம்பியல் தொழில்நுட்பம்",
      description: [
        "• உயிரி தொழில்நுட்ப அடிப்படையிலான மருந்து வழங்கல் முறைமைகள்",
        "• கண்டறிதலுக்கான உயிர் உணரிகள் மற்றும் உயிர் எலெக்ட்ரானிக்ஸ்",
        "• உயிர் இணைப்பு அமைப்புகள் மற்றும் நரம்பியல் இடைமுகங்கள்",
        "• உணரிகள் சேர்க்கப்பட்ட புத்திசாலி உயிர் பொருட்கள் (உதாரணமாக, பிஹெச் எதிர்வினைப் பொருட்கள் கொண்ட இமPlantகள்)"
      ].join('\n')
    },
    {
      title: "தொகுப்பு 6: சுகாதார பாதுகாப்பு மற்றும் புதிய தொழில்நுட்பங்கள்",
      description: [
        "• பாதுகாப்பான மருத்துவ பதிவுகளுக்கும் மருந்து வழங்கல் சங்கிலிக்குமான பிளாக்செயின் தொழில்நுட்பம்",
        "• மருத்துவ பயிற்சி மற்றும் அறுவை சிகிச்சை வடிவூட்டலில் மெய்நிகர் யதார்த்தம் (VR) மற்றும் விரிவாக்கப்பட்ட யதார்த்தம் (AR)",
        "• சுகாதாரத்துறையில் டிஜிட்டல் ட்வின்கள் (Digital Twins)",
        "• தொலைநிலை நோயாளி கண்காணிக்க 5G/6G நெட்வொர்க்குகள்",
        "• தொலை மருத்துவம் மற்றும் தொலைவிலிருந்து நோய் கண்டறிதல்"
      ].join('\n')
    }
  ],
},
    speakers: {
      title: "முக்கிய அழைப்புப் பேச்சாளர்கள்",
      list: [
        {
          name: "முனைவர் இளங்குமரன் கலியமூர்த்தி",
          designation: "தலைமை நிர்வாக அதிகாரி, கல்லீரல் தீவிர சிகிச்சை பிரிவு மற்றும் மயக்கவியல் நிபுணர்",
          organization:
            "அப்பல்லோ மருத்துவமனைகள், சென்னை பிராந்தியம், சென்னை.",
          image: "/Dr Ilankumaran kaliamoorthy.jpeg.jpg?height=200&width=200",
        },
        {
          name: "திரு. ஸ்ரீராம் பக்தன்",
          designation: "மூத்த தொழில்நுட்ப ஆதரவு மேலாளர்",
          organization: "விப்ரோ ஜி.இ. ஹெல்த்கேர்",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "முனைவர் ஜெகதீஷ் ஏ.கே.",
          designation: "ஆராய்ச்சி மற்றும் மேம்பாடு தலைவர்",
          organization: "அடியூவோ டயக்னோஸ்டிக்ஸ் பிவிடி. லிமிடெட்",
          image: "/Dr. Jagdish A.K.jpeg.jpg?height=200&width=200",
        },
        {
          name: "முனைவர் மோகன் நரசிம்மன்",
          designation: "தலைமை ஒருங்கிணைப்பாளர், மனநல சேவை மற்றும் மதப்பிரிவினை நீக்கும் திட்டம்",
          organization: "சென்னை டி-அடிக்ஷன் சென்டர்",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "முனைவர் என். ராமகிருஷ்ணன்",
          designation: "இயக்குநர், தீவிர சிகிச்சை சேவைகள்",
          organization: "அபோலோ மருத்துவமனை மற்றும் மேலாண்மை இயக்குநர் மற்றும் தலைமை நிர்வாக அதிகாரி –சென்னை கிரிடிக்கல் கேர் கன்சல்டன்ட்ஸ்.",
          image: "/Dr. N. Ramakrishnan.png?height=200&width=200",
        },
        {
          name: "முனைவர் எஸ். பூங்குழலி",
          designation: "பேராசிரியர், உயிர்நுட்ப வல்லுநர் துறை",
          organization: "அண்ணா பல்கலைக்கழகம், சென்னை.",
          image: "/Dr. S. Poonguzhali.jpeg.jpg?height=200&width=200",
        },
        {
          name: "முனைவர் என். அருணாச்சலம்",
          designation: "பேராசிரியர், இயந்திரவியல் துறை",
          organization: "ஐஐடி மெட்ராஸ்",
          image: "/Dr.N.Arunachalam.png?height=200&width=200",
        },
        {
          name: "முனைவர் பி. விஜயலட்சுமி",
          designation: "பேராசிரியர் மற்றும் தலைவர்,மின்னணு மற்றும் தொடர்பியல் பொறியியல் துறை",
          organization: "எஸ்எஸ்என் இன்ஜினியரிங் கல்லூரி, சென்னை",
          image: "/Dr. P. Vijayalakshmi.jpg?height=200&width=200",
        },
        {
          name: "திரு. நிதின் பாலாஜி ரவி",
          designation: "ஆராய்ச்சி மற்றும் மேம்பாட்டு தலைவர்",
          organization: "டெரா லூமன் சோலுஷன்ஸ் பிவிடி. லிமிடெட்., சென்னை",
          image: "/Mr.Nitin Balaji Ravi.webp?height=200&width=200",
        },
        {
          name: "முனைவர் அருளாளன் ராஜன்",
          designation: "நிறுவனர் மற்றும் இயக்குநர், வித்யகோஷா பிவிடி. லிமிடெட்., பெங்களூர்.",
          organization: "(முன்னாள் பேராசிரியர், திறமை மேம்பாட்டு திட்டம், தொடர்ச்சியான கல்வி மையம், இந்திய அறிவியல் நிறுவனம், பெங்களூர்.)",
          image: "/Dr.Arulalan Rajan.webp?height=200&width=200",
        },
        {
          name: "திரு. மதுசூதன் கிருஷ்ணன்",
          designation: "தரவியல் அறிவியல் தலைவர்",
          organization: "செயற்கை நுண்ணறிவு மற்றும் வணிக நுண்ணறிவு தீர்வுகள், பிரிஸ்டல்-மையர்ஸ் ஸ்குவிப், ஹைதராபாத்.",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    committee: {
      title: "ஏற்பாட்டுக் குழு",
      chiefpatron: "தலைமை ஆதரவாளர்",
      patron: "ஆதரவாளர்",
      copatron: "இணை ஆதரவாளர்",
      chairperson: "தலைவர்",
      conveners: "அழைப்பாளர்கள்",
      coconveners: "இணை அழைப்பாளர்கள்",
      members: {
        chiefpatron: "முனைவர் ஏ.சி. முத்தையா, தலைவர், ஸ்ரீ வெங்கடேஸ்வரா பொறியியல் கல்லூரி (SVCE)",
         patron: "முனைவர் எம். சிவானந்தம், செயலாளர், ஸ்ரீ வெங்கடேஸ்வரா பொறியியல் கல்லூரி (SVCE)",
         copatron: "முனைவர் எஸ். கணேஷ் வைத்யநாதன், முதல்வர், ஸ்ரீ வெங்கடேஸ்வரா பொறியியல் கல்லூரி (SVCE)",
        chairperson: "முனைவர் என். குமரதரன், பேராசிரியர் மற்றும் துறைத் தலைவர், மின்னணு மற்றும் தொடர்பியல் பொறியியல் துறை, SVCE",
        conveners: [
          "முனைவர் டி. மேனகா, தொடர்பாசிரியர், மின்னணு மற்றும் தொடர்பியல் பொறியியல் துறை, SVCE",
          "திருமதி எல். அஞ்சு, உதவிப் பேராசிரியர், மின்னணு மற்றும் தொடர்பியல் பொறியியல் துறை, SVCE"
        ],
        coconveners: [
          "திருமதி கே. ஸ்ரீவித்யா, உதவிப் பேராசிரியர், மின்னணு மற்றும் தொடர்பியல் பொறியியல் துறை, SVCE",
          "திருமதி கே.எஸ். சுபாஷினி, உதவிப் பேராசிரியர், மின்னணு மற்றும் தொடர்பியல் பொறியியல் துறை, SVCE",
          "திருமதி எஸ். கல்யாணி, உதவிப் பேராசிரியர், மின்னணு மற்றும் தொடர்பியல் பொறியியல் துறை, SVCE",
          "திரு எம். கே. வரதராஜன், உதவிப் பேராசிரியர், மின்னணு மற்றும் தொடர்பியல் பொறியியல் துறை, SVCE"
        ],
      },
    },
    registration: {
      title: "பதிவு",
      fee: "பதிவு கட்டணம் இல்லை",
      limited: "50 பேர் மட்டும்",
      deadline: "கடைசி தேதி: செப்டம்பர் 10, 2025",
      form: "பதிவு படிவம்",
      whatsapp: "வாட்ஸ்அப் குழு",
    },
    footer: {
      title: "எங்களை எவ்வாறு அணுகலாம்",
      copyright:
        "© 2025 மெட் நெக்ஸ்ட் மாநாடு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      dev: "பவதாரணி ஸ்ரீ. இரா அவர்களால் உருவாக்கப்பட்டது",
    },
  },
};

export default function MedNextConference() {
  const [language, setLanguage] = useState<"en" | "ta">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const t = content[language];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ta" : "en"));
  };

  return (
    <div className="min-h-screen bg-white">
{/* Logo Strip - No Border, Narrow, Large Logos */}
<div className="bg-white py-2">  {/* Reduced padding (py-4 → py-2) */}
  <div className="container mx-auto px-4 flex items-center justify-between">
    <div className="flex items-center">
      <Image
        src="/AICTE_Logo.png?height=80&width=160"
        alt="AICTE Logo"
        width={160}
        height={80}
        className="h-16 w-auto"  // Large logo (h-16)
      />
    </div>
    <div className="text-center">
  <h1 className="text-5xl font-bold text-[#004aad]">
    {language === "ta" ? (
      <span className="text-4xl font-tamil">மெட்நெக்ஸ்ட் 2025</span>
    ) : (
      "MedNext 2025"
    )}
  </h1>
</div>
    <div className="flex items-center">
      <Image
        src="/svce_logo.jpg?height=80&width=200"
        alt="SVCE Logo"
        width={200}
        height={80}
        className="h-16 w-auto"  // Large logo (h-16)
      />
    </div>
  </div>
</div>

      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 bg-[#004aad] transition-all duration-300 ${
          scrollY > 100 ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="hidden lg:flex space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key === "home" ? "hero" : key)}
                  className="text-white hover:text-[#ff914d] transition-colors duration-200 font-medium"
                >
                  {value}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="bg-white text-[#004aad] border-white hover:bg-[#ff914d] hover:text-white hover:border-[#ff914d]"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === "en" ? "தமிழ்" : "English"}
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#004aad] border-t border-blue-600">
              <div className="py-4 space-y-2">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() =>
                      scrollToSection(key === "home" ? "hero" : key)
                    }
                    className="block w-full text-left px-4 py-2 text-white hover:bg-blue-600 transition-colors"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scrolling Announcement */}
      <div className="bg-[#ff914d] text-white py-2 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-sm font-medium">{t.hero.scrolling}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[70vh] md:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#004aad] via-[#0276db] to-[#004aad] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Image Background */}
         <div className="absolute inset-0">
            <Image
               src="svce_abt_college.jpg" // Replace with your image path
               alt="Conference Background"
               fill
               className="object-cover"
               quality={100}
               priority // Important for hero images
            />
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/40"></div>
         </div>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          {/* Animated particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-100"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${
              language === "ta" ? "font-tamil" : ""
            }`}
          >
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {t.hero.subtitle}
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8 text-lg">
            <Calendar className="w-6 h-6" />
            <span>{t.hero.dates}</span>
          </div>
          <Button
            onClick={() => scrollToSection("registration")}
            size="lg"
            className="bg-[#ff914d] hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#f4f5f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004aad] mb-16">
            {t.about.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#004aad]">
                  {t.about.conference.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {t.about.conference.content}
                </p>
              </CardContent>
            </Card>

            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#004aad]">
                  {t.about.institute.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="svce_abt_college.jpg?height=200&width=300"
                    alt="SVCE Campus"
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t.about.institute.content}
                </p>
              </CardContent>
            </Card>

            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#004aad]">
                  {t.about.department.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {t.about.department.content}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <blockquote className="text-lg italic text-[#004aad] font-medium max-w-3xl mx-auto border-l-4 border-[#ff914d] pl-6 whitespace-pre-line">
              {t.about.quote}
            </blockquote>
          </div>
        </div>
      </section>



      {/* Tracks Section */}
      <section id="tracks" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004aad] mb-16">
            {t.tracks.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.tracks.items.map((track, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#ff914d]"
              >
                <CardHeader>
                  <CardTitle className="text-[#004aad] group-hover:text-[#ff914d] transition-colors">
                    {track.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {track.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paper Submission Section */}
<section id="instructions" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-[#004aad] mb-16">
      {t.paperSubmission.title}
    </h2>

    <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-[#004aad]">
            {language === "ta" ? "முக்கிய வழிமுறைகள்" : "Key Instructions"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {t.paperSubmission.instructions.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#ff914d] mr-2">•</span>
                <span className={language === "ta" ? "font-tamil" : ""}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-[#004aad]">
            {t.paperSubmission.formatting.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {t.paperSubmission.formatting.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#ff914d] mr-2">•</span>
                <span className={language === "ta" ? "font-tamil" : ""}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card> */}
    </div>

    {/* <div className="text-center mt-12">
      <Button
        asChild
        size="lg"
        className="bg-[#004aad] hover:bg-[#003882] text-white px-8 py-4 text-lg font-semibold rounded-full"
      >
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          {language === "ta" ? "கட்டுரை சமர்ப்பிக்க" : "Submit Paper"}
        </a>
      </Button>
    </div> */}
  </div>
</section>


      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-[#f4f5f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004aad] mb-16">
            {t.speakers.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.speakers.list.map((speaker, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#ff914d]"
                    />
                  </div>
                  <h3 className="font-bold text-[#004aad] mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {speaker.designation}
                  </p>
                  <p className="text-sm text-gray-500">
                    {speaker.organization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section id="committee" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004aad] mb-16">
            {t.committee.title}
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#004aad] flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  {t.committee.chiefpatron}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{t.committee.members.chiefpatron}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#004aad] flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  {t.committee.patron}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{t.committee.members.patron}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#004aad] flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  {t.committee.copatron}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{t.committee.members.copatron}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#004aad] flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  {t.committee.chairperson}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {t.committee.members.chairperson}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#004aad] flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  {t.committee.conveners}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {t.committee.members.conveners.map((convener, index) => (
                    <li key={index} className="text-gray-700">
                      • {convener}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#004aad] flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  {t.committee.coconveners}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {t.committee.members.coconveners.map((convener, index) => (
                    <li key={index} className="text-gray-700">
                      • {convener}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 bg-[#f4f5f7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#004aad] mb-16">
            {t.registration.title}
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 p-4 text-lg"
              >
                {t.registration.fee}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-800 p-4 text-lg"
              >
                {t.registration.limited}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-red-100 text-red-800 p-4 text-lg"
              >
                {t.registration.deadline}
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#0276db] hover:bg-[#004aad] text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                <a
                  href="https://forms.gle/puL3MQVWwjpFxVn48"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  {t.registration.form}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                <a
                  href="https://chat.whatsapp.com/IMGEiyz0wdlJvfkWYk0kTg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.registration.whatsapp}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#004aad] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.footer.title}</h3>
              <div className="rounded-lg overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.7406271989767!2d79.9720389!3d12.986980299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cd0cfb6e7ab%3A0x3294da3faad96a9!2sSri%20Venkateswara%20College%20of%20Engineering%20(SVCE)!5e1!3m2!1sen!2sin!4v1751295046297!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SVCE Location"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-4">
               <div className="flex items-center">
                  <span className="text-2xl font-bold mb-2">Contact Us</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>rajan@svce.ac.in</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+91 9790992194, 9942842979</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Sri Venkateswara College of Engineering, Chennai</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-600 mt-8 pt-8 text-center">
            <p>{t.footer.copyright}</p>
            <a
      href="https://github.com/BawadharaniSree"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:underline"
    >
            <p>{t.footer.dev}</p>
          </a>

          </div>
        </div>
      </footer>
    </div>
  );
}
