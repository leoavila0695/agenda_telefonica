import { get } from "http";
import { IContacto } from "./contactos.interface";
import { PersonasModels } from "./models/personas.models";

export class AppRepository{
    private static contactos:IContacto[]=[{
        "id": 1,
        "primerNombre": "Nombre1",
        "segundoNombre": "Segundo1",
        "primerApellido": "Apellido1",
        "segundoApellido": "ApellidoSec1",
        "documento": "1000000001",
        "telefono": "3000000001"
    },
    {
        "id": 2,
        "primerNombre": "Nombre2",
        "segundoNombre": "Segundo2",
        "primerApellido": "Apellido2",
        "segundoApellido": "ApellidoSec2",
        "documento": "1000000002",
        "telefono": "3000000002"
    },
    {
        "id": 3,
        "primerNombre": "Nombre3",
        "segundoNombre": "Segundo3",
        "primerApellido": "Apellido3",
        "segundoApellido": "ApellidoSec3",
        "documento": "1000000003",
        "telefono": "3000000003"
    },
    {
        "id": 4,
        "primerNombre": "Nombre4",
        "segundoNombre": "Segundo4",
        "primerApellido": "Apellido4",
        "segundoApellido": "ApellidoSec4",
        "documento": "1000000004",
        "telefono": "3000000004"
    },
    {
        "id": 5,
        "primerNombre": "Nombre5",
        "segundoNombre": "Segundo5",
        "primerApellido": "Apellido5",
        "segundoApellido": "ApellidoSec5",
        "documento": "1000000005",
        "telefono": "3000000005"
    },
    {
        "id": 6,
        "primerNombre": "Nombre6",
        "segundoNombre": "Segundo6",
        "primerApellido": "Apellido6",
        "segundoApellido": "ApellidoSec6",
        "documento": "1000000006",
        "telefono": "3000000006"
    },
    {
        "id": 7,
        "primerNombre": "Nombre7",
        "segundoNombre": "Segundo7",
        "primerApellido": "Apellido7",
        "segundoApellido": "ApellidoSec7",
        "documento": "1000000007",
        "telefono": "3000000007"
    },
    {
        "id": 8,
        "primerNombre": "Nombre8",
        "segundoNombre": "Segundo8",
        "primerApellido": "Apellido8",
        "segundoApellido": "ApellidoSec8",
        "documento": "1000000008",
        "telefono": "3000000008"
    },
    {
        "id": 9,
        "primerNombre": "Nombre9",
        "segundoNombre": "Segundo9",
        "primerApellido": "Apellido9",
        "segundoApellido": "ApellidoSec9",
        "documento": "1000000009",
        "telefono": "3000000009"
    },
    {
        "id": 10,
        "primerNombre": "Nombre10",
        "segundoNombre": "Segundo10",
        "primerApellido": "Apellido10",
        "segundoApellido": "ApellidoSec10",
        "documento": "1000000010",
        "telefono": "3000000010"
    },
    {
        "id": 11,
        "primerNombre": "Nombre11",
        "segundoNombre": "Segundo11",
        "primerApellido": "Apellido11",
        "segundoApellido": "ApellidoSec11",
        "documento": "1000000011",
        "telefono": "3000000011"
    },
    {
        "id": 12,
        "primerNombre": "Nombre12",
        "segundoNombre": "Segundo12",
        "primerApellido": "Apellido12",
        "segundoApellido": "ApellidoSec12",
        "documento": "1000000012",
        "telefono": "3000000012"
    },
    {
        "id": 13,
        "primerNombre": "Nombre13",
        "segundoNombre": "Segundo13",
        "primerApellido": "Apellido13",
        "segundoApellido": "ApellidoSec13",
        "documento": "1000000013",
        "telefono": "3000000013"
    },
    {
        "id": 14,
        "primerNombre": "Nombre14",
        "segundoNombre": "Segundo14",
        "primerApellido": "Apellido14",
        "segundoApellido": "ApellidoSec14",
        "documento": "1000000014",
        "telefono": "3000000014"
    },
    {
        "id": 15,
        "primerNombre": "Nombre15",
        "segundoNombre": "Segundo15",
        "primerApellido": "Apellido15",
        "segundoApellido": "ApellidoSec15",
        "documento": "1000000015",
        "telefono": "3000000015"
    },
    {
        "id": 16,
        "primerNombre": "Nombre16",
        "segundoNombre": "Segundo16",
        "primerApellido": "Apellido16",
        "segundoApellido": "ApellidoSec16",
        "documento": "1000000016",
        "telefono": "3000000016"
    },
    {
        "id": 17,
        "primerNombre": "Nombre17",
        "segundoNombre": "Segundo17",
        "primerApellido": "Apellido17",
        "segundoApellido": "ApellidoSec17",
        "documento": "1000000017",
        "telefono": "3000000017"
    },
    {
        "id": 18,
        "primerNombre": "Nombre18",
        "segundoNombre": "Segundo18",
        "primerApellido": "Apellido18",
        "segundoApellido": "ApellidoSec18",
        "documento": "1000000018",
        "telefono": "3000000018"
    },
    {
        "id": 19,
        "primerNombre": "Nombre19",
        "segundoNombre": "Segundo19",
        "primerApellido": "Apellido19",
        "segundoApellido": "ApellidoSec19",
        "documento": "1000000019",
        "telefono": "3000000019"
    },
    {
        "id": 20,
        "primerNombre": "Nombre20",
        "segundoNombre": "Segundo20",
        "primerApellido": "Apellido20",
        "segundoApellido": "ApellidoSec20",
        "documento": "1000000020",
        "telefono": "3000000020"
    },
    {
        "id": 21,
        "primerNombre": "Nombre21",
        "segundoNombre": "Segundo21",
        "primerApellido": "Apellido21",
        "segundoApellido": "ApellidoSec21",
        "documento": "1000000021",
        "telefono": "3000000021"
    },
    {
        "id": 22,
        "primerNombre": "Nombre22",
        "segundoNombre": "Segundo22",
        "primerApellido": "Apellido22",
        "segundoApellido": "ApellidoSec22",
        "documento": "1000000022",
        "telefono": "3000000022"
    },
    {
        "id": 23,
        "primerNombre": "Nombre23",
        "segundoNombre": "Segundo23",
        "primerApellido": "Apellido23",
        "segundoApellido": "ApellidoSec23",
        "documento": "1000000023",
        "telefono": "3000000023"
    },
    {
        "id": 24,
        "primerNombre": "Nombre24",
        "segundoNombre": "Segundo24",
        "primerApellido": "Apellido24",
        "segundoApellido": "ApellidoSec24",
        "documento": "1000000024",
        "telefono": "3000000024"
    },
    {
        "id": 25,
        "primerNombre": "Nombre25",
        "segundoNombre": "Segundo25",
        "primerApellido": "Apellido25",
        "segundoApellido": "ApellidoSec25",
        "documento": "1000000025",
        "telefono": "3000000025"
    },
    {
        "id": 26,
        "primerNombre": "Nombre26",
        "segundoNombre": "Segundo26",
        "primerApellido": "Apellido26",
        "segundoApellido": "ApellidoSec26",
        "documento": "1000000026",
        "telefono": "3000000026"
    },
    {
        "id": 27,
        "primerNombre": "Nombre27",
        "segundoNombre": "Segundo27",
        "primerApellido": "Apellido27",
        "segundoApellido": "ApellidoSec27",
        "documento": "1000000027",
        "telefono": "3000000027"
    },
    {
        "id": 28,
        "primerNombre": "Nombre28",
        "segundoNombre": "Segundo28",
        "primerApellido": "Apellido28",
        "segundoApellido": "ApellidoSec28",
        "documento": "1000000028",
        "telefono": "3000000028"
    },
    {
        "id": 29,
        "primerNombre": "Nombre29",
        "segundoNombre": "Segundo29",
        "primerApellido": "Apellido29",
        "segundoApellido": "ApellidoSec29",
        "documento": "1000000029",
        "telefono": "3000000029"
    },
    {
        "id": 30,
        "primerNombre": "Nombre30",
        "segundoNombre": "Segundo30",
        "primerApellido": "Apellido30",
        "segundoApellido": "ApellidoSec30",
        "documento": "1000000030",
        "telefono": "3000000030"
    },
    {
        "id": 31,
        "primerNombre": "Nombre31",
        "segundoNombre": "Segundo31",
        "primerApellido": "Apellido31",
        "segundoApellido": "ApellidoSec31",
        "documento": "1000000031",
        "telefono": "3000000031"
    },
    {
        "id": 32,
        "primerNombre": "Nombre32",
        "segundoNombre": "Segundo32",
        "primerApellido": "Apellido32",
        "segundoApellido": "ApellidoSec32",
        "documento": "1000000032",
        "telefono": "3000000032"
    },
    {
        "id": 33,
        "primerNombre": "Nombre33",
        "segundoNombre": "Segundo33",
        "primerApellido": "Apellido33",
        "segundoApellido": "ApellidoSec33",
        "documento": "1000000033",
        "telefono": "3000000033"
    },
    {
        "id": 34,
        "primerNombre": "Nombre34",
        "segundoNombre": "Segundo34",
        "primerApellido": "Apellido34",
        "segundoApellido": "ApellidoSec34",
        "documento": "1000000034",
        "telefono": "3000000034"
    },
    {
        "id": 35,
        "primerNombre": "Nombre35",
        "segundoNombre": "Segundo35",
        "primerApellido": "Apellido35",
        "segundoApellido": "ApellidoSec35",
        "documento": "1000000035",
        "telefono": "3000000035"
    },
    {
        "id": 36,
        "primerNombre": "Nombre36",
        "segundoNombre": "Segundo36",
        "primerApellido": "Apellido36",
        "segundoApellido": "ApellidoSec36",
        "documento": "1000000036",
        "telefono": "3000000036"
    },
    {
        "id": 37,
        "primerNombre": "Nombre37",
        "segundoNombre": "Segundo37",
        "primerApellido": "Apellido37",
        "segundoApellido": "ApellidoSec37",
        "documento": "1000000037",
        "telefono": "3000000037"
    },
    {
        "id": 38,
        "primerNombre": "Nombre38",
        "segundoNombre": "Segundo38",
        "primerApellido": "Apellido38",
        "segundoApellido": "ApellidoSec38",
        "documento": "1000000038",
        "telefono": "3000000038"
    },
    {
        "id": 39,
        "primerNombre": "Nombre39",
        "segundoNombre": "Segundo39",
        "primerApellido": "Apellido39",
        "segundoApellido": "ApellidoSec39",
        "documento": "1000000039",
        "telefono": "3000000039"
    },
    {
        "id": 40,
        "primerNombre": "Nombre40",
        "segundoNombre": "Segundo40",
        "primerApellido": "Apellido40",
        "segundoApellido": "ApellidoSec40",
        "documento": "1000000040",
        "telefono": "3000000040"
    },
    {
        "id": 41,
        "primerNombre": "Nombre41",
        "segundoNombre": "Segundo41",
        "primerApellido": "Apellido41",
        "segundoApellido": "ApellidoSec41",
        "documento": "1000000041",
        "telefono": "3000000041"
    },
    {
        "id": 42,
        "primerNombre": "Nombre42",
        "segundoNombre": "Segundo42",
        "primerApellido": "Apellido42",
        "segundoApellido": "ApellidoSec42",
        "documento": "1000000042",
        "telefono": "3000000042"
    },
    {
        "id": 43,
        "primerNombre": "Nombre43",
        "segundoNombre": "Segundo43",
        "primerApellido": "Apellido43",
        "segundoApellido": "ApellidoSec43",
        "documento": "1000000043",
        "telefono": "3000000043"
    },
    {
        "id": 44,
        "primerNombre": "Nombre44",
        "segundoNombre": "Segundo44",
        "primerApellido": "Apellido44",
        "segundoApellido": "ApellidoSec44",
        "documento": "1000000044",
        "telefono": "3000000044"
    },
    {
        "id": 45,
        "primerNombre": "Nombre45",
        "segundoNombre": "Segundo45",
        "primerApellido": "Apellido45",
        "segundoApellido": "ApellidoSec45",
        "documento": "1000000045",
        "telefono": "3000000045"
    },
    {
        "id": 46,
        "primerNombre": "Nombre46",
        "segundoNombre": "Segundo46",
        "primerApellido": "Apellido46",
        "segundoApellido": "ApellidoSec46",
        "documento": "1000000046",
        "telefono": "3000000046"
    },
    {
        "id": 47,
        "primerNombre": "Nombre47",
        "segundoNombre": "Segundo47",
        "primerApellido": "Apellido47",
        "segundoApellido": "ApellidoSec47",
        "documento": "1000000047",
        "telefono": "3000000047"
    },
    {
        "id": 48,
        "primerNombre": "Nombre48",
        "segundoNombre": "Segundo48",
        "primerApellido": "Apellido48",
        "segundoApellido": "ApellidoSec48",
        "documento": "1000000048",
        "telefono": "3000000048"
    },
    {
        "id": 49,
        "primerNombre": "Nombre49",
        "segundoNombre": "Segundo49",
        "primerApellido": "Apellido49",
        "segundoApellido": "ApellidoSec49",
        "documento": "1000000049",
        "telefono": "3000000049"
    },
    {
        "id": 50,
        "primerNombre": "Nombre50",
        "segundoNombre": "Segundo50",
        "primerApellido": "Apellido50",
        "segundoApellido": "ApellidoSec50",
        "documento": "1000000050",
        "telefono": "3000000050"
    },
    {
        "id": 51,
        "primerNombre": "Nombre51",
        "segundoNombre": "Segundo51",
        "primerApellido": "Apellido51",
        "segundoApellido": "ApellidoSec51",
        "documento": "1000000051",
        "telefono": "3000000051"
    },
    {
        "id": 52,
        "primerNombre": "Nombre52",
        "segundoNombre": "Segundo52",
        "primerApellido": "Apellido52",
        "segundoApellido": "ApellidoSec52",
        "documento": "1000000052",
        "telefono": "3000000052"
    },
    {
        "id": 53,
        "primerNombre": "Nombre53",
        "segundoNombre": "Segundo53",
        "primerApellido": "Apellido53",
        "segundoApellido": "ApellidoSec53",
        "documento": "1000000053",
        "telefono": "3000000053"
    },
    {
        "id": 54,
        "primerNombre": "Nombre54",
        "segundoNombre": "Segundo54",
        "primerApellido": "Apellido54",
        "segundoApellido": "ApellidoSec54",
        "documento": "1000000054",
        "telefono": "3000000054"
    },
    {
        "id": 55,
        "primerNombre": "Nombre55",
        "segundoNombre": "Segundo55",
        "primerApellido": "Apellido55",
        "segundoApellido": "ApellidoSec55",
        "documento": "1000000055",
        "telefono": "3000000055"
    },
    {
        "id": 56,
        "primerNombre": "Nombre56",
        "segundoNombre": "Segundo56",
        "primerApellido": "Apellido56",
        "segundoApellido": "ApellidoSec56",
        "documento": "1000000056",
        "telefono": "3000000056"
    },
    {
        "id": 57,
        "primerNombre": "Nombre57",
        "segundoNombre": "Segundo57",
        "primerApellido": "Apellido57",
        "segundoApellido": "ApellidoSec57",
        "documento": "1000000057",
        "telefono": "3000000057"
    },
    {
        "id": 58,
        "primerNombre": "Nombre58",
        "segundoNombre": "Segundo58",
        "primerApellido": "Apellido58",
        "segundoApellido": "ApellidoSec58",
        "documento": "1000000058",
        "telefono": "3000000058"
    },
    {
        "id": 59,
        "primerNombre": "Nombre59",
        "segundoNombre": "Segundo59",
        "primerApellido": "Apellido59",
        "segundoApellido": "ApellidoSec59",
        "documento": "1000000059",
        "telefono": "3000000059"
    },
    {
        "id": 60,
        "primerNombre": "Nombre60",
        "segundoNombre": "Segundo60",
        "primerApellido": "Apellido60",
        "segundoApellido": "ApellidoSec60",
        "documento": "1000000060",
        "telefono": "3000000060"
    },
    {
        "id": 61,
        "primerNombre": "Nombre61",
        "segundoNombre": "Segundo61",
        "primerApellido": "Apellido61",
        "segundoApellido": "ApellidoSec61",
        "documento": "1000000061",
        "telefono": "3000000061"
    },
    {
        "id": 62,
        "primerNombre": "Nombre62",
        "segundoNombre": "Segundo62",
        "primerApellido": "Apellido62",
        "segundoApellido": "ApellidoSec62",
        "documento": "1000000062",
        "telefono": "3000000062"
    },
    {
        "id": 63,
        "primerNombre": "Nombre63",
        "segundoNombre": "Segundo63",
        "primerApellido": "Apellido63",
        "segundoApellido": "ApellidoSec63",
        "documento": "1000000063",
        "telefono": "3000000063"
    },
    {
        "id": 64,
        "primerNombre": "Nombre64",
        "segundoNombre": "Segundo64",
        "primerApellido": "Apellido64",
        "segundoApellido": "ApellidoSec64",
        "documento": "1000000064",
        "telefono": "3000000064"
    },
    {
        "id": 65,
        "primerNombre": "Nombre65",
        "segundoNombre": "Segundo65",
        "primerApellido": "Apellido65",
        "segundoApellido": "ApellidoSec65",
        "documento": "1000000065",
        "telefono": "3000000065"
    },
    {
        "id": 66,
        "primerNombre": "Nombre66",
        "segundoNombre": "Segundo66",
        "primerApellido": "Apellido66",
        "segundoApellido": "ApellidoSec66",
        "documento": "1000000066",
        "telefono": "3000000066"
    },
    {
        "id": 67,
        "primerNombre": "Nombre67",
        "segundoNombre": "Segundo67",
        "primerApellido": "Apellido67",
        "segundoApellido": "ApellidoSec67",
        "documento": "1000000067",
        "telefono": "3000000067"
    },
    {
        "id": 68,
        "primerNombre": "Nombre68",
        "segundoNombre": "Segundo68",
        "primerApellido": "Apellido68",
        "segundoApellido": "ApellidoSec68",
        "documento": "1000000068",
        "telefono": "3000000068"
    },
    {
        "id": 69,
        "primerNombre": "Nombre69",
        "segundoNombre": "Segundo69",
        "primerApellido": "Apellido69",
        "segundoApellido": "ApellidoSec69",
        "documento": "1000000069",
        "telefono": "3000000069"
    },
    {
        "id": 70,
        "primerNombre": "Nombre70",
        "segundoNombre": "Segundo70",
        "primerApellido": "Apellido70",
        "segundoApellido": "ApellidoSec70",
        "documento": "1000000070",
        "telefono": "3000000070"
    },
    {
        "id": 71,
        "primerNombre": "Nombre71",
        "segundoNombre": "Segundo71",
        "primerApellido": "Apellido71",
        "segundoApellido": "ApellidoSec71",
        "documento": "1000000071",
        "telefono": "3000000071"
    },
    {
        "id": 72,
        "primerNombre": "Nombre72",
        "segundoNombre": "Segundo72",
        "primerApellido": "Apellido72",
        "segundoApellido": "ApellidoSec72",
        "documento": "1000000072",
        "telefono": "3000000072"
    },
    {
        "id": 73,
        "primerNombre": "Nombre73",
        "segundoNombre": "Segundo73",
        "primerApellido": "Apellido73",
        "segundoApellido": "ApellidoSec73",
        "documento": "1000000073",
        "telefono": "3000000073"
    },
    {
        "id": 74,
        "primerNombre": "Nombre74",
        "segundoNombre": "Segundo74",
        "primerApellido": "Apellido74",
        "segundoApellido": "ApellidoSec74",
        "documento": "1000000074",
        "telefono": "3000000074"
    },
    {
        "id": 75,
        "primerNombre": "Nombre75",
        "segundoNombre": "Segundo75",
        "primerApellido": "Apellido75",
        "segundoApellido": "ApellidoSec75",
        "documento": "1000000075",
        "telefono": "3000000075"
    },
    {
        "id": 76,
        "primerNombre": "Nombre76",
        "segundoNombre": "Segundo76",
        "primerApellido": "Apellido76",
        "segundoApellido": "ApellidoSec76",
        "documento": "1000000076",
        "telefono": "3000000076"
    },
    {
        "id": 77,
        "primerNombre": "Nombre77",
        "segundoNombre": "Segundo77",
        "primerApellido": "Apellido77",
        "segundoApellido": "ApellidoSec77",
        "documento": "1000000077",
        "telefono": "3000000077"
    },
    {
        "id": 78,
        "primerNombre": "Nombre78",
        "segundoNombre": "Segundo78",
        "primerApellido": "Apellido78",
        "segundoApellido": "ApellidoSec78",
        "documento": "1000000078",
        "telefono": "3000000078"
    },
    {
        "id": 79,
        "primerNombre": "Nombre79",
        "segundoNombre": "Segundo79",
        "primerApellido": "Apellido79",
        "segundoApellido": "ApellidoSec79",
        "documento": "1000000079",
        "telefono": "3000000079"
    },
    {
        "id": 80,
        "primerNombre": "Nombre80",
        "segundoNombre": "Segundo80",
        "primerApellido": "Apellido80",
        "segundoApellido": "ApellidoSec80",
        "documento": "1000000080",
        "telefono": "3000000080"
    },
    {
        "id": 81,
        "primerNombre": "Nombre81",
        "segundoNombre": "Segundo81",
        "primerApellido": "Apellido81",
        "segundoApellido": "ApellidoSec81",
        "documento": "1000000081",
        "telefono": "3000000081"
    },
    {
        "id": 82,
        "primerNombre": "Nombre82",
        "segundoNombre": "Segundo82",
        "primerApellido": "Apellido82",
        "segundoApellido": "ApellidoSec82",
        "documento": "1000000082",
        "telefono": "3000000082"
    },
    {
        "id": 83,
        "primerNombre": "Nombre83",
        "segundoNombre": "Segundo83",
        "primerApellido": "Apellido83",
        "segundoApellido": "ApellidoSec83",
        "documento": "1000000083",
        "telefono": "3000000083"
    },
    {
        "id": 84,
        "primerNombre": "Nombre84",
        "segundoNombre": "Segundo84",
        "primerApellido": "Apellido84",
        "segundoApellido": "ApellidoSec84",
        "documento": "1000000084",
        "telefono": "3000000084"
    },
    {
        "id": 85,
        "primerNombre": "Nombre85",
        "segundoNombre": "Segundo85",
        "primerApellido": "Apellido85",
        "segundoApellido": "ApellidoSec85",
        "documento": "1000000085",
        "telefono": "3000000085"
    },
    {
        "id": 86,
        "primerNombre": "Nombre86",
        "segundoNombre": "Segundo86",
        "primerApellido": "Apellido86",
        "segundoApellido": "ApellidoSec86",
        "documento": "1000000086",
        "telefono": "3000000086"
    },
    {
        "id": 87,
        "primerNombre": "Nombre87",
        "segundoNombre": "Segundo87",
        "primerApellido": "Apellido87",
        "segundoApellido": "ApellidoSec87",
        "documento": "1000000087",
        "telefono": "3000000087"
    },
    {
        "id": 88,
        "primerNombre": "Nombre88",
        "segundoNombre": "Segundo88",
        "primerApellido": "Apellido88",
        "segundoApellido": "ApellidoSec88",
        "documento": "1000000088",
        "telefono": "3000000088"
    },
    {
        "id": 89,
        "primerNombre": "Nombre89",
        "segundoNombre": "Segundo89",
        "primerApellido": "Apellido89",
        "segundoApellido": "ApellidoSec89",
        "documento": "1000000089",
        "telefono": "3000000089"
    },
    {
        "id": 90,
        "primerNombre": "Nombre90",
        "segundoNombre": "Segundo90",
        "primerApellido": "Apellido90",
        "segundoApellido": "ApellidoSec90",
        "documento": "1000000090",
        "telefono": "3000000090"
    },
    {
        "id": 91,
        "primerNombre": "Nombre91",
        "segundoNombre": "Segundo91",
        "primerApellido": "Apellido91",
        "segundoApellido": "ApellidoSec91",
        "documento": "1000000091",
        "telefono": "3000000091"
    },
    {
        "id": 92,
        "primerNombre": "Nombre92",
        "segundoNombre": "Segundo92",
        "primerApellido": "Apellido92",
        "segundoApellido": "ApellidoSec92",
        "documento": "1000000092",
        "telefono": "3000000092"
    },
    {
        "id": 93,
        "primerNombre": "Nombre93",
        "segundoNombre": "Segundo93",
        "primerApellido": "Apellido93",
        "segundoApellido": "ApellidoSec93",
        "documento": "1000000093",
        "telefono": "3000000093"
    },
    {
        "id": 94,
        "primerNombre": "Nombre94",
        "segundoNombre": "Segundo94",
        "primerApellido": "Apellido94",
        "segundoApellido": "ApellidoSec94",
        "documento": "1000000094",
        "telefono": "3000000094"
    },
    {
        "id": 95,
        "primerNombre": "Nombre95",
        "segundoNombre": "Segundo95",
        "primerApellido": "Apellido95",
        "segundoApellido": "ApellidoSec95",
        "documento": "1000000095",
        "telefono": "3000000095"
    },
    {
        "id": 96,
        "primerNombre": "Nombre96",
        "segundoNombre": "Segundo96",
        "primerApellido": "Apellido96",
        "segundoApellido": "ApellidoSec96",
        "documento": "1000000096",
        "telefono": "3000000096"
    },
    {
        "id": 97,
        "primerNombre": "Nombre97",
        "segundoNombre": "Segundo97",
        "primerApellido": "Apellido97",
        "segundoApellido": "ApellidoSec97",
        "documento": "1000000097",
        "telefono": "3000000097"
    },
    {
        "id": 98,
        "primerNombre": "Nombre98",
        "segundoNombre": "Segundo98",
        "primerApellido": "Apellido98",
        "segundoApellido": "ApellidoSec98",
        "documento": "1000000098",
        "telefono": "3000000098"
    },
    {
        "id": 99,
        "primerNombre": "Nombre99",
        "segundoNombre": "Segundo99",
        "primerApellido": "Apellido99",
        "segundoApellido": "ApellidoSec99",
        "documento": "1000000099",
        "telefono": "3000000099"
    },
    {
        "id": 100,
        "primerNombre": "Nombre100",
        "segundoNombre": "Segundo100",
        "primerApellido": "Apellido100",
        "segundoApellido": "ApellidoSec100",
        "documento": "1000000100",
        "telefono": "3000000100"
    
    }];
    
    public static mostrarContactos(paginaActual = 1, registrosPorPagina = 10){
        return PersonasModels.findAndCountAll();
    }
    public static obtenerContacto(id: number){

        return PersonasModels.findByPk(id);
    }


    public static eliminarContacto(id: number):IContacto[] {
        const index = this.contactos.findIndex(contacto => contacto.id === id);
        
        this.contactos.splice(index, 1);
        return this.contactos
        }


    public static crearContacto(nuevoContacto: IContacto): IContacto {
        const nuevoId = this.contactos.length > 0 ? Math.max(...this.contactos.map(c => c.id)) + 1 : 1;
        const contacto = {...nuevoContacto, id: nuevoId };
        this.contactos.push(contacto);
        return contacto;
    }
    
    
    public static actualizarContacto(id: number,datosActualizados: IContacto): IContacto | undefined {
            const index = this.contactos.findIndex(contacto => contacto.id === id);
            if (index !== -1) {
                this.contactos[index] = { ...this.contactos[index], ...datosActualizados };
                return this.contactos[index];
            }
            return undefined;
    }
}