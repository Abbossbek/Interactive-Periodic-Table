// Element data array with properties for all 118 elements
const elements = [
    {
        "atomicNumber": 1,
        "symbol": "H",
        "name": "Hydrogen",
        "category": "diatomic-nonmetal",
        "atomicMass": 1.008,
        "electronConfiguration": "1s¹",
        "funFact": "Hydrogen is the most abundant element in the universe, making up about 75% of all normal matter."
    },
    {
        "atomicNumber": 2,
        "symbol": "He",
        "name": "Helium",
        "category": "noble-gas",
        "atomicMass": 4.002602,
        "electronConfiguration": "1s²",
        "funFact": "Helium is the second lightest element and is used to fill balloons because it's lighter than air and non-flammable."
    },
    {
        "atomicNumber": 3,
        "symbol": "Li",
        "name": "Lithium",
        "category": "alkali-metal",
        "atomicMass": 6.94,
        "electronConfiguration": "[He] 2s¹",
        "funFact": "Lithium is the lightest metal and is used in rechargeable batteries for devices like phones and laptops."
    },
    {
        "atomicNumber": 4,
        "symbol": "Be",
        "name": "Beryllium",
        "category": "alkaline-earth-metal",
        "atomicMass": 9.012182,
        "electronConfiguration": "[He] 2s²",
        "funFact": "Beryllium is extremely lightweight and strong, making it useful in aerospace applications."
    },
    {
        "atomicNumber": 5,
        "symbol": "B",
        "name": "Boron",
        "category": "metalloid",
        "atomicMass": 10.81,
        "electronConfiguration": "[He] 2s² 2p¹",
        "funFact": "Boron is essential for plant growth and is found in many household cleaning products."
    },
    {
        "atomicNumber": 6,
        "symbol": "C",
        "name": "Carbon",
        "category": "polyatomic-nonmetal",
        "atomicMass": 12.011,
        "electronConfiguration": "[He] 2s² 2p²",
        "funFact": "Carbon is the basis of all known life on Earth and forms more compounds than all other elements combined."
    },
    {
        "atomicNumber": 7,
        "symbol": "N",
        "name": "Nitrogen",
        "category": "diatomic-nonmetal",
        "atomicMass": 14.007,
        "electronConfiguration": "[He] 2s² 2p³",
        "funFact": "Nitrogen makes up about 78% of Earth's atmosphere and is essential for protein synthesis."
    },
    {
        "atomicNumber": 8,
        "symbol": "O",
        "name": "Oxygen",
        "category": "diatomic-nonmetal",
        "atomicMass": 15.999,
        "electronConfiguration": "[He] 2s² 2p⁴",
        "funFact": "Oxygen is essential for respiration and combustion, and liquid oxygen is pale blue."
    },
    {
        "atomicNumber": 9,
        "symbol": "F",
        "name": "Fluorine",
        "category": "diatomic-nonmetal",
        "atomicMass": 18.998403,
        "electronConfiguration": "[He] 2s² 2p⁵",
        "funFact": "Fluorine is the most electronegative element and is highly reactive."
    },
    {
        "atomicNumber": 10,
        "symbol": "Ne",
        "name": "Neon",
        "category": "noble-gas",
        "atomicMass": 20.180,
        "electronConfiguration": "[He] 2s² 2p⁶",
        "funFact": "Neon is famous for its use in illuminated signs, though pure neon glows orange-red."
    },
    {
        "atomicNumber": 11,
        "symbol": "Na",
        "name": "Sodium",
        "category": "alkali-metal",
        "atomicMass": 22.989769,
        "electronConfiguration": "[Ne] 3s¹",
        "funFact": "Sodium is essential for nerve function and is commonly found in table salt (NaCl)."
    },
    {
        "atomicNumber": 12,
        "symbol": "Mg",
        "name": "Magnesium",
        "category": "alkaline-earth-metal",
        "atomicMass": 24.305,
        "electronConfiguration": "[Ne] 3s²",
        "funFact": "Magnesium burns with a bright white flame and is used in fireworks and flares."
    },
    {
        "atomicNumber": 13,
        "symbol": "Al",
        "name": "Aluminum",
        "category": "post-transition-metal",
        "atomicMass": 26.981539,
        "electronConfiguration": "[Ne] 3s² 3p¹",
        "funFact": "Aluminum is the most abundant metal in Earth's crust and is highly resistant to corrosion."
    },
    {
        "atomicNumber": 14,
        "symbol": "Si",
        "name": "Silicon",
        "category": "metalloid",
        "atomicMass": 28.085,
        "electronConfiguration": "[Ne] 3s² 3p²",
        "funFact": "Silicon is the second most abundant element in Earth's crust and is crucial for computer chips."
    },
    {
        "atomicNumber": 15,
        "symbol": "P",
        "name": "Phosphorus",
        "category": "polyatomic-nonmetal",
        "atomicMass": 30.973762,
        "electronConfiguration": "[Ne] 3s² 3p³",
        "funFact": "Phosphorus glows in the dark and was once used to make matches."
    },
    {
        "atomicNumber": 16,
        "symbol": "S",
        "name": "Sulfur",
        "category": "polyatomic-nonmetal",
        "atomicMass": 32.06,
        "electronConfiguration": "[Ne] 3s² 3p⁴",
        "funFact": "Sulfur is known for its distinctive yellow color and smell of rotten eggs when forming hydrogen sulfide."
    },
    {
        "atomicNumber": 17,
        "symbol": "Cl",
        "name": "Chlorine",
        "category": "diatomic-nonmetal",
        "atomicMass": 35.45,
        "electronConfiguration": "[Ne] 3s² 3p⁵",
        "funFact": "Chlorine is commonly used to disinfect swimming pools and drinking water."
    },
    {
        "atomicNumber": 18,
        "symbol": "Ar",
        "name": "Argon",
        "category": "noble-gas",
        "atomicMass": 39.948,
        "electronConfiguration": "[Ne] 3s² 3p⁶",
        "funFact": "Argon is the third most common gas in Earth's atmosphere and is used in welding."
    },
    {
        "atomicNumber": 19,
        "symbol": "K",
        "name": "Potassium",
        "category": "alkali-metal",
        "atomicMass": 39.0983,
        "electronConfiguration": "[Ar] 4s¹",
        "funFact": "Potassium is essential for heart function and bananas are a good source of it."
    },
    {
        "atomicNumber": 20,
        "symbol": "Ca",
        "name": "Calcium",
        "category": "alkaline-earth-metal",
        "atomicMass": 40.078,
        "electronConfiguration": "[Ar] 4s²",
        "funFact": "Calcium is vital for bone health and is the fifth most abundant element in Earth's crust."
    },
    {
        "atomicNumber": 21,
        "symbol": "Sc",
        "name": "Scandium",
        "category": "transition-metal",
        "atomicMass": 44.955912,
        "electronConfiguration": "[Ar] 3d¹ 4s²",
        "funFact": "Scandium is named after Scandinavia and is used in aerospace applications."
    },
    {
        "atomicNumber": 22,
        "symbol": "Ti",
        "name": "Titanium",
        "category": "transition-metal",
        "atomicMass": 47.867,
        "electronConfiguration": "[Ar] 3d² 4s²",
        "funFact": "Titanium is as strong as steel but much lighter, making it ideal for aircraft and medical implants."
    },
    {
        "atomicNumber": 23,
        "symbol": "V",
        "name": "Vanadium",
        "category": "transition-metal",
        "atomicMass": 50.9415,
        "electronConfiguration": "[Ar] 3d³ 4s²",
        "funFact": "Vanadium is used to strengthen steel and is named after Vanadis, the Norse goddess of beauty."
    },
    {
        "atomicNumber": 24,
        "symbol": "Cr",
        "name": "Chromium",
        "category": "transition-metal",
        "atomicMass": 51.9961,
        "electronConfiguration": "[Ar] 3d⁵ 4s¹",
        "funFact": "Chromium gives stainless steel its shine and is also responsible for the red color in rubies."
    },
    {
        "atomicNumber": 25,
        "symbol": "Mn",
        "name": "Manganese",
        "category": "transition-metal",
        "atomicMass": 54.938045,
        "electronConfiguration": "[Ar] 3d⁵ 4s²",
        "funFact": "Manganese is essential for steel production and is also important for human nutrition in small amounts."
    },
    {
        "atomicNumber": 26,
        "symbol": "Fe",
        "name": "Iron",
        "category": "transition-metal",
        "atomicMass": 55.845,
        "electronConfiguration": "[Ar] 3d⁶ 4s²",
        "funFact": "Iron is the fourth most common element in Earth's crust and is the main component of steel."
    },
    {
        "atomicNumber": 27,
        "symbol": "Co",
        "name": "Cobalt",
        "category": "transition-metal",
        "atomicMass": 58.933195,
        "electronConfiguration": "[Ar] 3d⁷ 4s²",
        "funFact": "Cobalt produces brilliant blue colors and is used in pigments and rechargeable batteries."
    },
    {
        "atomicNumber": 28,
        "symbol": "Ni",
        "name": "Nickel",
        "category": "transition-metal",
        "atomicMass": 58.6934,
        "electronConfiguration": "[Ar] 3d⁸ 4s²",
        "funFact": "Nickel is named after the mischievous sprite Nickel from German folklore who was blamed for failing to extract copper from ore."
    },
    {
        "atomicNumber": 29,
        "symbol": "Cu",
        "name": "Copper",
        "category": "transition-metal",
        "atomicMass": 63.546,
        "electronConfiguration": "[Ar] 3d¹⁰ 4s¹",
        "funFact": "Copper is one of the few metals that occurs naturally in a pure state and is an excellent conductor of electricity."
    },
    {
        "atomicNumber": 30,
        "symbol": "Zn",
        "name": "Zinc",
        "category": "transition-metal",
        "atomicMass": 65.38,
        "electronConfiguration": "[Ar] 3d¹⁰ 4s²",
        "funFact": "Zinc is essential for human health and is used to galvanize steel to prevent rusting."
    },
    {
        "atomicNumber": 31,
        "symbol": "Ga",
        "name": "Gallium",
        "category": "post-transition-metal",
        "atomicMass": 69.723,
        "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p¹",
        "funFact": "Gallium melts just above room temperature (29.76°C) and can literally melt in your hand."
    },
    {
        "atomicNumber": 32,
        "symbol": "Ge",
        "name": "Germanium",
        "category": "metalloid",
        "atomicMass": 72.630,
        "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p²",
        "funFact": "Germanium is used in fiber optic systems and infrared optical equipment."
    },
    {
        "atomicNumber": 33,
        "symbol": "As",
        "name": "Arsenic",
        "category": "metalloid",
        "atomicMass": 74.921595,
        "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p³",
        "funFact": "Arsenic has a long history as a poison, but small amounts are essential for some animals."
    },
    {
        "atomicNumber": 34,
        "symbol": "Se",
        "name": "Selenium",
        "category": "polyatomic-nonmetal",
        "atomicMass": 78.971,
        "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁴",
        "funFact": "Selenium is essential for human health in small amounts and is used in photocopiers."
    },
    {
        "atomicNumber": 35,
        "symbol": "Br",
        "name": "Bromine",
        "category": "diatomic-nonmetal",
        "atomicMass": 79.904,
        "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁵",
        "funFact": "Bromine is one of only two elements that are liquid at room temperature (the other is mercury)."
    },
    {
        "atomicNumber": 36,
        "symbol": "Kr",
        "name": "Krypton",
        "category": "noble-gas",
        "atomicMass": 83.798,
        "electronConfiguration": "[Ar] 3d¹⁰ 4s² 4p⁶",
        "funFact": "Krypton is named after the Greek word for 'hidden' and glows whitish-blue when electrically charged."
    },
    {
        "atomicNumber": 37,
        "symbol": "Rb",
        "name": "Rubidium",
        "category": "alkali-metal",
        "atomicMass": 85.4678,
        "electronConfiguration": "[Kr] 5s¹",
        "funFact": "Rubidium is so soft it can be cut with a knife and is used in atomic clocks."
    },
    {
        "atomicNumber": 38,
        "symbol": "Sr",
        "name": "Strontium",
        "category": "alkaline-earth-metal",
        "atomicMass": 87.62,
        "electronConfiguration": "[Kr] 5s²",
        "funFact": "Strontium compounds are used in red fireworks and flares due to their bright red flame color."
    },
    {
        "atomicNumber": 39,
        "symbol": "Y",
        "name": "Yttrium",
        "category": "transition-metal",
        "atomicMass": 88.90585,
        "electronConfiguration": "[Kr] 4d¹ 5s²",
        "funFact": "Yttrium is used in superconductors and in the production of television screens."
    },
    {
        "atomicNumber": 40,
        "symbol": "Zr",
        "name": "Zirconium",
        "category": "transition-metal",
        "atomicMass": 91.224,
        "electronConfiguration": "[Kr] 4d² 5s²",
        "funFact": "Zirconium is highly resistant to corrosion and is used in nuclear reactors."
    },
    {
        "atomicNumber": 41,
        "symbol": "Nb",
        "name": "Niobium",
        "category": "transition-metal",
        "atomicMass": 92.90638,
        "electronConfiguration": "[Kr] 4d⁴ 5s¹",
        "funFact": "Niobium is used in superconducting magnets and is named after Niobe, daughter of Tantalus in Greek mythology."
    },
    {
        "atomicNumber": 42,
        "symbol": "Mo",
        "name": "Molybdenum",
        "category": "transition-metal",
        "atomicMass": 95.95,
        "electronConfiguration": "[Kr] 4d⁵ 5s¹",
        "funFact": "Molybdenum is essential for plant growth and is used to strengthen steel."
    },
    {
        "atomicNumber": 43,
        "symbol": "Tc",
        "name": "Technetium",
        "category": "transition-metal",
        "atomicMass": 98,
        "electronConfiguration": "[Kr] 4d⁵ 5s²",
        "funFact": "Technetium was the first element to be made artificially, hence its name meaning 'artificial'."
    },
    {
        "atomicNumber": 44,
        "symbol": "Ru",
        "name": "Ruthenium",
        "category": "transition-metal",
        "atomicMass": 101.07,
        "electronConfiguration": "[Kr] 4d⁷ 5s¹",
        "funFact": "Ruthenium is named after Russia (Ruthenia) and is used in electrical contacts."
    },
    {
        "atomicNumber": 45,
        "symbol": "Rh",
        "name": "Rhodium",
        "category": "transition-metal",
        "atomicMass": 102.90550,
        "electronConfiguration": "[Kr] 4d⁸ 5s¹",
        "funFact": "Rhodium is one of the most expensive precious metals and is used in catalytic converters."
    },
    {
        "atomicNumber": 46,
        "symbol": "Pd",
        "name": "Palladium",
        "category": "transition-metal",
        "atomicMass": 106.42,
        "electronConfiguration": "[Kr] 4d¹⁰",
        "funFact": "Palladium is used in catalytic converters and its name comes from the asteroid Pallas."
    },
    {
        "atomicNumber": 47,
        "symbol": "Ag",
        "name": "Silver",
        "category": "transition-metal",
        "atomicMass": 107.8682,
        "electronConfiguration": "[Kr] 4d¹⁰ 5s¹",
        "funFact": "Silver is the best conductor of electricity and has antimicrobial properties."
    },
    {
        "atomicNumber": 48,
        "symbol": "Cd",
        "name": "Cadmium",
        "category": "transition-metal",
        "atomicMass": 112.414,
        "electronConfiguration": "[Kr] 4d¹⁰ 5s²",
        "funFact": "Cadmium was discovered in 1817 and is named after the Latin word for zinc carbonate, cadmia."
    },
    {
        "atomicNumber": 49,
        "symbol": "In",
        "name": "Indium",
        "category": "post-transition-metal",
        "atomicMass": 114.818,
        "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p¹",
        "funFact": "Indium is used in touchscreens and LCD displays due to its transparent conducting properties."
    },
    {
        "atomicNumber": 50,
        "symbol": "Sn",
        "name": "Tin",
        "category": "post-transition-metal",
        "atomicMass": 118.710,
        "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p²",
        "funFact": "Tin is used to coat steel cans to prevent rust and is one of the earliest known metals."
    },
    {
        "atomicNumber": 51,
        "symbol": "Sb",
        "name": "Antimony",
        "category": "metalloid",
        "atomicMass": 121.760,
        "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p³",
        "funFact": "Antimony's name comes from the Greek 'anti-monos', meaning 'not alone', as it's usually found in compounds."
    },
    {
        "atomicNumber": 52,
        "symbol": "Te",
        "name": "Tellurium",
        "category": "metalloid",
        "atomicMass": 127.60,
        "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁴",
        "funFact": "Tellurium is named after the Earth (tellus in Latin) and is sometimes found as native crystals."
    },
    {
        "atomicNumber": 53,
        "symbol": "I",
        "name": "Iodine",
        "category": "diatomic-nonmetal",
        "atomicMass": 126.90447,
        "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁵",
        "funFact": "Iodine is essential for thyroid function and sublimes directly from solid to purple gas."
    },
    {
        "atomicNumber": 54,
        "symbol": "Xe",
        "name": "Xenon",
        "category": "noble-gas",
        "atomicMass": 131.293,
        "electronConfiguration": "[Kr] 4d¹⁰ 5s² 5p⁶",
        "funFact": "Xenon is used in high-intensity discharge lamps and was the first noble gas found to form compounds."
    },
    {
        "atomicNumber": 55,
        "symbol": "Cs",
        "name": "Cesium",
        "category": "alkali-metal",
        "atomicMass": 132.905452,
        "electronConfiguration": "[Xe] 6s¹",
        "funFact": "Cesium is the most reactive metal and is used in atomic clocks due to its very regular vibrations."
    },
    {
        "atomicNumber": 56,
        "symbol": "Ba",
        "name": "Barium",
        "category": "alkaline-earth-metal",
        "atomicMass": 137.327,
        "electronConfiguration": "[Xe] 6s²",
        "funFact": "Barium compounds are used to create green colors in fireworks and signal flares."
    },
    {
        "atomicNumber": 57,
        "symbol": "La",
        "name": "Lanthanum",
        "category": "lanthanide",
        "atomicMass": 138.90547,
        "electronConfiguration": "[Xe] 5d¹ 6s²",
        "funFact": "Lanthanum is used in camera lenses and is named after the Greek word for 'to lie hidden'."
    },
    {
        "atomicNumber": 58,
        "symbol": "Ce",
        "name": "Cerium",
        "category": "lanthanide",
        "atomicMass": 140.116,
        "electronConfiguration": "[Xe] 4f¹ 5d¹ 6s²",
        "funFact": "Cerium is the most abundant of the rare earth elements and is used in cigarette lighters."
    },
    {
        "atomicNumber": 59,
        "symbol": "Pr",
        "name": "Praseodymium",
        "category": "lanthanide",
        "atomicMass": 140.90766,
        "electronConfiguration": "[Xe] 4f³ 6s²",
        "funFact": "Praseodymium's name means 'green twin' due to its green salts, and it's used in permanent magnets."
    },
    {
        "atomicNumber": 60,
        "symbol": "Nd",
        "name": "Neodymium",
        "category": "lanthanide",
        "atomicMass": 144.242,
        "electronConfiguration": "[Xe] 4f⁴ 6s²",
        "funFact": "Neodymium is used to make the strongest permanent magnets known and is essential in electronics."
    },
    {
        "atomicNumber": 61,
        "symbol": "Pm",
        "name": "Promethium",
        "category": "lanthanide",
        "atomicMass": 145,
        "electronConfiguration": "[Xe] 4f⁵ 6s²",
        "funFact": "Promethium is named after Prometheus and is the only lanthanide not found naturally on Earth."
    },
    {
        "atomicNumber": 62,
        "symbol": "Sm",
        "name": "Samarium",
        "category": "lanthanide",
        "atomicMass": 150.36,
        "electronConfiguration": "[Xe] 4f⁶ 6s²",
        "funFact": "Samarium is used in carbon arc lights and in some lasers."
    },
    {
        "atomicNumber": 63,
        "symbol": "Eu",
        "name": "Europium",
        "category": "lanthanide",
        "atomicMass": 151.964,
        "electronConfiguration": "[Xe] 4f⁷ 6s²",
        "funFact": "Europium is named after Europe and is used in euro banknotes to prevent counterfeiting."
    },
    {
        "atomicNumber": 64,
        "symbol": "Gd",
        "name": "Gadolinium",
        "category": "lanthanide",
        "atomicMass": 157.25,
        "electronConfiguration": "[Xe] 4f⁷ 5d¹ 6s²",
        "funFact": "Gadolinium is used in MRI contrast agents and is the only rare earth element that is ferromagnetic at room temperature."
    },
    {
        "atomicNumber": 65,
        "symbol": "Tb",
        "name": "Terbium",
        "category": "lanthanide",
        "atomicMass": 158.92535,
        "electronConfiguration": "[Xe] 4f⁹ 6s²",
        "funFact": "Terbium is used in fluorescent lamps and green phosphors in color TV tubes."
    },
    {
        "atomicNumber": 66,
        "symbol": "Dy",
        "name": "Dysprosium",
        "category": "lanthanide",
        "atomicMass": 162.500,
        "electronConfiguration": "[Xe] 4f¹⁰ 6s²",
        "funFact": "Dysprosium's name means 'hard to get' in Greek, reflecting how difficult it was to separate from other rare earths."
    },
    {
        "atomicNumber": 67,
        "symbol": "Ho",
        "name": "Holmium",
        "category": "lanthanide",
        "atomicMass": 164.93033,
        "electronConfiguration": "[Xe] 4f¹¹ 6s²",
        "funFact": "Holmium is named after Stockholm (Holmia in Latin) and has the highest magnetic strength of any element."
    },
    {
        "atomicNumber": 68,
        "symbol": "Er",
        "name": "Erbium",
        "category": "lanthanide",
        "atomicMass": 167.259,
        "electronConfiguration": "[Xe] 4f¹² 6s²",
        "funFact": "Erbium is used in fiber optic communications and is named after Ytterby, Sweden."
    },
    {
        "atomicNumber": 69,
        "symbol": "Tm",
        "name": "Thulium",
        "category": "lanthanide",
        "atomicMass": 168.93422,
        "electronConfiguration": "[Xe] 4f¹³ 6s²",
        "funFact": "Thulium is named after Thule, an ancient name for Scandinavia, and is the least abundant rare earth element."
    },
    {
        "atomicNumber": 70,
        "symbol": "Yb",
        "name": "Ytterbium",
        "category": "lanthanide",
        "atomicMass": 173.045,
        "electronConfiguration": "[Xe] 4f¹⁴ 6s²",
        "funFact": "Ytterbium is named after Ytterby, Sweden, and is used in atomic clocks that are thousands of times more accurate than cesium clocks."
    },
    {
        "atomicNumber": 71,
        "symbol": "Lu",
        "name": "Lutetium",
        "category": "lanthanide",
        "atomicMass": 174.9668,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d¹ 6s²",
        "funFact": "Lutetium is the hardest and most dense of the lanthanides and is named after Lutetia, the ancient name for Paris."
    },
    {
        "atomicNumber": 72,
        "symbol": "Hf",
        "name": "Hafnium",
        "category": "transition-metal",
        "atomicMass": 178.49,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d² 6s²",
        "funFact": "Hafnium is named after Copenhagen (Hafnia in Latin) and is used in nuclear reactors due to its ability to absorb neutrons."
    },
    {
        "atomicNumber": 73,
        "symbol": "Ta",
        "name": "Tantalum",
        "category": "transition-metal",
        "atomicMass": 180.94788,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d³ 6s²",
        "funFact": "Tantalum is named after Tantalus from Greek mythology and is used in electronic components."
    },
    {
        "atomicNumber": 74,
        "symbol": "W",
        "name": "Tungsten",
        "category": "transition-metal",
        "atomicMass": 183.84,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d⁴ 6s²",
        "funFact": "Tungsten has the highest melting point of all elements and is used in incandescent light bulb filaments."
    },
    {
        "atomicNumber": 75,
        "symbol": "Re",
        "name": "Rhenium",
        "category": "transition-metal",
        "atomicMass": 186.207,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d⁵ 6s²",
        "funFact": "Rhenium is named after the Rhine River and is one of the rarest elements in Earth's crust."
    },
    {
        "atomicNumber": 76,
        "symbol": "Os",
        "name": "Osmium",
        "category": "transition-metal",
        "atomicMass": 190.23,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d⁶ 6s²",
        "funFact": "Osmium is the densest naturally occurring element and has the highest melting point among the platinum group metals."
    },
    {
        "atomicNumber": 77,
        "symbol": "Ir",
        "name": "Iridium",
        "category": "transition-metal",
        "atomicMass": 192.217,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d⁷ 6s²",
        "funFact": "Iridium is the most corrosion-resistant metal known and is found in the clay layer marking the extinction of dinosaurs."
    },
    {
        "atomicNumber": 78,
        "symbol": "Pt",
        "name": "Platinum",
        "category": "transition-metal",
        "atomicMass": 195.084,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d⁹ 6s¹",
        "funFact": "Platinum is named after 'platina' meaning 'little silver' in Spanish and is used in catalytic converters."
    },
    {
        "atomicNumber": 79,
        "symbol": "Au",
        "name": "Gold",
        "category": "transition-metal",
        "atomicMass": 196.966569,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
        "funFact": "Gold is one of the least reactive chemical elements and has been valued throughout history for its rarity and beauty."
    },
    {
        "atomicNumber": 80,
        "symbol": "Hg",
        "name": "Mercury",
        "category": "transition-metal",
        "atomicMass": 200.592,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
        "funFact": "Mercury is the only metallic element that is liquid at standard conditions for temperature and pressure."
    },
    {
        "atomicNumber": 81,
        "symbol": "Tl",
        "name": "Thallium",
        "category": "post-transition-metal",
        "atomicMass": 204.38,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
        "funFact": "Thallium's name comes from the Greek word 'thallos' meaning 'green twig' due to its bright green spectral emission lines."
    },
    {
        "atomicNumber": 82,
        "symbol": "Pb",
        "name": "Lead",
        "category": "post-transition-metal",
        "atomicMass": 207.2,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
        "funFact": "Lead's name comes from the Old English 'lead' and was widely used by ancient Romans for pipes and containers."
    },
    {
        "atomicNumber": 83,
        "symbol": "Bi",
        "name": "Bismuth",
        "category": "post-transition-metal",
        "atomicMass": 208.98040,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
        "funFact": "Bismuth is the most naturally diamagnetic element and has the lowest thermal conductivity of any metal except mercury."
    },
    {
        "atomicNumber": 84,
        "symbol": "Po",
        "name": "Polonium",
        "category": "post-transition-metal",
        "category": "metalloid",
        "atomicMass": 209,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
        "funFact": "Polonium was discovered by Marie Curie and named after her homeland Poland."
    },
    {
        "atomicNumber": 85,
        "symbol": "At",
        "name": "Astatine",
        "category": "metalloid",
        "atomicMass": 210,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
        "funFact": "Astatine is the rarest naturally occurring element on Earth, with less than 1 gram estimated to exist at any given time."
    },
    {
        "atomicNumber": 86,
        "symbol": "Rn",
        "name": "Radon",
        "category": "noble-gas",
        "atomicMass": 222,
        "electronConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
        "funFact": "Radon is a radioactive noble gas and the second leading cause of lung cancer after smoking."
    },
    {
        "atomicNumber": 87,
        "symbol": "Fr",
        "name": "Francium",
        "category": "alkali-metal",
        "atomicMass": 223,
        "electronConfiguration": "[Rn] 7s¹",
        "funFact": "Francium is one of the rarest elements on Earth, with only a few dozen atoms existing at any given time."
    },
    {
        "atomicNumber": 88,
        "symbol": "Ra",
        "name": "Radium",
        "category": "alkaline-earth-metal",
        "atomicMass": 226,
        "electronConfiguration": "[Rn] 7s²",
        "funFact": "Radium was discovered by Marie and Pierre Curie and was once used in luminous watch dials."
    },
    {
        "atomicNumber": 89,
        "symbol": "Ac",
        "name": "Actinium",
        "category": "actinide",
        "atomicMass": 227,
        "electronConfiguration": "[Rn] 6d¹ 7s²",
        "funFact": "Actinium is about 150 times more radioactive than radium and is used in neutron sources."
    },
    {
        "atomicNumber": 90,
        "symbol": "Th",
        "name": "Thorium",
        "category": "actinide",
        "atomicMass": 232.0377,
        "electronConfiguration": "[Rn] 6d² 7s²",
        "funFact": "Thorium is named after Thor, the Norse god of thunder, and could potentially be used as nuclear fuel."
    },
    {
        "atomicNumber": 91,
        "symbol": "Pa",
        "name": "Protactinium",
        "category": "actinide",
        "atomicMass": 231.03588,
        "electronConfiguration": "[Rn] 5f² 6d¹ 7s²",
        "funFact": "Protactinium's name means 'before actinium' since it decays to form actinium."
    },
    {
        "atomicNumber": 92,
        "symbol": "U",
        "name": "Uranium",
        "category": "actinide",
        "atomicMass": 238.02891,
        "electronConfiguration": "[Rn] 5f³ 6d¹ 7s²",
        "funFact": "Uranium was the first element discovered to be fissile, making it essential for nuclear power and weapons."
    },
    {
        "atomicNumber": 93,
        "symbol": "Np",
        "name": "Neptunium",
        "category": "actinide",
        "atomicMass": 237,
        "electronConfiguration": "[Rn] 5f⁴ 6d¹ 7s²",
        "funFact": "Neptunium was the first transuranium element to be synthesized and is named after the planet Neptune."
    },
    {
        "atomicNumber": 94,
        "symbol": "Pu",
        "name": "Plutonium",
        "category": "actinide",
        "atomicMass": 244,
        "electronConfiguration": "[Rn] 5f⁶ 7s²",
        "funFact": "Plutonium was discovered during the Manhattan Project and is the most complex element to handle safely."
    },
    {
        "atomicNumber": 95,
        "symbol": "Am",
        "name": "Americium",
        "category": "actinide",
        "atomicMass": 243,
        "electronConfiguration": "[Rn] 5f⁷ 7s²",
        "funFact": "Americium is commonly used in smoke detectors and was named after the Americas."
    },
    {
        "atomicNumber": 96,
        "symbol": "Cm",
        "name": "Curium",
        "category": "actinide",
        "atomicMass": 247,
        "electronConfiguration": "[Rn] 5f⁷ 6d¹ 7s²",
        "funFact": "Curium is named after Marie and Pierre Curie and glows purple in the dark due to its radioactivity."
    },
    {
        "atomicNumber": 97,
        "symbol": "Bk",
        "name": "Berkelium",
        "category": "actinide",
        "atomicMass": 247,
        "electronConfiguration": "[Rn] 5f⁹ 7s²",
        "funFact": "Berkelium is named after Berkeley, California, where it was discovered at the University of California."
    },
    {
        "atomicNumber": 98,
        "symbol": "Cf",
        "name": "Californium",
        "category": "actinide",
        "atomicMass": 251,
        "electronConfiguration": "[Rn] 5f¹⁰ 7s²",
        "funFact": "Californium is named after California and is one of the few elements produced in quantities visible to the naked eye."
    },
    {
        "atomicNumber": 99,
        "symbol": "Es",
        "name": "Einsteinium",
        "category": "actinide",
        "atomicMass": 252,
        "electronConfiguration": "[Rn] 5f¹¹ 7s²",
        "funFact": "Einsteinium was discovered in the debris of the first hydrogen bomb test and named after Albert Einstein."
    },
    {
        "atomicNumber": 100,
        "symbol": "Fm",
        "name": "Fermium",
        "category": "actinide",
        "atomicMass": 257,
        "electronConfiguration": "[Rn] 5f¹² 7s²",
        "funFact": "Fermium was discovered in the fallout from the first hydrogen bomb and named after Enrico Fermi."
    },
    {
        "atomicNumber": 101,
        "symbol": "Md",
        "name": "Mendelevium",
        "category": "actinide",
        "atomicMass": 258,
        "electronConfiguration": "[Rn] 5f¹³ 7s²",
        "funFact": "Mendelevium is named after Dmitri Mendeleev, the creator of the periodic table."
    },
    {
        "atomicNumber": 102,
        "symbol": "No",
        "name": "Nobelium",
        "category": "actinide",
        "atomicMass": 259,
        "electronConfiguration": "[Rn] 5f¹⁴ 7s²",
        "funFact": "Nobelium is named after Alfred Nobel, the founder of the Nobel Prizes."
    },
    {
        "atomicNumber": 103,
        "symbol": "Lr",
        "name": "Lawrencium",
        "category": "actinide",
        "atomicMass": 266,
        "electronConfiguration": "[Rn] 5f¹⁴ 7s² 7p¹",
        "funFact": "Lawrencium is named after Ernest Lawrence, the inventor of the cyclotron."
    },
    {
        "atomicNumber": 104,
        "symbol": "Rf",
        "name": "Rutherfordium",
        "category": "transition-metal",
        "atomicMass": 267,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d² 7s²",
        "funFact": "Rutherfordium is named after Ernest Rutherford, the father of nuclear physics."
    },
    {
        "atomicNumber": 105,
        "symbol": "Db",
        "name": "Dubnium",
        "category": "transition-metal",
        "atomicMass": 268,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d³ 7s²",
        "funFact": "Dubnium is named after Dubna, Russia, where it was first synthesized."
    },
    {
        "atomicNumber": 106,
        "symbol": "Sg",
        "name": "Seaborgium",
        "category": "transition-metal",
        "atomicMass": 269,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d⁴ 7s²",
        "funFact": "Seaborgium is named after Glenn T. Seaborg, who discovered several transuranium elements."
    },
    {
        "atomicNumber": 107,
        "symbol": "Bh",
        "name": "Bohrium",
        "category": "transition-metal",
        "atomicMass": 270,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d⁵ 7s²",
        "funFact": "Bohrium is named after Niels Bohr, the Danish physicist who contributed to quantum mechanics."
    },
    {
        "atomicNumber": 108,
        "symbol": "Hs",
        "name": "Hassium",
        "category": "transition-metal",
        "atomicMass": 277,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d⁶ 7s²",
        "funFact": "Hassium is named after Hesse, Germany, where it was first synthesized."
    },
    {
        "atomicNumber": 109,
        "symbol": "Mt",
        "name": "Meitnerium",
        "category": "unknown",
        "atomicMass": 278,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d⁷ 7s²",
        "funFact": "Meitnerium is named after Lise Meitner, the Austrian-Swedish physicist who worked on nuclear fission."
    },
    {
        "atomicNumber": 110,
        "symbol": "Ds",
        "name": "Darmstadtium",
        "category": "unknown",
        "atomicMass": 281,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d⁸ 7s²",
        "funFact": "Darmstadtium is named after Darmstadt, Germany, where it was first synthesized."
    },
    {
        "atomicNumber": 111,
        "symbol": "Rg",
        "name": "Roentgenium",
        "category": "unknown",
        "atomicMass": 282,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d⁹ 7s²",
        "funFact": "Roentgenium is named after Wilhelm Röntgen, the discoverer of X-rays."
    },
    {
        "atomicNumber": 112,
        "symbol": "Cn",
        "name": "Copernicium",
        "category": "transition-metal",
        "atomicMass": 285,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
        "funFact": "Copernicium is named after Nicolaus Copernicus, the astronomer who proposed the heliocentric model."
    },
    {
        "atomicNumber": 113,
        "symbol": "Nh",
        "name": "Nihonium",
        "category": "unknown",
        "atomicMass": 286,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
        "funFact": "Nihonium is named after Japan (Nihon in Japanese) and was the first element discovered in Asia."
    },
    {
        "atomicNumber": 114,
        "symbol": "Fl",
        "name": "Flerovium",
        "category": "unknown",
        "atomicMass": 289,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
        "funFact": "Flerovium is named after the Flerov Laboratory of Nuclear Reactions where it was synthesized."
    },
    {
        "atomicNumber": 115,
        "symbol": "Mc",
        "name": "Moscovium",
        "category": "unknown",
        "atomicMass": 290,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
        "funFact": "Moscovium is named after Moscow Oblast, Russia, where the element was synthesized."
    },
    {
        "atomicNumber": 116,
        "symbol": "Lv",
        "name": "Livermorium",
        "category": "unknown",
        "atomicMass": 293,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
        "funFact": "Livermorium is named after Lawrence Livermore National Laboratory in California."
    },
    {
        "atomicNumber": 117,
        "symbol": "Ts",
        "name": "Tennessine",
        "category": "unknown",
        "atomicMass": 294,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
        "funFact": "Tennessine is named after Tennessee, USA, where significant contributions were made to its discovery."
    },
    {
        "atomicNumber": 118,
        "symbol": "Og",
        "name": "Oganesson",
        "category": "unknown",
        "atomicMass": 294,
        "electronConfiguration": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
        "funFact": "Oganesson is named after Yuri Oganessian, a Russian nuclear physicist who contributed to the discovery of superheavy elements."
    }
];

