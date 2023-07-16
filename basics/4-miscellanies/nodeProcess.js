console.log(process.memoryUsage())
// {
//     rss: 26984448, heapTotal: 4636672,
//     heapUsed: 3637184, external: 215165, 
//     arrayBuffers: 12146;
// }

console.log(process.cpuUsage())
// { user: 30905, system: 27236; }

console.log(process.cwd())
// /Users/xiangjinyu/Documents/devMaterials/NodeCourse

console.log(process.versions)
// {
//   node: '16.13.1',
//   v8: '9.4.146.24-node.14',
//   uv: '1.42.0',
//   zlib: '1.2.11',
//   ...
// }

console.log(process.arch)
// arm64

console.log(process.platform)
// OS platform

console.log(process.env.NODE_ENV)
// environment variables ...

const osUser = process.env.USERPROFILE
  ? process.env.USERPROFILE // winOS
  : process.env.HOME       // macOS
console.log(osUser)
// os user info

console.log(process.argv)
// init arguments
// [
//   '/usr/local/bin/node',
//   '/Users/xiangjinyu/Documents/devMaterials/NodeCourse/nodeProcess.js'
// ];

console.log(process.pid)
// process id of current program

console.log(process.uptime())
// time from start of excution to exit of excution


// register events on process
process.on('exit', (code) => {
  console.log('exit with ' + code)
})
process.on('beforeExit', (code) => {
  console.log('before exit with ' + code)
})
console.log('program excuted')