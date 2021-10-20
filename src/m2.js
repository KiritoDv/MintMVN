const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const app = express();

app.get('*', (req, res) => {
    const entry = req.url.substring(1).split('/');
    const group = entry.slice(0, entry.length - 3);
    const version = entry[entry.length - 2];
    const artifact = entry[entry.length - 1];
    const url = `https://libraries.minecraft.net/${group.join('/')}/${version}/${artifact.replace(/\.[^.]*$/,'').substring(0, artifact.length - `-${version}`.length - 4)}.jar`

    console.log(`================================`)
    console.log(`Request: ${req.url}`)
    console.log(`Group: ${group.join('.')}`)
    console.log(`Version: ${version}`)
    console.log(`Artifact: ${artifact}`)
    console.log(`Url: ${url}`)
    let tmp = artifact.replace(/\.[^.]*$/,'').replace(`-${version}`,'');
    if(url.endsWith('.pom')) {
        res.send(
           `<?xml version="1.0" encoding="UTF-8"?>
            <project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <modelVersion>4.0.0</modelVersion>
                <groupId>${group.join('.')}</groupId>
                <artifactId>${tmp.substring(0, tmp.length - `-${version}`.length)}</artifactId>
                <version>${version}</version>
            </project>`
        );
        return;
    }
    if(url.endsWith('.jar')) {
        fetch(url).then(tmp => {
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
        })
        return
    }
    res.sendStatus(404)
})

app.listen(3243, () => {
    console.log('Server is running on port 3243');
})