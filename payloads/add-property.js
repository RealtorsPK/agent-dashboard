export const addPropertyPayload = (data) => {
  const { title, categoryId, cityId, areaId, rcAgentId, purpose, sizeUnit, size, price, latitude, longitude, description, address, display, cover, image, selectedFeatures, socialLinks, bed, bath } = data;
  let fd = new FormData();
  const youtubeUrls = []
  socialLinks && socialLinks.length > 0 && socialLinks.map((item) => { return youtubeUrls.push(item.url); })

  fd.append('title', title);
  fd.append('categoryId', categoryId);
  fd.append('cityId', cityId.value);
  fd.append('areaId', areaId.value);
  fd.append('rcAgentId', rcAgentId);
  fd.append('published', Boolean(false));
  fd.append('sizeUnit', sizeUnit.value);
  fd.append('size', parseInt(size));
  fd.append('price', parseInt(price));
  fd.append('purpose', purpose);
  fd.append('address', address);
  fd.append('latitude', latitude);
  fd.append('longitude', longitude);
  fd.append('description', description);
  fd.append('videoUrls', youtubeUrls);
  fd.append('featuresIDs', selectedFeatures);
  fd.append('bed', bed ? bed.value : '');
  fd.append('bath', bath ? bath.value : '');

  display && display.length > 0 && display.map((item) => { fd.append('display', item); return null })
  cover && cover.length > 0 && cover.map((item) => { fd.append('cover', item); return null })
  image && image.length > 0 && image.map((item) => { fd.append('image', item); return null })

  return fd;
}