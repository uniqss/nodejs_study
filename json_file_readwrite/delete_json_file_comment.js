let cfg_json = "file_with_comment.json";


const fs = require('fs');

fs.writeFileSync(cfg_json + ".fixed", "");

fs.readFile(cfg_json, function (err, data) {
    if (err) throw err;

    const arr = data.toString().replace(/\r\n/g, '\n').split('\n');

    for (let line of arr) {
        if (line.includes("//")) continue;
        fs.writeFileSync(cfg_json + ".fixed", line + "\n", { flag: "a+" });
        //console.log(line);
    }
});
