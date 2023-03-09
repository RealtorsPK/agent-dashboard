import axios from "axios";
import buildUrl, { extractPublicId } from "cloudinary-build-url";
import { toast } from "react-toastify";
import Cookies from "universal-cookie"

export const cookies = (action, cookieName, value) => {
  const cookie = new Cookies();
  if (action === 'set') {
    cookie[action](cookieName, value, { path: '/' });
    return null
  }
  if (action === 'remove') {
    cookie[action](cookieName);
    return null
  }
  return cookie[action](cookieName);
}

export const setTokenHeader = (token) => {
  axios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${token}`
      return config
    }
  )
};

export const resizeImageUrl = (url, size) => {
  if (url.includes('lh3.googleusercontent')) { return url }
  let resizeUrl
  let publicId = extractPublicId(url)
  publicId = publicId
  resizeUrl = buildUrl(publicId, {
    cloud: { cloudName: url.split('/')[3] },
    transformations: {
      resize: {
        type: 'scale',
        width: size,
      }
    }
  })

  return resizeUrl;
}

export const currencyFormat = (price, currency) => {
  return Intl.NumberFormat(currency || 'en-PK').format(price)
}

const toasterFade = {
  hideProgressBar: true,
  position: "bottom-right",
  autoClose: 7000,
}

const customFade = (autoClose) => {
  const style = {
    hideProgressBar: true,
    position: "bottom-right",
    autoClose: autoClose || 5000
  }; return style;
}

export const customToast = (type = '', message = '', autoClose = 5000) => {
  toast[type](
    message, autoClose ?
    { ...customFade(autoClose) }
    :
    { ...toasterFade }
  );
}

export const isImageFiles = (array) => {
  let isValidImage = true;

  if (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (!array[i].type.includes('image/')) {
        isValidImage = false;
      }
    }
  }

  return isValidImage
}

export const priceFormat = value => {
  const absValue = Math.abs(value);

  if (absValue >= 10_000_000) {
    return `${(absValue / 10_000_000).toFixed(2)} Crore`;
  } else if (absValue >= 100_000) {
    return `${(absValue / 100_000).toFixed(2)} Lac`;
  }

  return absValue;
};


export const selectBoxOptions = (array, labelName, valueName) => {
  const returnArray = [];

  if (array && array.length > 0) {
    array.map((item) => {
      returnArray.push({
        label: item[labelName] || `${item.firstname} ${item.lastname}`,
        value: item[valueName],
      });

      return undefined;
    });
  }

  return returnArray;
};

export const isYoutubeUrl = (url) => {
  if (!url.search("http://www.youtube.com/") || !url.search("https://www.youtube.com/")) {
    return true;
  }
  else { return false; }
};
