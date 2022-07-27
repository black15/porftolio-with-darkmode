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
                mode.href = setTheme
                localStorage.setItem('theme', 'light.css')
        }
        else {
                mode.href = setTheme
                localStorage.setItem('theme', 'light.css')
        }
        
}
