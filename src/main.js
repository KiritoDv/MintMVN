const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const app = express();

app.get('*', async (req, res) => {
    let entry = req.url.substring(1).split('/');
    let group = entry.slice(0, entry.length - 3);
    let version = entry[entry.length - 2];
    let artifact = entry[entry.length - 1].replace(/\.[^.]*$/,'').replace('-sources', '');
    let url = `https://libraries.minecraft.net/${group.join('/')}/${version.replace('-vrq', '')}/${artifact}`

    if(version.includes('-vrq')){
        url = url.slice(0, -(version.length + 1))
    }

    url += '.jar'

    if(req.url.endsWith('.pom')) {
        res.send(
           `<?xml version="1.0" encoding="UTF-8"?>
            <project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <modelVersion>4.0.0</modelVersion>
                <groupId>${group.join('.')}</groupId>
                <artifactId>${artifact.slice(0, -(version.length + 1))}</artifactId>
                <version>${version}</version>
            </project>`
        );
        return;
    }
    if(req.url.endsWith('.jar')) {
        const tmp = await fetch(url);

        console.log(`================================`)
        console.log(`Request: ${req.url}`)
        console.log(`Group: ${group.join('.')}`)
        console.log(`Version: ${version}`)
        console.log(`Artifact: ${artifact}`)
        console.log(`Url: ${url}`)
        console.log(`Status: ${tmp.status}`)
        if(tmp.status != 200){
            res.sendStatus(404)
            return;
        }

        res.writeHead(200, tmp.headers);

        tmp.body.pipe(res);
        tmp.body.on("error", (err) => {
            console.log("Error")
        });
        return
    }
    res.sendStatus(404)
})

app.listen(3242, () => {
    console.log('Server is running on port 3242');
})