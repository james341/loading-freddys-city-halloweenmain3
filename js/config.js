//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "sleekLoad 2";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",
        "image17.jpg",
        "image18.jpg",
        "image19.jpg",
        "image20.jpg",
        "image21.jpg",
        "image22.jpg",

];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "simpsonsIdiotfuneral.ogg", name: "Nations - Installation Music"},
	{ogg: "thisishalloweenmusicb.ogg", name: "Nations - Installation Music"},
	{ogg: "twojunkyhappyhalloweenmusicbox.ogg", name: "Nations - Installation Music"},
	{ogg: "homeundertale.ogg", name: "Nations - Installation Music"},
	{ogg: "ghostbusterdsaf.ogg", name: "Nations - Installation Music"},
	{ogg: "freehmusic.ogg", name: "Nations - Installation Music"},
	{ogg: "junkyhappyhalloweenmusicbox.ogg", name: "Nations - Installation Music"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Under any circumstances, sky bases are not allowed. According to Rule 12 States, dumping on rooftops is NOT ALLOWED!",
	"Disrespecting any of our players and/or staff members for any reason, under any circumstances, is strongly forbidden!",
	"Only hold alt and walk when you're not triggered. Don’t kill people who looked at your knee due to the SWEP!",
	"These rules are in place for the general health of the community. They exist for the sole purpose of helping the community prosper and expand!",
	"All KOS Rules Apply will be allowed but only follow under the default KOS rules for the section, you can use this or you can manually do your KOS Rules!",
	"Users with the exiled status have earned it for going above and beyond to receive multiple bans within our communities and/or have tried to lodge a dispute or even try to chargeback (as it's against our policy of refunds)—being exiled makes you defined as an  outcast Users who were exiled are not to be mentioned within the community!",
	"If it's serious or a joke, about DDOS or DOXING, even in RR. This will, as stated in the General Rules, almost immediately result in a Perm Ban!",
	"If you're asking a question in the forums, the topic should include as much information as possible. This allows you to get a much faster response, rather than wasting the first few posts on requesting information!",
	"You may not kill someone using discrimination based upon their race, sexual orientation, sex, etc. Doing such will be considered a higher count of RDM, and is subject to an immediate ban!",
	"Exploiting is strictly forbidden. Our servers are designed to be as minimalistic with glitches and exploits as possible, however, it is not fully guaranteed that some glitches and exploits can slip by unnoticed. Should you find anything that needs to come to our attention, please submit a bug report immediately!",
	"Do not attempt/say you are going to DDOS/crash the server. - Don't walk up to somebody and say I'm going to DDOS this fucking stupid server as a joke, it will be taken seriously and you will be permabanned!",
	"We do not provide refunds for donations or packages such as VIP, PAC3 Access, etc. There are no change-of-mind refunds on sale items. AN does not have a contractual obligation to provide donation packages. Donation packages can be revoked, and art is subject to change!",
	"Please keep in mind that the staff has the final say; if they tell you to stop, you must stop. Otherwise, you can be warned! NOTICE!",
	"No concentration camps or inappropriate structures. (Racist, pornographic, bashing of religions, etc are not tolerated) Stick figures are allowed. Maybe penis statues in the forest!",
	"Animatronics cannot exit the Restaurant. They cannot chase players outside the restaurant, but they can do /me grabs the child before they leave the restaurant!!",
        "Do not disclose the personal information of another person, such as an address, phone, geographical location, photos, or other personally identifying information, without explicit consent from the person!",
	"No offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
        "Do not degrade/harass a person based on gender, age, race, sexuality, or religious preference. -- This is 2022 not the 1940's and 50's!",
	"Please do Not contact staff about your application. Rejected Applications may be resubmitted with changes the staff team has requested in one week. If your application has not been responded to within 3 days, please contact us via Discord, Master Doge#0192 , QWERTY#8219 , Cookie12#5485 , 1noahdavid07#0418, Connor3462#3260!",
	"One-on-one verbal conversation between the staff member and party in a private channel, with an explanation of the infraction, and what next steps may be taken if the problem persists!",
	"Do NOT abuse props in any way, shape, or form. (prop-blocking, prop-killing, prop-bridging, and prop-spamming!",
	"Inappropriate behaviour with a minor (under 18) is strictly prohibited!",
	"Accidentally killing someone (crossfire) is not RDM unless on purpose, if someone does walk in the way that is allowed as long as you repay them. ( This rule also applies to Accidentally running someone over!",
	"Do not double-door (Double-dooring is when you place a fading door directly on top of another. This applies to world doors!",
	"You need to have a licence, which you can get from the MAYOR. Without it, you may be AOS. If seen with a gun out in public with it, you may not be AOS!",
	"Staff has the final say; if they tell you to stop, you must stop. Otherwise, you can/will be warned!",
	"Accidentally killing someone (crossfire) is not RDM unless on purpose. If someone does walk in the way, that is allowed as long as you repay them!",
	"When donating or purchasing from the AN servers, you agree that you are 18 years of age at minimum. If you are underage, you have to gain the consent of your parents or guardians to donate to or purchase anything from us. The policies and rules of the United Nations community are subject to change within due time. Donations sent to us by users/players are kept to pay for hosting, payment of our developers, and other things to keep the servers going!",
	"Do not undermine or disobey a staff member or their request—as long as it's within reason and does not break any other rule stated herein!",
	"No RDM, MRDM, VDM, etc. (Random Death Match, Mass Random Death Match, Vehicle Death Match!",
	"No metagaming or trying to take advantage of in-roleplay. It ruins the fun for those who take roleplaying seriously!",
	"All bases must have the dimensions of two players wide (shoulder to shoulder) and two players back/front (four players should at least be able to fit into this space in two pairs!",
	"Violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
        "All jobs (except children and co.) can own a defence firearm (1-handed) to protect their property, not to be used as an attacking weapon, and not be drawn when not (RP) threatened!"

];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
