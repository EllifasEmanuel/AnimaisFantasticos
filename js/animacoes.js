function initTabNav(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    if(tabMenu.length && tabContent){
        function activeTab(index){
            tabContent.forEach((section)=>{
                section.classList.remove('ativo');
            });
            const animacaoDirecao = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativo', animacaoDirecao);
        }

        tabMenu.forEach((itemMenu, index)=> {
            itemMenu.addEventListener('click', function(){
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAccordion(){
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
initAccordion();

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        const topoSection = section.offsetTop;

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        /*
        ------- FORMA ALTERNATIVA -------

        window.scrollTo({
            top: topoSection,
            behavior: 'smooth',
        });
        */
    }

    linksInternos.forEach((link)=>{
        link.addEventListener('click', scrollToSection);
    })
}
initScrollSuave();

function initAnimacaoScroll(){
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
initAnimacaoScroll();

function initModal(){
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    if(botaoFechar && botaoFechar && containerModal){
        function abrirModal(){
            containerModal.classList.add('ativo');
        }

        function fecharModal(){
            containerModal.classList.remove('ativo');
        }

        function cliqueForaModal(event){
            if(event.target === this){
                fecharModal();
            }
        }

        botaoAbrir.addEventListener('click', abrirModal);
        botaoFechar.addEventListener('click', fecharModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}
initModal();

function initTooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    })

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);

        onMouseMove.tooltipBox = tooltipBox;

        this.addEventListener('mousemove', onMouseMove);

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }

    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
}
initTooltip();

function initDropDownMenu(){
    const dropDownMenus = document.querySelectorAll('[data-dropdown]');
    dropDownMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent =>{
            menu.addEventListener(userEvent, handleClick)
        })
    })
    function handleClick(event){
        this.classList.toogle('active')
    }
}
initDropDownMenu();