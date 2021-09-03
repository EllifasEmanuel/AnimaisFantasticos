export default function initAccordion(){
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    if(accordionList.length){
        function activeAccordion(){
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }

        accordionList.forEach((e)=>{
            e.addEventListener('click', activeAccordion);
        })
    }
}