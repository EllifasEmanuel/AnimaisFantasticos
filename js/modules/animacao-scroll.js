export default function initAnimacaoScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections.length){
        function animaScroll(){
            sections.forEach((section)=>{
                const sectionTop = section.getBoundingClientRect().top - (window.innerHeight * 0.6);
                if(sectionTop < 0){
                    section.classList.add('ativo');
                }
            });
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}