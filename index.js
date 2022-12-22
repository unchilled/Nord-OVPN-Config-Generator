const args = process.argv.slice(2);
const fetch = require('node-fetch');
const fs = require('fs');

if(args.length == 0) {
    console.log("Usage: node index.js <country> [city]")
    process.exit(1)
}

let country = "Unknown";

if(args[0].toLowerCase() == "unitedstates" || args[0].toLowerCase() == "unitedstatesofamerica" || args[0].toLowerCase() == "us" || args[0].toLowerCase() == "usa") {
    country = "United States";
}
    
if(args[0].toLowerCase() == "canada" || args[0].toLowerCase() == "ca") {
    country = "Canada";
}
    
if(args[0].toLowerCase() == "brazil" || args[0].toLowerCase() == "br") {
    country = "Brazil";
}
    
if(args[0].toLowerCase() == "argentina" || args[0].toLowerCase() == "ar") {
    country = "Argentina";
}
    
if(args[0].toLowerCase() == "mexico" || args[0].toLowerCase() == "mx") {
    country = "Mexico";
}

if(args[0].toLowerCase() == "costarica" || args[0].toLowerCase() == "cr") {
    country = "Costa Rica";
}
    
if(args[0].toLowerCase() == "chile" || args[0].toLowerCase() == "cl") {
    country = "Chile";
}
    
if(args[0].toLowerCase() == "unitedkingdom" || args[0].toLowerCase() == "uk" || args[0].toLowerCase() == "gb") {
    country = "United Kingdom";
}
    
if(args[0].toLowerCase() == "germany" || args[0].toLowerCase() == "de") {
    country = "Germany";
}
    
if(args[0].toLowerCase() == "netherlands" || args[0].toLowerCase() == "holland" || args[0].toLowerCase() == "nl") {
    country = "Netherlands";
}
    
if(args[0].toLowerCase() == "france" || args[0].toLowerCase() == "fr") {
    country = "France";
}
    
if(args[0].toLowerCase() == "sweden" || args[0].toLowerCase() == "se") {
    country = "Sweden";
}
    
if(args[0].toLowerCase() == "switzerland" || args[0].toLowerCase() == "ch") {
    country = "Switzerland";
}
    
if(args[0].toLowerCase() == "belgium" || args[0].toLowerCase() == "be") {
    country = "Belgium";
}
    
if(args[0].toLowerCase() == "denmark" || args[0].toLowerCase() == "dk") {
    country = "Denmark";
}
    
if(args[0].toLowerCase() == "norway" || args[0].toLowerCase() == "no") {
    country = "Norway";
}

if(args[0].toLowerCase() == "poland" || args[0].toLowerCase() == "pl") {
    country = "Poland";
}
    
if(args[0].toLowerCase() == "ireland" || args[0].toLowerCase() == "ie") {
    country = "Ireland";
}
    
if(args[0].toLowerCase() == "czechrepublic" || args[0].toLowerCase() == "czech" || args[0].toLowerCase() == "cz") {
    country = "Czech Republic";
}
    
if(args[0].toLowerCase() == "italy" || args[0].toLowerCase() == "it") {
    country = "Italy";
}
    
if(args[0].toLowerCase() == "spain" || args[0].toLowerCase() == "es") {
    country = "Spain";
}

if(args[0].toLowerCase() == "finland" || args[0].toLowerCase() == "fi") {
    country = "Finland";
}
    
if(args[0].toLowerCase() == "serbia" || args[0].toLowerCase() == "rs") {
    country = "Serbia";
}
    
if(args[0].toLowerCase() == "austria" || args[0].toLowerCase() == "at") {
    country = "Austria";
}
    
if(args[0].toLowerCase() == "slovakia" || args[0].toLowerCase() == "sk") {
    country = "Slovakia";
}
    
if(args[0].toLowerCase() == "slovenia" || args[0].toLowerCase() == "si") {
    country = "Slovenia";
}
    
if(args[0].toLowerCase() == "bulgaria" || args[0].toLowerCase() == "bg") {
    country = "Bulgaria";
}
    
if(args[0].toLowerCase() == "hungary" || args[0].toLowerCase() == "hu") {
    country = "Hungary";
}
    
if(args[0].toLowerCase() == "latvia" || args[0].toLowerCase() == "lv") {
    country = "Latvia";
}
    
if(args[0].toLowerCase() == "romania" || args[0].toLowerCase() == "ro") {
    country = "Romania";
}
    
