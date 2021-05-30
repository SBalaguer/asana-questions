
function tagGenerator (name) {
    switch (name) {
        case "Recta, talle S":
          return "RectaS";
        case "Recta, talle L":
          return "RectaL";
        case "Curva, talle S":
          return "CurvaS";
        case "Curva, talle L":
          return "CurvaL";
        case "Asana Mini":
          return "Mini";
      }
}

exports.tagGenerator = tagGenerator;