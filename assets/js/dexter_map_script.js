// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
mapboxgl.accessToken = 'pk.eyJ1Ijoic2x1c2Fyc2tpZGRldHJvaXRtaSIsImEiOiJjaXZsNXlwcXQwYnY5MnlsYml4NTJ2Mno4In0.8wKUnlMPIlxq-eWH0d10-Q';
// This adds the map to your page
var map = new mapboxgl.Map({
    // container id specified in the HTML
    container: 'map',
    // style URL
    style: 'mapbox://styles/slusarskiddetroitmi/cixxixdy6002g2rr0e5zaxdte',
    // initial position in [long, lat] format
    center: [-83.2357, 42.4170],
    // initial zoom
    zoom: 12.2
});



//13/42.4170/-83.2357

var improvements = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "address": "15805 GILCHRIST",
            "estimated_cost": "$13088.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY",
            "x": -83.2120528957164,
            "y": 42.4067973623267
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2120528957164, 42.4067973623267]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14400 ABINGTON AVE",
            "estimated_cost": "$1390.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS",
            "x": -83.2117941641478,
            "y": 42.3930581069341
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2117941641478, 42.3930581069341]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14457 ABINGTON AVE",
            "estimated_cost": "$1954.00",
            "bld_permit_desc": "INSTALL (5) VINYL REPLACEMENT WINDOWS",
            "x": -83.2126091732125,
            "y": 42.3938268723363
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2126091732125, 42.3938268723363]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16601 LINDSAY",
            "estimated_cost": "$4988.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.213482273291,
            "y": 42.4116741375782
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.213482273291, 42.4116741375782]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12934 MEMORIAL",
            "estimated_cost": "$16000.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR RENOVATIONS TO EXISTING RESIDENTIAL DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2121218496139,
            "y": 42.3840238593651
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2121218496139, 42.3840238593651]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14210 RUTLAND",
            "estimated_cost": "$22000.00",
            "bld_permit_desc": "CONSTRUCT A NEW (20X30) FRAME GARAGE ON EXISTING SINGLE FAMILY LOT AS INDICATED ON PLANS",
            "x": -83.2130238953262,
            "y": 42.3908128667395
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2130238953262, 42.3908128667395]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14565 RUTLAND",
            "estimated_cost": "$5758.00",
            "bld_permit_desc": "INSTALL (13) VINYL REPLACEMENT WINDOWS",
            "x": -83.2140026891222,
            "y": 42.394969712195
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2140026891222, 42.394969712195]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14529 RUTLAND",
            "estimated_cost": "$1255.00",
            "bld_permit_desc": "INSTALL 3 VINYL REPLACEMENT WINDOWS",
            "x": -83.2139783724443,
            "y": 42.3944758695166
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2139783724443, 42.3944758695166]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12915 RUTLAND",
            "estimated_cost": "$4224.00",
            "bld_permit_desc": "INSTALL (11) VINYL REPLACEMENT WINDOWS",
            "x": -83.2140350092457,
            "y": 42.3837235864803
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2140350092457, 42.3837235864803]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12909 RUTLAND",
            "estimated_cost": "$13790.00",
            "bld_permit_desc": "TORCH DOWN ROOF AT REAR PORCH,PAINTING ON EXTERIOR & INTERIOR,RE-GLAZING A TUB, REPLACING WALL PANELING WITH DRYWALL IN BASEMENT",
            "x": -83.2140303971813,
            "y": 42.3836138664721
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2140303971813, 42.3836138664721]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16135 OAKFIELD",
            "estimated_cost": "$4380.00",
            "bld_permit_desc": "REROOF HOUSE PER CONTRACT",
            "x": -83.2145183951288,
            "y": 42.4089978619847
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2145183951288, 42.4089978619847]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15477 OAKFIELD",
            "estimated_cost": "$22995.00",
            "bld_permit_desc": "REPLACEMENT OF (32) WINDOWS",
            "x": -83.2149135399426,
            "y": 42.4041096119589
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2149135399426, 42.4041096119589]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16713 HARLOW",
            "estimated_cost": "$3990.00",
            "bld_permit_desc": "INSTALL (10) VINYL REPLACEMENT WINDOWS (0) DOORWALLS.",
            "x": -83.215801394402,
            "y": 42.4123413615782
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.215801394402, 42.4123413615782]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16175 HARLOW",
            "estimated_cost": "$8902.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE & GARAGE",
            "x": -83.2156733948635,
            "y": 42.4095278621215
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2156733948635, 42.4095278621215]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14114 LONGACRE",
            "estimated_cost": "$22480.00",
            "bld_permit_desc": "STRIP & RE-ROOF (HOUSE ONLY); GUTTER INSTALLATION",
            "x": -83.2143031476632,
            "y": 42.3894453805015
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2143031476632, 42.3894453805015]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14200 LONGACRE",
            "estimated_cost": "$8667.00",
            "bld_permit_desc": "TEAR OFF & RE-ROOF HOME PER SIGNED CUSTOMER CONTRACT.",
            "x": -83.2143594765016,
            "y": 42.3906793613814
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2143594765016, 42.3906793613814]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14943 LONGACRE",
            "estimated_cost": "$1521.90",
            "bld_permit_desc": "REPLACEMENT GUTTERS AND DOWNSPOUTS ON THE HOUSE.  REPLACE FASCIA AND SOFIT ON THE FRONT AND BACK OF THE HOUSE.",
            "x": -83.2155576319532,
            "y": 42.3984883482195
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2155576319532, 42.3984883482195]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14901 LONGACRE",
            "estimated_cost": "$17500.00",
            "bld_permit_desc": "INTERIOR AND EXTERIOR RENOVATIONS TO AN EXISTING RESIDENTIAL DWELLING AS INDICATED",
            "x": -83.2155285592085,
            "y": 42.3979396239816
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2155285592085, 42.3979396239816]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14583 LONGACRE",
            "estimated_cost": "$5441.00",
            "bld_permit_desc": "REPLACING (9) WINDOWS",
            "x": -83.215393330676,
            "y": 42.3952716503476
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.215393330676, 42.3952716503476]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14415 LONGACRE",
            "estimated_cost": "$1934.00",
            "bld_permit_desc": "REPLACE GUTTERS AROUND DWELLING AS PER CONTRACT. SUBJECT TO FIELD APPROVAL.",
            "x": -83.2153076032269,
            "y": 42.3931959185249
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2153076032269, 42.3931959185249]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14125 LONGACRE",
            "estimated_cost": "$4831.49",
            "bld_permit_desc": "INTERIOR RENOVATIONS AS PER ATTACHED DOCUMENTS.",
            "x": -83.2151377351656,
            "y": 42.3895701453507
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2151377351656, 42.3895701453507]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14034 ARCHDALE",
            "estimated_cost": "$7892.00",
            "bld_permit_desc": "REMOVE/REPLACE HOUSE & GARAGE ROOF",
            "x": -83.2157390370249,
            "y": 42.3886705526577
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2157390370249, 42.3886705526577]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14344 ARCHDALE",
            "estimated_cost": "$2000.00",
            "bld_permit_desc": "FLOOD CLEAN UP AND REMOVAL OF EXISTING SINGLE FAMILY DWELLING AS PER PLANS.",
            "x": -83.2159062898587,
            "y": 42.3922211036909
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2159062898587, 42.3922211036909]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14516 ARCHDALE",
            "estimated_cost": "$11926.90",
            "bld_permit_desc": "TEAR OFF & RE-ROOF",
            "x": -83.2159866652896,
            "y": 42.3942787854123
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2159866652896, 42.3942787854123]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14706 ARCHDALE",
            "estimated_cost": "$1424.00",
            "bld_permit_desc": "INSTALL WINDOWS",
            "x": -83.2161336147771,
            "y": 42.3971890815493
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2161336147771, 42.3971890815493]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16600 ARCHDALE",
            "estimated_cost": "$3570.54",
            "bld_permit_desc": "INSTALL (4) SAMESIZE VINYL REPLACEMENT WINDOWS.",
            "x": -83.2161888939189,
            "y": 42.411618861605
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2161888939189, 42.411618861605]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16707 ARCHDALE",
            "estimated_cost": "$5685.00",
            "bld_permit_desc": "COMPLETE TEAR OFF WITH SHINGLE REPLACEMENT. WILL BE REPLACING 1 OSB BOARD",
            "x": -83.2168753939852,
            "y": 42.412197861589
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2168753939852, 42.412197861589]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14517 ARCHDALE",
            "estimated_cost": "$1631.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2168341259185,
            "y": 42.3942514004816
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2168341259185, 42.3942514004816]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14405 ARCHDALE",
            "estimated_cost": "$4796.00",
            "bld_permit_desc": "INSTALL (12) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2167766463002,
            "y": 42.3930343770997
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2167766463002, 42.3930343770997]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14045 ARCHDALE",
            "estimated_cost": "$2500.00",
            "bld_permit_desc": "STRIP & RE-ROOF SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2165805553666,
            "y": 42.3888054156568
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2165805553666, 42.3888054156568]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13945 ARCHDALE",
            "estimated_cost": "$4650.00",
            "bld_permit_desc": "INSTALL (2) VINYL REPLACEMENT WINDOWS",
            "x": -83.2165167905932,
            "y": 42.3874136099783
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2165167905932, 42.3874136099783]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12600 SOUTHFIELD",
            "estimated_cost": "$75000.00",
            "bld_permit_desc": "(A.K.A. 12630 SOUTFIELD - LEGAL ADDRESS) FURNISH AND INSTALL NEW ANTENNAS AND ONE (1) PREFABRICATED EQUIPMENT SHELTER AT AN EXISTING CELL TOWER COMPOUND. SEPERATE PERMITS PER TRADE. SUBJECT TO FIELD APPROVAL.",
            "x": -83.2156560048987,
            "y": 42.3801710426468
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2156560048987, 42.3801710426468]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12630 SOUTHFIELD",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "REPLACE 3 ANTENNAS ON AN EXISTING TOWER AS PER ATTACHED DOCUMENTS",
            "x": -83.2154141151269,
            "y": 42.3808512691727
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2154141151269, 42.3808512691727]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12910 ASHTON",
            "estimated_cost": "$1111.00",
            "bld_permit_desc": "REPLACEMENT WINDOWS, 1-KITCHEN, 1-BATH",
            "x": -83.2181454391317,
            "y": 42.3836649751304
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2181454391317, 42.3836649751304]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13510 ASHTON",
            "estimated_cost": "$5733.00",
            "bld_permit_desc": "HOUSE ROOF",
            "x": -83.2181668959984,
            "y": 42.3845773666798
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2181668959984, 42.3845773666798]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13920 ASHTON",
            "estimated_cost": "$12000.00",
            "bld_permit_desc": "REPLACING 20 WINDOWS",
            "x": -83.2183192219536,
            "y": 42.3870543811331
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2183192219536, 42.3870543811331]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15058 ASHTON",
            "estimated_cost": "$17601.00",
            "bld_permit_desc": "REMOVE & REPLACE ROOF SYSTEM & GUTTERS PER CERTIFICATE OF APPROPRIATENESS 15-278 & WORKLIST. INSTALL SMOKE DEVICES AND CARBON MONOXIDE DEVICES PER CODE.",
            "x": -83.2188729181342,
            "y": 42.3994423587037
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2188729181342, 42.3994423587037]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15058 ASHTON",
            "estimated_cost": "$17601.00",
            "bld_permit_desc": "STRIP AND REROOF - HOUSE ONLY; REPLACE GUTTERS - HOUSE ONLY",
            "x": -83.2188729181342,
            "y": 42.3994423587037
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2188729181342, 42.3994423587037]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16730 ASHTON",
            "estimated_cost": "$3600.00",
            "bld_permit_desc": "REMOVE ROOF COVERING & INSTALL A NEW ROOF SYSTEM AS PER CODE.",
            "x": -83.2195527690085,
            "y": 42.4125910979139
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2195527690085, 42.4125910979139]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19307 ASHTON",
            "estimated_cost": "$4450.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2209531297587,
            "y": 42.4320108836473
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2209531297587, 42.4320108836473]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19307 ASHTON",
            "estimated_cost": "$950.00",
            "bld_permit_desc": "REPLACE (1) BATHROOM WINDOW.",
            "x": -83.2209531297587,
            "y": 42.4320108836473
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2209531297587, 42.4320108836473]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15121 ASHTON",
            "estimated_cost": "$18996.00",
            "bld_permit_desc": "REPLACE (8) WINDOWS; REPLACE SIDING/TRIM ON HOUSE AND GUTTERS",
            "x": -83.2196691119993,
            "y": 42.400348846422
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2196691119993, 42.400348846422]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15015 ASHTON",
            "estimated_cost": "$4000.00",
            "bld_permit_desc": "REPLACING (8) WINDOWS",
            "x": -83.219601685607,
            "y": 42.3988777028218
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.219601685607, 42.3988777028218]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14401 ASHTON",
            "estimated_cost": "$8195.00",
            "bld_permit_desc": "GUTTERS / DOWNSPOUTS / SIDING / ROOF",
            "x": -83.2193169672032,
            "y": 42.3929441576908
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2193169672032, 42.3929441576908]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14024 ROSEMONT",
            "estimated_cost": "$2684.27",
            "bld_permit_desc": "INSTALL GUTTERS & DOWNSPOUTS",
            "x": -83.2195558957321,
            "y": 42.3884553659333
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2195558957321, 42.3884553659333]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14952 ROSEMONT",
            "estimated_cost": "$8434.00",
            "bld_permit_desc": "STRIP & RE-ROOF (HOUSE ONLY)",
            "x": -83.2200308944728,
            "y": 42.3983388642654
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2200308944728, 42.3983388642654]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15900 ROSEMONT",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "REMOVE FIRST AND 2ND FLOOR REAR PORCHES; RE: SHEATING EXTERIOR WALLS AS INDICATED ON WORKLIST, REPLACE REAR STEPS.",
            "x": -83.2206987973674,
            "y": 42.4080038714614
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2206987973674, 42.4080038714614]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16200 ROSEMONT",
            "estimated_cost": "$31450.00",
            "bld_permit_desc": "SINGLE GAMILY RESIDENTIAL REPAIRS AS PER ATTACHED SCOPE OF WORK LIST DOCUMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2207786557794,
            "y": 42.4098123269829
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2207786557794, 42.4098123269829]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20237 ROSEMONT",
            "estimated_cost": "$6921.50",
            "bld_permit_desc": "TEAR OFF & RE-ROOF",
            "x": -83.2227479821741,
            "y": 42.4412881376376
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2227479821741, 42.4412881376376]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18315 ROSEMONT",
            "estimated_cost": "$6880.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2217591490316,
            "y": 42.4243873792964
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2217591490316, 42.4243873792964]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16801 ROSEMONT",
            "estimated_cost": "$5412.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2217598204922,
            "y": 42.4138068623934
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2217598204922, 42.4138068623934]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16503 ROSEMONT",
            "estimated_cost": "$2460.00",
            "bld_permit_desc": "INSTALL 6 REPLACEMENT WINDOWS",
            "x": -83.2216070569265,
            "y": 42.4101923792413
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2216070569265, 42.4101923792413]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15915 ROSEMONT",
            "estimated_cost": "$5000.00",
            "bld_permit_desc": "REMOVE & REPLACE ROOFING SYSTEM ON AN EXISTING SINGLE FAMILY DWELLING",
            "x": -83.2215229963225,
            "y": 42.408099397316
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2215229963225, 42.408099397316]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15903 ROSEMONT",
            "estimated_cost": "$13700.00",
            "bld_permit_desc": "EXTERIOR REPAIRS ON AN EXISTING SINGLE-FAMILY DWELLING AS PER PLANS",
            "x": -83.2215157097148,
            "y": 42.4079688628116
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2215157097148, 42.4079688628116]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14031 ROSEMONT",
            "estimated_cost": "$5546.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE",
            "x": -83.220299557569,
            "y": 42.3885462033756
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.220299557569, 42.3885462033756]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15137 PENROD",
            "estimated_cost": "$4899.00",
            "bld_permit_desc": "REPLACING (6) WINDOWS",
            "x": -83.2220648295969,
            "y": 42.4004798808906
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2220648295969, 42.4004798808906]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14363 PENROD",
            "estimated_cost": "$3142.00",
            "bld_permit_desc": "INSTALL (6) VINYL REPLACEMENT WINDOWS",
            "x": -83.2216769729854,
            "y": 42.3923266280619
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2216769729854, 42.3923266280619]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13969 PENROD",
            "estimated_cost": "$5992.00",
            "bld_permit_desc": "REPLACE (7) WINDOWS",
            "x": -83.2214327827437,
            "y": 42.3876381810734
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2214327827437, 42.3876381810734]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14830 FAUST",
            "estimated_cost": "$21000.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR RENOVATIONS INCLUDING ROOFING AS PER WORKLIST",
            "x": -83.2223423144911,
            "y": 42.3965913675849
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2223423144911, 42.3965913675849]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17180 FAUST",
            "estimated_cost": "$4000.00",
            "bld_permit_desc": "REPLACE DAMAGED FLOOR JOISTS IN BASEMENT OF SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST",
            "x": -83.2233444866892,
            "y": 42.4164476420917
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2233444866892, 42.4164476420917]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20534 FAUST",
            "estimated_cost": "$2131.00",
            "bld_permit_desc": "INSTALL WINDOWS",
            "x": -83.2244701314565,
            "y": 42.443095112093
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2244701314565, 42.443095112093]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18035 FAUST",
            "estimated_cost": "$3353.00",
            "bld_permit_desc": "REPLACEMENT OF 4 WINDOWS.",
            "x": -83.224194703539,
            "y": 42.4213536067407
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.224194703539, 42.4213536067407]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17597 FAUST",
            "estimated_cost": "$4150.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS AS PER ATTACHED WORKLIST.",
            "x": -83.2241694847868,
            "y": 42.4205856231226
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2241694847868, 42.4205856231226]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13944 GREENVIEW",
            "estimated_cost": "$7944.00",
            "bld_permit_desc": "STRIP AND REROOF TO CODE A SINGLE FAMILY RESIDENTIAL DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2231704407544,
            "y": 42.3872543391393
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2231704407544, 42.3872543391393]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19742 GREENVIEW",
            "estimated_cost": "$1152.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS",
            "x": -83.2251854432161,
            "y": 42.4359858528161
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2251854432161, 42.4359858528161]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20510 GREENVIEW",
            "estimated_cost": "$14410.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE",
            "x": -83.2256467418505,
            "y": 42.4427531037627
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2256467418505, 42.4427531037627]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19919 GREENVIEW",
            "estimated_cost": "$5300.00",
            "bld_permit_desc": "INSTALL (11) VINYL REPLACEMENT WINDOWS",
            "x": -83.226140079201,
            "y": 42.4376313407617
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.226140079201, 42.4376313407617]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19509 GREENVIEW",
            "estimated_cost": "$1050.00",
            "bld_permit_desc": "INSTALL THREE (3) VINYL REPLACEMENT WINDOWS",
            "x": -83.2258788492158,
            "y": 42.4350569217031
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2258788492158, 42.4350569217031]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14511 GREENVIEW",
            "estimated_cost": "$6000.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL REPAIRS AS PER ATTACHED SCOPE OF WORK LIST DOCUMENTS & MICH RES'D BUILDING CODE.",
            "x": -83.2241559094794,
            "y": 42.3940368640976
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2241559094794, 42.3940368640976]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14111 GREENVIEW",
            "estimated_cost": "$7699.00",
            "bld_permit_desc": "INSTALL (18) VINYL REPLACEMENT WINDOWS",
            "x": -83.2240057840484,
            "y": 42.389197673543
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2240057840484, 42.389197673543]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19308 AVON",
            "estimated_cost": "$3800.00",
            "bld_permit_desc": "TEAR OFF & RE-ROOF PER SIGNED CONTRACT",
            "x": -83.2262703144902,
            "y": 42.4319114018758
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2262703144902, 42.4319114018758]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19336 AVON",
            "estimated_cost": "$5400.00",
            "bld_permit_desc": "REROOF HOUSE PER CONTRACT",
            "x": -83.2262906474389,
            "y": 42.4324601143123
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2262906474389, 42.4324601143123]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16525 AVON",
            "estimated_cost": "$7048.00",
            "bld_permit_desc": "COMPLETE RE-ROOF",
            "x": -83.2255507690836,
            "y": 42.4104251035719
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2255507690836, 42.4104251035719]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16525 AVON",
            "estimated_cost": "$10000.00",
            "bld_permit_desc": "INTERIOR/EXTERIOR RENOVATIONS TO EXISTING SINGLE FAMILY DWELLING.",
            "x": -83.2255507690836,
            "y": 42.4104251035719
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2255507690836, 42.4104251035719]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16525 AVON",
            "estimated_cost": "$1322.00",
            "bld_permit_desc": "GUTTERS",
            "x": -83.2255507690836,
            "y": 42.4104251035719
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2255507690836, 42.4104251035719]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14634 GLASTONBURY",
            "estimated_cost": "$7700.00",
            "bld_permit_desc": "TEAR OFF & RE-ROOF HOUSE & GARAGE AS INDICATED ON WORKLIST.",
            "x": -83.2246645962249,
            "y": 42.3957171024347
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2246645962249, 42.3957171024347]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14910 GLASTONBURY",
            "estimated_cost": "$3500.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2247296280906,
            "y": 42.3976646089646
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2247296280906, 42.3976646089646]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15050 GLASTONBURY",
            "estimated_cost": "$12500.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY.",
            "x": -83.2247870824163,
            "y": 42.3992773557386
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2247870824163, 42.3992773557386]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15540 GLASTONBURY",
            "estimated_cost": "$38804.95",
            "bld_permit_desc": "PERFORM&PROVIDE 1ST FL INT&EXT REPAIRS 2 AN EXTING RES STRUC.SCOPE OF WORK 2 INC:SELECT DEMO,ROUGH&FINISHED CAR,MAS&FOUNDATION REPAIRS,STRUCTUAL REPAIRS&ARCH FINISHES.",
            "x": -83.2240860351544,
            "y": 42.4038723314335
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2240860351544, 42.4038723314335]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19313 GLASTONBURY",
            "estimated_cost": "$5658.00",
            "bld_permit_desc": "WINDOW REPLACEMENT (4)",
            "x": -83.2233978903194,
            "y": 42.432015858369
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2233978903194, 42.432015858369]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18753 GLASTONBURY",
            "estimated_cost": "$4924.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2233180219242,
            "y": 42.4289976552473
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2233180219242, 42.4289976552473]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18441 GLASTONBURY",
            "estimated_cost": "$23600.00",
            "bld_permit_desc": "INTERIOR AND EXTERIOR RENOVATIONS TO AN EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST",
            "x": -83.2231565637544,
            "y": 42.4254666204403
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2231565637544, 42.4254666204403]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18425 GLASTONBURY",
            "estimated_cost": "$48000.00",
            "bld_permit_desc": "FIRE REPAIR AS PER ATTACHED SCOPE OF WORK.  ",
            "x": -83.2231488912871,
            "y": 42.4252458594343
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2231488912871, 42.4252458594343]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16571 GLASTONBURY",
            "estimated_cost": "$3453.00",
            "bld_permit_desc": "REPLACEMENT GUTTERS",
            "x": -83.2231331167372,
            "y": 42.4110576453935
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2231331167372, 42.4110576453935]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16157 GLASTONBURY",
            "estimated_cost": "$3774.00",
            "bld_permit_desc": "REPLACING (9) VINYL REPLACEMENT WINDOWS AS PER ATTACHED WORKLIST.",
            "x": -83.2230513479997,
            "y": 42.4091521412719
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2230513479997, 42.4091521412719]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16111 GLASTONBURY",
            "estimated_cost": "$4500.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTAL BUILDING CODE.",
            "x": -83.2230244343229,
            "y": 42.4085353718661
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2230244343229, 42.4085353718661]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14885 GLASTONBURY",
            "estimated_cost": "$3068.31",
            "bld_permit_desc": "INSTALL (4) SAME SIZE VINYL REPLACEMENT WINDOWS.",
            "x": -83.2255517679208,
            "y": 42.3972663899161
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2255517679208, 42.3972663899161]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14539 GLASTONBURY",
            "estimated_cost": "$1711.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2254568150882,
            "y": 42.3943788408125
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2254568150882, 42.3943788408125]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14529 GLASTONBURY",
            "estimated_cost": "$92100.00",
            "bld_permit_desc": "INTERIOR AND EXTERIOR REPAIRS AS PER CERTIFICATE OF APPROPRIATENESS.  14-136 AND WORK LIST.  SEPARATE PERMITS REQUIRED FOR TRADES. SUBJECT TO FIELD APPROVAL.",
            "x": -83.2254508074036,
            "y": 42.3942143690138
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2254508074036, 42.3942143690138]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14415 GLASTONBURY",
            "estimated_cost": "$5000.00",
            "bld_permit_desc": "SINGLE FAMILY ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE. ",
            "x": -83.2253488860199,
            "y": 42.3929858710448
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2253488860199, 42.3929858710448]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14060 STAHELIN",
            "estimated_cost": "$2787.00",
            "bld_permit_desc": "INSTALL (6) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2256686021824,
            "y": 42.3887349029528
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2256686021824, 42.3887349029528]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14420 STAHELIN",
            "estimated_cost": "$3750.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT AS PER ATTACHED SCOPE OF WORK LIST DOCUMENTS & MI RESIDENTIAL BLDG CODE.",
            "x": -83.2258203382296,
            "y": 42.3930378661518
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2258203382296, 42.3930378661518]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14875 STAHELIN",
            "estimated_cost": "$5500.00",
            "bld_permit_desc": "STRIP & RE-ROOF (HOUSE ONLY).",
            "x": -83.2267178638706,
            "y": 42.3970448939854
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2267178638706, 42.3970448939854]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14405 STAHELIN",
            "estimated_cost": "$4500.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2265541509099,
            "y": 42.3927781463233
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2265541509099, 42.3927781463233]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14177 STAHELIN",
            "estimated_cost": "$1200.00",
            "bld_permit_desc": "FIRE REPAIRS TO THE FIRST FLOOR AS ATTACHED PER ATTACHED PLANS.  INSTALL SMOKE DETECTORS PER ORD 239-H.",
            "x": -83.226451704162,
            "y": 42.3900203771604
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.226451704162, 42.3900203771604]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14156 ARTESIAN",
            "estimated_cost": "$6722.56",
            "bld_permit_desc": "TEAR OFF AND RE-ROOF",
            "x": -83.2268776496014,
            "y": 42.3897630619689
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2268776496014, 42.3897630619689]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14340 ARTESIAN",
            "estimated_cost": "$7880.00",
            "bld_permit_desc": "REPLACING 14 WINDOWS",
            "x": -83.2269538906377,
            "y": 42.3919038630415
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2269538906377, 42.3919038630415]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14520 ARTESIAN",
            "estimated_cost": "$5000.00",
            "bld_permit_desc": "INSTALL 8 THUNDER VENT 50'S, LIFETIME VENTURI ROOF LOUVERS.",
            "x": -83.2270543977343,
            "y": 42.3941008605109
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2270543977343, 42.3941008605109]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15300 ARTESIAN",
            "estimated_cost": "$3230.00",
            "bld_permit_desc": "INSTALL (7) VINYL REPLACEMENT WINDOWS (0) DOORWALLS.",
            "x": -83.2272678587244,
            "y": 42.4010260413532
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2272678587244, 42.4010260413532]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16206 SUNDERLAND RD",
            "estimated_cost": "$7800.00",
            "bld_permit_desc": "REMOVE AND REPLACE ROOF COVERING TO CODE ON AN EXISTING SINGLE-FAMILY DWELLING AS PER WORKLIST",
            "x": -83.2271975560529,
            "y": 42.4096788580174
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2271975560529, 42.4096788580174]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19340 SUNDERLAND RD",
            "estimated_cost": "$4605.00",
            "bld_permit_desc": "INSTALL (11) VINYL REPLACEMENT WINDOWS",
            "x": -83.2287444248485,
            "y": 42.4325318578742
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2287444248485, 42.4325318578742]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19462 SUNDERLAND RD",
            "estimated_cost": "$2366.00",
            "bld_permit_desc": "INSTALL (7) VINYL REPLACEMENT WINDOWS",
            "x": -83.228811632662,
            "y": 42.4344128398897
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.228811632662, 42.4344128398897]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20545 SUNDERLAND RD",
            "estimated_cost": "$5976.00",
            "bld_permit_desc": "REPLACING (6) WINDOWS.  REPLACING SIDING & TRIM ON GARAGE",
            "x": -83.2294687458809,
            "y": 42.4431474603632
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2294687458809, 42.4431474603632]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15165 ARTESIAN",
            "estimated_cost": "$1700.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS, (-) DOORWALLS",
            "x": -83.2279855123875,
            "y": 42.4006793448153
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2279855123875, 42.4006793448153]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15071 ARTESIAN",
            "estimated_cost": "$11500.00",
            "bld_permit_desc": "REMOVE EXISTING SHINGLE. REPLACE ROTTEN SHEATHING. INSTALL ALUMINUM DRIP EDGE. INSTALL ICE GUARD. INSTALL 15 LBS FELT. INSTALL ASPHALT SHINGLES. INSTALL VENTILATION AS PER CODE.",
            "x": -83.2279432101394,
            "y": 42.3994441117052
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2279432101394, 42.3994441117052]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14331 ARTESIAN",
            "estimated_cost": "$1340.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS",
            "x": -83.2277114754033,
            "y": 42.3917683661261
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2277114754033, 42.3917683661261]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14852 WARWICK",
            "estimated_cost": "$2187.00",
            "bld_permit_desc": "REPLACEMENT GUTTERS ON HOME WITH LIKE COLOR & PRODUCT.",
            "x": -83.2283186078844,
            "y": 42.3967300788234
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2283186078844, 42.3967300788234]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17254 WARWICK",
            "estimated_cost": "$7352.00",
            "bld_permit_desc": "STRIP & RE-ROOF (HOUSE ONLY)",
            "x": -83.228887835075,
            "y": 42.4175731109816
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.228887835075, 42.4175731109816]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19320 WARWICK",
            "estimated_cost": "$1400.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS",
            "x": -83.2298966446188,
            "y": 42.4321102268031
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2298966446188, 42.4321102268031]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19346 WARWICK",
            "estimated_cost": "$4900.00",
            "bld_permit_desc": "REPLACING (9) WINDOWS",
            "x": -83.2299198837546,
            "y": 42.4326257554805
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2299198837546, 42.4326257554805]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15515 WARWICK",
            "estimated_cost": "$8250.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMEN PER CITY ROOF REPLACEMENT REQUIREMENTS & MICH RES'D BLDG CODE.",
            "x": -83.2294333634711,
            "y": 42.4042973809854
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2294333634711, 42.4042973809854]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14328 PIEDMONT",
            "estimated_cost": "$6000.00",
            "bld_permit_desc": "PERFORM & PROVIDE ALTERATIONS TO AN EXISTING GARAGE, SCOPE OF WORK TO INCLUDE SELECTIVE DEMOLITION, ROUGH/FINISH CARPENTRY, ROOFING, SYSTEM & GARAGE DOOR, SEPERATE PERMITS PER TRADE.",
            "x": -83.2294545260175,
            "y": 42.3916901268366
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2294545260175, 42.3916901268366]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19366 SHAFTSBURY",
            "estimated_cost": "$6142.00",
            "bld_permit_desc": "STRIP & REROOF",
            "x": -83.2308738842026,
            "y": 42.4329797552087
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2308738842026, 42.4329797552087]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16615 SHAFTSBURY",
            "estimated_cost": "$8800.00",
            "bld_permit_desc": "INSTALL (23) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2306910334669,
            "y": 42.4115318724599
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2306910334669, 42.4115318724599]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14596 GRANDVILLE",
            "estimated_cost": "$3300.00",
            "bld_permit_desc": "REMOVE AND REPLACE ROOF SYSTEM AS PER CERTIFICATE OF APPROPRIATENESSE# AND CONTRACT.  INSTALL SMOKE DEVICES PER CODE.",
            "x": -83.2307639094384,
            "y": 42.3950448604287
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2307639094384, 42.3950448604287]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15370 GRANDVILLE",
            "estimated_cost": "$11375.00",
            "bld_permit_desc": "REMOVE AND REPLACE ROOF COVERING AND VENTS TO CODE ON AN EXISTING HISTORIC SINGLE-FAMILY DWELLING PER HDC CERT #15-235 AS PER WORK LIST",
            "x": -83.2310210486623,
            "y": 42.4023288481096
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2310210486623, 42.4023288481096]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15434 GRANDVILLE",
            "estimated_cost": "$9000.00",
            "bld_permit_desc": "REMOVE EXISTING SHINGLE,REPLACE ROTTEN SHEATHING,INSTALL ALUMINUM DRIP EDGE,INSTALL ICE GUARD,INSTALL 15LB FELT,INSTALL ASPHALT SHINGLES,INSTALL VENTILIATION AS PER CODE.",
            "x": -83.2310487902891,
            "y": 42.403147105938
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2310487902891, 42.403147105938]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15760 GRANDVILLE",
            "estimated_cost": "$20115.00",
            "bld_permit_desc": "STRIP AND RE-ROOF HOUSE & GARAGE",
            "x": -83.2311585248733,
            "y": 42.4052825103751
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2311585248733, 42.4052825103751]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17584 GRANDVILLE",
            "estimated_cost": "$24910.00",
            "bld_permit_desc": "ROOFING FOR DWELLING,GUTTERS,DOWNSPOUTS FOR DWELLING,SIDING FOR GARAGE,WINDOWS GARAGE (1), KITCHEN CABINETRY.",
            "x": -83.2314058889943,
            "y": 42.4205873606649
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2314058889943, 42.4205873606649]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20500 GRANDVILLE",
            "estimated_cost": "$11919.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY",
            "x": -83.2329214278024,
            "y": 42.4424701446915
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2329214278024, 42.4424701446915]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19721 GRANDVILLE",
            "estimated_cost": "$6071.60",
            "bld_permit_desc": "STRIP & RE ROOF",
            "x": -83.2330603505535,
            "y": 42.4354908963386
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2330603505535, 42.4354908963386]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17595 GRANDVILLE",
            "estimated_cost": "$21500.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENCE - CONSTRUCT A NEW DETACHED 20 FT X 20 FT GARAGE WITH NEW FOOTINGS AND SLAB PER ATTACHED PLANS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2322801455946,
            "y": 42.4207264271827
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2322801455946, 42.4207264271827]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15323 GRANDVILLE",
            "estimated_cost": "$3500.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2317222717273,
            "y": 42.4013548672753
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2317222717273, 42.4013548672753]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15323 GRANDVILLE",
            "estimated_cost": "$10000.00",
            "bld_permit_desc": "ALTERATIONS TO AN EXISTING 81'7\" CELL TOWER AS PER PLANS.",
            "x": -83.2317222717273,
            "y": 42.4013548672753
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2317222717273, 42.4013548672753]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13558 WESTWOOD",
            "estimated_cost": "$2290.00",
            "bld_permit_desc": "INSTALL (5) VINYL REPLACEMENT WINDOWS",
            "x": -83.2315506732,
            "y": 42.3849526102443
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2315506732, 42.3849526102443]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14420 WESTWOOD",
            "estimated_cost": "$5585.00",
            "bld_permit_desc": "SIDING HOUSE COMPLETE",
            "x": -83.2319003914446,
            "y": 42.3928888656106
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2319003914446, 42.3928888656106]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17166 HUNTINGTON",
            "estimated_cost": "$10000.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENCE GENERAL REPAIRS AS PER ATTACHED SCOPE WORK LIST DOCUMENTS& MICHIGAN RESIDENTIAL BUILDING CODE",
            "x": -83.2325917559933,
            "y": 42.4161999147391
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2325917559933, 42.4161999147391]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17188 HUNTINGTON",
            "estimated_cost": "$2029.00",
            "bld_permit_desc": "ADD BLOWN IN R-30 INSULATION IN THE ATTIC",
            "x": -83.2325701443199,
            "y": 42.4165287649213
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2325701443199, 42.4165287649213]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17558 HUNTINGTON",
            "estimated_cost": "$13000.00",
            "bld_permit_desc": "INTERIOR AND EXTERIOR RENOVATIONS TO AN EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.232722142498,
            "y": 42.4203908395697
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.232722142498, 42.4203908395697]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20501 HUNTINGTON",
            "estimated_cost": "$5750.00",
            "bld_permit_desc": "INSTALL (9) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2348308857374,
            "y": 42.4424078568492
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2348308857374, 42.4424078568492]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14925 WESTWOOD",
            "estimated_cost": "$6877.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE",
            "x": -83.2327952943649,
            "y": 42.3976075848113
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2327952943649, 42.3976075848113]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13535 WESTWOOD",
            "estimated_cost": "$2000.00",
            "bld_permit_desc": "REMOVE THE EXISTING ROOF COVERING ON THE FRONT OF DWELLING ONLY.  INSTALL A NEW ROOF SYSTEM (INCLUDING DORMERS) AS PER CODE.  EXTER & INTER REPAIRS AS PER CONTRACT",
            "x": -83.2322748915625,
            "y": 42.384606867255
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2322748915625, 42.384606867255]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13582 MINOCK",
            "estimated_cost": "$3750.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2328018915614,
            "y": 42.3852398672805
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2328018915614, 42.3852398672805]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13626 MINOCK",
            "estimated_cost": "$2125.00",
            "bld_permit_desc": "REPLACEMENT WINDOWS 1-LIVING ROOM/2-BEDROOM",
            "x": -83.2328236308054,
            "y": 42.3858118523977
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2328236308054, 42.3858118523977]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18498 EDINBOROUGH",
            "estimated_cost": "$2400.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2340106388598,
            "y": 42.4260293800513
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2340106388598, 42.4260293800513]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18415 EDINBOROUGH",
            "estimated_cost": "$2166.00",
            "bld_permit_desc": "INSTALL (2) VINYL REPLACEMENT WINDOWS AS PER WORKLIST & CODE. SUBJECT TO FIELD APPROVAL. INSTALL DEVICES PER ORD 239-H.",
            "x": -83.2346259298934,
            "y": 42.4248558543345
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2346259298934, 42.4248558543345]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17341 EDINBOROUGH",
            "estimated_cost": "$7900.00",
            "bld_permit_desc": "REMOVE EXISTING SHINGLE, REPLACE ROTTEN SHEATHING, INSTALL ALUMINUM DRIP EDGE, INSTALL ICE GUARD, INSTALL 15 LB FELT, INSTALL ASPHALT SHINGLES, INSTALL VENTILATION AS PER CODE.",
            "x": -83.2343255531241,
            "y": 42.4181496028878
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2343255531241, 42.4181496028878]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15791 MINOCK",
            "estimated_cost": "$15745.00",
            "bld_permit_desc": "SIDING & TRIM, GUTTERS",
            "x": -83.2342938690798,
            "y": 42.4056854230271
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2342938690798, 42.4056854230271]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15781 MINOCK",
            "estimated_cost": "$16588.00",
            "bld_permit_desc": "STRIP & RE-ROOF (HOUSE ONLY)",
            "x": -83.2342886704664,
            "y": 42.4055648698603
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2342886704664, 42.4055648698603]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15751 MINOCK",
            "estimated_cost": "$1231.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR REPAIRS",
            "x": -83.2342666427701,
            "y": 42.4050819056786
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2342666427701, 42.4050819056786]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15487 MINOCK",
            "estimated_cost": "$26575.00",
            "bld_permit_desc": "REMOVE AND REPLACE 11 WINDOWS, GLASS BLOCK UNIT W/ VENT, INTERIOR CEILING REPAIRS, AND NOTED TRADE ITEMS AS PER WORKLIST.",
            "x": -83.2341888930687,
            "y": 42.4033879377249
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2341888930687, 42.4033879377249]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17578 ANNCHESTER",
            "estimated_cost": "$4157.00",
            "bld_permit_desc": "INSTALLL WINDOWS",
            "x": -83.2348466523405,
            "y": 42.4205873280535
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2348466523405, 42.4205873280535]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17511 ANNCHESTER",
            "estimated_cost": "$13146.00",
            "bld_permit_desc": "STRIP & RE-ROOF (HOUSE ONLY)",
            "x": -83.2354603873806,
            "y": 42.4196463612356
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2354603873806, 42.4196463612356]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17161 ANNCHESTER",
            "estimated_cost": "$682.00",
            "bld_permit_desc": "REPLACEMENT WINDOWS - 1",
            "x": -83.2353065824797,
            "y": 42.4162341991531
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2353065824797, 42.4162341991531]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16168 KENTFIELD",
            "estimated_cost": "$16580.00",
            "bld_permit_desc": "INTERIOR REPAIRS (VINYL SIDING) ON SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST",
            "x": -83.2404479332123,
            "y": 42.4088122048945
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2404479332123, 42.4088122048945]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19170 WESTMORELAND",
            "estimated_cost": "$2160.00",
            "bld_permit_desc": "INSTALL (6) VINYL REPLACMENT WINDOWS.",
            "x": -83.2363441335999,
            "y": 42.43079827953
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2363441335999, 42.43079827953]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19480 WESTMORELAND",
            "estimated_cost": "$1305.00",
            "bld_permit_desc": "INSTALL (1) VINYL REPLACEMENT PICTURE WINDOW.",
            "x": -83.2365072203473,
            "y": 42.4344320847143
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2365072203473, 42.4344320847143]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16601 WESTMORELAND",
            "estimated_cost": "$3000.00",
            "bld_permit_desc": "FIRE REPAIRS TO AN EXISTING SINGLE FAMILY DWELLING AS PER WORKLIST",
            "x": -83.2359303097894,
            "y": 42.4114116256178
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2359303097894, 42.4114116256178]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16854 PLAINVIEW",
            "estimated_cost": "$3667.31",
            "bld_permit_desc": "TEAR OFF & RE-ROOF HOME PER SIGNED CUSTOMER CONTRACT",
            "x": -83.2366016324415,
            "y": 42.4141987804225
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2366016324415, 42.4141987804225]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17354 PLAINVIEW",
            "estimated_cost": "$2655.61",
            "bld_permit_desc": "INSTALL (3) SAME SIZE VINYL REPLACEMENT WINDOWS",
            "x": -83.2369574534299,
            "y": 42.418284565116
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2369574534299, 42.418284565116]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20221 PLAINVIEW",
            "estimated_cost": "$3280.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2384001426538,
            "y": 42.4407193781077
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2384001426538, 42.4407193781077]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20201 PLAINVIEW",
            "estimated_cost": "$6805.00",
            "bld_permit_desc": "REPLACING (7) WINDOWS",
            "x": -83.2383916283653,
            "y": 42.440491334062
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2383916283653, 42.440491334062]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20201 PLAINVIEW",
            "estimated_cost": "$2379.00",
            "bld_permit_desc": "INSTALL (1) SAME SIZE 17X7 GARAGE DOOR",
            "x": -83.2383916283653,
            "y": 42.440491334062
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2383916283653, 42.440491334062]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15903 PLAINVIEW",
            "estimated_cost": "$28900.00",
            "bld_permit_desc": "EXTERIOR & INTERIOR RENOVATIONS AS PER ATTACHED SCOPE OF WORK.  INSTALL SMOKE DETECTORS PER ORD 239-H.",
            "x": -83.2368669809903,
            "y": 42.4076343877773
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2368669809903, 42.4076343877773]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15441 PLAINVIEW",
            "estimated_cost": "$32150.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR REPAIRS AS PER WORKLIST",
            "x": -83.2366091500745,
            "y": 42.4027098825173
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2366091500745, 42.4027098825173]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20250 EVERGREEN",
            "estimated_cost": "$64815.00",
            "bld_permit_desc": "INTERIOR/EXTERIOR RENOVATIONS AS PER WORKLIST.",
            "x": -83.2388981409734,
            "y": 42.4411483818092
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2388981409734, 42.4411483818092]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16753 EVERGREEN",
            "estimated_cost": "$2500.00",
            "bld_permit_desc": "REMOVE ROOF COVERING AND INSTALL A NEW ROOF SYSTEM AS PER CODE.",
            "x": -83.2383388939355,
            "y": 42.4126744205749
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2383388939355, 42.4126744205749]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14185 CRESCENT DR",
            "estimated_cost": "$4500.00",
            "bld_permit_desc": "PERMIT FOR ROOF REPLACEMENT PREVIOUSLY PERFORMED WITHOUT BENEFIT OF PERMIT ON AN EXISTING SINGLE FAMILY DWELLING",
            "x": -83.2385340942891,
            "y": 42.3915002216534
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2385340942891, 42.3915002216534]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14185 CRESCENT DR",
            "estimated_cost": "$8500.00",
            "bld_permit_desc": "AKA 14411 CRESCENT DR. INTERIOR RENOVATIONS TO EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2385340942891,
            "y": 42.3915002216534
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2385340942891, 42.3915002216534]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14185 CRESCENT DR",
            "estimated_cost": "$40415.00",
            "bld_permit_desc": "RENOVATIONS TO AN EXISTING TOWNHOUSE INCLUDING RENOVATIONS TO AN EXISTING TOWNHOUSE INCLUDING EXTERIOR DOORS, WINDOWS & INTERIOR RENOATIONS AS PER ATTACHED DOCUMENT.",
            "x": -83.2385340942891,
            "y": 42.3915002216534
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2385340942891, 42.3915002216534]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14185 CRESCENT DR",
            "estimated_cost": "$8500.00",
            "bld_permit_desc": "AKA 14297 CRESENT DR. INTERIOR RENOVATIONS TO EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2385340942891,
            "y": 42.3915002216534
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2385340942891, 42.3915002216534]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14185 CRESCENT DR",
            "estimated_cost": "$8500.00",
            "bld_permit_desc": "AKA 14275 CRESCENT DR. INTERIOR RENOVATIONS TO EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2385340942891,
            "y": 42.3915002216534
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2385340942891, 42.3915002216534]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14185 CRESCENT DR",
            "estimated_cost": "$8500.00",
            "bld_permit_desc": "AKA 14401 CRESCENT DR.  INTERIOR RENOVATIONS TO EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2385340942891,
            "y": 42.3915002216534
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2385340942891, 42.3915002216534]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14185 CRESCENT DR",
            "estimated_cost": "$8500.00",
            "bld_permit_desc": "AKA 14395 CRESCENT DR. INTERIOR RENOVATIONS TO EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2385340942891,
            "y": 42.3915002216534
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2385340942891, 42.3915002216534]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14185 CRESCENT DR",
            "estimated_cost": "$35285.00",
            "bld_permit_desc": "RENOVATIONS TO AN EXISTING TOWNHOUSE INCLUDING EXTERIOR DOORS, WINDOWS & INTERIOR RENOVATIONS AS PER ATTACHED DOCUMENT.",
            "x": -83.2385340942891,
            "y": 42.3915002216534
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2385340942891, 42.3915002216534]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16740 VAUGHAN",
            "estimated_cost": "$1364.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS",
            "x": -83.2387360887282,
            "y": 42.4124426156081
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2387360887282, 42.4124426156081]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16800 VAUGHAN",
            "estimated_cost": "$1899.69",
            "bld_permit_desc": "INSTALL (3) SAME SIZE VINYL REPLACEMENT WINDOWS",
            "x": -83.2387862769145,
            "y": 42.4134528722358
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2387862769145, 42.4134528722358]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20250 VAUGHAN",
            "estimated_cost": "$16979.50",
            "bld_permit_desc": "INSTALL CLASSIC FRONT TUB W/SLATE TILE, NEW CABINET DOOR AND 2 NEW DRAWERS, AND NEW SLATE FLOORING.",
            "x": -83.2401570629582,
            "y": 42.4410748362054
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2401570629582, 42.4410748362054]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16851 VAUGHAN",
            "estimated_cost": "$5503.00",
            "bld_permit_desc": "SIDING ON HOME",
            "x": -83.2393838918656,
            "y": 42.4140724430254
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2393838918656, 42.4140724430254]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16519 VAUGHAN",
            "estimated_cost": "$15800.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR (GENERAL REPAIRS) INCLUDING PORCH",
            "x": -83.2391608912658,
            "y": 42.4104144355044
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2391608912658, 42.4104144355044]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15719 VAUGHAN",
            "estimated_cost": "$6295.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY",
            "x": -83.2389562730795,
            "y": 42.4047221610549
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2389562730795, 42.4047221610549]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20258 HEYDEN",
            "estimated_cost": "$8458.00",
            "bld_permit_desc": "STRIP & RE ROOF",
            "x": -83.2413809432206,
            "y": 42.4411817651179
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2413809432206, 42.4411817651179]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20286 HEYDEN",
            "estimated_cost": "$8986.00",
            "bld_permit_desc": "STRIP & REROOF",
            "x": -83.2413930153492,
            "y": 42.4415439828524
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2413930153492, 42.4415439828524]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16200 STOUT",
            "estimated_cost": "$997.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS",
            "x": -83.2415828844095,
            "y": 42.409253305154
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2415828844095, 42.409253305154]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20520 STOUT",
            "estimated_cost": "$35000.00",
            "bld_permit_desc": "FIRE REPAIRS TO INCLUDE INTERIOR & EXTERIOR RENOVATIONS AS PER ATTACHED SPECIFICATIONS. INSTALL SMOKE DETECTORS PER ORD 239-H",
            "x": -83.243843887763,
            "y": 42.4423648595796
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.243843887763, 42.4423648595796]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16603 STOUT",
            "estimated_cost": "$1320.00",
            "bld_permit_desc": "GUTTERS & DOWNSPOUTS",
            "x": -83.2423187185624,
            "y": 42.4109826707019
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2423187185624, 42.4109826707019]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16161 STOUT",
            "estimated_cost": "$750.00",
            "bld_permit_desc": "R49 BLOWN-IN FIBERGLASS INSULATION IN ATTIC; R13 FACED BATT FIBERGLASS INSULATION IN KNEEWALL",
            "x": -83.2421961659084,
            "y": 42.4086936325063
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2421961659084, 42.4086936325063]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15709 STOUT",
            "estimated_cost": "$5650.00",
            "bld_permit_desc": "INSTALL (14) VINYL REPLACEMENT WINDOWS",
            "x": -83.2420471803227,
            "y": 42.4044518868313
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2420471803227, 42.4044518868313]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15453 STOUT",
            "estimated_cost": "$3995.00",
            "bld_permit_desc": "INSTALLING (10) VINYL REPLACEMENT WINDOW AS PER ATTACHED WORKLIST. SUBJECT TO FIELD APPROVAL. INSTALL SMOKE DEVICES PER ORD 239-H.",
            "x": -83.2420023924381,
            "y": 42.4031833682737
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2420023924381, 42.4031833682737]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17630 FIELDING",
            "estimated_cost": "$3600.00",
            "bld_permit_desc": "REMOVE AND REPLACE ROOF COVERING AND VENTS TO CODE ON AN EXISTING SINGLE-FAMILY DWELLNG AS PE WORKLIST.",
            "x": -83.2434907697026,
            "y": 42.420983877636
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2434907697026, 42.420983877636]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17577 FIELDING",
            "estimated_cost": "$20000.00",
            "bld_permit_desc": "INTERIOR RENOVATIONS IN AN EXISTING SINGLE FAMILY DWELLING AS PER WORKLIST.",
            "x": -83.244170263471,
            "y": 42.4201921419612
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.244170263471, 42.4201921419612]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17367 FIELDING",
            "estimated_cost": "$9707.00",
            "bld_permit_desc": "STRIP AND REROOF HOUSE",
            "x": -83.2440737256924,
            "y": 42.4182891966445
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2440737256924, 42.4182891966445]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16540 PATTON",
            "estimated_cost": "$21200.00",
            "bld_permit_desc": "CONSTRUCT NEW FRONT PORCH ENCLOSURE (29FT X 10FT) AS PER ATTACHED PLANS & MI RESIDENTIAL BLD CODE.",
            "x": -83.2438540600486,
            "y": 42.4102151149172
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2438540600486, 42.4102151149172]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17110 PATTON",
            "estimated_cost": "$4650.00",
            "bld_permit_desc": "INSTALL (9) VINYL REPLACEMENT WINDOWS",
            "x": -83.2443978884106,
            "y": 42.4152768797401
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2443978884106, 42.4152768797401]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19376 PATTON",
            "estimated_cost": "$2395.00",
            "bld_permit_desc": "INSTALL (6) VINYL REPLACEMENT WINDOWS",
            "x": -83.2450092082614,
            "y": 42.432874079282
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2450092082614, 42.432874079282]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20063 PATTON",
            "estimated_cost": "$4850.00",
            "bld_permit_desc": "STRIP & REROOF",
            "x": -83.2456343852999,
            "y": 42.4392684128507
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2456343852999, 42.4392684128507]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19135 PATTON",
            "estimated_cost": "$5377.00",
            "bld_permit_desc": "REROOF HOUSE",
            "x": -83.2454721202041,
            "y": 42.4300636841296
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2454721202041, 42.4300636841296]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17367 PATTON",
            "estimated_cost": "$7650.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE",
            "x": -83.2452931052182,
            "y": 42.4182601810673
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2452931052182, 42.4182601810673]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16520 BRAILE",
            "estimated_cost": "$4053.00",
            "bld_permit_desc": "INSTALL (9) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2449718858294,
            "y": 42.4099543633238
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2449718858294, 42.4099543633238]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16904 BRAILE",
            "estimated_cost": "$4237.00",
            "bld_permit_desc": "COMPLETE TEAR-OFF RESHINGLE ROOF.  REPLACE BOARDS AS NEEDED.",
            "x": -83.2451434867112,
            "y": 42.414670305078
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2451434867112, 42.414670305078]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19196 BRAILE",
            "estimated_cost": "$8865.40",
            "bld_permit_desc": "TEAR OFF & RE-ROOF",
            "x": -83.2458961456457,
            "y": 42.4309190367851
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2458961456457, 42.4309190367851]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19414 BRAILE",
            "estimated_cost": "$3200.00",
            "bld_permit_desc": "INSTALL (7) VINYL REPLACEMENT WINDOWS",
            "x": -83.2459899037286,
            "y": 42.4333035374523
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2459899037286, 42.4333035374523]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16545 BRAILE",
            "estimated_cost": "$12000.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENCE:  CONSTRUCT NEW DETACHED GARAGE (14 FT X 20 FT) ON NEW FOUNDATION AND SLAB AS PER ATTACHED PLANS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2455833758141,
            "y": 42.4102643056921
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2455833758141, 42.4102643056921]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14421 BRAILE",
            "estimated_cost": "$1000.00",
            "bld_permit_desc": "INTERIOR RENOVATION TO INSTALL ONE 3'X5' HALF BATHROOM ON FIRST FLR, EXTERIOR RENOVATION T ERECT A 10'X11' WOODEN DECK IN REAR YARD AS PER PLAN",
            "x": -83.2448003873548,
            "y": 42.3926113663957
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2448003873548, 42.3926113663957]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16574 PIERSON",
            "estimated_cost": "$4200.00",
            "bld_permit_desc": "EXTERIOR ALTERATIONS (RE-ROOF) PER ALL CITY CODES AND ATTACHED DOCUMENTS.",
            "x": -83.2460898818154,
            "y": 42.4106683665834
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2460898818154, 42.4106683665834]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17192 PIERSON",
            "estimated_cost": "$52358.00",
            "bld_permit_desc": "FIRE REPAIRS (INTERIOR) AS LISTED AND EXTERIOR IMPROVEMENTS AS INDICATED ON WORKLIST.SEPARATE TRADES REQUIRED.",
            "x": -83.2468688868577,
            "y": 42.4163443605798
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2468688868577, 42.4163443605798]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17820 PIERSON",
            "estimated_cost": "$5950.00",
            "bld_permit_desc": "REMOVAL & REPLACEMENT OF SEVENTEEN (17) VINYL WINDOWS AS PER ATTACHED WORKLIST. INSTALL REQUIRED CARBON MONOXIDE DETECTORS PER MICHIGAN RESIDENTIAL CODE 2009 SEC. R315.2",
            "x": -83.2463687106884,
            "y": 42.4235638516357
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2463687106884, 42.4235638516357]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20501 PIERSON",
            "estimated_cost": "$12000.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL REPAIRS AS PER ATTACHED SCOP E OF WORK LIST DOCUMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2481525515725,
            "y": 42.442017374222
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2481525515725, 42.442017374222]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17561 PIERSON",
            "estimated_cost": "$47998.00",
            "bld_permit_desc": "REMOVE & REPLACE ROOFING ON EXISTING CHURCH AS PER WORKSHEET.",
            "x": -83.247467885036,
            "y": 42.4198698781161
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.247467885036, 42.4198698781161]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16861 PIERSON",
            "estimated_cost": "$4840.00",
            "bld_permit_desc": "INSTALL (6) VINYL REPLACEMENT  WINDOWS, (-) DOORWALLS.",
            "x": -83.2468688242129,
            "y": 42.414023907258
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2468688242129, 42.414023907258]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12940 BURT RD",
            "estimated_cost": "$4488.00",
            "bld_permit_desc": "COMPLETE TEAR-OFF AND REPLACEMENT OF SHINGLES.",
            "x": -83.2461631062515,
            "y": 42.3834511243641
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2461631062515, 42.3834511243641]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12940 BURT RD",
            "estimated_cost": "$605.00",
            "bld_permit_desc": "REPLACEMENT GUTTERS & DOWNSPOUTS.",
            "x": -83.2461631062515,
            "y": 42.3834511243641
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2461631062515, 42.3834511243641]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16134 BURT RD",
            "estimated_cost": "$20000.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR REPAIRS AS PER WORKLIST",
            "x": -83.2470889031957,
            "y": 42.4082853203059
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2470889031957, 42.4082853203059]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19750 BURT RD",
            "estimated_cost": "$20000.00",
            "bld_permit_desc": "(A.K.A. 20833 PEMBROKE - LOCAL ADDRESS) FURNISH AND INSTALL A NEW FIRE ALARM SYSTEM FOR A COMMERICAL STRUCTURE.",
            "x": -83.2481378954905,
            "y": 42.4356598132639
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2481378954905, 42.4356598132639]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20100 BURT RD",
            "estimated_cost": "$19100.00",
            "bld_permit_desc": "CONSTRUCT NEW 14' X 22' GARAGE & RE-MOVE * REPLACE SHINGLES AT HOUSE PER ATTACHED DOCUMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2485691192039,
            "y": 42.4397367633386
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2485691192039, 42.4397367633386]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20229 BURT RD",
            "estimated_cost": "$9984.00",
            "bld_permit_desc": "SIDING & TRIM 8.59 SQ",
            "x": -83.2494093509151,
            "y": 42.4406413324522
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2494093509151, 42.4406413324522]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16800 TRINITY",
            "estimated_cost": "$7500.00",
            "bld_permit_desc": "INTERIOR RENOVATIONS TO EXISTING SCHOOL AS PER WORKLIST",
            "x": -83.2482624225282,
            "y": 42.4139186930238
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2482624225282, 42.4139186930238]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15907 BURT RD",
            "estimated_cost": "$13090.00",
            "bld_permit_desc": "REMOVE EXISTING SHINGLE, REPLACE ROTTEN SHEATHING, INSTALL ALUMINUM DRIP EDGE, ICE GUARD, 15 LB FELT, ASPHALT SHINGLES & VENTILATION AS PER CODE.",
            "x": -83.2477553853422,
            "y": 42.4074208639616
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2477553853422, 42.4074208639616]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19516 TRINITY",
            "estimated_cost": "$4967.00",
            "bld_permit_desc": "COMPLETE TEAR OFF & REPLACEMENT OF SHINGLES.",
            "x": -83.2496840651202,
            "y": 42.4346006074762
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2496840651202, 42.4346006074762]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19901 TRINITY",
            "estimated_cost": "$3023.00",
            "bld_permit_desc": "COMPLETE TEAR OFF AND REPLACEMENT OF SHINGLES. REPLACEMENT OF SOME PLANKING.",
            "x": -83.250455054963,
            "y": 42.4367198377401
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.250455054963, 42.4367198377401]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20547 BLACKSTONE",
            "estimated_cost": "$4300.00",
            "bld_permit_desc": "INSTALL (7) VINYL REPLACEMENT WINDOWS",
            "x": -83.25181028895,
            "y": 42.4426074764903
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.25181028895, 42.4426074764903]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19451 BLACKSTONE",
            "estimated_cost": "$5868.00",
            "bld_permit_desc": "STRIP & REROOF HOUSE & GARAGE AT RESIDENTIAL DWELLING AS INDICATED ON WORKLIST.  ALSO INSTALL NEW GUTTERS & DOWNSPOUTS.",
            "x": -83.2515501173015,
            "y": 42.4337068829236
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2515501173015, 42.4337068829236]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16535 BLACKSTONE",
            "estimated_cost": "$10000.00",
            "bld_permit_desc": "GENERAL REPAIRS AS PER ATTACHED LIST.  INSTALL SMOKE DETECTORS AS PER ORD 239-H.",
            "x": -83.2500358678452,
            "y": 42.4101329555116
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2500358678452, 42.4101329555116]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15772 WESTBROOK",
            "estimated_cost": "$6760.88",
            "bld_permit_desc": "GEAR OFF AND RE-ROOF",
            "x": -83.2503261262044,
            "y": 42.4056338426623
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2503261262044, 42.4056338426623]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19784 WESTBROOK",
            "estimated_cost": "$1974.00",
            "bld_permit_desc": "INSTALL (5) VINYL REPLACEMENT WINDOWS (0) DOORWALLS.",
            "x": -83.2521321590165,
            "y": 42.4359348425048
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2521321590165, 42.4359348425048]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20257 WESTBROOK",
            "estimated_cost": "$15380.00",
            "bld_permit_desc": "INSTALL NEW VINYL WINDOWS (14), INSTALL GLASS BLOCK WINDOW IN BASEMENT (10), INSTALL CONCRETE FOUNDATION ON NORTH ELEVATION, INSTALL TOP SOIL, PAINT (3) DOORS, INSTALL NEW FURNACE & AC UNIT, NEW DRAWER IN KITCHEN CABINETS.",
            "x": -83.2530278659803,
            "y": 42.4408403926026
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2530278659803, 42.4408403926026]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19957 WESTBROOK",
            "estimated_cost": "$6500.00",
            "bld_permit_desc": "INSTALLATION OF AN ACCESSIBLE RAMP ON THE FRONT OF AN EXISTING SINGLE FAMILY DWELLING.",
            "x": -83.2529176263924,
            "y": 42.4377791557281
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2529176263924, 42.4377791557281]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19916 BENTLER",
            "estimated_cost": "$7900.00",
            "bld_permit_desc": "REMOVE 432 SFT OF GUNITE IN-GROUND POOL AND REMOVE DEBRIS.  BACKFILL W/CLEAN FILL MATERIAL.",
            "x": -83.2533802949276,
            "y": 42.4369699393436
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2533802949276, 42.4369699393436]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16596 CHAPEL",
            "estimated_cost": "$1551.27",
            "bld_permit_desc": "REMOVE OLD GUTTERING TO FRONT OF HOME & INSTALL NEW GUTTERS WITH ADDITIONAL DOWNSPOUT",
            "x": -83.2533273981623,
            "y": 42.4108749183722
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2533273981623, 42.4108749183722]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19020 CHAPEL",
            "estimated_cost": "$12081.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY",
            "x": -83.2543703808551,
            "y": 42.4281303449665
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2543703808551, 42.4281303449665]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19469 CHAPEL",
            "estimated_cost": "$5466.00",
            "bld_permit_desc": null,
            "x": -83.2551742409013,
            "y": 42.4338391260013
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2551742409013, 42.4338391260013]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20109 BURGESS",
            "estimated_cost": "$8450.96",
            "bld_permit_desc": "INSTALL TUB, TILE AND FLOORING",
            "x": -83.2566068796925,
            "y": 42.4395868585379
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2566068796925, 42.4395868585379]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20019 BURGESS",
            "estimated_cost": "$4867.00",
            "bld_permit_desc": "INSTALL (11) VINYL REPLACEMENT WINDOWS",
            "x": -83.2565628790694,
            "y": 42.4383798585327
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2565628790694, 42.4383798585327]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19719 BURGESS",
            "estimated_cost": "$4010.00",
            "bld_permit_desc": "REMOVE & REPLACE ROOF COVERING & VENTS TO CODE ON AN EXISTING SINGLE-FAMILY DWELLING AS PER WORKLIST.",
            "x": -83.2564450067346,
            "y": 42.434962116938
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2564450067346, 42.434962116938]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20068 GREYDALE",
            "estimated_cost": "$1521.00",
            "bld_permit_desc": "REPLACEMENT GUTTERS",
            "x": -83.2570868796421,
            "y": 42.4390233583019
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2570868796421, 42.4390233583019]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20100 GREYDALE",
            "estimated_cost": "$4930.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2571028794062,
            "y": 42.439462358638
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2571028794062, 42.439462358638]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16809 GREYDALE",
            "estimated_cost": "$12000.00",
            "bld_permit_desc": "FIRE REPAIRS AS PER WORKLIST. NOTE ORIGIN OF FIRE IN BASEMENT.  INSTALL SMOKE DEVICES AND CARBON MONOXIDE DETECTORS PER CODE.",
            "x": -83.2564678816476,
            "y": 42.4127228633181
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2564678816476, 42.4127228633181]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16759 LAHSER",
            "estimated_cost": "$18200.00",
            "bld_permit_desc": "INTERIOR AND EXTERIOR RENOVATIONS TO EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST",
            "x": -83.2576978815715,
            "y": 42.4124638635196
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2576978815715, 42.4124638635196]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14154 ROCKDALE",
            "estimated_cost": "$3680.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2574095931634,
            "y": 42.3891367090696
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2574095931634, 42.3891367090696]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15038 ROCKDALE",
            "estimated_cost": "$3250.00",
            "bld_permit_desc": "REMOVAL AND REPLACEMENT OF ONE (1) PATIO DOOR AT REAR OF EXISTING SINGLE FAMILY DWELLING AS PER WORKLIST.",
            "x": -83.2576803825163,
            "y": 42.3981818661562
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2576803825163, 42.3981818661562]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14015 ROCKDALE",
            "estimated_cost": "$4650.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2580203411774,
            "y": 42.38753207966
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2580203411774, 42.38753207966]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14909 DOLPHIN",
            "estimated_cost": "$5632.00",
            "bld_permit_desc": "1-KITCHEN, 1-DINING ROOM, 3-BED, 1-BATH, 2 ATTIC",
            "x": -83.2595238820553,
            "y": 42.3969673662815
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2595238820553, 42.3969673662815]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19190 HOUGHTON",
            "estimated_cost": "$9940.00",
            "bld_permit_desc": "EXTERIOR RENOVATIONS TO AN EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST",
            "x": -83.2605426295025,
            "y": 42.4304591117909
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2605426295025, 42.4304591117909]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20150 HOUGHTON",
            "estimated_cost": "$533.00",
            "bld_permit_desc": "REPLACEMENT GUTTERS & DOWNSPOUTS.",
            "x": -83.2606713755826,
            "y": 42.4400507947479
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2606713755826, 42.4400507947479]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20150 HOUGHTON",
            "estimated_cost": "$1798.00",
            "bld_permit_desc": "REPLACEMENT WINDOWS 2-KITCHEN",
            "x": -83.2606713755826,
            "y": 42.4400507947479
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2606713755826, 42.4400507947479]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20195 HOUGHTON",
            "estimated_cost": "$9987.00",
            "bld_permit_desc": "STRIP & RE-ROOF (HOUSE ONLY)",
            "x": -83.2613413682399,
            "y": 42.4405998392416
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2613413682399, 42.4405998392416]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16742 LAMPHERE",
            "estimated_cost": "$13000.00",
            "bld_permit_desc": "INSTALLATION OF A FIRE ALARM SYSTEM THROUGHOUT AN EXISTING PRIVATE YOUTH TUTORING FACILITY AS PER PLANS.",
            "x": -83.2618243806165,
            "y": 42.4120688636085
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2618243806165, 42.4120688636085]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17350 MCINTYRE",
            "estimated_cost": "$24950.00",
            "bld_permit_desc": "INTERIOR AND EXTERIOR RENOVATIONS TO EXISTING RESIDENTIAL DWELLING AS INDICATED ON WORKLIST",
            "x": -83.2643835537448,
            "y": 42.4174572275343
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2643835537448, 42.4174572275343]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19270 MCINTYRE",
            "estimated_cost": "$2800.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2628363790827,
            "y": 42.4316418736216
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2628363790827, 42.4316418736216]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17343 MCINTYRE",
            "estimated_cost": "$4500.00",
            "bld_permit_desc": "REPLACING (8) WINDOWS",
            "x": -83.2652749438726,
            "y": 42.4176616836402
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2652749438726, 42.4176616836402]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20235 ALDERTON",
            "estimated_cost": "$1981.00",
            "bld_permit_desc": "INSTALL (5) VINYL REPLACEMENT WINDOWS",
            "x": -83.2644158398664,
            "y": 42.44021910868
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2644158398664, 42.44021910868]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20355 REDFERN",
            "estimated_cost": "$5000.00",
            "bld_permit_desc": "INSTALL (5) CINYL REPLACEMENT WINDOWS.",
            "x": -83.2655437329329,
            "y": 42.4417898476906
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2655437329329, 42.4417898476906]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20225 REDFERN",
            "estimated_cost": "$7800.00",
            "bld_permit_desc": "REMOVE AND REPLACE ROOF COVERING ON HOUSE & GARAGE & VENTS TO CODE ON AN EXISTING SINGLE FAMILY DWELLING",
            "x": -83.2654567471411,
            "y": 42.4399716228489
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2654567471411, 42.4399716228489]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16737 CHATHAM",
            "estimated_cost": "$1000.00",
            "bld_permit_desc": "GENERAL REPAIR AS PER WORK LIST.",
            "x": -83.2637833795142,
            "y": 42.411984863701
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2637833795142, 42.411984863701]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14368 BRAMELL",
            "estimated_cost": "$2995.00",
            "bld_permit_desc": "INSTALL SIDING ONLY",
            "x": -83.2644728697092,
            "y": 42.391126359284
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2644728697092, 42.391126359284]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15880 BRAMELL",
            "estimated_cost": "$3835.60",
            "bld_permit_desc": "TEAR OFF AND RE-ROOF",
            "x": -83.2642593695491,
            "y": 42.4067933633564
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2642593695491, 42.4067933633564]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16501 BRAMELL",
            "estimated_cost": "$3000.00",
            "bld_permit_desc": "STRIP AND RE ROOF TO CODE HOUSE AND GARAGE A RESIDENTIAL DWELLING AS INDICATED ON WORKLIST",
            "x": -83.2650112638242,
            "y": 42.4096119329694
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2650112638242, 42.4096119329694]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13957 BRAMELL",
            "estimated_cost": "$5980.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY",
            "x": -83.2651378325685,
            "y": 42.3869957558883
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2651378325685, 42.3869957558883]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17334 BEAVERLAND",
            "estimated_cost": "$19188.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY. 110 FT OF GUTTERS HOUSE ONLY.",
            "x": -83.2661228444738,
            "y": 42.4174908909619
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2661228444738, 42.4174908909619]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17767 BEAVERLAND",
            "estimated_cost": "$7125.00",
            "bld_permit_desc": "REMOVE AND REPLACE ROOF COVERING TO CODE AS PER ATTACHED WORKLIST.",
            "x": -83.2656142019653,
            "y": 42.4206488283548
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2656142019653, 42.4206488283548]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17161 BEAVERLAND",
            "estimated_cost": "$1524.00",
            "bld_permit_desc": "INSTALL (30 VINYL REPLACEMENT WINDOWS.",
            "x": -83.267063785422,
            "y": 42.4156525565889
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.267063785422, 42.4156525565889]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17151 BEAVERLAND",
            "estimated_cost": "$1524.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2670398024114,
            "y": 42.4155158480068
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2670398024114, 42.4155158480068]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16197 BEAVERLAND",
            "estimated_cost": "$3600.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF.  REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2662148582359,
            "y": 42.4092892254094
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2662148582359, 42.4092892254094]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12690 WEST PARKWAY",
            "estimated_cost": "$7534.00",
            "bld_permit_desc": "REMOVE EXISTING SHINGLE, REPLACE ROTTEN SHEATHING, INSTALL ALUMINUM DRIP EDGE, INSTALL ICE GUARD, INSTALL 15 LB FELT, INSTALL ASPHALT SHINGLES, INSTALL VENTILATIN AS PER CODE.",
            "x": -83.2657478811982,
            "y": 42.3800883695822
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2657478811982, 42.3800883695822]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20366 BERG RD",
            "estimated_cost": "$27100.00",
            "bld_permit_desc": "REMOVE & REPLACE ROOFING & GUTTERS. TRADE PERMITS REQ'D FOR MECHANICAL & PLUMBING. INSTALL SMOKE DETECTORS PER ORD 239-H.",
            "x": -83.2680782094644,
            "y": 42.4418888071549
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2680782094644, 42.4418888071549]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12818 HAZELTON",
            "estimated_cost": "$40690.00",
            "bld_permit_desc": "REPLACE SHINGLES, NEW GUTTER, DRIVEWAY.  INSTALL (7) WINDOWS & BASEMENT GLASS BLOCK.",
            "x": -83.2669543743335,
            "y": 42.3814572972691
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2669543743335, 42.3814572972691]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12866 GRAYFIELD",
            "estimated_cost": "$2000.00",
            "bld_permit_desc": "REPLACE THE LOW SLOPE BACK OF THE HOUSE. REPLACE 5 SHEETS OF OSB. COMPLETE TEAR OFF & REPLACEMENT OF SHINGLES.",
            "x": -83.268188627182,
            "y": 42.3820837730286
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.268188627182, 42.3820837730286]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15450 GRAYFIELD",
            "estimated_cost": "$1900.00",
            "bld_permit_desc": "WATERPROOFING BASEMENT FOUNDATION WALL ON AN EXISITNG CONDO AS PER PLANS",
            "x": -83.2688121656453,
            "y": 42.4027633744371
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2688121656453, 42.4027633744371]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15403 GRAYFIELD",
            "estimated_cost": "$5000.00",
            "bld_permit_desc": "SINGLE FAMILY DWELLING FIRE REPAIRS AS PER ATTACHED PROPOSED SCOPE OF WORK LIST DOCUMENTATION & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2694208110477,
            "y": 42.4021013524905
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2694208110477, 42.4021013524905]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12842 RIVERDALE DR",
            "estimated_cost": "$5447.00",
            "bld_permit_desc": "INSTALL ( ) VINYL REPLACEMENT WINDOWS ( ) DOORWALLS",
            "x": -83.2693998254856,
            "y": 42.3817247987121
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2693998254856, 42.3817247987121]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12842 RIVERDALE DR",
            "estimated_cost": "$8000.00",
            "bld_permit_desc": "STRIP & REROOF",
            "x": -83.2693998254856,
            "y": 42.3817247987121
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2693998254856, 42.3817247987121]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18633 CODDING",
            "estimated_cost": "$1200.00",
            "bld_permit_desc": "SINGLE FAMILY GARAGE ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICH RESIDENTIAL BLDG CODE.",
            "x": -83.2715345011055,
            "y": 42.4254817914411
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2715345011055, 42.4254817914411]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12733 RIVERDALE DR",
            "estimated_cost": "$11400.00",
            "bld_permit_desc": "REPLACING (8) WINDOWS, INSTALLING NEW ROOF, INSTALLING NEW GARAGE DOOR & POURING (2) NEW STEPS.",
            "x": -83.2700700541564,
            "y": 42.3807756281226
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2700700541564, 42.3807756281226]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12916 VIRGIL",
            "estimated_cost": "$2000.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2706343582331,
            "y": 42.3826913738041
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2706343582331, 42.3826913738041]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18970 SHIAWASSEE",
            "estimated_cost": "$8066.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.27229576572,
            "y": 42.4277713816755
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.27229576572, 42.4277713816755]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "24285 SHIAWASSEE",
            "estimated_cost": "$3560.00",
            "bld_permit_desc": "INSTALL (7) VINYL REPLACEMENT WINDOWS",
            "x": -83.2816494131812,
            "y": 42.4401682816115
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2816494131812, 42.4401682816115]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12885 VIRGIL",
            "estimated_cost": "$5100.00",
            "bld_permit_desc": "INSTALL (11) VINYL REPLACEMENT WINDOWS",
            "x": -83.2713188841768,
            "y": 42.38223487164
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2713188841768, 42.38223487164]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18510 APPLETON",
            "estimated_cost": "$3600.00",
            "bld_permit_desc": "REMOVE AND REPLACE ROOF SYSTEM AS PER WORKLIST AND CODE, INSTALL SMOKE DEVICES AND CARBON MONOXIDE DEVICES PER CODES.",
            "x": -83.2734118735282,
            "y": 42.4246863095594
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2734118735282, 42.4246863095594]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18530 APPLETON",
            "estimated_cost": "$500.00",
            "bld_permit_desc": "FIRE REPAIRS TO EXISTING DWELLING . TO BE ONLY DRYWALL AND PAINTING AS INDICATED PER WORKLIST.",
            "x": -83.2734233659998,
            "y": 42.424974305577
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2734233659998, 42.424974305577]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19139 RIVERVIEW",
            "estimated_cost": "$10193.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY 84 FT GUTTERS",
            "x": -83.2756828420061,
            "y": 42.4296400911711
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2756828420061, 42.4296400911711]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14075 RIVERVIEW",
            "estimated_cost": "$300000.00",
            "bld_permit_desc": "EXTERIOR REPAIRS/ ALTERATIONS AS PER PLANS (SUBJECT TO FIELD APPROVAL). SEE BLD2012-00783 FOR DETAILED SET OF PLANS. BLD.#23B",
            "x": -83.2738921423204,
            "y": 42.3882287979406
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2738921423204, 42.3882287979406]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19349 DALE",
            "estimated_cost": "$5490.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2768639411021,
            "y": 42.4324801535195
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2768639411021, 42.4324801535195]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18607 DALE",
            "estimated_cost": "$4000.00",
            "bld_permit_desc": "REMOVAL & REPLACMENT OF ROOF FRAMING AND COVERING ON ACCESSORY GARAGE AS PER 2015 MICHIGAN RESIDENTIAL CODE.",
            "x": -83.2769903741454,
            "y": 42.4257663617078
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2769903741454, 42.4257663617078]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15703 DALE",
            "estimated_cost": "$40000.00",
            "bld_permit_desc": "INERIOR RENOVATIONS TO AN EXISTING RESTUARANT ON THE GROUND FLOOR.",
            "x": -83.2756247028845,
            "y": 42.4039185545086
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2756247028845, 42.4039185545086]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19300 TELEGRAPH",
            "estimated_cost": "$11379.00",
            "bld_permit_desc": "NINE (9) REPLACEMENT WINDOWS, SIDING & GUTTERS ON HOUSE ONLY.",
            "x": -83.277278270639,
            "y": 42.43182735521
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.277278270639, 42.43182735521]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17326 WOODBINE",
            "estimated_cost": "$5600.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2783746134846,
            "y": 42.4173328451055
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2783746134846, 42.4173328451055]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17430 WOODBINE",
            "estimated_cost": "$1700.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS",
            "x": -83.2784298748567,
            "y": 42.4187588632124
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2784298748567, 42.4187588632124]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20015 WOODBINE",
            "estimated_cost": "$3706.00",
            "bld_permit_desc": "INSTALL (7) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2798828964294,
            "y": 42.4373006497543
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2798828964294, 42.4373006497543]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17719 WOODBINE",
            "estimated_cost": "$4496.00",
            "bld_permit_desc": "INSTALL (9) VINYL REPLACEMENT WINDOWS",
            "x": -83.2791739967855,
            "y": 42.4210525104323
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2791739967855, 42.4210525104323]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16602 WORMER",
            "estimated_cost": "$1358.00",
            "bld_permit_desc": "REPLACEMENT WINDOWS",
            "x": -83.279116390418,
            "y": 42.4110093592264
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.279116390418, 42.4110093592264]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18224 WORMER",
            "estimated_cost": "$5948.00",
            "bld_permit_desc": "COMPLETE TEAR OFF RESHINGLE.REPLACE BOARD AS NEEDED.",
            "x": -83.2795547099743,
            "y": 42.4220901030473
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2795547099743, 42.4220901030473]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18253 WORMER",
            "estimated_cost": "$4122.00",
            "bld_permit_desc": "TEAR OFF (1) LAYERS SHINGLES. HAUL AWAY & INSTALL NEW SHINGLES.",
            "x": -83.2803493736772,
            "y": 42.4224813627078
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2803493736772, 42.4224813627078]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17212 LENORE",
            "estimated_cost": "$2280.00",
            "bld_permit_desc": "INSTALL (6) VINYL REPLACEMENT WINDOWS",
            "x": -83.2808571446919,
            "y": 42.4161638661648
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2808571446919, 42.4161638661648]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17686 LENORE",
            "estimated_cost": "$4300.00",
            "bld_permit_desc": "REMOVE & REPLACE EXISTING ROOF SYSTEM ON A SINGLE FAMILY RESIDENTIAL. MUST CONFORM TO MRC 2009. SEPERATE PERMITS PER TRADE. SUBJECT TO FIELD APPROVAL.",
            "x": -83.2810423734504,
            "y": 42.4205448630579
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2810423734504, 42.4205448630579]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17665 LENORE",
            "estimated_cost": "$4297.00",
            "bld_permit_desc": "TEAR OFF AND REPLACE THE ROOF ON THE HOUSE",
            "x": -83.2817420112814,
            "y": 42.4201966218489
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2817420112814, 42.4201966218489]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20200 FENTON",
            "estimated_cost": "$6415.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2824367270104,
            "y": 42.4389571154526
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2824367270104, 42.4389571154526]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20075 FENTON",
            "estimated_cost": "$6270.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2830983690971,
            "y": 42.4390001369767
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2830983690971, 42.4390001369767]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20065 FENTON",
            "estimated_cost": "$8930.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2830935439056,
            "y": 42.4388767375449
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2830935439056, 42.4388767375449]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18601 FENTON",
            "estimated_cost": "$4714.00",
            "bld_permit_desc": "REPLACE (1) WINDOW - BAY WINDOW STRUCTURAL CHANGE.",
            "x": -83.2831413727517,
            "y": 42.4253053624706
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2831413727517, 42.4253053624706]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18517 FENTON",
            "estimated_cost": "$4200.00",
            "bld_permit_desc": "INSTALL (9) VINYL REPLACEMENT WINDOWS",
            "x": -83.2831283725043,
            "y": 42.4250278622476
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2831283725043, 42.4250278622476]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18424 WINSTON",
            "estimated_cost": "$9035.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2836303019188,
            "y": 42.4237671456328
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2836303019188, 42.4237671456328]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18465 WINSTON",
            "estimated_cost": "$2250.00",
            "bld_permit_desc": "INSTALL (6) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2844803723995,
            "y": 42.4242843625215
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2844803723995, 42.4242843625215]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18223 WINSTON",
            "estimated_cost": "$1269.00",
            "bld_permit_desc": "INSTALL (2) VINYL REPLACEMENT WINDOWS (0) DOORWALLS.",
            "x": -83.2843727692287,
            "y": 42.4219386003955
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2843727692287, 42.4219386003955]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17147 WINSTON",
            "estimated_cost": "$9250.00",
            "bld_permit_desc": "STRIP AND RE-ROOF",
            "x": -83.2841018733148,
            "y": 42.4150478642857
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2841018733148, 42.4150478642857]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16875 WINSTON",
            "estimated_cost": "$1500.00",
            "bld_permit_desc": "STRIP AND RE-ROOF (GARAGE ONLY) AT A SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST",
            "x": -83.284016527421,
            "y": 42.4129963568186
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.284016527421, 42.4129963568186]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19862 GRANDVIEW",
            "estimated_cost": "$7253.00",
            "bld_permit_desc": "REMOVE ROOF COVERING AND INSTALL NEW ROOF SYSTEM AS PER CODE.",
            "x": -83.2848351140361,
            "y": 42.4359158445806
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2848351140361, 42.4359158445806]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19919 GRANDVIEW",
            "estimated_cost": "$3200.00",
            "bld_permit_desc": "REMOVE & REPLACE ROOF & VENTS TO CODE AS PER WORKLIST.",
            "x": -83.2855119639407,
            "y": 42.4364794175472
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2855119639407, 42.4364794175472]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17246 SALEM",
            "estimated_cost": "$3300.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE",
            "x": -83.2848007506036,
            "y": 42.4163986447514
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2848007506036, 42.4163986447514]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20521 SALEM",
            "estimated_cost": "$2259.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS",
            "x": -83.286872873708,
            "y": 42.4412829629067
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.286872873708, 42.4412829629067]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20457 SALEM",
            "estimated_cost": "$13460.00",
            "bld_permit_desc": "SIDING AND TRIM ON HOUSE ONLY. 47FT. OF GUTTERS ON HOUSE ONLY.",
            "x": -83.2868428041994,
            "y": 42.4404187451133
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2868428041994, 42.4404187451133]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16530 FIVE POINTS",
            "estimated_cost": "$17040.00",
            "bld_permit_desc": "REPLACEMENT WINDOWS (11) & STRIP & RE-ROOF (HOUSE ONLY)",
            "x": -83.2860681429104,
            "y": 42.4098303821636
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2860681429104, 42.4098303821636]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16818 FIVE POINTS",
            "estimated_cost": "$7300.00",
            "bld_permit_desc": "RE-ROOF HOUSE PER CONTRACT.",
            "x": -83.2861568097985,
            "y": 42.4121011462736
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2861568097985, 42.4121011462736]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16926 FIVE POINTS",
            "estimated_cost": "$46000.00",
            "bld_permit_desc": "FIRE REPAIRS TO EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST",
            "x": -83.2862143306352,
            "y": 42.4135822048025
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2862143306352, 42.4135822048025]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19252 FIVE POINTS",
            "estimated_cost": "$1640.00",
            "bld_permit_desc": "INSTALL (1) VINLY REPLACEMENT WINDOWS",
            "x": -83.2867239077216,
            "y": 42.4307505954854
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2867239077216, 42.4307505954854]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19460 FIVE POINTS",
            "estimated_cost": "$3900.00",
            "bld_permit_desc": "INSTALLING (4) WINDOWS.",
            "x": -83.2868141123888,
            "y": 42.4335543029088
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2868141123888, 42.4335543029088]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20000 FIVE POINTS",
            "estimated_cost": "$40000.00",
            "bld_permit_desc": "INTERIOR REPAIRS AND RENOVATIONS FOR WATER DAMAGE TO SINGLE FAMILY DWELLING AS INDICATED ON PLANS",
            "x": -83.2872527734698,
            "y": 42.4379090893946
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2872527734698, 42.4379090893946]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "11987 W OUTER DRIVE",
            "estimated_cost": "$2000.00",
            "bld_permit_desc": "FIRE DAMAGE REPAIRS TO SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2557656240829,
            "y": 42.3915324213912
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2557656240829, 42.3915324213912]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "8398 W OUTER DRIVE",
            "estimated_cost": "$4537.00",
            "bld_permit_desc": "INSTALL (10) VINYL REPLACEMENT WINDOWS",
            "x": -83.2255126422709,
            "y": 42.4193660699315
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2255126422709, 42.4193660699315]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "8680 W OUTER DRIVE",
            "estimated_cost": "$38572.00",
            "bld_permit_desc": null,
            "x": -83.2306984332279,
            "y": 42.419167370334
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2306984332279, 42.419167370334]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "8818 W OUTER DRIVE",
            "estimated_cost": "$9192.00",
            "bld_permit_desc": "REPLACING 20 WINDOWS",
            "x": -83.2321928936547,
            "y": 42.4173209803281
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2321928936547, 42.4173209803281]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "10366 W OUTER DRIVE",
            "estimated_cost": "$87390.00",
            "bld_permit_desc": "GENERAL REPAIRS AS PER DOCUMENT.",
            "x": -83.2352803998111,
            "y": 42.3984028714587
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2352803998111, 42.3984028714587]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "10490 W OUTER DRIVE",
            "estimated_cost": "$86000.00",
            "bld_permit_desc": "GENERAL REPAIRS AS PER DOCUMENT.",
            "x": -83.2375354002351,
            "y": 42.3983334275308
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2375354002351, 42.3983334275308]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19215 W EIGHT MILE",
            "estimated_cost": "$16000.00",
            "bld_permit_desc": "EXTERIOR RENOVATIONS TO FACADE OF EXISTING BUILDING AS INDICATED ON PLANS.",
            "x": -83.2322811324046,
            "y": 42.4436438007145
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2322811324046, 42.4436438007145]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "21733 W GRAND RIVER",
            "estimated_cost": "$10000.00",
            "bld_permit_desc": "ALTERATIONS TO EXISTING RESTAURANT AS PER PLAN.",
            "x": -83.2571749329124,
            "y": 42.4160486815875
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2571749329124, 42.4160486815875]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15781 ARDMORE",
            "estimated_cost": "$9000.00",
            "bld_permit_desc": "STRIP AND RE-ROOF TO CODE A SINGLE FAMILY DWELLING AS INDICATED, ALSO REPLACED CEDAR SIDING WITH ASPHALT.",
            "x": -83.1850166552715,
            "y": 42.4071078756325
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1850166552715, 42.4071078756325]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20012 HEYDEN",
            "estimated_cost": "$9861.20",
            "bld_permit_desc": "TEAR OFF & RE-ROOF. THE FLAT ROOF ON BACK OF HOME IS NOT BE TOUCHED.",
            "x": -83.2412718073574,
            "y": 42.4386245685681
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2412718073574, 42.4386245685681]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20281 KENTFIELD",
            "estimated_cost": "$41965.00",
            "bld_permit_desc": "WINDOWS, DOORS, SIDING UNDER THE SOFFIT, KITCHEN, BATHROOM & TREE REMOVER",
            "x": -83.2433291904882,
            "y": 42.441451598432
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2433291904882, 42.441451598432]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18906 GAINSBOROUGH",
            "estimated_cost": "$8774.00",
            "bld_permit_desc": "INSTALL (16) VINYL REPLACEMENT WINDOWS",
            "x": -83.2275117910619,
            "y": 42.406630755727
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2275117910619, 42.406630755727]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18814 GAINSBOROUGH",
            "estimated_cost": "$2500.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2260426655842,
            "y": 42.4060475812193
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2260426655842, 42.4060475812193]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18656 GAINSBOROUGH",
            "estimated_cost": "$11831.00",
            "bld_permit_desc": "COMPLETE TEAR OFF",
            "x": -83.2243878690391,
            "y": 42.4053824566198
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2243878690391, 42.4053824566198]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18420 BRETTON DR",
            "estimated_cost": "$6144.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2204438657328,
            "y": 42.4038190638108
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2204438657328, 42.4038190638108]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16911 W MCNICHOLS",
            "estimated_cost": "$5100.00",
            "bld_permit_desc": "EXTERIOR REPAIR TO INSTALL A 64' X 16' EXTERIOR WALL ON A NEW FOOTING AT WEST ELEVATION AS PER ATTACHED PLAN.",
            "x": -83.2103214294509,
            "y": 42.4154536026939
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2103214294509, 42.4154536026939]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19750 W MCNICHOLS",
            "estimated_cost": "$75000.00",
            "bld_permit_desc": "REVISE BLD2014-01262 ISSUED 4/11/14 TO SHOW TRUSS DESIGN OF DECK. SUBJECT TO FIELD APPROVAL.",
            "x": -83.2366083877015,
            "y": 42.4155013617029
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2366083877015, 42.4155013617029]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "23675 W SEVEN MILE",
            "estimated_cost": "$2000.00",
            "bld_permit_desc": "LEGAL ADDRESS 23689 W. SEVEN MILE. INTERIOR ALTERATIONS IN AN EXISTING OFFICE AS PER PLANS. NO MARIHUANA DISPENSARY OR USE APPROVED OR IMPLIED.",
            "x": -83.2742793319055,
            "y": 42.428724632151
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2742793319055, 42.428724632151]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19101 EVERGREEN",
            "estimated_cost": "$10000.00",
            "bld_permit_desc": "INSTALL (3) RM'S, (1) NEW 700 MHZ ANTENNA (ALPHA SECTOR), (1) NEW 700 MHZ PANNEL ANTENNA (BETA SECTOR, AND (4) NEW PANNEL ANTENNAS (GAMMA SECTOR) AS PER PLANS. SEPERATE PERMITS REQUIRED FOR TRADES. ",
            "x": -83.2396265838616,
            "y": 42.4303635118575
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2396265838616, 42.4303635118575]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18215 PEMBROKE",
            "estimated_cost": "$5424.00",
            "bld_permit_desc": "INSTALL (13) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2211833881893,
            "y": 42.436933858126
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2211833881893, 42.436933858126]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "24274 NORFOLK",
            "estimated_cost": "$10500.00",
            "bld_permit_desc": "RE-ROOF HOUSE & GARAGE PER CONTRACT.",
            "x": -83.2814484809489,
            "y": 42.4397732598826
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2814484809489, 42.4397732598826]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "24605 W EIGHT MILE",
            "estimated_cost": "$3500.00",
            "bld_permit_desc": "(AKA 24731 W 8 MILE) INTERIOR ALTERATIONS TO EXISTING 1 STORY, 720 SFT RETAIL BUILDING W/STORAGE ON SITE AS PER PLANS. SEPERATE PERMITS REQUIRED FOR TRADES. SUBJECT TO FIELD APPROVAL",
            "x": -83.2855619286958,
            "y": 42.4423385413729
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2855619286958, 42.4423385413729]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16875 ARDMORE",
            "estimated_cost": "$5496.00",
            "bld_permit_desc": "REMOVE/REPLACE HOUSE ROOF",
            "x": -83.1853774034402,
            "y": 42.4154968597388
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1853774034402, 42.4154968597388]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16534 MARK TWAIN",
            "estimated_cost": "$33704.00",
            "bld_permit_desc": "REVISE (BLD2015-02897) TO REFLECT TRUE COST OF CONSTRUCTION AS INDICATED ON WORKLIST.",
            "x": -83.1866983984588,
            "y": 42.4121473573888
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1866983984588, 42.4121473573888]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16860 MARK TWAIN",
            "estimated_cost": "$4840.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY",
            "x": -83.1868269715145,
            "y": 42.4152550815035
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1868269715145, 42.4152550815035]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16855 STRATHMOOR",
            "estimated_cost": "$2240.00",
            "bld_permit_desc": "REPLACMENT GUTTERS",
            "x": -83.1886799024351,
            "y": 42.4151168598324
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1886799024351, 42.4151168598324]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16545 STRATHMOOR",
            "estimated_cost": "$4170.00",
            "bld_permit_desc": "INSTALL (1) SAME SIZE FRONT ENTRY DOOR.",
            "x": -83.1885540665046,
            "y": 42.4122046160307
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1885540665046, 42.4122046160307]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15724 LAUDER",
            "estimated_cost": "$2988.00",
            "bld_permit_desc": "INSTALL (9) VINYL REPLACEMENT WINDOWS (0) DOORWALLS",
            "x": -83.1912076597994,
            "y": 42.4059818384918
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1912076597994, 42.4059818384918]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15915 LAUDER",
            "estimated_cost": "$21575.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR RENOVATIONS TO AN EXISTING RESIDENTIAL DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.1920339476837,
            "y": 42.4088208540184
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1920339476837, 42.4088208540184]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15421 ROBSON",
            "estimated_cost": "$17765.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR RENOVATIONS TO AN EXISTING RESIDENTIAL DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.1930316365741,
            "y": 42.4038403806385
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1930316365741, 42.4038403806385]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16526 COYLE",
            "estimated_cost": "$3399.00",
            "bld_permit_desc": "REPLACING (4) WINDOWS",
            "x": -83.1939278576271,
            "y": 42.4116912194854
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1939278576271, 42.4116912194854]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16871 COYLE",
            "estimated_cost": "$6452.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY",
            "x": -83.1947144007263,
            "y": 42.4152903683268
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1947144007263, 42.4152903683268]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16839 COYLE",
            "estimated_cost": "$10183.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE & GARAGE",
            "x": -83.1946991539531,
            "y": 42.4147863314515
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1946991539531, 42.4147863314515]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16801 COYLE",
            "estimated_cost": "$6980.00",
            "bld_permit_desc": "STRIP & REROOF (HOUSE ONLY); GUTTER REPLACEMENT (HOUSE ONLY)",
            "x": -83.1946848645972,
            "y": 42.4143303606575
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1946848645972, 42.4143303606575]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15099 COYLE",
            "estimated_cost": "$11295.00",
            "bld_permit_desc": "REPLACEMENT WINDOWS (12) & STRIP & RE-ROOF (HOUSE ONLY).",
            "x": -83.1941294267287,
            "y": 42.4009151275026
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1941294267287, 42.4009151275026]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15021 COYLE",
            "estimated_cost": "$4100.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR RENOVATIONS TO EXISTING RESIDENTIAL DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.1940823889479,
            "y": 42.3998130975584
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1940823889479, 42.3998130975584]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14580 PREST",
            "estimated_cost": "$7100.00",
            "bld_permit_desc": "REPLACING (12) WINDOWS",
            "x": -83.1969044863367,
            "y": 42.3955781220378
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1969044863367, 42.3955781220378]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16131 WINTHROP",
            "estimated_cost": "$14500.00",
            "bld_permit_desc": "EXTERIOR AND INTERIOR ALTERATIONS AND RENOVATIONS AS PER ATTAHED DOCUMENT.",
            "x": -83.2008789976168,
            "y": 42.4093238648497
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2008789976168, 42.4093238648497]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14187 GRANDMONT",
            "estimated_cost": "$2734.00",
            "bld_permit_desc": "INSTALL (6) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2111211170077,
            "y": 42.3905211247537
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2111211170077, 42.3905211247537]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13531 GRANDMONT",
            "estimated_cost": "$5760.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2104658667579,
            "y": 42.3850856403248
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2104658667579, 42.3850856403248]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16708 OAKFIELD",
            "estimated_cost": "$8105.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY",
            "x": -83.2139995383243,
            "y": 42.4122661194509
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2139995383243, 42.4122661194509]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16707 ARCHDALE",
            "estimated_cost": "$1276.00",
            "bld_permit_desc": "BLOWN IN INSULATION R-49",
            "x": -83.2168753939852,
            "y": 42.412197861589
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2168753939852, 42.412197861589]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12620 SOUTHFIELD",
            "estimated_cost": "$10000.00",
            "bld_permit_desc": "INSTALL (3) PANEL ANTENNAS, (3) RRU'S TO TOWER, (27) CORA JUMPERS, (3) AISG CABLES, (8) BATTERIES, (1) HYBRID CABLE, (1) 2.5 GROWTH CABINET & (1) BEAKOUT CYLINDER TO EXISTING 150 FT MONOPOLE AS PER PLANS.",
            "x": -83.2158675834742,
            "y": 42.3808326186767
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2158675834742, 42.3808326186767]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14374 ASHTON",
            "estimated_cost": "$20377.82",
            "bld_permit_desc": "REMOVE/REPLACE (8) WINDOWS/NO STRUCTURAL CHANGES/U-FACTOR 0.27.9.25S/F ROOFING/ REMOVE/REPLACE SHINGLES. GAF DECK ARMOR UNDERLAY.",
            "x": -83.2185788928497,
            "y": 42.392597362668
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2185788928497, 42.392597362668]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14048 ROSEMONT",
            "estimated_cost": "$4500.00",
            "bld_permit_desc": "PERFORM & PROVIDE INTERIOR ALTERATIONS RELATED TO WATER PROOFING & INSTALLATION OF SUMP PUMP, SCOPE TO INCLUDE, SELECTIVE DEMOLITIONS, WATER PROOFING, SUMP PIT & PUMP & CONCRETE WORK.  SEPERATE PERMITS PER TRADE",
            "x": -83.2195736358525,
            "y": 42.388784345496
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2195736358525, 42.388784345496]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16595 ROSEMONT",
            "estimated_cost": "$6055.00",
            "bld_permit_desc": "INSTALL (16) VINYL REPPLACEMENT WINDOWS",
            "x": -83.2216555328856,
            "y": 42.4114561153667
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2216555328856, 42.4114561153667]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16587 ROSEMONT",
            "estimated_cost": "$33800.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR REPAIRS AS PER WORKLIST.",
            "x": -83.2216512730672,
            "y": 42.4113326023268
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2216512730672, 42.4113326023268]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16515 ROSEMONT",
            "estimated_cost": "$11674.91",
            "bld_permit_desc": "EXTERIOR & INTERIOR RENOVATIONS AS PER ATTACHED LIST.  OBTAIN THE REQUIRED TRADE PERMITS.  INSTALL SMOKE DETECTION DEVICES PER ORD. 239-H.",
            "x": -83.2216126418464,
            "y": 42.4103293363847
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2216126418464, 42.4103293363847]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15903 ROSEMONT",
            "estimated_cost": "$10687.60",
            "bld_permit_desc": "TEAR OFF AND RE-ROOF - INSTALL FASCIA BOARD, AND GUTTERS AND DOWNSPOUTS TO UPPER LEVEL",
            "x": -83.2215157097148,
            "y": 42.4079688628116
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2215157097148, 42.4079688628116]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17301 GREENVIEW",
            "estimated_cost": "$9028.75",
            "bld_permit_desc": "REMOVE/REPLACE HOUSE & GARAGE ROOF",
            "x": -83.2251848842783,
            "y": 42.4181598581216
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2251848842783, 42.4181598581216]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18411 AVON",
            "estimated_cost": "$9400.00",
            "bld_permit_desc": "REMOVE ALL ROOFING & INSTALL NEW ROOFING. INSTALL NEW GUTTERS & DOWNSPOUTS.",
            "x": -83.2266117206996,
            "y": 42.4250067022314
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2266117206996, 42.4250067022314]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14170 GLASTONBURY",
            "estimated_cost": "$7925.00",
            "bld_permit_desc": "INSTALL (14) VINYL REPLACEMENT WINDOWS.",
            "x": -83.224492242371,
            "y": 42.3899550364802
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.224492242371, 42.3899550364802]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14382 GLASTONBURY",
            "estimated_cost": "$7930.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE",
            "x": -83.2245811340956,
            "y": 42.3925652873065
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2245811340956, 42.3925652873065]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14400 GLASTONBURY",
            "estimated_cost": "$16050.00",
            "bld_permit_desc": "STRIP & RE-ROOF (HOUSE ONLY)",
            "x": -83.224588268205,
            "y": 42.3927846179243
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.224588268205, 42.3927846179243]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14624 GLASTONBURY",
            "estimated_cost": "$17467.00",
            "bld_permit_desc": "STRIP & REROOF HOUSE. 20.52 SQUARES",
            "x": -83.2246576083485,
            "y": 42.3955526136197
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2246576083485, 42.3955526136197]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15930 GLASTONBURY",
            "estimated_cost": "$17060.00",
            "bld_permit_desc": "BASEMENT WATERPROOFING, INCLUDING INSTALLING I-BEAMS, DRAINTILE & CONCRETE WORK AS PER WORKLIST.",
            "x": -83.2220676337902,
            "y": 42.4079101234919
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2220676337902, 42.4079101234919]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16166 GLASTONBURY",
            "estimated_cost": "$9136.00",
            "bld_permit_desc": "INSTALL (18) VINYL REPLACEMENT WINDOWS",
            "x": -83.2221407614253,
            "y": 42.4092906485841
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2221407614253, 42.4092906485841]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16540 GLASTONBURY",
            "estimated_cost": "$10812.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICH RES. BLD CODE.",
            "x": -83.2221864275263,
            "y": 42.4107033999602
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2221864275263, 42.4107033999602]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16779 GLASTONBURY",
            "estimated_cost": "$16701.00",
            "bld_permit_desc": "INTERIOR AND EXTERIOR RENOVATIONS TO AN EXISTING ONE FAMILY DWELLING AS INDICATED ON WORKLIST",
            "x": -83.2232592854807,
            "y": 42.4135079477005
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2232592854807, 42.4135079477005]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16745 GLASTONBURY",
            "estimated_cost": "$8400.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2222725893392,
            "y": 42.4128788808923
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2222725893392, 42.4128788808923]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15365 GLASTONBURY",
            "estimated_cost": "$10790.00",
            "bld_permit_desc": "REMOVE & REPLACE ROOF COVERING TO CODE ON HOUSE ONLY IN CONJUNCTION WITH HISTORIC DISTRICT COMMISSION CERTIFICATE OF APPROPRIATENESS # 13-209 AS PER WORKLIST.",
            "x": -83.22570624604,
            "y": 42.4023933271215
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.22570624604, 42.4023933271215]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14241 ARTESIAN",
            "estimated_cost": "$5945.00",
            "bld_permit_desc": "INSTALL 13 VINYL REPLACEMENT WINDOWS",
            "x": -83.2276807411471,
            "y": 42.3908531047948
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2276807411471, 42.3908531047948]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14128 WARWICK",
            "estimated_cost": "$3096.50",
            "bld_permit_desc": "TEAR-OFF AND RE-ROOF",
            "x": -83.2281135839786,
            "y": 42.3893246268169
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2281135839786, 42.3893246268169]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14312 WARWICK",
            "estimated_cost": "$45915.00",
            "bld_permit_desc": "INTERIOR AND EXTERIOR REPAIRS TO EXISTING 1.5 STORY SINGLE FAMILY DWELLING AS PER WORKLIST AND CODE",
            "x": -83.2281858922038,
            "y": 42.3915028657077
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2281858922038, 42.3915028657077]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14818 WARWICK",
            "estimated_cost": "$10950.00",
            "bld_permit_desc": "TEAR OFF & REFOOF HOUSE & GARAGE AND NEW GUTTERS / DOWNSPOUTS ON HOUSE AS INDICATED ON PLANS.  (HDC16-4541)",
            "x": -83.2283005088595,
            "y": 42.3962364000357
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2283005088595, 42.3962364000357]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15076 WARWICK",
            "estimated_cost": "$21000.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR RENOVATIONS TO AN EXISTING SINGLE FAMILY DWELLING PER (HDC16-4602) AS INDICATED.",
            "x": -83.2284089520526,
            "y": 42.3994958628045
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2284089520526, 42.3994958628045]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15366 WARWICK",
            "estimated_cost": "$1500.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENCE - INSTALL ADDITIONALFENCING AS PER ATTACHED PLANS, HISTORIC APPLICATION NUMBER 14-152 AND MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2285155763214,
            "y": 42.4023386136624
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2285155763214, 42.4023386136624]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16588 WARWICK",
            "estimated_cost": "$13636.00",
            "bld_permit_desc": "1-FAMILY DWELLING - ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQ'TS & MICHIGAN RESIDENTIAL BUILDING CODE.(HOUSE ONLY)",
            "x": -83.2285418773256,
            "y": 42.4112361437855
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2285418773256, 42.4112361437855]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14812 PIEDMONT",
            "estimated_cost": "$5800.00",
            "bld_permit_desc": "STRIP & RE-ROOF TO CODE A SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2296155031463,
            "y": 42.3961386207167
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2296155031463, 42.3961386207167]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13626 MINOCK",
            "estimated_cost": "$946.00",
            "bld_permit_desc": "REPLACEMENT GUTTERS FRONT & SIDE OF HOUSE,FRONT & BACK OF GARAGE",
            "x": -83.2328236308054,
            "y": 42.3858118523977
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2328236308054, 42.3858118523977]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15130 MINOCK",
            "estimated_cost": "$43250.00",
            "bld_permit_desc": "RESIDENTIAL REPAIRS AS PER ATTACHED WORK LIST.  INSTALL SMOKE DETECTORS PER ORD 239-H.",
            "x": -83.2334153878585,
            "y": 42.4000913019992
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2334153878585, 42.4000913019992]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15708 MINOCK",
            "estimated_cost": "$36500.00",
            "bld_permit_desc": "INTERIOR AND EXTERIOR RENOVATIONS TO AN EXISTING RESIDENTIAL DWELLING AS INDICATED",
            "x": -83.2335957321607,
            "y": 42.4045428598621
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2335957321607, 42.4045428598621]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16554 EDINBOROUGH",
            "estimated_cost": "$1709.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS AS PER WORKLIST & CODE. SUBJECT TO FIELD APPROVAL. INSTALL SMOKE DEVICES PER ORD 239-H.",
            "x": -83.2337566272348,
            "y": 42.410644770582
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2337566272348, 42.410644770582]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16704 EDINBOROUGH",
            "estimated_cost": "$9500.00",
            "bld_permit_desc": "REPLACING (19) WINDOWS",
            "x": -83.2338196790557,
            "y": 42.4117431342101
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2338196790557, 42.4117431342101]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16834 EDINBOROUGH",
            "estimated_cost": "$3400.00",
            "bld_permit_desc": "ENCAPSULATING A 15' X 18' CRAWL SPACE AT THE REAR OF AN EXISTING SINGLE FAMILY DWELLING WITH 120 MIL VAPOR BARRIER AS PER PLANS.",
            "x": -83.2339704265399,
            "y": 42.4139855200153
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2339704265399, 42.4139855200153]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19340 EDINBOROUGH",
            "estimated_cost": "$22180.00",
            "bld_permit_desc": "EXTERIOR RENOVATIONS TO AN EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2342941362591,
            "y": 42.4323823447556
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2342941362591, 42.4323823447556]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19469 EDINBOROUGH",
            "estimated_cost": "$4711.38",
            "bld_permit_desc": "TEAR OFF & RE-ROOF PER SIGNED CUSTOMER CONTRACT",
            "x": -83.2350275578384,
            "y": 42.4342848556198
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2350275578384, 42.4342848556198]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16815 EDINBOROUGH",
            "estimated_cost": "$5240.00",
            "bld_permit_desc": "REMOVE ROOF COVERING AND INSTALL A NEW ROOF SYSTEM AS PER CODE. INSTALL REQUIRED CARBON MONOXIDE ALARMS PER MRC 2009 SEC R315.2 ",
            "x": -83.2346888925613,
            "y": 42.4136954242015
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2346888925613, 42.4136954242015]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16715 EDINBOROUGH",
            "estimated_cost": "$12912.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY. (73 FT GUTTERS HOUSE ONLY).",
            "x": -83.234566393569,
            "y": 42.4118859306887
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.234566393569, 42.4118859306887]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19165 WESTMORELAND",
            "estimated_cost": "$1686.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS",
            "x": -83.2370564478611,
            "y": 42.430664125001
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2370564478611, 42.430664125001]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15124 EVERGREEN",
            "estimated_cost": "$19500.00",
            "bld_permit_desc": "1-FAMILY DWELLING - HOUSE AND GARAGE ROOF REPLACEMENT INCLUDING GUTTERS AND DOWNSPOUTS, REMOVE AND REPLACE (16) WINDOWS, AND INSTALL NEW 36\" HI WROUGHT IRON HANDRAIL ON STEPS @ ENTRY PER ATTACHED SCOPE OF WORK LIST DOCUMENTS.",
            "x": -83.2370136055205,
            "y": 42.3998996232452
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2370136055205, 42.3998996232452]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15734 EVERGREEN",
            "estimated_cost": "$7500.00",
            "bld_permit_desc": "PERFORM & PROVIDE EXTERIOR & INTERIOR RENOVATIONS & ALTERATIONS AS PER ATTACHED DOCUMENTS. MUST CONFORM TO 2015 MICH RES CODE. FENCING MUST CONFORM TO 2016 ZONING ORDINANCE.",
            "x": -83.237220384852,
            "y": 42.4050642881724
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.237220384852, 42.4050642881724]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17148 EVERGREEN",
            "estimated_cost": "$36604.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR RENOVATIONS AS INDICATED AS WELL AS REDUCTION IN OCCUPANCY FROM TWO FAMILY TO SINGLE FAMILY",
            "x": -83.2378441446698,
            "y": 42.4160438336347
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2378441446698, 42.4160438336347]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14185 CRESCENT DR",
            "estimated_cost": "$8500.00",
            "bld_permit_desc": "AKA 14417 CRESCENT DR. INTERIOR RENOVATIONS TO EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2385340942891,
            "y": 42.3915002216534
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2385340942891, 42.3915002216534]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14185 CRESCENT DR",
            "estimated_cost": "$8500.00",
            "bld_permit_desc": "AKA 14281 CRESCENT DR. INTERIOR RENOVATIONS TO EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2385340942891,
            "y": 42.3915002216534
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2385340942891, 42.3915002216534]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14185 CRESCENT DR",
            "estimated_cost": "$8500.00",
            "bld_permit_desc": "AKA 14291 CRESCENT DR. INTERIOR RENOVATIONS TO EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2385340942891,
            "y": 42.3915002216534
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2385340942891, 42.3915002216534]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15140 VAUGHAN",
            "estimated_cost": "$1935.00",
            "bld_permit_desc": "INSTALLING (6) VINYL REPLACEMENT WINDOWS AS PER ATTACHED WORKLIST. SUBJECT TO FIELD APPROVAL. INSTALL SMOKE DEVICES PER ORD 239-H.",
            "x": -83.2381604306493,
            "y": 42.4001248584549
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2381604306493, 42.4001248584549]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19901 VAUGHAN",
            "estimated_cost": "$1285.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS",
            "x": -83.2406971160321,
            "y": 42.4369226386489
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2406971160321, 42.4369226386489]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20100 PATTON",
            "estimated_cost": "$5820.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2449491394573,
            "y": 42.4398383095096
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2449491394573, 42.4398383095096]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20210 PATTON",
            "estimated_cost": "$1976.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS.",
            "x": -83.244970887524,
            "y": 42.4404797853722
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.244970887524, 42.4404797853722]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20520 PATTON",
            "estimated_cost": "$7000.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2450553802647,
            "y": 42.4423812885888
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2450553802647, 42.4423812885888]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19318 PIERSON",
            "estimated_cost": "$1173.00",
            "bld_permit_desc": "REPLACEMENT GUTTERS 7 DOWNSPOUTS.",
            "x": -83.2471038831385,
            "y": 42.4316263717264
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2471038831385, 42.4316263717264]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20070 PIERSON",
            "estimated_cost": "$5850.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2473392382384,
            "y": 42.4393325136287
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2473392382384, 42.4393325136287]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16566 BENTLER",
            "estimated_cost": "$8329.07",
            "bld_permit_desc": "INSTALL NEW KITCHEN CABINETS & COUNTERTOP",
            "x": -83.2519601478738,
            "y": 42.4104858806199
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2519601478738, 42.4104858806199]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17500 BENTLER",
            "estimated_cost": "$4638.00",
            "bld_permit_desc": "REPLACE FRIEZE BOARD ON ALL 4 SIDES. REPLACE SIDING ON ALL 4 SIDES.",
            "x": -83.2526475642996,
            "y": 42.4189976557726
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2526475642996, 42.4189976557726]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20035 GREYDALE",
            "estimated_cost": "$8975.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY",
            "x": -83.2577973797604,
            "y": 42.4385623586354
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2577973797604, 42.4385623586354]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12668 CHATHAM",
            "estimated_cost": "$6500.00",
            "bld_permit_desc": "REMOVE EXISTING SHINGLE, REPLACE ROTTEN SHEATHING, INSTALL ALUMINUM DRIP EDGE, INSTALL ICE GUARD, INSTALL 15 LB FELT, INSTALL ASPHALT SHINGLES, INSTALL VENTILATION AS PER CODE.",
            "x": -83.2625341693017,
            "y": 42.3799237813172
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2625341693017, 42.3799237813172]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12810 CHATHAM",
            "estimated_cost": "$1665.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS",
            "x": -83.2625258317532,
            "y": 42.3817886262397
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2625258317532, 42.3817886262397]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19185 BEAVERLAND",
            "estimated_cost": "$1100.00",
            "bld_permit_desc": "INSTALLING (3) REPLACEMENT WINDOWS AS PER ATTACHED WORKLIST. SUBJECT TO FIELD APPROVAL.",
            "x": -83.2657116029725,
            "y": 42.430453423417
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2657116029725, 42.430453423417]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14800 DALE",
            "estimated_cost": "$12000.00",
            "bld_permit_desc": "MODIFICATIONS TO EXISTING CELL TOWER AS INDICATED ON PLANS.(LEGAL ADDRESS-14800 DALE)",
            "x": -83.274938377424,
            "y": 42.3955678671492
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.274938377424, 42.3955678671492]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19524 WOODBINE",
            "estimated_cost": "$13952.00",
            "bld_permit_desc": "REPLACING (3) WINDOWS. SIDING & TRIM ON HOUSE ONLY. 55 FT GUTTERS ON HOUSE ONLY.",
            "x": -83.2786961007146,
            "y": 42.4348306491247
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2786961007146, 42.4348306491247]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18465 LENORE",
            "estimated_cost": "$1885.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS",
            "x": -83.2817648729688,
            "y": 42.4243753621938
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2817648729688, 42.4243753621938]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18517 FENTON",
            "estimated_cost": "$2170.00",
            "bld_permit_desc": "INSTALL FIVE (5) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2831283725043,
            "y": 42.4250278622476
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2831283725043, 42.4250278622476]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16658 WINSTON",
            "estimated_cost": "$11500.00",
            "bld_permit_desc": "INTERIOR WATER PROOFING & RENOATION PER WORK LIST. INSTALL REQUIRED SMOKE DETECTION DEVICES PER ORD 239-H.",
            "x": -83.2831334537836,
            "y": 42.411607859796
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2831334537836, 42.411607859796]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17674 WINSTON",
            "estimated_cost": "$4090.00",
            "bld_permit_desc": "INSTALL (11) VINYL REPLACEMENT WINDOWS",
            "x": -83.2834508724551,
            "y": 42.4202823632382
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2834508724551, 42.4202823632382]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16832 KENTFIELD",
            "estimated_cost": "$3150.00",
            "bld_permit_desc": "INSTALL (7) VINYL REPLACEMENT WINDOWS (0) DOORWALLS",
            "x": -83.2407215634273,
            "y": 42.4138121238337
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2407215634273, 42.4138121238337]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14240 W GRAND RIVER",
            "estimated_cost": "$350.00",
            "bld_permit_desc": "INSTALL BARRIER FREE ACCESS TO EXISTING USED AUTO SALES AS PER PLANS.",
            "x": -83.1846209059759,
            "y": 42.3873295311949
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1846209059759, 42.3873295311949]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20524 SCHOOLCRAFT",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "ADD (3) ANTENNAS ON AN EXISTING TOWER AS PER ATTACHED DOCUMENTS. SUBJECT TO CODE COMPLIANCE & INSPECTION.",
            "x": -83.2427383969479,
            "y": 42.3864003773182
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2427383969479, 42.3864003773182]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13234 MARK TWAIN",
            "estimated_cost": "$5980.00",
            "bld_permit_desc": "TEAR OFF & RE-ROOF PER SIGNED CONTRACT",
            "x": -83.1856472271503,
            "y": 42.3846991061852
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1856472271503, 42.3846991061852]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16639 SUSSEX",
            "estimated_cost": "$1967.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS",
            "x": -83.195820562294,
            "y": 42.4131801113131
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.195820562294, 42.4131801113131]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16756 BILTMORE",
            "estimated_cost": "$15184.50",
            "bld_permit_desc": "REVISION TO BLD2015-07543 TO REFLECT INCREASE IN COST OF CONSTRUCTION AS PER DOCUMENT",
            "x": -83.2105951958669,
            "y": 42.41333060434
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2105951958669, 42.41333060434]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15871 BILTMORE",
            "estimated_cost": "$13000.00",
            "bld_permit_desc": "EXTERIOR & INTERIOR RENOVATIONS AS PER ATTACHED LIST",
            "x": -83.2109382321371,
            "y": 42.4077576053456
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2109382321371, 42.4077576053456]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14190 ABINGTON AVE",
            "estimated_cost": "$11300.00",
            "bld_permit_desc": "REMOVE AND REPLACE ROOF SYSTEM ON SINGLE FAMILY DWELLING.  INSTALL SMOKE AND CARBON MONOXIDE DEVICES PER CODE",
            "x": -83.2116761382627,
            "y": 42.3905048407235
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2116761382627, 42.3905048407235]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14140 RUTLAND",
            "estimated_cost": "$27400.00",
            "bld_permit_desc": "(SINGLE FAMILY) REMOVE & REPLACE ROOF SHINGLES, GUTTERS & DOWNSPOTS, & WROUGHT IRON RAILINGS, INSTALL PLUMBING & MECHANICAL. REMOVE ABESTOS TILE FROM BASEMENT;",
            "x": -83.2129791415061,
            "y": 42.3898258390924
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2129791415061, 42.3898258390924]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14175 ARCHDALE",
            "estimated_cost": "$57000.00",
            "bld_permit_desc": "SELECT INTERIOR DEMOLITION OF EXISTING WALLS, AND NEW PARTITIONS, DOORS, ROMAN TUB, AND LINEN CABINET IN A 750 SQ FT CONDOMINIUM UNIT AS PER PLANS.",
            "x": -83.216645374544,
            "y": 42.3902298713527
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.216645374544, 42.3902298713527]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14215 GREENVIEW",
            "estimated_cost": "$5280.00",
            "bld_permit_desc": "INSTALL SAMESIZE SIDE & FRONT ENTRY DOORS.",
            "x": -83.2240532394116,
            "y": 42.3906241047517
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2240532394116, 42.3906241047517]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15837 AVON",
            "estimated_cost": "$3325.00",
            "bld_permit_desc": "REPLACEMENT OF THREE (3) WINDOWS.",
            "x": -83.2252089531723,
            "y": 42.4071874770241
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2252089531723, 42.4071874770241]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20299 GLASTONBURY",
            "estimated_cost": "$499.00",
            "bld_permit_desc": "REPLACEMENT WINDOWS 1-BEDROOM",
            "x": -83.2239530261714,
            "y": 42.4421436831031
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2239530261714, 42.4421436831031]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "17587 GRANDVILLE",
            "estimated_cost": "$1897.50",
            "bld_permit_desc": "RE-ROOF GARAGE & REPLACE SOFFITS",
            "x": -83.2322756143128,
            "y": 42.4206168925909
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2322756143128, 42.4206168925909]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12800 FIELDING",
            "estimated_cost": "$5400.00",
            "bld_permit_desc": "REPLACING (11) WINDOWS",
            "x": -83.2416796354856,
            "y": 42.3816308274021
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2416796354856, 42.3816308274021]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19153 FIELDING",
            "estimated_cost": "$2000.00",
            "bld_permit_desc": "REMOVE EXISTING ROOF COVERING ON EXISTING GARAGE (APPROX 12' X 20') & INSTALL A NEW ROOF SYSTEM PER CODE",
            "x": -83.2445173648647,
            "y": 42.4303339340565
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2445173648647, 42.4303339340565]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18527 BRAILE",
            "estimated_cost": "$6316.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE ONLY",
            "x": -83.2464915333726,
            "y": 42.4260855011317
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2464915333726, 42.4260855011317]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20065 SALEM",
            "estimated_cost": "$821.00",
            "bld_permit_desc": "INSTALL (1) VINYL REPLACEMENT WINDOWS",
            "x": -83.2867869703075,
            "y": 42.4387282189613
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2867869703075, 42.4387282189613]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19946 HEYDEN",
            "estimated_cost": "$6000.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2412368812357,
            "y": 42.4378172862137
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2412368812357, 42.4378172862137]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16855 STRATHMOOR",
            "estimated_cost": "$2828.00",
            "bld_permit_desc": "INSTALL (7) VINYL REPLACEMENT WINDOWS",
            "x": -83.1886799024351,
            "y": 42.4151168598324
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1886799024351, 42.4151168598324]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16747 HEYDEN",
            "estimated_cost": "$7250.00",
            "bld_permit_desc": "TEAR OFF & RE-ROOF HOUSE & GARAGE AS INDICATED ON WORKLIST. ",
            "x": -83.2402251294646,
            "y": 42.412520113308
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2402251294646, 42.412520113308]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14897 KENTFIELD",
            "estimated_cost": "$1966.00",
            "bld_permit_desc": "INSTALL (5) VINYL REPLACEMENT WINDOWS",
            "x": -83.2406789267904,
            "y": 42.3971373913217
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2406789267904, 42.3971373913217]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16800 KENTFIELD",
            "estimated_cost": "$7300.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL REPAIRS AS PER ATTACHED SCOPE OF WORK LIST DOCUMENTS & MICHIGAN RESIDENTIAL BLDG CODE.",
            "x": -83.2406999965443,
            "y": 42.41342987879
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2406999965443, 42.41342987879]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20217 BLACKSTONE",
            "estimated_cost": "$7817.00",
            "bld_permit_desc": "REPLACING (12) WINDOWS",
            "x": -83.2517942890769,
            "y": 42.4403340952638
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2517942890769, 42.4403340952638]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18560 APPLETON",
            "estimated_cost": "$11430.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR REPAIRS",
            "x": -83.2734388732584,
            "y": 42.4253583095919
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2734388732584, 42.4253583095919]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16130 WOODBINE",
            "estimated_cost": "$3600.00",
            "bld_permit_desc": "REMOVE AND REPLACE FLAT ROOF ONLY AND INSTALL VINYL SIDING ON FRONT GABLE ON AN EXISTING CHURCH AS PER PLANS.",
            "x": -83.2776524315214,
            "y": 42.4078056062536
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2776524315214, 42.4078056062536]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22591 FULLERTON",
            "estimated_cost": "$4605.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.263987343147,
            "y": 42.379149127751
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.263987343147, 42.379149127751]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18551 W GRAND RIVER",
            "estimated_cost": "$74000.00",
            "bld_permit_desc": "INSTALLTION OF PORCELAIN FLOOR TILE OVER EXISTING VINYL FLOORING THROUGHOUT AS PER SCOPE OF WORK.",
            "x": -83.2239442665565,
            "y": 42.4024766544502
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2239442665565, 42.4024766544502]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "21211 W GRAND RIVER",
            "estimated_cost": "$40000.00",
            "bld_permit_desc": "(A.K.A. 21200 W. GRAND BLVD - SUITE ADDRESS) ADDITIONAL INTERIOR TENANT BUILDOUT FOR 1 STORY, RETAIL STORE (DOLLAR TREE). IN CONJUNCTION W/ BLD2015-04177 & BLD2015-08761.",
            "x": -83.2501972500748,
            "y": 42.4133241260735
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2501972500748, 42.4133241260735]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "21431 W GRAND RIVER",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "(A.K.A. 21431 W. GRAND RIVER - LEGAL ADDRESS) PERFORM AND PROVIDE \"WHITE BOX\" TENANT BUILD OUT OF SUTIE 200 AS PER PROVIDED DOCUMENTS. NO LEGAL LAND USE ESTABLISHED AT THIS TIME.",
            "x": -83.2524102114526,
            "y": 42.4128179566985
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2524102114526, 42.4128179566985]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "21431 W GRAND RIVER",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "AKA 21427 W. GRAND RIVER SUITE 240. PROVIDE WHITE-BOX SPACE AND ADA RESTROOM IN A 1,192 SQ FT TENANT SPACE AS PER PLANS. NO OCCUPANCY ESTABLISHED UNDER THIS PERMIT.",
            "x": -83.2524102114526,
            "y": 42.4128179566985
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2524102114526, 42.4128179566985]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "21733 W GRAND RIVER",
            "estimated_cost": "$10000.00",
            "bld_permit_desc": "REVISION TO BLD2013-03074 TO SHOW ACTUAL RENOVATIION OF AN EXISTING CARRY-OUT RESTAURANT AS PER ATTACHED PLAN.",
            "x": -83.2571749329124,
            "y": 42.4160486815875
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2571749329124, 42.4160486815875]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "24133 W GRAND RIVER",
            "estimated_cost": "$0.00",
            "bld_permit_desc": "ADDITON OF SDM SALES TO AN EXISTING ONE (1) STORY (MAS) 13,905 SF BUILDING AS PER CPC",
            "x": -83.2781832467968,
            "y": 42.4242705634353
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2781832467968, 42.4242705634353]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "23550 W GRAND RIVER",
            "estimated_cost": "$13500.00",
            "bld_permit_desc": "REPLACE ROOF AS PER WORKLIST.",
            "x": -83.2718735457146,
            "y": 42.4227082076832
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2718735457146, 42.4227082076832]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16196 W GRAND RIVER",
            "estimated_cost": "$20000.00",
            "bld_permit_desc": "INSTALL ADDITIONAL CELLULAR ANTENNA & RELATED EQUIPMENT AS PER ATTACHED PLAN.",
            "x": -83.2057128345873,
            "y": 42.3967698117812
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2057128345873, 42.3967698117812]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12727 WESTWOOD",
            "estimated_cost": "$4000.00",
            "bld_permit_desc": "INSTALL (7) VINYL REPLACEMENT WINDOWS",
            "x": -83.2321059049567,
            "y": 42.3807801109787
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2321059049567, 42.3807801109787]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16801 SCHOOLCRAFT",
            "estimated_cost": "$13650.00",
            "bld_permit_desc": "FIRE ALARM SYSTEM UPGRADE FOR CHILD CARE CENTER LOCATED IN CHURCH AS PER PLANS. SEPERATE PERMITS REQUIRED FOR TRADES. SUBJECT TO FIELD APPROVAL.",
            "x": -83.2119436256641,
            "y": 42.3855986248893
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2119436256641, 42.3855986248893]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20531 SCHOOLCRAFT",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "REMOVE & REPLACE THREE (3) COMMUNICATION ANTENNAS ON AN EXISTING TELECOM TOWER (ON LEASED LAND) AS PER PROVIDED PLAN.",
            "x": -83.2427883208277,
            "y": 42.3858411207148
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2427883208277, 42.3858411207148]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14000 TELEGRAPH",
            "estimated_cost": "$7800.00",
            "bld_permit_desc": "(AKA 14110 TELEGRAPH) INTERIOR RENOVATIONS TO EXISTING RETAIL STORE (PHARMACY) AS PER PLANS. ",
            "x": -83.27487137207,
            "y": 42.3868646345105
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.27487137207, 42.3868646345105]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22476 BARBARA",
            "estimated_cost": "$1723.00",
            "bld_permit_desc": "INSTALL 2 VINYL REPLACEMENT WINDOWS",
            "x": -83.2628978770142,
            "y": 42.3875272498918
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2628978770142, 42.3875272498918]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22476 BARBARA",
            "estimated_cost": "$16402.00",
            "bld_permit_desc": "STRIP & RE-ROOF & GUTTER REPLACEMENT (HOUSE ONLY).",
            "x": -83.2628978770142,
            "y": 42.3875272498918
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2628978770142, 42.3875272498918]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22748 N KANE",
            "estimated_cost": "$1839.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS",
            "x": -83.2629097762511,
            "y": 42.3911442714042
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2629097762511, 42.3911442714042]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22480 ACACIA ST",
            "estimated_cost": "$4988.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2627631598529,
            "y": 42.3909029231719
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2627631598529, 42.3909029231719]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19611 LYNDON",
            "estimated_cost": "$4955.00",
            "bld_permit_desc": "COMPLETE TEAR OFF & REPLACEMENT OF SHINGLES. REPLACING 40 PLANKS.",
            "x": -83.2350723899652,
            "y": 42.3932413658802
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2350723899652, 42.3932413658802]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22312 LYNDON",
            "estimated_cost": "$2000.00",
            "bld_permit_desc": "REMOVE/REPLACE ENTIRE ROOFING SYSTEM ON AN EXISITNG FAMILY DWELLING. MUST CONFORM TO 2009 MI RES CODE.",
            "x": -83.2606144226189,
            "y": 42.3932981128848
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2606144226189, 42.3932981128848]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18555 LANCASHIRE",
            "estimated_cost": "$19402.87",
            "bld_permit_desc": "TEAR OFF & RE-ROOF",
            "x": -83.2238417780058,
            "y": 42.403681886387
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2238417780058, 42.403681886387]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18818 LANCASHIRE",
            "estimated_cost": "$4635.00",
            "bld_permit_desc": "REMOVE EXISTING FRONT PORCH & WALK & REPLACE TUCKPOINT EXISTING BRICKS (EXTERIOR ONLY). INSTALL SMOKE DETECTORS PER ORD 239-H. SUBJECT TO FIELD INSPECTION.",
            "x": -83.2261299216198,
            "y": 42.405149945647
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2261299216198, 42.405149945647]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18620 LANCASHIRE",
            "estimated_cost": "$12119.00",
            "bld_permit_desc": "REMOVE & REPLACE ROOF COVERING & VENTS TO CODE ON AN EXISTING SINGLE FAMILY DWELLING AS PER WORKLIST.",
            "x": -83.2246907893531,
            "y": 42.4046017725516
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2246907893531, 42.4046017725516]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18530 LANCASHIRE",
            "estimated_cost": "$19000.00",
            "bld_permit_desc": "INTERIOR/EXTERIOR RENOVATIONS TO AN EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2230681223362,
            "y": 42.4040255712362
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2230681223362, 42.4040255712362]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18811 GAINSBOROUGH",
            "estimated_cost": "$3200.00",
            "bld_permit_desc": "INSTALL ONE LAYER OF SHINGLES AS PER ATTACHED CONTRACT. INSTALL SMOKE DETECTORS PER ORD 239-H.",
            "x": -83.2262792129343,
            "y": 42.4056074953284
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2262792129343, 42.4056074953284]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19125 GAINSBOROUGH",
            "estimated_cost": "$12229.00",
            "bld_permit_desc": "INSTALL (22) VINYL REPLACEMENT WINDOWS",
            "x": -83.2290203631864,
            "y": 42.4066708174966
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2290203631864, 42.4066708174966]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19195 GAINSBOROUGH",
            "estimated_cost": "$8800.00",
            "bld_permit_desc": "REPLACING (12) WINDOWS",
            "x": -83.230150565268,
            "y": 42.4071688233931
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.230150565268, 42.4071688233931]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19205 GAINSBOROUGH",
            "estimated_cost": "$5492.00",
            "bld_permit_desc": "REPLACING (8) WINDOWS",
            "x": -83.2303099319633,
            "y": 42.4072386194889
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2303099319633, 42.4072386194889]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18671 BRETTON DR",
            "estimated_cost": "$6000.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BLDG CODE. ",
            "x": -83.2241456078576,
            "y": 42.4056889127176
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2241456078576, 42.4056889127176]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18921 BRETTON DR",
            "estimated_cost": "$3241.00",
            "bld_permit_desc": "REPLACEMENT GUTTERS",
            "x": -83.2275875325798,
            "y": 42.4071293874876
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2275875325798, 42.4071293874876]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18890 BRETTON DR",
            "estimated_cost": "$18650.00",
            "bld_permit_desc": "INSTALL (26) VINYL REPLACEMENT WINDOWS",
            "x": -83.2265971389599,
            "y": 42.4074680999194
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2265971389599, 42.4074680999194]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18450 SCARSDALE",
            "estimated_cost": "$299000.00",
            "bld_permit_desc": "AKA 18660 BRETTON DRIVE-CONSTRUCT & ERECT A (1) STY,2400 SF ADDTITION TO AN EXISTING COMMUNITY CENTER. WORK TO INC:FOUNDATIONS,FOOTINGS,MASONRY,SELECT DEMO,ROUGH/FINISH CARPENTRY,ARCH FINISHES",
            "x": -83.2236140997215,
            "y": 42.4075963732004
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2236140997215, 42.4075963732004]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18450 SCARSDALE",
            "estimated_cost": "$0.00",
            "bld_permit_desc": "AKA 18660 BRETTON DR REVISION TO BLD2015-03191 TO REFLECT CHANGE IN ELECTRICAL SYSTEM ONLY FROM 1,200 AMP SERVICE TO 1,800 AMP SERVICE AS PER PLANS.",
            "x": -83.2236140997215,
            "y": 42.4075963732004
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2236140997215, 42.4075963732004]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15850 STRATHMOOR",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "REPLACE 3 EXISTING ANTENNAS ONLY. NO GROUND WORK AS PER ATTACHED PLANS.",
            "x": -83.1868837440931,
            "y": 42.4081829493785
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1868837440931, 42.4081829493785]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "24348 PURITAN",
            "estimated_cost": "$3497.00",
            "bld_permit_desc": "REMOVE EXISTING ROOF COVERING AND INSTALL A NEW ROOF SYSTEM AS PER ATTACHED CONTRACT.  INSTALL SMOKE DETECTORS PER ORD 239-H.",
            "x": -83.2803823536032,
            "y": 42.4074113801377
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2803823536032, 42.4074113801377]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19000 PURITAN",
            "estimated_cost": "$4440.00",
            "bld_permit_desc": "INTERIOR AND EXTGERIOR REPAIRS AS INDICATED ON WORKLIST",
            "x": -83.2277428144121,
            "y": 42.4083984696442
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2277428144121, 42.4083984696442]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22171 ULSTER",
            "estimated_cost": "$4296.00",
            "bld_permit_desc": "REPLACING (6) WINDOWS.",
            "x": -83.2605978808741,
            "y": 42.4099308639583
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2605978808741, 42.4099308639583]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14611 W MCNICHOLS",
            "estimated_cost": "$350000.00",
            "bld_permit_desc": "CHANGE OF USE FROM OFFICE AND DAYCARE CENTER TO ESTABLISH SHELL/WHITE BOX FOR RETAIL STORE (DOLLAR GENERAL) AS PER PLANS.",
            "x": -83.1901321936489,
            "y": 42.4161575944539
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1901321936489, 42.4161575944539]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15801 W MCNICHOLS",
            "estimated_cost": "$25000.00",
            "bld_permit_desc": "REVISION TO BLD2014-04073 TO SUBMIT CONSTRUCTION DOCUMENTS (PLANS) FOR CHANGES TO STAIRWELL AND CORRIDOR FIRE RATING AND INTERIOR RENOVATIONS AT BIO-HAZARD AND OFFICE ARE AS PER PLANS.",
            "x": -83.2022883981539,
            "y": 42.4156188602807
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2022883981539, 42.4156188602807]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15801 W MCNICHOLS",
            "estimated_cost": "$25000.00",
            "bld_permit_desc": "INTERIOR RENOVATIONS OF EXISTING MEDICAL CLINIC AS PER WORKLIST.",
            "x": -83.2022883981539,
            "y": 42.4156188602807
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2022883981539, 42.4156188602807]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18315 W MCNICHOLS",
            "estimated_cost": "$4400.00",
            "bld_permit_desc": "INSTALLATION OF THREE (3) COMMERCIAL CLASS WINDOWS & ONE (1) SINGLE DOOR INCLUDING HARDWARE AS PER ATTACHED CONTRACT.",
            "x": -83.2218038992019,
            "y": 42.4152078524803
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2218038992019, 42.4152078524803]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "23891 W MCNICHOLS",
            "estimated_cost": "$37295.00",
            "bld_permit_desc": "PERFORM & PROVIDE REPAIRS TO EXTING FUELING CANOPY STRUCTURES AS PER PROVIDE DOCUMENTS.",
            "x": -83.2766133375094,
            "y": 42.4142121071828
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2766133375094, 42.4142121071828]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19750 W MCNICHOLS",
            "estimated_cost": "$54000.00",
            "bld_permit_desc": "REMOVE & DISPOSE OF EXISTING CONCRETE PORCH SLAB. FURNISH & INSTALL NEW PORCH. REPLACE CONCRETE PORCH SLAB. GUARD RAILS, NEW CONCRETE STEPS. SUBJECT TO FIELD APPROVAL. SEPERATE PERMITS PER TRADE.",
            "x": -83.2366083877015,
            "y": 42.4155013617029
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2366083877015, 42.4155013617029]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22027 ROXFORD",
            "estimated_cost": "$11290.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT ER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2588319961534,
            "y": 42.4242601583999
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2588319961534, 42.4242601583999]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22136 ROXFORD",
            "estimated_cost": "$1725.00",
            "bld_permit_desc": "GUTTERS REPLACEMENT",
            "x": -83.2607013752337,
            "y": 42.4247739348996
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2607013752337, 42.4247739348996]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18915 MARGARETA",
            "estimated_cost": "$28301.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR RENOVATIONS TO AN EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2277803941939,
            "y": 42.426384369737
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2277803941939, 42.426384369737]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19721 W SEVEN MILE",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "EXPAND EXISTING STANDARD RESTAURANT INTO ADJOINING STRCTURE AS PER PLANS.",
            "x": -83.2372319078633,
            "y": 42.4293281085507
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2372319078633, 42.4293281085507]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20823 W SEVEN MILE",
            "estimated_cost": "$25000.00",
            "bld_permit_desc": "INSTALLING BRICK VENEER AND ASSOCIATED FOUNDATIONS ON AN EXISTING 2,375 SQ FT CAR WASH AS PER PLANS.",
            "x": -83.2478553100397,
            "y": 42.4290436117801
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2478553100397, 42.4290436117801]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22900 W SEVEN MILE",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "REPLACE (3) EXISTING ANTENNAS ON AN EXISTING CELL TOWER PER ATTACHED PLANS. SUBJECT TO CODE COMPLIANCE AND INSPECTION.",
            "x": -83.2685494294347,
            "y": 42.4296500829451
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2685494294347, 42.4296500829451]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "21700 W SEVEN MILE",
            "estimated_cost": "$5000.00",
            "bld_permit_desc": "ESTABLISH A MEDICAL OFFICE IN A TENANT OF AN EXISTING STRIP MALL AS PER PLAN.",
            "x": -83.2587812116196,
            "y": 42.4294328423309
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2587812116196, 42.4294328423309]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19101 EVERGREEN",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "INSTALL (1) GROWTH CABINET IN EXIST'G SPRINT ROOFTOP LEASE SPACE, BATTERIES IN NEW & EXIST'G CABINETS (3) RRU'S & ANTENNAS ON EXIST'G BLDG & RELATED/CABLES PER PLANS. ",
            "x": -83.2396265838616,
            "y": 42.4303635118575
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2396265838616, 42.4303635118575]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18824 W SEVEN MILE",
            "estimated_cost": "$6500.00",
            "bld_permit_desc": "REMOVE AND REPLACE SIX (6) ANTENNAS AND ASSOCIATED LOW VOLTAGE WIRING ON AN EXISTING MONOPOLE TOWER. AKA 18800 W. SEVEN MILE.",
            "x": -83.2269728496686,
            "y": 42.4301773712576
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2269728496686, 42.4301773712576]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18240 W SEVEN MILE",
            "estimated_cost": "$150.00",
            "bld_permit_desc": "ESTABLISH A BEAUTY SALON IN AN EXISTING STRUCTURE AS PER PLAN",
            "x": -83.2213463701659,
            "y": 42.4302378593745
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2213463701659, 42.4302378593745]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "24265 FRISBEE",
            "estimated_cost": "$20182.00",
            "bld_permit_desc": "REMOVE/REPLACE DRIVEWAY UP 2 SIDE DOOR/APPROACH & THE PUBLIC WALK/ROOF/GUTTERS & DOWNSPOUTS/METAL CLAD PERHUND DOOR. REPLACE MISSING CONDENSER/PAINT FRONT DOOR JAM & WALL CHUTE ONLY",
            "x": -83.2803106302301,
            "y": 42.4348739908343
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2803106302301, 42.4348739908343]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20703 PEMBROKE",
            "estimated_cost": "$56000.00",
            "bld_permit_desc": "PERFORM & PROVIDE INTERIOR RENOVATIONS OF EXISTING 2ND FLOOR GROUP BATHROOM AREA. SCOPE OF WORK TO INCLUDE SELECTIVE DEMOLITION, ROUGH & FINSH CARPENTRY, ARCHITECTURAL FINISHES, MECHANICAL, ELECTRICAL & PLUMBING SYSTEMS.",
            "x": -83.2470443525226,
            "y": 42.4356844194035
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2470443525226, 42.4356844194035]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "21601 PEMBROKE",
            "estimated_cost": "$2440.00",
            "bld_permit_desc": "GENERAL REPAIRS TO EXISTING SINGLE FAMILY DWELLING AS PER PLANS.",
            "x": -83.2563248709341,
            "y": 42.4360958761114
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2563248709341, 42.4360958761114]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "24231 PEMBROKE",
            "estimated_cost": "$6142.00",
            "bld_permit_desc": "REPLACING (9) WINDOWS",
            "x": -83.2796464437586,
            "y": 42.4358332514742
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2796464437586, 42.4358332514742]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22944 PEMBROKE",
            "estimated_cost": "$1300.00",
            "bld_permit_desc": "INSTALL (0) VINYL REPLACEMENT WINDOWS (1) DOORWALLS",
            "x": -83.2691979174797,
            "y": 42.4364710341033
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2691979174797, 42.4364710341033]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22584 PEMBROKE",
            "estimated_cost": "$6090.00",
            "bld_permit_desc": "INSTALL (11) VINYL REPLACEMENT WINDOWS",
            "x": -83.2661198984314,
            "y": 42.4365265904598
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2661198984314, 42.4365265904598]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "19900 EVERGREEN",
            "estimated_cost": "$431000.00",
            "bld_permit_desc": "REMOVE & REPLACE EXISTING BOILER FOR CHURCH & RECTORY. REMOVE TWO (2) HEATING & VENTILATION UNITS & INSTALL NEW AIR HANDLING UNITS W/DIRECT EXPANSION  (DX) COOLING & UPGRADE ELECTRICAL SERVICE AS PER PLANS.",
            "x": -83.2378778855026,
            "y": 42.4376438578339
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2378778855026, 42.4376438578339]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22925 LEEWIN",
            "estimated_cost": "$1919.00",
            "bld_permit_desc": "BLOWN IN ATTIC INSULATION R-38",
            "x": -83.2688299282953,
            "y": 42.4368134573411
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2688299282953, 42.4368134573411]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22925 LEEWIN",
            "estimated_cost": "$7143.00",
            "bld_permit_desc": "COMPLETE TEAR OFF & RESHINGLE. REPLACE A FEW OSB BOARDS",
            "x": -83.2688299282953,
            "y": 42.4368134573411
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2688299282953, 42.4368134573411]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "24328 LEEWIN",
            "estimated_cost": "$5996.00",
            "bld_permit_desc": "EXTERIOR RENOVATIONS,WINDOW & DOOR REPLACEMENT ON EXISTING RESIDENTIAL DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.282076027743,
            "y": 42.4372549715421
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.282076027743, 42.4372549715421]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22480 LEEWIN",
            "estimated_cost": "$2150.00",
            "bld_permit_desc": "CONSTRUCTION OF HANDICAP RAMP IN FRONT YARD AS PER PLANS.",
            "x": -83.2649363202275,
            "y": 42.4373913244777
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2649363202275, 42.4373913244777]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "24247 FARGO",
            "estimated_cost": "$2571.00",
            "bld_permit_desc": "REPLACEMENT WINDOWS 2 BED, 1 LIVING ROOM",
            "x": -83.280631807339,
            "y": 42.4375196419505
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.280631807339, 42.4375196419505]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22991 NORFOLK",
            "estimated_cost": "$1100.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS (0) DOORWALLS",
            "x": -83.2701274882276,
            "y": 42.4399468707457
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2701274882276, 42.4399468707457]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "24267 NORFOLK",
            "estimated_cost": "$3875.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2812839014053,
            "y": 42.4392314224038
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2812839014053, 42.4392314224038]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18821 HESSEL",
            "estimated_cost": "$1318.00",
            "bld_permit_desc": "ATTIC FLOOR INSULATION (R-19)",
            "x": -83.227625341953,
            "y": 42.4422310930924
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.227625341953, 42.4422310930924]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "18821 HESSEL",
            "estimated_cost": "$1800.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS",
            "x": -83.227625341953,
            "y": 42.4422310930924
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.227625341953, 42.4422310930924]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20811 W EIGHT MILE",
            "estimated_cost": "$12000.00",
            "bld_permit_desc": "FIRE ALARM SYSTEM ONLY INSTALLATION OF FIRE ALARM SYSTEM IN RETAIL BUILDING AS INDICATED ON PLANS.",
            "x": -83.2484416243166,
            "y": 42.4432188216519
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2484416243166, 42.4432188216519]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "20811 W EIGHT MILE",
            "estimated_cost": "$165000.00",
            "bld_permit_desc": "PARTIAL BLD DEMO OF 14,000 S/F OF AN EXIS'G 29,340 S/F RETAIL BLD & RENOVATIONS (EXTERIOR & INTERIOR) & SITE IMPROVEMENTS AS PER BZA GRANT #55-14 AS REGISTERED W/WCRD AS PER PLANS.",
            "x": -83.2484416243166,
            "y": 42.4432188216519
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2484416243166, 42.4432188216519]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "21331 W EIGHT MILE",
            "estimated_cost": "$12000.00",
            "bld_permit_desc": "PERFORM & PROVIDE REPAIR & RESTORATION WORK TO AN EXISTING MAJOR AUTO REPAIR. SCOPE OF WORK TO INCLUDE: MASONRY, ROUGH FINISHES, CARPENTRY & ARCHITECTUAL FINSHES & PLUMBING.",
            "x": -83.253413346624,
            "y": 42.4430201089155
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.253413346624, 42.4430201089155]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22021 W EIGHT MILE",
            "estimated_cost": "$19500.00",
            "bld_permit_desc": "PERFORM & PROVIDE INTERIOR ALTERATIONS TO EXISTING RESTROOMS TO MAKE THEM ADA COMPLIANT AS PER PROVIDED DOCUMENTS.",
            "x": -83.2600095518941,
            "y": 42.4426473689346
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2600095518941, 42.4426473689346]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "22021 W EIGHT MILE",
            "estimated_cost": "$245000.00",
            "bld_permit_desc": "EXTERIOR RENOVATIONS TO EXISTING RESTAURANT AS INDICATED ON PLANS & SPEC SHEETS",
            "x": -83.2600095518941,
            "y": 42.4426473689346
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2600095518941, 42.4426473689346]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "23001 W EIGHT MILE",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "AKA 23201 W. EIGHT MILE. ADDING THREE (3) ANTENNAS ON AN EXISTING MONOPOLE CELL TOWER AS PER PLANS.",
            "x": -83.2716084293814,
            "y": 42.4425173959931
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2716084293814, 42.4425173959931]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "24331 W EIGHT MILE",
            "estimated_cost": "$100000.00",
            "bld_permit_desc": "REVISE PERMIT#BLD2015--01784 TO SHOW THE SCOPE OF WORK TO REFLECT CHANGES OF DUCTWORK IN FIRST FLOOR CLASS / CONFERENCE ROOM AS PER ATTACHED PLAN.",
            "x": -83.2821490450503,
            "y": 42.4419526499153
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2821490450503, 42.4419526499153]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16813 ARDMORE",
            "estimated_cost": "$6468.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.1853456068567,
            "y": 42.4146191149231
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1853456068567, 42.4146191149231]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14803 ARDMORE",
            "estimated_cost": "$12300.00",
            "bld_permit_desc": "EXTERIOR REPAIRS REMOVE, REPLACE PORCH DECK STAIRS AND RAILINGS FOR STAIRS AND PORCH AWING GUTTERS AND DOWNSPOUTS WINDOW REPAIRS AND FLOOR TILE AS PER WORKLIST",
            "x": -83.1845924336468,
            "y": 42.3972315804827
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1845924336468, 42.3972315804827]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14427 ARDMORE",
            "estimated_cost": "$4500.00",
            "bld_permit_desc": "REMOVE & REPLACE ROOFING PER CODE AS INDICATED ON WORKSHEET",
            "x": -83.1844814101497,
            "y": 42.394278365994
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1844814101497, 42.394278365994]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13901 ARDMORE",
            "estimated_cost": "$2336.00",
            "bld_permit_desc": "INSTALL (5) VINYL REPLACEMENT WINDOWS",
            "x": -83.1842572214739,
            "y": 42.3879509632293
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1842572214739, 42.3879509632293]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14505 FREELAND",
            "estimated_cost": "$4550.00",
            "bld_permit_desc": "FIRE REPAIR, INTERIOR ONLY AS PER ATTACHED CONTRACT.  INSTALL SMOKE DETECTORS PER ORD 239-H",
            "x": -83.1854851920052,
            "y": 42.394771601904
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1854851920052, 42.394771601904]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12787 FREELAND",
            "estimated_cost": "$11063.57",
            "bld_permit_desc": "INSTALL (11) SAME SIZE VINYL REPLACEMENT WINDOWS",
            "x": -83.1851586662218,
            "y": 42.3828178868909
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1851586662218, 42.3828178868909]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13234 MARK TWAIN",
            "estimated_cost": "$5980.00",
            "bld_permit_desc": "TEAR-OFF & RE-ROOF PER SIGNED CONTRACT.",
            "x": -83.1856472271503,
            "y": 42.3846991061852
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1856472271503, 42.3846991061852]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14424 MARK TWAIN",
            "estimated_cost": "$1824.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS.",
            "x": -83.1859029005734,
            "y": 42.394238860935
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1859029005734, 42.394238860935]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15400 MARK TWAIN",
            "estimated_cost": "$6850.00",
            "bld_permit_desc": "CONSTRUCT WHEELCHAIR RAMP AS PER PLAN.",
            "x": -83.1863140707647,
            "y": 42.4038188518407
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1863140707647, 42.4038188518407]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16199 MARK TWAIN",
            "estimated_cost": "$17270.00",
            "bld_permit_desc": "GENERAL REPAIRS (12 SQ ROOF REPAIR INSTALL GUTTERS, SIDING, WINDOWS, DOORS PAINT INTERIOR/EXTERIOR REPAIR DRYWALL, CEILING).",
            "x": -83.187322382504,
            "y": 42.4105673684193
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.187322382504, 42.4105673684193]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16588 STRATHMOOR",
            "estimated_cost": "$5160.00",
            "bld_permit_desc": "REMOVE ROOF COVERING AND INSTALL A NEW ROOF SYSTEM AS PER CODE.",
            "x": -83.1878984030693,
            "y": 42.4128398601794
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1878984030693, 42.4128398601794]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16855 STRATHMOOR",
            "estimated_cost": "$5561.00",
            "bld_permit_desc": "REPLACING 3 WINDOWS IN EXISTING OPENINGS",
            "x": -83.1886799024351,
            "y": 42.4151168598324
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1886799024351, 42.4151168598324]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13416 HUBBELL",
            "estimated_cost": "$2000.00",
            "bld_permit_desc": "PERMIT FOR WORK PREVIOUSLY PERFORMED (REMOVE/REPLACE FRONT PORCH FRAMING & DECK WITH LIKE SIZE & TYPE MATERIALS) & FIRE DAMAGE INFRONT BEDROOM ON AN EXISTING SINGLE FAMILY DWELLING AS PER DOCUMENTS",
            "x": -83.1881080407922,
            "y": 42.3871666096042
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1881080407922, 42.3871666096042]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14924 HUBBELL",
            "estimated_cost": "$3980.00",
            "bld_permit_desc": "SIDING ON HOUSE ONLY. TRIM ON HOUSE ONLY",
            "x": -83.1884366462629,
            "y": 42.3988213403819
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1884366462629, 42.3988213403819]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14865 MARLOWE",
            "estimated_cost": "$7850.00",
            "bld_permit_desc": "INSTALL REQUIRED SMOKE DETECTION PER ORD 239-H.",
            "x": -83.1900236818225,
            "y": 42.3979286180063
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1900236818225, 42.3979286180063]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15354 LAUDER",
            "estimated_cost": "$8700.00",
            "bld_permit_desc": "STRIP & REROOF",
            "x": -83.1910466662406,
            "y": 42.4028038460504
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1910466662406, 42.4028038460504]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16640 LAUDER",
            "estimated_cost": "$1194.00",
            "bld_permit_desc": "INSTALL (1) VINYL REPLACEMENT WINDOW",
            "x": -83.1915207428847,
            "y": 42.4133936434167
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1915207428847, 42.4133936434167]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16665 LAUDER",
            "estimated_cost": "$7200.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.1922470417065,
            "y": 42.4136901269521
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1922470417065, 42.4136901269521]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16611 LAUDER",
            "estimated_cost": "$5245.00",
            "bld_permit_desc": "REMOVE EXISTING SHINGLE, REPLACE ROTTEN SHEATHING, INSTALL ALUMINUM DRIP EDGE, INSTALL ICE GUARD, INSTALL 15 LB FELT, INSTALL ASPHALT SHINGLES, INSTALL VENTILATION AS PER CODE.",
            "x": -83.1922155135811,
            "y": 42.4129796115752
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1922155135811, 42.4129796115752]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14650 ROBSON",
            "estimated_cost": "$5800.00",
            "bld_permit_desc": "INSTALL (11) VINYL REPLACEMENT WINDOWS",
            "x": -83.1923499024657,
            "y": 42.3965608633411
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1923499024657, 42.3965608633411]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14006 COYLE",
            "estimated_cost": "$1614.00",
            "bld_permit_desc": "INSTALL (2) VINYL REPLACEMENT WINDOWS",
            "x": -83.1935176442627,
            "y": 42.3888173443953
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1935176442627, 42.3888173443953]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14006 COYLE",
            "estimated_cost": "$8280.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.1935176442627,
            "y": 42.3888173443953
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1935176442627, 42.3888173443953]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14536 COYLE",
            "estimated_cost": "$8723.00",
            "bld_permit_desc": "STRIP & RE ROOF HOUSE ONLY. 54 FT GUTTERS.",
            "x": -83.1932359029579,
            "y": 42.395026363455
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1932359029579, 42.395026363455]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16801 COYLE",
            "estimated_cost": "$6851.00",
            "bld_permit_desc": "REPLACING (7) WINDOWS.",
            "x": -83.1946848645972,
            "y": 42.4143303606575
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1946848645972, 42.4143303606575]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16661 COYLE",
            "estimated_cost": "$1109.52",
            "bld_permit_desc": "ADD BLOWN IN R-38 INSULATION IN THE ATTIC",
            "x": -83.1946511403722,
            "y": 42.4135143795344
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1946511403722, 42.4135143795344]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16583 COYLE",
            "estimated_cost": "$1331.00",
            "bld_permit_desc": "INSTALL (3) VINYL REPLACEMENT WINDOWS",
            "x": -83.1946129151485,
            "y": 42.4124573891159
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1946129151485, 42.4124573891159]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13997 COYLE",
            "estimated_cost": "$3246.00",
            "bld_permit_desc": "REPLACEMENT GUTTERS",
            "x": -83.1942166615718,
            "y": 42.3886983842406
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1942166615718, 42.3886983842406]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14314 SUSSEX",
            "estimated_cost": "$15000.00",
            "bld_permit_desc": "REVISE BUILDING PERMIT #BLD2015-00714 FOR TRUE COST OF CONSTRUCTION.",
            "x": -83.1942874031226,
            "y": 42.3925313640863
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1942874031226, 42.3925313640863]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16152 SUSSEX",
            "estimated_cost": "$10124.00",
            "bld_permit_desc": "INSTALLING SEVEN (7) VINYL REPLACEMENT WINDOWS AS PER ATTACHED WORKLIST. MUST CONFORM TO 2009 MICH RES CODE.",
            "x": -83.1949748697702,
            "y": 42.4097413747094
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1949748697702, 42.4097413747094]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14916 WHITCOMB",
            "estimated_cost": "$13412.00",
            "bld_permit_desc": "REPLACING (14) WINDOWS",
            "x": -83.1957025096489,
            "y": 42.3983903893915
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1957025096489, 42.3983903893915]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15810 WHITCOMB",
            "estimated_cost": "$6430.00",
            "bld_permit_desc": "STRIP & REROOF HOUSE",
            "x": -83.1960583797053,
            "y": 42.4072688351876
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1960583797053, 42.4072688351876]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16636 WHITCOMB",
            "estimated_cost": "$10000.00",
            "bld_permit_desc": "FIRE REPAIRS ON EXISTING SINGLE FAMILY RESIDENTIAL DWELLING INCLUDING REPLACING (8) FLOOD JOISTS AS INDICATED ON SCOPE",
            "x": -83.1963343940609,
            "y": 42.4131493330951
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1963343940609, 42.4131493330951]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16636 WHITCOMB",
            "estimated_cost": "$7000.00",
            "bld_permit_desc": "REPLACE WINDOWS (18 TOTAL) ON A SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.1963343940609,
            "y": 42.4131493330951
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1963343940609, 42.4131493330951]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14863 WHITCOMB",
            "estimated_cost": "$18695.00",
            "bld_permit_desc": "EXTERIOR RENOVATIONS ON AN EXISTING SINGLE FAMILY DWELLING & GARAGE AS PER PLANS.",
            "x": -83.1965235060256,
            "y": 42.3976911257064
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1965235060256, 42.3976911257064]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15519 PREST",
            "estimated_cost": "$14000.00",
            "bld_permit_desc": "CONTRUCT A 22' X 22' FRAME DETACHED GARAGE AS PER PLANS & CODE.",
            "x": -83.1980176616845,
            "y": 42.4050018816383
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1980176616845, 42.4050018816383]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13401 PREST",
            "estimated_cost": "$6860.00",
            "bld_permit_desc": "EXTERIOR REPAIRS TO EXISTING SINGLE FAMILY DWELLING AS PER WORKLIST.  ",
            "x": -83.1972334021954,
            "y": 42.386549365582
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1972334021954, 42.386549365582]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15426 GREENFIELD",
            "estimated_cost": "$1155.00",
            "bld_permit_desc": "INSTALL (2) VINYL REPLACEMENT  WINDOWS",
            "x": -83.1983944185235,
            "y": 42.4037799099476
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1983944185235, 42.4037799099476]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15712 GREENFIELD",
            "estimated_cost": "$4200.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.198477400396,
            "y": 42.4054763620691
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.198477400396, 42.4054763620691]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15757 GREENFIELD",
            "estimated_cost": "$1300.00",
            "bld_permit_desc": "INSTALL (1) VINYL REPLACEMENT WINDOW",
            "x": -83.1993623995855,
            "y": 42.4065588618802
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.1993623995855, 42.4065588618802]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16590 WINTHROP",
            "estimated_cost": "$2400.00",
            "bld_permit_desc": "REMOVE & INSTALL NEW SHINGLES ON DETACHED GARAGE ONLY",
            "x": -83.200149399453,
            "y": 42.4118363606667
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.200149399453, 42.4118363606667]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16870 WINTHROP",
            "estimated_cost": "$2944.32",
            "bld_permit_desc": "KITCHEN CABINET REFACING ONLY.",
            "x": -83.2002771443162,
            "y": 42.4151626330271
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2002771443162, 42.4151626330271]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16725 WINTHROP",
            "estimated_cost": "$8900.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2009994704829,
            "y": 42.4128696153991
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2009994704829, 42.4128696153991]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12938 FORRER",
            "estimated_cost": "$7845.00",
            "bld_permit_desc": "STRIP & RE-ROOF HOUSE.",
            "x": -83.2012858084578,
            "y": 42.3843001085452
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2012858084578, 42.3843001085452]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14578 FORRER",
            "estimated_cost": "$3000.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL ROOF REPLACEMENT PER CITY ROOF REPLACEMENT REQUIREMENTS & MICHIGAN RESIDENTIAL BUILDING CODE.",
            "x": -83.2008219154699,
            "y": 42.3950313585223
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2008219154699, 42.3950313585223]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14923 FORRER",
            "estimated_cost": "$10850.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL REPAIRS AS PER ATTACHED SCOPE OF WORK LIST DOCUMENTS & MICH RES'D BUILDING CODE.",
            "x": -83.2018913371457,
            "y": 42.3983766045593
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2018913371457, 42.3983766045593]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16588 PREVOST",
            "estimated_cost": "$2200.00",
            "bld_permit_desc": "ERECT NEW GARAGE AT EXISTING RESIDENTIAL TWO FAMILY AS INDICATED ON PLANS",
            "x": -83.2029369571526,
            "y": 42.4117681220859
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2029369571526, 42.4117681220859]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14901 PREVOST",
            "estimated_cost": "$4500.00",
            "bld_permit_desc": "STRIP & RE-ROOF TO CODE A RESIDENTIAL DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2031665380152,
            "y": 42.3980358581218
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2031665380152, 42.3980358581218]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13612 RUTHERFORD",
            "estimated_cost": "$858.00",
            "bld_permit_desc": "INSTALL (2) VINYL REPLACEMENT WINDOWS",
            "x": -83.2025706516228,
            "y": 42.3863703938957
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2025706516228, 42.3863703938957]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16748 RUTHERFORD",
            "estimated_cost": "$10000.00",
            "bld_permit_desc": "***DLBA (REHABBED AND READY) PROPERTY*** SEE ON-SITE FOR ALL REPAIRS COMPLETED.",
            "x": -83.2043089054141,
            "y": 42.4133093549379
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2043089054141, 42.4133093549379]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15891 RUTHERFORD",
            "estimated_cost": "$182832.38",
            "bld_permit_desc": "SINGLE FAMILY RESIDENTIAL REPAIRS AS PER ATTACHED SCOPE OF WORK LIST DOCUMENTS & MICHIGAN RESIDENTIAL BUILDING CODE. SUBJECT TO FIELD INSPECTION & APPROVAL. SEPARATE PERMITS PER TRADE. ",
            "x": -83.2046942383891,
            "y": 42.4081271028623
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2046942383891, 42.4081271028623]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12946 MANSFIELD",
            "estimated_cost": "$8000.00",
            "bld_permit_desc": "CONSTRUCT EXTENSION TO GARAGE AS INDICATED ON PLANS AND WORKLIST",
            "x": -83.2036599055188,
            "y": 42.3843723329354
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2036599055188, 42.3843723329354]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14032 MANSFIELD",
            "estimated_cost": "$4800.00",
            "bld_permit_desc": "INTERIOR & EXTERIOR RENOVATIONS TO AN EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2042946425602,
            "y": 42.3888718425857
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2042946425602, 42.3888718425857]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16831 MANSFIELD",
            "estimated_cost": "$9167.00",
            "bld_permit_desc": "REMOVE AND REPLACE ROOF COVERING VENTS, GUTTERS, DOWNSPOUTS AND INTERIOR RENOVATIONS TO CODE AS PER WORKLIST",
            "x": -83.2060281544538,
            "y": 42.4145273411725
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2060281544538, 42.4145273411725]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12625 MANSFIELD",
            "estimated_cost": "$6980.00",
            "bld_permit_desc": "STRIP AND RE-ROOF (HOUSE ONLY)",
            "x": -83.2042153530484,
            "y": 42.3803868674695
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2042153530484, 42.3803868674695]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12914 ST MARYS",
            "estimated_cost": "$5682.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2048787894678,
            "y": 42.3839171442682
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2048787894678, 42.3839171442682]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14520 ST MARYS",
            "estimated_cost": "$1287.00",
            "bld_permit_desc": "INSTALL (2) VINYL REPLACEMENT WINDOWS",
            "x": -83.2056747061714,
            "y": 42.394490106717
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2056747061714, 42.394490106717]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15338 ST MARYS",
            "estimated_cost": "$1350.00",
            "bld_permit_desc": "RE-ROOF SINGLE FAMILY RESIDENTIAL DWELLNG TO CODE AS INDICATED",
            "x": -83.2059678983326,
            "y": 42.4022203632046
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2059678983326, 42.4022203632046]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16130 ST MARYS",
            "estimated_cost": "$18815.06",
            "bld_permit_desc": "INTERIOR/EXTERIOR RENOVATIONS TO AN EXISTING SINGLE FAMILY DWELLING AS INDICATED ON WORKLIST.",
            "x": -83.2063142873529,
            "y": 42.4091925595471
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2063142873529, 42.4091925595471]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16853 ST MARYS",
            "estimated_cost": "$24914.00",
            "bld_permit_desc": "PERFORM AND PROVIDE EXTERIOR AND INTERIOR RENOVATIONS AS PER ATTACHED DOCUMENTS.  MUST CONFORM TO 2012 MICHIGAN RESIDENTIAL CODE.",
            "x": -83.2071388967674,
            "y": 42.4147848607999
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2071388967674, 42.4147848607999]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12641 ST MARYS",
            "estimated_cost": "$4200.00",
            "bld_permit_desc": "REMOVE EXISTING ROOF COVERING AND INSTALL A NEW ROOF SYSTEM AS PER ATTACHED CONTRACT. INSTALL SMOKE DETECTOR PER ORD 239-H",
            "x": -83.2054231507403,
            "y": 42.3805823825707
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2054231507403, 42.3805823825707]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15828 MURRAY HILL",
            "estimated_cost": "$12585.00",
            "bld_permit_desc": "BATHROOM 1ST FL:REMOVE CERAMIC FLR TILES TUB & VANITY,INSTALL NEW FLR TILES,NEW STEEL TUB & FAUCET & NEW VANITY.KITCHEN:INSTALL NEW GRANITE COUNTERTOP OVER EXIST'G BASE CABINETS.INSTALL NEW 12X12 GRANITE FLR TITLE",
            "x": -83.207270707038,
            "y": 42.4072031031114
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.207270707038, 42.4072031031114]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15711 MURRAY HILL",
            "estimated_cost": "$5000.00",
            "bld_permit_desc": "REMOVE ROOF COVERING & INSTALL A NEW ROOF SYSTEM AS PER CODE",
            "x": -83.2078171399017,
            "y": 42.4051523402017
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2078171399017, 42.4051523402017]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15711 MURRAY HILL",
            "estimated_cost": "$6934.00",
            "bld_permit_desc": "INTERIOR RENOVATIONS IN AN EXISTING SINGLE FAMILY DWELLING AS PER WORKLIST",
            "x": -83.2078171399017,
            "y": 42.4051523402017
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2078171399017, 42.4051523402017]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15055 METTETAL",
            "estimated_cost": "$26450.00",
            "bld_permit_desc": "DWELLING ROOFING, GUTTERS, DOWNSPOUTS, EXTERIOR DOOR (1), STORM DOORS (2), CARPENTRY OPEN STAIR ASSEMBLY TO BASEMENT",
            "x": -83.2080968975516,
            "y": 42.3999063635311
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2080968975516, 42.3999063635311]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12743 METTETAL",
            "estimated_cost": "$14000.00",
            "bld_permit_desc": "REMOVE & REPLACE ROOF COVERING TO CODE. GUTTERS AND DOWNSPOUTS AS PER ATTACHED DOWNSPOUT. SUBJECT TO FIELD APPROVAL. SEPARATE TRADE PERMITS REQUIRED.",
            "x": -83.2066914791883,
            "y": 42.3819836315449
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2066914791883, 42.3819836315449]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12674 ASBURY PARK",
            "estimated_cost": "$9325.00",
            "bld_permit_desc": "PERFORM & PROVIDE EXTERIOR RENOVATIONS & ALTERATIONS AS PER ATTACHED DOCUMENTS, FLATWORK PERMITTED UNDER ENG2016-00330GR. MUST CONFORM TO MICH RES CODE 2015",
            "x": -83.2071669000185,
            "y": 42.3809868666334
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2071669000185, 42.3809868666334]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16335 LYNDON",
            "estimated_cost": "$1500.00",
            "bld_permit_desc": "SINGLE FAMILY RESIDENCE: EXCAVATE 10' LENGTH X 8' DEEP AND TAR AND SEAL BASEMENT WALL, REPAIR DRAIN TILE AS ERQUIRES, PER ATTACHED SPECIFICATIONS. BACK FILL ANY OPEN EXCAVATIONS.",
            "x": -83.2078666423598,
            "y": 42.3939368433089
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2078666423598, 42.3939368433089]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15420 ASBURY PARK",
            "estimated_cost": "$10773.00",
            "bld_permit_desc": "EXTERIOR RENOVATION TO INSTALL NEW VINYL SIDING & GUTTERS AS PER ATTACHED CONTRACT. INSTALL SMOKE DETECTORS PER ORD 239-H>",
            "x": -83.2081883974876,
            "y": 42.4034513626568
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2081883974876, 42.4034513626568]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "12716 WOODMONT",
            "estimated_cost": "$1887.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS",
            "x": -83.2084027621868,
            "y": 42.3815406018738
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2084027621868, 42.3815406018738]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14116 WOODMONT",
            "estimated_cost": "$1229.00",
            "bld_permit_desc": "INSTALLING (3) VINYL REPLACEMENT WINDOWS AS PE RATTACHED WORKLIST. SUBJECT TO FIELD APPROVAL.",
            "x": -83.2090531906613,
            "y": 42.3895621256442
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2090531906613, 42.3895621256442]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14424 WOODMONT",
            "estimated_cost": "$4908.00",
            "bld_permit_desc": "REPLACEMENT OF (6) WINDOWS.",
            "x": -83.2092366710226,
            "y": 42.3934333890772
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2092366710226, 42.3934333890772]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14454 WOODMONT",
            "estimated_cost": "$12500.00",
            "bld_permit_desc": "CONSTRUCT NEW GARAGE ON THREE SIDES OF EXISTING FOOTING AND (1) NEW FOOTING AT REAR AT A RESIDENTIAL DWELLING.",
            "x": -83.2092580699436,
            "y": 42.3938908277872
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2092580699436, 42.3938908277872]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14519 WOODMONT",
            "estimated_cost": "$3150.00",
            "bld_permit_desc": "INSTALL (7) VINLY REPLACMENT WINDOWS",
            "x": -83.2099947684391,
            "y": 42.3943901412031
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2099947684391, 42.3943901412031]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "13955 WOODMONT",
            "estimated_cost": "$3809.00",
            "bld_permit_desc": "5 REPLACEMENT WINDOWS",
            "x": -83.2096884030622,
            "y": 42.3876734486484
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2096884030622, 42.3876734486484]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15334 FERGUSON",
            "estimated_cost": "$7508.87",
            "bld_permit_desc": "TEAR OFF & RE-ROOF HOME ONLY",
            "x": -83.2091243969556,
            "y": 42.4021228628802
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2091243969556, 42.4021228628802]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15436 FERGUSON",
            "estimated_cost": "$8775.00",
            "bld_permit_desc": "STRIP & RE-ROOF",
            "x": -83.2091904128572,
            "y": 42.4036850809871
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2091904128572, 42.4036850809871]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16168 FERGUSON",
            "estimated_cost": "$14005.15",
            "bld_permit_desc": "TEAR OFF & RE-ROOF HOME & GARAGE",
            "x": -83.209467153461,
            "y": 42.4095388850109
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.209467153461, 42.4095388850109]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16756 BILTMORE",
            "estimated_cost": "$5000.00",
            "bld_permit_desc": "REMOVE & REPLACE EXISTING ROOF SYSTEMS FOR SINGLE FAMILY RESIDENCE & ACCESSORY GARAGE.  MUST CONFORM TO MICHIGAN RESIDENTIAL CODE 2012",
            "x": -83.2105951958669,
            "y": 42.41333060434
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2105951958669, 42.41333060434]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "16756 BILTMORE",
            "estimated_cost": "$12931.00",
            "bld_permit_desc": "EXTERIOR AND INTERIOR RENOVATIONS ON AN EXISTING SINGLE FAMILY DWELLING AS PER WORKLIST",
            "x": -83.2105951958669,
            "y": 42.41333060434
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2105951958669, 42.41333060434]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15871 BILTMORE",
            "estimated_cost": "$8000.00",
            "bld_permit_desc": "ERECT GARAGE (12'X16') ON EXISTING RESIDENTIAL SINGLE FAM DWELLING LOT AS INDICATED ON PLANS.",
            "x": -83.2109382321371,
            "y": 42.4077576053456
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2109382321371, 42.4077576053456]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14054 GRANDMONT",
            "estimated_cost": "$6796.00",
            "bld_permit_desc": "INSTALL (17) VINYL REPLACEMENT WINDOWS",
            "x": -83.2102986750185,
            "y": 42.3890607533146
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2102986750185, 42.3890607533146]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14200 GRANDMONT",
            "estimated_cost": "$17962.00",
            "bld_permit_desc": "INSTALL (41) VINYL REPLACEMENT WINDOWS",
            "x": -83.2103556564482,
            "y": 42.3906936046804
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2103556564482, 42.3906936046804]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "14314 GRANDMONT",
            "estimated_cost": "$1900.00",
            "bld_permit_desc": "INSTALL (4) VINYL REPLACEMENT WINDOWS.",
            "x": -83.2104138938644,
            "y": 42.3919337782079
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2104138938644, 42.3919337782079]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15350 GILCHRIST",
            "estimated_cost": "$3950.00",
            "bld_permit_desc": "INSTALL (9) VINYL REPLACEMENT WINDOWS",
            "x": -83.2111462966494,
            "y": 42.4023515936666
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2111462966494, 42.4023515936666]
        }
    }, {
        "type": "Feature",
        "properties": {
            "address": "15778 GILCHRIST",
            "estimated_cost": "$3450.00",
            "bld_permit_desc": "INSTALL (60 VINYL REPLACEMENT WINDOWS.",
            "x": -83.2113158687523,
            "y": 42.4062363628471
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-83.2113158687523, 42.4062363628471]
        }
    }]
};



