"use strict";
function byId(e){return document.getElementById(e);}

window.addEventListener('load', onDocLoaded, false);

function onDocLoaded()
{
    byId('mFileInput').addEventListener('change', onChosenFileChange, false);
}

function onChosenFileChange(evt)
{
    var fileType = this.files[0].type;

    if (fileType.indexOf('audio') != -1)
        loadFileObject(this.files[0], onSoundLoaded);

    else if (fileType.indexOf('image') != -1)
        loadFileObject(this.files[0], onImageLoaded);

    else if (fileType.indexOf('video') != -1)
        loadFileObject(this.files[0], onVideoLoaded);
}

function loadFileObject(fileObj, loadedCallback)
{
    var reader = new FileReader();
    reader.onload = loadedCallback;
    reader.readAsDataURL( fileObj );
}

function onSoundLoaded(evt)
{
    byId('sound').src = evt.target.result;
    byId('sound').play();
}

function onImageLoaded(evt)
{
    byId('image').src = evt.target.result;
}

function onVideoLoaded(evt)
{
    byId('video').src = evt.target.result;
    byId('video').play();
}
