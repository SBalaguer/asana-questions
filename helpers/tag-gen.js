
function tagGenerator (name) {
    switch (name) {
        case "Recta, talle S":
          return "RectaS";
        case "Recta, talle L":
          return "RectaL";
        case "Asana Standard":
          return "CurvaS";
        case "Asana Large":
          return "CurvaL";
        case "Asana Mini":
          return "Mini";
      }
}

exports.tagGenerator = tagGenerator;