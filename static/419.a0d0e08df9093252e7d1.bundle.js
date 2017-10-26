webpackJsonp([419],{1538:function(module,exports){module.exports="/*eslint camelcase: off*/\nimport isUndefined from 'lodash/isUndefined';\nexport const includes = (arr, value) => {\n  return Boolean(arr && arr.find(item => item === value)); // we compare only primitives\n};\n\nconst locationFuncOrValue = locationProp => {\n  return typeof locationProp === 'function' ? locationProp() : locationProp;\n};\n\nexport function google2address(google) {\n  const components = {};\n  google.address_components.forEach(({types, long_name, short_name}) => {\n    types.forEach(type => {\n      components[type] = {long_name, short_name};\n    });\n  });\n\n  const locality = components.locality || components.sublocality || components.postal_town;\n  const {lat, lng} = google.geometry.location;\n\n  const result = {\n    formatted: google.formatted_address,\n    latLng: {\n      lat: locationFuncOrValue(lat),\n      lng: locationFuncOrValue(lng)\n    },\n    approximate: (!includes(google.types, 'street_address') && (!includes(google.types, 'premise'))),\n    city: locality && locality.long_name,\n    state: components.administrative_area_level_1 && components.administrative_area_level_1.short_name,\n    country: components.country && components.country.long_name,\n    countryCode: components.country && components.country.short_name,\n    street: components.route && components.route.long_name,\n    number: components.street_number && components.street_number.long_name,\n    postalCode: components.postal_code && components.postal_code.long_name,\n    subpremise: components.subpremise && components.subpremise.long_name\n  };\n\n  for (const key in result) {\n    if (isUndefined(result[key])) {\n      delete result.key;\n    }\n  }\n\n  return result;\n}\n"}});