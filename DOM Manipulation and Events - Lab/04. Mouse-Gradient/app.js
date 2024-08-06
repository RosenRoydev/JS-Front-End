function attachGradientEvents() {
    const gradientEl = document.getElementById('gradient');
    const result = document.getElementById('result');
    gradientEl.addEventListener('mousemove', (e) =>{
        const currentPosition = e.offsetX;
        const totalWidth = e.currentTarget.clientWidth;
        let percentage = Math.floor((currentPosition/totalWidth) * 100);
        result.textContent = `${percentage}%`
    });
    
}