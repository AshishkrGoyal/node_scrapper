const Jimp = require('jimp');
const fs = require('fs');

var arr=["Team_Profile/Aditya_Singh.png",
    "Team_Profile/Ajay_Kushwaha.png",
    "Team_profile/Akanksha_Maurya_2.png",
    "Team_Profile/Ankita_Vaishali.png",
    "Team_Profile/Anmol_.png",
    "Team_Profile/Anuj_Saraswat_2.png",
    "Team_Profile/Charu_Chauhan_2.png",
    "Team_Profile/Devansh_Alok.png",
    "Team_Profile/Dhristi_Mittal.png",
    "Team_Profile/Hardik_17.png",
    "Team_Profile/Kanishka_New.png",
    "Team_Profile/Kanishka_Parmar.png",
    "Team_Profile/Keya_Kriti.png",
    "Team_Profile/Palash_Rai.png",
    "Team_Profile/Parimal_2.png",
    "Team_Profile/Priya_daBhardwaj.png",
    "Team_Profile/Priyanshi_Gupta.png",
    "Team_Profile/Skandha_Choudhary.png",
    "Team_Profile/Yash_Goel.png",
    "Team_Profile/Aditi_Saxena_1.png"
]

console.log(arr.length);

for(let i=0; i<arr.length; i++)
{
    Jimp.read(arr[i],function (err,Aditi) {
        if(err)
        {
            console.log(err);
            throw err;
        }
        Aditi.resize(300,300).write("New_Images/"+arr[i]);
    })
}


