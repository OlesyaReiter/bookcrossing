function switchVisible() {
            if (document.getElementById('formLogin')) {

                if (document.getElementById('formLogin').style.display == 'none') {
                    document.getElementById('formLogin').style.display = 'flex';
                    document.getElementById('formContent').style.display = 'none';
                }
                else {
                    document.getElementById('formLogin').style.display = 'none';
                    document.getElementById('formContent').style.display = 'flex';
                }
            }
}