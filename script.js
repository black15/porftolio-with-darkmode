function switch_theme() {

        var setTheme = localStorage.getItem('theme');
        var mode = document.getElementById('mystyle');

        // if(setTheme == null){
        //         localStorage.setItem('theme', 'light.css')
        //         mode.href = setTheme
        // }
        // else {
        //         localStorage.setItem('theme', 'light.css')
        //         mode.href = setTheme
        // }

        if (mode.href.includes('dark.css')){
                mode.href = 'light.css'
        }
        else {
                mode.href = 'dark.css'
        }
        
}
