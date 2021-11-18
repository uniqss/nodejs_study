let cfg_json = "file_with_comment.json.fixed";

const fs = require('fs');

let raw_data = fs.readFileSync(cfg_json);
let json_obj = JSON.parse(raw_data);

//console.log(Object.keys(json_obj));
for (const [key, value] of Object.entries(json_obj)) {
    console.log(`key:${key}, value:${value}`)
}

