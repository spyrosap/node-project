'use strict';
const sentences = [
{subject:'JAvascript', verb:'is', object:'great'}

]
function say({subject, verb,object}) {
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences){
  say(s);
}
