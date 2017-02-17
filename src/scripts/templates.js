export const homeIntroducing = function(obj){
  let objContent = obj.map(function(listEl){
    return `<div class="introducing"><h1>Introducing:</h1></div>
            <div class="intros">
            <img src="${listEl.image}"/>
            <div class="titles">
            <h1>${listEl.artist}</h1>
            <h6>'${listEl.title}'</h6>
            </div>
            </div>`
  }).join('');
  return objContent;
};

export const playlist = function(obj){
  let objContent = obj.map(function(listEl){
    return `<div class="playlist">
            <img class="border" src="${listEl.image}"/>
            <div class="titles">
            <h3>${listEl.artist}</h3>
            <h6>'${listEl.title}'</h6>
            </div>
            </div>`
  }).join('');
  return objContent;
};

export const playlistRoute = function(obj, route){
  let finalStr = `<div class="second-nav">
                  <div class="routes new"><a href="#radio/${route}/morning">Morning</a></div>
                  <div class="routes new"><a href="#radio/${route}/afternoon">Afternoon</a></div>
                  <div class="routes new"><a href="#radio/${route}/evening">Evening</a></div>
                  </div>`;
  let objContent = obj.map(function(listEl){
    return `<div class="playlist">
            <img class="border" src="${listEl.image}"/>
            <div class="titles">
            <h3>${listEl.artist}</h3>
            <h6>'${listEl.title}'</h6>
            </div>
            </div>`
  }).join('');
  return finalStr + objContent;
};

export const playlistGreatest = function(obj){
  let objContent = obj.map(function(listEl){
    return `<div class="playlist">
            <img class="border" src="${listEl.image}"/>
            <div class="titles">
            <h3>${listEl.artist}</h3>
            <h6>'${listEl.title}'</h6>
            </div>
            </div>`
  }).join('');
  return objContent;
};
