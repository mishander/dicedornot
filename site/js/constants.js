"use strict";var _skillNames;function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var skills={StripBall:1,IncreaseStrength:2,IncreaseAgility:3,IncreaseMovement:4,IncreaseArmour:5,Catch:6,Dodge:7,Sprint:8,PassBlock:9,FoulAppearance:10,Leap:11,ExtraArms:12,MightyBlow:13,Leader:14,Horns:15,TwoHeads:16,StandFirm:17,AlwaysHungry:18,Regeneration:19,TakeRoot:20,Accurate:21,BreakTackle:22,SneakyGit:23,Chainsaw:25,Dauntless:26,DirtyPlayer:27,DivingCatch:28,DumpOff:29,Block:30,BoneHead:31,VeryLongLegs:32,DisturbingPresence:33,DivingTackle:34,Fend:35,Frenzy:36,Grab:37,Guard:38,HailMaryPass:39,Juggernaut:40,JumpUp:41,Loner:44,NervesOfSteel:45,NoHands:46,Pass:47,PilingOn:48,PrehensileTail:49,Pro:50,ReallyStupid:51,RightStuff:52,SafeThrow:53,SecretWeapon:54,Shadowing:55,SideStep:56,Tackle:57,StrongArm:58,Stunty:59,SureFeet:60,SureHands:61,ThickSkull:63,ThrowTeamMate:64,Unknown_65:65,WildAnimal:67,Wrestle:68,Tentacles:69,MultipleBlock:70,Kick:71,KickOffReturn:72,BigHand:74,Claw:75,BallChain:76,Stab:77,HypnoticGaze:78,Stakes:79,Bombardier:80,Decay:81,NurglesRot:82,Titchy:83,BloodLust:84,FanFavourite:85,Animosity:86},skillNames=(_skillNames={},_defineProperty(_skillNames,skills.StripBall,"Strip Ball"),_defineProperty(_skillNames,skills.IncreaseStrength,"ST+"),_defineProperty(_skillNames,skills.IncreaseAgility,"AG+"),_defineProperty(_skillNames,skills.IncreaseMovement,"MA+"),_defineProperty(_skillNames,skills.IncreaseArmour,"AV+"),_defineProperty(_skillNames,skills.Catch,"Catch"),_defineProperty(_skillNames,skills.Dodge,"Dodge"),_defineProperty(_skillNames,skills.Sprint,"Sprint"),_defineProperty(_skillNames,skills.PassBlock,"Pass Block"),_defineProperty(_skillNames,skills.FoulAppearance,"Foul Appearance"),_defineProperty(_skillNames,skills.Leap,"Leap"),_defineProperty(_skillNames,skills.ExtraArms,"Extra Arms"),_defineProperty(_skillNames,skills.MightyBlow,"Mighty Blow"),_defineProperty(_skillNames,skills.Leader,"Leader"),_defineProperty(_skillNames,skills.Horns,"Horns"),_defineProperty(_skillNames,skills.TwoHeads,"Two-Heads"),_defineProperty(_skillNames,skills.StandFirm,"Stand Firm"),_defineProperty(_skillNames,skills.AlwaysHungry,"Always Hungry"),_defineProperty(_skillNames,skills.Regeneration,"Regeneration"),_defineProperty(_skillNames,skills.TakeRoot,"Take Root"),_defineProperty(_skillNames,skills.Accurate,"Accurate"),_defineProperty(_skillNames,skills.BreakTackle,"Break Tackle"),_defineProperty(_skillNames,skills.SneakyGit,"Sneaky Git"),_defineProperty(_skillNames,skills.Chainsaw,"Chainsaw"),_defineProperty(_skillNames,skills.Dauntless,"Dauntless"),_defineProperty(_skillNames,skills.DirtyPlayer,"Dirty Player"),_defineProperty(_skillNames,skills.DivingCatch,"Diving Catch"),_defineProperty(_skillNames,skills.DumpOff,"Dump-Off"),_defineProperty(_skillNames,skills.Block,"Block"),_defineProperty(_skillNames,skills.BoneHead,"Bone-Head"),_defineProperty(_skillNames,skills.VeryLongLegs,"Very Long Legs"),_defineProperty(_skillNames,skills.DisturbingPresence,"Disturbing Presence"),_defineProperty(_skillNames,skills.DivingTackle,"Diving Tackle"),_defineProperty(_skillNames,skills.Fend,"Fend"),_defineProperty(_skillNames,skills.Frenzy,"Frenzy"),_defineProperty(_skillNames,skills.Grab,"Grab"),_defineProperty(_skillNames,skills.Guard,"Guard"),_defineProperty(_skillNames,skills.HailMaryPass,"Hail-Mary Pass"),_defineProperty(_skillNames,skills.Juggernaut,"Juggernaut"),_defineProperty(_skillNames,skills.JumpUp,"Jump-Up"),_defineProperty(_skillNames,skills.Loner,"Loner"),_defineProperty(_skillNames,skills.NervesOfSteel,"Nerves Of Steel"),_defineProperty(_skillNames,skills.NoHands,"No Hands"),_defineProperty(_skillNames,skills.Pass,"Pass"),_defineProperty(_skillNames,skills.PilingOn,"Piling On"),_defineProperty(_skillNames,skills.PrehensileTail,"Prehensile Tail"),_defineProperty(_skillNames,skills.Pro,"Pro"),_defineProperty(_skillNames,skills.ReallyStupid,"Really Stupid"),_defineProperty(_skillNames,skills.RightStuff,"Right Stuff"),_defineProperty(_skillNames,skills.SafeThrow,"Safe Throw"),_defineProperty(_skillNames,skills.SecretWeapon,"Secret Weapon"),_defineProperty(_skillNames,skills.Shadowing,"Shadowing"),_defineProperty(_skillNames,skills.SideStep,"Side Step"),_defineProperty(_skillNames,skills.Tackle,"Tackle"),_defineProperty(_skillNames,skills.StrongArm,"Strong Arm"),_defineProperty(_skillNames,skills.Stunty,"Stunty"),_defineProperty(_skillNames,skills.SureFeet,"Sure Feet"),_defineProperty(_skillNames,skills.SureHands,"Sure Hands"),_defineProperty(_skillNames,skills.ThickSkull,"Thick Skull"),_defineProperty(_skillNames,skills.ThrowTeamMate,"Throw Team Mate"),_defineProperty(_skillNames,skills.WildAnimal,"Wild Animal"),_defineProperty(_skillNames,skills.Wrestle,"Wrestle"),_defineProperty(_skillNames,skills.Tentacles,"Tentacles"),_defineProperty(_skillNames,skills.MultipleBlock,"Multiple Block"),_defineProperty(_skillNames,skills.Kick,"Kick"),_defineProperty(_skillNames,skills.KickOffReturn,"Kick-Off Return"),_defineProperty(_skillNames,skills.BigHand,"Big Hand"),_defineProperty(_skillNames,skills.Claw,"Claw"),_defineProperty(_skillNames,skills.BallChain,"Ball and Chain"),_defineProperty(_skillNames,skills.Stab,"Stab"),_defineProperty(_skillNames,skills.HypnoticGaze,"Hypnotic Gaze"),_defineProperty(_skillNames,skills.Stakes,"Stakes"),_defineProperty(_skillNames,skills.Bombardier,"Bombardier"),_defineProperty(_skillNames,skills.Decay,"Decay"),_defineProperty(_skillNames,skills.NurglesRot,"Nurgles Rot"),_defineProperty(_skillNames,skills.Titchy,"Titchy"),_defineProperty(_skillNames,skills.BloodLust,"Blood-Lust"),_defineProperty(_skillNames,skills.FanFavourite,"Fan Favourite"),_defineProperty(_skillNames,skills.Animosity,"Animosity"),_skillNames);