if(args[0].toLowerCase() == "portugal" || args[0].toLowerCase() == "pt") {
    country = "Portugal";
}
    
if(args[0].toLowerCase() == "luxembourg" || args[0].toLowerCase() == "lu") {
    country = "Luxembourg";
}

if(args[0].toLowerCase() == "ukraine" || args[0].toLowerCase() == "ua") {
    country = "Ukraine";
}
    
if(args[0].toLowerCase() == "greece" || args[0].toLowerCase() == "gr") {
    country = "Greece";
}

if(args[0].toLowerCase() == "estonia" || args[0].toLowerCase() == "ee") {
    country = "Estonia";
}
    
if(args[0].toLowerCase() == "iceland" || args[0].toLowerCase() == "is") {
    country = "Iceland";
}
    
if(args[0].toLowerCase() == "albania" || args[0].toLowerCase() == "al") {
    country = "Albania";
}
    
if(args[0].toLowerCase() == "cyprus" || args[0].toLowerCase() == "cy") {
    country = "Cyprus";
}
    
if(args[0].toLowerCase() == "croatia" || args[0].toLowerCase() == "hr") {
    country = "Croatia";
}
    
if(args[0].toLowerCase() == "moldova" || args[0].toLowerCase() == "md") {
    country = "Moldova";
}
    
if(args[0].toLowerCase() == "bosniaandherzegovina" || args[0].toLowerCase() == "bosnia" || args[0].toLowerCase() == "ba") {
    country = "Bosnia and Herzegovina";
}
    
if(args[0].toLowerCase() == "georgia" || args[0].toLowerCase() == "ge") {
    country = "Georgia";
}
    
if(args[0].toLowerCase() == "northmacedonia" || args[0].toLowerCase() == "macedonia" || args[0].toLowerCase() == "mk") {
    country = "North Macedonia";
}
    
if(args[0].toLowerCase() == "lithuania" || args[0].toLowerCase() == "lt") {
    country = "Lithuania";
}
    
if(args[0].toLowerCase() == "australia" || args[0].toLowerCase() == "au") {
    country = "Australia";
}
    
if(args[0].toLowerCase() == "singapore" || args[0].toLowerCase() == "sg") {
    country = "Singapore";
}
    
if(args[0].toLowerCase() == "japan" || args[0].toLowerCase() == "jp") {
    country = "Japan";
}
    
if(args[0].toLowerCase() == "hongkong" || args[0].toLowerCase() == "hk") {
    country = "Hong Kong";
}
    
if(args[0].toLowerCase() == "newzealand" || args[0].toLowerCase() == "nz") {
    country = "New Zealand";
}

if(args[0].toLowerCase() == "taiwan" || args[0].toLowerCase() == "tw") {
    country = "Taiwan";
}
    
if(args[0].toLowerCase() == "vietnam" || args[0].toLowerCase() == "vn") {
    country = "Vietnam";
}
    
if(args[0].toLowerCase() == "indonesia" || args[0].toLowerCase() == "id") {
    country = "Indonesia";
}
    
if(args[0].toLowerCase() == "malaysia" || args[0].toLowerCase() == "my") {
    country = "Malaysia";
}
    
if(args[0].toLowerCase() == "southkorea" || args[0].toLowerCase() == "korea" || args[0].toLowerCase() == "kr") {
    country = "South Korea";
}
    
if(args[0].toLowerCase() == "thailand" || args[0].toLowerCase() == "th") {
    country = "Thailand";
}
    
if(args[0].toLowerCase() == "southafrica" || args[0].toLowerCase() == "za") {
    country = "South Africa";
}
    
if(args[0].toLowerCase() == "unitedarabemirates" || args[0].toLowerCase() == "uae" || args[0].toLowerCase() == "ae") {
    country = "United Arab Emirates";
}
    
if(args[0].toLowerCase() == "israel" || args[0].toLowerCase() == "il") {
    country = "Israel";
}
    
if(args[0].toLowerCase() == "turkey" || args[0].toLowerCase() == "tr") {
    country = "Turkey";
}

var unknowncountry = false;

if(country == "Unknown") {
    unknowncountry = true
    country = args[0]
}

let countryfn = country.replace(" ", "").toLowerCase()

let filename = countryfn + ".ovpn"

let city = "";

let lat = false;

