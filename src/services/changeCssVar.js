export const changeCssVar = theme => {
    const root = document.querySelector(':root');

    const cssVars = ['header', 'bg-img'];

    cssVars.forEach(el => {
        root.style.setProperty(
            `--theme-default-${el}`, 
            `var(--theme-${theme}-${el})`)
    })
}

// --theme-light-header: #dfe2df;
// --theme-dark-header: #ca6c6f;
// --theme-neitral-header: #cccc46;