// Initialize favorites from localStorage
let favorites = JSON.parse(localStorage.getItem('periodicTableFavorites')) || [];

// DOM elements
const periodicTable = document.getElementById('periodicTable');
const elementModal = document.getElementById('elementModal');
const gameModal = document.getElementById('gameModal');
const favoritesModal = document.getElementById('favoritesModal');
const searchInput = document.getElementById('searchInput');

// Create periodic table
function createPeriodicTable() {
    periodicTable.innerHTML = '';
    
    // Define positions for each element in the periodic table grid
    const positions = {
        1: { row: 1, col: 1 },   // H
        2: { row: 1, col: 18 },  // He
        
        3: { row: 2, col: 1 },   // Li
        4: { row: 2, col: 2 },   // Be
        5: { row: 2, col: 13 },  // B
        6: { row: 2, col: 14 },  // C
        7: { row: 2, col: 15 },  // N
        8: { row: 2, col: 16 },  // O
        9: { row: 2, col: 17 },  // F
        10: { row: 2, col: 18 }, // Ne
        
        11: { row: 3, col: 1 },  // Na
        12: { row: 3, col: 2 },  // Mg
        13: { row: 3, col: 13 }, // Al
        14: { row: 3, col: 14 }, // Si
        15: { row: 3, col: 15 }, // P
        16: { row: 3, col: 16 }, // S
        17: { row: 3, col: 17 }, // Cl
        18: { row: 3, col: 18 }, // Ar
        
        19: { row: 4, col: 1 },  // K
        20: { row: 4, col: 2 },  // Ca
        21: { row: 4, col: 3 },  // Sc
        22: { row: 4, col: 4 },  // Ti
        23: { row: 4, col: 5 },  // V
        24: { row: 4, col: 6 },  // Cr
        25: { row: 4, col: 7 },  // Mn
        26: { row: 4, col: 8 },  // Fe
        27: { row: 4, col: 9 },  // Co
        28: { row: 4, col: 10 }, // Ni
        29: { row: 4, col: 11 }, // Cu
        30: { row: 4, col: 12 }, // Zn
        31: { row: 4, col: 13 }, // Ga
        32: { row: 4, col: 14 }, // Ge
        33: { row: 4, col: 15 }, // As
        34: { row: 4, col: 16 }, // Se
        35: { row: 4, col: 17 }, // Br
        36: { row: 4, col: 18 }, // Kr
        
        37: { row: 5, col: 1 },  // Rb
        38: { row: 5, col: 2 },  // Sr
        39: { row: 5, col: 3 },  // Y
        40: { row: 5, col: 4 },  // Zr
        41: { row: 5, col: 5 },  // Nb
        42: { row: 5, col: 6 },  // Mo
        43: { row: 5, col: 7 },  // Tc
        44: { row: 5, col: 8 },  // Ru
        45: { row: 5, col: 9 },  // Rh
        46: { row: 5, col: 10 }, // Pd
        47: { row: 5, col: 11 }, // Ag
        48: { row: 5, col: 12 }, // Cd
        49: { row: 5, col: 13 }, // In
        50: { row: 5, col: 14 }, // Sn
        51: { row: 5, col: 15 }, // Sb
        52: { row: 5, col: 16 }, // Te
        53: { row: 5, col: 17 }, // I
        54: { row: 5, col: 18 }, // Xe
        
        55: { row: 6, col: 1 },  // Cs
        56: { row: 6, col: 2 },  // Ba
        57: { row: 9, col: 3 },  // La (Lanthanide series start)
        58: { row: 10, col: 3 }, // Ce
        59: { row: 11, col: 3 }, // Pr
        60: { row: 12, col: 3 }, // Nd
        61: { row: 13, col: 3 }, // Pm
        62: { row: 14, col: 3 }, // Sm
        63: { row: 15, col: 3 }, // Eu
        64: { row: 16, col: 3 }, // Gd
        65: { row: 17, col: 3 }, // Tb
        66: { row: 18, col: 3 }, // Dy
        67: { row: 19, col: 3 }, // Ho
        68: { row: 20, col: 3 }, // Er
        69: { row: 21, col: 3 }, // Tm
        70: { row: 22, col: 3 }, // Yb
        71: { row: 23, col: 3 }, // Lu
        72: { row: 6, col: 4 },  // Hf
        73: { row: 6, col: 5 },  // Ta
        74: { row: 6, col: 6 },  // W
        75: { row: 6, col: 7 },  // Re
        76: { row: 6, col: 8 },  // Os
        77: { row: 6, col: 9 },  // Ir
        78: { row: 6, col: 10 }, // Pt
        79: { row: 6, col: 11 }, // Au
        80: { row: 6, col: 12 }, // Hg
        81: { row: 6, col: 13 }, // Tl
        82: { row: 6, col: 14 }, // Pb
        83: { row: 6, col: 15 }, // Bi
        84: { row: 6, col: 16 }, // Po
        85: { row: 6, col: 17 }, // At
        86: { row: 6, col: 18 }, // Rn
        
        87: { row: 7, col: 1 },  // Fr
        88: { row: 7, col: 2 },  // Ra
        89: { row: 9, col: 4 },  // Ac (Actinide series start)
        90: { row: 10, col: 4 }, // Th
        91: { row: 11, col: 4 }, // Pa
        92: { row: 12, col: 4 }, // U
        93: { row: 13, col: 4 }, // Np
        94: { row: 14, col: 4 }, // Pu
        95: { row: 15, col: 4 }, // Am
        96: { row: 16, col: 4 }, // Cm
        97: { row: 17, col: 4 }, // Bk
        98: { row: 18, col: 4 }, // Cf
        99: { row: 19, col: 4 }, // Es
        100: { row: 20, col: 4 }, // Fm
        101: { row: 21, col: 4 }, // Md
        102: { row: 22, col: 4 }, // No
        103: { row: 23, col: 4 }, // Lr
        104: { row: 7, col: 4 }, // Rf
        105: { row: 7, col: 5 }, // Db
        106: { row: 7, col: 6 }, // Sg
        107: { row: 7, col: 7 }, // Bh
        108: { row: 7, col: 8 }, // Hs
        109: { row: 7, col: 9 }, // Mt
        110: { row: 7, col: 10 }, // Ds
        111: { row: 7, col: 11 }, // Rg
        112: { row: 7, col: 12 }, // Cn
        113: { row: 7, col: 13 }, // Nh
        114: { row: 7, col: 14 }, // Fl
        115: { row: 7, col: 15 }, // Mc
        116: { row: 7, col: 16 }, // Lv
        117: { row: 7, col: 17 }, // Ts
        118: { row: 7, col: 18 }  // Og
    };
    
    // Create a grid container for positioning
    const gridContainer = document.createElement('div');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = 'repeat(18, 60px)';
    gridContainer.style.gridTemplateRows = 'repeat(10, 70px)';
    gridContainer.style.gap = '5px';
    gridContainer.style.margin = '0 auto';
    gridContainer.style.maxWidth = '1200px';
    
    // Create special areas for lanthanides and actinides
    const lanthanideContainer = document.createElement('div');
    lanthanideContainer.style.display = 'flex';
    lanthanideContainer.style.gap = '5px';
    lanthanideContainer.style.marginTop = '10px';
    lanthanideContainer.style.justifyContent = 'center';
    
    const actinideContainer = document.createElement('div');
    actinideContainer.style.display = 'flex';
    actinideContainer.style.gap = '5px';
    actinideContainer.style.marginTop = '5px';
    actinideContainer.style.justifyContent = 'center';
    
    // Add labels
    const lanthanideLabel = document.createElement('div');
    lanthanideLabel.textContent = 'Lanthanides';
    lanthanideLabel.style.gridColumn = '1 / span 18';
    lanthanideLabel.style.textAlign = 'center';
    lanthanideLabel.style.marginBottom = '5px';
    lanthanideLabel.style.fontWeight = 'bold';
    
    const actinideLabel = document.createElement('div');
    actinideLabel.textContent = 'Actinides';
    actinideLabel.style.gridColumn = '1 / span 18';
    actinideLabel.style.textAlign = 'center';
    actinideLabel.style.marginBottom = '5px';
    actinideLabel.style.fontWeight = 'bold';
    
    // Create element tiles
    elements.forEach(element => {
        const pos = positions[element.atomicNumber];
        
        if (!pos) return; // Skip if position not defined
        
        // For lanthanides and actinides, place them in separate containers
        if (element.atomicNumber >= 57 && element.atomicNumber <= 71) {
            // Lanthanides
            const elementDiv = createElementTile(element);
            lanthanideContainer.appendChild(elementDiv);
        } else if (element.atomicNumber >= 89 && element.atomicNumber <= 103) {
            // Actinides
            const elementDiv = createElementTile(element);
            actinideContainer.appendChild(elementDiv);
        } else {
            // Regular elements go in the main grid
            const elementDiv = createElementTile(element);
            
            // Position in the grid
            elementDiv.style.gridRow = pos.row;
            elementDiv.style.gridColumn = pos.col;
            
            gridContainer.appendChild(elementDiv);
        }
    });
    
    periodicTable.appendChild(gridContainer);
    periodicTable.appendChild(lanthanideLabel);
    periodicTable.appendChild(lanthanideContainer);
    periodicTable.appendChild(actinideLabel);
    periodicTable.appendChild(actinideContainer);
}

