if(location.href.endsWith('<%= active %>')) {
    const activeClass = document.getElementById("<%= active %>");
    activeClass.classList.add('active')
}

