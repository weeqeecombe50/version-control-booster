function addFile(filename) {
    console.log('Datei hinzugefügt:', filename);
}

function commitChange(message) {
    console.log('Änderungen wurden mit der Nachricht committet:', message);
}

module.exports = { addFile, commitChange };