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