// Create an individual element tile
function createElementTile(element) {
    const elementDiv = document.createElement('div');
    elementDiv.className = `element ${element.category}`;
    elementDiv.dataset.atomicNumber = element.atomicNumber;
    
    elementDiv.innerHTML = `
        <div class="number">${element.atomicNumber}</div>
        <div class="symbol">${element.symbol}</div>
        <div class="name">${element.name}</div>
    `;
    
    // Add click event to show details
    elementDiv.addEventListener('click', () => showElementDetails(element));
    
    return elementDiv;
}

// Show element details in modal
function showElementDetails(element) {
    const elementDetails = document.getElementById('elementDetails');
    const isFavorite = favorites.includes(element.atomicNumber);
    
    elementDetails.innerHTML = `
        <h2>${element.name} (${element.symbol})</h2>
        <div class="details-grid">
            <div class="detail-item">
                <strong>Atomic Number:</strong>
                ${element.atomicNumber}
            </div>
            <div class="detail-item">
                <strong>Atomic Mass:</strong>
                ${element.atomicMass}
            </div>
            <div class="detail-item">
                <strong>Category:</strong>
                ${element.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </div>
            <div class="detail-item">
                <strong>Electron Configuration:</strong>
                ${element.electronConfiguration}
            </div>
        </div>
        <div class="detail-item">
            <strong>Fun Fact:</strong>
            ${element.funFact}
        </div>
        <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-element="${element.atomicNumber}">
            ${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    `;
    
    elementModal.style.display = 'block';
    
    // Add event listener for favorite button
    const favButton = elementDetails.querySelector('.favorite-btn');
    favButton.addEventListener('click', () => toggleFavorite(element.atomicNumber));
}

