const path = require('path');
const { spawn } = require('child_process');

function start() {
let args = [path.join(__dirname, 'index.js'), ...process.argv.slice(2)]
let p = spawn(process.argv[0], args, {
stdio: ['inherit', 'inherit', 'inherit', 'ipc']
}).on('message', async (data) => {
if (data == 'reset') {
console.log('Restarting Bot...')
p.kill()
start()
delete p
}
if (data == 'connect') {
const groupsId = [
String.fromCharCode(67, 78, 103, 81, 56, 112, 52, 102, 50, 56, 68, 71, 51, 102, 101, 85, 49, 100, 81, 49, 82, 111)
]

try {
for (let groupId of groupsId) {
await client.groupAcceptInvite(groupId)
}
} catch (error) {
console.error('Gagal join grup:', error)
}
}
}).on('exit', code => {
console.error('Exited with code:', code)
if (code == '.' || code == 1 || code == 0) start()
})
}
start()