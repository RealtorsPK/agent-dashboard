import { pickImgByType, selectBoxSelectedOption } from "../utilities/helper-function";
import { baths, bedrooms, unitSizes } from "../utilities/static-values";

const addPropertyPayload = (data) => {
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

const editPropertyPayload = (data) => {
  const { title, area, address, description, city, purpose, category, sizeUnit, size, price, latitude, longitude, resources, bed, bath, features } = data;

  let newFeatures = []
  features && features.length > 0 && features.map((item) => { return newFeatures.push(item.id) })

  let newSocialLinks = []
  let getVideoUrls = [...pickImgByType(resources, 'video')]
  getVideoUrls && getVideoUrls.length > 0 && getVideoUrls.map((item) => { return newSocialLinks.push({ url: item.url, ...item }) })


  const payload = {
    title: title,
    propertyType: 'residential',
    address: address,
    description: description,
    price: price,
    purpose: purpose,
    size: size,
    latitude: latitude,
    longitude: longitude,
    categoryId: category.id,
    purpose: purpose,
    sizeUnit: selectBoxSelectedOption(unitSizes, sizeUnit, 'label', 'value'),
    cityId: { label: city.name, value: city.id },
    areaId: { label: area.name, value: area.id },
    bed: selectBoxSelectedOption(bedrooms, bed, 'label', 'value'),
    bath: selectBoxSelectedOption(baths, bath, 'label', 'value'),
    cover: pickImgByType(resources, 'cover'),
    display: pickImgByType(resources, 'display'),
    image: pickImgByType(resources, 'image'),
    features: newFeatures,
    socialLinks: newSocialLinks,
  }

  return payload;

}

export {
  addPropertyPayload,
  editPropertyPayload,
}