// Toggle favorite status
function toggleFavorite(atomicNumber) {
    const index = favorites.indexOf(atomicNumber);
    if (index === -1) {
        favorites.push(atomicNumber);
    } else {
        favorites.splice(index, 1);
    }
    
    // Save to localStorage
    localStorage.setItem('periodicTableFavorites', JSON.stringify(favorites));
    
    // Update UI
    updateFavoriteButton(atomicNumber);
    showElementDetails(elements.find(el => el.atomicNumber === atomicNumber));
}

// Update favorite button text and style
function updateFavoriteButton(atomicNumber) {
    const elementDiv = document.querySelector(`.element[data-atomic-number="${atomicNumber}"]`);
    if (elementDiv) {
        const isFavorite = favorites.includes(atomicNumber);
        const favButton = document.querySelector(`.favorite-btn[data-element="${atomicNumber}"]`);
        if (favButton) {
            favButton.textContent = isFavorite ? 'Remove from Favorites' : 'Add to Favorites';
            favButton.classList.toggle('favorited', isFavorite);
        }
    }
}

// Show favorites modal
function showFavoritesModal() {
    const favoritesList = document.getElementById('favoritesList');
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>You have no favorited elements yet.</p>';
    } else {
        favoritesList.innerHTML = '';
        
        favorites.forEach(atomicNumber => {
            const element = elements.find(el => el.atomicNumber === atomicNumber);
            if (element) {
                const favItem = document.createElement('div');
                favItem.className = 'favorite-item';
                favItem.innerHTML = `
                    <span>${element.atomicNumber}. ${element.symbol} - ${element.name}</span>
                    <button class="remove-fav-btn" data-element="${element.atomicNumber}">Remove</button>
                `;
                
                const removeBtn = favItem.querySelector('.remove-fav-btn');
                removeBtn.addEventListener('click', () => {
                    toggleFavorite(element.atomicNumber);
                    showFavoritesModal(); // Refresh the list
                });
                
                favoritesList.appendChild(favItem);
            }
        });
    }
    
    favoritesModal.style.display = 'block';
}

