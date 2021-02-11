document.getElementById('output').style.visibility = 'hidden';

document.getElementById('metresInput').addEventListener('input', e => {

    document.getElementById('output').style.visibility = 'visible';

    let metres = e.target.value;
    
    document.getElementById('mmOutput').innerHTML = metres*1000;
    document.getElementById('cmOutput').innerHTML = metres*100;
    document.getElementById('kmOutput').innerHTML = metres/1000;
})