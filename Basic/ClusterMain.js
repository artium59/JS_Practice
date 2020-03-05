/*
- node.js에서 병렬처리를 위해 제공되는 module
- 작업 하나의 단위를 worker라고 부른다.
- cluster module 생성 후 fork method를 호출하면 worker 하나가 생성되며,
  필요한 만큼 worker를 생성해 병렬처리를 하면 된다.
- 보통 cpu 코어의 개수만큼 worker를 발생시켜 병렬처리를 한다.
 */

var cluster = require('cluster');

// round robin 방식으로 scheduling
cluster.schedulingPolicy = cluster.SCHED_RR;

if (cluster.isMaster) {
    // fork가 성공하면 online event 발생
    cluster.fork();
    cluster.fork();
    cluster.fork();

    cluster.on('online', function (worker) {
        for (var i = 0; i < 10; i++)
            console.log(worker.process.pid, "동작");
    });
}
