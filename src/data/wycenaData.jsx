import { CheckIcon } from "@chakra-ui/icons";
const renamedKeys = {
	parkiet: "Podłoga",
	schody: "Schody",
	podstopnice: "Podstopnice",
	szpachlowanie: "Szpachlowanie",
	bejcowanie: "Bejcowanie",
	podklejanie: "Podklejanie parkietu",
	["schody-drewno"]: "Rodzaj drewna schodów",
	["podstopnice-wybor"]: "Wykończenie podstopnic",
	["parkiet-wybor"]: "Wykończenie podłogi",
	["schody-ilosc"]: "Ilość stopni",
	["schody-wybor"]: "Wykończenie schodów",
	["podstopnice-ilosc"]: "Ilość podstopnic",
	["parkiet-ilosc"]: "Ilość m2",
	["parkiet-drewno"]: "Rodzaj drewna parkietu",
};
const renamedValue = {
	lakier2: "Ekologiczny lakier dwuskładnikowy",
	true: <CheckIcon color="green" />,
	lakier: "Ekologiczny lakier jednoskładnikowy",
	olej: "Olej / Olejowosk",
	buk: "Buk",
	jesion: "Jesion",
	dab: "Dąb",
	sosna: "Sosna",
	farba : "Farba",
	brak: "Cyklinowanie do samodzielnego wykończenia"
};

export { renamedKeys, renamedValue };
