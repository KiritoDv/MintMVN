const parser = [
    'com.mojang.netty:netty-1.6:1.6',
    'oshi-project.oshi-core:oshi-core-1.1:1.1',
    'net.java.dev.jna.jna:jna-3.4.0:3.4.0',
    'net.java.dev.jna.platform:platform-3.4.0:3.4.0',
    'com.ibm.icu.icu4j-core-mojang:icu4j-core-mojang-51.2:51.2',
    'net.sf.jopt-simple.jopt-simple:jopt-simple-4.6:4.6',
    'com.paulscode.codecjorbis:codecjorbis-20101023:20101023',
    'com.paulscode.codecwav:codecwav-20101023:20101023',
    'com.paulscode.libraryjavasound:libraryjavasound-20101123:20101123',
    'com.paulscode.librarylwjglopenal:librarylwjglopenal-20100824:20100824',
    'org.lwjgl.lwjgl.lwjgl:lwjgl-2.9.4-nightly-20150209:2.9.4-nightly-20150209',
    'org.lwjgl.lwjgl.lwjgl_util:lwjgl_util-2.9.4-nightly-20150209:2.9.4-nightly-20150209',
    'org.lwjgl.lwjgl.lwjgl_util:lwjgl_util-2.9.2-nightly-20140822:2.9.2-nightly-20140822',
    'com.paulscode.soundsystem:soundsystem-20120107:20120107',
    'io.netty.netty-all:netty-all-4.0.23.Final:4.0.23.Final',
    'com.google.guava.guava:guava-17.0:17.0',
    'org.apache.commons.commons-lang3:commons-lang3-3.3.2:3.3.2',
    'commons-io.commons-io:commons-io-2.4:2.4',
    'commons-codec.commons-codec:commons-codec-1.9:1.9',
    'net.java.jinput.jinput:jinput-2.0.5:2.0.5',
    'net.java.jutils.jutils:jutils-1.0.0:1.0.0',
    'com.google.code.gson.gson:gson-2.2.4:2.2.4',
    'com.mojang.authlib:authlib-1.5.21:1.5.21',
    'com.mojang.realms:realms-1.7.59:1.7.59',
    'org.apache.commons.commons-compress:commons-compress-1.8.1:1.8.1',
    'org.apache.httpcomponents.httpclient:httpclient-4.3.3:4.3.3',
    'commons-logging.commons-logging:commons-logging-1.1.3:1.1.3',
    'org.apache.httpcomponents.httpcore:httpcore-4.3.2:4.3.2',
    'org.apache.logging.log4j.log4j-api:log4j-api-2.0-beta9:2.0-beta9',
    'org.apache.logging.log4j.log4j-core:log4j-core-2.0-beta9:2.0-beta9',
    'tv.twitch.twitch:twitch-6.5:6.5',
    // 'tv.twitch.twitch-platform:twitch-platform-6.5-natives-windows-32:6.5',
    // 'tv.twitch.twitch-platform:twitch-platform-6.5-natives-windows-64:6.5',
    // 'tv.twitch.twitch-external-platform:twitch-external-platform-4.5-natives-windows-32:4.5',
    // 'tv.twitch.twitch-external-platform:twitch-external-platform-4.5-natives-windows-64:4.5',
    // 'net.java.jinput.jinput-platform:jinput-platform-2.0.5-natives-windows:2.0.5',
    // 'org.lwjgl.lwjgl.lwjgl-platform:lwjgl-platform-2.9.2-nightly-20140822-natives-linux:2.9.2-nightly-20140822',
    // 'org.lwjgl.lwjgl.lwjgl-platform:lwjgl-platform-2.9.4-nightly-20150209-natives-windows:2.9.4-nightly-20150209',
    // 'net.java.jinput.jinput-platform:jinput-platform-2.0.5-natives-linux:2.0.5'
]

parser.forEach((entry) => {
    const [group, artifact, version] = entry.split(':')
    console.log(`'${group}:${artifact.replace('@jar', '').replace(`-${version}`, '')}:${version}',`)
})