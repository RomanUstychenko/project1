import {useState} from 'react';


const HideSetting = () => {


    const [SettingActive, setSettingActive] = useState(true);
    
    function hideSet () {
        setSettingActive(false)
      }
      function showSetting () {
        console.log(SettingActive)
        setSettingActive(true)
      }

    return {SettingActive, setSettingActive, hideSet, showSetting}
}

export default HideSetting;