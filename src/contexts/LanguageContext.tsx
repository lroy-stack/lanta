
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'th';

// Define TypeScript interface for LanguageContext
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Define translation interface
export interface Translation {
  [key: string]: {
    en: string;
    th: string;
  };
}

// Default translations
export const translations: Translation = {
  // Navigation
  'nav.home': {
    en: 'Home',
    th: 'หน้าแรก',
  },
  'nav.discover': {
    en: 'Discover',
    th: 'ค้นพบ',
  },
  'nav.plan': {
    en: 'Plan Your Visit',
    th: 'วางแผนการเยี่ยมชม',
  },
  'nav.experiences': {
    en: 'Experiences',
    th: 'ประสบการณ์',
  },
  'nav.community': {
    en: 'Community',
    th: 'ชุมชน',
  },
  
  // Hero section
  'hero.title': {
    en: 'Experience Paradise on Earth',
    th: 'สัมผัสสวรรค์บนดิน',
  },
  'hero.subtitle': {
    en: 'Your complete guide to Thailand\'s most charming island',
    th: 'คู่มือที่สมบูรณ์สำหรับเกาะที่มีเสน่ห์ที่สุดของประเทศไทย',
  },
  'hero.search': {
    en: 'Search for beaches, activities, food...',
    th: 'ค้นหาชายหาด กิจกรรม อาหาร...',
  },
  'hero.explore': {
    en: 'Explore Koh Lanta',
    th: 'สำรวจเกาะลันตา',
  },
  'hero.book': {
    en: 'Book Accommodation',
    th: 'จองที่พัก',
  },
  'hero.join': {
    en: 'Join Community',
    th: 'เข้าร่วมชุมชน',
  },
  
  // Highlights section
  'highlights.title': {
    en: 'Island Highlights',
    th: 'ไฮไลท์เกาะลันตา',
  },
  'highlights.beaches': {
    en: 'Beaches',
    th: 'ชายหาด',
  },
  'highlights.activities': {
    en: 'Activities',
    th: 'กิจกรรม',
  },
  'highlights.food': {
    en: 'Food',
    th: 'อาหาร',
  },
  'highlights.culture': {
    en: 'Culture',
    th: 'วัฒนธรรม',
  },
  'highlights.accommodation': {
    en: 'Accommodation',
    th: 'ที่พัก',
  },
  
  // Map section
  'map.title': {
    en: 'Explore the Island',
    th: 'สำรวจเกาะ',
  },
  'map.description': {
    en: 'Discover all the amazing locations Koh Lanta has to offer',
    th: 'ค้นพบสถานที่น่าสนใจทั้งหมดที่เกาะลันตามีให้',
  },
  
  // Weather section
  'weather.title': {
    en: 'Current Weather',
    th: 'สภาพอากาศปัจจุบัน',
  },
  'weather.temp': {
    en: 'Temperature',
    th: 'อุณหภูมิ',
  },
  'weather.humidity': {
    en: 'Humidity',
    th: 'ความชื้น',
  },
  'weather.wind': {
    en: 'Wind',
    th: 'ลม',
  },
  'weather.celsius': {
    en: '°C',
    th: '°C',
  },
  'weather.fahrenheit': {
    en: '°F',
    th: '°F',
  },
  
  // Footer
  'footer.rights': {
    en: 'All rights reserved',
    th: 'สงวนลิขสิทธิ์',
  },
  'footer.contact': {
    en: 'Contact Us',
    th: 'ติดต่อเรา',
  },
  'footer.privacy': {
    en: 'Privacy Policy',
    th: 'นโยบายความเป็นส่วนตัว',
  },
  'footer.terms': {
    en: 'Terms of Service',
    th: 'เงื่อนไขการให้บริการ',
  },
  
  // Discover Page Navigation
  'discover.nav.beaches': {
    en: 'Beaches',
    th: 'ชายหาด',
  },
  'discover.nav.nature': {
    en: 'Nature & Wildlife',
    th: 'ธรรมชาติและสัตว์ป่า',
  },
  'discover.nav.culture': {
    en: 'Cultural Heritage',
    th: 'มรดกทางวัฒนธรรม',
  },
  'discover.nav.hidden': {
    en: 'Hidden Gems',
    th: 'สถานที่ลับ',
  },
  'discover.nav.stories': {
    en: 'Visual Stories',
    th: 'เรื่องราวภาพ',
  },
  
  // Plan Page
  'plan.title': {
    en: 'Plan Your Visit',
    th: 'วางแผนการเที่ยว',
  },
  'plan.subtitle': {
    en: 'Make the most of your trip to Koh Lanta with our planning tools and practical information.',
    th: 'ใช้ประโยชน์สูงสุดจากการเดินทางไปเกาะลันตาด้วยเครื่องมือวางแผนและข้อมูลที่ใช้งานได้จริง',
  },
  
  // Planning Dashboard
  'plan.dashboard.title': {
    en: 'Trip Planning Dashboard',
    th: 'แผงควบคุมการวางแผนการเดินทาง',
  },
  'plan.dashboard.progress': {
    en: 'Planning Progress',
    th: 'ความคืบหน้าการวางแผน',
  },
  'plan.dashboard.dates': {
    en: 'Travel Dates',
    th: 'วันที่เดินทาง',
  },
  'plan.dashboard.startDate': {
    en: 'Start Date',
    th: 'วันที่เริ่มต้น',
  },
  'plan.dashboard.endDate': {
    en: 'End Date',
    th: 'วันที่สิ้นสุด',
  },
  'plan.dashboard.groupSize': {
    en: 'Group Size',
    th: 'ขนาดกลุ่ม',
  },
  'plan.dashboard.budget': {
    en: 'Budget Range',
    th: 'งบประมาณ',
  },
  'plan.dashboard.interests': {
    en: 'Your Interests',
    th: 'ความสนใจของคุณ',
  },
  'plan.dashboard.savePlan': {
    en: 'Save Plan',
    th: 'บันทึกแผน',
  },
  'plan.dashboard.sharePlan': {
    en: 'Share Plan',
    th: 'แชร์แผน',
  },
  'plan.dashboard.suggestions': {
    en: 'Trip Suggestions',
    th: 'คำแนะนำการเดินทาง',
  },
  'plan.dashboard.basedOn': {
    en: 'Based on your interests',
    th: 'ตามความสนใจของคุณ',
  },
  'plan.dashboard.suggestedDuration': {
    en: 'Suggested Duration',
    th: 'ระยะเวลาที่แนะนำ',
  },
  'plan.dashboard.suggestedAreas': {
    en: 'Suggested Areas',
    th: 'พื้นที่แนะนำ',
  },
  'plan.dashboard.days': {
    en: 'days',
    th: 'วัน',
  },
  'plan.dashboard.selectInterests': {
    en: 'Select your interests to get personalized suggestions',
    th: 'เลือกความสนใจของคุณเพื่อรับคำแนะนำส่วนบุคคล',
  },
  
  // Itinerary Builder
  'plan.itinerary.title': {
    en: 'Interactive Itinerary Builder',
    th: 'สร้างกำหนดการเดินทางแบบโต้ตอบ',
  },
  'plan.itinerary.subtitle': {
    en: 'Plan Your Perfect Days on Koh Lanta',
    th: 'วางแผนวันที่สมบูรณ์แบบบนเกาะลันตา',
  },
  'plan.itinerary.description': {
    en: 'Drag and drop activities to build your custom daily itinerary.',
    th: 'ลากและวางกิจกรรมเพื่อสร้างกำหนดการรายวันที่กำหนดเอง',
  },
  'plan.itinerary.addDay': {
    en: 'Add Day',
    th: 'เพิ่มวัน',
  },
  'plan.itinerary.share': {
    en: 'Share',
    th: 'แชร์',
  },
  'plan.itinerary.export': {
    en: 'Export',
    th: 'ส่งออก',
  },
  'plan.itinerary.budget': {
    en: 'Budget Tracker',
    th: 'ติดตามงบประมาณ',
  },
  'plan.itinerary.estimatedCost': {
    en: 'Estimated cost per person',
    th: 'ค่าใช้จ่ายโดยประมาณต่อคน',
  },
  'plan.itinerary.activities': {
    en: 'Available Activities',
    th: 'กิจกรรมที่มี',
  },
  'plan.itinerary.hours': {
    en: 'hours',
    th: 'ชั่วโมง',
  },
  'plan.itinerary.empty': {
    en: 'Your Itinerary is Empty',
    th: 'กำหนดการของคุณว่างเปล่า',
  },
  'plan.itinerary.emptyDescription': {
    en: 'Start by adding days to your plan and then drag activities to fill your schedule.',
    th: 'เริ่มต้นด้วยการเพิ่มวันในแผนของคุณแล้วลากกิจกรรมเพื่อเติมตารางเวลาของคุณ',
  },
  'plan.itinerary.startPlanning': {
    en: 'Start Planning',
    th: 'เริ่มวางแผน',
  },
  'plan.itinerary.day': {
    en: 'Day',
    th: 'วันที่',
  },
  'plan.itinerary.morning': {
    en: 'Morning',
    th: 'เช้า',
  },
  'plan.itinerary.afternoon': {
    en: 'Afternoon',
    th: 'บ่าย',
  },
  'plan.itinerary.evening': {
    en: 'Evening',
    th: 'เย็น',
  },
  'plan.itinerary.dropHere': {
    en: 'Drop Activities Here',
    th: 'วางกิจกรรมที่นี่',
  },
  
  // Accommodation Finder
  'plan.accommodation.title': {
    en: 'Accommodation Finder',
    th: 'ค้นหาที่พัก',
  },
  'plan.accommodation.priceRange': {
    en: 'Price Range',
    th: 'ช่วงราคา',
  },
  'plan.accommodation.perNight': {
    en: 'per night',
    th: 'ต่อคืน',
  },
  'plan.accommodation.type': {
    en: 'Accommodation Type',
    th: 'ประเภทที่พัก',
  },
  'plan.accommodation.amenities': {
    en: 'Amenities',
    th: 'สิ่งอำนวยความสะดวก',
  },
  'plan.accommodation.areas': {
    en: 'Beach Areas',
    th: 'บริเวณชายหาด',
  },
  'plan.accommodation.mapPlaceholder': {
    en: 'Interactive map with accommodation locations',
    th: 'แผนที่โต้ตอบกับตำแหน่งที่พัก',
  },
  'plan.accommodation.viewMap': {
    en: 'View Full Map',
    th: 'ดูแผนที่เต็ม',
  },
  'plan.accommodation.noResults': {
    en: 'No Accommodations Found',
    th: 'ไม่พบที่พัก',
  },
  'plan.accommodation.tryAdjusting': {
    en: 'Try adjusting your filters for more results',
    th: 'ลองปรับตัวกรองของคุณเพื่อผลลัพธ์เพิ่มเติม',
  },
  'plan.accommodation.night': {
    en: 'night',
    th: 'คืน',
  },
  'plan.accommodation.viewDetails': {
    en: 'View Details',
    th: 'ดูรายละเอียด',
  },
  
  // Transportation Guide
  'plan.transportation.title': {
    en: 'Transportation Guide',
    th: 'คู่มือการเดินทาง',
  },
  'plan.transportation.description': {
    en: 'Find the best ways to get to and around Koh Lanta with our comprehensive transportation guide.',
    th: 'ค้นหาวิธีที่ดีที่สุดในการเดินทางไปและรอบเกาะลันตาด้วยคู่มือการเดินทางที่ครอบคลุมของเรา',
  },
  'plan.transportation.toIsland': {
    en: 'Getting to the Island',
    th: 'การเดินทางไปยังเกาะ',
  },
  'plan.transportation.onIsland': {
    en: 'Getting Around',
    th: 'การเดินทางรอบเกาะ',
  },
  'plan.transportation.routes': {
    en: 'Popular Routes',
    th: 'เส้นทางยอดนิยม',
  },
  'plan.transportation.routeMapPlaceholder': {
    en: 'Interactive route map',
    th: 'แผนที่เส้นทางแบบโต้ตอบ',
  },
  'plan.transportation.fromKrabi': {
    en: 'From Krabi Airport/Town',
    th: 'จากสนามบิน/เมืองกระบี่',
  },
  'plan.transportation.krabiDescription': {
    en: 'Minivan & ferry combination service available directly from the airport or town center.',
    th: 'บริการรถตู้และเรือเฟอร์รี่มีให้บริการโดยตรงจากสนามบินหรือใจกลางเมือง',
  },
  'plan.transportation.fromPhiPhi': {
    en: 'From Koh Phi Phi',
    th: 'จากเกาะพีพี',
  },
  'plan.transportation.phiPhiDescription': {
    en: 'Regular ferry service connects Phi Phi to Koh Lanta during high season (Nov-Apr).',
    th: 'บริการเรือเฟอร์รี่ปกติเชื่อมต่อพีพีกับเกาะลันตาในช่วงไฮซีซั่น (พ.ย.-เม.ย.)',
  },
  'plan.transportation.fromBangkok': {
    en: 'From Bangkok',
    th: 'จากกรุงเทพฯ',
  },
  'plan.transportation.bangkokDescription': {
    en: 'Overnight buses connect Bangkok to Krabi, then connect with minivan & ferry to Koh Lanta.',
    th: 'รถโดยสารข้ามคืนเชื่อมต่อกรุงเทพฯ กับกระบี่ จากนั้นเชื่อมต่อกับรถตู้และเรือเฟอร์รี่ไปยังเกาะลันตา',
  },
  'plan.transportation.hours': {
    en: 'hours',
    th: 'ชั่วโมง',
  },
  'plan.transportation.ferrySchedule': {
    en: 'Ferry Schedule',
    th: 'ตารางเรือเฟอร์รี่',
  },
  'plan.transportation.highSeason': {
    en: 'High Season (Nov-Apr)',
    th: 'ไฮซีซั่น (พ.ย.-เม.ย.)',
  },
  'plan.transportation.krabiToLanta': {
    en: 'Krabi to Koh Lanta',
    th: 'กระบี่ไปเกาะลันตา',
  },
  'plan.transportation.departure': {
    en: 'Departures',
    th: 'เวลาออกเดินทาง',
  },
  'plan.transportation.phiPhiToLanta': {
    en: 'Phi Phi to Koh Lanta',
    th: 'พีพีไปเกาะลันตา',
  },
  'plan.transportation.lantaToKrabi': {
    en: 'Koh Lanta to Krabi',
    th: 'เกาะลันตาไปกระบี่',
  },
  'plan.transportation.scheduleNote': {
    en: 'Note: Schedules may change seasonally. Limited service during green season (May-Oct).',
    th: 'หมายเหตุ: ตารางเวลาอาจเปลี่ยนแปลงตามฤดูกาล บริการจำกัดในช่วงฤดูเขียว (พ.ค.-ต.ค.)',
  },
  'plan.transportation.fullSchedule': {
    en: 'View Full Schedule',
    th: 'ดูตารางเวลาเต็ม',
  },
  'plan.transportation.rentals': {
    en: 'Island Rentals',
    th: 'การเช่าบนเกาะ',
  },
  'plan.transportation.motorbike': {
    en: 'Motorbike/Scooter Rental',
    th: 'เช่ามอเตอร์ไซค์/สกู๊ตเตอร์',
  },
  'plan.transportation.motorbikeDescription': {
    en: 'The most popular way to explore the island. Various rental shops available in all main areas.',
    th: 'วิธีที่นิยมที่สุดในการสำรวจเกาะ มีร้านเช่าต่างๆ ในทุกพื้นที่หลัก',
  },
  'plan.transportation.car': {
    en: 'Car Rental',
    th: 'เช่ารถยนต์',
  },
  'plan.transportation.carDescription': {
    en: 'Comfortable option for families. Mostly available in Saladan area.',
    th: 'ตัวเลือกที่สะดวกสบายสำหรับครอบครัว มีให้บริการส่วนใหญ่ในพื้นที่สลาดัน',
  },
  'plan.transportation.tuktuk': {
    en: 'Tuk-Tuk & Taxi Services',
    th: 'บริการตุ๊กตุ๊กและแท็กซี่',
  },
  'plan.transportation.tuktukDescription': {
    en: 'Available throughout the island. No meter system, agree on price before boarding.',
    th: 'มีให้บริการทั่วทั้งเกาะ ไม่มีระบบมิเตอร์ ตกลงราคาก่อนขึ้นรถ',
  },
  'plan.transportation.day': {
    en: 'day',
    th: 'วัน',
  },
  'plan.transportation.trip': {
    en: 'trip',
    th: 'ทริป',
  },
  'plan.transportation.tips': {
    en: 'Transportation Tips',
    th: 'เคล็ดลับการเดินทาง',
  },
  'plan.transportation.safety': {
    en: 'Safety Tips',
    th: 'เคล็ดลับความปลอดภัย',
  },
  'plan.transportation.safetyTip1': {
    en: 'Always wear a helmet when riding motorbikes',
    th: 'สวมหมวกกันน็อคเสมอเมื่อขี่มอเตอร์ไซค์',
  },
  'plan.transportation.safetyTip2': {
    en: 'Roads can be steep in southern parts - use caution',
    th: 'ถนนอาจชันในพื้นที่ทางใต้ - ใช้ความระมัดระวัง',
  },
  'plan.transportation.safetyTip3': {
    en: 'Bring a headlamp for night driving as some roads lack lighting',
    th: 'นำไฟฉายติดศีรษะมาสำหรับการขับขี่ตอนกลางคืนเนื่องจากถนนบางสายไม่มีไฟส่องสว่าง',
  },
  'plan.transportation.saving': {
    en: 'Money Saving Tips',
    th: 'เคล็ดลับการประหยัดเงิน',
  },
  'plan.transportation.savingTip1': {
    en: 'Weekly motorbike rentals offer significant discounts',
    th: 'การเช่ามอเตอร์ไซค์รายสัปดาห์มีส่วนลดที่สำคัญ',
  },
  'plan.transportation.savingTip2': {
    en: 'Shared minivan transfers are cheaper than private ones',
    th: 'การเดินทางโดยรถตู้ร่วมกันถูกกว่าแบบส่วนตัว',
  },
  'plan.transportation.savingTip3': {
    en: 'Book return ferry tickets for better rates',
    th: 'จองตั๋วเรือเฟอร์รี่ไป-กลับเพื่อรับอัตราที่ดีกว่า',
  },
  'plan.transportation.distances': {
    en: 'Key Distances',
    th: 'ระยะทางสำคัญ',
  },
  'plan.transportation.northToSouth': {
    en: 'North to South',
    th: 'เหนือถึงใต้',
  },
  'plan.transportation.saladan': {
    en: 'Saladan',
    th: 'สลาดัน',
  },
  'plan.transportation.longBeach': {
    en: 'Long Beach',
    th: 'หาดยาว',
  },
  'plan.transportation.klongNin': {
    en: 'Klong Nin',
    th: 'คลองนิน',
  },
  
  // Practical Information
  'plan.practical.title': {
    en: 'Practical Information',
    th: 'ข้อมูลที่เป็นประโยชน์',
  },
  'plan.practical.visa': {
    en: 'Visa',
    th: 'วีซ่า',
  },
  'plan.practical.health': {
    en: 'Health',
    th: 'สุขภาพ',
  },
  'plan.practical.money': {
    en: 'Money',
    th: 'การเงิน',
  },
  'plan.practical.connectivity': {
    en: 'Connectivity',
    th: 'การเชื่อมต่อ',
  },
  'plan.practical.utilities': {
    en: 'Utilities',
    th: 'สาธารณูปโภค',
  },
  'plan.practical.visaRequirements': {
    en: 'Visa Requirements',
    th: 'ข้อกำหนดวีซ่า',
  },
  'plan.practical.visaOnArrival': {
    en: 'Visa on Arrival',
    th: 'วีซ่าเมื่อเดินทางมาถึง',
  },
  'plan.practical.visaOnArrivalDescription': {
    en: 'Many nationalities receive 30-day visa exemption stamps on arrival in Thailand.',
    th: 'หลายสัญชาติได้รับการยกเว้นวีซ่า 30 วันเมื่อมาถึงประเทศไทย',
  },
  'plan.practical.validity': {
    en: 'Validity',
    th: 'ระยะเวลา',
  },
  'plan.practical.fee': {
    en: 'Fee',
    th: 'ค่าธรรมเนียม',
  },
  'plan.practical.days': {
    en: 'days',
    th: 'วัน',
  },
  'plan.practical.requiredDocuments': {
    en: 'Required Documents',
    th: 'เอกสารที่จำเป็น',
  },
  'plan.practical.passport': {
    en: 'Valid Passport',
    th: 'หนังสือเดินทางที่ถูกต้อง',
  },
  'plan.practical.passportDescription': {
    en: 'Must be valid for at least 6 months beyond your planned departure date.',
    th: 'ต้องมีอายุอย่างน้อย 6 เดือนนับจากวันที่คุณวางแผนจะออกเดินทาง',
  },
  'plan.practical.photo': {
    en: 'Passport Photo',
    th: 'รูปถ่ายหนังสือเดินทาง',
  },
  'plan.practical.photoDescription': {
    en: 'Recent 4x6 cm photo may be required for some visa types.',
    th: 'อาจต้องใช้รูปถ่ายขนาด 4x6 ซม. ล่าสุดสำหรับวีซ่าบางประเภท',
  },
  'plan.practical.proofOfFunds': {
    en: 'Proof of Funds',
    th: 'หลักฐานเงินทุน',
  },
  'plan.practical.proofOfFundsDescription': {
    en: 'Immigration may ask for proof of 10,000 THB per person or 20,000 THB per family.',
    th: 'ตรวจคนเข้าเมืองอาจขอหลักฐานเงินทุน 10,000 บาทต่อคนหรือ 20,000 บาทต่อครอบครัว',
  },
  'plan.practical.visaExtension': {
    en: 'Visa Extension',
    th: 'การต่ออายุวีซ่า',
  },
  'plan.practical.visaExtensionDescription': {
    en: 'You can extend your stay by 30 days at the Immigration Office in Krabi Town for 1,900 THB.',
    th: 'คุณสามารถขยายการพำนักของคุณได้อีก 30 วันที่สำนักงานตรวจคนเข้าเมืองในเมืองกระบี่ในราคา 1,900 บาท',
  },
  
  // Health section
  'plan.practical.healthSafety': {
    en: 'Health & Safety Information',
    th: 'ข้อมูลด้านสุขภาพและความปลอดภัย',
  },
  'plan.practical.vaccinations': {
    en: 'Recommended Vaccinations',
    th: 'การฉีดวัคซีนที่แนะนำ',
  },
  'plan.practical.typhoid': {
    en: 'Typhoid',
    th: 'ไทฟอยด์',
  },
  'plan.practical.typhoidDescription': {
    en: 'Recommended for most travelers',
    th: 'แนะนำสำหรับนักท่องเที่ยวส่วนใหญ่',
  },
  'plan.practical.hepatitisA': {
    en: 'Hepatitis A',
    th: 'ไวรัสตับอักเสบ เอ',
  },
  'plan.practical.hepatitisADescription': {
    en: 'Recommended for most travelers',
    th: 'แนะนำสำหรับนักท่องเที่ยวส่วนใหญ่',
  },
  'plan.practical.hepatitisB': {
    en: 'Hepatitis B',
    th: 'ไวรัสตับอักเสบ บี',
  },
  'plan.practical.hepatitisBDescription': {
    en: 'Recommended for long-term stays',
    th: 'แนะนำสำหรับการพำนักระยะยาว',
  },
  'plan.practical.medicalFacilities': {
    en: 'Medical Facilities',
    th: 'สถานพยาบาล',
  },
  'plan.practical.insurance': {
    en: 'Travel Insurance',
    th: 'ประกันการเดินทาง',
  },
  'plan.practical.insuranceDescription': {
    en: 'Comprehensive travel insurance is strongly recommended as medical costs can be high.',
    th: 'แนะนำให้ทำประกันการเดินทางที่ครอบคลุมเนื่องจากค่ารักษาพยาบาลอาจสูงมาก',
  },
  'plan.practical.safetyTips': {
    en: 'General Safety Tips',
    th: 'เคล็ดลับความปลอดภัยทั่วไป',
  },
  'plan.practical.water': {
    en: 'Drinking Water',
    th: 'น้ำดื่ม',
  },
  'plan.practical.waterDescription': {
    en: 'Drink only bottled or filtered water',
    th: 'ดื่มเฉพาะน้ำบรรจุขวดหรือน้ำกรอง',
  },
  'plan.practical.sun': {
    en: 'Sun Protection',
    th: 'การป้องกันแสงแดด',
  },
  'plan.practical.sunDescription': {
    en: 'Use sunscreen and stay hydrated',
    th: 'ใช้ครีมกันแดดและดื่มน้ำให้เพียงพอ',
  },
  'plan.practical.marine': {
    en: 'Marine Safety',
    th: 'ความปลอดภัยทางทะเล',
  },
  'plan.practical.marineDescription': {
    en: 'Be aware of tide conditions and currents',
    th: 'ระวังสภาพน้ำขึ้นน้ำลงและกระแสน้ำ',
  },
  
  // Money Matters
  'plan.practical.moneyMatters': {
    en: 'Money Matters',
    th: 'เรื่องการเงิน',
  },
  'plan.practical.currency': {
    en: 'Currency',
    th: 'สกุลเงิน',
  },
  'plan.practical.currencyDescription': {
    en: 'Thai Baht (THB) is the local currency',
    th: 'เงินบาทไทย (THB) เป็นสกุลเงินท้องถิ่น',
  },
  'plan.practical.cards': {
    en: 'Credit Cards',
    th: 'บัตรเครดิต',
  },
  'plan.practical.cardsDescription': {
    en: 'Accepted at most hotels and larger restaurants',
    th: 'ยอมรับที่โรงแรมส่วนใหญ่และร้านอาหารขนาดใหญ่',
  },
  'plan.practical.atms': {
    en: 'ATMs',
    th: 'ตู้เอทีเอ็ม',
  },
  'plan.practical.atmsDescription': {
    en: 'Available in main areas of the island',
    th: 'มีให้บริการในพื้นที่หลักของเกาะ',
  },
  'plan.practical.atmFee': {
    en: 'ATM Fee',
    th: 'ค่าธรรมเนียมตู้เอทีเอ็ม',
  },
  'plan.practical.costs': {
    en: 'Average Costs',
    th: 'ค่าใช้จ่ายเฉลี่ย',
  },
  'plan.practical.item': {
    en: 'Item',
    th: 'รายการ',
  },
  'plan.practical.budget': {
    en: 'Budget',
    th: 'ประหยัด',
  },
  'plan.practical.midRange': {
    en: 'Mid-Range',
    th: 'ระดับกลาง',
  },
  'plan.practical.luxury': {
    en: 'Luxury',
    th: 'หรูหรา',
  },
  'plan.practical.accommodation': {
    en: 'Accommodation',
    th: 'ที่พัก',
  },
  'plan.practical.meal': {
    en: 'Meal',
    th: 'อาหาร',
  },
  'plan.practical.transport': {
    en: 'Daily Transport',
    th: 'การเดินทางรายวัน',
  },
  'plan.practical.tipping': {
    en: 'Tipping',
    th: 'การให้ทิป',
  },
  'plan.practical.tippingDescription': {
    en: 'Tipping is not customary in Thailand but always appreciated. 5-10% in restaurants for good service is common among tourists.',
    th: 'การให้ทิปไม่ใช่ธรรมเนียมในประเทศไทยแต่เป็นที่ชื่นชมเสมอ 5-10% ในร้านอาหารสำหรับบริการที่ดีเป็นเรื่องปกติในหมู่นักท่องเที่ยว',
  },
  
  // Connectivity
  'plan.practical.stayingConnected': {
    en: 'Staying Connected',
    th: 'การเชื่อมต่อ',
  },
  'plan.practical.internet': {
    en: 'Internet Access',
    th: 'การเข้าถึงอินเตอร์เน็ต',
  },
  'plan.practical.wifi': {
    en: 'Wi-Fi',
    th: 'ไวไฟ',
  },
  'plan.practical.wifiDescription': {
    en: 'Most accommodations, restaurants and cafes offer free Wi-Fi.',
    th: 'ที่พัก ร้านอาหารและคาเฟ่ส่วนใหญ่มีบริการ Wi-Fi ฟรี',
  },
  'plan.practical.wifiAvailability': {
    en: 'Good coverage in main tourist areas',
    th: 'ครอบคลุมดีในพื้นที่ท่องเที่ยวหลัก',
  },
  'plan.practical.mobileData': {
    en: 'Mobile Data',
    th: 'ข้อมูลมือถือ',
  },
  'plan.practical.mobileDataDescription': {
    en: 'Tourist SIM cards with data packages are widely available.',
    th: 'ซิมการ์ดสำหรับนักท่องเที่ยวพร้อมแพ็คเกจข้อมูลมีให้บริการอย่างแพร่หลาย',
  },
  'plan.practical.communication': {
    en: 'Communication',
    th: 'การสื่อสาร',
  },
  'plan.practical.phoneCalls': {
    en: 'Phone Calls',
    th: 'การโทรศัพท์',
  },
  'plan.practical.phoneCallsDescription': {
    en: 'International calls can be expensive. Consider using internet-based calling apps.',
    th: 'การโทรระหว่างประเทศอาจมีราคาแพง พิจารณาใช้แอปการโทรผ่านอินเทอร์เน็ต',
  },
  'plan.practical.countryCode': {
    en: 'Country Code',
    th: 'รหัสประเทศ',
  },
  'plan.practical.apps': {
    en: 'Useful Apps',
    th: 'แอปที่มีประโยชน์',
  },
  'plan.practical.appsDescription': {
    en: 'These apps can enhance your island experience',
    th: 'แอปเหล่านี้สามารถเพิ่มประสบการณ์บนเกาะของคุณ',
  },
  'plan.practical.offline': {
    en: 'Offline Access',
    th: 'การเข้าถึงแบบออฟไลน์',
  },
  'plan.practical.offlineDescription': {
    en: 'Download maps and translations for offline use before arriving, especially if visiting remote parts of the island.',
    th: 'ดาวน์โหลดแผนที่และคำแปลสำหรับการใช้งานแบบออฟไลน์ก่อนมาถึง โดยเฉพาะอย่างยิ่งหากเยี่ยมชมส่วนห่างไกลของเกาะ',
  },
  
  // Utilities
  'plan.practical.electricity': {
    en: 'Electricity',
    th: 'ไฟฟ้า',
  },
  'plan.practical.electricityDescription': {
    en: 'Type A, B, and C power plugs are common in Thailand',
    th: 'ปลั๊กไฟประเภท A, B และ C เป็นเรื่องปกติในประเทศไทย',
  },
  'plan.practical.language': {
    en: 'Language',
    th: 'ภาษา',
  },
  'plan.practical.languageDescription': {
    en: 'English is spoken in tourist areas',
    th: 'มีการพูดภาษาอังกฤษในพื้นที่ท่องเที่ยว',
  },
  'plan.practical.emergency': {
    en: 'Emergency Contacts',
    th: 'ข้อมูลติดต่อฉุกเฉิน',
  },
  'plan.practical.tourist': {
    en: 'Tourist Police',
    th: 'ตำรวจท่องเที่ยว',
  },
  'plan.practical.police': {
    en: 'Police',
    th: 'ตำรวจ',
  },
  'plan.practical.medical': {
    en: 'Medical Emergency',
    th: 'ฉุกเฉินทางการแพทย์',
  },
  
  // Seasonal Guide
  'plan.seasonal.title': {
    en: 'Seasonal Planning Guide',
    th: 'คู่มือวางแผนตามฤดูกาล',
  },
  'plan.seasonal.subtitle': {
    en: 'When to Visit Koh Lanta',
    th: 'ช่วงเวลาที่เหมาะแก่การเยี่ยมชมเกาะลันตา',
  },
  'plan.seasonal.description': {
    en: 'Koh Lanta has distinct seasons that affect weather, prices, and activities. Use this guide to find the perfect time for your visit.',
    th: 'เกาะลันตามีฤดูกาลที่แตกต่างกันซึ่งส่งผลต่อสภาพอากาศ ราคา และกิจกรรม ใช้คู่มือนี้เพื่อหาเวลาที่เหมาะสมสำหรับการเยี่ยมชมของคุณ',
  },
  'plan.seasonal.weather': {
    en: 'Weather',
    th: 'สภาพอากาศ',
  },
  'plan.seasonal.seaConditions': {
    en: 'Sea Conditions',
    th: 'สภาพทะเล',
  },
  'plan.seasonal.crowds': {
    en: 'Crowds',
    th: 'ความแออัด',
  },
  'plan.seasonal.prices': {
    en: 'Prices',
    th: 'ราคา',
  },
  'plan.seasonal.sunny': {
    en: 'Mostly sunny and dry',
    th: 'ส่วนใหญ่แดดจัดและแห้ง',
  },
  'plan.seasonal.rainy': {
    en: 'Chances of rain',
    th: 'โอกาสเกิดฝน',
  },
  'plan.seasonal.calm': {
    en: 'Calm seas',
    th: 'ทะเลสงบ',
  },
  'plan.seasonal.moderate': {
    en: 'Moderate waves',
    th: 'คลื่นปานกลาง',
  },
  'plan.seasonal.rough': {
    en: 'Rougher seas',
    th: 'ทะเลคลื่นแรง',
  },
  'plan.seasonal.quiet': {
    en: 'Quiet, fewer tourists',
    th: 'เงียบ นักท่องเที่ยวน้อย',
  },
  'plan.seasonal.busy': {
    en: 'Busier, more tourists',
    th: 'คึ่คัก นักท่องเที่ยวมาก',
  },
  'plan.seasonal.low': {
    en: 'Lower prices',
    th: 'ราคาต่ำกว่า',
  },
  'plan.seasonal.medium': {
    en: 'Medium prices',
    th: 'ราคาปานกลาง',
  },
  'plan.seasonal.high': {
    en: 'Higher prices',
    th: 'ราคาสูงกว่า',
  },
  'plan.seasonal.recommended': {
    en: 'Recommended Activities',
    th: 'กิจกรรมที่แนะนำ',
  },
  'plan.seasonal.avoid': {
    en: 'Better to Avoid',
    th: 'ควรหลีกเลี่ยง',
  },
  'plan.seasonal.noneRecommended': {
    en: 'No specific recommendations for this month',
    th: 'ไม่มีคำแนะนำเฉพาะสำหรับเดือนนี้',
  },
  'plan.seasonal.noneAvoided': {
    en: 'No activities to avoid this month',
    th: 'ไม่มีกิจกรรมที่ควรหลีกเลี่ยงในเดือนนี้',
  },
  'plan.seasonal.highSeason': {
    en: 'High Season',
    th: 'ฤดูกาลท่องเที่ยว',
  },
  'plan.seasonal.highSeasonMonths': {
    en: 'Months',
    th: 'เดือน',
  },
  'plan.seasonal.novToApr': {
    en: 'November to April',
    th: 'พฤศจิกายนถึงเมษายน',
  },
  'plan.seasonal.highSeasonDescription': {
    en: 'Dry weather, calm seas, excellent visibility for snorkeling and diving. Peak tourist season with higher prices and more people.',
    th: 'อากาศแห้ง ทะเลสงบ ทัศนวิสัยดีเยี่ยมสำหรับการดำน้ำตื้นและดำน้ำลึก ฤดูกาลท่องเที่ยวสูงสุดมีราคาสูงขึ้นและคนมากขึ้น',
  },
  'plan.seasonal.greenSeason': {
    en: 'Green Season',
    th: 'ฤดูเขียว',
  },
  'plan.seasonal.greenSeasonMonths': {
    en: 'Months',
    th: 'เดือน',
  },
  'plan.seasonal.mayToOct': {
    en: 'May to October',
    th: 'พฤษภาคมถึงตุลาคม',
  },
  'plan.seasonal.greenSeasonDescription': {
    en: 'Intermittent rain, rougher seas, but lush landscapes and fewer tourists. Many businesses close but lower prices for accommodation.',
    th: 'ฝนตกเป็นช่วงๆ ทะเลปั่นป่วนมากขึ้น แต่ภูมิทัศน์เขียวชอุ่มและนักท่องเที่ยวน้อยลง ธุรกิจหลายแห่งปิด แต่ราคาที่พักต่ำลง',
  },
  'plan.seasonal.tip': {
    en: 'Insider Tip',
    th: 'เคล็ดลับคนใน',
  },
  'plan.seasonal.tipDescription': {
    en: 'Consider visiting during "shoulder season" (May or November) for a good balance between weather and crowds.',
    th: 'พิจารณาเยี่ยมชมในช่วง "ฤดูกาลไหล่" (พฤษภาคมหรือพฤศจิกายน) เพื่อความสมดุลที่ดีระหว่างสภาพอากาศและความแออัด',
  },
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get browser language or default to English
  const getBrowserLanguage = (): Language => {
    const lang = navigator.language.split('-')[0];
    return lang === 'th' ? 'th' : 'en';
  };

  const [language, setLanguage] = useState<Language>(() => {
    try {
      // Try to get from localStorage first
      const savedLang = localStorage.getItem('language') as Language;
      return savedLang || getBrowserLanguage();
    } catch {
      return 'en';
    }
  });

  // Update localStorage when language changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('language', lang);
    } catch {
      console.warn('Could not save language preference to localStorage');
    }
  };

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
