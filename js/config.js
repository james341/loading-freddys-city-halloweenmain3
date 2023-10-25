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
	"image23.jpg",
	"image24.jpg",
	"image25.jpg",
	"image26.jpg",
	"image27.jpg",

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
	{ogg: "witchescrewccmusic.ogg", name: "Nations - Halloween Music"},
	{ogg: "thisishalloweenmusicb.ogg", name: "Nations - Halloween Music"},
	{ogg: "twojunkyhappyhalloweenmusicbox.ogg", name: "Nations - Halloween Music"},
	{ogg: "stopmedsaf.ogg", name: "Nations - Halloween Music"},
	{ogg: "homeundertale.ogg", name: "Nations - Halloween Music"},
	{ogg: "freehmusic.ogg", name: "Nations - Halloween Music"},
	{ogg: "junkyhappyhalloweenmusicbox.ogg", name: "Nations - Halloween Music"},
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
	"No GIFs or offensive material on text signs and keep your signs in role-playing. (no random signs) (Racist/Pornographic/Bashing of religions etc are not tolerated!",
	"Use common sense when being active and chatting on the server. Don't encourage people to break rules, don't spam staff, etc. Use your brain!",
        "Nazism Display of swastikas, the nazi salute, or other glorification of nazism is prohibited, even for roleplay purposes Server information!",
	"No Blatant RDM is if you blatantly RDM someone on their T round (like walk up and Juan Deag them in the face at the start of the round when they’re afk), you may be slain an extra time at the discretion of the staff online. Same goes for blatantly RDMing a D. (except Pao, fuck that guy, always RDM Pao when you see him!",
	"No harassing users We all have different opinions! That means we all have different ships, character options, etc. Healthy discussion is one thing; asking questions is normal, but getting mad at someone for their likes is unacceptable!",
	"Porn Sprays. Pretty self-explanatory. I’m saying that boobs are okay until I hear back from Tim, but absolutely no genitalia, whether it be anime, black and white “art”, animals, or whatever the hell else you freakin weirdos want to share with the world. This also applies to gore or “shock images” and things that look like porn sprays but really aren’t. For instance, three pigs were photographed and framed in such a way as to look like a man’s taint. It should be clear what is not allowed, and if you have to ask, the answer is probably no. Kids frequent this server. Keep that in mind!",
	"You may only advertise steal if you witness a PD raid, a bank raid, or a normal raid. When advertising Steal towards a Meth Cook or Weed Grower, you need to have seen the product they are "carrying" before-hand. Stealing without having the RP reason to do so will grant you a warning. We urge all cooks and growers to use clipping software and provide evidence should this issue ever escalate!",
	"Be kind and keep things polite. Harassment, sexism, racism, homophobia, transphobia, or hate speech of any kind will not be tolerated (username and pfp included). If you are being harassed or feel unsafe, direct message the Moderators or ModMail!",
	"Do not send a lot of small messages right after each other. These disrupt chat and make it hard to scroll through the server!",
	"Don't metagame don't use information from outside of RP, e.g., the killfeed or someone's job title, in roleplay!",
	"Bunnyhopping is prohibited in an RP scenario. Cheating in any form is prohibited; this includes scripts or exploiting server plugins!",
	"No doxing, sending malicious links and files, threatening, or blackmailing!",
	"Punishments for violating the rules stated below are based on a staff member's judgement. Judgements made by staff are final. If you feel your punishment was unfair, you can contact an administrator. Do not bother moderators about a punishment, as you may be muted for it!",
	"No discrimination. Anything that brings hate towards sexuality or race is strictly prohibited!",
	"Gangs or raiding parties may have the following: 1 Covert Thief, 2 Thieves (Master/Normal), 1 Marauder/Skullbreaker, 1 Gun Dealer (who must have a public shop), and 1 Bank Manager (who must have a public printer bank!",
	"You may not build above or block the NPCS in any way this includes building near it to restrict movement, building above it to limit your risk of selling it, or making a tunnel to the NPC to gain easy access for transactions. However, you may base near it!",
	"Don't fail RP read your job description and RP properly. e.g., do not break the law, disobey orders as a cop, or help the police as a thief (who is supposed to be a criminal!",
	"Do not roleplay in the spawn please. (e.g., mugging, completing hits, etc.) Do not run into spawn to avoid an RP situation!",
	"You may not have any kind of pixel-perfect gap to get through your base; this includes fading or keypad doors. This includes thin props, props facing vertically towards players, and props in the walls. You must be able to get through it with ease!",
	"The fading door limit is three doors protecting your Items. You may only require raiders to go through three doors to get to your entity or bank vault!",
	"You cannot make laws that hinder CPs from doing their job properly (i.e., cops cannot handcuff criminals, cannot use their stun guns, or all fines are $1) in conjunction with a law stating no arresting. PD is KOS to everyone, including CPs!",
	"Inappropriate usernames, pfps, banners, statuses, and bios are not allowed. Most violations of this rule will result in a kick on the first offence!",
	"Players may sell slots in their custom classes for in-game items such as in-game money, in-game weapons, or mutiny shop items, as long as the trade does not violate any other rules. When selling a custom class slot, there is a default 30-day period in place where a user cannot be removed from the class unless agreed upon by a member of Management+. If either party wants to extend this time, an agreement must be reached with evidence such as a video recording or screenshots of discussions",
	"Any harassment, disrespect, and discrimination will not be tolerated. Be civilised and do not target other players with actions in the game or in chat. This game is meant to be fun; anyone coming on with the intent of disrupting people's experiences will be treated harshly!",
	"Everyone gets mad, so showing your feelings will not get you punished. However, constantly complaining in chat or voice, and overall being a nuisance will get you punished!",
	"In order to kill your kidnapped victim, you must bring them to your base first. Kidnapping them in the street, and when they wake up in the street, killing them, there is still RDM!",
	"You may not abuse an advertisement warning to kill people for no valid reason, such as because the player has not done anything to provoke you. This is classified as RDM!",
	"I am a player, and I disagree with the actions of administration on AN. If you do not agree with a kick or ban reason, you can play on a different server. All Garry's Mod servers are hosted by the community. Your access to the community server(s) is at the discretion of their administration!",
	"A most well known threat to any gaming community, and all of Garry's Mod, and really all of video games, is the sexual abuse of children. We want to make sure AN is always a safe area for everyone to have fun and enjoy each other's company. We will be doing a few things to make this community safer for everyone. First, we will be adding additional rules to our site to prevent some instances of this. Secondly, we will be adding a dedicated report system for this type of abuse to ensure it gets the full attention it deserves. Thirdly, we will be partnering with CyberTip.org to properly investigate all reports we receive and make sure that law enforcement is properly informed of the situation!",
	"Once you’re arrested, you’re not allowed to go back and kill the government official that arrested you. Doing so will be considered RDM!",
	"Be respectful with all membersBe respectful to others , No death threats, sexism, hate speech, racism (NO N WORD, this includes soft N) > No doxxing, swatting, witch hunting!",
	"Staff members have the final say on all rule interpretations including concepts not explicitly stated in the rules!",
	"It is illegal to discharge any weapon other than a licenced pistol (only when used in self-defense) at all times. It is not illegal to possess weapons unless you have been caught by law enforcement brandishing them in public and/or discharging or using them with intent to commit a crime. However, it is illegal to enter or attempt to enter a government facility and/or bank with any weapons unless you are a member of law enforcement or bank security under the respective ban!",
	"Drama over someone or a group of people getting banned and moderation decisions strictly forbidden (if you want to report moderation abuse of their power, please report to admin!",
	"Treat everyone on the server with respect, including other server members, moderators, and creators, regardless of whether they are present at the time or not. If someone asks you to stop talking or joking about a certain topic, it is your responsibility to drop it!",
	"Laws cannot target an individual group, class, job, or person. Make your laws general and make them affect the entire town. You can restrict areas of the map, but not force people to be there!",
	"We have zero tolerance for hateful or discriminatory content. You WILL be banned if you support any of the following: Pro-shipping, Paedophilia, Grooming, Racism, Incest, Homophobia, Transphobia, etc. (the list will probably expand if any issues arise). This extends to jokes that are judged to have harmful intent and trolling!",
	"All sprays containing NSFW or other derogatory content are not allowed. Decisions based on this are up to staff interpretation. Admins, while they must follow server rules, have the final say on decisions!",
	"The base entrance rules change depending on how many players are in your base. Keypads must always be placed at eye level, and entrances have to be a minimum width of a storefront prop in length. Fading doors must have enough room between them to fit two players between them!",
	"Please do Not contact staff about your application. Rejected Applications may be resubmitted with changes the staff team has requested in one week. If your application has not been responded to within 3 days, please contact us via Discord, Master Doge#0192 , QWERTY#8219 , Cookie12#5485 , 1noahdavid07#0418, Connor3462#3260!",
	"Being in the police department past the lobby is AOS & breaking out prisoners or being armed with hostile intent past the lobby is KOS",
	"One-on-one verbal conversation between the staff member and party in a private channel, with an explanation of the infraction, and what next steps may be taken if the problem persists!",
	"Do NOT abuse props in any way, shape, or form. (prop-blocking, prop-killing, prop-bridging, and prop-spamming!",
	"Please do not demand the developers to rush with development or release a new updates and shit. We work as hard as we can and relax. Do not be impatient, or else you will be warned!",
	"Do not assist, encourage, or endorse the rule-breaking of others. Tricking, baiting, facilitating, inciting, or encouraging other players to violate the rules will result in a punishment equal to the offender!",
	"but after the gun dealer is paid he refuses to give the shipment of guns to the citizen and proceeds to keep the money for himself!",
	"You may not raid bases with building or roleplay signs or that obviously do not have any raidables. You must wait at least 10 minutes before raiding the same map base, player, or group again. Raids may not last longer than 10 minutes. Only some jobs are allowed to be raided. You may raid for any job to escape jail or kidnapping. When you change jobs, the F4 menu tells you if the job can!",
	"You are not allowed to raid or mug and may only kill people in self-defense. You must not interfere with raids or police business. Citizens should look for jobs to do so there is more variety for the entire server to RP with. Citizens should not be using two-handed weapons!",
	"You may rejoin a raid if members of your gang (criminals) or the police force (PD) are still present and your NLR timer has passed. You may not rejoin if everyone present has died or the raiding timer has expired!",
	"Offensive slurs, antisemitism, racism, homophobia, whiteshaming, and absolutely any promotion of extremist views or political ideologies are not allowed. Breaking this rule either leads to 4 days of isolation or an immediate ban!",
	"Do not exacerbate problems and do not succumb to provocations; do not make a scandal in any server chat because of a dispute or something else; instead, go to private messages and resolve all issues personally among yourself. If there are any problems, report them to the moderators!",
	"A base has a maximum occupancy of five players who must be in a party (or gang) or organisation together. (/orgs) This limit includes up to a maximum of one battle medic. The gangster and mafia sides are not required to be in a gang or organisation and may have as many members in a base together as the server permits. A base may wish to have players visit, but they cannot buy or store printers, bitminers, or job entities within your base. assist with countering a raid against your base unless they are a job that is allowed to counter active raids and are outside of the base at the time the raid is called and follow all Counter Raid Rules as set in the Raiding Rules above!",
	"Racism, Fascism, Nazism, and fanaticism, even in a joking manner, are not allowed. Using these words, even if you are not addressing anyone, will result in a penalty!",
	"No self-promotion without permission: Avoid sharing personal websites, social media, or promotional content without permission from the server admins!",
	"Be respectful and show respect to all members of the Server. Harassment and bullying are not allowed in any form and may result in being muted or kicked!",
	"Be respectful Treat others with respect and kindness. Avoid hate speech, discrimination, and harassment!",
	"Erotic roleplay, in any form, is strictly prohibited. This includes sexual harassment!",
	"Breaking rules outside of AN and having it reported to us may result in equal punishment here. You are responsible for your own actions. Examples: Excessive racism, excessive harassment, excessive bullying, causing harm to other community members or communities!",
	"The Server is not equipped to handle your personal issues. It's not that we don't care; it's just that we can't carry the weight of your problems. Do not talk about heavy psychological issues, and please seek help from a professional!",
	"no Intentional Delays Repeatedly leaving or suicidal to avoid encounters with anyone or purposely spawning in a role you do not want is not allowed. Such behaviour disrupts the flow of the game and negatively affects others' experiences!",
	"We sometimes may interpret the rules abit to ensure a fair outcome for all involved. If you have a complaint or feel you were treated unreasonably by a member of staff, please make a staff report on the forums. Please do not backseat, try to administrate, or attempt to take matters into your own hands. Furthermore, the member of staff has the final say, and any decision is absolute unless appealed on the forums!",
	"Do not exploit, hack, or otherwise avoid the game's intended limits. Using any external cheats or game exploits, including prop surfing, is against the rules!",
	"Raiding the server is against our terms of service. Any attempt to circumvent or bypass them can result in a permanent ban. As well as putting everyone in different chats with only trusted people, if you get cought raiding, that's an insta ban!",
	"Do not disclose the personal information of another person, such as an address, phone number, geographical location, photos, or other personally identifying information, without explicit consent from the person. In the event of a player or staff member breaking a rule associated with our Discord server, we will operate according to the guidelines set below when it comes to resolution and infraction consequences based on the severity of the infraction. The consequences below are in order of severity, and the staff has sole discretion to skip a lesser punishment if they deem the infraction to be more severe than what the consequence calls for. The individual(s) must be issued a written or verbal warning!",
	"You cannot steal work vehicles. You must drive vehicles in a reasonably roleplaying manner. Driving like an idiot will result in your car being deleted and/or you receiving a car ban for the rest of the session. Intentionally damaging or blowing up vehicles to annoy, injure, or kill other players without a valid RP reason is not allowed!",
	"We do not tolerate Illegal Activities Engaging in phishing, scamming, or any other illegal activities within the game or community is strictly prohibited. We maintain a zero-tolerance policy for such behaviour!",
	"Treat all fellow players with respect at all times. Harassment, toxicity, and baseless out-of-game accusations are strictly prohibited. Cheating or exploiting the game in any way is not allowed!",
	"Our goal is to have a clean, friendly, and enjoyable gaming environment for our players, which is why we have established a set of rules that we expect both players and staff to abide by at all times. Please review the list below, and as always, if you have any questions, feel free to contact a [AN] staff member!",
	"No pornographic, adult, or other NSFW material The idea behind the server is to provide a safe place for us to share art, videos, and other kinds of creative material—not  the aforementioned NSFW material!",
	"No advertisements No invasive advertising, whether it be for other communities or streams. You can post your content in the media channel in oir discord if it’s relevant and provides actual value for the community!",
	"The AN reserves the right, at any time without notice, to revise these rules and guidelines by updating this posting. Players and staff agree to be bound by such revisions and should periodically revisit this post to review the current rules and guidelines listed herein!",
	"Engaging in phishing, scamming, or any other illegal activities within the game or community is strictly prohibited. We maintain a zero-tolerance policy for such behaviour!",
	"Do not distribute or provide access to content involving the hacking, cracking, or distribution of stolen goods, pirated content, or accounts. This includes sharing or selling game cheats or hacks!",
	"Do not use this community to spam, manipulate engagement, or disrupt other people’s experiences, including trying to influence or disrupt conversations using bots, fake accounts, multiple accounts, or other automation. This includes purchasing or selling methods of artificially increasing membership, such as via advertisements or botting!",
	"Do not harass others or organize, promote, or participate in harassment. Disagreements happen and are normal, but making continuous, repetitive, or severe negative comments or circumventing a block or ban can cross the line into harassment and is not okay!",
	"We have zero tolerance for any kind of racism, homophobia, offensive slurs, being sexist, etc., which will result in a permanent ban!",
	"Automation in any form for the purpose of collecting money is strictly forbidden and may result in a severe deduction from your account!",
	"Users with exiled status earn it for going above and beyond to receive multiple permanent bans or if it's applied automatically via the Paypal IPN for lodging a dispute or chargeback on a transaction on this server. Exiled status is exclusively for users who have presented no redeemable qualities to deserve to participate on this server. To be exiled is to be an outcast never to return!",
	"Most jobs can own a defense firearm (1 handed) to protect their property, not to be used as an attacking weapon and not to be drawn when not (RP) threatened.19. Body-blocking is not allowed if you are doing it to troll or be annoying!",
	"No speaking or attempting to joke about DDOS or DOXING, even in role-play. This will, as stated in the General Rules, almost immediately result in a permanent ban!",
	"All KOS Rules Apply will be allowed, but only under the default KOS rules for that section. You can use this, or you can manually do your KOS Rules!",
	"For most minor offenses like holding an illegal weapon out, discharging a weapon in public, illegal parking, or possession of contraband, CP might choose to ticket a user rather than arrest them!",
	"Anyone with the exiled status has earned it for going above and beyond to receive multiple bans within our communities and/or have tried to lodge a dispute or even try to chargeback (as it's against our policy of refunds). Being exiled makes you an outcast Users who were exiled are not to be mentioned within the community!",
	"Animatronics cannot exit the restaurant. They cannot chase players outside the restaurant, but they can grab the child before they leave the restaurant!",
        "If someone is bullying or harassing you or breaking any server rules, you should report them to a staff member or moderator of the server. Giving us as much information as possible will speed up our response time!",
	"Animatronics can KOS you from 12:00 am to 5:00 am in-game time. - They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
        "We do not provide refunds for donations or packages such as VIP, PAC3 Access, etc. There are no change-of-mind refunds on sale items. AN does not have a contractual obligation to provide donation packages. Donation packages can be revoked, and art subjects can be changed!",
	"Our community enforces a strict zero-tolerance policy towards any form of paedophilia, child exploitation, or grooming. Any individual found engaging in, promoting, or supporting such activities will be immediately blacklisted and banned from our platforms!",
	"It Is forbidden to attack with a splash through props, walls, or outside the territory of the pizzeria. It is also forbidden to intentionally attack animatronics and plush toys while outside the territory of the pizzeria. It is forbidden to climb stairs (excl. Purple Guy in the guise of a security guard. Punishment: warn / Ban 10-20min!",
        "Offensive humor is NOT okay. With everything going on, with racism and other problems around the world, we (as staff) will be more strict if we need to be!",
        "Unless the voice channel owner specifically allows it, There is to be no use of soundboards in the voice channels. If you have been given permission, please don't spam noises, as others may not want to hear them all the time!",
	"Any violations within these rules will have our loyal fellow mods give you a warning, if you continue to violate the rules it will result in a kick out or if major, banned. So pls, try not to cause trouble. Have a good day!",
        "Breaking the NLR constitutes returning to the place of your death within or before five minutes of your death. This can also mean returning to and/or interacting with the player that killed you. If you are found breaking this rule, it’ll be dealt with by a verbal warning, a written warning, or a ban for repeat offenders. Returning to the vicinity of your base to watch the raiders (even if you aren’t interacting with them) counts as breaking NLR. Don’t do it!"

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
