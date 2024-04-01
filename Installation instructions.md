1. Install Simhub from here: https://www.simhubdash.com/download-2/ <br>
  (if you want to enable controller mapper features you need the beta version of Simhub: <br>
  https://simhubdash.com/unofficial/SimHub.9.02.8b3_ControlMapper.zip)

2. Download RomainRob's plugin from here: https://drive.google.com/drive/folders/1AiIWHviD4j-_D-zgRrjJU1AFhJ_xmass <br>
![grafik](https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashboard/assets/62204936/1a906180-9130-4200-98c7-f4f3f20aef2a)

3. Copy both files to you Simhub installation folder (typically C:\Program Files (x86)\SimHub)

4. Enable the plugin in Simhub. Go to Settings --> Plugins tab and scoll down to "RSC - iRacing Extra Properties". Enable both switches. <br>
![grafik](https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashboard/assets/62204936/5f5fe857-5ce0-45aa-90c5-fe9a9f5c0ff9)

5. Set text chat messages here:
   ![grafik](https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashboard/assets/62204936/28b17cfb-05d8-4392-a093-ce72f2cc1b4c)

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


6. Make sure that in iRacing your shortcut for text chat is set to "t". <br>

7. Download latest release of this Dashboard including the config file Dons_settings.json. <br>
  Double click the  "Donutz.s.iRacing.Button.Dashbord.simhubdash"  file. This should install the Dashboard to Simhub.<br>
  Copy the "Dons_settings.json" file to C:\Program Files (x86)\SimHub\JavascriptExtensions (or wherever you installed Simhub).

8. Adjust details to your liking. In this Youtube video I show some of the mechanics how to configure the Dashboard:<br>
   https://www.youtube.com/watch?v=6EnJKe7mRkg (German language) <br>
   This describes it in one picture:<br>
   ![grafik](https://github.com/DonutzAndCoffee/Donutz-s-iRacing-Button-Dashboard/assets/62204936/1f29e82c-5db6-42bf-9fb6-41bde75d46d3)

   <br> <br> Just ping me if there are any questions.

   
   
