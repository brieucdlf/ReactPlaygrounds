import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "td": {
        "verticalAlign": "middle !important",
        "textAlign": "center !important"
    },
    "th": {
        "verticalAlign": "middle !important",
        "textAlign": "center !important"
    },
    "input-group": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "svg": {
        "height": 150
    },
    "td:first-of-type": {
        "height": 200,
        "width": 250
    },
    "td:first-of-type > div": {
        "height": 200,
        "width": 250
    }
});