map.on('load', function(e) {
    // Add the stores data as a source
    map.addSource('places', {
        type: 'geojson',
        data: improvements
    });

    // Add a layer to the map with styling rules to render the source



    map.addLayer({
        id: 'locations',
        type: 'symbol',
        source: 'places',
        minzoom: 13,
        layout: {
            'icon-image': 'marker-15'
        }
    });


    // Initialize the list
    // buildLocationList(improvements);
});

//create function
function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 16
    });
}

function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({
            closeOnClick: false
        })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>Alteration Permit</h3>' +
            '<h4>' + currentFeature.properties.address + '</h4>' +
            '<h4>' + currentFeature.properties.estimated_cost + '</h4>' +
            '<h4>' + currentFeature.properties.bld_permit_desc + '</h4>')
        .addTo(map);
}
// Add an event listener for when a user clicks on the map
map.on('click', function(e) {
    // Query all the rendered points in the view
    var features = map.queryRenderedFeatures(e.point, {
        layers: ['locations']
    });
    if (features.length) {
        var clickedPoint = features[0];
        // 1. Fly to the point
        flyToStore(clickedPoint);
        // 2. Close all other popups and display popup for clicked property
        createPopUp(clickedPoint);
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        // Find the index of the property.features that corresponds to the clickedPoint that fired the event listener
        var selectedFeature = clickedPoint.properties.address;

        for (var i = 0; i < improvements.features.length; i++) {
            if (improvements.features[i].properties.address === selectedFeature) {
                selectedFeatureIndex = i;
            }
        }
        // Select the correct list item using the found index and add the active class
        var listing = document.getElementById('listing-' + selectedFeatureIndex);
        listing.classList.add('active');
    }
});



function buildLocationList(data) {
    // Iterate through the list of properties
    for (i = 0; i < data.features.length; i++) {
        var currentFeature = data.features[i];
        // Shorten data.feature.properties to just `prop` so we're not
        // writing this long form over and over again.
        var prop = currentFeature.properties;
        // Select the listing container in the HTML and append a div
        // with the class 'item' for each property
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.className = 'item';
        listing.id = 'listing-' + i;

        // Create a new link with the class 'title' for each property
        // and fill it with the property address
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.dataPosition = i;
        link.innerHTML = prop.address;

        // Create a new div with the class 'details' for each property
        // and fill it with the city and phone number
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.estimated_cost;
        if (prop.bld_permit_desc) {
            details.innerHTML += ' &middot; ' + prop.bld_permit_desc;
        }

        link.addEventListener('click', function(e) {
            // Update the currentFeature to the property associated with the clicked link
            var clickedListing = data.features[this.dataPosition];

            // 1. Fly to the point associated with the clicked link
            flyToStore(clickedListing);

            // 2. Close all other popups and display popup for clicked property
            createPopUp(clickedListing);

            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            var activeItem = document.getElementsByClassName('active');

            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');

        });
    }
}