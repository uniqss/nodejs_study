// https://www.youtube.com/watch?v=V_Kr9OSfDeU

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location == 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Google').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processResponse => {
//     console.log(processResponse)
// }).catch(err => {
//     console.log(`err:${err}`)
// })

async function doWork() {
    try {
        // once javascript hits this [await] statement, it'll just leave this function, do other
        // work inside the program. And as soon as this makeRequest finishes executing, it will
        // come back into here, return the result into this [response] value.
        const response = await makeRequest('Google')
        console.log('Response Received')
        const processResponse = await processRequest(response)
        console.log(processResponse)
    } catch (err) {
        console.log(`err:${err}`)
    }
}

doWork()

/* 关于这种async的思考：
只能用于独立逻辑对象，比如电商平台中的每个用户是独立的，不会访问别人数据的情况。否则如果会有两个async同时交给系统
调度，可能会出现数据错乱。
第一、来自同一个玩家不同的async里面访问玩家自己的数据
第二、来自不同玩家的不同的async里面访问同一个玩家的数据，比如好友申请列表
 */