if(args.length >= 2) {
    let rcity = args[1];

    if(rcity.toLowerCase() == "atlanta" || rcity.toLowerCase() == "atl") {
        city = "Atlanta";
        lat = 33.748888899999997;
    }
        
    if(rcity.toLowerCase() == "buffalo" || rcity.toLowerCase() == "buf") {
        city = "Buffalo";
        lat = 42.8863889;
    }
        
    if(rcity.toLowerCase() == "charlotte" || rcity.toLowerCase() == "cha") {
        city = "Charlotte";
        lat = 35.226944400000001;
    }
        
    if(rcity.toLowerCase() == "chicago" || rcity.toLowerCase() == "chi") {
        city = "Chicago";
        lat = 41.850000000000001;
    }
        
    if(rcity.toLowerCase() == "dallas" || rcity.toLowerCase() == "dal") {
        city = "Dallas";
        lat = 32.783333300000002;
    }
        
    if(rcity.toLowerCase() == "denver" || rcity.toLowerCase() == "den") {
        city = "Denver";
        lat = 39.739166699999998;
    }
        
    if(rcity.toLowerCase() == "kansascity" || rcity.toLowerCase() == "kc") {
        city = "Denver";
        lat = 39.099722200000002;
    }
        
    if(rcity.toLowerCase() == "losangeles" || rcity.toLowerCase() == "la" || rcity.toLowerCase() == "lax") {
        city = "Los Angeles";
        lat = 34.052222200000003;
    }
        
    if(rcity.toLowerCase() == "manassas" || rcity.toLowerCase() == "man") {
        city = "Manassas";
        lat = 38.750833299999996;
    }
        
    if(rcity.toLowerCase() == "miami" || rcity.toLowerCase() == "mia") {
        city = "Miami";
        lat = 25.773888899999999;
    }
        
    if(rcity.toLowerCase() == "newyork" || rcity.toLowerCase() == "nyc" || rcity.toLowerCase() == "newyorkcity") {
        city = "New York";
        lat = 40.7141667;
    }
        
    if(rcity.toLowerCase() == "phoenix" || rcity.toLowerCase() == "phx") {
        city = "Phoenix";
        lat = 33.448333300000002;
    }
        
    if(rcity.toLowerCase() == "saintlouis" || rcity.toLowerCase() == "stl") {
        city = "Saint Louis";
        lat = 38.627222199999999;
    }
        
    if(rcity.toLowerCase() == "saltlakecity" || rcity.toLowerCase() == "slc") {
        city = "Salt Lake City";
        lat = 40.760833300000002;
    }
        
    if(rcity.toLowerCase() == "sanfrancisco" || rcity.toLowerCase() == "sf" || rcity.toLowerCase() == "sfo") {
        city = "San Francisco";
        lat = 37.769813499999998;
    }
        
    if(rcity.toLowerCase() == "seattle" || rcity.toLowerCase() == "sea") {
        city = "Seattle";
        lat = 47.606388899999999;
    }
        
    if(rcity.toLowerCase() == "adelaide" || rcity.toLowerCase() == "ade") {
        city = "Adelaide";
        lat = -34.928660999999998;
    }

    if(rcity.toLowerCase() == "brisbane" || rcity.toLowerCase() == "bri") {
        city = "Brisbane";
        lat = -27.47101;
    }
        
    if(rcity.toLowerCase() == "melbourne" || rcity.toLowerCase() == "mel") {
        city = "Melbourne";
        lat = -37.813938;
    }
        
    if(rcity.toLowerCase() == "perth" || rcity.toLowerCase() == "per") {
        city = "Perth";
        lat = -31.95224;
    }
        
    if(rcity.toLowerCase() == "sydney" || rcity.toLowerCase() == "syd") {
        city = "Sydney";
        lat = -33.861480999999998;
    }
        
    if(rcity.toLowerCase() == "montreal" || rcity.toLowerCase() == "mon") {
        city = "Montreal";
        lat = 45.5;
    }
        
    if(rcity.toLowerCase() == "toronto" || rcity.toLowerCase() == "tor") {
        city = "Toronto";
        lat = 43.666666999999997;
    }
        
    if(rcity.toLowerCase() == "vancouver" || rcity.toLowerCase() == "van") {
        city = "Vancouver";
        lat = 49.25;
    }
        
    if(rcity.toLowerCase() == "berlin" || rcity.toLowerCase() == "ber") {
        city = "Berlin";
        lat = 52.516666999999998;
    }
        
    if(rcity.toLowerCase() == "frankfurt" || rcity.toLowerCase() == "fra") {
        city = "Frankfurt";
        lat = 50.116667;
    }
        
    if(rcity.toLowerCase() == "paris" || rcity.toLowerCase() == "par") {
        city = "Paris";
        lat = 48.866667;
    }
        
    if(rcity.toLowerCase() == "marseille" || rcity.toLowerCase() == "mar") {
        city = "Marseille";
        lat = 43.285412999999998;
    }

    if(lat == false) {
        console.log("The city you entered is not valid. Please enter the name of the city without spaces, and make sure that NordVPN supports that city.")
        process.exit(1)
    }

    filename = countryfn + "_" + city.toLowerCase().replace(" ", "") + ".ovpn";
}

