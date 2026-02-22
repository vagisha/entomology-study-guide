// Shared functionality for Entomology Study Guide

// Global data
let insectsData = [];
const imageCache = {};

// Load insects data from JSON file
async function loadInsectsData() {
  try {
    const response = await fetch('insects-data.json');
    insectsData = await response.json();
    return insectsData;
  } catch (error) {
    console.error('Error loading insects data:', error);
    throw error;
  }
}

// Fetch image with local fallback to Wikipedia
async function fetchInsectImage(insect) {
  const localPath = `images/${insect.order}/${insect.family}/specimen1.jpg`;
  
  // Try local image first
  return new Promise((resolve) => {
    const localImg = new Image();
    
    localImg.onload = function() {
      resolve(localPath);
    };
    
    localImg.onerror = async function() {
      // Local image not found, try Wikipedia
      const wikiImg = await fetchWikipediaImage(insect);
      resolve(wikiImg);
    };
    
    localImg.src = localPath;
  });
}

// Fetch image from Wikipedia only (no local fallback)
async function fetchWikipediaImage(insect) {
  if (imageCache[insect.wiki]) {
    return imageCache[insect.wiki];
  }
  
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(insect.wiki)}`;
    const res = await fetch(url);
    const data = await res.json();
    // Try to get original image first, fallback to thumbnail
    const imgUrl = data.originalimage?.source || data.thumbnail?.source || '';
    imageCache[insect.wiki] = imgUrl;
    return imgUrl;
  } catch {
    return '';
  }
}

// Generate NC State URL for an insect
function getNcStateUrl(insect) {
  const order = insect.order;
  const family = insect.family;
  const orderLower = order.toLowerCase();
  const familyLower = family.toLowerCase();
  
  // Families with no NC State page
  const noLinkFamilies = ['Cucujidae'];
  if (noLinkFamilies.includes(family)) {
    return null;
  }
  
  // Special cases for orders
  if (order === 'Protura' || order === 'Diplura') {
    return `https://genent.cals.ncsu.edu/insect-identification/class-${orderLower}/`;
  }
  
  if (order === 'Archaeognatha') {
    return 'https://genent.cals.ncsu.edu/bug-bytes/apterygota/';
  }
  
  if (order === 'Megaloptera') {
    return 'https://genent.cals.ncsu.edu/insect-identification/megaloptera/';
  }
  
  if (order === 'Raphidioptera') {
    return 'https://genent.cals.ncsu.edu/insect-identification/raphidioptera/';
  }
  
  if (order === 'Acari') {
    return null; // No NC State link for Acari
  }
  
  // Special case for Blattodea - only Blattidae has a link
  if (order === 'Blattodea') {
    if (family === 'Blattidae') {
      return 'https://genent.cals.ncsu.edu/insect-identification/order-blattodea/';
    }
    return null;
  }
  
  // Special case for Myrmeleontidae (Neuroptera) - links to megaloptera
  if (family === 'Myrmeleontidae') {
    return 'https://genent.cals.ncsu.edu/insect-identification/megaloptera/family-myrmeleontidae/';
  }
  
  // Hemiptera special cases
  if (order === 'Hemiptera') {
    const homopteraFamilies = ['Aphididae', 'Cercopidae', 'Cicadellidae', 'Cicadidae', 'Coccidae', 'Membracidae', 'Fulgoridae', 'Pseudococcidae'];
    const suborder = homopteraFamilies.includes(family) ? 'homoptera' : 'heteroptera';
    
    // Special family name mappings
    const familyMap = {
      'Aphididae': 'aphidoidea',
      'Coccidae': 'coccoidea',
      'Reduviidae': 'reduviidae-2',
      'Pseudococcidae': 'pseudococcidae'
    };
    
    // Fulgoridae has no link
    if (family === 'Fulgoridae') {
      return null;
    }
    
    const mappedFamily = familyMap[family] || familyLower;
    return `https://genent.cals.ncsu.edu/insect-identification/order-hemiptera-suborder-${suborder}/family-${mappedFamily}/`;
  }
  
  // Check if this is a single-family order (link to order level only)
  const singleFamilyOrders = ['Protura', 'Diplura', 'Archaeognatha', 'Zygentoma', 'Mantodea', 
                               'Embioptera', 'Dermaptera', 'Phasmatodea', 'Psocodea', 
                               'Thysanoptera', 'Raphidioptera', 'Siphonaptera', 'Megaloptera', 'Plecoptera'];
  
  if (singleFamilyOrders.includes(order)) {
    return `https://genent.cals.ncsu.edu/insect-identification/order-${orderLower}/`;
  }
  
  // Default format
  return `https://genent.cals.ncsu.edu/insect-identification/order-${orderLower}/family-${familyLower}/`;
}

// Generate BugGuide URL for an insect
function getBugGuideUrl(insect) {
  if (!insect.bugguide) return null;
  return `https://bugguide.net/node/view/${insect.bugguide}`;
}

// Generate Wikipedia URL for an insect
function getWikipediaUrl(insect) {
  if (!insect.wiki) return null;
  return `https://en.wikipedia.org/wiki/${insect.wiki}`;
}
