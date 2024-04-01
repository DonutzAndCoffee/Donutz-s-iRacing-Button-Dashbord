# Donutz's iRacing Button Dashboard
DIBD is a SimHub dashboard / touchscreen button box especially created for iRacing. It is not meant to be a standalone dash but rather a support device for PitStop planning and other adjustments during your race. Such as controlling other SimHub dashboards, your wind engine etc.<br>
Most of the squares you find on these screenshots down below are touch buttons which let you for instance activate the tires you want to change during next pit stop or add fuel, switch tire compund etc. The header shows track and weather info including a little arrow indicating the development of the specific detail. The footer gives info about your performance against other drivers. Currently you can switch between [last lap time/tire compound] and [gap/stint/tire compound] of same car class. Just press the line to switch between these modes.<br>
<br>
<br>
Important things:
  - This is still a quite early stage of the project. So expect some bugs. ;) Also a few features are still do be implemented.
  - Please copy the Dons_settings.json file to SimHub\JavascriptExtensions folder and edit it to your likes.
  - To make this Dashboard working you need to install RomainRob's iRacing Extra Properties plugin for Simhub.
  - Also make sure that you map the key "t" as your text chat hotkey in iRacing.<br>
  - Make sure you install the fonts which are located in "_SHFonts" subfolder of this Dashboard.
  - Configure chat messages at Simhub "iRacing Extras" tab as described a bit further below.
  - To be able to use all features make sure you installed the latest beta version of Simhub. This enables you to map Dashboard buttons to the controller mapper.
<br>
<p>
<b>Installation instructions:</b> 

[here][https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashbord/blob/main/Installation%20instructions.md]

</p>
<br>
Here you can adjust a few color settings but also the label text of the "Dashboard Settings" page. More flexibility is planned for future releases.<br>
You need to map the buttons using the common SimHub methods. Don't hesitate to ping me if you need some guidance. I plan to create a tutorial video as well.<br>

<br><br><br>
RomainRob's iRacing Extra Properties plugin can be found here:<br>
https://www.simhubdash.com/community-2/dashboard-templates/romainrobs-collection/<br>
At "iRacing Extras" tab (part of RomainRob's plugin) you need to set these as JavaScript:<br>
Message 01:<br>

``` 
return '#fuel +' + Math.floor($prop('CarSettings_MaxFUEL') +1) + 'l$';
```

Message 07:<br>

```
return "#tc 1$";
```

Message 08:<br>

```
return "#tc 2$";
```

![grafik](https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashboard/assets/62204936/d60cb5cf-5f0d-4647-93eb-bcc49e67a5e2)

<br>

<br>
If you like you may spend me a coffee. :) https://www.buymeacoffee.com/donutz
<br><br><br>


Map the buttons like this:
![grafik](https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashboard/assets/62204936/77242bdb-2316-43e3-bd13-8a4251531908)

Some screenshots:<br>

![grafik](https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashboard/assets/62204936/d8ae6543-8baf-4c85-bd1e-c6526be9b2d9)
![grafik](https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashboard/assets/62204936/9e5bff85-98a0-4b1b-b4ab-df0da660ef1f)
![grafik](https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashboard/assets/62204936/935b6dc4-f940-4165-aaf9-b5a925c23809)
![grafik](https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashboard/assets/62204936/23b52a34-e3ab-43e6-9787-4363f3f6a009)
![grafik](https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashboard/assets/62204936/519516dd-bcfa-429d-b43f-f4db82f88867)



<b>Change log</b><br>
v2024.03.30:
- Complete redesign of all buttons.
- Added a few color options to json config file.<br>
<br>
v2024.03.27:<br>
- Track temp and air temp displays have been mixed up. This has been fixed now.<br>

<br>









[def]: https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashbord/blob/main/Installation%20instructions.md