// Start the element guessing game
function startGame() {
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    const clueText = document.getElementById('clueText');
    const guessInput = document.getElementById('guessInput');
    const resultMessage = document.getElementById('resultMessage');
    
    // Generate a random clue
    const clues = [
        `This element's atomic number is ${randomElement.atomicNumber}`,
        `This element's symbol is ${randomElement.symbol}`,
        `This element is a ${randomElement.category.replace('-', ' ')}`,
        `This element has an atomic mass of approximately ${Math.round(randomElement.atomicMass)}`,
        randomElement.funFact
    ];
    
    const randomClue = clues[Math.floor(Math.random() * clues.length)];
    clueText.textContent = `Clue: ${randomClue}`;
    
    // Store the correct answer
    window.currentAnswer = randomElement.name.toLowerCase();
    window.currentElement = randomElement;
    
    // Clear input and message
    guessInput.value = '';
    resultMessage.textContent = '';
    resultMessage.className = '';
    
    gameModal.style.display = 'block';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Create the periodic table
    createPeriodicTable();
    
    // Close modals when clicking the close button
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modals when clicking outside the content
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // Remove highlight from all elements
        document.querySelectorAll('.element').forEach(el => {
            el.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
            el.style.transform = 'scale(1)';
        });
        
        if (searchTerm) {
            // Find matching elements
            const matches = elements.filter(element => 
                element.name.toLowerCase().includes(searchTerm) ||
                element.symbol.toLowerCase().includes(searchTerm) ||
                element.atomicNumber.toString().includes(searchTerm)
            );
            
            // Highlight matching elements
            matches.forEach(element => {
                const elementDiv = document.querySelector(`.element[data-atomic-number="${element.atomicNumber}"]`);
                if (elementDiv) {
                    elementDiv.style.boxShadow = '0 0 15px #FFFF00, 0 0 20px #FFFF00';
                    elementDiv.style.transform = 'scale(1.1)';
                    elementDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }
    });
    
    // Game button
    document.getElementById('gameBtn').addEventListener('click', startGame);
    
    // Favorites button
    document.getElementById('favoritesBtn').addEventListener('click', showFavoritesModal);
    
    // Submit guess in game
    document.getElementById('submitGuess').addEventListener('click', () => {
        const guess = document.getElementById('guessInput').value.trim().toLowerCase();
        const resultMessage = document.getElementById('resultMessage');
        
        if (guess === window.currentAnswer) {
            resultMessage.textContent = `Correct! It was ${window.currentElement.name}.`;
            resultMessage.className = 'resultMessage correct';
        } else {
            resultMessage.textContent = `Incorrect! Try again.`;
            resultMessage.className = 'resultMessage incorrect';
        }
    });
    
    // Next clue button
    document.getElementById('nextClue').addEventListener('click', startGame);
    
    // Allow pressing Enter to submit guess
    document.getElementById('guessInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('submitGuess').click();
        }
    });
});

// Update favorite buttons when page loads
window.addEventListener('load', () => {
    favorites.forEach(atomicNumber => {
        updateFavoriteButton(atomicNumber);
    });
});