if(fs.existsSync(__dirname + "/output/" + filename)) fs.writeFile(__dirname + "/output/" + filename, "", (err) => { if(err) console.log(err) })
const writer = fs.createWriteStream(__dirname + "/output/" + filename, { flags: 'a' })
writer.write(`client
dev tun
proto tcp\n`)

fetch("https://nordvpn.com/api/server", { method: "Get" }).then(res => res.json()).then((json) => {
    var i = 0;
    var servers = [];
    json.forEach(element => {
        if(lat != false){
            if((element.country.toLowerCase() == country.toLowerCase() || element.flag.toLowerCase() == country.toLowerCase()) && element.location.lat == lat && element.features.openvpn_tcp == true && element.categories[0].name == "Standard VPN servers") {
                console.log(element.ip_address + " - " + element.name)
                servers.push("remote " + element.ip_address + " 443\n")
                i++
            }
        } else {
            if((element.country.toLowerCase() == country.toLowerCase() || element.flag.toLowerCase() == country.toLowerCase()) && element.features.openvpn_tcp == true && element.categories[0].name == "Standard VPN servers") {
                console.log(element.ip_address + " - " + element.name)
                servers.push("remote " + element.ip_address + " 443\n")
                i++
            }
        }
    });
    console.log("Found " + i + " servers")
    if(i > 64) {
        console.log("Randomly selecting 64 servers")
        let chosen = servers.sort(() => .5 - Math.random()).slice(0,64)
        chosen.forEach(line => {writer.write(line)})
    } else {
        servers.forEach(line => {writer.write(line)})
    }
    if(unknowncountry) {
        if(i == 0) {
            console.log("The country you entered is not valid. Please enter the name of the country without spaces, and make sure that NordVPN supports that country.")
            fs.rm(__dirname + "/output/" + filename, (err) => {})
            process.exit(1)
        } else {
            console.log('The country you entered is not in the hardcoded list of available countries. Please contact unchilled#0001 on Discord or open an issue on Github so that it can be added.')
        }
    }
    writer.write(`resolv-retry infinite
remote-random
nobind
tun-mtu 1500
tun-mtu-extra 32
mssfix 1450
persist-key
persist-tun
ping 15
ping-restart 0
ping-timer-rem
reneg-sec 0
comp-lzo no

remote-cert-tls server

auth-user-pass
verb 3
pull
fast-io
cipher AES-256-CBC
auth SHA512
<ca>
-----BEGIN CERTIFICATE-----
MIIFCjCCAvKgAwIBAgIBATANBgkqhkiG9w0BAQ0FADA5MQswCQYDVQQGEwJQQTEQ
MA4GA1UEChMHTm9yZFZQTjEYMBYGA1UEAxMPTm9yZFZQTiBSb290IENBMB4XDTE2
MDEwMTAwMDAwMFoXDTM1MTIzMTIzNTk1OVowOTELMAkGA1UEBhMCUEExEDAOBgNV
BAoTB05vcmRWUE4xGDAWBgNVBAMTD05vcmRWUE4gUm9vdCBDQTCCAiIwDQYJKoZI
hvcNAQEBBQADggIPADCCAgoCggIBAMkr/BYhyo0F2upsIMXwC6QvkZps3NN2/eQF
kfQIS1gql0aejsKsEnmY0Kaon8uZCTXPsRH1gQNgg5D2gixdd1mJUvV3dE3y9FJr
XMoDkXdCGBodvKJyU6lcfEVF6/UxHcbBguZK9UtRHS9eJYm3rpL/5huQMCppX7kU
eQ8dpCwd3iKITqwd1ZudDqsWaU0vqzC2H55IyaZ/5/TnCk31Q1UP6BksbbuRcwOV
skEDsm6YoWDnn/IIzGOYnFJRzQH5jTz3j1QBvRIuQuBuvUkfhx1FEwhwZigrcxXu
MP+QgM54kezgziJUaZcOM2zF3lvrwMvXDMfNeIoJABv9ljw969xQ8czQCU5lMVmA
37ltv5Ec9U5hZuwk/9QO1Z+d/r6Jx0mlurS8gnCAKJgwa3kyZw6e4FZ8mYL4vpRR
hPdvRTWCMJkeB4yBHyhxUmTRgJHm6YR3D6hcFAc9cQcTEl/I60tMdz33G6m0O42s
Qt/+AR3YCY/RusWVBJB/qNS94EtNtj8iaebCQW1jHAhvGmFILVR9lzD0EzWKHkvy
WEjmUVRgCDd6Ne3eFRNS73gdv/C3l5boYySeu4exkEYVxVRn8DhCxs0MnkMHWFK6
MyzXCCn+JnWFDYPfDKHvpff/kLDobtPBf+Lbch5wQy9quY27xaj0XwLyjOltpiST
LWae/Q4vAgMBAAGjHTAbMAwGA1UdEwQFMAMBAf8wCwYDVR0PBAQDAgEGMA0GCSqG
SIb3DQEBDQUAA4ICAQC9fUL2sZPxIN2mD32VeNySTgZlCEdVmlq471o/bDMP4B8g
nQesFRtXY2ZCjs50Jm73B2LViL9qlREmI6vE5IC8IsRBJSV4ce1WYxyXro5rmVg/
k6a10rlsbK/eg//GHoJxDdXDOokLUSnxt7gk3QKpX6eCdh67p0PuWm/7WUJQxH2S
DxsT9vB/iZriTIEe/ILoOQF0Aqp7AgNCcLcLAmbxXQkXYCCSB35Vp06u+eTWjG0/
pyS5V14stGtw+fA0DJp5ZJV4eqJ5LqxMlYvEZ/qKTEdoCeaXv2QEmN6dVqjDoTAo
k0t5u4YRXzEVCfXAC3ocplNdtCA72wjFJcSbfif4BSC8bDACTXtnPC7nD0VndZLp
+RiNLeiENhk0oTC+UVdSc+n2nJOzkCK0vYu0Ads4JGIB7g8IB3z2t9ICmsWrgnhd
NdcOe15BincrGA8avQ1cWXsfIKEjbrnEuEk9b5jel6NfHtPKoHc9mDpRdNPISeVa
wDBM1mJChneHt59Nh8Gah74+TM1jBsw4fhJPvoc7Atcg740JErb904mZfkIEmojC
VPhBHVQ9LHBAdM8qFI2kRK0IynOmAZhexlP/aT/kpEsEPyaZQlnBn3An1CRz8h0S
PApL8PytggYKeQmRhl499+6jLxcZ2IegLfqq41dzIjwHwTMplg+1pKIOVojpWA==
-----END CERTIFICATE-----
</ca>
key-direction 1
<tls-auth>
#
# 2048 bit OpenVPN static key
#
-----BEGIN OpenVPN Static key V1-----
e685bdaf659a25a200e2b9e39e51ff03
0fc72cf1ce07232bd8b2be5e6c670143
f51e937e670eee09d4f2ea5a6e4e6996
5db852c275351b86fc4ca892d78ae002
d6f70d029bd79c4d1c26cf14e9588033
cf639f8a74809f29f72b9d58f9b8f5fe
fc7938eade40e9fed6cb92184abb2cc1
0eb1a296df243b251df0643d53724cdb
5a92a1d6cb817804c4a9319b57d53be5
80815bcfcb2df55018cc83fc43bc7ff8
2d51f9b88364776ee9d12fc85cc7ea5b
9741c4f598c485316db066d52db4540e
212e1518a9bd4828219e24b20d88f598
a196c9de96012090e333519ae18d3509
9427e7b372d348d352dc4c85e18cd4b9
3f8a56ddb2e64eb67adfc9b337157ff4
-----END OpenVPN Static key V1-----
</tls-auth>`);
    if(i == 0) {
        try {
            writer.close()
            fs.rm(__dirname + "/output/" + filename)
        } catch (error) {}
    }
})